import React from 'react';
import PropTypes from 'prop-types';
import OrbitIcon from 'mdi-react/OrbitIcon';
import { LoadingStyle, iconLoading } from './styles';

const Loading = ({ color }) => {
    return (
        <LoadingStyle>
            <OrbitIcon size={14} className={iconLoading(color)} />
        </LoadingStyle>
    )
};

Loading.propTypes = {
    color: PropTypes.string
};

export default Loading;