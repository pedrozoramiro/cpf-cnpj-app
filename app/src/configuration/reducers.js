import {combineReducers} from 'redux';

import identifications from '../modules/Identification/data/identificationReducer';
import loading from '../commons/components/AppLoading/loadingReducer'
import {reducer as notifications} from 'react-notification-system-redux';

export default combineReducers({
    identifications,
    loading,
    notifications
});