
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt=" Profile"
              className="shadow-dark"
            />
            <h1>Đặng Hữu Quý</h1>
            <p>Backend Developer</p>
            <div className="social-links">
              <a href="https://www.facebook.com/danghuuquy1004" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/HUUQUY1004" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="www.linkedin.com/in/bridget1004" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
