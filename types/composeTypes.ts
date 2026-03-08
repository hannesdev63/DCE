export interface ComposeFile {
  services: Record<string, Service>
  networks?: Record<string, Network>
  volumes?: Record<string, Volume>
}

export interface Service {
  image?: string
  ports?: string[]
  networks?: string[]
  volumes?: string[]
  environment?: Record<string,string>
  depends_on?: string[]
}

export interface Network {
  driver?: string
}

export interface Volume {}