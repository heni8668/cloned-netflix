import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({ movies }) => {
    if (!movies || !Array.isArray(movies)) {
        // Handle the case where movies is not provided or is not an array
        return null; // or handle it in another way based on your requirements
    }

    const getMoviesBetween = (start, end) => {
        return movies.slice(start, end);
    }

    return (
        <SliderWrapper>
            <MovieSlider data={getMoviesBetween(0, 10)} title="Only On Netflix" />
            <MovieSlider data={getMoviesBetween(10, 20)} title="Trending now" />
            <MovieSlider data={getMoviesBetween(20, 30)} title="Popular On Netflix" />
            <MovieSlider data={getMoviesBetween(30, 40)} title="Romantic Movie" />
            <MovieSlider data={getMoviesBetween(40, 50)} title="Epic" />
            <MovieSlider data={getMoviesBetween(50, 60)} title="New Releases" />
            <MovieSlider data={getMoviesBetween(60, 70)} title="Action Movies" />
        </SliderWrapper>
    );
}

const SliderWrapper = styled.div`
    /* Add your styling here */
`;

export default SliderContainer;
