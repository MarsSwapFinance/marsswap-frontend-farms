# Contributing to the MARS ecosystem 🚀

Thanks for taking the time to contribute!

## Setup

Create a `.env.development.local` file at the root of the project. Add the following lines inside :

```
REACT_APP_CROWDIN_APIKEY = ""
REACT_APP_CROWDIN_PROJECTID = ""
```

You'll need this in order to get the i18n system to work. Contact a dev if you need these values.

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Projet structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Tests

Run tests with `yarn test`.
