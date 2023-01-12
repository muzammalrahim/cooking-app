import React from 'react'
import Onion from '../assets/onion.png';
import CloseButton from '../assets/close.png'
import Potato from '../assets/potato.png'
import Chicken from '../assets/chicken.png'

export default function SearchTags() {
  return (
    <div className='search-tags-main'>
       <h4 className='pb-2'>You Selection</h4>
       <div className='selection-card'>
            <div className='search-tags'>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Onion} alt='tag-icon'/>
                    <p>Onion</p>
                </div>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Potato} alt='tag-icon'/>
                    <p>Potato</p>
                </div>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Chicken} alt='tag-icon'/>
                    <p>Chicken</p>
                </div>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Onion} alt='tag-icon'/>
                    <p>Onion</p>
                </div>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Potato} alt='tag-icon'/>
                    <p>Potato</p>
                </div>
                <div className='single-tag'>
                    <img className='close-btn' src={CloseButton} alt='tag-icon'/>
                    <img src={Chicken} alt='tag-icon'/>
                    <p>Chicken</p>
                </div>

            </div>
       </div>
    </div>
  )
}
