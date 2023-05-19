import z from "zod"

export interface BrandInputDTO {
    id: string,
    name: string,
}

export const BrandSchema = z.object({
    id: z.string({
        invalid_type_error: "O id precisa ser uma string",
        required_error: "O id é obrigatório"
    })
    .min(1, "Precisa de pelo menos 1 caractere"),
    name: z.string(
        {
            invalid_type_error: "O name precisa ser uma string",
            required_error: "O name é obrigatório"
        }
    ).min(3,  "Precisa de pelo menos 3 caracteres")
}).transform(data=> data as BrandInputDTO)