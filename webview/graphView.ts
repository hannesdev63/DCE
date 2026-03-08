import * as vscode from "vscode"

export function openGraph(context:vscode.ExtensionContext,data:any){

const panel = vscode.window.createWebviewPanel(

"composeGraph",
"Docker Compose Graph",
vscode.ViewColumn.Two,
{ enableScripts:true }

)

panel.webview.html = getHtml(data)

}

function getHtml(graph:any){

return `

<html>

<head>

<script src="https://unpkg.com/cytoscape/dist/cytoscape.min.js"></script>

</head>

<body>

<div id="graph" style="width:100%;height:600px"></div>

<script>

const graphData = ${JSON.stringify(graph)}

const cy = cytoscape({

container:document.getElementById("graph"),

elements:graphData,

layout:{ name:"cose" },

style:[

{

selector:"node",

style:{

label:"data(label)",
"background-color":"#2d8cf0"

}

}

]

})

</script>

</body>

</html>

`

}