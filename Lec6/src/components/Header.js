export const Title = () => (
    <img  className="logo" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
    );
    const Header=() => {
        return (
            <div className="header"> 
               
                <Title/>
                <div className="header-home">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                </div>
            </div>
        );
    }
// export {Header,Title};
export default Header;