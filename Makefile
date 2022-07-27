build-dev:
	cd client && $(MAKE) build
	cd server && $(MAKE) build

run-dev:
	docker-compose up