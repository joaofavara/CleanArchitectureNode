// add the module to validate
module.exports = (productValidator) => {
    return (payload) => {
      const {name, cost, quantity, description} = payload;
      productValidator({name, cost, quantity, description});

      return {
        name,
        cost,
        quantity,
        description
      }
    }
  }