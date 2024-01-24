import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="logo">
        <img src="https://wallpapercave.com/dwp1x/wp5063338.jpg" alt="Netflix logo" />
      </div>
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {
          props.login ? 'Login' : 'Sign Up'
        }
      </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo {
      img {
        height: 3rem;
        cursor: pointer;
      }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
`

export default Header