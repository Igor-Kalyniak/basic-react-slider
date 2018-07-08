// Include default React libraries
import React, { Component } from 'react';

// Include style components
import styled from 'styled-components';

// Bootstrap styles
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Repair = styled.div`
	color: #464646;
	font-family: 'Roboto';
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #2a2a2a;
	font-family: Roboto;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display:block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const Calls = styled.div`
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display:block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const CallButton = styled.button`
	width: 176px;
	height: 48px;
	background-color: #3fc7db;
	border-radius: 30px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	border: none;

	&:hover {
		color: #3fc7db
		background-color: #fff;
		border: 1px solid #3fc7db;
		transition: 7s easy;
	}
`

class Adress extends React.Component {
	render () {
		return (
			<span>{this.props.addr}</span>
			)
	}
}
class TelNumber extends React.Component {
	render () {
		return (
			<span>{this.props.tel}</span>
		)
	}
}

class Menu extends React.Component {
	render () {
		return (
				<Row>
					<Col lg={3}>
						<Repair>Ремонт айфонов в сервисном центре и на выезде
						</Repair>
					</Col>
					<Col lg={3} lgOffset={1}>
						<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Adress addr="Ленинская, 301"/>
						</WorkTime>	
					</Col>
					<Col lg={3}>
						<Calls>Звонки принимаются 24 часа
						<TelNumber tel="8 (846) 922 55 44 ">
						</TelNumber>
						</Calls>
					</Col>
					<Col lg={2}>
						<CallButton> Заказать звонок! </CallButton>
					</Col>
				</Row> 
			)	
	}
}

export default Menu