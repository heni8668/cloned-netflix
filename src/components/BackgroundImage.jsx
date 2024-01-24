import React from 'react';
import styled from 'styled-components';


const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src="https://t3.ftcdn.net/jpg/04/81/76/22/360_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg" alt="" />

      
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    img {
      height: 100vh;
      width: 100vw;
    }
`

export default BackgroundImage