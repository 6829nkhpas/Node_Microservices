const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../middleware/errorHandler.js");

const items = [
  {
    id: 1,
    name: "item1",
  },
  {
    id: 2,
    name: "item2",
  },
  {
    id: 3,
    name: "item3",
  },
  {
    id: 4,
    name: "item4",
  },
];
router.get(
  "/items",
  asyncHandler(async (req, res) => {
    res.json(items);
  })
);
router.post("/items", asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400).json({
            success: false,
            message: "Name is required",
        });
        return;
    }
  const { name } = req.body;
  const newItem = {
    id: items.length + 1,
    name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
}));
module.exports = { itemRoutes: router };
