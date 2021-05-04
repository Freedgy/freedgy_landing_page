up-dev:
	sudo docker-compose up

up-prod:
	sudo docker-compose up -d

down:
	sudo docker-compose down -v

restart-dev:
	sudo docker-compose down -v
	sudo docker-compose up

restart-prod:
	sudo docker-compose down -v
	sudo docker-compose up -d

build:
	sudo docker-compose build

re-build:
	sudo docker-compose down -v
	sudo docker rmi freedgy/landing-page:${APP_VERSION}
	sudo docker-compose build

logs:
	sudo docker logs landing-page

ps:
	sudo docker ps

ps-a:
	sudo docker ps -a