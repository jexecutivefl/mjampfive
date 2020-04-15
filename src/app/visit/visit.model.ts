export class Visit {
  constructor(
    // public id: string,
    public scheduledDate: string,
    public timeIn: string,
    public timeOut: string,
    public patient: string,
    public transactions: [string],
    public visitType: string,
    public patientImage: string,
    public amountPaid: string,
    public patientEmail: string,
    public patientPhone: string,
    public patientFirstName: string,
    public patientLastName: string
  ) {}
}
