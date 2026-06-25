import { createServer } from 'node:http'
import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, 'dist', 'client')
const PORT = Number(process.env.PORT) || 3000

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
}

async function fileExists(filePath) {
  try {
    const info = await stat(filePath)
    return info.isFile()
  } catch {
    return false
  }
}

async function resolveFile(relativePath) {
  const safePath = normalize(relativePath).replace(/^(\.\.[/\\])+/, '')
  const candidates = [
    join(ROOT, safePath),
    join(ROOT, safePath, 'index.html'),
    join(ROOT, `${safePath}.html`),
  ]

  for (const candidate of candidates) {
    if (!candidate.startsWith(ROOT)) continue
    if (await fileExists(candidate)) return candidate
  }

  return null
}

if (!existsSync(ROOT)) {
  console.error(`Build output not found at ${ROOT}. Run "npm run build" first.`)
  process.exit(1)
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host}`)
    let pathname = decodeURIComponent(url.pathname)

    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1)
    }

    const relativePath =
      pathname === '/' ? 'index.html' : pathname.replace(/^\//, '')

    let filePath = await resolveFile(relativePath)

    if (!filePath && !extname(relativePath)) {
      filePath = await resolveFile('index.html')
    }

    if (!filePath) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Not Found')
      return
    }

    const ext = extname(filePath)
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    })
    createReadStream(filePath).pipe(res)
  } catch (error) {
    console.error(error)
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Internal Server Error')
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving ${ROOT}`)
  console.log(`Listening on http://0.0.0.0:${PORT}`)
})
