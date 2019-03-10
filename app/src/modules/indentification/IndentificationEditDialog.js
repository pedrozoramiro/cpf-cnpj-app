import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';

class IndentificationEditDialog extends Component {

   /* componentWillReceiveProps(nextProps) {
        const { postEdit, initialize } = nextProps
        if (postEdit && (!this.props.postEdit || this.props.postEdit.id !== postEdit.id)){
            initialize(postEdit);
            return;
        }
    }*/

    render() {
        const { handleSubmit, open, handleCloseModal, invalid, submitting } = this.props;
        return (
            <Dialog title="Editar Indentificação" modal={false} open={open}>
                <form onSubmit={handleSubmit}>
                    banana
                    <div>

                        <Row>
                            <Col  xs={true} >
                                <RaisedButton
                                    label="Salvar"
                                    primary
                                    fullWidth
                                    disabled={invalid || submitting}
                                    type="submit"
                                />
                            </Col>
                            <Col  xs={true} >
                                <RaisedButton
                                    color="primary"
                                    onClick={handleCloseModal}
                                    label="Fechar"
                                    fullWidth
                                />
                            </Col>
                        </Row>
                    </div>
                </form>
            </Dialog>
        )
    }

}

export default IndentificationEditDialog

