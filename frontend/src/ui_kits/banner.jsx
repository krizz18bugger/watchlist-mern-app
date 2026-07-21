import React from 'react';
import styled from 'styled-components';

const CardBanner = () => {
  return (
    <StyledWrapper>
      <div className="container-banner noselect">
        <div className="canvas">
          <div className="tracker tr-1" />
          <div className="tracker tr-2" />
          <div className="tracker tr-3" />
          <div className="tracker tr-4" />
          <div className="tracker tr-5" />
          <div className="tracker tr-6" />
          <div className="tracker tr-7" />
          <div className="tracker tr-8" />
          <div className="tracker tr-9" />
          <div className="tracker tr-10" />
          <div className="tracker tr-11" />
          <div className="tracker tr-12" />
          <div className="tracker tr-13" />
          <div className="tracker tr-14" />
          <div className="tracker tr-15" />
          <div className="tracker tr-16" />
          <div className="tracker tr-17" />
          <div className="tracker tr-18" />
          <div className="tracker tr-19" />
          <div className="tracker tr-20" />
          <div className="tracker tr-21" />
          <div className="tracker tr-22" />
          <div className="tracker tr-23" />
          <div className="tracker tr-24" />
          <div className="tracker tr-25" />
          <div id="card">
            <p id="prompt">WATCHLIST</p>
            <div className="title">
              Never forget what you were watching. Keep track of every anime and movie on your radar in one place.
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /*works janky on mobile :<*/
  .container-banner {
    position: relative;
    width: 500px;
    height: 254px;
    transition: 200ms;
  }

  .container-banner:active {
    width: 500px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: #191919;
  }

  .subtitle {
    transform: translateY(160px);
    color: rgb(134, 110, 221);
    text-align: center;
    width: 100%;
  }

  .title {
    opacity: 0;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out-out;
    transition-delay: 100ms;
    position: absolute;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    color: black;
  }

  .tracker:hover ~ #card .title {
    opacity: 1;
  }

  #prompt {
    bottom: 8px;
    left: 12px;
    z-index: 20;
    font-size: 50px;
    font-weight: bold;
    transition: 300ms ease-in-out-out;
    max-width: 1000px;
    color: rgb(255, 255, 255);
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container-banner:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  #card::before {
    content: "";
    background: #ffcc00;
    opacity: 0%;
    width: 105%;
    height: 105%;
    border-radius: 20px;
    position: absolute;
    z-index: -;
    transition: 200ms;
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }`;

export default CardBanner;
