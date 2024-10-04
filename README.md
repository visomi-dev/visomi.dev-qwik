# visomi

visomi is a SaaS social network platform that allows users to create, share, and discover content.

## Table of Contents

- [Apps](#apps)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Stack](#stack)
- [Contributing](#contributing)
- [License](#license)

## Apps

- [CLI](./apps/cli/README.md)

## Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

## Getting Started

To get started with visomi, follow the instructions in the README.md file for each app. But first you need to install the project dependencies:

```bash
bun install
```

## Development

- To start the web site in development mode, run:

```bash
bun run website:serve
```

- To start the API RESTFUL server in development mode, run:

```bash
bun run web-server:serve
```

- To start the web app in development mode, run:

```bash
bun run web-app:serve
```

## Deployment

See [./docs/bootstrap.md](./docs/bootstrap.md) for deployment instructions.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Stack

- [Nx](https://nx.dev/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
