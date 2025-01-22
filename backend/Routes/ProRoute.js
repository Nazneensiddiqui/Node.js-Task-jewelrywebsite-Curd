const express=require("express")
const route= express();
const ProControler=require("../controlers/Procontroler")

route.post("/productinsert", ProControler.ProInsert)
route.get("/productdisplay", ProControler.ProDisplay)
route.get("/productupdate", ProControler.ProUpdate)
route.post("/productdelete", ProControler.DataDelet)
route.post("/editdisplay", ProControler.EditDisplay)
route.post("/editproductsave", ProControler.EditSave)
route.post("/productSearch", ProControler.DataSearch)

module.exports=route