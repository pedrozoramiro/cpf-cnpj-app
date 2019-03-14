import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Paper from '@material-ui/core/Paper';
import ConfirmMessage from './ConfirmMessage';
import { actions as identificationActions, selectors as identificationSelectors } from './data/identificationReducer';
import IdentificationBar from './IdentificationBar';
import IdentificationEditDialog from './IdentificationEditDialog';
import IdentificationRow from './IdentificationRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { List, Main, AddButtonContent } from './styles';


class IdentificationList extends Component {

  state = {
    identificationSelected: null,
    openIdentificationEditDialog: false,
    openRemoveIdentificacao: false,
    openUpdateBlacklistIdentificacao: false
  }


  componentDidMount() {
    this.handleGetAllIdenfications();
  }

  handleOpenDialog = (openPropertyName, value, identificationSelected) => {
    this.setState({ [openPropertyName]: value, identificationSelected });
  }

  handleRemoveIdentificacaoConfirm = (identification) => {
    console.log(identification);
    const { deleteIdentification } = this.props;
    deleteIdentification(identification);
    this.setState({ openRemoveIdentificacao: false });
  }

  handleUpdateBlacklistIdentificacaoConfirm = (identification) => {
    console.log(identification);
    const { updateIdentification } = this.props;
    identification.blacklist = !identification.blacklist;
    updateIdentification(identification)
    this.setState({ openUpdateBlacklistIdentificacao: false });
  }


  handleChangeBlacklistSubmit = (identification) => {
    console.log(identification);
    const { updateIdentification } = this.props;
    identification.blacklist = !identification.blacklist;
    updateIdentification(identification)
    this.setState({ openUpdateBlacklistIdentificacao: false });
  }

  handleEditDialogSubmit = (identification) => {
    console.log(identification);
    const { updateIdentification, newIdentification } = this.props;
    const fnSaveIdentification = identification.id ? updateIdentification : newIdentification;
    fnSaveIdentification(identification)
    this.setState({ openIdentificationEditDialog: false });
  }

  handleGetAllIdenfications = (order, filter) => {
    const { getAllIdenfications } = this.props;
    getAllIdenfications({ order, filter });
  }

  handleFilterOrOrder = ({ filter, order }) => {
    this.handleGetAllIdenfications(order, filter)
  };

  render() {
    const { openIdentificationEditDialog, identificationSelected } = this.state;
    const { identifications } = this.props;
    return (
      <Fragment>
        <IdentificationBar hanldeFilterOrOrderChange={this.handleFilterOrOrder} />
        <Main>
          <Paper>
            <List>
              {identifications.map((indentification) => (
                <IdentificationRow
                  key={indentification.value}
                  identification={indentification}
                  handleEditIndentification={()=>this.handleOpenDialog('openIdentificationEditDialog', true, indentification)}
                  handleRemoveIndentification={() => this.handleOpenDialog('openRemoveIdentificacao', true, indentification)}
                  handleUpdateBlacklistIdentificacao={() => this.handleOpenDialog('openUpdateBlacklistIdentificacao', true, indentification)} />
              ))}
            </List>
          </Paper>
          <AddButtonContent onClick={()=>this.handleOpenDialog('openIdentificationEditDialog', true, null)}>
            <Fab color="primary">
              <AddIcon/>
            </Fab>
          </AddButtonContent>
        </Main>

        <IdentificationEditDialog
          identification={identificationSelected}
          open={openIdentificationEditDialog}
          onSubmit={this.handleEditDialogSubmit}
          handleCloseModal={()=> this.handleOpenDialog('openIdentificationEditDialog', false, null)}
        />

        <ConfirmMessage
          open={this.state.openRemoveIdentificacao}
          text={'Deseja remover identificação ?'}
          onConfirm={() => this.handleRemoveIdentificacaoConfirm(identificationSelected)}
          onCancel={() => this.setState({ openRemoveIdentificacao: false })}
        />

        <ConfirmMessage
          open={this.state.openUpdateBlacklistIdentificacao}
          text={'Deseja altenar situação?'}
          onConfirm={() => this.handleUpdateBlacklistIdentificacaoConfirm(identificationSelected)}
          onCancel={() => this.setState({ openUpdateBlacklistIdentificacao: false })}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  identifications: identificationSelectors.getIdentifications(state)
});

const mapDispatchToProps = {
  ...identificationActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(IdentificationList);