/*
  You can initialize anything you want in this file
*/

import { handler } from "../out/handler.js";
import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";

const app = new Application();

const port = parseInt(Deno.env.get("PORT") || 3000)


app.addEventListener('listen', () => {
  console.log("Server started")
  console.log(`%chttp://localhost:${port}/`, "color: blue")
})

app.use(handler);

app.listen({
  hostname: '0.0.0.0',
  port
});
