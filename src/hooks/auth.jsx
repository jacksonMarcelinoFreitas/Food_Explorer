//Criando contexto
import { createContext, useContext } from "react";

const AuthContext = createContext({})

function AuthProvider({children}){
  return(
    <AuthContext.Provider value={{name:"Jackson Freitas", email:"jackson@gmail.com"}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}