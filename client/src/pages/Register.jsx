import styled from "styled-components"

import { Link } from "react-router-dom"

import { mobile, tablet, laptop } from "../responsive"


import { useState } from "react"
import { useDispatch } from "react-redux"

import { register } from "../redux/apiCalls"


const Container = styled.div `
	width: 100vw;
	height: 100vh;

	background: linear-gradient(
		rgba(255, 255, 255, 0.5),
		rgba(255, 255, 255, 0.5)
	),

	url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),

	center;

	background-size: cover;

	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div `
	width: 40%;
	padding: 20px;
	background: white;

          ${mobile(
                    {
                              width: "75%"
                    }
          )}

          ${laptop(
                    {
                              width: "60%"
                    }
          )}
`

const Title = styled.h1 `
	font-size: 24px;
	font-weight: 300;
`

const Form = styled.form `
	display: flex;
	flex-wrap: wrap;
`

const Input = styled.input `
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
`

const Agreement = styled.div `
	font-size: 12px;
	margin: 20px 0;
`

const Hor = styled.div `
          ${tablet (
                    {
                              display: "flex",

                              justifyContent: "space-between"
                    }
          )}
`

const Button = styled.button `
	min-width: 20%;

	border: none;
	padding: 15px 20px;
          margin-right: 20px;

	background: teal;
	color: white;

	text-align: center;

	cursor: pointer;
`

const Option = styled.div `
          font-size: 15px;

          margin: 10px 0;

          ${tablet (
                    {
                              marginRight: "20px"
                    }
          )}
`


const Register = () => {
          const [firstname, setFirstname] = useState("")
          const [lastname, setLastname] = useState("")
          const [username, setUsername] = useState("")
          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")
          const [confirmPassword, setConfirmPassword] = useState("")

          const dispatch = useDispatch()
          
          const handleClick = (e) => {
                    e.preventDefault();

                    register(
                              dispatch,

                              {
                                        firstname,

                                        lastname,

                                        username,

                                        email,

                                        password,

                                        confirmPassword
                              }
                    )
          }

          
          return (
                    <Container>
                              <Wrapper>
                                        <Title>CREATE AN ACCOUNT</Title>

                                        <Form>
                                                  <Input 
                                                            placeholder="first name" 
                                                            
                                                            onChange= {e => setFirstname(e.target.value)}
                                                  />

                                                  <Input 
                                                            placeholder="last name" 
                                                            
                                                            onChange= {e => setLastname(e.target.value)}
                                                  />

                                                  <Input 
                                                            placeholder="username" 
                                                            
                                                            onChange= {e => setUsername(e.target.value)}
                                                  />

                                                  <Input 
                                                            placeholder="email" 
                                                            
                                                            onChange= {e => setEmail(e.target.value)}
                                                  />

                                                  <Input 
                                                            placeholder="password" 
                                                            
                                                            onChange= {e => setPassword(e.target.value)}
                                                  />

                                                  <Input 
                                                            placeholder="confirm password" 
                                                            
                                                            onChange= {e => setConfirmPassword(e.target.value)}
                                                  />
                                        </Form>

                                        <Agreement>
                                                  By creating an account, I consent to the processing of my personal
                                                  data in accordance with the <b>PRIVACY POLICY</b>
                                        </Agreement>


                                        <Hor>
                                                  <Link to="/">
                                                            <Button onClick={handleClick}> 
                                                                      CREATE 
                                                            </Button>
                                                  </Link>

                                                  <Hor>
                                                            <Option>
                                                                      Already have an account, Login?
                                                            </Option>
                                                            
                                                            <Link to="/login">
                                                                      <Button> LOGIN </Button>
                                                            </Link>
                                                  </Hor>
                                        </Hor>
                              </Wrapper>
                    </Container>
          )
}

export default Register
