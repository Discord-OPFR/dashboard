export async function onRequest(context) {
  const url = new URL(context.request.url);
  const newUrl = url
    .toString()
    .replace(url.origin, 'https://opfr-back.vercel.app');

  const newRequest = new Request(newUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: 'follow',
  });

  return fetch(newRequest);
}
