# David-LeBlanc.com

> _**Hi there!**_
>
> _**I'm Dave.**_

This is my open source personal blog and portfolio site built using ReactJS hosted at [david-leblanc.com](https://david-leblanc.com/). If you find it useful, please give my repo a star. If you have any questions, I can be reached at github@david-leblanc.com.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS is required to run commands and scripts. Installation instructions can be found at [NodeJS.org](https://nodejs.org/).

Yarn 1.x is used as the package manager and to initiate scripts. You can install Yarn globably by running the command below.

```
npm install -g yarn
```

### Installing

Install all package dependencies.

```
yarn install
```

Development environment can now be started.

```
yarn start
```

React development tools are recommended regardless of the web browser that is used during development.

Storybook can be used to develop components in isolation.

```
yarn storybook
```

## Running the tests

A github will automatically run each of the following tests before allowing a PR to be merged. You can test all of the tests
below by running the following command.

```
yarn review
```

### Code quality tests

Code quality is verified using ESLint.

```
yarn eslint
```

If issues are found, you may try to automatically correct the issues.

```
yarn eslint:fix
```

Code quality for CSS styles are verified using Stylelint.

```
yarn stylelint
```

If issues are found, you may try to automatically correct the issues.

```
yarn stylelint:fix
```

### Test coverage (Integration and Unit)

All tests can be run using the test script.

```
yarn test
```

You can manually check TypeScript types and syntax.

```
yarn tsc
```

Manually run Jest tests that include react component (integration level) and axe (accessibility) test.

```
yarn jest
```

### Test coverage (End to End)

Automated end to end tests can be acheived with Cypress using the headless test script.

```
yarn cypress
```

End to end tests can be run against a locally running development instance as well.

```
yarn cypress:run
```

A full user interface can be opened for cypress for the project.

```
yarn cypress:open
```

## Deployment

Install all package dependencies.

```
yarn install
```

A complete build will be generated and placed in the ***dist*** folder.

```
yarn build
```

Storybook files can be generated for use on an external server.

```
yarn build:storybook
```

## Built With

- [Axe-Core](https://www.deque.com/axe/) - Accessibility testing tools
- [BabelJS](https://babeljs.io/) - JavaScript compiler
- [Cypress](https://www.cypress.io/) - End to End testing environment
- [Cypress Axe](https://github.com/component-driven/cypress-axe) - Accessibility testing for Cypress
- [ESLint](https://eslint.org/) - Code quality inspector
- [FormatJS](https://formatjs.io/) - Internationalization libraries
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Jest Axe](https://github.com/nickcolley/jest-axe) - Accessibility testing library for Jest
- [ReactJS](https://reactjs.org/) - UI library
- [React Helmet](https://github.com/nfl/react-helmet) - Document head manager
- [React Router](https://reactrouter.com/) - Routing and navigation library
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - API Library for React components
- [Storybook](https://storybook.js.org/) - UI development container
- [Styled-Components](https://styled-components.com/) - CSS component system
- [Stylelint](https://stylelint.io/) - CSS quality inspector
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language
- [Webpack](https://webpack.js.org/) - Static module bundler
- [Yarn](https://yarnpkg.com/) - Package management

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

Patch level is automatically updated on every merge into the develop branch.

## Authors

- **David LeBlanc** - _Initial work_ - [d-leb](https://github.com/d-leb)

See also the list of [contributors](https://github.com/d-leb/david-leblanc.com/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
