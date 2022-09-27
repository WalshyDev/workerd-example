import { HonoContext } from "hono/dist/context";

const handleRedirect = async (c: HonoContext) => {
	try {
		const { pathname } = new URL(c.req.url);
		const path = pathname.slice(1);

		const destination = await c.env.KV.get(path);
		if (destination === null) {
			c.status(404);
			return c.json({ error: "Not found!" });
		}

		return c.redirect(destination);
	} catch (e) {
		return c.json({
			error: "exception caught! Message: " + e.message,
			stack: e.stack,
		});
	}
};

export default handleRedirect;
