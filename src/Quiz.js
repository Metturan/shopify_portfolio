import useScript from './util/useScript'

function Quiz () {

  useScript('https://viewscom.leadshook.io/s/js_embed')

  return (
    <>
    {/* <div className="quiz-container" data-autoscroll="no" style={{textAlign: 'center'}}  data-quiz="EfUn3ddW15F5bm8lWbJsvHteGWBFtrEnM01HiyZc" ></div> */}
    <div className="quiz-container" style={{textAlign: 'center'}} data-quiz="EfUn3ddW15F5bm8lWbJsvHteGWBFtrEnM01HiyZc" data-offset="0" data-autoscroll="no"></div>
    </>
  )
}

export default Quiz;