import { UserModel } from "../UserDataStore/UserDataStore"
import { getUserListFromDB, submitUserToDB } from "./json-db"
import "isomorphic-fetch"

describe('JSON-DB API', () => {
  const testUser = UserModel.create({
    firstName: "first",
    lastName: "last",
    city: "city",
    dob: "dob",
    phoneNumber: "phone"
  })

  test('Submits User to DB', () => {
    return submitUserToDB(testUser, (resp) => { expect(resp.ok).toBe(true) }, (resp) => {  })
  })

  test('Submit Fails', async () => {
    const errorTest = jest.fn((error) =>{ console.log(error)})
    await submitUserToDB(testUser, (resp) => { }, errorTest)
    expect(errorTest).toBeCalled();
  })

  test('Gets users from DB', () => {
    return getUserListFromDB().then((data) => {
      expect(Array.from(data).length).toBeGreaterThan(0);
    })
  })
})