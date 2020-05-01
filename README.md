# Sandbox NodeJS

> Example of sandbox executor

## Summary :memo:

- [Prerequisites](#Prerequisites)
- [Installing](#Installing)
- [Proof of concepts](#proof-of-concepts)
- [Contributing](#Contributing)
- [License](#License)

## Getting Started :computer:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [NodeJS](https://nodejs.org/en/download/) already installed to follow the nexts steps.

### Installing

A step by step series of examples that tell you how to get a development env running

Cloning project

```bash
git clone https://github.com/thierrysantos/sandbox-example.git
```

Installing project depencies

```bash
yarn
# or 
npm install
```

Start project

```bash
yarn start
# or
npm start
```

## Proof of concepts :clipboard:

You need to clone the [Sandbox API](https://github.com/thierrysantos/sandbox) and start it.

After do the step above you need to do a POST to /executor endpoint in sandbox api with the following body parameters.

```json
{
	"source": "git",
    "origin": "https://github.com/thierrysantos/sandbox-example.git",
	"startCommand": "npm start",
	"image": "node:12"
}
```
 
## Authors :pencil2:

* **Thierry Santos** - *Initial work* - [Thierry Santos](https://github.com/thierrysantos)

See also the list of [contributors](https://github.com/thierrysantos/sandbox/contributors) who participated in this project.

## License :newspaper:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details