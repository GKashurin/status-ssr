import React from 'react'
import styled from "styled-components";
import classNames from 'classnames';

const FilterStyle = styled.div`
    position: relative;
    cursor: pointer;
    
    svg {
      position: absolute;
      transform: rotate(-180deg);
      top: -2px; 
      &.rotated {
          position: absolute;
          transform: rotate(0deg);
          top: 7px;
          margin-left: 3px;
      }
  }



.filter__popup {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    display: none;
    padding: 5px 0;
    float: left;
    min-width: 160px;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    color: black;
    li {
        padding: 5px 15px;
        &:hover {
            background-color: #F5F5F5;
        }
    }
}

.filter__popup_active {
    display: block;
}

.timeline__toggle {
  text-align: right;
  cursor: pointer;
}
`

const Filter = ({visibleAllBlocks, toggleVisibleAllBlocks}) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
	const filterRef = React.useRef();

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(filterRef.current)) {
			setVisiblePopup(false);
		}
	};

	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};

	React.useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	}, []);

    return (
        <FilterStyle ref={filterRef}>
          <span onClick={toggleVisiblePopup}>Filter</span>
          <svg className={visiblePopup ? 'rotated' : ''}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#ffffff"
            />
          </svg>
          <div className="timeline__toggle" onClick={toggleVisibleAllBlocks}>Скрыть Все</div>
          <ul
            className={classNames("filter__popup", {
              "filter__popup_active": visiblePopup,
            })}
          >
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
          
        </FilterStyle>
    )
}
export default Filter