import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

import { useLocation } from "react-router"
import { useState } from "react"

import { mobile, tablet } from "../responsive"
import Footer from "../components/Footer"



const Container = styled.div `

`

const Title = styled.h1 `
          margin: 20px;
`

const FilterContainer = styled.div `
          display: flex;
          justify-content: space-between;

          ${mobile(
                    {
                              flexDirection: "column",
                    }
          )}

          ${tablet (
                    {
                              flexDirection: "row",

                              width: "100%"
                    }
          )}
`

const Filter = styled.div `
          margin: 20px;

          ${mobile(
                    {
                              // width: "0px 10px",
                              width: "40%",
                              display: "flex",
                              flexDirection: "column",
                    }
          )}

          ${tablet (
                    {
                              flex: "1",

                              flexDirection: "row",

                              width: "59%"
                    }
          )}
`

const FilterText = styled.span `
          font-size: 20px;
          font-weight: 600;
          margin-right: 20px;

          ${mobile(
                    {
                              width: "100%",
                              marginBottom: "10px"
                    }
          )}

          ${tablet (
                    {
                              marginRight: "0",
                              display: "flex",
                              alignItems: "center",

                    }
          )}
`

const Horizontal = styled.div `
          ${mobile(
                    {
                              display: "flex",
                    }
          )}

`

const Select =styled.select `
          padding: 10px;
          margin-right: 20px;

          ${tablet (
                    {
                              padding: "8px 10px"
                              
                    }
          )}
`

const Option = styled.option `

`


const ProductList = () => {
          const location = useLocation()
          const cat = location.pathname.split("/")[2]

          const [filters, setFilters] = useState({})
          const [ sort, setSort] = useState("newest")


          const handleFilters = (e) => {
                    const value = e.target.value;

                    setFilters(
                              {
                                        ...filters,
          
                                        [e.target.name]: value
                              }
                    )
          }

          
          return (
                    <Container>
                              <Announcement />

                              <Navbar />

                              <Title> { cat } </Title>

                              <FilterContainer>
                                        <Filter>
                                                  <FilterText> Filter Products </FilterText>

                                                  <Horizontal >
                                                            <Select name="color" onChange={handleFilters}>
                                                                      <Option disabled >Color</Option>

                                                                      <Option>white</Option>

                                                                      <Option>black</Option>

                                                                      <Option>red</Option>

                                                                      <Option>blue</Option>

                                                                      <Option>yellow</Option>

                                                                      <Option>green</Option>
                                                            </Select>

                                                            <Select name="size" onChange={handleFilters} >
                                                                      <Option disabled >Size</Option>
                                                                      {/* <Option disabled selected>Size</Option> */}

                                                                      <Option>XS</Option>

                                                                      <Option>S</Option>

                                                                      <Option>M</Option>

                                                                      <Option>L</Option>

                                                                      <Option>XL</Option>
                                                            </Select>
                                                  </Horizontal>
                                        </Filter>

                                        <Filter>
                                                  <FilterText> Sort Products: </FilterText>

                                                  <Select onChange={e => setSort(e.target.value)} >
                                                            <Option value="newest"> Newest </Option>

                                                            <Option value="asc"> Price(asc) </Option>

                                                            <Option value="desc"> Price (desc) </Option>
                                                  </Select>
                                        </Filter>
                              </FilterContainer>

                              <Products cat={cat} filters={filters} sort={sort} />

                              <Newsletter />

                              <Footer />

                    </Container>
          )
}


export default ProductList
