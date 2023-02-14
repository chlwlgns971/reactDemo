import React,{Component} from "react"

class NavLogo extends Component{
    render(){
        return(
            <>
            <a className="navbar-brand" href="#" onClick={(e)=>{e.preventDefault(); {this.props.changeBanner("React Blog","A Blog Theme by Start Bootstrap")}}}>{this.props.logoTitle}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            </>
        )
    }
}

export default NavLogo;