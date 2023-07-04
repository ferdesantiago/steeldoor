## Running the database

```bash
$ docker build -t mysql-database .
$ docker run -d --name mysql-container -p 3306:3306 mysql-database
```