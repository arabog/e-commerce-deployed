import styled from "styled-components"

import { Add, Remove } from "@material-ui/icons"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

import { publicRequest } from "../requestMethods"


import { mobile } from "../responsive"
import { tablet } from "../responsive"
import { laptop } from "../responsive"


const Container = styled.div `
          
`

const Wrapper= styled.div `
          padding: 50px;
          display: flex;

         

          ${mobile(
                    {
                              padding: "10px",
                              margin: "20px 0",

                              flexDirection: "column"
                    }
          )}

          ${tablet (
                    {
                              flexDirection: "row"
                    }
          )}

          ${laptop(
                    {
                              flexDirection: "row",
                    }
          )}
`

const ImgContainer = styled.div `
          flex: 1;

          ${mobile(
                    {
                              display: "flex",

                              alignItems: "center",
                              justifyContent: "center",
                    }
          )}

          ${laptop(
                    {
                              display: "flex",
                    }
          )}  

`

const Image = styled.img `
          width: 80%;
          height: 60vh;
          object-fit: contain;

          ${mobile(
                    {
                              height: "55vh", 
                              width: "100%",
                              marginBottom: "10px",
                    }
          )}  
          
          ${tablet (
                    {
                              height: "60%", 
                    }
          )}   

          ${laptop(
                    {
                              height: "40vh", 
                              width: "80%",
                              marginBottom: "10px",
                    }
          )}  

`

const InfoContainer = styled.div `
          flex: 1;
          padding: 0 50px;

          ${mobile(
                    {
                              padding: "10px"
                    }
          )}

          ${tablet (
                    {
                              padding: "50px", 
                    }
          )} 
`

const Title = styled.h1 `
          font-weight: 200;
`

const Desc = styled.p `
          margin: 20px 0;
`

const Price = styled.span `
          font-weight: 100;
          font-size: 40px;
`

const FilterContainer = styled.div `
          width: 50%;

          margin: 30px 0;

          display: flex;
          justify-content: space-between;

          ${mobile(
                    {
                              width: "100%"
                    }
          )}
`

const Filter = styled.div `
          display: flex;
          align-items: center;
`

const FilterTitle = styled.span `
          font-size: 20px;
          font-weight: 200;
`

const FilterColor = styled.div `
          width: 20px;
          height: 20px;

          border-radius: 50%;
          background: ${props => props.color};

          margin: 0 5px;
          cursor: pointer;
`

const FilterSize = styled.select `
          margin-left: 10px;
          padding: 5px;
`

const FilterSizeOption = styled.option `

`

const AddContainer = styled.div `
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          ${mobile(
                    {
                              width: "100%"
                    }
          )}
`

const AmountContainer = styled.div `
          display: flex;
          align-item: center;
          font-weight: 700;
`

const Amount = styled.span `
          width: 30px;
          height: 30px;

          border-radius: 10px;
          border: 1px solid teal;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 5px;
`

const Button = styled.button `
          padding: 15px;
          border: 2px solid teal;
          background: white;
          cursor: pointer;

          font-weight: 500;

          &:hover {
                    background: #f8f4f4;
          }
`


const Product = () => {
          const location = useLocation()
          const id = location.pathname.split("/")[2]

          const [product, setProduct] = useState([])
          const [quantity, setQuantity] = useState(1)

          const dispatch = useDispatch()

          const [color, setColor] = useState("")
          const [size, setSize] = useState("")


          useEffect(() => {
                    const getProduct = async () => {
                              try {
                                        const res = await publicRequest.get("/products/find/" + id)

                                        setProduct(res.data)
                                        
                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getProduct()
          }, [id])

          const handleQuantity = (type) => {
                    if (type === "dec") {
                              quantity > 1 && setQuantity(quantity - 1)
                    }else {
                              setQuantity(quantity + 1)
                    }
          }

          const handleClick = () => {
                    dispatch(
                              addProduct(
                                        {
                                                  ...product,

                                                  quantity,

                                                  color,

                                                  size,
                                        }
                              )
                    )
          }

          
          return (
                    <Container>
                              <Announcement />

                              <Navbar />

                              <Wrapper>
                                        <ImgContainer>
                                                  <Image src={product.img}  />
                                        </ImgContainer>

                                        <InfoContainer>
                                                  <Title> {product.title} </Title>

                                                  <Desc> {product.desc} </Desc>

                                                  <Price> ${product.price}</Price>

                                                  <FilterContainer>
                                                            <Filter>
                                                                      <FilterTitle selected> Color: </FilterTitle>
                                                                      
                                                                      {
                                                                                product.color?.map((c) => (
                                                                                          <FilterColor 
                                                                                                    key ={c} 
                                                                                                    color= {c} 
                                                                                                    onClick = {() => setColor(c)}
                                                                                          />

                                                                                ))
                                                                      }
                                                                      
                                                            </Filter>

                                                            <Filter>
                                                                      <FilterTitle> Size </FilterTitle>

                                                                      <FilterSize  onClick = {(e) => setSize(e.target.value)}>
                                                                                {
                                                                                          product.size?.map(s => (
                                                                                                    <FilterSizeOption key={s} > 
                                                                                                              {s} 
                                                                                                    </FilterSizeOption>
                                                                                          ))
                                                                                }
                                                                      </FilterSize>
                                                            </Filter>
                                                  </FilterContainer>

                                                  <AddContainer>
                                                            <AmountContainer>
                                                                      <Remove style={{cursor: "pointer"}} onClick={() => handleQuantity("dec")} />

                                                                      <Amount> {quantity} </Amount>

                                                                      <Add style={{cursor: "pointer"}} onClick={() => handleQuantity("inc")} />
                                                            </AmountContainer>

                                                            <Button onClick={handleClick}> ADD TO CART </Button>
                                                  </AddContainer>
                                        </InfoContainer>
                              </Wrapper>

                              <Newsletter />

                              <Footer />
                    </Container>
          )
}


export default Product
