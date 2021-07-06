import React from "react";
import styled from "styled-components";
import {Trans} from "react-i18next";

const ServicesStyle = styled.div`
  width: 100%;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
.services__list {
  border: 1px solid #414142;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-between;
}

.services__item {
  font-size: 15px;
  font-weight: bold;
  flex: 0 0 25%;
  padding: 10px 20px;
  white-space: nowrap;
  text-align: center;
  @media (max-width: 385px) {
    flex: 0 0 100%;
  }
  a {
  	// color: #dbd9d9;
  	position: relative;
  	span {
  		position: absolute;
    	width: 18px;
    	height: 18px;
    	left: -22px
  	}
  }
  .V {
    	background-image: url('../static/v.svg');
  }
  .warning {
   		background-image: url('../static/i2.svg');
  }
  .X {
  		background-image: url('../static/x.svg');
  }
}
`

const Services = () => {
	return (
		<ServicesStyle>
			<h3 className="section__title"><Trans i18nKey="description.statisticStatus"></Trans></h3>
			<ul className="services__list">
				<li className="services__item">
					<a href="#"><span className="V"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="warning"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="V"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="X"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="V"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="X"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="V"></span>AWS CloudFront</a>
				</li>
				<li className="services__item">
					<a href="#"><span className="V"></span>AWS CloudFront</a>
				</li>
			</ul>
		</ServicesStyle>
	);
}

export default Services;