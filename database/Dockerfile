FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mi_base_de_datos
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
