import React from 'react';
import { Button } from 'react-bootstrap';
import { IIllustrationWorking } from '../utils/icons.utils';

const HeroSection = () => {
  return (
    <div className="hero-section mx-1 row hero-img">
        <div className="col-md-6">
            <h1 className="display-1"><span className="text-warning">More</span> <span className="text-success">than</span> <span className="text-primary">just</span> <span  className="text-warning">shorter</span> <span className="text-danger">links</span> </h1>
            <p className="fst-italic text-secondary">Build your brand recognition and get detailed insights on how your brand is performing.</p>
            <Button variant="outline-success">Get Started</Button>{' '}
        </div>
        <div className="col-md-6 pt-3">
            <img className="hero-img" src={IIllustrationWorking} alt="#google"/>

        </div>
    </div>
  )
}

export default HeroSection