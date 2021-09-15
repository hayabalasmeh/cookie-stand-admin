import { useAuth } from '../contexts/auth'

export default function LogInForm(){

    const { user, login, logout } = useAuth();

    function formHandleing(event){
        login(event.target.username.value,event.target.pass.value)
    }

    return (
        <>
        <form className="m-8 p-4 bg-green-300  rounded-md" onSubmit={(event) => formHandleing(event)}>
        <h2 className ="text-center text-xl">LogIn Form </h2>
        
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="customperhour">User Name</label>
        <input name="username"/>
        </div>
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="customperhour">Password</label>
        <input name="pass" type='password'/>
        </div> 
        <button className="mx-auto px-2 p-1 m-3 bg-green-500 text-black-50" >Sign In</button>
        </form>
        </>
    )
}