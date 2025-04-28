function index({ request, response, database }) {
  const status = request.query.status;
  const filters = status ? { status } : null;
  const tickets = database.select("tickets", filters);
  return response.end(JSON.stringify(tickets));
}

export { index };
