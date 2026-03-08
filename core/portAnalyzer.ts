export function detectPortConflicts(services:any[]){

    const usedPorts = new Map<string,string>()

    const conflicts:any[] = []

    for(const service of services){

        for(const port of service.ports){

            const host = port.split(":")[0]

            if(usedPorts.has(host)){

                conflicts.push({
                    port:host,
                    services:[usedPorts.get(host),service.name]
                })

            }

            usedPorts.set(host,service.name)

        }

    }

    return conflicts

}