.PHONY: docs


docs:
	rm -rf readthedocs/_build
	cd readthedocs && pipenv run make livehtml