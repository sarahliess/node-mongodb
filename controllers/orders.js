// show one order by ID
// create new, delete, update
const Order = require("../models/Order");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    console.log(orders);
    res.json({
      success: true,
      data: orders,
      msg: "show all orders",
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    res.json({
      msg: `show order by ID ${id}`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (req, res) => {
  try {
    const { description, price, userId } = req.body;
    const order = await Order.create({ description, price, userId });

    res.json({
      msg: `order with id ${id}`,
      success: true,
      date: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    jes.json({
      msg: `order with id ${order.id} deleted`,
      succes: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, price, userId } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { description, price, userId },
      { new: true }
    );

    res.json({
      msg: `order with id ${id} updated`,
      success: true,
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
