import {Link} from 'react-router-dom'
import articleFeaturedImage from './articleImages/shopify-article-banenr.jpeg'

function ArticleSnippet() {
  return (
    <section className='articlesnippet'>
      <div>
        <div className='tags'>
          <span>Shopify 2.0</span>
          <span>Development</span>
        </div>
        <div>
        <h3>July 13, 2021</h3>
        <h3>Shopify 2.0 - Should Small Business Owners Care?</h3>
        <p>Shopify introduces store 2.0 and the company is going in a clear decision towards making editing content and managing products easier. And this is all good for the end user to make Shopify more accessible and friendly.</p>
        <Link to='blog/shopify-20'><button className='basic-button'>Read More</button></Link>
        </div>

      </div>
      <div>
        <img src={articleFeaturedImage} alt="Article Featured Image" />
      </div>
    </section>
  )
}

export default ArticleSnippet;