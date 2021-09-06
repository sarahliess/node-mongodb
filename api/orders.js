const express = require("express");

const {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orders");

const api = express.Router();

api.route("/").get(getOrders).post(createOrder);

api.route("/:id").get(getOrder).delete(deleteOrder).put(updateOrder);

module.exports = api;

//CURL REQUESTS:

// POST: curl -d '{"id": "6135cfa1701d38ef82f9b641", "description": "one fruit salad", "price": 100, "userId": "6130919b3e33b87517810100"}' -H "Content-Type: application/json" -X POST http://localhost:5000/orders/
// PUT (UPDATE): curl -d '{"description": "one pear", "price": 1, "userId": "6130919b3e33b87517810100"}' -H "Content-Type: application/json" -X PUT http://localhost:5000/orders/6135dba80db7b4cccf9396d6
// DELETE: curl -X DELETE http://localhost:5000/orders/6135e5e389a31987e55f023d
