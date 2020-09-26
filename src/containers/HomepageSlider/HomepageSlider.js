import React, { Component } from 'react';
// import SearchSite from '../../components/UI/SearchSite/SearchSite';
import Slide from '../../components/UI/Slide/Slide';
import { sliderComponent } from '../../assets/data/website-framework';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HomepageSlider extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){
    return (
      <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        {
          sliderComponent.slideSection.map((slide,index)=>{
            return <Slide BGUrl={slide.backgroundImagePath} slideName={slide.slideName} key={index} />
          })
        }
      </Carousel>
    );
  }
}

export default HomepageSlider;