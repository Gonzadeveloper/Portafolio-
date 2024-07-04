import Present from "../Presentacion/Present"
import Cards from "../Cards/Cards"


function Home(){
    return(
        <div className="container">
            <Present />
            <Cards />
        </div>
    )
}

export default Home;