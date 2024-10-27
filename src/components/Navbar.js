function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li><a href="#">{props.navHeader}</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">{props.navContact}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar