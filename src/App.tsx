import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Button } from './components/Button';
import image from './assets/images/Rectangle.jpg';

function App() {
  return (
    <div className="App">
      <Card>
          <Wrapper>
            <Image src={image}  alt="#" />
              <Wrapper>
                <Title>Headline</Title>
                <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                <Button btnType={'default'}>See more</Button>
                <Button btnType={'another'}>Save</Button>
              </Wrapper>
          </Wrapper>

          </Card>
    </div>
  );
}

export default App;

const Card = styled.article`
  width: 300px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, .1);
  
`

const Image = styled.img`
    margin-top: 10px;
    border-radius: 10px;
    width: 280px;
    height: 170px;
    /* object-fit: cover; */
    
`

const Wrapper = styled.div`
  margin: 10px;
`

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  text-align: left;
`

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.66667;
  color: rgb(171, 179, 186);
  margin-top: 20px;
  text-align: left;
`

