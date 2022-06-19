import {Book} from "./contracts/Book";
import {User} from "./contracts/User";
import {Reservation} from "./contracts/Reservation";
import {IBook} from "./contracts/IBook";
import {IUser} from "./contracts/IUser";
import {IReservation} from "./contracts/IReservation";

export class DataGenerator {
    static createBooks(): IBook[] {
        return [
            new Book(
                1,
                "Hooked: How to Build Habit-Forming Products",
                "Nir Eyal",
                256,
                new Date(2014, 11, 6),
                "978-0241184837",
            ),
            new Book(
                2,
                "The Industries of the Future",
                "Alec Ross",
                321,
                new Date(2016, 2, 2)
            ),
            new Book(
                3,
                "The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future",
                "Kevin Kelly",
                334,
                new Date(2016, 6, 7)
            )
        ];
    }

    static createUsers(): IUser[] {
        return [
            new User(
                1,
                "Glenn",
                "Dejaeger"
            ),
            new User(
                2,
                "Axel",
                "Lemmens"
            ),
            new User(
                3,
                "Aäron",
                "Noels"
            ),
            new User(
                4,
                "Thomas",
                "Van Cleemput"
            )

        ]
    }

    static createReservations(): IReservation[] {
        return [
            new Reservation(
                1,
                1,
                1,
                new Date(2018, 4, 24),
                new Date(2018, 5, 24)
            ),
            new Reservation(
                2,
                1,
                4,
                new Date(2018, 5, 25)
            ),
            new Reservation(
                3,
                2,
                3,
                new Date(2018, 4, 6),
                new Date(2018, 5, 16)
            )
        ]
    }
}
