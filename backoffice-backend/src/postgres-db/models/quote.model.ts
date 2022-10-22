export class QuoteModel {
  id?: number;
  customerId?: string;
  departureId?: string;
  departureDate: Date;
  destinationId?: string;
  returnDate: Date;
  transportationId?: string;
  numPeople: number;
  price: string;
}
