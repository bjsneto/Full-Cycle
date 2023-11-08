FROM mysql:5.7

RUN echo "[mysqld]\ninnodb_use_native_aio=0" > /etc/mysql/conf.d/disable-native-aio.cnf

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

COPY ./initialize_mysql/init.sql /docker-entrypoint-initdb.d/