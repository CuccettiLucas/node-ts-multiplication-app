
export interface CreateTableUseCase{
    execute: (options:CreaTableOptions) => string;
}

export interface CreaTableOptions{
    base:number;
    limit?:number;
}

export class CreateTable implements CreateTableUseCase{
    constructor(
        /*DI - Dependency Injection*/
    ){}

    execute({base, limit = 10}:CreaTableOptions){
        let output="";

        for (let i = 0; i <= limit; i++) {
            output += `${base} x ${i} = ${base * i}\n`   
        }

        return output;
    }
}