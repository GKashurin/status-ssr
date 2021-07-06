import {useTranslation} from "react-i18next";
import styled from "styled-components";

import {Button, TimeLine, A, MainContainer} from "../components";
import {Panel} from "../components/Statistic";
import {BtnSection} from "./index";


const lngs = {
	en: {nativeName: 'English'},
	ru: {nativeName: 'Russian'}
};

const HistoryStyle = styled.div`
	a {
		font-size: 15px;
		font-weight: bold;
		margin: 0;
		background: url("../static/left-arrow.svg") no-repeat;
		padding-left: 20px;
	}

	.section__title {
		font-size: 18px;
		border: 1px solid #414142;
		text-align: center;
		padding: 25px 0;
		margin: 50px 0 20px 0;
		font-weight: normal;
	}	
`

const History = () => {
	const {i18n} = useTranslation();
	return (
		<div className="container">
			<MainContainer lngs={lngs} i18n={i18n}>
				<Panel style={{marginBottom: "20px"}}>
					<div className="panel__body body-panel">
						<div className="body-panel__wrapper">
							<div className="body-panel__status">
								<strong>Все системы работают</strong>
							</div>
							<div className="body-panel__time">
								<p>Обновлено несколько секунд назад</p>
							</div>
						</div>
					</div>
				</Panel>
				<HistoryStyle>
					<A href={'/'} text="Вернуться назад" />
					<h3 className="section__title">Status History</h3>
					<TimeLine/>
					<A href={'/'} text="Вернуться назад" />
					<BtnSection>
						<Button/>
					</BtnSection>
				</HistoryStyle>
			</MainContainer>
		</div>
	)
}

export default History