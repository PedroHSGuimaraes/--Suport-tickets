import { routes } from "../routes/index.route.js";

function routerHandle(request, response) {
  const route = routes.find((router) => {
    return router.method === request.method && router.path === request.url;
  });

  if (route) {
    return route.controller({ request, response });
  }
  return response.writeHead(404).end();
}

export { routerHandle };
