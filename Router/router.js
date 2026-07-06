import express from 'express';
import { getProducts } from '../controller/productController.js';
import { getContacts } from '../controller/contactController.js';
import { getAbout } from '../controller/aboutController.js';
import { handleLogin, signup } from '../controller/authController.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", handleLogin);

router.get("/products", getProducts);

router.get("/contacts", getContacts);

router.get("/about", getAbout);

router.use((req, res) =>{
    res.status(404).send("404- page not found");
});


export default router;