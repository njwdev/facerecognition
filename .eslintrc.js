module.exports = {


    "extends": "standard",
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "parser": "babel-eslint",
     "parserOptions": {
        "ecmaFeatures": {
          "jsx": true,
          "modules": true
        }},
    "env": {
    "browser": true,
    "node": true
  }
}
