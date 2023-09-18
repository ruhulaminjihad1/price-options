import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'
const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-2xl items-center flex my-4'><AiFillCheckCircle className=' text-green-500 mr-4'></AiFillCheckCircle>{feature}</p>
        </div>
        
    );
};
Feature.propTypes = {
    feature: PropTypes.string
 }
export default Feature;