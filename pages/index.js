import Head from 'next/head'
import React,{useState} from 'react'
export default function Home() {

  const [cookiesInformations,setCookIesinfo] = useState([])

  function cookieInfoHandler(event) {
    event.preventDefault();
    
   
    const cookiesInfo = {
      location: event.target.location.value,
      minCustomers: event.target.customperhour.value,
      maxCustomers: event.target.maxcustomperhour.value,
      avgCookies: event.target.averagecooki
    }

    setCookIesinfo(info => [...info, cookiesInfo])


  }
  
  function getLatestReply() {
    if(cookiesInformations.length>=1){
      
      return    JSON.stringify(cookiesInformations[cookiesInformations.length-1]

      
    )
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
      <header className = "flex items-start justify-between p-4 bg-green-500 text-black-500"><h1 className="text-xl">Cookie Stand Admin</h1></header>
      {/* <div className = "flex items-center"> */}
      <form className="m-8 p-4 bg-green-200  rounded-md" onSubmit={cookieInfoHandler}>
          <h2 className ="text-center text-xl">Create Cookie Stand </h2>
          <div className="flex items-stretch">
          <label className=" m-3"for="location">Location</label>
          <input name="location"className= " bg-gray-100 m-3 w-2/3" />
          </div>
          <div className="flex items-stretch">
          <label className=" m-3"for="customperhour">Minimum Customers Per Hour</label>
          <input name="customperhour"/>
          <label className=" m-3" for="maxcustomperhour">Maximum Customers Per Hour</label>
          <input name="maxcustomperhour"/>
          <label className=" m-3"for="averagecooki">Average Cookies Per Sale</label>
          <input name="averagecooki"/>
          <button className="px-2 p-1 m-4 bg-green-500 text-black-50" >Create</button>
          </div>
      </form>
    {/* </div> */}
    <h2 className ="text-center text-xl">{getLatestReply()}</h2>
      </main>

      <footer className = "p-4 mt-8 bg-green-500 text-black-50" >
      <p>&copy; 2021</p>
      </footer>
    </div>
  )
}
