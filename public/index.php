<?php
// Hostinger fallback: serve the prerendered SPA entry if index.html is not the default.
$index = __DIR__ . '/index.html';
if (is_readable($index)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($index);
    exit;
}
http_response_code(503);
header('Content-Type: text/plain; charset=UTF-8');
echo 'Upload the built site from hostinger-deploy/ to public_html.';
