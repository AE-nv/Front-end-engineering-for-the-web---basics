import {IBook} from "./IBook";

export class Book implements IBook {
    constructor(public id: number,
                public title: string,
                public author: string,
                public amountOfPages: number,
                public releaseDate: Date,
                public isbn?: string) {

    }
}