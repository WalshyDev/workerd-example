# Workerd Example

This is an example Worker which can be ran with workerd

This example includes bundling a Worker up and using KV (persisting to a `kv` directory)

## Running

To run simply install the dependencies and run workerd :)

Requests are served at http://localhost:8080 (can be changed in `config.capnp`)

```
# Install the dependencies (including workerd)
$ npm i

# Bundle your Worker and start Workerd serving the Worker
$ npm run dev
```

## Testing

Once the Worker is running we can test it!

To create a redirect do a `POST` to `/create` like so:
```
$ curl -X POST -d '{"slug": "test", "destination": "https://walshy.dev"}' http://localhost:8080/create
```

Then to test the redirect simply send a `GET` request to the slug like so:
```
$ curl -i http://localhost:8080/test
HTTP/1.1 302 Found
Content-Length: 0
Location: https://walshy.dev
```
