import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

import { Link } from "react-router-dom"


const Success = () => {
          const location = useLocation();
          // in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
          // const data = location.state.data;

          const cart = location.state.products;
          const total = location.state.data;

          const currentUser = useSelector((state) => state.user.currentUser);

          const [orderId, setOrderId] = useState(null);

          console.log(total, cart, currentUser)


          useEffect(() => {
                    const createOrder = async () => {
                              try {
                                        const res = await userRequest.post("/orders", {
                                                  userId: currentUser._id,

                                                  products: cart.map((item) => (
                                                            {
                                                                      productId: item._id,
                                                                      
                                                                      quantity: item._quantity,
                                                            }
                                                  )),

                                                  amount: total,

                                                  address: {street: "Ilaro Street", state: "Enugu"}
                                        });

                                        console.log(res.data)

                                        setOrderId(res.data._id);

                              } catch {}
                    };

                    createOrder();

          }, [cart, total, currentUser]);
          console.log(orderId)


          return (
                    
                    <div
                              style={
                                        {
                                                  height: "100vh",
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                        }
                              }
                    >
                              {
                                        orderId
                                        ? `Order has been created successfully. Your order number is ${orderId}`
                                        : `Successfull. Your order is being prepared...`
                              }

                              <Link to="/">
                                        <button style={{ padding: 10, marginTop: 20, cursor: "pointer" }}>
                                                  Go to Homepage
                                        </button>
                              </Link>
                              
                    </div>
          );
};


export default Success;



