import { useAuth } from '../contexts/auth'

export default function LogInForm({login}){

    // const { user, login, logout } = useAuth();

    function formHandleing(event){
        event.preventDefault();
        const userInfo = {
            user:event.target.user.value,
            password :event.target.password.value
        }
        login(userInfo.user,userInfo.password)
        console.log(userInfo);
    }

    return (
        <>
        <form className="m-8 p-4 bg-green-300  rounded-md" onSubmit={(event) => formHandleing(event)}>
        <h2 className ="text-center text-xl">LogIn Form </h2>
        
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="user">User Name</label>
        <input name="user"/>
        </div>
        <div className="m-3 p-4 bg-green-200">
        <label className=" m-3"for="password">Password</label>
        <input name="password" type='password'/>
        </div> 
        <button className="mx-auto px-2 p-1 m-3 bg-green-500 text-black-50" >Sign In</button>
        </form>
        </>
    )
}