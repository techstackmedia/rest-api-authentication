# Installation

## Steps

Run the following commands in your terminal:

Clone the repository to your project directory.

```bash
git clone https://github.com/techstackmedia/rest-api-authentication.git
```

Install all packages and include `node_modules` to your project:

```bash
npm install
```

Run the server
- with nodemon

```bash
npm start
```
- without nodemon (with node)

```bash
npm dev
```
Debug for development included in both cases

# Testing 
Testing the server
- Install [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download) to test your routes based on request on the server.
- Download and connect to mongoDB with either [Compass](https://www.mongodb.com/products/compass) or [Atlas](https://www.mongodb.com/cloud/atlas/register). 

# Ignored Files

Include the following files:

`/bin/.env`

Replace each placement, `<...>` with their actual values.

```
DATABASE=<databasename>
PASSWORD=<password>
USERNAME=<username>
PORT=<port>
NODE_ENV=development
```

# prettierrc
Prettier prettifies your code but you can override the default configuration of prettier. See the example below:
  
`.prettierrc`

```json
{
  "singleQuote": true,
  "printWidth": 79,
  "arrowParens": "avoid"
}
```
Read more on [prettier documentation](https://prettier.io/docs/en/options.html).

# eslintrc
If your want suggestions on your code for better code practice and linting (highlighing/checking) of errors and warning with ease then eslint is the way. See the example below:

`.eslint`

```json
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "off",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next|val" }]
  }
}
```
Read more on [eslint documentation](https://eslint.org/docs/user-guide/configuring/).
