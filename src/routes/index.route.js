import { ticketsRoutes } from "./tickets.route.js";
import { parserRoutePath } from "../utils/parserRoutePath.utils.js";
const routes = [...ticketsRoutes].map((route) => {
  return {
    ...route,
    path: parserRoutePath(route.path),
  };
});

export { routes };
