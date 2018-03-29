![cf](https://i.imgur.com/7v5ASc8.png) Lab 31: Redux - Budget Tracker
======

## Configuration
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `build` script has been configured for building the app with webpack
  * a `watch` script has been configured for watching the app with webpack-dev-server
* **webpack.config.js**
* **babelrc**
* **src/** - contains frontend code
* **src/index.html**
* **src/main.js** - contains entire app
* **src/components** - contains app components (see list below for all components)
* **src/action**
* **src/reducer**
* **src/lib**
* **src/style**
* **src/style/main.scss**

## Installation
1. To install this application, download the files from this repository
2. `cd` to the repository directory and run `npm i`
3. Use `npm run watch` to run the app locally
4. Navigate to `localhost:<PORT>` to explore the app

## Application Details
* This app uses `React` and is comprised of the following components:

```html
<App />
  <Provider />
    <BrowserRouter />
      <Route />
        <Dashboard />
          <CategoryForm />
            <CategoryItem />
```

## Redux
This app also uses `Redux` with the following reducers: `CATEGORY_CREATE`, `CATEGORY_UPDATE`, and `CATEGORY_DESTROY`. Action creators are built for each interaction.