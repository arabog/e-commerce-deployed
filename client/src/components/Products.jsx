import { publicRequest } from "../requestMethods"
import { useState, useEffect } from "react"

import styled from "styled-components"

import Product from "./Product"


const Container = styled.div `
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
`


// item, filters, sort: 4rm ProductList compont in pgs
const Products = ( { cat, filters, sort}) => {
          const [products, setProducts] = useState([])
          const [filteredProducts,  setFilteredProducts] = useState([])


          // useEffect(() => {fxn}, [depend])
          useEffect(() => {
                    const getProducts = async () =>{
                              try {
                                        const res = await publicRequest.get(
                                                  cat ? `publicRequest/products?category=${cat}`
                                                  : "publicRequest/products"
                                        )

                                        setProducts(res.data)
                                        
                              } catch (err) {
                                        console.log(err)
                              }

                    }

                    getProducts()
          }, [cat])


          useEffect(() => {
                    cat && 
                              setFilteredProducts(
                                        products.filter((item) => Object.entries(filters)
                                                                                          .every(([key, value]) => 
                                                                                                    item[key].includes(value)
                                                                                                    // console.log(key, value)
                                                                                          )
                                        )
                    )
          }, [cat, products, filters])

          useEffect(() => {
                    if (sort === "newest") {
                              setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
                    }else if (sort === "asc") {
                              setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
                    }else {
                              setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
                    }

          }, [sort])

          return (
                    <Container>
                              {
                                        cat 
                                                  ? filteredProducts
                                                            .map(item => (
                                                                      <Product 
                                                                                item={item}
                                                                                key = {item._id}
                                                                      />
                                                            )
                                                  )
                                                  
                                                  : products
                                                            .slice(0, 8)
                                                            .map(item => (
                                                                      <Product 
                                                                                item={item}
                                                                                key = {item._id}
                                                                      />
                                                            )
                                                  )
                              }
                    </Container>
          )
}


export default Products