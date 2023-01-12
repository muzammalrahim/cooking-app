import React from 'react'
import Onion from '../assets/onion.png';
import CloseButton from '../assets/close.png'
import Potato from '../assets/potato.png'
import Chicken from '../assets/chicken.png'

export default function CosineSelection() {
  return (
    <div className='cosine-sel-main pt-4'>
       <h4 className='pt-3 pb-2'>
            Select Cosine
            <span>(optional)</span>
        </h4>
       <div className='selection-card'>
            <div className='search-tags cos-btn-div'>
                <div>
                    <button className='active'>Continental</button>
                </div>
                <div>
                    <button>Chinese</button>
                </div>
                <div>
                    <button>Italian</button>
                </div>
                <div>
                    <button>Indian</button>
                </div>
            </div>
       </div>
    </div>
  )
}
