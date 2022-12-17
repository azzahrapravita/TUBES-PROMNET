
import React from 'react'
import './Home.css'
/*import Terminal from '../../assets/terminal.png'*/

const Home = () => {
    return (
        <div className='home'>
            <div className="home">
                <div className="right">
                    <div className="img-container">
                        {/* <img src={Terminal} alt=""/> */}
                    </div>
                </div>
                <div className="left">
                    <h2>Superpowers for DEFI developers.</h2>
                    <p>Checkout the <span className="blue">documentation </span>, the <span className="blue">quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
                    <p>Yuk lihat layanan yang mungkin sesuai dengan kebutuhan kamu di kolom menu di atas</p>
                    <p>Atau cari yang kamu butuhkan di kolom di bawah ini</p>
                </div>
            </div>
        </div>
    )
}

export default Home
