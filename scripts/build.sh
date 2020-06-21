VERSION=local
docker build -t doghub.akc.org/registration-completion:$VERSION --build-arg BUILD_DATE=$BUILD_DATE --build-arg BUILD_VERSION=$VERSION --build-arg COMMIT_ID=$GIT_COMMIT_HASH .