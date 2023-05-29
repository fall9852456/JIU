import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Square from "../components/Square"
import Firstpage from "../components/Firstpage"
import Footer from "../components/Footer"
function Home(){
    return(
     <div>
       <Header/>
       <Carousel/>
       <Square/>
       <Firstpage/>
       <Footer/>
     </div>
    );
}

export default Home;