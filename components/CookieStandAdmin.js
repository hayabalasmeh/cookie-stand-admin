import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
// import { list } from 'postcss'
import { useAuth } from '../contexts/auth'


export default function CookieStandAdmin({ stands, loading, onDelete,createResource }) {
    if (loading) return <p>Loading...</p>

  const { user, login, logout } = useAuth();
  
  const [cookiesInformations,setCookIesinfo] = useState([])
  const [sumTotal,setSumTotal] = useState([])

  function sumEachHour(){
    const hour_list = []
    let sum = 0
    for(let y=0; y < 14;y++){
        sum = 0
        for(let i =0; i <cookiesInformations.length; i++){
            sum = sum + cookiesInformations[i].hourly_sales[y]
        }

        hour_list.push(sum)


    
    
  console.log(hour_list);
}
    setSumTotal( hour_list)
  }
  useEffect(()=>{
   sumEachHour()

  },[cookiesInformations])

  function cookieInfoHandler(formInfo) {
    
    
   
    const cookiesInfo = {
      location: formInfo.location,
     
      hourly_sales: formInfo.hourly_sales,
      description: formInfo.description

      
    }

    setCookIesinfo(info => [...info, cookiesInfo])
    createResource(cookiesInfo)

  

   

  }


  const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
  


  return (
    <div >
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <Header/>
      <CreateForm cookieInfoHandler={cookieInfoHandler} />
      {stands?
      <ReportTable hours={hours}  sum= {sumTotal} stands={stands} onDelete={onDelete}/>:
      <p className="text-center ">No Cookies Stand available</p>
}
      </main>

      <footer className = "p-4 mt-8 bg-green-500 text-black-50" >
      <Footer cookiesInformations= {cookiesInformations}/>
      </footer>
    </div>
  )
}
