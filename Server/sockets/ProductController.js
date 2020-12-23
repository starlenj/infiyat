const Model = require("../Models/Product");

module.exports = {

    async GetHomePageProduct() {
        try {
            let ProductData = await Model.find({ Status: 1 });
            return ProductData;
        } catch (error) {
            console.error(error);
        }
    }
}