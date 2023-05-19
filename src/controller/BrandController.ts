import { Request, Response } from "express";
import { ZodError } from "zod";
import { BrandBusiness } from "../business/BrandBusiness";
import { BrandSchema } from "../dtos/CreateBrand.dto";
import { DeleteBrandSchema } from "../dtos/DeleteBrand.dto";
import { BaseError } from "../error/BaseError";

export class BrandController {
  constructor(private brandBusiness: BrandBusiness) {}

  public findAllBrands = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.brandBusiness.findAllBrands();

      res.status(200).send(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public createbrand = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = BrandSchema.parse({
        id: req.body.id,
        name: req.body.name,
      });

      await this.brandBusiness.createBrand(input);

      res.status(201).send({ message: "Marca criada com sucesso" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public editBrand = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = BrandSchema.parse({
        id: req.params.id,
        name: req.body.name,
      });

      await this.brandBusiness.editBrand(input)

      res.status(201).send({ message: "Marca editada com sucesso" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public deleteBrand = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = DeleteBrandSchema.parse({
        id: req.params.id,
      });

      await this.brandBusiness.deleteBrand(input)

      res.status(201).send({ message: "Marca deletada com sucesso" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

}
