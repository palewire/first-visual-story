UV := uv run

.PHONY: docs


docs:
	rm -rf tutorial/_build
	cd tutorial && uv run make livehtml