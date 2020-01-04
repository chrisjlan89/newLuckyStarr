import React, { Component } from "react";
import "normalize.css/normalize.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

//import FirstIMAGE from "../../Assets/paralax_1a.jpg";
import paralax2 from "../../Assets/paralax_2.jpg";
import styled from "styled-components";

export const StyledDiv = styled.div`
  /* background: url(${paralax2}); */
  background: url(${paralax2});
  background-size: 100%;
   /* fixed;  */
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%; 
   background-size: 100%; 
  /* height: 1100px; */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh;
  width: 100vw; */
  /* // vars
  $font-sans-serif: "Roboto Condensed", sans-serif;
  $font-serif: "Playfair Display", serif; */
  .false-div {
    height : 300px;
  }
  .main-content {
    /* min-height: 1200px;
    height: 1100px; */
  }

  .hero {
    background-position: 50% 50%;
    /* background-repeat: no-repeat;
    background-size: cover; */

    /* backface-visibility: hidden; */

    /* height: 100vh; */
    overflow: hidden;
    position: relative;
    width: 100%;

    @media screen and (min-width: 640px) {
      background-position: 50% 0;
    }

    &:after {
      background-color: rgba(62, 92, 135, 0.5);
      bottom: 0;
      content: "";
      left: -2000%;
      position: absolute;
      right: -2000%;
      top: 0;
      z-index: 1;
    }
  }

  .hero-container {
    box-sizing: border-box;
    height: auto;
    padding: 30px 50px;
    position: relative;
    z-index: 2;

    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    -webkit-transition-duration: 1.2s;
    transition-duration: 1.2s;

    @media screen and (min-width: 640px) {
      height: 100%;
    }

    .main-content {
      display : flex;
      flex-direction : column;
      align-items : center;
    }

    h3 {
      color : #fff;
    }

    p {
      color: white;
      font-family: $font-sans-serif;
      font-size: 20px;
      font-weight: bold;
      
      opacity: 0.8;
      text-transform: uppercase;
      text-align: center;
      width : 66%;
    }
  }



  .hero-title {
    color: white;
    font-family: $font-serif;
    // Respond to viewport width–works well since
    // we're sizing the image according viewport height
    font-size: 17vw;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 5px 0;
    text-align: left;
    width: 85%;

    @media screen and (min-width: 640px) {
      font-size: 10vw;
    }
  }

 

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-12px, 0, 0);
      //transform: translate3d(-100%, 0, 0);
      transform: translate3d(-12px, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  .animate {
    animation-duration: 0.75s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.2, 0.3, 0.25, 0.9);
  }

  .delay {
    animation-delay: 1s;
  }

  .delay-400 {
    animation-delay: 0.4s;
  }

  .delay-500 {
    animation-delay: 0.5s;
  }

  .delay-600 {
    animation-delay: 0.6s;
  }

  .delay-700 {
    animation-delay: 0.7s;
  }

  .delay-800 {
    animation-delay: 0.8s;
  }
`;

const Home = () => {
  // componentDidMount() {
  //   M.AutoInit();
  //   console.log("I was triggered during componentDidMount");
  //   //var options = {}
  //   var elems = document.querySelectorAll(".parallax");
  //   var instances = M.Parallax.init(elems);
  // }

  // componentDidUpdate() {
  //   console.log("I was triggered during componentDidUpdate");
  //   M.AutoInit();
  // }

  // render() {
  //   document.addEventListener("DOMContentLoaded", function() {
  //     M.AutoInit();
  //     var elems = document.querySelectorAll(".parallax");
  //     var instances = M.Parallax.init(elems);
  //   });

  return (
    <>
      <StyledDiv class="hero image-as-background">
        <div class="hero-container">
          <p class="animate fadeInLeft delay-400">Weddings and Events</p>
          <h1 class="hero-title animate fadeInLeft delay-600">
            The Lucky Starr
          </h1>
          <div className="false-div"></div>

          <div className="main-content">
            <h3 className="heading-tertiary">Perfect for all occasions</h3>
            <p>
              If you are looking for a romantic weekend getaway in a rustic
              cabin or a venue for a wedding, a party, a class reunion, church
              picnic or any other occasion… The Lucky Starr can fill your needs!
              Contact us for availability!
            </p>
          </div>
          <div className="main-content">
            <h3 className="heading-tertiary">Our Story</h3>
            <p>
              The Lucky Starr in whole is over 600 acres of beautiful land, part
              mountainside and part farm land. We are nestled in the beautiful
              Sequatchie Valley between Dayton Mt. and the Cumberland Plateau.
              The Lucky Starr is in Bledsoe County Tennessee just 6 miles from
              the quaint town of Pikeville and only 30 minutes to Fall Creek
              Falls State Park. The farm was established in 1992 by Starr &
              Parky LaFayette who have spent years clearing land and building
              their dreams. They have rented cabins on the property since 1993,
              now only the Big Cabin. The Event Venue was built in 2014 by
              Kellady & Mike Bledsoe (Starr’s daughter) and continues to grow as
              they live in the Small Cabin and run the venue.
            </p>
          </div>
        </div>

        {/* <section class="main-content">
          <h2>This is the additional content</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section> */}
      </StyledDiv>
    </>
  );
};

export default Home;
