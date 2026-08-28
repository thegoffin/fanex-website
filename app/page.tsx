import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="header">
          <Image
            src="/fanex-logo-black.svg"
            alt="FANEX Moving"
            width={190}
            height={60}
            className="headerLogo"
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

        <div className="heroInner">
          <div className="heroText">
            <h1>
              MOVING
              <br />
              DONE
              <br />
              <span>RIGHT</span>.
            </h1>

            <p className="location">SACRAMENTO MOVING COMPANY</p>

            <p className="description">
              Reliable moving services in Sacramento and
              <br />
              beyond. On time, every time.
            </p>

            <div className="rating">
              <div className="ratingTop">
                <span className="stars">★★★★★</span>
                <span className="score">4.9/5</span>
              </div>

              <div className="trusted">
                Trusted by <strong>250+</strong> customers
              </div>
            </div>

            <div className="actions">
              <a href="tel:+19168609311" className="callButton">
                CALL NOW
              </a>

              <a href="tel:+19168609311" className="phone">
                (916) 860-9311
              </a>
            </div>
          </div>

          <div className="heroTruck">
            <Image
              src="/truck-red.png"
              alt="FANEX Moving truck"
              width={850}
              height={600}
              className="truck"
              priority
            />
          </div>
        </div>
      </section>

      <section className="why" id="about">
        <div className="whyInner">
          <div className="whyTitle">
            <span>WHY</span>

            <Image
              src="/fanex-logo.png"
              alt="FANEX"
              width={520}
              height={160}
              className="whyLogo"
            />

            <span>?</span>
          </div>

          <p className="whyEyebrow">WHY PEOPLE CHOOSE US</p>

          <h2>MOVING WITHOUT THE SURPRISES</h2>

          <p className="whySubtitle">
            Clear pricing. Real people. Solutions that work.
          </p>

          <div className="whyGrid">
            <div className="whyCard">
              <span className="number">01.</span>
              <div>
                <h3>FIXED PRICE.<br />NO SURPRISES.</h3>
                <p>The price we agree on is the price you pay.</p>
              </div>
            </div>

            <div className="whyCard">
              <span className="number">02.</span>
              <div>
                <h3>REAL PEOPLE.<br />REAL ACCESS.</h3>
                <p>Talk to real people who actually handle your move.</p>
              </div>
            </div>

            <div className="whyCard">
              <span className="number">03.</span>
              <div>
                <h3>FLEXIBLE BY<br />DEFAULT.</h3>
                <p>Plans change. We adapt and find a solution.</p>
              </div>
            </div>

            <div className="whyCard">
              <span className="number">04.</span>
              <div>
                <h3>OPEN. VISIBLE.<br />ACCOUNTABLE.</h3>
                <p>Follow us. See our work. Know who you're hiring.</p>
              </div>
            </div>

            <div className="whyCard">
              <span className="number">05.</span>
              <div>
                <h3>ONE MOVE. ONE<br />SOLUTION.</h3>
                <p>From simple moves to complicated ones — we figure it out.</p>
              </div>
            </div>

            <div className="whyCard">
              <span className="number">06.</span>
              <div>
                <h3>YOUR MOVE.<br />YOUR WAY.</h3>
                <p>Only what you need. Built around your move.</p>
              </div>
            </div>
          </div>

          <div className="findWay">WE FIND A WAY.</div>
        </div>
      </section>
    </main>
  );
}