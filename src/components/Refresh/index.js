import React from 'react';
import PropTypes from 'prop-types';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { RefreshStyle, iconRefresh } from './styles';

const Refresh = ({ color, isRefresh }) => {
    return (
        <RefreshStyle>
            <RefreshIcon size={16} className={iconRefresh(color, isRefresh)} />
        </RefreshStyle>
    )
};

Refresh.propTypes = {
    color: PropTypes.string
};

export default Refresh;