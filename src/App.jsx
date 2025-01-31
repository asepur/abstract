
import './App.css'
import './styles/variables.css'
import Header from './components/organism/Header.jsx'
import Footer from './components/organism/Footer.jsx'
import Section from './components/organism/Section.jsx'


function App() {

  return (
    <>
    <Header />

    <Section />

    <Footer />

    <div className='sticky__btn'>
      <button className='sticky__btn--help'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'>
          <path fill='#fff' d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        </svg>
          Help
      </button>
    </div>

    </>
  )
}

export default App
