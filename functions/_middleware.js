// This middleware handles SPA routing for React Router
export async function onRequest(context) {
  try {
    return await context.next();
  } catch (err) {
    // If asset not found, serve index.html for SPA routing
    return context.env.ASSETS.fetch(new Request(new URL("/index.html", context.request.url), context.request));
  }
}
