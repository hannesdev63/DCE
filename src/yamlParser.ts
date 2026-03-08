import * as yaml from "js-yaml";

export function parseCompose(text: string): any {

    const data = yaml.load(text);

    return data;
}