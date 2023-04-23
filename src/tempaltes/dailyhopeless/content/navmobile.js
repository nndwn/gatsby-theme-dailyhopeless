import React from "react";
import Menu,{Currentline} from "../../../components/menu";
import { navmobile } from "../style";


const NavMobile = ({data}) => (
    <nav className="navMobile" css={navmobile}>
        <Menu
            menu={data}>
        <Currentline/>
        </Menu>
    </nav>
)

export default NavMobile