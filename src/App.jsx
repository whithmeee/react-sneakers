import Card from "./componets/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";

const arrCard = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede'},
  {price: '12 999 руб.'},
  {img: '/img/sneakers/image 1.jpeg'},
];

function App() {
  return (
    <div className='wrapper clear'>
      
      <div>
        <Drawer/>
      </div>

      <div>
        <Header/>
      </div>

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='seacth-block d-flex'>
            <img src='/img/icons/poisk.svg' alt='' />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>

        
      
          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 2.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 3.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 4.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 5.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 6.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 7.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 8.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 9.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 1.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 4.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}

          {/* <div className='card'>
            <img width={133} height={112} src='/img/sneakers/image 13.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src='/img/icons/btn.svg' alt='' />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
