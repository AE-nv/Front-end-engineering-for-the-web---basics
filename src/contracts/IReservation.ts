export interface IReservation {
    id: number,
    bookId: number,
    userId: number,
    startDate: Date,
    endDate?: Date
}