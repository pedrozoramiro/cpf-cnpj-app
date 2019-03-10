import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {actions as indentificationActions, selectors as indentificationSelectors} from './data/indentificationReducer';

import { Row, Col } from 'react-flexbox-grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DomainIcon from '@material-ui/icons/Domain';
import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
import SearchBar from 'material-ui-search-bar'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IndentificationEditDialog from './IndentificationEditDialog'

class IndentificationList extends Component {

   /* componentWillReceiveProps(nextProps) {
        const { postEdit, initialize } = nextProps
        if (postEdit && (!this.props.postEdit || this.props.postEdit.id !== postEdit.id)){
            initialize(postEdit);
            return;
        }
    }*/

    componentDidMount() {
        const {getAllIndenfications} = this.props;
        getAllIndenfications();
    }

  
    state = { openIndentificationEditDialog: false }


    handleOpenModal = (openIndentificationEditDialog) => {
      this.setState({ openIndentificationEditDialog });
    }
  
    handleSubmit = (indentification) => {
      this.setState({ openIndentificationEditDialog: false });
    }
  
    render() {
      const { openIndentificationEditDialog } = this.state;
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
                      onChange={() => console.log('onChange')}
                      onRequestSearch={() => console.log('onRequestSearch')}
                      style={{
                        margin: '0 auto',
                        maxWidth: 800
                      }}
                    />
                    <FormControl  >
                      <InputLabel htmlFor="order-native-simple">Ordenar</InputLabel>
                      <Select
                        native
                        inputProps={{
                          name: 'ordenar',
                          id: 'order-native-simple',
                        }}
                      >
                        <option value="" />
                        <option value={10}>Tipo</option>
                        <option value={20}>Blacklist</option>
                        <option value={30}>Valor</option>
                      </Select>
                    </FormControl>

                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <Card >
                  <CardHeader
                    avatar={
                      <Avatar >
                        <DomainIcon />
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={"55.886.001/0001-77"}
                  />

                  <CardContent>
                    <Chip
                      icon={<BlockIcon />}
                      label="BLACKLIST"
                      color="secondary"
                    />
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <Card >
                  <CardHeader
                    avatar={
                      <Avatar >
                        <PersonIcon />
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={"064.511.409-02"}
                  />

                  <CardContent>
                    <Chip
                      icon={<BlockIcon />}
                      label="BLACKLIST"
                      color="secondary"
                    />
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
              fazer paginacao
              </Col>
            </Row>
          </Col>
        </Row>
        <IndentificationEditDialog
          open={openIndentificationEditDialog}
          handleCloseModal={() => console.log('onRequestSearch')}
          onSubmit={this.handleSubmit}
        />
           </div>
        )
    }

}



const mapStateToProps = (state) => ({
    indentifications: indentificationSelectors.getIndentifications(state)
});

const mapDispatchToProps = {
    ...indentificationActions,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(IndentificationList);




