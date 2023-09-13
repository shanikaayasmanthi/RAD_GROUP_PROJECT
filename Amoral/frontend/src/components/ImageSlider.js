import { useState } from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slides } from '../Data/Collection';
import NewRelease from "./NewRelease";
import "./ImageSlider.css";

function ImageSlider() {
    const responsive = {
        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 5
        // },
        // desktop: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 3
        // },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 
        }
    };

    return (
        <div>
            <Carousel responsive={responsive}
                infinite={true}
                // deviceType={this.props.deviceType}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                // showDots={true}
                ssr={true}
                // partialVisible={true}

            >
                <div className="slide_element"><NewRelease image={Slides[0].image} name={Slides[0].name} price={Slides[0].price} /></div>
                <div className="slide_element"><NewRelease image={Slides[1].image} name={Slides[1].name} price={Slides[1].price} /></div>
                <div className="slide_element"><NewRelease image={Slides[2].image} name={Slides[2].name} price={Slides[2].price} /></div>
                <div className="slide_element"><NewRelease image={Slides[3].image} name={Slides[3].name} price={Slides[3].price} /></div>
                <div className="slide_element"><NewRelease image={Slides[4].image} name={Slides[4].name} price={Slides[4].price} /></div>
                <div className="slide_element"><NewRelease image={Slides[5].image} name={Slides[5].name} price={Slides[5].price} /></div>
            </Carousel>
        </div>
    );
}


export default ImageSlider