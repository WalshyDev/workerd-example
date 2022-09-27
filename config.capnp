using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
	services = [
		(name = "main", worker = .mainWorker),
		(name = "kv", disk = ( path = "kv", writable = true, allowDotfiles = false ) )
	],

	sockets = [
		# Serve HTTP on port 8080.
		( name = "http",
			address = "*:8080",
			http = (),
			service = "main"
		),
	]
);

const mainWorker :Workerd.Worker = (
	compatibilityDate = "2022-09-17",

	modules = [
		( name = "dist/worker.mjs", esModule = embed "dist/worker.mjs" ),
	],
	bindings = [
		( name = "KV", kvNamespace = ( name = "kv" ) ),
	],
);
