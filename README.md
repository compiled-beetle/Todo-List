# Todo-List

Node.js, Hapi.js, Next.js, PostgreSQL

> remote git [repo](https://github.com/compiled-beetle/Todo-List)

## Elecctro Challenge (API)

### Tech Stack

-   use js es(6/7) grammer [see](http://node.green/)
-   use async/await
-   server -> node.js
-   database -> postgreSQL
-   packages:
    -   [hapi](https://hapi.dev/)
    -   [knext](http://knexjs.org/)
-   dev packages:
    -   nodemon
    -   eslint
    -   [eslint-plugin](https://hapi.dev/module/eslint-plugin/)
-   data validation -> [joi](https://joi.dev/)
-   api docs -> [hapi-swagger](https://github.com/glennjones/hapi-swagger)

### REST API Routes

#### POST/todos

-   request body -> `{"description": "Buy milk at the store."}`
-   action -> add `{"id":"123", "state":"INCOMPLETE", "createdAt":"2021-05-12T07:23:45.678Z", "completedAt":"null"}`
    -   response -> `{"id":"123", "state":"INCOMPLETE", "description": "Buy milk at the store.", "createdAt":"2021-05-12T07:23:45.678Z", "completedAt":"null"}`

#### GET/todos

-   request -> `GET/todo/<id>`
    -   response -> todo object
-   request -> `GET/todos?filter=<STATE>&orderBy<FIELD>`
    -   filter=<STATE>
        -   parameters:
            -   `"ALL", "COMPLETE", "INCOMPLETE"`
            -   default -> `"ALL"`
    -   orderBy<FIELD>
        -   parameters:
            -   `"DESCRIPTION", "CREATED_AT", "COMPLETED_AT"`
            -   default -> `"CREATED_AT"`
    -   response -> filtered |+ ordered object array

#### PATCH/todos

-   request -> `PATCH/todo/<id>` + body -> `{"state":"COMPLETE", "description": "Buy milk at the store."}`
    -   verify -> if exists else response is 404 error
    -   actions -> change `"state"` |+ edit `"description"` -> update `"completedAt"` on `"state"` change
    -   if `"state"` is `"COMPLETE"` when editing respond 400 error
    -   else response is edited object -> `{"id":"123", "state":"COMPLETE", "description": "Buy milk at the store.", "createdAt":"2021-05-12T07:23:45.678Z", "completedAt":"2021-05-13T11:23:45.678Z"}`

#### DELETE/todos

-   request -> `DELETE/todo/<id>`
    -   action/response -> if exists delete and return _"empty response"_ -> "{}" else return 404 error

## BONUS -> Ignore until previous is done

### Authentication

> update section before implementing

-   add packages:

    -   [jwt](https://hapi.dev/module/jwt/)
    -   [bell](https://hapi.dev/module/bell/)

-   routes:

    -   POST/
        -   /users
        -   /login
        -   /logout
    -   GET/me
    -   PATCH/me
