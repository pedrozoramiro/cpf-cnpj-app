import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DomainIcon from '@material-ui/icons/Domain';
import PersonIcon from '@material-ui/icons/Person';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import BlockIcon from '@material-ui/icons/Block';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class IdentificationRow extends Component {

  render() {
    const { identification, handleEditIndentification } = this.props;
    return (
      <Card >
        <CardHeader
          avatar={
            <Avatar >
              {identification.type === 'cpf' ?
                <PersonIcon /> :
                <DomainIcon />
              }
            </Avatar>
          }
          title={identification.value}
        />
        {identification.blacklist && (
          <CardContent>
            <Chip
              icon={<BlockIcon />}
              label="BLACKLIST"
              color="secondary"
            />
          </CardContent>
        )}
        {!identification.blacklist && (
          <CardContent>
            <Chip
              icon={<VerifiedUserIcon />}
              label="Tudo Certo"
              color="primary"
            />
          </CardContent>
        )}

        <CardActions>
          <Button fullWidth color="primary" onClick={() => handleEditIndentification(identification)}>
            Editar
                      </Button>
        </CardActions>
      </Card>
    )
  }
}


export default IdentificationRow;



