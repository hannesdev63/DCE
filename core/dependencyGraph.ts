import { ComposeFile } from "../types/composeTypes"

export function buildDependencyGraph(compose:ComposeFile){

    const nodes:any[] = []
    const edges:any[] = []

    for(const [name,service] of Object.entries(compose.services)){

        nodes.push({
            data:{ id:name,label:name }
        })

        if(service.depends_on){

            for(const dep of service.depends_on){

                edges.push({
                    data:{
                        source:name,
                        target:dep
                    }
                })

            }

        }

    }

    return [...nodes,...edges]
}