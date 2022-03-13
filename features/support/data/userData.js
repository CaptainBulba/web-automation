const { faker } = require("@faker-js/faker");

export default class UserData {
  constructor() {
    this.oracleUser = new OracleUser(
      faker.internet.email(),
      "Aaaa1234$",
      "Latvia",
      faker.name.firstName(),
      faker.name.lastName(),
      faker.company.companyName(),
      faker.phone.phoneNumber(),
      faker.company.companyName(),
      faker.address.streetAddress(),
      faker.address.city(),
      "Cesu",
      faker.address.zipCode()
    );
  }
}

class OracleUser {
  constructor(
    email,
    password,
    country,
    firstname,
    lastName,
    jobTitle,
    phone,
    company,
    address,
    city,
    state,
    postCode
  ) {
    this.email = email;
    this.password = password;
    this.country = country;
    this.firstname = firstname;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.phone = phone;
    this.company = company;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postCode = postCode;
  }
}
