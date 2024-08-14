const products = require("./product_data.json");
// console.log("🚀 ~ file: product_task.js:2 ~ PRODUCT_DATA:", PRODUCT_DATA)


// 1) Filter Products By Category

// Function to filter products by category
function filterProductsByCategory(products, category) {
    return products.filter(product => product.category.includes(category));
  }
  
  //Filter products by category
  let categoryToFilter = "shoes";
  let filteredProducts = filterProductsByCategory(products, categoryToFilter);
  
  // Display the filtered products by category
  console.log(`Products in the category "${categoryToFilter}":`);
  if (filteredProducts.length === 0) {
    console.log("No products found in this category.");
  } else {
    filteredProducts.forEach(product => {
      console.log(`Description: ${product.description}`);
      console.log("==============================");
    });
  }
  
// 2) Filter Available Stock

// Function to find available stock by category and brand
function findStockByCategoryAndBrand(category, brand) {
    let matchingProducts = [];
    for (let product of products) {
        if (product.brand === brand && category.every(category => product.category.includes(category))) {
            matchingProducts.push({
              availableStock: product.availableStock
        });
      }
    }
    return matchingProducts;
  }
  
  // Enter category and brand
  let category = ["smartphones", "3g"];
  let brand = "Oppo";
  let result = findStockByCategoryAndBrand(category, brand);
  
  if (result.length > 0) {
    for (let item of result) {
      console.log(`Available Stock: ${item.availableStock}`);
    }
  } else {
    console.log("No matching products found.");
  }