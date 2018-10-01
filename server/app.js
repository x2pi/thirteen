const session = require('koa-session')
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const json = require('koa-json')
var bodyParser = require('koa-bodyparser')







const app = new Koa()
const router = new Router()
app.keys = ['some secret hurr'];

app.use(cors({
 credentials: true // enable set cookie
}))
app.use(bodyParser())
app.use(json())





const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 60000000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));

router.post('/users', (ctx, next) => {
	console.log(ctx.request.body);
	
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = { foo: 'bar' , views : n}

});

app
  .use(router.routes())
  .use(router.allowedMethods());
  
import page from './routes'
 
app.use(page.routes())

app.listen(8081);
console.log('listening on port 8081');
