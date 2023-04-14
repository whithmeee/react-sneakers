function Drawer() {
  return (
<div style={{display: 'none'}} className='drawer-overlay'>
        <div className='drawer d-flex flex-column'>
          <h2 className="d-flex justify-between mb-30">Корзина<img className="cu-p" src="/img/icons/close_btn.svg" alt="close" /></h2>

          <div className='items flex'>
            <div className='cartItem d-flex align-center'>
              <img className='cartItemImg' src='/img/sneakers/image 3.jpg' alt='' />
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='close-btn' src='/img/icons/close_btn.svg' alt='close' />
            </div>

            <div className='cartItem d-flex align-center'>
              <img className='cartItemImg' src='/img/sneakers/image 5.jpg' alt='' />
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='close-btn' src='/img/icons/close_btn.svg' alt='close' />
            </div>
          </div>
          

          <div className='cardTotalBlock'>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>

              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenBtn">Оформить заказ <img src="/img/icons/arrow.svg" alt="arrow"/></button>
          </div>
        </div>
      </div>
  )
}

export default Drawer;