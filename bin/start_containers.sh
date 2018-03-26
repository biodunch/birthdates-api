IMAGE_NAME="body101"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

# First check if our image has been built. If not, build it.
if [[ $(docker inspect --format='{{.RepoTags}}' ${IMAGE_NAME}) == "[${IMAGE_NAME}:latest]" ]]; then
    echo " ----- Web App Image Available for Use. -----"
else
    echo " ----- Web App Image Does Not Exist. Building Now. -----"
    docker build -t ${IMAGE_NAME} ${ROOT}
fi

echo " ----- Starting Up Infrastructure Containers -----"
docker-compose up -d

echo " ----- Using .env File from [${ROOT}] -----"
echo " ----- Starting Disposable Docker Container -----"

docker run \
    -i \
    -t \
    -p 3000:3000 \
    -v ${ROOT}:/src \
    --env-file=${ROOT}/.env \
    --network=body101_app_network \
    ${IMAGE_NAME}