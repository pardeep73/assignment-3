import { Product } from "../models/product.model.js";
import { Specification } from "../models/specification.model.js";
import { User } from "../models/user.model.js";



// adding single products
export const addproduct = async (req, res) => {
    try {
        /* const { name, price, discount, specification } = .body; */
        let data = [
            {
              "name": "ChronoEdge Classic",
              "price": 299.99,
              "discount": "10%",
              "images": ["image (1).avif", "image (2).avif", "image (3).avif", "image (4).avif"]
            },
            {
              "name": "AeroTime Pro",
              "price": 179.00,
              "discount": "15%",
              "images": ["image (5).avif", "image (6).avif", "image (7).avif", "image (8).avif"]
            },
            {
              "name": "TitanWave DeepSea",
              "price": 450.50,
              "discount": "5%",
              "images": ["image (9).avif", "image (10).avif", "image (11).avif", "image (12).avif"]
            },
            {
              "name": "MetroSlim Leather",
              "price": 129.99,
              "discount": "20%",
              "images": ["image (13).avif", "image (14).avif", "image (15).avif", "image (16).avif"]
            },
            {
              "name": "ClassicGold Luxe",
              "price": 599.00,
              "discount": "25%",
              "images": ["image (17).avif", "image (18).avif", "image (19).avif", "image (20).avif"]
            },
            {
              "name": "StealthX BlackOps",
              "price": 389.99,
              "discount": "12%",
              "images": ["image (21).avif", "image (22).avif", "image (23).avif", "image (24).avif"]
            },
            {
              "name": "Vintagio Heritage",
              "price": 215.75,
              "discount": "18%",
              "images": ["image (25).avif", "image (26).avif", "image (27).avif", "image (28).avif"]
            },
            {
              "name": "PolarChron Arctic",
              "price": 249.90,
              "discount": "10%",
              "images": ["image (29).avif", "image (30).avif", "image (31).avif", "image (32).avif"]
            },
            {
              "name": "JetStream Aviator",
              "price": 339.00,
              "discount": "8%",
              "images": ["image (33).avif", "image (34).avif", "image (35).avif", "image (36).avif"]
            },
            {
              "name": "LumiCore Nightlight",
              "price": 159.99,
              "discount": "30%",
              "images": ["image (37).avif", "image (38).avif", "image (39).avif", "image (40).avif"]
            },
            {
              "name": "TerraTrek Explorer",
              "price": 329.00,
              "discount": "10%",
              "images": ["image (41).avif", "image (42).avif", "image (43).avif", "image (44).avif"]
            },
            {
              "name": "BlueDepth Diver",
              "price": 499.95,
              "discount": "15%",
              "images": ["image (45).avif", "image (46).avif", "image (47).avif", "image (48).avif"]
            },
            {
              "name": "CivicStyle Urban",
              "price": 119.00,
              "discount": "5%",
              "images": ["image (49).avif", "image (50).avif", "image (51).avif", "image (52).avif"]
            },
            {
              "name": "NeoClassic Bronze",
              "price": 285.49,
              "discount": "12%",
              "images": ["image (53).avif", "image (54).avif", "image (55).avif", "image (56).avif"]
            },
            {
              "name": "EchoTime Basic",
              "price": 89.90,
              "discount": "20%",
              "images": ["image (57).avif", "image (58).avif", "image (59).avif", "image (60).avif"]
            },
            {
              "name": "ForgeTitan Industrial",
              "price": 410.00,
              "discount": "18%",
              "images": ["image (61).avif", "image (62).avif", "image (63).avif", "image (64).avif"]
            },
            {
              "name": "Skyline Horizon",
              "price": 225.00,
              "discount": "10%",
              "images": ["image (65).avif", "image (66).avif", "image (67).avif", "image (68).avif"]
            },
            {
              "name": "CrimsonDial Ruby",
              "price": 389.99,
              "discount": "14%",
              "images": ["image (69).avif", "image (70).avif", "image (71).avif", "image (72).avif"]
            },
            {
              "name": "VoltEdge Hybrid",
              "price": 279.75,
              "discount": "16%",
              "images": ["image (73).avif", "image (74).avif", "image (75).avif", "image (76).avif"]
            },
            {
              "name": "OmegaCraft Prestige",
              "price": 699.99,
              "discount": "20%",
              "images": ["image (77).avif", "image (78).avif", "image (79).avif", "image (80).avif"]
            }
          ];
          
          

          const spec = await getspec();


          /* console.log('spec',spec) */
         /*  spec.map((pro)=>{
            console.log(pro._id)

          }) */

          for(let i =0 ; i < spec.length; i++ ){
            /* console.log(spec[i]) */
             data[i]['specification'] = spec[i]._id;
            console.log(data[i]);
            const product = await Product.create(data[i]);
            
          }
        
          /* data.map(async(pro)=>{
          }) */

        /* const userid = req.id; */

        /* if (!name || !price || !discount || !specification) {
            return res.json({
                status: 400,
                message: "Please Fill the all Fields"
            })
        } */

        /* const images = req.files?.map(image => (image?.originalname)
        ) || []; */

        


       /*  if (!images) {
            return res.json({
                status: 400,
                message: "Images not Uploaded"
            })
        } */

        /* const product = await Product.create({
            name, price, discount, specification, images
        }) */


        // adding the products to the user data
        /* const user = await User.findOneAndUpdate({_id:userid},{ $push: { products: product } });

        if(!user){
            return res.json({
                status:400,
                message:"Something Went Wrong"
            })
        } */

        /* return res.json({
            status: 200,
            message: "product registered Successfully",
            data: product
        })
 */
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

        const  id  = req.params.id;

        console.log("\nproduct id\n",id)

        const exist = await Product.findOne({ _id: id }).populate('specification');

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


export const specificationf = async(req,res)=>{
    try {
        const data = [
            {
              "brand": "ChronoEdge",
              "owner": "Luxe Timepieces Co.",
              "movement": "Automatic",
              "material": "Stainless Steel with Leather Strap",
              "caseSize": "42mm",
              "waterResistance": "100m"
            },
            {
              "brand": "AeroTime",
              "owner": "SkyHorology",
              "movement": "Quartz",
              "material": "Rubber Strap with Titanium Case",
              "caseSize": "44mm",
              "waterResistance": "200m"
            },
            {
              "brand": "MetroSlim",
              "owner": "Urban Ticks",
              "movement": "Quartz",
              "material": "Mesh Stainless Steel",
              "caseSize": "40mm",
              "waterResistance": "30m"
            },
            {
              "brand": "TitanWave",
              "owner": "Oceanic Watches Ltd.",
              "movement": "Automatic",
              "material": "Titanium Case with Silicone Strap",
              "caseSize": "46mm",
              "waterResistance": "300m"
            },
            {
              "brand": "ClassicGold",
              "owner": "Time & Tradition",
              "movement": "Quartz",
              "material": "Gold-plated Stainless Steel",
              "caseSize": "38mm",
              "waterResistance": "50m"
            },
            {
              "brand": "StealthX",
              "owner": "BlackOps Watches",
              "movement": "Automatic",
              "material": "Carbon Fiber with Rubber Strap",
              "caseSize": "45mm",
              "waterResistance": "150m"
            },
            {
              "brand": "Vintagio",
              "owner": "Heritage Time Co.",
              "movement": "Manual Wind",
              "material": "Leather Strap with Brass Case",
              "caseSize": "39mm",
              "waterResistance": "30m"
            },
            {
              "brand": "PolarChron",
              "owner": "Northern Edge Inc.",
              "movement": "Quartz",
              "material": "Stainless Steel",
              "caseSize": "42mm",
              "waterResistance": "100m"
            },
            {
              "brand": "JetStream",
              "owner": "Aviator Works",
              "movement": "Automatic",
              "material": "Stainless Steel with NATO Strap",
              "caseSize": "43mm",
              "waterResistance": "100m"
            },
            {
              "brand": "LumiCore",
              "owner": "NightGlow Tech",
              "movement": "Quartz",
              "material": "Polycarbonate with Lume Strap",
              "caseSize": "41mm",
              "waterResistance": "50m"
            },
            {
              "brand": "TerraTrek",
              "owner": "Explorer's Watches",
              "movement": "Solar",
              "material": "Stainless Steel with Canvas Strap",
              "caseSize": "44mm",
              "waterResistance": "200m"
            },
            {
              "brand": "BlueDepth",
              "owner": "DiveMaster Pro",
              "movement": "Automatic",
              "material": "Titanium with Rubber Strap",
              "caseSize": "45mm",
              "waterResistance": "500m"
            },
            {
              "brand": "CivicStyle",
              "owner": "Metro Elegance",
              "movement": "Quartz",
              "material": "Polished Stainless Steel",
              "caseSize": "40mm",
              "waterResistance": "30m"
            },
            {
              "brand": "NeoClassic",
              "owner": "Artisan Horology",
              "movement": "Manual Wind",
              "material": "Bronze with Leather Strap",
              "caseSize": "42mm",
              "waterResistance": "50m"
            },
            {
              "brand": "EchoTime",
              "owner": "Digital Pulse Ltd.",
              "movement": "Quartz",
              "material": "Silicone Band with Plastic Case",
              "caseSize": "38mm",
              "waterResistance": "100m"
            },
            {
              "brand": "ForgeTitan",
              "owner": "Industrial Timeworks",
              "movement": "Automatic",
              "material": "Brushed Titanium",
              "caseSize": "46mm",
              "waterResistance": "300m"
            },
            {
              "brand": "Skyline",
              "owner": "AeroTimepieces Co.",
              "movement": "Quartz",
              "material": "Leather Strap with Polished Case",
              "caseSize": "41mm",
              "waterResistance": "50m"
            },
            {
              "brand": "CrimsonDial",
              "owner": "ColorLux",
              "movement": "Automatic",
              "material": "Stainless Steel with Burgundy Strap",
              "caseSize": "40mm",
              "waterResistance": "100m"
            },
            {
              "brand": "VoltEdge",
              "owner": "TechTick Inc.",
              "movement": "Quartz",
              "material": "Hybrid Rubber/Metal Band",
              "caseSize": "42mm",
              "waterResistance": "150m"
            },
            {
              "brand": "OmegaCraft",
              "owner": "Legacy Horology",
              "movement": "Manual Wind",
              "material": "Gold Alloy with Croc Leather Strap",
              "caseSize": "43mm",
              "waterResistance": "50m"
            }
          ]
          console.log('data',data.length);

          data.map(async(spec)=>{
            console.log(spec)
            await Specification.create(spec);
          })
          
    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}

export const getspec = async (req, res) => {
    try {

        const product = await Specification.find();

        if (!product) {
            return res.json({
                status: 400,
                message: "Products not Found"
            })
        }
        return product;

       /*  console.log('spec',product); */
       /*  return res.json({
            status: 200,
            message: "product registered Successfully",
            data: product
        }) */

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "internal Server Error"
        })
    }
}