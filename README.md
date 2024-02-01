Used commands

## Build & Deployment 

docker build -t kuzinvadym/react-docker-demo:latest --build-arg REACT_APP_BACKEND_HOST=backend-service REACT_APP_APP_VERSION=V1 .
docker push <repo>:<tag>