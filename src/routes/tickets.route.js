import { create } from "../controllers/tickets/create.controller.js";
import { index } from "../controllers/tickets/index.controller.js";
const ticketsRoutes = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
];

export { ticketsRoutes };
