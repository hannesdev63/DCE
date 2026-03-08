import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import { parseCompose } from "./yamlParser";
import { generateDocs } from "./documentationGenerator";
import { buildGraph } from "./graphBuilder";

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand(
        "composeDocs.generate",
        async (uri?: vscode.Uri) => {

            let document: vscode.TextDocument;
            
            if (uri) {
                // Invoked from context menu
                document = await vscode.workspace.openTextDocument(uri);
            } else {
                // Invoked from command palette
                const editor = vscode.window.activeTextEditor;
                if (!editor) {
                    vscode.window.showErrorMessage("No active editor found");
                    return;
                }
                document = editor.document;
            }

            const text = document.getText();
            const filePath = document.uri.fsPath;
            const directory = path.dirname(filePath);

            try {
                const compose = parseCompose(text);
                const docs = generateDocs(compose);
                const graph = buildGraph(compose);

                // Combine docs and graph into markdown
                const markdown = `${docs}\n## Network Graph\n\n\`\`\`mermaid\n${graph}\`\`\`\n`;

                // Save to file
                const outputPath = path.join(directory, "docker-compose-docs.md");
                fs.writeFileSync(outputPath, markdown, "utf8");

                // Open the generated file
                const doc = await vscode.workspace.openTextDocument(outputPath);
                await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);

                vscode.window.showInformationMessage(
                    `Documentation saved to ${path.basename(outputPath)}`
                );
            } catch (error) {
                vscode.window.showErrorMessage(
                    `Failed to generate documentation: ${error}`
                );
            }
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}