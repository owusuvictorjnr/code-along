import NavItem from "./NavItem"



function Navbar(){
    return(
        <nav className="flex justify-between ">
            <h3>
                Vitech Solutions
            </h3>
            <ul>
                <NavItem menu="Home"/>
                <NavItem menu="Products"/>
                <NavItem menu="Services"/>
                <NavItem menu="About"/>
                <NavItem menu="Contact"/>
            </ul>
        </nav>
    )
}

export default Navbar;