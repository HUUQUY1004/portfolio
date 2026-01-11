import type { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Huu Quy Portfolio",
  description: "Thông tin về tôi",
};
const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>My Skills</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Programming Languages */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-language" /></div>
          <h4>Programming Languages</h4>
          <p title="I am proficient in programming languages such as Java, 
          JavaScript, C++, and Go (Golang), and I have strong experience 
          working with their ecosystems and frameworks, including Node.js, Next.js, 
          React, and Spring Boot.">I am proficient in programming languages such as Java, 
          JavaScript, C++, and Go (Golang), and I have strong experience 
          working with their ecosystems and frameworks, including Node.js, Next.js, 
          React, and Spring Boot.</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Custom Web Design</h4>
          <p title="Create a stunning online presence with our custom web design services. Wel will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.">Create a stunning online presence with our custom web design services. Wel will tailor a website that
            not only
            looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: WordPress */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-linux" /></div>
          <h4>CI/CD</h4>
          <p title="I also have hands-on experience with CI/CD practices and tools such as Docker, 
            Jenkins, and GitHub Actions, which help streamline and automate the development and 
            deployment process.">I also have hands-on experience with CI/CD practices and tools such as Docker, 
            Jenkins, and GitHub Actions, which help streamline and automate the development and 
            deployment process.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Web Development</h4>
          <p title="Turn your digital ideas into reality with our web development solutions. We specialize in crafting
            robust
            and dynamic websites that are tailored to meet your specific business needs and objectives.">Turn your digital ideas into reality with our web development solutions. We specialize in crafting
            robust
            and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Integration of third-party services */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-film" /></div>
          <h4>Integration of third-party services</h4>
          <p title="I am capable of integrating third-party services into applications to 
            enhance functionality and improve user experience. For example, I have 
            experience working with payment gateways such as MoMo Payment, as well as 
            communication platforms like Stringee, 
            and I can effectively connect and manage their APIs within web applications.">I am capable of integrating third-party services into applications to 
            enhance functionality and improve user experience. For example, I have 
            experience working with payment gateways such as MoMo Payment, as well as 
            communication platforms like Stringee, 
            and I can effectively connect and manage their APIs within web applications.</p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: AI */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>AI</h4>
          <p title="I am capable of working effectively with
            various language models and have experience
            retraining them through methods such as Fine-tuning
            and Retrieval-Augmented Generation (RAG). In addition,
            I have a solid background in Machine Learning and
            Deep Learning, including models such as LSTM and Recommendation Systems (RS).">I am capable of working effectively with 
            various language models and have experience 
            retraining them through methods such as Fine-tuning 
            and Retrieval-Augmented Generation (RAG). In addition, 
            I have a solid background in Machine Learning and 
            Deep Learning, including models such as LSTM and Recommendation Systems (RS).
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
      {/* Service Item 7: Communication and teamwork skills*/}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-group" /></div>
          <h4>Communication and teamwork skills</h4>
          <p title="Strong communication and teamwork skills, with the ability to collaborate effectively in diverse teams and contribute to achieving common goals.">
           Strong communication and teamwork skills,
            with the ability to collaborate effectively
             in diverse teams and contribute to achieving common goals.
          </p>
        </div>
      </div>
      {/* Service Item 7 End */}
      {/* Service Item 8: Cloud*/}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-cloud" /></div>
          <h4>Cloud</h4>
          <p title="Strong communication and teamwork skills, with the ability to collaborate effectively in diverse teams and contribute to achieving common goals.">
            Experience with cloud platforms such as AWS and Google Cloud, including deploying and managing applications and services in cloud environments.
          </p>
        </div>
      </div>
      {/* Service Item 8 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
