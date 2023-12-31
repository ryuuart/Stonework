export default {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["standard-with-typescript", "prettier"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  root: true,
  "rules": {}
}
