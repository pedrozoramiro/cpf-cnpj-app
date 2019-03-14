import React, { Component, Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import TextField from "@material-ui/core/TextField";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from 'material-ui/Dialog';
import { Grow, TitleContent } from './styles';



export default class IdentificationEditDialog extends Component {
    state = {
        identification: { type: 'cpf', value: '', blacklist: false }
    }

    componentWillReceiveProps(nextProps) {
        const { identification } = nextProps
        if (identification) {
            this.setState({ identification: Object.assign(this.state.identification, identification) });
            return;
        }
        this.setState({ identification: { type: 'cpf', value: '', blacklist: false }});
    }

    handleValueChange = event => {
        const { identification } = this.state;
        identification[event.target.name] = event.target.value;
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
                <Fragment>
                    <AppBar position="fixed">
                        <Toolbar>
                            <TitleContent>
                                <Typography variant="h6" color="inherit" noWrap>Salvar Identificação</Typography>
                            </TitleContent>
                            <Grow />
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={24}>
                        <Grid item md={12}>
                            <TextField required
                                id="cardName" label="Valor da Identificação"
                                name="value"
                                value={identification.value}
                                onChange={this.handleValueChange}
                                fullWidth />
                        </Grid>
                        <Grid item md={6}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={identification.blacklist}
                                        onChange={this.handleBlackListChange}
                                        value={true}
                                    />
                                }
                                labelPlacement="end"
                                label={identification.blacklist ? 'Situação da identificação Blacklisted' : 'Situação da identificação Verified'}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="type"
                                    name="type"
                                    value={identification.type}
                                    onChange={this.handleValueChange}
                                >
                                    <FormControlLabel
                                        value="cpf"
                                        control={<Radio color="primary" />}
                                        label="Identificação do tipo CPF"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="cnpj"
                                        control={<Radio color="primary" />}
                                        label="Identificação do tipo CNPJ"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Fragment>
                <DialogActions>
                    <Button
                        onClick={() => onSubmit(identification)}
                        color="primary"
                    >
                        Salvar
                </Button>
                    <Button
                        onClick={handleCloseModal}
                        color="default"
                        autoFocus
                    >
                        Cancelar
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
