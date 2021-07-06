import React from "react";
import styled from "styled-components";

//https://www.npmjs.com/package/react-accessible-accordion

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';


const TimeLineStyle = styled.div`
    border-left: 2px solid #ccc;
    padding: 30px 0 0 20px;
    margin-bottom: 50px;

    .timeline__title {
        font-size: 28px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .timeline__subtitle {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        color: #999999;
        line-height: 0.9;
        margin-bottom: 15px;
        span {
          font-size: 12px;
          color: #dbd9d9;
        }
    }


  .content-timeline {
    max-width: 1080px;
    max-height: 1080px;
    overflow: hidden;
    padding: 20px 0 0 0;
    transition: max-width 0.4s ease;
  }

  .content-timeline_invisible {
    max-width: 0;
    max-height: 0;
    transition: max-width 0.4s ease;
  }

  .schedule__header {
    background: #00aaf0;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
  }
  .schedule__info {
    text-align: end;
  }

  .content-schedule {
    border: 1px solid #414142;
    border-top: none;
    padding: 15px;
    &_bottom {
        padding-top: 40px;
        li {
            padding: 20px 0;
        }
        .content-schedule__left {
            strong {
                opacity: 0.5;
                font-size: 12px;
            }
        }    
        .content-schedule__right {
            opacity: 1;
            font-size: 14px;
        }    
    }

    li {
      display: flex;
      margin-bottom: 12px;
      @media (max-width: 650px) {
        flex-direction: column;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .content-schedule__left {
    font-size: 16px;
    width: 20%;
    white-space: nowrap;
    @media (max-width: 650px) {
      margin-bottom: 3px;
    }
  }
  .content-schedule__right {
    font-size: 14px;
    opacity: 0.7;
  }
  
  .accordion__item {
    margin-bottom: 30px;
    &:last-child {
    margin-bottom: 0;
  }
`;

const TimeLine = (  ) => {

  return (
    <TimeLineStyle>
      <div className="timeline">
        <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            preExpanded={['a', 'b']}
        >
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2 className="timeline__title">Май 2021</h2>
                <div className="timeline__subtitle">
                  Deploy Version 1.5.2
                  <br />
                  <span>May 10, 2021 18:14 UTC</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="content-timeline"
              >
                <div className="schedule__header">
                  <div className="schedule__version">
                    <div>Deploy Version 1.5.1</div>
                  </div>
                  <div className="schedule__info">Planned Maintenance</div>
                </div>
                <ul className="schedule__content content-schedule">
                  <li>
                    <div className="content-schedule__left">Schedule</div>
                    <div className="content-schedule__right">
                      June 22, 2021 15:00 - 15:15 UTC
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Data Centers</div>
                    <div className="content-schedule__right">
                      US-East, US-West, Ireland, Sydney, Toronto
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Components</div>
                    <div className="content-schedule__right">
                      Hosted Status Pages, Developer API, Status API, Dashboard,
                      Website
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Description</div>
                    <div className="content-schedule__right">
                      We will be deploying the next version of Status.io.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"></div>
                    <div className="content-schedule__right">
                      There will be no downtime during this maintenance.
                    </div>
                  </li>
                </ul>
                <ul className="schedule__content content-schedule content-schedule_bottom">
                  <li>
                    <div className="content-schedule__left"><strong>May 17, 2021 15:05 UTC</strong></div>
                    <div className="content-schedule__right">
                      [Update] Starting deployments now.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"><strong>May 17, 2021 15:05 UTC</strong></div>
                    <div className="content-schedule__right">
                      [Update] Deployments complete. Version 1.5.2 is now live in production.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"><strong></strong></div>
                    <div className="content-schedule__right">
                      View the Changelog for more details at blog.status.io/tag/changelog
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2 className="timeline__title">Май 2021</h2>
                <div className="timeline__subtitle">
                  Deploy Version 1.5.2
                  <br />
                  <span>May 10, 2021 18:14 UTC</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel

            >
              <div className="content-timeline"
              >
                <div className="schedule__header">
                  <div className="schedule__version">
                    <div>Deploy Version 1.5.1</div>
                  </div>
                  <div className="schedule__info">Planned Maintenance</div>
                </div>
                <ul className="schedule__content content-schedule">
                  <li>
                    <div className="content-schedule__left">Schedule</div>
                    <div className="content-schedule__right">
                      June 22, 2021 15:00 - 15:15 UTC
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Data Centers</div>
                    <div className="content-schedule__right">
                      US-East, US-West, Ireland, Sydney, Toronto
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Components</div>
                    <div className="content-schedule__right">
                      Hosted Status Pages, Developer API, Status API, Dashboard,
                      Website
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left">Description</div>
                    <div className="content-schedule__right">
                      We will be deploying the next version of Status.io.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"></div>
                    <div className="content-schedule__right">
                      There will be no downtime during this maintenance.
                    </div>
                  </li>
                </ul>
                <ul className="schedule__content content-schedule content-schedule_bottom">
                  <li>
                    <div className="content-schedule__left"><strong>May 17, 2021 15:05 UTC</strong></div>
                    <div className="content-schedule__right">
                      [Update] Starting deployments now.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"><strong>May 17, 2021 15:05 UTC</strong></div>
                    <div className="content-schedule__right">
                      [Update] Deployments complete. Version 1.5.2 is now live in production.
                    </div>
                  </li>
                  <li>
                    <div className="content-schedule__left"><strong></strong></div>
                    <div className="content-schedule__right">
                      View the Changelog for more details at blog.status.io/tag/changelog
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </TimeLineStyle>
  );
};
export default TimeLine;
