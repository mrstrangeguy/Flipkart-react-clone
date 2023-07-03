import { faAngleDown,faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import sliderData from './imageSliderData'
import electronicProductBg from '../images/bg-1.webp'
import mainProduct1 from '../images/main-product-6.webp'
import ElectronicProducts from './Electronicproduct'
import BeautyFoodandmore from './Beautyfoodandmore'
import Campusdeals from './Campusdeals'
import './Main.css'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'
function Main() {
    console.log(sliderData)
    // const [activeIndex,setActiveIndex]=useState(1)
    //  let currentIndex;
    // const updateIndex=(newIndex)=>{
    //     if(newIndex<0){
    //         newIndex=0
    //     }
    //     else if(newIndex>=sliderData.length){
    //       newIndex=sliderData.length-1
    //     }
    //     setActiveIndex(newIndex)
    // }
    //slider 1
    const [buttonValues,setValues]=useState({
        leftButton1Check:false,
        rightButton1Check:true
    })
    
     
      
    //   productSlider.style.transform="translateX(-22%)"
   
    let leftBtn1=document.getElementById("left-btn1")
    // leftBtn1.style.visibility="hidden"
    const moveSliderLeft1=()=>{
     
        let  productSlider=  document.getElementById("product-item-slider1")
        let productSliderWidth=productSlider.getBoundingClientRect().width
        
     
      
            // productSlider.style.transform="translateX(-22%)"
          
            if(window.innerWidth>1200){
                productSlider.style.transform="translateX(-22%)"
            }
            else if(window.innerWidth<=1200){
                productSlider.style.transform="translateX(-30%)"
            }
            else if(window.innerWidth<=768){
                productSlider.style.transform="translateX(-200%)"
            }
              if(window.innerWidth>1200){
                let  rightBtn1=document.getElementById("right-btn1")
                let leftBtn1=document.getElementById("left-btn1")
              
                leftBtn1.style.visibility="hidden"
                rightBtn1.style.visibility="visible"
              }
            
     

    }

    const moveSliderRight1=()=>{
        

        let productSlider=document.getElementById("product-item-slider1")
        
        
            productSlider.style.transform="translateX(0%)"
        
        
            
        
         
        
         if(window.innerWidth>1200){
            let  rightBtn1=document.getElementById("right-btn1")
            let leftBtn1=document.getElementById("left-btn1")
            rightBtn1.style.visibility="hidden"
            leftBtn1.style.visibility="visible"
         
         }
           
        
    }
    //slider 2
    let leftBtn2=document.getElementById("left-btn2")
    // leftBtn2.style.visibility="hidden"
    const moveSliderLeft2=()=>{
        let productSlider=document.getElementById("product-item-slider2")
       
        if(window.innerWidth>1200){
            productSlider.style.transform="translateX(-22%)"
        }
        else if(window.innerWidth<=1200){
            productSlider.style.transform="translateX(-30%)"
        }
        else if(window.innerWidth<=768){
            productSlider.style.transform="translateX(-200%)"
        }
         
        
         if(window.innerWidth>=1200){
            let  rightBtn2=document.getElementById("right-btn2")
            let leftBtn2=document.getElementById("left-btn2")
            rightBtn2.style.visibility="visible"
            leftBtn2.style.visibility="hidden"
         }
         productSlider.style.transform="translateX(-22%)"
            
         
    }
    const moveSLiderRight2=()=>{
        let productSlider=document.getElementById("product-item-slider2")
        
        
        productSlider.style.transform="translateX(0%)"
        
        if(window.innerWidth>=1200){
            let  rightBtn2=document.getElementById("right-btn2")
        let leftBtn2=document.getElementById("left-btn2")
        rightBtn2.style.visibility="hidden"
        leftBtn2.style.visibility="visible"
        }
    }
    //slider 3
    const moveSliderLeft3=()=>{
        let productSlider=document.getElementById("product-item-slider3")
        
        
        productSlider.style.transform="translateX(-22%)"
        let  rightBtn3=document.getElementById("right-btn3")
        let leftBtn3=document.getElementById("left-btn3")
        rightBtn3.style.visibility="visible"
        leftBtn3.style.visibility="hidden"
    }
    const moveSLiderRight3=()=>{
        let productSlider=document.getElementById("product-item-slider3")
        
        
        productSlider.style.transform="translateX(0%)"
        let  rightBtn3=document.getElementById("right-btn3")
        let leftBtn3=document.getElementById("left-btn3")
        rightBtn3.style.visibility="hidden"
        leftBtn3.style.visibility="visible"
    }
    let start=0
    let end=-400
   
    const handlePrevImage=()=>{
        let imageSliderItem=document.querySelectorAll(".image-slider-list")


        start+=100
        if(start < 0)
        
        imageSliderItem.forEach(e=>{
        e.style.transform=`translateX(${start}%)`
        })
        
       
        
    }
    const handleNextImage=()=>{
        let imageSliderItem=document.querySelectorAll(".image-slider-list")

        start-=100
        if(start > end)
        
        imageSliderItem.forEach(e=>{
        e.style.transform=`translateX(${start}%)`
        })
        
        
    }
    const renderImageSlider=()=>{
        if(start>end){
            handleNextImage()
        }
        else{
            start=100
        }
    }
    setInterval(renderImageSlider,5000)
      
  
  return (
   <main>
    <div className="feature-products">
        <div className="feature-product-list">
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Grocery</p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Mobiles</p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Fashion<FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Electronics<FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Home & Furniture<FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Appliances <FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Travel</p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Top Offers</p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Beauty,Toys & More <FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
            <div className="feature-product-item">
                <div className="feature-product-image">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" />
                </div>
                <p className='feature-product-name'>Two Wheelers <FontAwesomeIcon icon={faAngleDown} className="feature-product-icon"/></p>
            </div>
        </div>
    </div>
    <div className="image-slider-container">
        <div className="image-slider-btn">
          <button className='slider-left-btn' onClick={handlePrevImage} ><FontAwesomeIcon icon={faAngleLeft} className="img-slider-btn-icon" /></button>
          <button className='slider-right-btn' onClick={handleNextImage} ><FontAwesomeIcon icon={faAngleRight} className="img-slider-btn-icon" /></button>
        </div>
        
        <div className="image-slider-list" >
            
            {
                sliderData.map((element,index)=>{
                    
                    return(
                        <div className="image-slider-item" key={index}>
                        <a  href={element.imgLink}>
                        <img src={element.imgSrc} alt="" className='image-slider-img'/>
                        </a>
                    </div>
                    )
                })
            }
        </div>
       
    </div>
    <div className="best-of-electronic-container">
        <div className="bestofelectronic-buttons">
            <button className="best-of-electronic-left-btn" onClick={moveSliderLeft1} id="left-btn1">
            <FontAwesomeIcon icon={faAngleLeft} className="img-slider-btn-icon" />
            </button>
            <button className="best-of-electronic-right-btn" onClick={moveSliderRight1} id="right-btn1">
            <FontAwesomeIcon icon={faAngleRight} className="img-slider-btn-icon" />
            </button>
        </div>
        <div className="best-of-electronic-list">
          <div className="best-of-electronic-item">
            <div className="best-of-electronic-text">
                    Best of Electronics
                </div>
                <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU" className='view-all-btn'>View All</a>
                <div className="best-of-electronic-more-option">
                    <img src={electronicProductBg} alt="" />
                </div>
                
            </div>
            <div className="best-of-electronic-product-item" id='product-item-slider1'>

            
           
             {
                ElectronicProducts.map((element,index)=>{
                    return(
                        <div className="best-of-electronic-item" key={index}>
                        <div className="best-of-electronic-product-image" >
                    <img src={element.img} alt="" />
                </div>
                
                <div className="best-of-electronic-more-option">
                    <p className='best-of-product-name'>{element.name}</p>
                    <p className='best-of-electronic-price'>{element.price}</p>
                    <p className='best-of-electronics-brand'>{element.brand}</p>
                </div>
                
                </div>      
                    )
                })
             }
             </div>
            
           </div>
    </div>
    <div className="best-of-electronic-container">
        <div className="bestofelectronic-buttons">
            <button className="best-of-electronic-left-btn" onClick={moveSliderLeft2} id="left-btn2">
            <FontAwesomeIcon icon={faAngleLeft} className="img-slider-btn-icon" />
            </button>
            <button className="best-of-electronic-right-btn" onClick={moveSLiderRight2} id="right-btn2">
            <FontAwesomeIcon icon={faAngleRight} className="img-slider-btn-icon" />
            </button>
        </div>
        <div className="best-of-electronic-list">
          <div className="best-of-electronic-item">
            <div className="best-of-electronic-text beauty-food-and-more">
                    Beauty,Food,Toys and more
                </div>
                <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU" className='view-all-btn'>View All</a>
                <div className="best-of-electronic-more-option">
                    <img src={electronicProductBg} alt="" />
                </div>
                
            </div>
            <div className="best-of-electronic-product-item" id='product-item-slider2'>

            
           
             {
                BeautyFoodandmore.map((element,index)=>{
                    return(
                        <div className="best-of-electronic-item" key={index}>
                        <div className="best-of-electronic-product-image" >
                    <img src={element.img} alt="" />
                </div>
                
                <div className="best-of-electronic-more-option">
                    <p className='best-of-product-name'>{element.name}</p>
                    <p className='best-of-electronic-price'>{element.price}</p>
                    <p className='best-of-electronics-brand'>{element.brand}</p>
                </div>
                
                </div>      
                    )
                })
             }
             </div>
            
           </div>
    </div>
    <div className="best-of-electronic-container">
        <div className="bestofelectronic-buttons">
            <button className="best-of-electronic-left-btn" onClick={moveSliderLeft3} id="left-btn3">
            <FontAwesomeIcon icon={faAngleLeft} className="img-slider-btn-icon" />
            </button>
            <button className="best-of-electronic-right-btn" onClick={moveSLiderRight3} id="right-btn3">
            <FontAwesomeIcon icon={faAngleRight} className="img-slider-btn-icon" />
            </button>
        </div>
        <div className="best-of-electronic-list">
          <div className="best-of-electronic-item">
            <div className="best-of-electronic-text beauty-food-and-more">
                    Beauty,Food,Toys and more
                </div>
                <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU" className='view-all-btn'>View All</a>
                <div className="best-of-electronic-more-option">
                    <img src={electronicProductBg} alt="" />
                </div>
                
            </div>
            <div className="best-of-electronic-product-item" id='product-item-slider3'>

            
           
             {
                Campusdeals.map((element,index)=>{
                    return(
                        <div className="best-of-electronic-item" key={index}>
                        <div className="best-of-electronic-product-image" >
                    <img src={element.img} alt="" />
                </div>
                
                <div className="best-of-electronic-more-option">
                    <p className='best-of-product-name'>{element.name}</p>
                    <p className='best-of-electronic-price'>{element.price}</p>
                    <p className='best-of-electronics-brand'>{element.brand}</p>
                </div>
                
                </div>      
                    )
                })
             }
             </div>
            
           </div>
    </div>
   </main>
  )
}

export default Main
