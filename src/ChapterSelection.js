
function ChapterSelection (props) {

  return (
    <>
    <div ref={props.section[0]} className='section-names active'>
      <h1 className='titleId'>Dynetics Lunar Landing</h1>
      <p className='hide'>Created a mobile webAR experience to present a concept lander to be used by NASA for the Mars missions. Cinematic Web experience using three.js with AR capabilities.</p>
      <h2 className='hide'>See Case Study</h2>
    </div>
    <div ref={props.section[1]} className='section-names'>
      <h1 className='titleId'>Nanoleaf</h1>
      <p className='hide'>Developed a Shopify custom theme, API integrations, blog, custom CMS development, translations in multiple languages. Wordpress to Shopify migration. Shopify E-commerce integrated data across 6 different regions.</p>
      <h2 className='hide'>See Case Study</h2>
    </div>
    <div ref={props.section[2]} className='section-names'>
      <h1 className='titleId'>O2B Kids</h1>
      <p className='hide'>Developed custom WP theme, Google Cloud API integrations, blog, custom backend CMS development, Custom post types, ACF.</p>
      <h2 className='hide'>See Case Study</h2>
    </div>
    <div ref={props.section[3]} className='section-names'>
      <h1 className='titleId'>Interface Consulting</h1>
      <p className='hide'>WP Custom plugin development. Created client portal and customized project management software for clients and consultants to use on the front end for file-sharing of documents and important dates.</p>
      <h2 className='hide'>See Case Study</h2>
    </div>
    <div ref={props.section[4]} className='section-names'>
      <h1 className='titleId'>FOOi</h1>
      <p className='hide'>A simple app to tip, donate, split a bill with friends and to share money in the moment.</p>
      <h2 className='hide'>See Case Study</h2>
    </div>
    </>
  )
}

export default ChapterSelection;