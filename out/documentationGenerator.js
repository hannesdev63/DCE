"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocs = generateDocs;
function generateDocs(compose) {
    let markdown = "# Docker Compose Documentation\n\n";
    const services = compose.services || {};
    if (Object.keys(services).length === 0) {
        return markdown + "No services found.\n";
    }
    // Create table header
    markdown += "| Service | Image | Ports | Environment | Volumes | Networks |\n";
    markdown += "|---------|-------|-------|-------------|---------|----------|\n";
    for (const [name, service] of Object.entries(services)) {
        const image = service.image ? `\`${service.image}\`` : "-";
        const ports = service.ports
            ? service.ports.map((p) => `\`${p}\``).join("<br>")
            : "-";
        const environment = service.environment
            ? Object.entries(service.environment).map(([k, v]) => `\`${k}=${v}\``).join("<br>")
            : "-";
        const volumes = service.volumes
            ? service.volumes.map((v) => `\`${v}\``).join("<br>")
            : "-";
        const networks = service.networks
            ? (Array.isArray(service.networks)
                ? service.networks.map((n) => `\`${n}\``).join("<br>")
                : Object.keys(service.networks).map((n) => `\`${n}\``).join("<br>"))
            : "-";
        markdown += `| **${name}** | ${image} | ${ports} | ${environment} | ${volumes} | ${networks} |\n`;
    }
    markdown += "\n";
    return markdown;
}
//# sourceMappingURL=documentationGenerator.js.map