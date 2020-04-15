export class Patient {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public over18: boolean,
    public dob: string,
    public preferredContact: string,
    public addressJson: string
  ) {}
}
