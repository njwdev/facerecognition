import React from 'react';
import './Rank.css';
import PropTypes from 'prop-types';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'> 
            {`${name}, your current number of entries is`}
            </div>
            <div className='white f1'> 
            {entries}
            </div>
        </div>
    )
}

export default Rank;

Rank.propTypes = {
    name: PropTypes.string,
    entries: PropTypes.string
  };