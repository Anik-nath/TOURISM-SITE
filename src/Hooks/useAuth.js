import { useContext } from "react"
import { AuthContext } from "../Components/Context.js/Authprovider";


const useAuth =()=>{
    return useContext(AuthContext)
}
export default useAuth;