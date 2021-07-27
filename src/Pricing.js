import {useEffect, useRef} from'react'
import PriceItem from './PriceItem'

function Pricing () {
  const smallRef = useRef();
  const mediumRef = useRef();
  const largeRef = useRef();
  const xlRef = useRef();

  const sizeRef = useRef();

  const arrayofRefs = [smallRef, mediumRef, largeRef, xlRef]

  function changeSlide (size) {

    const sizeMenu = Array.from(sizeRef.current.children);
    
    sizeMenu.map((sizeTitle) => {
      let sizeName = sizeTitle.innerHTML.toLowerCase();
      if (size == sizeName) {
        sizeTitle.classList.add('active')
      } else {
        sizeTitle.classList.remove('active')
      }
    })

    arrayofRefs.map(item => {
      if (item.current.classList.contains(`${size}-price`)) {
        item.current.classList.remove('hide');
        setTimeout(() => { 
          item.current.classList.remove('visuallyhidden');
        }, 100)
      } else {
        
        item.current.classList.add('hide');
        setTimeout(() => { 
          item.current.classList.add('visuallyhidden');
        }, 100)
      }
    })
  }

  return (
    <div className='page-width'>
      <h2>Clear and affordable pricing <br/>for even small businesses.</h2>
      <p>For projects big and small.</p>
      <div ref={sizeRef} className='sizes'>
        <h3 className='active' onClick={() => changeSlide('small') } >Small</h3>
        <h3 onClick={() => changeSlide('medium') }>Medium</h3>
        <h3 onClick={() => changeSlide('large') }>Large</h3>
        <h3 onClick={() => changeSlide('xl') }>XL</h3>
      </div>
      <section className='price-settings'>
        <div ref={smallRef} className='small-price'>
          <PriceItem 
            name='Theme edits'
            item1detail='1 day'
            item2detail='$75' />
          <PriceItem 
            name='Setup Facebook tracking pixel' 
            item1detail='1 day' 
            item2detail='$75' />
          <PriceItem 
            name='Slide out cart' 
            item1detail='2 days' 
            item2detail='$199' />
          <PriceItem 
            name='Customize Product Page' 
            item1detail='1 day' 
            item2detail='$150' />
        </div>
        <div ref={mediumRef} className='medium-price hide visuallyhidden'>
          <PriceItem 
            name='In cart upsell'
            item1detail='2 days'
            item2detail='$375' />
          <PriceItem 
            name='Offer a gift with purchase' 
            item1detail='3 days' 
            item2detail='$475' />
          <PriceItem 
            name='Better website performance' 
            item1detail='3 days' 
            item2detail='$499' />
          <PriceItem 
            name='Product bundles' 
            item1detail='3 days' 
            item2detail='$499' />
        </div>
        <div ref={largeRef} className='large-price hide visuallyhidden'>
          <PriceItem 
            name='Migrate to Shopify'
            item1detail='7 days'
            item2detail='$999' />
          <PriceItem 
            name='Build a custom shopify theme' 
            item1detail='10 days' 
            item2detail='$1,900' />
          <PriceItem 
            name='Build wholesale site with accounts' 
            item1detail='9 days' 
            item2detail='$2,500' />
          <PriceItem 
            name='30 hours per month retainer' 
            item1detail='Monthly' 
            item2detail='$2,500' />
        </div>
        <div ref={xlRef} className='xl-price hide visuallyhidden'>
          <PriceItem 
            name='Build a custom Shopify app'
            item1detail='14 days'
            item2detail='$4,500' />
          <PriceItem 
            name='Custom product suggestion quiz' 
            item1detail='7 days' 
            item2detail='$1,500' />
          <PriceItem 
            name='Headless commerce with Contentful' 
            item1detail='14 days' 
            item2detail='$7,500' />
          <PriceItem 
            name='60 hours per month retainer' 
            item1detail='Monthly' 
            item2detail='$4,600' />
        </div>
      </section>
    </div>
  )
}

export default Pricing;