import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube'

export default React.memo(function Card  ({ movieData, genres })  {
  const [onHovered, setOnHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');
  const navigate = useNavigate();



const handleClick = (movieData) => {
  if (trailerUrl) {
    setTrailerUrl('');
  } else {
    movieTrailer(movieData?.title || movieData?.name || movieData?.original_name)
      .then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get('v');
          if (videoId) {
            setTrailerUrl(videoId);
          } else {
            setTrailerUrl('notFound');
          }
        } else {
          setTrailerUrl('notFound');
        }
      })
      .catch((error) => {
        console.error('Error fetching movie trailer:', error);
        setTrailerUrl('notFound');
      });
  }
};

const opts = {
  // height: '390',
  // width: '100%',
  playerVars : {
    autoplay: 1
  }
}


  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
     

     

{onHovered ? (
      <div className="hover">
        <div className="image-video-wrapper">
          {trailerUrl && trailerUrl !== 'notFound' ? (
            <YouTube videoId={trailerUrl} opts={opts} onClick={() => navigate("/player")} />
          ) : trailerUrl === 'notFound' ? (
            <div>Movie trailer URL not found</div>
          ) : (
            <img
              onClick={() => handleClick(movieData)}
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie poster"
            />
          )}
        </div>
        <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => handleClick(movieData)}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dis like" />
                <BsCheck title="Remove from  List" />
                <AiOutlinePlus title="Add to my List" />
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres">
              <ul>
                {movieData.genres.map((genre, index) => (
                  <li key={index} >
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    ) : (
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
    )}


    </CardContainer>
  );
});

const CardContainer = styled.div`
  margin-top: 1rem;
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      YouTube {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      .movieName {
        color: white;
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 0.5rem;
      }

      svg {
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      display: flex;
      color: white;
      ul {
        display: flex;
        gap: 1rem;
        li {
          padding-right: 0.7rem;

          list-style-type: none;
          /* &:first-of-type {
          } */
        }
      }
    }
  }
`;


