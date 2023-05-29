import Header from "../components/Header"
import ContentDetail from "../components/ContentDetail"
import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';
import products from "../Json/beer.json";
function Content() {
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );
    return (
        <div className="container mainlayout">
            <Helmet><title>product</title></Helmet>
            <Header className="layoutHeader"



            />

            <ContentDetail product={product}
                className="layoutContainer"

            />
            <Footer className="layoutFooter"

            />
        </div>

    )
}
export default Content;