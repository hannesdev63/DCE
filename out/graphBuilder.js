"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGraph = buildGraph;
function buildGraph(compose) {
    let mermaid = "graph TD\n";
    const services = compose.services || {};
    const networks = new Set();
    // Collect all networks
    for (const [name, service] of Object.entries(services)) {
        if (service.networks) {
            if (Array.isArray(service.networks)) {
                service.networks.forEach((n) => networks.add(n));
            }
            else {
                Object.keys(service.networks).forEach((n) => networks.add(n));
            }
        }
    }
    // Add services as nodes
    for (const [name, service] of Object.entries(services)) {
        const ports = service.ports ? ` :${service.ports[0].split(':')[0]}` : '';
        mermaid += `    ${name}[${name}${ports}]\n`;
    }
    // Add network nodes
    networks.forEach(network => {
        mermaid += `    ${network}{{${network}}}\n`;
    });
    // Add connections
    for (const [name, service] of Object.entries(services)) {
        if (service.networks) {
            const serviceNetworks = Array.isArray(service.networks)
                ? service.networks
                : Object.keys(service.networks);
            serviceNetworks.forEach((network) => {
                mermaid += `    ${name} --- ${network}\n`;
            });
        }
    }
    return mermaid;
}
//# sourceMappingURL=graphBuilder.js.map