function index({ request, response, database }) {
  const status = request.query.status;

  const tickets = database.select("tickets");
  return response.end(JSON.stringify(tickets));
}

export { index };
