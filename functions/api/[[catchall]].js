export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = `https://opfr-back.vercel.app${url.pathname}${url.search}`;

  const newHeaders = new Headers(context.request.headers);

  newHeaders.set('X-Forwarded-Host', url.host);
  newHeaders.set('X-Forwarded-Proto', url.protocol.replace(':', ''));

  newHeaders.set('Host', 'opfr-back.vercel.app');

  const fetchOptions = {
    method: context.request.method,
    headers: newHeaders,
    redirect: 'manual',
  };

  if (context.request.method !== 'GET' && context.request.method !== 'HEAD') {
    fetchOptions.body = context.request.body;
  }

  const response = await fetch(targetUrl, fetchOptions);

  const responseHeaders = new Headers(response.headers);

  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');
  responseHeaders.delete('transfer-encoding');

  const location = responseHeaders.get('location');
  if (location && location.includes('opfr-back.vercel.app')) {
    responseHeaders.set(
      'location',
      location.replace('https://opfr-back.vercel.app', url.origin),
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}
