export default function Header(props){
    console.log(props)
    return(
        <div className="header">
            <button className="button red" onClick={()=>props.logout()}>Logout</button>
            <span className="label">{props.name}</span>
        </div>
    )
}