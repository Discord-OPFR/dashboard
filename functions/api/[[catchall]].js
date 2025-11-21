export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = url.toString().replace(url.origin, 'https://opfr-back.vercel.app');

  const proxyRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: 'manual'
  });

  const response = await fetch(proxyRequest);

  const newHeaders = new Headers(response.headers);

  newHeaders.delete('content-encoding');
  newHeaders.delete('content-length');
  newHeaders.delete('transfer-encoding');

  if (response.status >= 300 && response.status < 400) {
    const location = newHeaders.get('location');
    if (location) {
      return new Response(null, {
        status: response.status,
        headers: newHeaders
      });
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}