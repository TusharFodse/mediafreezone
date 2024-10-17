import axios from "axios";
import { createContext, useContext, useState ,useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";



const UserContext =createContext()

export const UserProvider=({children})=>{
    const [user,setUser]= useState([])
    const [isAuth, setIsAuth]= useState(false)
    // const [btnLoading, setBtnLoading]=useState(false)

    // const {fetchPins}=PinData    

    async function registerUser(name,email,password,navigate,fetchPins) {
        // setBtnLoading(true)
        try {
            const {data}=await axios.post("/api/user/register",{email,password,name})
            toast.success(data.message)
            setUser(data.user)
            setIsAuth(true)
            // setBtnLoading(false)
            navigate("/");
            fetchPins()
        } catch (error) {
            toast.error(error.responce.data.message);
            
            // setBtnLoading(false)
            
        }
        
    }
   
    
    async function loginUser(email,password,navigate,fetchPins) {
        // setBtnLoading(true)
        try {
            const {data}=await axios.post("/api/user/login",{email,password})
            toast.success(data.message)
            setUser(data.user)
            setIsAuth(true)
            // setBtnLoading(false)
            navigate("/");
            fetchPins()
        } catch (error) {
            toast.error(error.responce.data.message);
            
            setBtnLoading(false)
            
        }
        
    }
    
    const [loading,setLoading]= useState(true)
    async function fetchUser() {
        try {
            console.log("Fetching user...");
            const { data } = await axios.get("/api/user/me");
            console.log("User fetched:", data);  // Check if data is returned
            setUser(data);
            setIsAuth(true);
            // setLoading(false);
        } catch (error) {
            console.error("Error fetching user:", error);
            setLoading(false);
        }
    }


      // Trigger fetchUser on component mount
      useEffect(() => {
        console.log("useEffect triggered");  // Check if useEffect is triggered
        fetchUser();
    }, []);

    async function followUser(id , fetchUser){
        try{
            const {data } = await axios.post("/api/user/follow/"+id)
            toast.success(data.message);
            fetchUser();
    
        }catch(error){
            toast.error(error.response.data.message);
        }
    }
    


    return (
        <UserContext.Provider value={{loginUser,isAuth,user,registerUser,setIsAuth,setUser, followUser,}}>
            {children}
            <Toaster/>
        </UserContext.Provider>
    )
}
/**/
export const UserData =()=>useContext(UserContext);