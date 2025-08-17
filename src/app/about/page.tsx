import type { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Huu Quy Portfolio",
  description: "Thông tin về tôi",
};
const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Huu Quy a <span>Backend Developer</span>
                  </h2>
                  <p>
                    I am an Information Technology student with a strong background in web application development. Through both
                    academic coursework and personal projects, I have gained valuable experience in object-oriented programming
                    (OOP), machine learning, design patents, and mobile application development.
                    I aspire to become a well-rounded programmer with extensive hands-on experience. My goal over the next zve years
                    is to grow into a full-stack developer who can lead technical projects, contribute to architectural decisions, and stay
                    up to date with emerging technologies in order to build scalable, maintainable, and high-performance software
                    solutions
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.huuquyportfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>huuquy042003@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Informationn Technology</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>0795716506</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Ho Chi Minh</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>NodeJs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap & Tailwind</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Nong Lam University (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2021, I have been learning programming.
                            I started with HTML, CSS, Sass, JavaScript, and Bootstrap, 
                            and now I work as a Professional Web Designer.
                            In addition, I am studying Node.js, React, Docker,
                             and CI/CD tools such as Jenkins to expand my skills in modern web development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="certificate padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">Freelace</h4>
                          <p className="timeline-text">
                            I have taken on projects from friends as well as 
                            freelance projects from external clients to further
                            enhance my knowledge and gain more practical experience.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Certificate</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2025
                          </h6>
                          <h4 className="timeline-title"> Software Development With SCRUM </h4>
                          <p className="timeline-text">
                           By AXON ACTIVE
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
