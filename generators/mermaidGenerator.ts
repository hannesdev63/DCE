export function generateMermaid(compose:any){

let diagram = `graph TD\n`

for(const [name,service] of Object.entries<any>(compose.services)){

    if(service.depends_on){

        for(const dep of service.depends_on){

            diagram += `${name} --> ${dep}\n`
        }

    }

}

return diagram

}