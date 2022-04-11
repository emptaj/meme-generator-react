import TrollFace from '../images/TrollFace.png'
const Header = () => {
    return (
        <div className="header">
            <img src={TrollFace}></img>
            <p>MemeGenerator</p>
            <p className="header-title">React Course - Project 3</p>
        </div>
    );
}

export default Header;