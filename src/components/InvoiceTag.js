import React from 'react' ;
import './InvoiceTag.css';
import Logo from './Logo';

export const InvoiceTag = (props) => {
    
return (

<header className="invoicetag">

    <Logo />
    <div>
    <p>INVOICE </p>
    <p># {props.invoiceNumber}</p>
    {/* {props.children} */}
    </div>
</header>
)
};


// const toolbar = (props) => (
//     <header className="Toolbar">
    
//         <DrawerToggle clicked={props.drawerToggleClicked}/>
//         <div className = "ToolbarLogo">
//         <Logo />
//         </div>
//         <nav className="DesktopOnly">
//             <NavigationItems/>
//         </nav>
//     </header>
// )
