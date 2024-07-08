const Product = require('../models/productModels');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require('../middleware/catchASyncErrors')
const apiFeatures = require('../utils/apiFeatures.js')

//get Product
exports.getAllProducts=catchAsyncError(async(req, res)=>{

    const resultPerPage = 5;
    const ApiFeatures = new apiFeatures(Product.find({}),req.query)
    .search()
    .filter().pagination(resultPerPage)
    const products = await ApiFeatures.query;
    // const getProduct = await Product.find({})
    res.status(200).json({
        success: true,
        products
    });
    
})

//Create Product
module.exports.createProduct=  async(req, res)=>{
    try {
        const newProduct = new Product(req.body);
        
       const product= await newProduct.save();
        console.log("data created")
        return res.status(201).json(product);
    } catch (err) {
        console.error('Error creating product:', err);
        return res.status(500).json(err);
    }
    
}

//update
module.exports.updateProduct= catchAsyncError( async(req,res)=>{
    let product = Product.findById(req.params.id)
    if(!product){
        return next(ErrorHandler("Product not found ", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runvalidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success: true, 
        message:"productupdated"
    })
})

//delete
module.exports.deleteProduct = catchAsyncError( async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Product delete", 500))
    
    }
    
   await product.deleteOne({ id: req.params.id })
   res.status(200).json({
    success: true,
    message: "product deleted"
   })
    
})

//get product details
module.exports.getProductDetails= catchAsyncError( async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return next(ErrorHandler("product not found", 404))
    }
    res.status(200).json(product);
});