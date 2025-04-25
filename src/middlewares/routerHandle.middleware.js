import { routes } from "../routes/index.route.js";
import { Database } from "../database/database.js";

const database = new Database();

function routerHandle(request, response) {
  const route = routes.find((router) => {
    return router.method === request.method && router.path === request.url;
  });

  if (route) {
    return route.controller({ request, response, database });
  }
  return response.writeHead(404).end();
}

export { routerHandle };
