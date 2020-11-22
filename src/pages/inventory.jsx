import Dashboard from './dashboard'
import Login from './login'
export default function Inventory(props){
    console.log(props)
    return(
        <>
        {props.login ? <Dashboard {...props}/> :<Login login_user={props.login_user}/> }
        </>
    )
}