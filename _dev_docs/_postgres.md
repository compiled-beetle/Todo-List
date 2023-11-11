# postgreSQL

[docs](https://wiki.archlinux.org/title/PostgreSQL)

```bash
# install + init setup
yay -S postgresql

sudo -u postgres initdb --locale en_US.UTF-8 -D /var/lib/postgres/data

systemctl start postgresql
systemctl enable postgresql
systemctl status postgresql

sudo su - postgres
psql -c "alter user postgres with password 'password'"
```

```bash
# run
sudo su - postgres
psql
# \help
```

```sql
CREATE DATABASE elecctro
WITH
    OWNER = postgres;

\c elecctro

SET timezone = 'Europe/Lisbon';

CREATE TABLE IF NOT EXISTS "todos" (
    "id" SERIAL PRIMARY KEY,
    "state" VARCHAR(20) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL default NOW(),
    "completed_at" TIMESTAMPTZ NULL
);

\dt
```
