import Data from '../data/contact.json'
import Contact from './Contact';



function Main () {

    const {results} = Data

    return(
        <div>
            {results.map((results, index) => {
                return <Contact results={results} key={index } />
            })}
        </div>
    )
}

export default Main;