function Header() {
  return (
    <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img className='d-b' width={40} height={40} src='/img/icons/logo.png' alt='' />
          <div>
            <h3 className='text-uppercase'>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src='/img/icons/basket.svg' alt='' />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/icons/user.svg' alt='' />
          </li>
          <li>
            <img width={18} height={18} src='/img/icons/heart.svg' alt='' />
          </li>
        </ul>
      </header>
  )
}


export default Header;