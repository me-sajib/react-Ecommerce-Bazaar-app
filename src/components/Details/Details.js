import React from 'react';
import image from '../../img/images (13).jpg';
import './Details.css';


const Details = () => {
    return (
        <div>
           
            <section className='section-css'>
                 {/* parents div-1 */}
                 <div className='display'>
                     {/* img div */}
                      <div className='img-div'>
                         <img width='80%' src={image} alt="" />

                       </div>
                     {/* card div of product..... */}
                       <div className='card-div-css'>
                        <h1 > Name of Product</h1>
                        <br />
                        <h3>$6666.25</h3>
                        <br />
                      
                        <span className='new-span'>sku-525-sd-5552xc</span>
                        <br />
                        <br />
                        <span className='button-span'>
                        <input className='comon-css-input' type="text"  /><button className='btns'> <i class="fa-solid fa-cart-plus"></i> add to cart</button></span>
                     </div>

                 </div>
                 {/* parents div-2....... */}
                 
                 <div className='detail-div'>
                     <h1>Details About Product</h1>
                         {/* deatils of products */}
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum veritatis eaque. Natus velit eius veniam beatae laborum, id autem consequatur at dolores quas eligendi est quo delectus deleniti id autem consequatur at dolores quas eligendi est quo delectus delenitiasperiores.</p>
                     <button className='btnss'> <i class="fa-solid fa-trash-can"></i> Delete Product</button>

                 


                 </div>

            </section>
            
        </div>
    );
};

export default Details;