import {useTranslation} from 'react-i18next';
import '../I18n';

import styled from "styled-components";

import {Services, Statistic, Table, Schedule, Metrics, Button, Footer, Map} from "../components";
import Head from "next/head";
import MainContainer from "../components/MainContainer";


const lngs = {
	en: {nativeName: 'English'},
	ru: {nativeName: 'Russian'}
};

export const BtnSection = styled.div`
  padding: 15px;
  border: 1px solid #414142;
  margin: 70px 0;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  button {
    display: block;
    margin: 0 auto;
  }
`

const Home = () => {
	const {i18n} = useTranslation();
	return (
		<div className="container">
			<MainContainer lngs={lngs} i18n={i18n}>
				<Head>
					<title>Status-next</title>
					<meta keywords="software development"></meta>
				</Head>
				<Statistic/>
				<Table/>
				<Services/>
				<Map />
				<Metrics/>
				<Schedule/>
				<BtnSection>
					<Button/>
				</BtnSection>
				<Footer/>
			</MainContainer>
		</div>
	)
}
export default Home