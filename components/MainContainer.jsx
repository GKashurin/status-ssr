import Link from "next/link";
import Image from "next/image";
import Logo from "../public/static/Easy_logo.png";
import Button from "./Button";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .header__logo {
  img {
      max-width: 290px;
      max-height: 78px;
  }
}  
`

const MainContainer = ({children, lngs, i18n}) => {
	return (
		<>
			<HeaderStyle>
				<div className="header__logo">
					<Link href="/">
						<a>
							<Image
								src={Logo}
								alt="Logo"
							/>
						</a>
					</Link>
				</div>
				<div className="header__language">
					{
						Object.keys(lngs).map((lng) => (
							<a key={lng} style={
								{
									fontWeight: i18n.language === lng ? 'bold' : 'normal',
									marginRight: "3px",
									cursor: "pointer"
								}
							} type="submit" onClick={() => i18n.changeLanguage(lng)}>
								{lngs[lng].nativeName}
							</a>
						))}
				</div>
				<Button/>
			</HeaderStyle>
			<main>
				{children}
			</main>
		</>
	)
}
export default MainContainer