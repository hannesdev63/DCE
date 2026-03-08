# Change Log

All notable changes to the Docker Compose Documentation extension will be documented in this file.

## [1.0.0] - 2026-03-08

### Added

- Initial release of Docker Compose Documentation extension
- Auto-generate markdown documentation from docker-compose.yml files
- Create Mermaid network diagrams showing service relationships
- Save documentation to `docker-compose-docs.md` in the same folder
- Right-click context menu on docker-compose files in Explorer
- Command palette support for generating documentation
- Support for docker-compose.yml and docker-compose.yaml files
- Formatted table output with Service, Image, Ports, Environment, Volumes, and Networks
- Auto-open generated documentation after generation
- Error handling and user feedback messages

### Features

- Works with standard docker-compose file syntax
- Extracts service configurations (image, ports, environment, volumes, networks)
- Generates visual network topology diagrams
- Supports multiple network configurations
- Handles both array and object-style network definitions

## Future Releases

### Planned for v1.1.0

- [ ] Support for docker-compose profiles
- [ ] Export to multiple formats (HTML, PDF)
- [ ] Customizable template support
- [ ] Docker Compose configuration validation
- [ ] Support for extends and include features
- [ ] Interactive diagram viewer in VS Code

### Under Consideration

- [ ] Integration with Docker extension
- [ ] Real-time documentation preview
- [ ] Multi-file composition support
- [ ] Configuration templates
- [ ] Documentation search functionality
