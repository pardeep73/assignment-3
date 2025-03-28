import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";



// adding single products
export const addproduct = async (req, res) => {
    try {
        const { name, price, discount, category } = req.body;

        const userid = req.id;

        if (!name || !price || !discount || !category) {
            return res.json({
                status: 400,
                message: "Please Fill the all Fields"
            })
        }

        const images = req.files?.map(image => (image?.originalname)
        ) || [];

        


        if (!images) {
            return res.json({
                status: 400,
                message: "Images not Uploaded"
            })
        }

        const product = await Product.create({
            name, price, discount, category, images
        })


        // adding the products to the user data
        const user = await User.findOneAndUpdate({_id:userid},{ $push: { products: product } });

        if(!user){
            return res.json({
                status:400,
                message:"Something Went Wrong"
            })
        }

        return res.json({
            status: 200,
            message: "product registered Successfully",
            data: product
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}


// updating the product
export const updateproduct = async (req, res) => {
    try {

        const data = req.body;
        const { productid } = req.params;

        if (!productid) {
            return res.json({
                status: 400,
                message: "Product not Found"
            })
        }

        const updating = await Product.findOneAndUpdate({ _id: productid }, data);

        if (!updating) {
            return res.json({
                status: 400,
                message: "Product Updation Failed"
            })
        }

        return res.json({
            status:200,
            message: "Product Updated Successfully",
            data:updating
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}


// deletion of the product
export const deleteproduct = async(req,res) =>{
    try {
        const productid = req.params;

        if(!productid){
            return res.json({
                status:400,
                message:"Product not Found"
            })
        }

        const deletion =  await Product.findOneAndDelete({_id:productid});

        if(!deletion){
            return res.json({
                status:400,
                message:"Product Deletion Failed"
            })
        }

        return res.json({
            status:200,
            message:"Product Deleted Successfully"
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}


// get all products
export const getproducts = async (req, res) => {
    try {

        const product = await Product.find().sort({ createdAt: -1 })

        if (!product) {
            return res.json({
                status: 400,
                message: "Products not Found"
            })
        }
        return res.json({
            status: 200,
            message: "product registered Successfully",
            data: product
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}

// get the single products
export const singleproduct = async (req, res) => {
    try {

        const { id } = req.body;

        const exist = await Product.findOne({ _id: id })

        console.log("data", exist)

        if (!exist) {
            return res.json({
                status: 400,
                message: "Product Not Found"
            })
        }

        return res.json({
            status: 200,
            message: "Product found",
            data: exist
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}
