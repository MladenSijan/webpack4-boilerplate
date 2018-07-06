# webpack-boilerplate

> An ES201X starter with common frontend tasks using [Webpack 4](https://webpack.js.org/) as module bundler and npm scripts as task runner.

## Setup
### Requirements

Node `">=5.0.0"` (use brew or install it from [here](http://nodejs.org/download/))

```bash
brew install node
```

### Clone the repository

*OSX & Linux*

```bash
git clone --depth 1 https://github.com/abrakadaaabra/webpack4-boilerplate.git && 
cd webpack4-boilerplate && rm -rf .git && git init
```

*Windows*

```bash
git clone --depth 1 https://github.com/abrakadaaabra/webpack4-boilerplate.git &&
cd webpack4-boilerplate && rd /s /q .git && git init
```

### Dependencies

```bash
npm install
```

## Configuration
It uses [webpack-merge](https://github.com/survivejs/webpack-merge) to merge the basic and development / production configurations that are stored in files:
* webpack.base.config.js
* webpack.dev.config.js
* webpack.prod.config.js


## Develop

```bash
npm run start
```

## Production

```bash
npm run build
```

## Features

### Webpack [loaders](https://webpack.js.org/loaders/):

* [Babel](https://babeljs.io/)
* [PostCSS](https://github.com/postcss/postcss)
* [Sass](http://sass-lang.com/)
* fonts via [file-loader](https://github.com/webpack-contrib/file-loader)
* optimised images via [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)

## Licence

[MIT](https://opensource.org/licenses/MIT) 
