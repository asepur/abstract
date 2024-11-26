
import '../organism/Section.css';
import ContentBox from './ContentBox';


function SectionContent() {


  return (

      <section className='section__content'>
        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon1.png'}
          title={"Using Abstract"} 
          text={"Abstract lets you manage, version, and document your designs in one place."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon2.png'}
          title={"Manage your account"} 
          text={"Configure your account settings, such as your email, profile details, and password."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon3.png'}
          title={"Manage organizations, teams, and projects"} 
          text={"Use Abstract organizations, teams, and projects to organize your people and your work."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon4.png'}
          title={"Manage billing"} 
          text={"Change subscriptions and payment details."}
        />

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon5.png'}
          title={"Authenticate to Abstract"} 
          text={"Set up and configure SSO, SCIM, and Just-in-Time provisioning."}
        />    

        <ContentBox 
          className={"section__content--box"}
          imgSrc={'src/assets/img/icon6.png'}
          title={"Abstract support"} 
          text={"Get in touch with a human."}
        />

      </section>

  );
}


export default SectionContent;