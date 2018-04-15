# simple restful service with restify

`cd restify-bootstrap`

`node .` or `SERVER_PORT=xxxx node .`  or `npm run devstart` for nodemon

`curl -i localhost:8080/lists`

`curl -i -X PUT localhost:8080/lists/mylist --data '{"name" : "NAME" }' -H 'content-type: application/json'`

`curl -i -X POST localhost:8080/lists/mylist/items --data '{"label" : "LABEL" }' -H 'content-type: application/json'`

`curl -X DELETE -i localhost:8080/lists/mylist/items/ITEMID`

