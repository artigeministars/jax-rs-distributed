FROM postgres:latest

COPY ./conf/postgresql.conf /usr/local/etc/postgres/postgresql.conf
COPY ./initialDb/ /docker-entrypoint-initdb.d/

EXPOSE 5432

CMD postgres -c config_file=/usr/local/etc/postgres/postgresql.conf
