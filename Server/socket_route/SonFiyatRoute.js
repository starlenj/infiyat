const SonFiyatController = require("../sockets/SonFiyatController")
module.exports = (socket) => {
    socket.on("SonFiyat", () => "TEst");
    socket.on("SonFiyatList", async (Params) => {
        let Liste = await SonFiyatController.GetSonFiyat(Params);
        socket.emit("SonFiyat", Liste)
    })
    socket.on("SetSonFiyat", async (Params) => {
        let response = await SonFiyatController.NewSonFiyat(Params);
        let Liste = await SonFiyatController.GetSonFiyat(Params);
        socket.emit("SonFiyat", Liste);
    });


}