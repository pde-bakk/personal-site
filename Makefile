DOCKER_COMPOSE_FILE=docker-compose.yml

ifdef PROD
	DOCKER_COMPOSE_FILE=docker-compose-prod.yml
endif

start:
	docker-compose -f $(DOCKER_COMPOSE_FILE) start

up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up --detach --build

down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

stop:
	docker-compose -f $(DOCKER_COMPOSE_FILE) stop
