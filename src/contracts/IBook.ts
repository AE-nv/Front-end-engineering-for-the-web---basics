export interface IBook {
    id: number;
    title: string;
    author: string;
    isbn?: string;
    amountOfPages: number;
    releaseDate: Date;
}