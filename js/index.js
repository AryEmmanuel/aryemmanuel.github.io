function Navbar() {
    return (
        <div className="row start header middle-xs">
            <div className="col-xs-3 col-xs-offset-1">
                <div className="container">
                    <h2 className="name"><a href="index.html">Ary Caballero</a></h2>  
                </div>                  
            </div>
            <div className="col-xs-2  col-xs-offset-2 center-xs">
                <h3>
                    <a href="about.html">About me</a>  
                </h3>                  
            </div>
            <div className="col-xs-2 center-xs">
                <h3>
                    <a href="cv.html" className="selected">My CV</a>  
                </h3>                  
            </div>
            <div className="col-xs-2 center-xs">
                <h3>
                    <a href="projects.html">Projects</a>
                </h3>                  
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer normal-f">
            <div className="row start middle-xs corregir" >
                <div className="col-xs-1  col-xs-offset-8 center-xs">
                    <div className="containe">
                        <h2><a href="https://www.linkedin.com/in/ary-emmanuel-caballero-%C3%A1vila-a512801b0/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a></h2>  
                    </div>                  
                </div>
                <div className="col-xs-1 center-xs">
                    <div className="containe">
                        <h2><a href="mailto:aryemmanuel599@gmail.com">
                            <i className="fa-solid fa-at"></i>
                        </a></h2>  
                    </div>                  
                </div>
                <div className="col-xs-1 center-xs">
                    <div className="containr">
                        <h2><a href="https://twitter.com/aryeCaballero">
                            <i className="fab fa-twitter"></i>
                        </a></h2>  
                    </div>                  
                </div>
                <div className="col-xs-1 center-xs">
                    <div className="containe">
                        <h2><a href="https://github.com/AryEmmanuel">
                            <i className="fab fa-github"></i>
                        </a></h2>  
                    </div>                  
                </div>
            </div>
        </div>
    )
}

const navbarRoot = ReactDOM.createRoot(document.getElementById("navbarDiv"))
const footerRoot = ReactDOM.createRoot(document.getElementById("footerDiv"))

navbarRoot.render(
    <Navbar />
)

footerRoot.render(
    <Footer />
)