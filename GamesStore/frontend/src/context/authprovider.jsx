import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
export const Authcontext=createContext()
export const AuthProvider= ({Children})=> {
    const [games,setGames]=useState()
    useEffect(()=>{
        const fetchGames=async()=>{
            try {
                const response = await axios.get("http://localhost:4001/api/games/allgames")
                console.log(response)
                setGames(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGames()
    },[])
  return (
   <Authcontext.Provider value={{games}}>{Children}</Authcontext.Provider>
  )
}

export const useAuth=()=> useContext(Authcontext)
