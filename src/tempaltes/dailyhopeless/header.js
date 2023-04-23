import React from "react";
import Logo from "../../components/logo";
import Menu, { Currentline } from "../../components/menu";
import { Navigation} from "../../components/navigation";
import { sNav, sNavLogo, sNavMenu} from "./style";


const Header = ({data,scroll}) => {
    return(
        <Navigation
        style={sNav}>
            <nav className={ scroll ? "resize": ""} >
                <Logo 
                    size= {35}
                    style= {sNavLogo}
                />
                <div className="menu">
                    <Menu 
                        menu={data.second.map(node => (node.menu))}
                        style={sNavMenu}> 
                        <Currentline/>
                    </Menu>
                </div>
                    {/* <ButtonLanguage
                        className="language"
                        data={Data().second.map(node => (node.lang))}
                    >
                        <span>
                            {data.lang}
                        </span>
                    </ButtonLanguage> */}
            </nav>
        </Navigation>
    )
}



export default Header