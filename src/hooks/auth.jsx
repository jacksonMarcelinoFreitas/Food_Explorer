//Criando contexto
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({});

  function signOut(){
    localStorage.removeItem("@food_explorer:token");
    localStorage.removeItem("@food_explorer:user");
    setData({});
  }

  async function signIn({email, password}){
    try {

      const response = await api.post("/sessions", {email, password});
      console.log(response.data)
      const { user, token } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user))
      localStorage.setItem("@food_explorer:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token })

    } catch (error) {

      if(error.response){

        alert(error.response.data.error);
        console.log(error.response.data.error);

      }else{

        alert("Não foi possível entrar.");

      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@food_explorer:token");
    const user = localStorage.getItem("@food_explorer:user");

    if(token, user){  
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }

  }, [])

  return(
    <AuthContext.Provider value={{
        signIn,
        signOut,
        user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )

}


function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}