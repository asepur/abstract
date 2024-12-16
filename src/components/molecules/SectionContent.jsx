
import '../organism/Section.css';
import ContentBox from './ContentBox';


function SectionContent() {


  return (

      <section className='section__content'>
        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/16cX4Fm/icon1.png'}
          title={"Using Abstract"} 
          text={"Abstract lets you manage, version, and document your designs in one place."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/vHRPdKZ/icon2.png'}
          title={"Manage your account"} 
          text={"Configure your account settings, such as your email, profile details, and password."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/16cX4Fm/icon3.png'}
          title={"Manage organizations, teams, and projects"} 
          text={"Use Abstract organizations, teams, and projects to organize your people and your work."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/yXcQcJz/icon4.png'}
          title={"Manage billing"} 
          text={"Change subscriptions and payment details."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/H2JFkFK/icon5.png'}
          title={"Authenticate to Abstract"} 
          text={"Set up and configure SSO, SCIM, and Just-in-Time provisioning."}
        />    

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'https://i.ibb.co/J7FwQLb/icon6.png'}
          title={"Abstract support"} 
          text={"Get in touch with a human."}
        />

      </section>

  );
}


export default SectionContent;