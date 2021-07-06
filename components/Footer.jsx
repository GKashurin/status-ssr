import React from "react"
import styled from "styled-components";
import A from "./A";

const FooterStyle = styled.footer`
  padding-bottom: 10px;
  
  .menu {
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
  }
}

.menu__left {
  display: flex;
  width: 75%;
  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
}

.menu__right {
  display: block;
  text-align: right;
  a {
    white-space: nowrap;
  }
  @media (max-width: 420px) {
    text-align: center;
  }
}
`
const Footer = () => {
	return (
		<FooterStyle >
			<nav className="menu">
				<div className="menu__left">
					<A href={'/'} text="Status" />
					<A href={'/history'} text="History" />
					<A href={'#'} text="Report Issue" />
				</div>
				<div className="menu__right">
					<A href={'#'} text="Powered by Status.io" />
				</div>
			</nav>
		</FooterStyle>
	);
}

export default Footer;