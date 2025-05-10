import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // aovoid the error of "Cannot read properties of undefined" if one of the image is not provided
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // image is like
    // {
    //     fieldname: 'image1',
    //     originalname: 'about_img.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: '/var/folders/_x/96km780n5t7ghfxmvq245l4c0000gn/T',
    //     filename: 'about_img.png',
    //     path: '/var/folders/_x/96km780n5t7ghfxmvq245l4c0000gn/T/about_img.png',
    //     size: 1201915
    //   }
    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );
    // Promise.all 來 “並行” 處理一組圖片上傳到 Cloudinary 並返回它們的 URL
    // cloudinary.uploader.upload return a promise

    // imagesUrl is like
    // [
    //   "https://res.cloudinary.com/your-cloud-name/image/upload/v1623411200/image1.jpg",
    //   "https://res.cloudinary.com/your-cloud-name/image/upload/v1623411201/image2.jpg",
    //   "https://res.cloudinary.com/your-cloud-name/image/upload/v1623411202/image3.jpg"
    // ]
    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const ProductData = {
      name,
      price: Number(price),
      description,
      category,
      subCategory,
      sizes: JSON.parse(sizes), // convert string to array, like "["S", "M", "L"]" to ["S", "M", "L"]
      bestseller: bestseller === "true" ? true : false, // Don't write Boolean(bestseller) because it will be "true" or "false" string
      image: imagesUrl, // array of image urls
      date: Date.now(),
    };

    console.log("ProductData", ProductData);

    const product = await productModel.create(ProductData);

    res.json({
      success: true,
      message: "Product added successfully",
    });
    // upload images to cloudinary

    console.log(
      name,
      price,
      description,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log("imagesUrl", imagesUrl);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
