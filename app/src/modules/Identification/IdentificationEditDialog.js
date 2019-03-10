import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
import Radio from '@material-ui/core/Radio';
import TextField from "@material-ui/core/TextField";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextCnpjMaskCustom from '../../commons/components/TextCnpjMaskCustom'
import TextCpfMaskCustom from '../../commons/components/TextCpfMaskCustom'

class IdentificationEditDialog extends Component {

    state = {
        indentification: { type: 'cpf', value: '' }
    }

    handleTypeRadioChange = event => {
        const { indentification } = this.state;
        indentification.type = event.target.value;
        this.setState({ indentification });
    };

    handleValueChange = event => {
        const { indentification } = this.state;
        indentification.value = event.target.value;
        this.setState({ indentification });
    };


    render() {
        const { handleSubmit, open, handleCloseModal } = this.props;
        const { indentification } = this.state;
        return (
            <Dialog title="Salvar Identificação" modal={false} open={open}>
                <Row>
                    <TextField
                    label="Valor"
                        value={indentification.value}
                        onChange={this.handleValueChange}
                        fullWidth
                        InputProps={{
                            inputComponent:  indentification.type === 'cpf' ? TextCpfMaskCustom : TextCnpjMaskCustom,
                        }}
                    />
                    </Row>
                    <Row>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="type"
                            name="type"
                            value={indentification.type}
                            onChange={this.handleTypeRadioChange}
                        >
                            <FormControlLabel
                                value="cpf"
                                control={<Radio color="primary" />}
                                label="CPF"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="cnpj"
                                control={<Radio color="primary" />}
                                label="CNPJ"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                </Row>
                <Row>
                    <Col xs={true} >
                        <RaisedButton
                            label="Salvar"
                            primary
                            color="second"
                            fullWidth
                            onClick={handleSubmit}
                        />
                    </Col>
                    <Col xs={true} >
                        <RaisedButton
                            color="primary"
                            onClick={handleCloseModal}
                            label="Fechar"
                            fullWidth
                        />
                    </Col>
                </Row>
            </Dialog>
        )
    }

}

export default IdentificationEditDialog

