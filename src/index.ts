import { Hono } from "hono";
import createRedirect from "./create";
import handleRedirect from "./redirect";

const app = new Hono();

app.get("*", handleRedirect);
app.post("/create", createRedirect);

export default app;
