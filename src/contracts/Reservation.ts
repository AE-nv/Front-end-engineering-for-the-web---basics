import {IReservation} from "./IReservation";

export class Reservation implements IReservation {
    constructor(public id: number,
                public bookId: number,
                public userId: number,
                public startDate: Date,
                public endDate?: Date) {

    }
}
