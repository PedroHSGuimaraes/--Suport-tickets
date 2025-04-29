import { create } from "../controllers/tickets/create.controller.js";
import { index } from "../controllers/tickets/index.controller.js";
import { update } from "../controllers/tickets/update.controller.js";
import { patch } from "../controllers/tickets/patch.controller.js";
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
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: patch,
  },
];

export { ticketsRoutes };
