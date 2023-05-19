import z from "zod"

export interface DeleteBrandInputDTO {
    id: string,
}

export const DeleteBrandSchema = z.object({
    id: z.string({
        invalid_type_error: "O id precisa ser uma string",
        required_error: "O id é obrigatório"
    })
    .min(1, "Precisa de pelo menos 1 caractere"),
}).transform(data=> data as DeleteBrandInputDTO)