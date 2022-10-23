import React from "react";
const Home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            {/* 1st Image */}
            <div className="col-md-6">
              <img style={{ width: "650px" }} src="./images/1.jpg"></img>
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#d4e9e2" }}>
              <div className="content mx-auto" style={{ marginTop: "140px" }}>
                <h1 style={{ textAlign: "center", marginTop: "40px" }}>
                  WIN A THOUSAND <br />
                  STAR
                </h1>
                <div className="col-md-8 mx-auto" style={{ margin: "auto" }}>
                  <h5 style={{ textAlign: "center" }}>
                    We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards
                    members in our Million Stars Giveaway and much more all
                    week!*
                  </h5>
                </div>
                <button
                  style={{ textAlign: "center" }}
                  type="button"
                  className="max"
                >
                  SIGN UP
                </button>
              </div>
            </div>
            {/* 2nd Image */}
            <div
              className="col-md-6"
              style={{ backgroundColor: "#d4e9e2", marginTop: "40px" }}
            >
              <div className="content mx-auto" style={{ marginTop: "140px" }}>
                <h3 style={{ paddingLeft: "25px", marginTop: "40px" }}>
                  A new way to earn sips and trips
                </h3>
                <p style={{ paddingLeft: "25px", fontSize: "17px" }}>
                  Now you can link your Starbucks® Rewards + Delta
                  <br /> SkyMiles® accounts to get:
                </p>
                <div
                  className="col-md-8"
                  style={{ paddingLeft: "25px", fontSize: "17px" }}
                >
                  <ul>
                    <li>150 Stars + 500 miles when you link before 12/31</li>
                    <li>Double Stars on Delta travel days</li>
                    <li>
                      1 mile per $1 spent at Starbucks (excludes taxes and
                      gratuities)**
                    </li>
                  </ul>
                </div>
                <button
                  style={{ marginLeft: "25px" }}
                  type="button"
                  className="max1"
                >
                  LINKS ACCOUNTS
                </button>
              </div>
            </div>

            <div className="col-md-6" style={{ marginTop: "40px" }}>
              <img
                style={{ width: "650px", height: "560px" }}
                src="./images/137-81104.jpg"
              ></img>
            </div>

            {/* 3rd Image */}
            <div className="col-md-6" style={{ marginTop: "40px" }}>
              <img
                style={{ width: "650px", height: "564px" }}
                src="./images/137-81152.jpg"
              ></img>
            </div>
            <div
              className="col-md-6"
              style={{
                backgroundColor: "#006241",
                marginTop: "40px",
              }}
            >
              <div className="content mx-auto" style={{ marginTop: "200px" }}>
                <h1 style={{ textAlign: "center", marginTop: "40px" }}>
                  Perfectly pumpkin
                </h1>
                <div className="col-md-8 mx-auto" style={{ margin: "auto" }}>
                  <h5 style={{ textAlign: "center" }}>
                    Savor the season with a Pumpkin Spice Latte or Pumpkin Cream
                    Cold Brew.
                  </h5>
                </div>
                <button
                  style={{ textAlign: "center" }}
                  type="button"
                  className="max3"
                >
                  ORDER NOW
                </button>
              </div>
            </div>

            {/* 4th IMAGE */}

            <div
              className="col-md-6"
              style={{
                backgroundColor: "#006241",
                marginTop: "40px",
              }}
            >
              <div className="content mx-auto" style={{ marginTop: "200px" }}>
                <h1 style={{ textAlign: "center", marginTop: "40px" }}>
                  Layers of baked apple yum
                </h1>
                <div className="col-md-8 mx-auto" style={{ margin: "auto" }}>
                  <h5 style={{ textAlign: "center" }}>
                    Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
                    Starbucks® Blonde Espresso.
                  </h5>
                </div>
                <button
                  style={{ textAlign: "center" }}
                  type="button"
                  className="max4"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="col-md-6" style={{ marginTop: "40px" }}>
              <img
                style={{ width: "650px", height: "564px" }}
                src="./images/137-79282.jpg"
              ></img>
            </div>

            <div className="col-mg-6 mx-auto text-center mt-5">
              <p>
                *NO PURCHASE NECESSARY. Participating stores only. Ends
                10/23/22. To enter and for Official
              </p>
              <p>
                Rules, Visit <a href="#">starbucksstardays.com.</a>
              </p>
              <h6>Entrants can receive a maximum of 2 entries per day.</h6>
              <p>
                **Excludes taxes and gratuities. At participating stores. Some
                restrictions apply. 150 Stars deposited after first qualifying
                Starbucks purchase. Flights purchased close to departure may not
                earn double Stars. Stars may not be earned on purchases of
                alcohol, Starbucks Cards and Starbucks
              </p>
              <p>
                Card reloads. For details, visit{" "}
                <a href="#">deltastarbucks.com/terms</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
