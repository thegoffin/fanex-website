import { Antonio, Inter } from "next/font/google";

const antonio = Antonio({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const imgBoxTruckRed =
  "https://www.figma.com/api/mcp/asset/56794e32-841a-4827-a47a-67487c676f7b.png";
const imgGoogleReviewLogoPng31 =
  "https://www.figma.com/api/mcp/asset/56ef4659-70eb-46e9-b491-8797a3da39e9.png";
const imgYelpLogoCmyk1 =
  "https://www.figma.com/api/mcp/asset/2e27af86-2878-46a2-bea0-0a7cd0f7aecf.png";
const imgTikTokLogoPng31 =
  "https://www.figma.com/api/mcp/asset/e5490b06-2a4b-457b-ba9e-2afde0de0bea.png";
const imgInstagramLogoPng51 =
  "https://www.figma.com/api/mcp/asset/30f95b59-5698-4e98-8001-ac3595c49d9b.png";
const imgFanexDarkLogo =
  "https://www.figma.com/api/mcp/asset/fd36ded2-17dc-492f-b05d-7ac8985df630.png";
const imgBestPrice1 =
  "https://www.figma.com/api/mcp/asset/9f9c86ad-269b-4e0d-9afd-a4821d3b3d00.png";
const imgBestPrice2 =
  "https://www.figma.com/api/mcp/asset/e3ede762-687a-4ced-bfa0-6070c472ee65.png";
const imgBestPrice3 =
  "https://www.figma.com/api/mcp/asset/e0386363-8582-4d8f-8097-68e138ba2b0b.png";
const imgBestPrice4 =
  "https://www.figma.com/api/mcp/asset/8edeecda-0299-40e7-b78f-9604dd969ee9.png";
const imgBestPrice5 =
  "https://www.figma.com/api/mcp/asset/4214250d-b87d-47ee-933c-412503aac619.png";
const imgFrame6 =
  "https://www.figma.com/api/mcp/asset/f5c05f2c-7447-40b9-9455-31fe93df497d.png";
const imgFrame7 =
  "https://www.figma.com/api/mcp/asset/0216d3c0-c968-406e-8ec4-fffe07a237db.png";
const imgFrame8 =
  "https://www.figma.com/api/mcp/asset/2492e392-ce3a-436e-98b9-6d3baf2055a1.png";
const imgFrame9 =
  "https://www.figma.com/api/mcp/asset/8b5deb53-2020-4288-a6b8-1450560d3f41.png";
const imgFrame13 =
  "https://www.figma.com/api/mcp/asset/0c72ef21-94f6-4c8b-bad3-1547131accc2.png";
const imgFrame14 =
  "https://www.figma.com/api/mcp/asset/651001e7-b58d-4b73-89d2-8df9c35dbc6b.png";
const imgFrame15 =
  "https://www.figma.com/api/mcp/asset/6f9ffdaf-e10c-4c05-a935-f11a91f3af51.png";
const imgFrame16 =
  "https://www.figma.com/api/mcp/asset/a791d667-8691-434b-a5f5-91a40f61d89f.png";
const imgFrame17 =
  "https://www.figma.com/api/mcp/asset/bcf1e7c9-e744-4dc5-ba6d-4b0f6ce7b2d5.png";
const imgFrame18 =
  "https://www.figma.com/api/mcp/asset/34f0d5cb-2d71-4400-b697-e305082b21cd.png";
const imgFrame19 =
  "https://www.figma.com/api/mcp/asset/c382370b-5e2f-4bfc-88f4-d2073368af84.png";
const imgFrame20 =
  "https://www.figma.com/api/mcp/asset/0dd61382-a13f-4d5c-91bd-59714282d9f9.png";
const imgFrame21 =
  "https://www.figma.com/api/mcp/asset/6772388e-4016-4f63-8352-205a59736d02.png";
const imgFrame22 =
  "https://www.figma.com/api/mcp/asset/f493c632-bb03-4838-8719-ec7bbaeba4b7.png";
const imgFrame23 =
  "https://www.figma.com/api/mcp/asset/186cc784-8800-4482-81fd-bc027aec4617.png";
const imgFrame24 =
  "https://www.figma.com/api/mcp/asset/bec308f4-da34-4d79-8c28-2acb0290fb03.png";
const imgFrame25 =
  "https://www.figma.com/api/mcp/asset/f5ac7e64-a2dc-4264-9443-d787d8a8dff2.png";
const imgFrame26 =
  "https://www.figma.com/api/mcp/asset/f344a8e8-7c4c-4264-a43c-ba8c697b63e2.png";
const imgFrame27 =
  "https://www.figma.com/api/mcp/asset/307d79dc-5767-4765-b4cf-012e572a2826.png";
const imgFrame28 =
  "https://www.figma.com/api/mcp/asset/36d3b3ee-cbbc-49b7-9a11-5221c5d92a25.png";
const imgFanexLogo =
  "https://www.figma.com/api/mcp/asset/8677ed1c-e48b-42e8-abca-20c65a5d5750.svg";
const imgArrow1 =
  "https://www.figma.com/api/mcp/asset/8b48d6e9-9b0e-4e35-9837-915704dfa7c2.svg";
const imgArrow2 =
  "https://www.figma.com/api/mcp/asset/5ab72ecd-e466-4aab-a14e-6ea553f0113f.svg";

export default function Home() {
  return (
    <main className={`${inter.className} homeRoot`}>
      <div className="desktopHome">
        <header className="homeHeader">
          <div className="homeHeaderNavContainer">
            <div className="homeHeaderLogoWrap">
              <img src={imgFanexLogo} alt="Fanex logo" className="homeHeaderLogo" />
            </div>

            <nav className="homeHeaderNav" aria-label="Main navigation">
              <a href="#services" className="homeHeaderNavServices">SERVICES</a>
              <a href="#locations" className="homeHeaderNavLocations">LOCATIONS</a>
              <a href="#about" className="homeHeaderNavAbout">ABOUT US</a>
              <a href="#reviews" className="homeHeaderNavReviews">REVIEWS</a>
            </nav>

            <div className="homeHeaderActions">
              <a href="#quote" className="homeHeaderQuoteButton">
                <span className="homeHeaderQuoteText">GET A QUOTE</span>
              </a>
            </div>
          </div>
        </header>

        <section className="homeHero" aria-label="Hero section">
          <div className="homeHeroContainer">
            <div className="homeHeroContent">
              <h1 className={`${antonio.className} homeHeroTitle`}>
                MOVING
                <br />
                DONE
                <br />
                <span>RIGHT</span>
                <span className="homeHeroPeriod">.</span>
              </h1>

              <div className="homeHeroLocation">SACRAMENTO MOVING COMPANY</div>

              <p className="homeHeroDescription">
                Reliable moving services in Sacramento and beyond. On time, every time.
              </p>

              <div className="homeHeroTrustRating">
                <div className="homeHeroRatingLine">
                  <span className="homeHeroStars">★★★★★</span>
                  <span className="homeHeroRatingScore">4.9/5</span>
                </div>
                <div className="homeHeroRatingText">
                  Trusted by <span>250+</span> customers
                </div>
              </div>

              <div className="homeHeroPrimaryCta">
                <a href="tel:+19168609311" className="homeHeroCallButton">
                  CALL NOW
                </a>
                <a href="tel:+19168609311" className="homeHeroPhoneNumber">
                  (916) 860-9311
                </a>
              </div>
            </div>

            <div className="homeHeroVisual">
              <img src={imgBoxTruckRed} alt="Box truck" className="homeHeroTruck" />
            </div>
          </div>
        </section>

        <section className="mediaStrip" aria-label="Media logos">
          <div className="logo googleLogo">
            <img src={imgGoogleReviewLogoPng31} alt="Google Review" />
          </div>
          <div className="logo yelpLogo">
            <img src={imgYelpLogoCmyk1} alt="Yelp" />
          </div>
          <div className="logo tiktokLogo">
            <img src={imgTikTokLogoPng31} alt="TikTok" />
          </div>
          <div className="logo instagramLogo">
            <img src={imgInstagramLogoPng51} alt="Instagram" />
          </div>
        </section>

        <section className="whySection" id="about">
          <div className="whyInner">
            <div className="whyHeader">
              <div className={`${antonio.className} whyWord`}>WHY</div>
              <div className="whyLogoWrap">
                <img src={imgFanexDarkLogo} alt="Fanex dark logo" className="whyLogo" />
              </div>
              <div className={`${antonio.className} whyQuestion`}>?</div>
            </div>

            <div className="whyIntro">
              <div className="whyEyebrow">WHY PEOPLE CHOOSE US</div>
              <h2>MOVING WITHOUT THE SURPRISES</h2>
              <div className="whySubtitle">Clear pricing. Real people. Solutions that work.</div>
            </div>

            <div className="benefitGrid">
              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>01.</div>
                  <div className="cardIcon">
                    <img src={imgBestPrice1} alt="Fixed price" />
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    FIXED PRICE.
                    <br />
                    NO SURPRISES.
                  </h3>
                  <p>The price we agree on is the price you pay.</p>
                </div>
              </div>

              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>02.</div>
                  <div className="cardIcon">
                    <img src={imgBestPrice2} alt="Real access" />
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    REAL PEOPLE.
                    <br />
                    REAL ACCESS.
                  </h3>
                  <p>Talk to real people who actually handle your move.</p>
                </div>
              </div>

              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>03.</div>
                  <div className="cardIcon cardIcon404">
                    <span className={antonio.className}>404</span>
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    FLEXIBLE BY
                    <br />
                    <span className="accentText">DEFAULT</span>.
                  </h3>
                  <p>
                    Plans change.
                    <br />
                    We adapt and find a solution.
                  </p>
                </div>
              </div>

              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>04.</div>
                  <div className="cardIcon">
                    <img src={imgBestPrice3} alt="Accountable" />
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    OPEN. VISIBLE.
                    <br />
                    ACCOUNTABLE.
                  </h3>
                  <p>Follow us. See our work. Know who you&apos;re hiring.</p>
                </div>
              </div>

              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>05.</div>
                  <div className="cardIcon">
                    <img src={imgBestPrice4} alt="One move" />
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    ONE MOVE. ONE
                    <br />
                    SOLUTION.
                  </h3>
                  <p>From simple moves to complicated ones — we figure it out.</p>
                </div>
              </div>

              <div className="benefitCard">
                <div className="cardSide">
                  <div className={`${antonio.className} cardNumber`}>06.</div>
                  <div className="cardIcon">
                    <img src={imgBestPrice5} alt="Your move" />
                  </div>
                </div>
                <div className="cardText">
                  <h3>
                    YOUR MOVE.
                    <br />
                    YOUR WAY.
                  </h3>
                  <p>Only what you need. Built around your move.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dividerLine" aria-label="We find a way divider">
            <div className="dividerArrow left">
              <img src={imgArrow1} alt="" />
            </div>
            <div className="dividerText">WE FIND A WAY.</div>
            <div className="dividerArrow right">
              <img src={imgArrow2} alt="" />
            </div>
          </div>
        </section>

        <section className="gallerySection" aria-label="Work gallery">
          <div className="galleryGrid">
            <div className="galleryRow row1">
              <div className="tile w400"><img src={imgFrame13} alt="" /></div>
              <div className="tile w200"><img src={imgFrame14} alt="" /></div>
              <div className="tile w390"><img src={imgFrame15} alt="" /></div>
              <div className="tile w200"><img src={imgFrame16} alt="" /></div>
            </div>
            <div className="galleryRow row2">
              <div className="tile w200"><img src={imgFrame17} alt="" /></div>
              <div className="tile w200"><img src={imgFrame18} alt="" /></div>
              <div className="tile w400"><img src={imgFrame19} alt="" /></div>
              <div className="tile w200"><img src={imgFrame20} alt="" /></div>
              <div className="tile w200"><img src={imgFrame21} alt="" /></div>
            </div>
            <div className="galleryRow row3">
              <div className="tile w400"><img src={imgFrame22} alt="" /></div>
              <div className="tile w400"><img src={imgFrame23} alt="" /></div>
              <div className="tile w400"><img src={imgFrame24} alt="" /></div>
            </div>
            <div className="galleryRow row4">
              <div className="tile w200"><img src={imgFrame25} alt="" /></div>
              <div className="tile w400"><img src={imgFrame26} alt="" /></div>
              <div className="tile w200"><img src={imgFrame27} alt="" /></div>
              <div className="tile w400"><img src={imgFrame28} alt="" /></div>
            </div>
          </div>
        </section>

        <section className="servicesSection" id="services">
          <div className="servicesInner">
            <div className={`${antonio.className} servicesTitle`}>OUR SERVICES</div>
          </div>
        </section>
      </div>
    </main>
  );
}
