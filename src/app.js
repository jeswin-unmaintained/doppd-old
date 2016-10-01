import koa from "koa";
import route from "koa-route";
import bodyParser from 'koa-bodyparser';
import querystring from "querystring";

const app = new koa();
app.use(bodyParser({enableTypes: ["text"]}));

app.use(async (ctx, next) => {
  if (ctx.url === "/reset") {
    process.exit();
  } else {
    const passkey = ctx.url.slice(0, 10);
    if (passkey !== "/madness1/") {
      ctx.body = "that did not work.";
    } else {
      const evalString = ctx.request.method.toLowerCase() === "POST" ? ctx.method.body : querystring.unescape(ctx.url.slice(10));
      const result = eval(`global.${evalString}`);
      ctx.body = result;
    }
  }
});

app.listen(10666);
