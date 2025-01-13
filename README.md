# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The repository is configured to automatically deploy `main` to [docs.feldera.com](https://docs.feldera.com).
The content for docs are in `feldera/docs`  which is a git submodule of [feldera/feldera](https://github.com/feldera/feldera).
Dependabot will create pull requests to update the submodule which need to be merged manually. In case the dependabot PR is
outdated (it is updated once a day), you can comment `@dependabot recreate` in the PR and dependabot will recreate it.
Make sure the build passes before merging the submodule PR.
