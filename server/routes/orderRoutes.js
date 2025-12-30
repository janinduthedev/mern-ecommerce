import express from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, getOrders, updateOrderToDelivered } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addOrderItems);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.get("/", protect, admin, getOrders);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

export default router;
