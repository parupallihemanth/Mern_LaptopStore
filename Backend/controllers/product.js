const Product = require('../modals/product');
const fs = require("fs")
const formidable = require('formidable');
const _ = require('lodash')


// create product
exports.createProduct = ( req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse( req, (err, fields, file) =>{
        if(err){
            return res.status(400).json({
                err : "Unable to upload the photo"
            })
        }
        // Todo restrictions on filelds
        const { name, description, price, stock } = fields
        if( !name || !description ||!price  || !stock){
            return res.status(400).json({
                err : "All fields required"
            })
        }
        let product = new Product(fields)

        // handle files
        if(file.photo){
            // File size should not be more than 3MB
            if( file.photo.size > 3000000){
                return res.status(400).json({
                    err : "Photo size should be less than 3MB"
                })

            }
            // console.log(file)
            product.photo = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type
            
        }

        product.save( ( err, product) =>{
            if(err){
                return res.status(400).json({
                    err : "unable to save product in database"
                })
            }
            return res.status(200).json(product)
        })

    })

}

// get all products

exports.getAllProducts = (req, res) =>{
    Product.find().exec( (err, product) =>{
        if(err || !product){
            return res.status(400).json({
                msg : "No products found"

            }
            )
        }

        return res.status(200).json(product)
    }) 
}