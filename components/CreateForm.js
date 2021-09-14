export default function CreateForm({cookieInfoHandler}){

    function formHandler(event){
        event.preventDefault();
        const formInfo = {
        location:event.target.location.value,
        hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        }
        cookieInfoHandler(formInfo)
    }

    return (
        <form className="m-8 p-4 bg-green-300  rounded-md" onSubmit={(e)=>formHandler(e)}>
        <h2 className ="text-center text-xl">Create Cookie Stand </h2>
        <div className="flex items-stretch">
        <label className=" m-3"for="location">Location</label>
        <input name="location"className= "bg-gray-100 m-3 w-2/3" />
        </div>
        <div className="flex items-stretch">
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="customperhour">Minimum Customers Per Hour</label>
        <input name="customperhour"/>
        </div>
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3" for="maxcustomperhour">Maximum Customers Per Hour</label>
        <input name="maxcustomperhour"/>
        </div>
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="averagecooki">Average Cookies Per Sale</label>
        <input name="averagecooki"/>
        </div>
        <button className="px-2 p-1 m-3 bg-green-500 text-black-50" >Create</button>
        </div>
    </form>
    )
}