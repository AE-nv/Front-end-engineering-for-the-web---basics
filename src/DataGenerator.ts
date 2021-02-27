import {Book, IBook, IReservation, IUser, Reservation, User} from "./contracts";
import zonedTimeToUtc from 'date-fns-tz/zonedTimeToUtc';

export class DataGenerator {
    static createBooks(): IBook[] {
        return [
            new Book(
                1,
                "Hooked: How to Build Habit-Forming Products",
                "Nir Eyal",
                256,
                zonedTimeToUtc('2014-12-06', 'Europe/Brussels'),
                "978-0241184837",
            ),
            new Book(
                2,
                "The Industries of the Future",
                "Alec Ross",
                321,
                zonedTimeToUtc('2016-03-02', 'Europe/Brussels'),
            ),
            new Book(
                3,
                "The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future",
                "Kevin Kelly",
                334,
                zonedTimeToUtc('2016-07-07', 'Europe/Brussels'),
            ),
        ];
    }

    static createUsers(): IUser[] {
        return [
            new User(
                1,
                "Glenn",
                "Dejaeger",
            ),
            new User(
                2,
                "Jorg",
                "Wyckmans",
            ),
            new User(
                3,
                "Cynric",
                "Huys",
            ),
            new User(
                4,
                "Thomas",
                "Van Cleemput",
            ),
        ];
    }

    static createReservations(): IReservation[] {
        return [
            new Reservation(
                1,
                1,
                1,
                zonedTimeToUtc('2021-02-01', 'Europe/Brussels'),
                zonedTimeToUtc('2021-03-01', 'Europe/Brussels'),
            ),
            new Reservation(
                2,
                1,
                4,
                zonedTimeToUtc('2021-06-25', 'Europe/Brussels'),
            ),
            new Reservation(
                3,
                2,
                3,
                zonedTimeToUtc('2021-01-01', 'Europe/Brussels'),
                zonedTimeToUtc('2021-02-01', 'Europe/Brussels'),
            ),
        ]
    }
}
