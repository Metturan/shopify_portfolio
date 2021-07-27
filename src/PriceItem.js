function PriceItem (props) {
  return (
    <div className='price-item'>
      <h3>{props.name}</h3>
      <div className='price-info'>
        <div>
          <span>timeline</span>
          <span>{props.item1detail}</span>
        </div>
        <div>
          <span>starting at</span>
          <span>{props.item2detail}</span>
        </div>
      </div>
    </div>
  )
}

export default PriceItem;