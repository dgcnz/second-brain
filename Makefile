REMOTE ?= rpi
REMOTE_DIR ?= /var/www/brain.dgcnz.com

build:
	npx quartz build

deploy: build
	rsync -av --delete public/ $(REMOTE):$(REMOTE_DIR)

local-deploy: build
	npx http-server public -p 8080 -e html

