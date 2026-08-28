import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="header">
          <Image
            src="/fanex-logo.png"
            alt="FANEX Moving"
            width={220}
            height={70}
            className="logoImage"
            priority
          />

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
              Clear pricing. Real people. Solutions that work.
            </p>

            <div className="ratingRow">
              <div className="stars">★★★★★</div>
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
            <Image
              src="/truck-red.png"
              alt="FANEX Moving truck"
              width={900}
              height={650}
              className="truckImage"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}