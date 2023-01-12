import React from 'react';
import SeachMian from '../components/SeachMian';
import SearchTags from '../components/SearchTags';
import CosineSelection from '../components/CosineSelection';
import ButtonArrow from '../assets/btn-arrow.png';

export default function Home() {
  return (
    <div className='home-main'>
      <div className='hero-main'>
        <div className='hero-content'>
          <h3>Welcome to get surprised</h3>
          <p>What Ingredients(s) do you have to cook?</p>
        </div>
      </div>
      <SeachMian/>
      <div className='home-content pt-4'>
        <SearchTags/>
        <CosineSelection/>
        <div className='btn-div pt-4'>
          <button className='main-btn mt-3'>
            Get Something Delicious
            <img className='ps-2' src={ButtonArrow} alt='tag-icon'/>
          </button>
        </div>
      </div>
     
    </div>
  )
}
