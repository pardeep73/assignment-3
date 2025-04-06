import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { addproduct, getproducts, singleproduct } from "../controllers/product.controller.js";
import { authenticate } from "../middlewares/Authentication.js";

const product = Router();

product.route('/addproduct').post(authenticate,upload.array('images',5),addproduct)
product.route('/getproducts').post(authenticate,getproducts)
product.route('/singleproduct/:id').post(authenticate,singleproduct)

export default product;