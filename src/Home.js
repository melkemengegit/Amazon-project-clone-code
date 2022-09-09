import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt="home-image"
            />

        <h1 className="home__topic">Electronics & Easy returns</h1>
            <div className="home__row">
                <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically   Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_SX425_.jpg" alt=""/>
                
                <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
                
                <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            </div>

        
        <h1 className="home__topic">Health & Personal Care</h1>
            <div className="home__row">
                <Product
                id="3254354345"
                title="Colgate Extra Clean Toothbrush, Full Head, SoftÂ 6 Count (Pack of 1)"
                price={598.99}
                rating={6}
                image="https://images-na.ssl-images-amazon.com/images/I/5117vByOKXL._SX300_SY300_QL70_FMwebp_.jpg"/>
                
                <Product
                id="90829332"
                title="Philips Sonicare Genuine C2 Optimal Plaque Control Toothbrush Heads, 3 Brush Heads, White, HX9023/65"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71YsyR9MpGL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
                
                <Product
                id="90829332"
                title="Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefits in 1 Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71lzpWViySL.__AC_SY445_SX342_QL70_FMwebp_.jpg"/>
            </div>
        
        <h1 className="home__topic">Beauty and Personal Care</h1>
            <div className="home__row">               
                <Product
                id="90829332"
                title="Crest 3D Whitestrips, Professional Effects, Teeth Whitening Strip Kit, 44 Strips (22 Count Pack)"
                price={63425}
                rating={4}
                image="https://m.media-amazon.com/images/I/917KyYdEOWL._AC_UL480_QL65_.jpg"/>
                
                <Product 
                id="90829332"
                title="Color Wow Dream Coat Supernatural Spray – Multi-award-winning anti-frizz spray keeps hair frizz-free for days no matter the weather with moisture"
                price={1094.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/71rE4Ul3-0L._SX522_.jpg"/>
                
                <Product
                id="90829332"
                title="PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Ounce (Pack of 1)"
                price={1094.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/61scf7kONPL._AC_SX522_.jpg"/>
            </div>
        </div>
    </div>
    )
}

export default Home