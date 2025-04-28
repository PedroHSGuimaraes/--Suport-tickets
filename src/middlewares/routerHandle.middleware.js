import { routes } from "../routes/index.route.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.utils.js";

const database = new Database();

function routerHandle(request, response) {
  const route = routes.find((router) => {
    return router.method === request.method && router.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);
    const { query } = routeParams.groups;

    request.query = query ? extractQueryParams(query) : {};
    request.params = routeParams.groups;
    return route.controller({ request, response, database });
  }
  return response.writeHead(404).end();
}

export { routerHandle };
