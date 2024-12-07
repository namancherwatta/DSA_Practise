import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
export const Authcontext=createContext()
export const AuthProvider= ({children})=> {
    const [games,setGames]=useState()
    useEffect(()=>{
        const fetchGames=async()=>{
            try {
                const {data} = await axios.get("http://localhost:4001/api/games/allgames", { withCredentials: true })
                console.log(data)
                setGames(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGames()
    },[])
  return (
   <Authcontext.Provider value={{games}}>{children}</Authcontext.Provider>
  )
}

export const useAuth=()=> useContext(Authcontext)
