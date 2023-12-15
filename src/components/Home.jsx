import { CArdone } from './Navbar'
import hojiakbar from './img/01-01 1.png'
import rasm1 from './img/location.svg'
import rasm2 from './img/Property.svg'
import rasm3 from './img/Group (1).svg'

function Home() {
  return (
    <div className="hojiakbar">
      <div className="feruz">
        <div className="container">
          <h1 className='said'>Easy way to find a home <br />
            that’s perfect for you</h1>
          <div className="container">
            <h4 className='bun'>The find and most trusted marketplace of design & build house in the world.</h4>
          </div>
        </div>
      </div>
      <div className="bunyod">
        <div className="container">
          <div className='suxa'>
            <div className='say'>
              <h1 className='say1'>Rent</h1>
              <h1 className='say2'>Buy</h1>
              <h1 className='say3'>Sell</h1>
            <marquee  className='jiji'> <del>HOJIAKBAR</del></marquee>

            </div>
            <div className="hur">
              <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="1274" height="2" viewBox="0 0 1274 2" fill="none">
                  <path d="M0.259888 1.26758H1273.74" stroke="#E0E2E3" />
                </svg>
              </div>
            </div>
            <div className="xu">
              <div className="container">
                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="4" viewBox="0 0 79 4" fill="none" className='chi'>
                  <path d="M1.89514 2.26758H76.9854" stroke="#021112" stroke-width="3" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="tilla">
          <div className="container">
            <div className="til">
            <CArdone matn={"Location"} matn2={"Los Angels"} rasm={rasm1}/>
            <CArdone matn={"Property Type"} matn2={"Delux"} rasm={rasm2}/>
            <CArdone matn={"Average Price"} matn2={"$7000 - 8000"} rasm={rasm3}/>
            <button className='fss'>Search</button>
            </div>
          </div>
        </div>
      </div>
     


      <div className="container">
        <img src={hojiakbar} alt="rjfhipr" className='islom' />

      </div>
    </div>

  )
}

export default Home