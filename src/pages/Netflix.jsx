import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
// import Card from "../components/Card";
import {  fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();


  const movies = useSelector((state)=> state.netflix.movies)
  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGenres())
  },[]);

  useEffect(() => {
    if(generesLoaded){
      dispatch(fetchMovies({type: "all"}))
    }
});

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  //console.log(isScrolled);
  // console.log(movies);
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://wallpapercave.com/wp/wp1818504.png"
          alt="hero image"
        />
        <div className="container">
          <div className="title">
            <h1>Supper Man</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, unde cum excepturi voluptatum earum aliquam fuga dolor dolore aliquid autem alias, sint reprehenderit veritatis aperiam voluptates soluta, exercitationem qui quidem?
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate('/player')} className="playBtn">Play</button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      {/* <Card /> */}
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
.hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }

`;

export default Netflix;
