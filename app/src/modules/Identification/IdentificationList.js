import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions as identificationActions, selectors as identificationSelectors } from './data/identificationReducer';

import { Row, Col } from 'react-flexbox-grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import SearchBar from 'material-ui-search-bar'

import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IdentificationEditDialog from './IdentificationEditDialog'
import MenuItem from '@material-ui/core/MenuItem';
import IdentificationRow from './IdentificationRow'
import Divider from '@material-ui/core/Divider';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';

class IdentificationList extends Component {

  state = {
    identificationSelected: null,
    order: "value",
    filter: "",
    openIdentificationEditDialog: false
  }

  componentDidMount() {
    this.handleGetAllIdenfications();
  }

  handleOpenModal = (openIdentificationEditDialog) => {
    this.setState({ openIdentificationEditDialog, identificationSelected: null });
  }

  handleEditDialogSubmit = (identification) => {
    const { updateIdentification, newIdentification } = this.props;
    const fnSaveIdentification = identification.id ? updateIdentification : newIdentification;
    fnSaveIdentification(identification)
    this.setState({ openIdentificationEditDialog: false });
  }

  handleEditDialogClose = (Identification) => {
    this.setState({ openIdentificationEditDialog: false });
  }

  handleGetAllIdenfications = (order, filter) => {
    const { getAllIdenfications } = this.props;
    getAllIdenfications({ order, filter });
  }

  handleSelectOrderChange = event => {
    var { value } = event.target;
    var { filter } = this.state;
    this.handleGetAllIdenfications(value, filter)
    this.setState({ order: value });
  };


  handleCancelFilter = () => {
    var { order } = this.state;
    var filter = '';
    this.handleGetAllIdenfications(order, filter)
    this.setState({ filter });
  };

  handleEditIndentification = (identificationSelected) => {
    this.setState({ identificationSelected, openIdentificationEditDialog: true });
  };

  render() {
    const { openIdentificationEditDialog, filter, order, identificationSelected } = this.state;
    const { identifications } = this.props;
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Row around="xs">
              <Col xs={6}>
                <Card >
                  <CardContent>
                    <Row around="xs">
                      <Col xs={10} >
                        <SearchBar
                          value={filter}
                          onCancelSearch={() => this.handleCancelFilter()}
                          onChange={(newValue) => this.setState({ filter: newValue })}
                          onRequestSearch={() => this.handleGetAllIdenfications(order, filter)}
                        />
                      </Col>
                      <Col xs={2} >
                        <Fab color="primary" aria-label="Add" onClick={() => this.handleOpenModal(true)} >
                          <AddIcon />
                        </Fab>
                      </Col>
                    </Row>
                    <Row around="xs">
                      <FormControl fullWidth>
                        <InputLabel htmlFor="order-select">Ordenar</InputLabel>
                        <Select
                          value={this.state.order}
                          onChange={this.handleSelectOrderChange}
                          inputProps={{
                            name: 'order',
                            id: 'order-select',
                          }}
                        >
                          <MenuItem value={'value'}>Valor</MenuItem>
                          <MenuItem value={'type'}>Tipo</MenuItem>
                          <MenuItem value={'blacklist'}>Blacklist</MenuItem>
                        </Select>
                      </FormControl>
                    </Row>

                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              {identifications.filter(i => !i.blacklist).map((indentification) => (
                <IdentificationRow
                  key={indentification.value}
                  identification={indentification}
                  handleEditIndentification={this.handleEditIndentification} />
              ))}
            </Col>
          </Row>
        </Col>



        <IdentificationEditDialog
          identification={identificationSelected}
          open={openIdentificationEditDialog}
          onSubmit={this.handleEditDialogSubmit}
          handleCloseModal={this.handleEditDialogClose}
        />
      </div>
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




/*
<Col xs={12}>
          <Row center="xs">
            <Col xs={3}>
            <Chip
              icon={<BlockIcon />}
              label="BLACKLIST"
              color="secondary"
            />
              {identifications.filter(i => i.blacklist).map((indentification) => (
                <IdentificationRow
                  key={indentification.value}
                  identification={indentification}
                  handleEditIndentification={this.handleEditIndentification} />
              ))}
            </Col>
            <Col xs={3}>
              <Chip
                icon={<VerifiedUserIcon />}
                label="Tudo Certo"
                color="primary"
              />
              {identifications.filter(i => !i.blacklist).map((indentification) => (
                <IdentificationRow
                  key={indentification.value}
                  identification={indentification}
                  handleEditIndentification={this.handleEditIndentification} />
              ))}
            </Col>
          </Row>
        </Col>

*/