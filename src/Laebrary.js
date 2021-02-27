class Laebrary {
    constructor() {
        this.createDummyData();
    }

    createDummyData() {
        this.createBooks();
        this.createUsers();
        this.createReservations();
    }

    createBooks() {
        this.books = [
            {
                id: 1,
                title: "Hooked: How to Build Habit-Forming Products",
                author: "Nir Eyal",
                isbn: "978-0241184837",
                amountOfPages: 256,
                releaseDate: "06-11-2014"
            },
            {
                id: 2,
                title: "The Industries of the Future",
                author: "Alec Ross",
                amountOfPages: 321,
                releaseDate: "02-02-2016"
            },
            {
                id: 3,
                title: "The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future",
                author: "Kevin Kelly",
                amountOfPages: 334,
                releaseDate: "07-06-2016"
            }
        ];
    }

    createUsers() {
        this.users = [
            {
                id: 1,
                firstName: "Glenn",
                lastName: "Dejaeger"
            },
            {
                id: 2,
                firstName: "Jorg",
                lastName: "Wyckmans"
            },
            {
                id: 3,
                firstName: "Cynric",
                lastName: "Huys"
            },
            {
                id: 4,
                firstName: "Thomas",
                lastName: "Van Cleemput"
            }

        ]
    }

    createReservations() {
        this.reservations = [
            {
                id: 1,
                bookId: 1,
                userId: 1,
                startDate: "24-04-2018",
                endDate: "24-05-2018"
            },
            {
                id: 2,
                bookId: 1,
                userId: 4,
                startDate: "25-05-2018"
            },
            {
                id: 3,
                bookId: 2,
                userId: 3,
                startDate: "06-04-2018",
                endDate: "16-04-2018"
            }
        ]
    }

    logAvailableBooks() {
        // Get books for which there's no active reservation
        const availableBooks = this.books
            .filter(book =>
                !this.getActiveReservations()
                    .map(reservation => reservation.bookId)
                    .includes(book.id)
            );

        console.log("AVAILABLE BOOKS:");

        availableBooks.forEach(book => {
            console.log(`${book.title}`);
        });
    }

    logReservations() {
        // Get books for which there's an active reservation
        const reservations = this.getActiveReservations()
            .map(reservation => (
                {
                    book: this.books.find(book => book.id === reservation.bookId),
                    reservedBy: this.users.find(user => user.id === reservation.userId)
                }
            ));

        console.log("RESERVATIONS:");

        reservations.forEach(reservation => {
            console.log(`${reservation.book.title} - ${reservation.reservedBy.firstName} ${reservation.reservedBy.lastName}`);
        });
    }

    getActiveReservations() {
        return this.reservations.filter(reservation =>
            reservation.startDate && !reservation.endDate
        );
    }
}

const laebrary = new Laebrary();
laebrary.logAvailableBooks();
laebrary.logReservations();