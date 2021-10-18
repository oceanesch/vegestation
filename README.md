# Vegestation

This project aims to help people finding food services (restaurants, markets,
groceries) that match their food preferences.

## Prerequisites

In order to be able to run this project, you will need:

- Nodejs 16.
- Npm 7.
- Docker & Docker compose
- The nx command installed globally. You can install it with
  `npm install -g nx`.

## Installation

- Clone the repository and move inside the project's folder.
- Install dependencies: `npm install`.
- Generate the prisma client: `npm run generate`.
- Start the docker containers the project depends on: `docker-compose up -d`.
- Start the api: `nx serve api`.
- Start the front: `nx serve front`

## Command cheat sheet
