export function buildGraph(compose: any): string {

    let mermaid = "graph TD\n";

    const services = compose.services || {};
    const networks = new Set<string>();

    // Collect all networks
    for (const [name, service] of Object.entries<any>(services)) {
        if (service.networks) {
            if (Array.isArray(service.networks)) {
                service.networks.forEach((n: string) => networks.add(n));
            } else {
                Object.keys(service.networks).forEach((n: string) => networks.add(n));
            }
        }
    }

    // Add services as nodes
    for (const [name, service] of Object.entries<any>(services)) {
        const ports = service.ports ? ` :${service.ports[0].split(':')[0]}` : '';
        mermaid += `    ${name}[${name}${ports}]\n`;
    }

    // Add network nodes
    networks.forEach(network => {
        mermaid += `    ${network}{{${network}}}\n`;
    });

    // Add connections
    for (const [name, service] of Object.entries<any>(services)) {
        if (service.networks) {
            const serviceNetworks = Array.isArray(service.networks) 
                ? service.networks 
                : Object.keys(service.networks);
            
            serviceNetworks.forEach((network: string) => {
                mermaid += `    ${name} --- ${network}\n`;
            });
        }
    }

    return mermaid;
}