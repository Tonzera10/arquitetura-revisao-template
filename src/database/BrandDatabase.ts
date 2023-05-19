import { Brand, BrandDB } from "../models/Brand";
import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase {
  private TABLE_NAME = "brands";

  public findAllBrands = async (): Promise<BrandDB[]> => {
    return await BaseDatabase.connection(this.TABLE_NAME);
  };

  public findByName = async (name: string): Promise<BrandDB | undefined> => {
    const brandDB = await BaseDatabase.connection(this.TABLE_NAME).where({
      name,
    });
    return brandDB[0];
  };

  public findById = async (id: string): Promise<BrandDB | undefined> => {
    const brandDB = await BaseDatabase.connection(this.TABLE_NAME).where({
      id,
    });
    return brandDB[0];
  };

  public createBrand = async (input: Brand): Promise<void> => {
    await BaseDatabase.connection(this.TABLE_NAME).insert({
      id: input.getId(),
      name: input.getName(),
    });
  };

  public editBrand = async (input: Brand): Promise<void> => {
    await BaseDatabase.connection(this.TABLE_NAME)
      .update({
        name: input.getName()        
      })
      .where({ id: input.getId() });
  };

  public deleteBrand = async (id: string ): Promise<void> => {
    await BaseDatabase.connection(this.TABLE_NAME)
      .delete()
      .where({ id });
  };
}
