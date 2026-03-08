export function generateMarkdown(services:any[]){

let md = `# Docker Compose Documentation\n\n`

for(const service of services){

md+=`## ${service.name}\n`

if(service.ports.length){

md+=`**Ports**\n`

service.ports.forEach(p=>{

md+=`- ${p}\n`

})

}

if(service.networks.length){

md+=`\n**Networks**\n`

service.networks.forEach(n=>{

md+=`- ${n}\n`

})

}

md+=`\n`

}

return md

}