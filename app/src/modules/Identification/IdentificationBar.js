import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grow, SearchBarPage, SelectOrder, TitleContent, ToolbarActions } from './styles';


class IdentificationBar extends Component {

  state = {
    order: "value",
    filter: "",
  }

  handleSelectOrderChange = event => {
    var { value } = event.target;
    var { filter } = this.state;
    var { hanldeFilterOrOrderChange } = this.props;
    hanldeFilterOrOrderChange({ order: value, filter })
    this.setState({ order: value });
  };

  handleFilter = (filter) => {
    var { order } = this.state;
    var { hanldeFilterOrOrderChange } = this.props;
    hanldeFilterOrOrderChange({ order, filter })
    this.setState({ filter });
  };
  render() {
    const { filter } = this.state;
    return (
      <AppBar position="fixed">
        <Toolbar>
          <TitleContent>
            <Typography variant="h6" color="inherit" noWrap>
              Gerenciamento de CPF/CNPJ
                      </Typography>
          </TitleContent>
          <Grow />
          <ToolbarActions>
            <SearchBarPage
              value={filter}
              onCancelSearch={() => this.handleFilter('')}
              onChange={(newValue) => this.setState({ filter: newValue })}
              onRequestSearch={() => this.handleFilter(filter)}
            />
            <SelectOrder
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
            </SelectOrder>
          </ToolbarActions>
        </Toolbar>
      </AppBar>
    )
  }
}

export default IdentificationBar;