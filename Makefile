REGISTRY=smalvik
IMAGE_TAG_PREV=0.0.0
IMAGE_TAG=0.1.0
HOST=94.228.117.129
PORT=22
BUILD_NUMBER_PREV=0.0.0
BUILD_NUMBER=0.1.0

up: docker-up
down: docker-down

docker-up:
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up --build -d

docker-down:
	docker compose down --remove-orphans

build-dev: build-gateway build-frontend build-backend

build-gateway:
	docker --log-level=debug build --pull --file=gateway/docker/production/nginx/Dockerfile --tag=${REGISTRY}/nxa-tgb-gateway:${IMAGE_TAG} gateway/docker/production/nginx

build-frontend: 
	docker --log-level=debug build --pull --file=frontend/Dockerfile --tag=${REGISTRY}/nxa-tgb-frontend:${IMAGE_TAG} frontend

build-backend: 
	docker --log-level=debug build --pull --file=backend/Dockerfile --tag=${REGISTRY}/nxa-tgb-backend:${IMAGE_TAG} backend

push-dev: push-gateway push-frontend push-backend

push-gateway:
	docker push ${REGISTRY}/nxa-tgb-gateway:${IMAGE_TAG}

push-frontend:
	docker push ${REGISTRY}/nxa-tgb-frontend:${IMAGE_TAG}

push-backend:
	docker push ${REGISTRY}/nxa-tgb-backend:${IMAGE_TAG}

deploy-dev:
	ssh ${HOST} -p ${PORT} 'cd nxa-tgb-lts && docker compose -f docker-compose-prod.yaml down --remove-orphans'
	ssh ${HOST} -p ${PORT} 'cd nxa-tgb-lts && docker compose -f docker-compose-prod.yaml pull'
	ssh ${HOST} -p ${PORT} 'cd nxa-tgb-lts && docker compose -f docker-compose-prod.yaml up --build --remove-orphans -d'