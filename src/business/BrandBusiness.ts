import { BrandDatabase } from "../database/BrandDatabase";
import { BrandInputDTO } from "../dtos/CreateBrand.dto";
import { DeleteBrandInputDTO } from "../dtos/DeleteBrand.dto";
import { AlreadyExistError } from "../error/AlreadyExist";
import { NotFoundError } from "../error/NotFound";
import { Brand } from "../models/Brand";

export class BrandBusiness {
  constructor(private brandDatabase: BrandDatabase) {}

  public findAllBrands = async (): Promise<Brand[]> => {
    const brandDB = await this.brandDatabase.findAllBrands();
    const result = brandDB.map((brand) => new Brand(brand.id, brand.name));
    return result;
  };

  public createBrand = async (input: BrandInputDTO): Promise<void> => {
    const brandDB = await this.brandDatabase.findByName(input.name);

    if (brandDB) {
      throw new AlreadyExistError("Marca já existe");
    }

    const newBrand = new Brand(input.id, input.name);

    await this.brandDatabase.createBrand(newBrand);
  };

  public editBrand = async (input: BrandInputDTO): Promise<void> => {
    const brandDB = await this.brandDatabase.findById(input.id);

    if (!brandDB) {
      throw new NotFoundError();
    }

    const alteredBrand = new Brand(
        input.id, 
        input.name || brandDB.name
        );

    await this.brandDatabase.editBrand(alteredBrand)
  };

  public deleteBrand = async ({id}: DeleteBrandInputDTO): Promise<void> => {
    const brandDB = await this.brandDatabase.findById(id);

    if (!brandDB) {
      throw new NotFoundError();
    }

    await this.brandDatabase.deleteBrand(id)
  };
}
