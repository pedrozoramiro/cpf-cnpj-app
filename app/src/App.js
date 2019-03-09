import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DomainIcon from '@material-ui/icons/Domain';
import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
import { CardActions } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row gutter={40}>
          <Col span={4}></Col>
          <Col span={4}>
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
                <FormControl >
                  <InputLabel htmlFor="age-native-simple">Ordenar</InputLabel>
                  <Select
                    native
                    inputProps={{
                      name: 'ordenar',
                      id: 'age-native-simple',
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
          <Col span={2}>
            <Fab color="primary" aria-label="Add" >
              <AddIcon />
            </Fab>
          </Col>
          <Col span={2}>
          </Col>
        </Row>

        <Row gutter={40}>
          <Col span={4}></Col>
          <Col span={4}>
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
          <Col span={4}></Col>
        </Row>
        <Row gutter={40}>
          <Col span={4}></Col>
          <Col span={4}>
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
          <Col span={4}></Col>
        </Row>


        <Row gutter={40}>
          <Col span={4}></Col>
          <Col span={4}>
         fazer paginacao
          </Col>
          <Col span={4}></Col>
        </Row>
      
      </div>
    );
  }
}

export default App;
