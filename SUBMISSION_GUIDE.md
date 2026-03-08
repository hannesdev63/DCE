# VS Code Marketplace Submission Guide

Your Docker Compose Documentation extension has been successfully packaged and is ready for submission.

## Package Information

- **File**: `dcd-1.0.0.vsix`
- **Size**: ~11.8 KB
- **Version**: 1.0.0

## Pre-Submission Checklist

- [x] Extension compiled successfully
- [x] VSIX package created
- [x] README.md with usage documentation
- [x] CHANGELOG.md with release notes
- [x] LICENSE (MIT)
- [x] Icon (128x128 PNG)
- [x] package.json with metadata

## Steps to Submit to VS Code Marketplace

### 1. Create a Publisher Account
If you don't have one already:
- Visit https://marketplace.visualstudio.com/manage
- Sign in with your Microsoft account (create one if needed)
- Create a new publisher using a unique name

### 2. Create a Personal Access Token (PAT)
- Go to https://dev.azure.com/
- Create a new organization or use existing
- Go to User Settings → Personal access tokens
- Create a new token with:
  - Name: "VS Code Extension"
  - Scopes: Select "Marketplace" → "Manage" and "Publish"
  - Expiration: 1 year or custom

### 3. Install/Update vsce
```bash
npm install -g @vscode/vsce
```

### 4. Login to Marketplace
```bash
vsce login <publisher-name>
# Enter your PAT when prompted
```

### 5. Publish the Extension
```bash
vsce publish
# From within the project directory
```

Or publish directly:
```bash
vsce publish -p <personal-access-token>
```

### 6. Verify Publication
- Visit https://marketplace.visualstudio.com/items?itemName=<publisher-name>.docker-compose-docs
- Should appear within a few minutes

## Test Before Publishing

You can test the VSIX locally before publishing:

```bash
# Install the VSIX locally in VS Code
code --install-extension docker-compose-docs-1.0.0.vsix
```

## Updating the Extension

To publish a new version:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Compile: `npm run compile`
4. Package: `npx vsce package`
5. Publish: `vsce publish`

## Important Notes

- Update the `publisher` field in package.json with your actual publisher name
- Update the repository URL if applying to a GitHub repository
- The extension will be available in the marketplace within minutes
- Users can install it directly from VS Code extensions panel

## Support & Feedback

After publishing, monitor your extension page for:
- User reviews
- Bug reports
- Feature requests

## Additional Resources

- VS Code Extension Publishing: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- Marketplace Policies: https://code.visualstudio.com/api/references/extension-manifest
- VSCE Documentation: https://github.com/microsoft/vscode-vsce

---

**Ready to Publish?** Update the publisher name in package.json, then follow the steps above!
