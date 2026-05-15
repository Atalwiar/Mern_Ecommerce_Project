import {createProduct} from "../controllers/productController.js";
import {getProduct} from "../controllers/productController.js";
import {updateProduct} from "../controllers/productController.js";
import {deleteProduct} from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/getAllProducts", getProduct);
router.get("/", getProduct);

router.post("/createProduct", createProduct);
router.post("/", createProduct);

router.put("/updateProduct/:id", updateProduct);
router.put("/:id", updateProduct);

router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/:id", deleteProduct);

export default router;
