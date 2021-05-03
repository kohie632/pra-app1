const Product = require('./model/product')

class FakeDb {
  constructor(){
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: '1: A large phone with one of the best screens',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: '2: A great phone with one of the best cameras',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '3: A great phone with one of the best cameras',
      },
      {
        name: 'Phone Special',
        price: 899,
        description: '4: A great phone with one of the best cameras',
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
  
  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb