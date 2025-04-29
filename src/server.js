import http from "node:http";

import { jsonHandle } from "./middlewares/jsonHandle.middleware.js";
import { routerHandle } from "./middlewares/routerHandle.middleware.js";

async function listener(request, response) {
  await jsonHandle(request, response);
  routerHandle(request, response);
}

http.createServer(listener).listen(3333);
