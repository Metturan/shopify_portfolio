import {motion} from 'framer-motion';
import ArticleSnippet from './ArticleSnippet'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

function Blog() {
  return (
    <motion.div 
    key="blogpage"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    >
    <div className='page-top blog'>
      <div className="page-width">
        <h1 className='raw-title'>Shopify News & Announcements</h1>
        <ArticleSnippet />
      </div>
    </div>
    </motion.div>
  )
}

export default Blog