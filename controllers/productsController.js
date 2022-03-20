const db = require('../models');

const index = (req, res) => {
    db.Product.find({}, (err, foundProducts) => {
        if (err) console.log('Error in products#index:', err)

        if(!foundProducts) return res.json({
            message: 'No Products found in database.'
        })

        res.status(200).json({ products: foundProducts });
    })
}

const show = (req, res) => {
    db.Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            console.log('Error in products#show:', err);

            if(!foundProduct) return res.json({
                message: 'There is no product with this ID in the db. Hello there'
            })

            return res.send("Incomplete product#show controller function");
        }

        res.status(200).json({
            product: foundProduct
        });
    });
};

const create = (req, res) => {
    db.Product.create(req.body, (err, savedProduct) => {
        if (err) console.log('Error in product#create:', err)

        // Validations and error handling here

        res.status(201).json({ product: savedProduct })
    })
}

const update = (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (err) {
            console.log('Error in product#update:', err)
    
            return res.send("Incomplete product#update controller function");
        }

        res.status(200).json({
            updatedProduct
        });
    });
};

const destroy = (req, res) => {
    db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if (err) {
        console.log('Error in products#destroy:', err)
  
        return res.send("Incomplete products#destroy controller function");
      }
  
      res.status(200).json(
        {
          deletedProduct
        }
      );
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
