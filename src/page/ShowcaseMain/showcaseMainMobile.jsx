import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { showcase_data } from '../../data/showcase_data.jsx';
import './ShowcasemainMobile.css';
import { FaArrowLeftLong } from "react-icons/fa6";

function Dropdown({ setIndex }) { // setIndex를 props로 받음
  return (
    <div className="Dropdown-list">
      {showcase_data.map((item, idx) => (
        <li key={idx} onClick={() => { setIndex(idx) }}>
          {item.project_name} {/* item.project_name으로 변경 */}
        </li> 
      ))}
    </div>
  );
}

function ShowcasemainMobile() {


  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [index, setIndex] = useState(0);

  const handleIndexClick = () => {
    navigate(`/quipu-dev/${index}`);
};

  return (
    <div className="showcasemainMobile">
      <div className='showcasemainMobile-nav'>
      <section className="showcasemainMobile-logo"><NavLink to="/">QUIPU</NavLink></section>
      </div>
      <div className="showcasemainMobile-header">
      <ul
          className="ShowcasemainMobile-Dropdown"
          onClick={() => {
            setView(!view);
          }}
        >
          <p>Drop down {view ? '▲' : '▼'}</p>
          {view && <Dropdown setIndex={setIndex}/>} {/* setIndex를 Dropdown에 전달 */}
        </ul>
      </div>
      <div className="showcasemainMobile-main">
        <button
          onClick={handleIndexClick}
        >
          view
        </button>
        <div className="showcasemainMobile-section1">
          <div className='showcasemainMobile-gallery1'>
            <img src={showcase_data[index].main_img[0]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
        </div>
        <div className='showcasemainMobile-section2'>
          <div className='section2-gallery1'>
          <img src={showcase_data[index].main_img[1]} alt={`Image for ${showcase_data[index].project_name}`} />

          </div>
          <div className='section2-text'>
          <h4>{showcase_data[index].goal}</h4>
          <p>{showcase_data[index].this_project}</p>
          </div>
          <div className='section2-gallery2'>
          <img src={showcase_data[index].main_img[2]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
          <div className='section2-gallery3'>
          <img src={showcase_data[index].main_img[3]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
        </div>
        <div className='showcasemainMobile-section3'>
          <div className='showcasemainMobile-gallery3'>
            <img src={showcase_data[index].main_img[4]} alt={`Image for ${showcase_data[index].project_name}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcasemainMobile;
