import { randomUUID } from "node:crypto";

function create({ request, response }) {
  const { equipament, description, user_name } = request.body;
  const ticket = {
    id: randomUUID(),
    equipament,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  };

  return response.end(JSON.stringify(ticket));
}

export { create };
