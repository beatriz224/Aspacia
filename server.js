const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT) || 3000;
const rootDirectory = __dirname;

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

function sendNotFound(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('404 - Página não encontrada');
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.writeHead(405, {
            'Allow': 'GET, HEAD',
            'Content-Type': 'text/plain; charset=utf-8',
        });
        response.end('405 - Método não permitido');
        return;
    }

    let pathname;

    try {
        pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host || 'localhost'}`).pathname);
    } catch {
        sendNotFound(response);
        return;
    }

    if (pathname === '/') {
        pathname = '/index.html';
    }

    const relativePath = pathname.replace(/^\/+/, '');
    const filePath = path.resolve(rootDirectory, relativePath);

    if (filePath !== rootDirectory && !filePath.startsWith(`${rootDirectory}${path.sep}`)) {
        sendNotFound(response);
        return;
    }

    fs.stat(filePath, (statError, stats) => {
        if (statError) {
            sendNotFound(response);
            return;
        }

        const finalPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;

        fs.readFile(finalPath, (readError, content) => {
            if (readError) {
                sendNotFound(response);
                return;
            }

            const contentType = contentTypes[path.extname(finalPath).toLowerCase()] || 'application/octet-stream';
            response.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': content.length,
                'Cache-Control': contentType.startsWith('text/') ? 'no-cache' : 'public, max-age=3600',
                'X-Content-Type-Options': 'nosniff',
            });

            if (request.method === 'HEAD') {
                response.end();
                return;
            }

            response.end(content);
        });
    });
});

server.listen(port, host, () => {
    console.log(`Áspacia disponível em http://${host}:${port}`);
});
