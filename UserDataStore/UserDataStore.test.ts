import { UserDataStoreModel, UserModel } from "./UserDataStore";

describe('UserDataStore', () => {

  const testString = "test";

  test('Stores First Name', () => {
    const user = UserModel.create({})

    user.setFirstName(testString);
    expect(user.firstName).toBe(testString);
  })

  test('Store Last Name', () => {
    const user = UserModel.create({})

    user.setLastName(testString);
    expect(user.lastName).toBe(testString);
  })

  test('Store EmailAddress', () => {
    const user = UserModel.create({})

    user.setEmailAddress(testString)
    expect(user.emailAddress).toBe(testString);
  })

  test('Store City', () => {
    const user = UserModel.create({})

    user.setCity(testString);
    expect(user.city).toBe(testString);

  })

  test('Store Country', () => {
    const user = UserModel.create({})

    user.setCountry(testString)
    expect(user.country).toBe(testString);
  })

  test('Store Date of Birth', () => {
    const user = UserModel.create({})

    user.setDateOfBirth(testString)
    expect(user.dob).toBe(testString);
  })

  test('Store PhoneNumber', () => {
    const user = UserModel.create({})

    user.setPhoneNumber(testString)
    expect(user.phoneNumber).toBe(testString);
  })

  test('Creates Correct JSON for DB storing', () => {
    const user = UserModel.create({
      firstName: "first",
      lastName: "Last",
      emailAddress: "email",
      city: "city",
      country: "country",
      dob: "dob",
      phoneNumber: "phoneNumber"
    })

    const json = user.userAsJSONForDB
    expect(json).toEqual({
      firstName: "first",
      lastName: "Last",
      email: "email",
      city: "city",
      country: "country",
      dateOfBirth: "dob",
      mobile: "phoneNumber"
    })
  })

  test('Creates New User', () => {
    const UserDataStore = UserDataStoreModel.create({currentUser: {}});
    UserDataStore.currentUser.setFirstName(testString);
    expect(UserDataStore.currentUser.firstName).toBe(testString);

    UserDataStore.createNewUser();
    expect(UserDataStore.currentUser.firstName).toEqual("");
  })
});