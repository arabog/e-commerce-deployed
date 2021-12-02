import { Send } from "@material-ui/icons"
import styled from "styled-components"

import { mobile, laptop } from "../responsive"


const Container = styled.div `
          height: 60vh;
          background: #fcf5f5;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-direction: column;

`

const Title = styled.div `
          font-size: 70px;
          margin-bottom: 20px;

          ${mobile(
                    {                              
                              fontSize: "55px",
                    }
          )}
`

const Desc = styled.div `
          font-size: 24px;
          font-weight: 300;

          margin-bottom: 20px;

          ${mobile(
                    {
                              textAlign: "center",

                              width: "75%",
                    }
          )}
`

const InputContainer = styled.div `
          width: 50%;
          height: 40px;
          background: white;

          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid lightgray;

          ${mobile(
                    {
                              width: "80%"
                    }
          )}

          ${laptop(
                    {                              
                              width: "60%",
                    }
          )}
`

const Input = styled.input `
          border: none;
          outline: none;

          flex: 8;

          padding-left: 20px;
`

const Button = styled.button `
          flex: 1;
          border: none;
          background: teal;
          color: white;
          padding: 8px 0 7px 0;
`

const Newsletter = () => {


          return (
                    <Container>
                              <Title> Newsletter </Title>

                              <Desc> Get timely updates from your favorite products. </Desc>

                              <InputContainer>
                                        <Input placeholder="Your email" />

                                        <Button>
                                                  <Send />
                                        </Button>
                              </InputContainer>
                    </Container>
          )
}


export default Newsletter
