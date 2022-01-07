


function Contact (props){


    return(
        <div id="container">
        <img src={props.results.picture.medium}/> <p><h1><strong>{props.results.name.first} {props.results.name.last}</strong></h1>
        <h3><strong>Home: {props.results.phone}</strong></h3><h3><strong>Cell: {props.results.cell}</strong></h3></p>
        </div>
    )
}


export default Contact;