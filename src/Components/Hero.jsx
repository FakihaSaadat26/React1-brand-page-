const HeroSection = () =>{
return(
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src="/images/a.png" alt="amazon-logo" style={{width: '15px',height: 'auto',objectFit: 'contain',margin: '10px'
      }}/>
                    <img src="/images/f.png" alt="fb-logo" style={{
        width: '15px',
        height: 'auto',
        objectFit: 'contain',
        margin: '10px'
      }}/>

                </div>
            </div>
        </div>
        <div className="hero-image">
        <img src="/images/shoe.png" alt="shoe-logo"
        style={{
            width: '700px',
            height: 'auto',
            objectFit: 'contain',
            margin: '10px'
          }} />

        </div>
    </main>

);
};
export default HeroSection;