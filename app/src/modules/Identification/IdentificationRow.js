import React, { Component, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import BlockIcon from '@material-ui/icons/Block';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {
  DesktopStatusContent,
  DocumentValue,
  ListItem,
  ListItemActions,
  ListItemValues,
  MobileStatusContent,
  StatusValue
} from './styles';

export default class IdentificationRow extends Component {

  render() {
    const { identification, handleEditIndentification,handleRemoveIndentification,handleUpdateBlacklistIdentificacao } = this.props;
    return (
      <ListItem key={identification.id}>
        <ListItemValues>
          <Avatar>
            {identification.type === 'cpf'
              ? <PersonIcon />
              : <BusinessIcon />
            }
          </Avatar>
          <DocumentValue>
            <Typography variant="caption" gutterBottom>
              Documento
            </Typography>
            <Typography>
              {identification.value}
            </Typography>
          </DocumentValue>
          <StatusValue>
            <Typography variant="caption" gutterBottom>
              Situação
            </Typography>
            {identification.blacklist
              ? (
                <Fragment>
                  <MobileStatusContent>
                    <BlockIcon color="secondary" />
                  </MobileStatusContent>
                  <DesktopStatusContent>
                    <Chip
                      icon={<BlockIcon />}
                      label="Blacklisted"
                      color="secondary"
                    />
                  </DesktopStatusContent>
                </Fragment>
              )
              : (
                <Fragment>
                  <MobileStatusContent>
                    <VerifiedUserIcon color="primary" />
                  </MobileStatusContent>
                  <DesktopStatusContent>
                    <Chip
                      icon={<VerifiedUserIcon />}
                      label="Verified"
                      color="primary"
                    />
                  </DesktopStatusContent>
                </Fragment>
              )}
          </StatusValue>
        </ListItemValues>
        <ListItemActions>
          <Button size="small" onClick={() => handleUpdateBlacklistIdentificacao(identification)} color="primary">Alterar situação</Button>
          <Button size="small" onClick={() => handleEditIndentification(identification)} >Editar</Button>
          <Button size="small" onClick={() => handleRemoveIndentification(identification)}   color="secondary">Remover</Button>
        </ListItemActions>
      </ListItem>
    )
  }
}