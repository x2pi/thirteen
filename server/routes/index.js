import Router from 'koa-router'


const router = new Router()

// Controllers
import { login } from './login'

router.post('/login', login)


export default router