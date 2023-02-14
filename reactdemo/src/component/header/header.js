import React, { Component } from "react";

class Header extends Component{

    render(){
        return(
            <header id="header" className="masthead" style={{backgroundImage:"url(/image/home-bg.jpg)"}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>{this.props.bannerTitle}</h1>
                                <span className="subheading">{this.props.subTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;