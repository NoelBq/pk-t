# 🚀 Poke Test

## 🏁 Getting Started

### 📦 Install Dependencies

```zsh
yarn install
```

### 🔑 Configure environment variables

Copy `.env.example` to `.env.local` and set the missing environment variables.

🖥️ Start the development server

```zsh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🐳 Docker Setup

To set up the development environment using Docker, follow these steps:

Prerequisites
Ensure you have Docker and Docker Compose installed on your machine. You can download and install them from the Docker website.

Build and Start the Development Environment
Use Docker Compose to build and start the development environment:

```
docker-compose -f docker-compose.dev.yml up --build
```

### 🚀 Deployment and Checks

Deploys are automatically handled by GitHub Actions. Before pushing, run:

```zsh
yarn build
yarn test
yarn typecheck
yarn lint
```

or use all-in-one check:

```zsh
yarn build-test-typecheck-lint
```

## 🔗 Useful Project Links

API:

- https://pokeapi.co/docs/v2

## 📚 Primary Libraries

- NextJS - https://nextjs.org/
- Axios (Api Calls) - https://github.com/axios/axios
- Material UI - https://mui.com/
- Minimal UI Template - https://minimals.cc/

### 🧱 Components

The components under `app/components` should be UI only and reusable. Each component should have its own folder with a
`index.ts` + a very simple `.test.ts` + the component file.

This helps ensure that the components at least renders, and that we can see how it behaves outside the app so that new
devs can easily see all the components available.

### 🏠 Layouts

Layouts are a special type of component meant to wrap the whole page. Different from `components/` that are UI only.

### 🎨 Theme

The `src/theme` folder configures the Material UI theme. These configurations come mostly from the [Minimal UI Template](https://minimals.cc/)

## 🛠️ Development

### 🎨 Prettier

We use prettier to format the files + `@trivago/prettier-plugin-sort-imports` to automatically sort the imports.

### 🔍 Eslint

We use [AirBnb's](https://www.npmjs.com/package/eslint-config-airbnb) ESLint Typescript rules + prettier rules for linting
the project.

You can lint the whole project with `yarn lint`.

## 🎨 Design

## 🧪 Testing

We use [Jest](https://jestjs.io/) for unit testing.

To run tests in watch mode, use:

```
yarn test --watch
```

ℹ️ This command will start Jest in watch mode, which automatically reruns tests related to changed files
