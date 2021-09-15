import CookieStandAdmin from '../components/CookieStandAdmin'
import React, { useState } from 'react' 
import LogInForm from '../components/LogInForm'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
export default function Home() {
  const { user, login, logout } = useAuth();
  
  const { resources, loading, createResource, deleteResource } = useResource();
  
  
  
  


  return (
  <>
   {user ?
    <CookieStandAdmin stand = {resources} loading = {loading} onDelete={deleteResource} createResource={createResource}/>
   : <LogInForm login = {login} />
  
    
   }
    </>
    
  )
 
}

