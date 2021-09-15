import { useState } from "react"

export default function ReportTable(props){

    // const [hourly_sales,setSum] = useState([])

   console.log(props.sum);
    
    
    return (
        
            <table className="mx-auto w-1/2 my-4">
              <thead>
                <tr>
                  <th className="p-3 border border-gray-70 bg-green-600">Location</th>
                  {props.hours.map(hour => (
                    <th className="p-3 border border-gray-70 bg-green-600">{hour}</th>
                  ))}
                  <th className="p-3 border border-gray-70 bg-green-600">Total</th>
                  
                </tr>
              </thead>
              <tbody>
                {props.cookiesInformations.map(cookiesInformation => (
                  <tr key={`${cookiesInformation.id}`}>
                    <td className="p-3 pl-2 border bg-green-500">{cookiesInformation.location}</td>
                   
                    {cookiesInformation.hourly_sales.map(hour => (
                         <td className="p-3 pl-2 border bg-green-500">{hour}</td>
                ))
                    }
                     
                    <td className="p-3 pl-2 border bg-green-500">517</td>
                  </tr>))
                }
                <tr>
                <td className="p-3 pl-2 border bg-green-500"> Total </td>
                { props.sum.map( hour_sale=>(
                 
                    
                    
                    <td className="p-3 pl-2 border bg-green-500">{hour_sale}</td>
                     
                       
                     
                     
                ))
                
}
<td className="p-3 pl-2 border bg-green-500">{517*props.cookiesInformations.length}</td>
                </tr> 

                      
              </tbody>
            </table> 
  
            // <p className="text-center">No Questions Answered</p>
          
    )
}