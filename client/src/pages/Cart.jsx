import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet, laptop } from "../responsive"

import { useEffect, useState } from "react";

import { useHistory } from "react-router";

import { Link } from "react-router-dom"

// import { userRequest } from "../requestMethods";


import { 
	useFlutterwave, 
	// FlutterWaveButton, 
	closePaymentModal 
} from '../flutter/index';


const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;

	${mobile(
		{ 
			padding: "10px" 
		}
	)}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};

	color: ${(props) => props.type === "filled" && "white"};

	${laptop(
		{
			padding: "10px 30px"
		}
	)}
`;

const TopTexts = styled.div`
	${mobile(
		{
			display: "none"
		}
	)}

	${laptop(
		{
			display: "inline-block"
		}
	)}
`;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
	font-size: "14px";

	
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile(
		{ 
			flexDirection: "column" 
		}
	)}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	
	${mobile(
		{ 
			flexDirection: "column" 
		}
	)}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;

	${mobile(
		{
			flexDirection: "column" ,

			alignItems: "center"
		}
	)}

	${tablet (
		{
			flexDirection: "row" ,

			justifyContent: "space-around"
		}
	)}
`;

const Image = styled.img`
	width: 200px;

	${laptop(
		{
			width: "250px",

			paddingTop: "50px",
		}
	)}
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	${laptop(
		{
			fontSize: "17px"
		}
	)}

`;

const ProductName = styled.span`
	${mobile(
		{
			marginBottom: "10px"
		}
	)}
`;

const ProductId = styled.span`
	${mobile(
		{
			marginBottom: "10px"
		}
	)}
`;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};

	${mobile(
		{
			marginBottom: "10px"
		}
	)}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;

	${mobile(
		{ 
			margin: "5px 15px" 
		}
	)}
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;

	${mobile(
		{ 
			marginBottom: "20px" 
		}
	)}
`;

const Hr = styled.hr`
	background-color: #000111;

	border: "none";
	outline: "none";

	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;

	${mobile(
		{
			marginTop: "30px",
		}
	)}

	${mobile(
		{
			width: "80%",
			margin: "30px auto 0"
		}
	)}
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;

	font-weight: ${(props) => props.type === "total" && "500"};

	font-size: ${(props) => props.type === "total" && "24px"};

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	cursor: pointer;
`;


const Cart = () => {
	const cart = useSelector((state) => state.cart);

	const history = useHistory();

	const [buy, setBuy] = useState(false)

	const user = useSelector(state => state.user.currentUser)


	useEffect(() => {
		if (buy) {
			history.push("/success", {

				products: cart.products,

				data: cart.total,
			});
		}

		setBuy(false)

	}, [history, cart.products, cart.total, buy]);


	// flutterwave
	const config = {
		public_key: 'FLWPUBK_TEST-0dd8284c64802f92f637d56c16f7567e-X',
		tx_ref: Date.now(),

		amount: cart.total,
		
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',

		customer: {
			email: user.email,

			name: user.username,

		},
		
		customizations: {
			title: 'HUGB',

			description: 'Payment for items in cart',

			logo: 'https://assets.piedpiper.com/logo.png',
		},
	};
		
	const handleFlutterPayment = useFlutterwave(config);
	
	const fwConfig = {
		...config,

		text: 'CHECKOUT NOW',

		callback: (response) => {
			// console.log(response);
			closePaymentModal()
		},

		onClose: () => {
			console.log("You close me ooo")
		},
		
	};


	return (
		<Container>
			<Announcement />

			<Navbar />

			<Wrapper>
				<Title>YOUR BAG</Title>

				<Top>
					<Link to="/">
						<TopButton>CONTINUE SHOPPING</TopButton>
					</Link>

					<TopTexts>
						<TopText>Shopping Bag({cart.quantity})</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>

					<TopButton 
						type="filled"

						{...fwConfig} 

						onClick={() => {
							handleFlutterPayment({
								callback: (response) => {
									// console.log(response);
									closePaymentModal()
								},
								
								onClose: () => {
									console.log("You close me ooo")
								},

							});
							
							setBuy(true) 


						}}
					>
						CHECKOUT NOW
					</TopButton>
				</Top>

				<Bottom>
					<Info>
						{
							cart.products.map((product) => (
								<Product key={product._id}>
									<ProductDetail>
										<Image src={product.img} />

										<Details>
											<ProductName>
												<b>Product:</b> {product.title}
											</ProductName>

											<ProductId>
												<b>ID:</b> {product._id}
											</ProductId>

											<ProductColor color={product.color} />
											
											<ProductSize>
												<b>Size:</b> {product.size}
											</ProductSize>
										</Details>

									</ProductDetail>

									<PriceDetail>
										<ProductAmountContainer>
											<Add />

											<ProductAmount>{product.quantity}</ProductAmount>
											
											<Remove />
										</ProductAmountContainer>

										<ProductPrice>
											$ {product.price * product.quantity}
										</ProductPrice>
									</PriceDetail>
									
									<Hr />

								</Product>
								
							))
						}


					</Info>

					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>

						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>

						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>

						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						
						<Button
							{...fwConfig} 

							onClick={() => {
								handleFlutterPayment({
									callback: (response) => {
										// console.log(response);
										closePaymentModal()
									},
									
									onClose: () => {
										console.log("You close me ooo")
									},

									
								});
								
								setBuy(true) 

							}}
						>

							CHECKOUT NOW

						</Button>
					</Summary>

				</Bottom>

			</Wrapper>

			<Footer />

		</Container>
	);
};

export default Cart;