import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
import Radio from '@material-ui/core/Radio';
import TextField from "@material-ui/core/TextField";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

class IdentificationEditDialog extends Component {
    state = {
        identification: { type: 'cpf', value: '', blacklist: false }
    }
    componentWillReceiveProps(nextProps) {
        const { identification } = nextProps
        if (identification){//edit
            this.setState({ identification: Object.assign(this.state.identification, identification) })
            return;
        }
        //new
        this.setState({ identification: { type: 'cpf', value: '', blacklist: false }});
    }

    handleTypeRadioChange = event => {
        const { identification } = this.state;
        identification.type = event.target.value;
        this.setState({ identification });
    };

    handleValueChange = event => {
        const { identification } = this.state;
        identification.value = event.target.value;
        this.setState({ identification });
    };

    handleBlackListChange = event => {
        const { identification } = this.state;
        identification.blacklist = event.target.checked;
        this.setState({ identification });
    };


    render() {
        const { onSubmit, open, handleCloseModal } = this.props;
        const { identification } = this.state;
        return (
            <Dialog title="Salvar Identificação" modal={false} open={open}>
                <Row>
                    <TextField
                        label="Valor"
                        value={identification.value}
                        onChange={this.handleValueChange}
                        fullWidth
                    />
                </Row>
                <Row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={identification.blacklist}
                                onChange={this.handleBlackListChange}
                                value={true}
                            />
                        }
                        label="Black List"
                    />
                </Row>
                <Row>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="type"
                            name="type"
                            value={identification.type}
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
                            onClick={() => onSubmit(identification)}
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

