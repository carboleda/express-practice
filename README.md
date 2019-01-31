# express-practice
Practice of some [expressjs](https://expressjs.com/) features

1. Routing:
    * Basic rounting
    * Adavance rounting with http methods
    * Support static content

2. Middlewares
    * Basic middleware for intercept all request and set a cookie

3. Errors handling
    * Defines middlewares for handle 404 and 500 status

# How to use:
Implement each case then execute next commands for test your work:

Start server with:
```shell
npm run start:dev
```
---

Execute all test with:
```shell
npm run test
```
Or use specific command:

1. For test the routing exercises
    ```shell
    npm run test:routing
    ```

2. For test the middleware exercises
    ```shell
    npm run test:middleware
    ```

3. For test exercises the errors handling
    ```shell
    npm run test:errors
    ```