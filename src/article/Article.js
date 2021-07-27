import Quiz from '../Quiz'

import featuredimage from '../articleImages/shopify-article-banenr.jpeg'
import shopifyarticleimage from '../articleImages/shopify20articleimage.png'
import shopifyarticleimage2 from '../articleImages/shopify20articleimage2.png'
import shopifyarticleimage3 from '../articleImages/shopify20articleimage3.png'

function Article() {
  return (
    <div className="page-top article">
      <div style={ {backgroundColor: `#071436` } } className='hero-article'>
        <h1>Shopify 2.0 - Should Small Business Owners Care?</h1>
        <h4>July 13, 2021</h4>
      </div>
      <div className='page-width'>
        <br/>
        <br/>
        <p>Below are three  big improvements to Shopify 2.0 that will make your life easier as a store owner to manage.</p>
        <h2>Theme app blocks</h2>
        <img src={shopifyarticleimage} alt="Shopify App" />
        <caption>Shopify App Blocks can be used inside the customizer</caption>
        <p>Currently adding an app integration can take over sections of your site without warning and require you to duplicate your theme before installing to make sure everything is copacetic. It isn't structured the best and can lead to complications for development. Theme app extensions with app blocks are game changing because they allow apps to be more modular and flexible. As a user you can select which app you'd like to use and where to place it neatly in your theme. Adding/Removing any apps become a breeze with this new feature.</p>
        <p>Since it’s no longer necessary to open up the theme code to manually install your app, you won’t have to worry about breaking changes being introduced. That means less time troubleshooting with users.</p>

        <h2>Improvements to Metafields</h2>
        <img src={shopifyarticleimage2} alt="Shopify 2.0 Metafields" />
        <caption>New way of adding metafields save time and money</caption>
        <p>One of my favorite new features is the addition of the in-store metafield editor. It can be found under settings - metafields.</p>
        <p>For throughout Shopify history a third party app would be needed to build out more product information using metafields. Now metafields are part of the store and there are more fields to choose from. Metafields in 2.0 can be used to store files as well that can easily be rendered on the storefront of your site. And all metafields can be deleted/added/modified from within the product page.</p>

        <h2>New Tree-view for the Editor/Customizer</h2>
        <img src={shopifyarticleimage3} alt="Shopify 2.0 Editor" />
        <caption>Editor UI makes it easy to see all blocks</caption>
        <p>You no longer have to go a layer deep to see what's inside your section. Everything can now be expanded and minimized for easier customizations. In addition to the standard editor elements, you can now inject liquid into sections just like you can html which gives a lot more customizable options.</p>
      </div>
      <div className='cta-article'>
        <p>If you'd like to get in touch and get some custom theme/app work done for your store. Reach out below by filling out the form.</p>
      </div>
      <Quiz />
    </div>
  )
}

export default Article;