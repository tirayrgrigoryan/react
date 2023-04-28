
function Home(){
    return(
        <header>
            <div className="Logo">
                {/* <img src={require('./image/logo.png')} className='Logo'/> */}
                <img src='./image/logo.png' className='Logo'/>
            </div>
            <div className="Menu">
                <div className="Btn_nav"><a href="#Home">HOME</a></div>
                <div className="Btn_nav"><a href="#About">ABOUT US</a></div>
                <div className="Btn_nav"><a href="#Service">SERVICE</a></div>
                <div className="Btn_nav"><a href="#Portfolio">PORTFOILO</a></div>
                <div className="Btn_nav"><a href="#Contact">CONTACT</a></div>            </div>
        </header>
        
    )

}

export default Home;