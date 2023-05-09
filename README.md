# Consulting Wizard

A consultancy application connecting students and alumnis

## Necessary Extensions

- Prettier
- Eslint

## Tooling

| Module | Framework |
| --- | --- |
| Database | MongoDB |
| Backend| Express |
| Frontend | React |
| Authentication | firebaseAuth |
| UI | Material UI |
| State Management | ReactContext |
| REST | Axios + react-query |

## Running Dev Environment

Clone the repository to your local machine:

```bash
git clone https://github.com/millionhz/consulting-wizard
```

Install dependencies:

```bash
cd consulting-wizard/server && npm install
cd ../client && npm install
```

Start the server:

```bash
cd ../server && npm run dev
```

Start the client:

```bash
cd ../client && npm run dev
```

## Environment Variables

The following is the schema for the environment variables used in the server.

| Variable Name | Description |
| --- | --- |
| FIREBASE_SERVICE_ACCOUNT | The Firebase service account credential in the form of a JSON file. |
| DB | The name or connection string of the database. |
| EMAIL | The email address for email verification. |
| PASSWORD | The password to authenticate with the email account. |
