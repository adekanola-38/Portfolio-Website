
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/PNG/Logo.png"
              alt="Adekanola Logo"
              className="shadow-dark"
            />
            <h1>Adekanola Opolola</h1>
            <p>Computer Science Major</p>
            <div className="social-links">
        
              <a href="mailto:adekanola38@gmail.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
              <a href="https://github.com/adekanola-38" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="tel:+1800229933">
                <i className="fa fa-phone" />
              
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
