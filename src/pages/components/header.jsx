export default function Header(props){
    console.log(props)
    return(
        <div>
            <span>{props.name}</span>
            <button>Logout</button>
        </div>
    )
}