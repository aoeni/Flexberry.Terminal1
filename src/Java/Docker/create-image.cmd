docker build --no-cache -f SQL\Dockerfile.PostgreSql -t terminal1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t terminal1-java/app ../../..
