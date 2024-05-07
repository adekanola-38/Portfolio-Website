import type { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <main>
     <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Resume</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
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
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            University Of Prince Edward Island </h4>
                            
                            <div className="circle-dot" />
                                <p className="timeline-text">
                            I&apos;m currently a second year student</p>
                            <p>Relevant courses completed: Web Development Programming, Programming Practices, Linear Algebra, Data Structures and Algorithms.                    
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


export default Resume;
