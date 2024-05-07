import type { NextPage } from "next";

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
                    Adekanola Opolola <span>Computer Science Major</span>
                  </h2>
                  <p>
                  My name is Adekanola Opololaoluwa. I am currently a 2nd-year Computer science student at the University of Prince Edward Island. 
                  My passion for technology stems from my desire to learn and explore new things. 
                  I&apos;m constantly trying out new things and meeting new people in order to find new challenges and chances.. 
                  In my free time, I actively participate in sports and read books. 
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>adekanola38@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bsc Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 (902)-388-6389</span>
                      </p>
                    </div>
                    
                  </div>
                  <div className="row">
                    
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                     
                    </div>
                    <div className="skill-item padd-15">
                      
                    </div>
                    <div className="skill-item padd-15">
                      
                    </div>
                    <div className="skill-item padd-15">
                      
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
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">
                            UPEI - 2022
                          </h4>
                          <p className="timeline-text">
                            In 2022 i enrolled in the majors in computer science at the University Of Prince Edwards Island
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2020 I passed WAEC Exam and graduated with
                            GPA- 4.24. 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        
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
