import { createContext } from "react"
import { DUMMY_USERS } from "../components/UserFinder"
export const UserContext = createContext({
    users: []
})

export const UserContextProvider = ({ children }) => {

    return <UserContext.Provider value={{ users: DUMMY_USERS }}>
        {children}
    </UserContext.Provider>
}