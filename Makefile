start:
	$(MAKE) -C playwright start

start-docker:
	$(MAKE) -C playwright start-docker

clean:
	$(MAKE) -C playwright clean

install:
	$(MAKE) -C playwright install

lint:
	$(MAKE) -C playwright lint
