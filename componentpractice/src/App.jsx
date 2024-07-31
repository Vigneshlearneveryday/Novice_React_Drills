import './components/App.css'

function App(){
  return (
    <div>
      <div className="instagram-post-1">
        <div className="akar-iconstwitter-fill" />
        <img
          className="akar-iconsfacebook-fill"
          src="icons"
          alt="akar-iconstwitter-fill.png"
        />
        <section className="post-frame">
          <div className="post-frame-child" />
          <div className="rectangle-shape-parent">
            <div className="rectangle-shape" />
            <div className="wrapper-ellipse-shape">
              <img
                className="ellipse-shape-icon"
                src="https://cdn.pixabay.com/photo/2024/07/25/04/41/man-8920184_1280.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="secondary-frame">
            <div className="title-text-parent">
              <div className="title-text">
                <h1 className="ndlife-samuel">Vignesh</h1>
                <h3 className="product-design">MERN Stack Developer</h3>

              </div>
              <div className="personal-choise">
                <div className="vertical-line"/>
                <div className="i-choose-the">
                  I choose MERN Stack Development for just time pass and learning Full-stack Developement, Integrating MongoDB, Express, React, and Node.js to build seamless, user-friendly application
                </div>

              </div>
            </div>
            <div className="brand-frame">
              <div className="vector-icon-frame"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}