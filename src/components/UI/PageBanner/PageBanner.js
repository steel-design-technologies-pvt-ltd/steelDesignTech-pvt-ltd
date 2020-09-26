import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { pageBannerStaticContent } from '../../../assets/data/website-framework';
class PageBanner extends Component{
  state= {
    currentPageInfo: null
  }
  componentWillMount() {
    window.scrollTo(0,0);
    let hostName = window.location.pathname;
    pageBannerStaticContent.forEach((page) => {
      if(hostName.indexOf(page.pageId) > -1) {
        this.setState({currentPageInfo: page});
      }
    });
  }

  navigateToPage(pageLink) {
    console.log(pageLink);
  }

  render() {
    return (
      <section className="probootstrap-slider flexslider2 page-inner bannerPage">
          <div className="overlay"></div>
          <div className="probootstrap-wrap-banner">
          <div className="container">
              <div className="row">
              <div className="col-md-8">

                  <div className="page-title probootstrap-animate">
                  <div className="probootstrap-breadcrumbs">
                    {
                      this.state.currentPageInfo.breadCrumbUrl.map((crumb, index)=> {
                        return <Link key={index} to={{
                          pathname: crumb.link
                        }}>{crumb.linkName}</Link>
                      })
                    }<span>{this.state.currentPageInfo.currentLocation}</span>
                  </div>
                  <h1>{this.state.currentPageInfo.pageName}</h1>
                  </div>
              </div>
              </div>
          </div>
          </div>
          {/* <ul className="slides">
              <li style="background-image: url(img/slider_1.jpg);"></li>
              <li style="background-image: url(img/slider_4.jpg);"></li>
              <li style="background-image: url(img/slider_2.jpg);"></li>
          </ul> */}
      </section>
    );
  }
};

export default PageBanner;