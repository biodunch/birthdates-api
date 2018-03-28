#!/bin/bash

IMAGE_NAME="body101"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

# First check if our image has been built. If not, build it.
if [[ $(sudo docker inspect --format='{{.RepoTags}}' ${IMAGE_NAME}) == "[${IMAGE_NAME}:latest]" ]]; then
    echo " ----- Web App Image Available for Use. -----"
else
    echo " ----- Web App Image Does Not Exist. Building Now. -----"
    sudo docker build -f ${ROOT}/Dockerfile -t ${IMAGE_NAME} ${ROOT}
fi

echo " ----- Starting Up Infrastructure Containers -----"
sudo docker-compose up -d

echo " ----- Using .env File from [${ROOT}] -----"
echo " ----- Starting Disposable Docker Container -----"

sudo docker run \
    -i \
    -t \
    -p 3000:3000 \
    -v ${ROOT}:/src \
    --env-file=${ROOT}/.env \
    --network=body101_app_network \
    ${IMAGE_NAME} \
    sh -c "npm i -g nodemon && bash"

echo " ----- EXITED from disposable container -----"
echo " ----- Removing Exited Containers. -----"

# Now grep through all containers and stop those that have been "exited". Only do that for our service.
sudo docker ps -a | grep Exited | awk '{ print $1,$2 }' | \
grep ${IMAGE_NAME} |  awk '{print $1 }' | xargs -I {} sudo docker rm {}