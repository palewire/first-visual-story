.PHONY: docs


docs:
	rm -rf tutorial/_build
	cd tutorial && pipenv run make livehtml