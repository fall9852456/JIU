import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import products from "../Json/beer.json";
function Product(){
    return(
        <div className="container mainlayout">
            <Header className="layoutHeader"
                
                
                
            />
            <Container products={products}
            className="layoutContainer"
            

            />
            <Footer className="layoutFooter"
            
            />
        </div>

    )
}
export default Product;