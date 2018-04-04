[![CircleCI](https://circleci.com/gh/biodunch/birthdates-api.svg?style=svg)](https://circleci.com/gh/biodunch/birthdates-api)
## Setting up with Docker

#### Clone the project:
`git clone url`

`cd birthdates-api`

Be sure you have docker and docker-compose installed on your pc, if not grab it [here](https://www.docker.com/get-docker)

## Using the API
* Rename `.env.example` to `.env` and update with your custom configs
* Login or Create an Auth0 account
* Create an `API` client from the `API` section of your Auth0 dashboard
* Grab your credentials and update the auth0 section of the `.env` file

## Fire up the container & services!

`docker-compose up -d`

The command above starts the app container and services in the background.

To view the app logs, get the `container_id` with `docker ps` then `docker log -f {container-hash}`.

Go to the `API` section of your dashboard, go to the `Test` tab and pick your `access token` to make calls to protected endpoints.

Yass! You are good to go!