import React from 'react'
import Container from 'react-bootstrap/Container';
import SearchIcon from '../assets/search.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SeachMian() {
  return (
    <div className='search-home-main'>
        <Container>
            <div class="main-search">
                <div class="input-group">
                    <div class="input-group-append">
                        <img src={SearchIcon} alt='search'/>
                    </div>
                    <input type="text" class="form-control search-input" placeholder="Search this blog"/>   
                </div>
            </div>
        </Container>
    </div>
  )
}
