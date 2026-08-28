export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="header">
          <div className="logo">
            FAN<span>EX</span>
          </div>

          <nav className="nav">
            <a href="#services">SERVICES</a>
            <a href="#locations">LOCATIONS</a>
            <a href="#about">ABOUT US</a>
            <a href="#reviews">REVIEWS</a>
          </nav>

          <a href="#quote" className="quoteButton">
            GET A QUOTE
          </a>
        </header>

        <div className="heroContent">
          <div className="heroLeft">
            <p className="eyebrow">SACRAMENTO MOVING COMPANY</p>

            <h1>
              MOVING
              <br />
              DONE
              <br />
              <span>RIGHT.</span>
            </h1>

            <p className="heroDescription">
              Professional moving services built around your move.
              Clear pricing, real people and a team that finds a way.
            </p>

            <div className="rating">
              <span className="stars">★★★★★</span>
              <strong>4.9/5</strong>
              <span>Trusted by 250+ customers</span>
            </div>

            <div className="heroActions">
              <a href="tel:+19168609311" className="callButton">
                CALL NOW
              </a>

              <a href="tel:+19168609311" className="phone">
                (916) 860-9311
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="truckPlaceholder">
              TRUCK IMAGE
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
