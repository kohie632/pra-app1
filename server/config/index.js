if(process.env.Mode_ENV === 'production'){
  module.exports = require('./prod')
  console.log('prod')
}else{
  module.exports = require('./dev')
  console.log('dev')
}