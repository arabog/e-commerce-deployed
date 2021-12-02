import style from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"

import { mobile, tablet, laptop } from "../responsive"


import { logoutUser } from "../redux/apiCalls"

import { useHistory } from "react-router";


const Container = style.div `
          height: 60px;

          ${mobile(
                    {
                              height: "50px"
                    }
          )};

          ${tablet (
                    {
                              height: "60px",

                              margin: "0 12px 0 10px"

                    }
          )}
`

const Wrapper = style.div `
          padding: 10px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          ${mobile(
                    {
                              padding: "10px 20px"
                    }
          )}

          ${tablet (
                    {
                              padding: "10px 0"
                    }
          )}
`

const Left = style.div `
          flex: 1;

          display: flex;
          align-items: center;

          ${mobile(
                    {
                              flex: "2"
                    }
          )}
`

const Language = style.span`
          font-size: 14px;

          cursor: pointer;

          ${mobile(
                    {
                              display: "none",
                    }
          )}

          ${tablet (
                    {
                              display: "block",

                    }
          )}
`

const SearchContainer = style.div `
          border: 0.5px solid lightgray;

          display: flex;
          align-items: center;
          margin-left: 25px;
          padding: 5px;

          ${mobile(
                    {
                              marginLeft: "0",
                    }
          ) }

          ${tablet (
                    {
                              marginLeft: "10px"
                    }
          )}
`

const Input = style.input `
          border: none;
          outline: none;

          ${mobile(
                    {
                              width: "50px"
                    }
          )}

          ${mobile(
                    {
                              width: "100%"
                    }
          )}

          
`

const Center = style.div `
          flex: 1;

          text-align: center;

          ${mobile(
                    {
                              flex: "2",
                              marginLeft: "5px",
                    }
          )}

`

const Logo = style.h1`
          font-weight: bold;
          
          color: black;

          ${mobile(
                    {
                              fontSize: "25px"
                    }
          )}

          ${laptop(
                    {
                              fontSize: "40px"
                    }
          )}
`


const Right = style.div `
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          ${mobile(
                    {
                              flex: 2,
                              justifyContent: "center"
                    }
          )}
`

const Name = style.div `
          display: "flex"; 
          alignItems: "center";

          ${mobile(
                    {
                              display: "none"
                    }
          )}

          ${tablet(
                    {
                              display: "block"
                    }
          )}
`


const MenuItem = style.div `
          font-size: 14px;
          cursor: pointer;
          margin-left: 25px;
          color: teal;

          ${mobile(
                    {
                              marginLeft: "10px",

                              display: "none",
                    }
          )}

          ${tablet (
                    {
                              display: "block",
                    }
          )}
`

const MenuItems = style.div `
          font-size: 14px;
          cursor: pointer;
          margin-left: 25px;
          color: teal;

          ${mobile(
                    {
                              marginLeft: "10px",

                    }
          )}
`


const Navbar = () => {
          const quantity = useSelector(state => state.cart.quantity)
          const currentUser = useSelector(state => state.user.currentUser)

          const dispatch = useDispatch()

          const history = useHistory()

          const handleClick = (e) => {
                    e.preventDefault();

                    logoutUser ( dispatch );

                    history.push("/login")
          }


          return (
                    <Container>
                              <Wrapper>
                                        <Left>
                                                  <Language> EN </Language>

                                                  <SearchContainer>
                                                            <Input placeholder="Search" />

                                                            <Search
                                                                      style = {
                                                                                {
                                                                                          color: "gray",
                                                                                          fontSize: 16
                                                                                }
                                                                      }
                                                            />
                                                  </SearchContainer>
                                        </Left>


                                        <Center>
                                                  <Link to="/" style={{ textDecoration: "none"}}>
                                                            <Logo>  HUGB.</Logo>
                                                  </Link>
                                        </Center>


                                        <Right>
                                                  <Name> 
                                                            Welcome!, 

                                                            <div style={{color: "teal"}}> 
                                                                      { currentUser.username} 
                                                            </div>
                                                  </Name>

                                                  <Link to="/register"  style={{ textDecoration: "none"}}>
                                                            <MenuItem >REGISTER</MenuItem>
                                                  
                                                  </Link>

                                                  <Link to="/login" style={{ textDecoration: "none"}}>
                                                            <MenuItem >LOGIN</MenuItem>
                                                  </Link>

                                                  <MenuItems onClick={handleClick} >
                                                            LOGOUT
                                                  </MenuItems>
                                                  
                                                  <Link to="/cart">
                                                            <MenuItems>
                                                                      <Badge badgeContent = {quantity} color = "primary" >
                                                                                <ShoppingCartOutlined />
                                                                      </Badge>
                                                            </MenuItems>
                                                  </Link>
                                        </Right>

                              </Wrapper>
                    </Container>
          )
}


export default Navbar
