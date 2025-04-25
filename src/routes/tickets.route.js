import { create } from "../controllers/tickets/create.controller.js";
const ticketsRoutes = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
];

export { ticketsRoutes };
