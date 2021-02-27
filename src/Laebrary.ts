import { IBook, IReservation, IUser } from "./contracts";
import { DataGenerator } from "./DataGenerator";
import format from "date-fns/format";

export class Laebrary {
    private books: IBook[];
    private users: IUser[];
    private reservations: IReservation[];

    constructor() {
        this.createDummyData();
    }

    logAvailableBooks(): void {
        // Get books for which there's no active reservation
        const availableBooks = this.books
            .filter(book =>
                !this.getActiveReservations()
                    .map(reservation => reservation.bookId)
                    .includes(book.id)
            );

        console.log("AVAILABLE BOOKS:", availableBooks);
    }

    test() {
        
    }


    logReservations(): void {
        // Get books for which there's an active reservation
        const reservations = this.getActiveReservations()
            .map(reservation => (
                {
                    book: this.books.find(book => book.id === reservation.bookId),
                    reservedBy: this.users.find(user => user.id === reservation.userId),
                    reservedFrom: format(reservation.startDate, "dd-MM-yyyy")
                }
            ));

        console.log("RESERVATIONS:", reservations);
    }

    private createDummyData(): void {
        this.books = DataGenerator.createBooks();
        this.users = DataGenerator.createUsers();
        this.reservations = DataGenerator.createReservations();
    }

    private getActiveReservations() {
        return this.reservations.filter(reservation =>
            reservation.startDate && !reservation.endDate
        );
    }
}
