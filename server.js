// See https://github.com/typicode/json-server#module
import { create, router as _router, defaults, rewriter } from 'json-server'

const server = create()

// Uncomment to allow write operations
import { readFileSync } from 'fs'
import { join } from 'path'
const filePath = join('data.json')
const data = readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = _router(db)

// Comment out to allow write operations
// const router = jsonServer.router('db.json')

const middlewares = defaults()

server.use(middlewares)
server.use(rewriter({
    '/api/*': '/$1',
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
export default server