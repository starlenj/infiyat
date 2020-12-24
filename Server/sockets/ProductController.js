const ProductModel = require("../Models/Product");
const ReserverModel = require('../Models/Reserve');
const SettingModel = require("../Models/Setting");
const ImageModel = require('../Models/Images');
module.exports = {

    async GetHomePageProduct() {
        try {
            const ProductData = await ProductModel.find({ Status: 1 });
            return ProductData;
        } catch (error) {
            console.error(error);
        }
    },
    async RezerveProduct(ProductId, UserId) {
        try {
            const Reserver = new ReserverModel({
                ProductId,
                UserId,
            }).save();
            console.log(Reserver)

        } catch (error) {

        }
    }
}