export class Brand {
    constructor(
        private id: string,
        private name: string
    ) {}

    public getId = ():string => {
        return this.id
    }

    public getName = ():string => {
        return this.name
    }
}


export interface BrandDB {
    id: string,
    name: string
}