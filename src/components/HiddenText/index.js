import React from 'react';
import PropTypes from 'prop-types';
import { Bullet1, Bullet2 } from './styles';

const HiddenText = ({ color }) => {
    return (
        <>
            <Bullet1 color={color} />
            <Bullet2 color={color} />
            <Bullet1 color={color} />
        </>
    )
};

HiddenText.propTypes = {
    color: PropTypes.string
};

export default HiddenText;