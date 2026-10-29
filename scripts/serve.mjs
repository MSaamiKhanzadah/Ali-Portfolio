import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'

const directory = resolve('out')
const port = Number(process.env.PORT || 3000)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon' }
try { await stat(resolve(directory, 'index.html')) } catch { console.error('Build the portfolio first: npm run build'); process.exit(1) }
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    let file = resolve(directory, '.' + pathname)
    if (file !== directory && !file.startsWith(directory + sep)) { response.writeHead(403).end(); return }
    try { if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html') } catch { file = resolve(directory, '404.html'); response.statusCode = 404 }
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream')
    response.setHeader('X-Content-Type-Options', 'nosniff')
    response.end(await readFile(file))
  } catch { response.writeHead(400).end('Invalid request') }
})
server.listen(port, '127.0.0.1', () => console.log(`Ali Mapari portfolio: http://127.0.0.1:${port}`))
