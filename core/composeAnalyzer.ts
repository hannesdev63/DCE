import { ComposeFile } from "../types/composeTypes"

export function analyzeCompose(compose:ComposeFile){

    const services = Object.entries(compose.services)

    return services.map(([name,service]) => {

        return {

            name,

            ports: service.ports ?? [],

            networks: service.networks ?? [],

            volumes: service.volumes ?? [],

            environment: service.environment ?? {},

            depends_on: service.depends_on ?? []

        }

    })

}