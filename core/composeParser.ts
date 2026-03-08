import * as yaml from "js-yaml"
import { ComposeFile } from "../types/composeTypes"

export function parseCompose(content:string):ComposeFile{

    const parsed = yaml.load(content) as ComposeFile

    if(!parsed.services){
        throw new Error("No services found")
    }

    return parsed
}