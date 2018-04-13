module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "strict": 0,
      "prefer-destructuring": ["error", {"object": false, "array": false}],
      "jsx-a11y/anchor-is-valid": 0,
      "react/prop-types": 0,
    },
    "globals": {
      "document": true,
      "window":  true
    },
    "parser": "babel-eslint"
};
