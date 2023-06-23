import Navbar from "./components/Navbar.js";

export default function Home() {
  //   useEffect(() => {
  //     document.body.classList.add("bg-desktop");
  //   });
  return (
    <div
      className="home"
      style={{
        backgroundImage: "url('./assets/home/background-home-desktop.jpg')",
      }}
    >
      <Navbar />
      <div className="main-container">
        <div className="home-main">
          <div className="left-col">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <div className="text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="right-col">
            <div className="explore">
              <a className="btn-main" href="#">
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
