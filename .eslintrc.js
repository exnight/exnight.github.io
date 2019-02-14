module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
  "rules": {
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
  }],
    "linebreak-style": ["error", "windows"],
    "no-template-curly-in-string": 0,
    "react/jsx-max-props-per-line": 0,
    "object-curly-newline": 0,
  },
};
