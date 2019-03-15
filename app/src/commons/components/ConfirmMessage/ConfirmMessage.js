import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function ConfirmMessage({text,  open = false, onCancel, onConfirm}) {
    return (
        <Dialog
            open={open}
            onClose={onCancel}
        >
            <DialogTitle>
                Atenção
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onConfirm}
                    color="primary"
                >
                    Confirmar
                </Button>
                <Button
                    onClick={onCancel}
                    color="default"
                    autoFocus
                >
                   Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmMessage.propTypes = {
    open: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ConfirmMessage;
