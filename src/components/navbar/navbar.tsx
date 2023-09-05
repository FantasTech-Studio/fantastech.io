import './styles.scss';

type NavbarProps = { 
    
}

export const Navbar = (props: NavbarProps) => {
    return <div className="navbar">
        <div className="logo">
            FantasTech
        </div>
        <div className="sections">
            <a href=''>Home</a>
            <a>About Us</a>
            <a>Services</a>
            <a>Contact</a>
        </div>
    </div>
}
