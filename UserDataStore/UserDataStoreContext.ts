import { createContext, useContext } from 'react';
import { UserDataStore } from './UserDataStore';

const UserDataStoreContext = createContext<UserDataStore>({} as UserDataStore);
export const UserDataStoreProvider = UserDataStoreContext.Provider;
export const useUserDataStore = () => useContext(UserDataStoreContext);