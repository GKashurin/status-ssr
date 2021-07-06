import React from "react"
import styled from "styled-components";
import {Trans} from "react-i18next";

export const Panel = styled.div`
margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  .panel__body {
    // margin-bottom: 70px;
    background: #27AE60;;
    color: #ffffff;
    border-radius: 4px;
    min-height: 52px;
    padding: 15px;
  }
  .panel__statistic {
  	margin-top: 70px;
    display: flex;
    padding: 20px;
    border: 1px solid #414142;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .body-panel {
  .body-panel__wrapper {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .body-panel__status {
    width: 66.67%;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
    strong {
      font-size: 18px;
    }
  }
  .body-panel__time {
    width: 33.33%;
    @media (max-width: 768px) {
      width: 100%;
    }
    p {
      float: right;
      @media (max-width: 768px) {
        float: none;
        margin: 0;
      }
    }
  }
}

.statistic {
  .statistic__column {
    flex: 1 1 33.33%;
    text-align: center;
    @media (max-width: 768px) {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .statistic__count {
    font-size: 60px;
  }
}
`

const Statistic = () => (
		<Panel>
			<div className="panel__body body-panel">
				<div className="body-panel__wrapper">
					<div className="body-panel__status">
						<strong>
							<Trans i18nKey="description.statisticStatus"></Trans>
						</strong>
					</div>
					<div className="body-panel__time">
						<p><Trans i18nKey="description.statisticTime"></Trans></p>
					</div>
				</div>
			</div>
			<ul className="panel__statistic statistic">
				<li className="statistic__column">
					<div className="statistic__count">
						0
					</div>
					<div className="statistic__description">
						<Trans i18nKey="description.statisticIncidents"></Trans>
					</div>
				</li>
				<li className="statistic__column">
					<div className="statistic__count">
						0
					</div>
					<div className="statistic__description">
						<Trans i18nKey="description.statisticMaintenances"></Trans>
					</div>
				</li>
				<li className="statistic__column">
					<div className="statistic__count">
						196
					</div>
					<div className="statistic__description">
						<Trans i18nKey="description.statisticDays"></Trans>
					</div>
				</li>
			</ul>
		</Panel>
	)

export default Statistic;