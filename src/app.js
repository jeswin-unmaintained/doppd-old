import koa from "koa";
import route from "koa-route";
import bodyParser from 'koa-bodyparser';


const app = new koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(ctx.url);
  console.log(ctx.request.body);
  console.log(JSON.stringify(ctx));
});

app.listen(10666);
