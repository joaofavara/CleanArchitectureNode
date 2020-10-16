export default (products) => 
    products.map((product, index) => {
        return {
            id: index + 1,
            _id: product._id,
            name: product._doc.name,
            cost: product._doc.cost,
            quantity: product._doc.quantity,
            description: product._doc.description,
        };
    });