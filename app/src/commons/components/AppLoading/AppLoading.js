import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress';
import {selectors as loadingSelectors} from './loadingReducer';

import If from '../If/If';

import {LodadingContainer} from './styles'

export function AppLoading({show}) {
    return (
        <If test={show}>
            <LodadingContainer>
                <CircularProgress/>
                <Typography
                    type="body2"
                    align="center"
                >
                Carregando ...
                </Typography>
            </LodadingContainer>
        </If>
    );
}

AppLoading.defaultProps = {
    show: false
};

AppLoading.propTypes = {
    show: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        show: loadingSelectors.getLoadingState(state)
    };
}

export default connect(mapStateToProps)(AppLoading);
