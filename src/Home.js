import React from 'react';
import CardItem from './CardItem';
import CartData from './CartData';

const Home = () => {
    console.log(CartData.productData)
    return (
        <div>
                <h1 className='text-center mt-3'>EASY SHOP</h1>
                    <section className='py-4 container'>
                        <div className='row justify-content-center'>
                            {CartData.productData.map((p,index)=> {
                                return(
                                    <CardItem img={p.image} title={p.desc} desc={p.desc}
                                     price={p.price} key={index} items={p}
                                    />
                                )
                            })}
                            

                        </div>
                    </section>
        </div>
       
    )
}

export default Home;