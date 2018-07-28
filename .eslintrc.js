module.exports = {
    "extends": [
        "standard",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
        "max-len": ["error", 100],
        "no-unused-vars": ["error", { "args": "none" }]
    },
    "env": {
      "jest": true
    }
};
