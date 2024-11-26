
import './Hero.css';


function Hero() {


  return (
    <section className='section__hero'>
        <h1>How can we help?</h1>
        <div className='section__hero--search'>
          <input 
            type="text" 
            placeholder='Search'
            className='section__hero--input'
          />
          <button className='section__hero--button'>
            ➔
          </button>
        </div>
        
      </section>
  );
}


export default Hero;

