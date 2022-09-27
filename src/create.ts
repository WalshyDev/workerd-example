import { HonoContext } from "hono/dist/context";

interface RequestBody {
	slug?: string;
	destination?: string;
}

const createRedirect = async (c: HonoContext) => {
	const body = await c.req.json<RequestBody>();

	if (!body.slug || !body.destination) {
		return c.json({ error: "Missing slug or destination!" });
	}

	await c.env.KV.put(body.slug, body.destination);

	return c.json({ message: "Created redirect!" });
};

export default createRedirect;
