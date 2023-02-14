import React,{Component} from "react";

class NavItem extends Component{

    render(){
        return(
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="#" onClick={(e)=>{e.preventDefault(); {this.props.changeBanner("Home","This is Home Area!")}}}>Home</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="#" onClick={(e)=>{e.preventDefault(); {this.props.changeBanner("About","This is About Area!")}}}>About</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="#" onClick={(e)=>{e.preventDefault(); {this.props.changeBanner("Post","This is Post Area!")}}}>Sample Post</a></li>
                    <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="#" onClick={(e)=>{e.preventDefault(); {this.props.changeBanner("Contact","This is Contact Area!")}}}>Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default NavItem