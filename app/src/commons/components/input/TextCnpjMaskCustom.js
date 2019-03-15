import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';


function TextCnpjMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[ /\d/,/\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-',/\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
export default TextCnpjMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};