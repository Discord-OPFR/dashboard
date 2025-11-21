export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = url.toString().replace(url.origin, 'https://opfr-back.vercel.app');

  const newRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: 'manual'
  });

  const response = await fetch(newRequest);

  const newResponseHeaders = new Headers(response.headers);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newResponseHeaders
  });
}