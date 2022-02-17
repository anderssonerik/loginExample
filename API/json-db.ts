import { User } from "../UserDataStore/UserDataStore";

const jsonDBBaseURL = 'http://localhost:3000/'

export enum JSONDBEndpoints {
  'users',

}

export enum JSONDBMethods {
  'POST',
  'GET'
}
export const UserDBClient = async (endPoint: JSONDBEndpoints, method: JSONDBMethods, data: Object) => {
  try {
    return await request;
  } catch (error) {
    console.log("Error interacting with DB", error);

  }
}

export async function getUserListFromDB() {
  const response = await fetch('http://localhost:3000/users');
  const responseJson = await response.json();
  return  responseJson;
}

export async function submitUserToDB(currentUser: User, callBack: (resp:Response) => void, errorCallBack: (error: any) => void) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(currentUser.userAsJSONForDB),
    headers: { "Content-type": "application/json"}
  }
  const response = fetch('http://localhost:3000/users', requestOptions);
  response
    .then((resp) => callBack(resp))
    .catch(error => {
      console.error("Error creating new user:", error)
      errorCallBack(error);
    });
}
