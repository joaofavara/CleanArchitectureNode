// add the module to validate
module.exports = (productValidator) => {
    return ({
      name,
      cost,
      quantity,
      description, 
    } = {}) => {

      productValidator({name, cost, quantity, description});

      return {
        name,
        cost,
        quantity,
        description
      }
    }
  }