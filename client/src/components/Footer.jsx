import { 
          Facebook, 
          Instagram, 
          MailOutline, 
          Phone, 
          Pinterest, 
          Room, 
          Twitter 
} from "@material-ui/icons"

import styled from "styled-components"

import { mobile, tablet } from "../responsive"


const Container = styled.div `
          display: flex;

          ${mobile(
                    {
                              flexDirection: "column"
                    }
          )}

          ${tablet(
                    {
                              flexDirection: "row"
                    }
          )}
`

const Left = styled.div `
          flex: 1;
          
          padding: 20px;

          display: flex;
          flex-direction: column;
          
`

const Logo = styled.h1 `
          font-weight: bold;

          ${mobile(
                    {
                              textAlign: "center"
                    }
          )}

          ${tablet (
                    {
                              textAlign: "left"
                    }
          )}
`

const Desc = styled.p `
          margin: 20px 0;

          ${mobile(
                    {
                              textAlign: "center"
                    }
          )}

          ${tablet (
                    {
                              textAlign: "left"
                    }
          )}
`

const SocialContainer = styled.div `
          display: flex;

          ${mobile(
                    {
                              justifyContent: "center"
                    }
          )}

          ${tablet (
                    {
                              justifyContent: "left"
                    }
          )}
`

const SocialIcon = styled.div `
          width: 40px;
          height: 40px;

          border-radius: 50%;

          color: white;
          background: #${props => props.color};

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 20px;

          cursor: pointer;
`

const Center = styled.div `
          flex: 1;

          padding: 20px;

          ${tablet (
                    {
                              padding: "20px 10px 10px 5px"
                    }
          )}
`

const Title = styled.h3 `
          margin-bottom: 30px;
`

const List = styled.ul `
          margin: 0;
          padding: 0;

          list-style: none;

          display: flex;
          flex-wrap: wrap;
`

const ListItem = styled.div `
          width: 50%;
          margin-bottom: 10px;

          cursor: pointer;
`

const Right = styled.div `
          flex: 1;

          padding: 20px;

          ${mobile(
                    {
                              backgroundColor: "#fff8f8"
                    }
          )}

          ${tablet (
                    {
                              backgroundColor: "#fff"
                    }
          )}
`

const ContactItem = styled.div `
          margin-bottom: 20px;

          display: flex;
          align-items: center;
`

const Payment = styled.img `
          width: 50%;

          cursor: pointer;
`


const Footer = () => {


          return (
                    <Container>
                              <Left>
                                        <Logo>HUGB</Logo>

                                        <Desc>
                                                  There are many variations of passages of Lorem Ipsum available, but
                                                  the majority have suffered alteration in some form, by injected
                                                  humour, or randomised words which don’t look even slightly believable.
                                        </Desc>

                                        <SocialContainer>
                                                  <SocialIcon color="3B5999">
                                                            <Facebook />
                                                  </SocialIcon>

                                                  <SocialIcon color="E4405F">
                                                            <Instagram />
                                                  </SocialIcon>

                                                  <SocialIcon color="55ACEE">
                                                            <Twitter />
                                                  </SocialIcon>

                                                  <SocialIcon  color="E60023">
                                                            <Pinterest />
                                                  </SocialIcon>
                                        </SocialContainer>
                              </Left>

                              <Center>
                                        <Title> Useful Links </Title>

                                        <List>
                                                  <ListItem> Home </ListItem>

                                                  <ListItem> Cart </ListItem>

                                                  <ListItem>Man Fashion</ListItem>

                                                  <ListItem> Woman Fashion </ListItem>

                                                  <ListItem> Children Fashion </ListItem>

                                                  <ListItem> Accessories </ListItem>

                                                  <ListItem> My Account </ListItem>

                                                  <ListItem>Order Tracking </ListItem>

                                                  <ListItem> WishList </ListItem>

                                                  <ListItem> Terms </ListItem>
                                        </List>
                              </Center>

                              <Right>
                                        <Title> Contact </Title>

                                        <ContactItem>
                                                  <Room style={{marginRight: "10px"}} /> 24, Jagunadado Estate, Ibadan South
                                        </ContactItem>

                                        <ContactItem>
                                                  <Phone style={{marginRight: "10px"}} /> +1 234 56 789 10
                                        </ContactItem>

                                        <ContactItem>
                                                  <MailOutline style={{marginRight: "10px"}} /> contact@hugb.com
                                        </ContactItem>

                                        <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png" />
                              </Right>
                    </Container>
          )
}


export default Footer
