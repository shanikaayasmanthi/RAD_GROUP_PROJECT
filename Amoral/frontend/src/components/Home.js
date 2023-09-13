import Navbar from "./NavBar";
import cover from "../Assets/cover.jpg"
import "./Home.css";
import NewRelease from "./NewRelease";
import { Slides } from "../Data/Collection";
import ImageSlider from "./ImageSlider";
import SignIn from "./SignIn";

function Home() {
    return (

        <div>

            {/* <SignIn/> */}
            <Navbar />
            <img id="coverImg" src={cover} alt="Cover Page" />
            <h3>NEW COLLECTION RELEASE</h3>
            <div className="categoery_1">
                {
                    Slides.map((element, index) => {
                        return <NewRelease className="cart" key={index} image={element.image} name={element.name} price={element.price} />

                    })

                }
            </div>
            <div className="Slider">
                <ImageSlider/>
            </div>
            <p>sffsdgsd</p>
        </div>

    )
}

export default Home