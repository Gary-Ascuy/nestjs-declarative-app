
build-clients:
	openapi-generator-cli generate -i ./protocols/petstore.yaml -g typescript-nestjs -o generated-sources/clients/petstore
