import fs from "fs";

export interface DestinationFileUseCase{
    execute: (option:Options) => string;
}

export interface Options{
    destination:string;
    name:string;
}

export class DestinationFile{
    constructor(){
        /**/
    }

    execute({destination,name}:Options){
        fs.mkdirSync(destination, {recursive:true});
        fs.writeFileSync(`${destination}/${name}.txt`,"");
    }

}