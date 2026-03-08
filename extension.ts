import * as vscode from "vscode"

export class ComposeTreeProvider implements vscode.TreeDataProvider<any>{

services:any[]

constructor(services:any[]){
this.services = services
}

getTreeItem(element:any){

return new vscode.TreeItem(element.name)

}

getChildren(){

return this.services

}

}