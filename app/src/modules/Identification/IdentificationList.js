import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions as identificationActions, selectors as identificationSelectors } from './data/identificationReducer';

import { Row, Col } from 'react-flexbox-grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DomainIcon from '@material-ui/icons/Domain';
import PersonIcon from '@material-ui/icons/Person';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
import SearchBar from 'material-ui-search-bar'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IdentificationEditDialog from './IdentificationEditDialog'

import MenuItem from '@material-ui/core/MenuItem';

class IdentificationList extends Component {

  state = {
    order: "value",
    filter: "",
    openIdentificationEditDialog: false
  }

  componentDidMount() {
    this.handleGetAllIdenfications();
  }

  handleOpenModal = (openIdentificationEditDialog) => {
    this.setState({ openIdentificationEditDialog });
  }

  handleEditDialogSubmit = (Identification) => {
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

  render() {
    const { openIdentificationEditDialog, filter, order } = this.state;
    const { identifications } = this.props;
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <Fab color="primary" aria-label="Add" onClick={() => this.handleOpenModal(true)} >
                  <AddIcon />
                </Fab>
                <Card >
                  <CardContent>
                    <SearchBar
                      value={filter}
                      onCancelSearch={() => this.handleCancelFilter()}
                      onChange={(newValue) => this.setState({ filter: newValue })}
                      onRequestSearch={() => this.handleGetAllIdenfications(order, filter)}
                    />
                    <FormControl >
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
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {identifications.map((indentification) => (
          <Row key={indentification.value} >
            <Col xs={12}>
              <Row center="xs">
                <Col xs={6}>
                  <Card >
                    <CardHeader
                      avatar={
                        <Avatar >
                          {indentification.isCpf ?
                            <PersonIcon /> :
                            <DomainIcon />
                          }
                        </Avatar>
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={indentification.value}
                    />
                    {indentification.blacklist && (
                      <CardContent>
                        <Chip
                          icon={<BlockIcon />}
                          label="BLACKLIST"
                          color="secondary"
                        />
                      </CardContent>
                    )}
                    {!indentification.blacklist && (
                      <CardContent>
                        <Chip
                          icon={<VerifiedUserIcon />}
                          label="Tudo Certo"
                          color="primary"
                        />
                      </CardContent>
                    )}
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                fazer paginacao
              </Col>
            </Row>
          </Col>
        </Row>
        <IdentificationEditDialog
          open={openIdentificationEditDialog}
          onSubmit={this.handleEditDialogSubmit}
          handleCloseModal={ this.handleEditDialogClose}
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




