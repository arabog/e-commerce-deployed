import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"

import { sliderItems } from "../data"

import { mobile, tablet, laptop } from "../responsive"

import { Link } from "react-router-dom"


const Container = styled.div `
          width: 100%;
          height: 100vh;

          display: flex;

          position: relative;

          overflow: hidden;

          ${mobile(
                    {
                              display: "none",

                    }
          )}

          ${tablet(
                    {
                              display: "flex",

                    }
          ) }

`

const Arrow = styled.div `
          width: 50px;
          height: 50px;

          background: #fff7f7;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          position: absolute;
          top: 0;
          bottom: 0;

          left: ${props => props.direction === "left" && "10px"};
          right: ${(props) => props.direction === "right" && "10px"};

          margin: auto;

          cursor: pointer;
          opacity: 0.5;

          z-index: 2;
`

const Wrapper = styled.div `
          height: 100%;

          display: flex;

          transition: all 1.5s ease;
          transform: translateX(${props => props.index * -100}vw);

`

const Slide = styled.div `
          width: 100vw;
          height: 100vh;

          display: flex;
          align-items: center;

          background: #${props => props.bg}
`

const ImgContainer = styled.div `
          height: 100%;

          flex: 1;
`

const Image = styled.img `
          height: 80%;

          width: 55vw;

          ${tablet(
                    {
                              width: "50vw"
                    }
          ) }

          ${laptop (
                    {
                              width: "57vw"
                    }
          ) }
` 

const InfoContainer = styled.div `
          flex: 1;

          padding: 50px;

          ${tablet(
                    {
                              padding: "30px "
                    }
          ) }

          ${laptop (
                    {
                              padding: "50px",
                    }
          ) }
`

const Title = styled.h1 `
          font-size: 70px;

          ${tablet (
                    {
                              fontSize: "40px",
                    }
          ) }

          ${laptop (
                    {
                              fontSize: "55px",
                    }
          ) }
`

const Desc = styled.p `
          margin: 50px 0;

          font-size: 20px;
          font-weight: 500;

          letter-spacing: 3px;
`

const Button = styled.button `
          padding: 10px;
          font-size: 20px;
          background: transparent;
          cursor: pointer;
`


const Slider = () => {
          const [slideIndex, setSlideIndex] = useState(0)
          
          const handleClick = direction => {
                    if(direction === "left") {
                              setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
                    }else {
                              setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
                    }
          }


          return (
                    <Container>
                              <Arrow direction="left" onClick= { () => handleClick("left")} >
                                        <ArrowLeftOutlined />
                              </Arrow>

                              <Wrapper index={slideIndex}>

                                        {
                                                  sliderItems.map(item => (
                                                            <Slide bg= {item.bg} key={item.id} >
                                                                      <ImgContainer>
                                                                                <Image src={item.img} />
                                                                      </ImgContainer>
                    
                                                                      <InfoContainer>
                                                                                <Title> {item.title} </Title>
                    
                                                                                <Desc> {item.Desc}</Desc>
                    
                                                                                <Link to="/register">
                                                                                          <Button>SHOP NOW</Button>
                                                                                </Link>
                                                                      </InfoContainer>
                                                            </Slide>
                                                  ))

                                        }
                              </Wrapper>

                              <Arrow direction="right" onClick= { () => handleClick("right")} >
                                        <ArrowRightOutlined />
                              </Arrow>
                    </Container>
          )
}


export default Slider
