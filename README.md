# Docker Compose Documentation

A VS Code extension that automatically generates comprehensive documentation and network diagrams from your `docker-compose.yml` files.

## Features

- 📋 **Auto-generates documentation** - Creates formatted markdown tables with all service configuration details
- 🔗 **Network visualization** - Generates Mermaid diagrams showing service-to-network relationships
- 📁 **File-based output** - Saves documentation as `docker-compose-docs.md` in the same directory
- 🖱️ **Right-click context menu** - Works directly from the file explorer on any docker-compose.yml file
- 📖 **Auto-open** - Generated documentation opens automatically for immediate viewing

## Installation

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Docker Compose Documentation"
4. Click Install

## Usage

### From Context Menu (Recommended)

1. Right-click any `docker-compose.yml` or `docker-compose.yaml` file in the Explorer
2. Select **"Generate Docker Compose Documentation"**
3. Documentation is automatically generated and opened

### From Command Palette

1. Open a `docker-compose.yml` file in the editor
2. Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
3. Type "Generate Docker Compose Documentation"
4. Press Enter

## Output Format

The generated `docker-compose-docs.md` includes:

### Documentation Table

A structured table containing:

- **Service** - Service name
- **Image** - Docker image used
- **Ports** - Exposed ports
- **Environment** - Environment variables
- **Volumes** - Volume mounts
- **Networks** - Connected networks

### Network Graph

A Mermaid diagram visualizing:

- Services as nodes
- Networks as grouped nodes
- Connections between services and networks

## Example Output

```markdown
# Docker Compose Documentation

| Service | Image | Ports | Environment | Volumes | Networks |
|---------|-------|-------|-------------|---------|----------|
| **web** | `nginx:latest` | `80:8080` | `NODE_ENV=production` | `/app:/app` | `frontend` |
| **api** | `node:18` | `3000:3000` | `DB_HOST=db` | - | `backend` |
| **db** | `postgres:15` | - | `POSTGRES_PASSWORD=secret` | `/var/lib/postgresql/data` | `backend` |

## Network Graph

\`\`\`mermaid
graph TD
    web[web]
    api[api]
    db[db]
    frontend{{frontend}}
    backend{{backend}}
    web --- frontend
    api --- backend
    db --- backend
\`\`\`
```

## Requirements

- VS Code 1.85.0 or higher

## Known Limitations

- Currently supports standard docker-compose YAML syntax
- Complex nested configurations may display as code blocks
- Environment variable interpolation is not resolved

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for version history.

## License

MIT - See [LICENSE](LICENSE) for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, feature requests, or questions, please visit:
[https://github.com/hannesdev63/dce/issues](https://github.com/hannesdev63/dce/issues)
