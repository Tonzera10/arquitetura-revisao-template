import express from "express"
import { BrandBusiness } from "../business/BrandBusiness"
import { BrandController } from "../controller/BrandController"
import { BrandDatabase } from "../database/BrandDatabase"

export const brandRouter = express.Router()

const brandDatabase = new BrandDatabase()
const brandBusiness = new BrandBusiness(brandDatabase)
const brandController = new BrandController(brandBusiness)

brandRouter.get("/", brandController.findAllBrands )
brandRouter.post("/", brandController.createbrand )
brandRouter.put("/:id", brandController.editBrand  )
brandRouter.delete("/:id", brandController.deleteBrand)


