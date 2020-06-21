VERSION=local
docker run --rm -it \
    -p 9080:80 \
    --env ENV='development' \
    --env BEATS_ELASTICSEARCH_HOST='dev-es.akc.org' \
    --env BEATS_ELASTICSEARCH_PORT="9200" \
    --env TELEGRAF_INFLUX_URI="http://dev-tick.akc.org:8086" \
    --env TELEGRAF_INFLUX_USER="tick_opr" \
    --env TELEGRAF_INFLUX_PASSWORD="xxxxxx" \
    --env PORT_registration-completion=8800 \
    --env LUCIEN_APP=registration-completion \
    --env LUCIEN_PROFILE=development \
    --env LUCIEN_ENDPOINT=$CONFIG_SERVER_URI \
    --env LOGS_PATH=/akcdata/web/logs \
    --env REDIS_HOST=tst-cache-redis.akc.org \
    --env REDIS_PORT=6379 \
    --env REDIS_SECRET=bret-development \
    -v type=bind,source=/akcdata/crate/shared-assets/,target=/akcapps/web/shared/html/ \
    doghub.akc.org/registration-completion:$VERSION