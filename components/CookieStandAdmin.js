import Head from 'next/head'
import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
export default function CookieStandAdmin() {

  const [cookiesInformations,setCookIesinfo] = useState([])

  function cookieInfoHandler(formInfo) {
    
    
   
    const cookiesInfo = {
      location: formInfo.location,
      hourly_sales: formInfo.hourly_sales
      
    }

    setCookIesinfo(info => [...info, cookiesInfo])


  }
  const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
  
  function getLatestReply() {
    if(cookiesInformations.length>=1){
      // console.log(cookiesInformations[cookiesInformations.length-1]);
      return    cookiesInformations[cookiesInformations.length-1]

      
    
    } else{
      return "No entries"
    }
  }

  return (
    <div >
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <Header/>
      <CreateForm cookieInfoHandler={cookieInfoHandler}/>
      {cookiesInformations.length ?
      <ReportTable hours={hours} cookiesInformations= {cookiesInformations}/>:
      <p className="text-center ">No Cookies Stand available</p>
}
      </main>

      <footer className = "p-4 mt-8 bg-green-500 text-black-50" >
      <Footer cookiesInformations= {cookiesInformations}/>
      </footer>
    </div>
  )
}
