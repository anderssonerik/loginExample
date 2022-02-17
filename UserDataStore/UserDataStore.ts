import { Instance, types } from "mobx-state-tree";

export const UserModel = types.model("user", {
  firstName: "",
  lastName: "",
  emailAddress: "",
  city: "",
  country: "",
  dob: "",
  phoneNumber: "",
})
.actions(self => ({
  setFirstName(firstName: string) {
    self.firstName = firstName;
  },
  setLastName(lastName: string) {
    self.lastName = lastName;
  },
  setEmailAddress(email: string) {
    self.emailAddress = email;
  },
  setCity(city: string) {
    self.city = city;
  },
  setCountry(country: string) {
    self.country = country;
  },
  setDateOfBirth(dob: string) {
    self.dob = dob;
  },
  setPhoneNumber(phoneNumber: string) {
    self.phoneNumber = phoneNumber;
  }
}))
.views(self => ({
  get userAsJSONForDB() {
    return {
      firstName: self.firstName,
      lastName: self.lastName,
      email: self.emailAddress,
      city: self.city,
      country: self.country,
      dateOfBirth: self.dob,
      mobile: self.phoneNumber
    }
  }
}))

export const UserDataStoreModel = types.model("userDataStore",{
  currentUser: UserModel
})
.actions(self => ({
  createNewUser() {
    self.currentUser = UserModel.create({});
  }
}))

export interface UserDataStore extends Instance<typeof UserDataStoreModel> {};
export interface User extends Instance<typeof UserModel> {};