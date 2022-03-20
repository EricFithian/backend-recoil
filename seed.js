const db = require('./models');
const productData = require('./productData.json');
const userData = require('./userData.json');

// Delete
db.Product.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'product deleted');

  // Create
  db.Product.create(productData.products, (err, seededProducts) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededProducts.length, 'products created successfully');
    console.log('done!');

    process.exit();
  });
});

db.User.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'users deleted');

  // Create
  db.User.create(userData.users, (err, seededUsers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededUsers.length, 'Users created successfully');
    console.log('done!');

    process.exit();
  });
});


/* 
Models - Products, Users, 
*/