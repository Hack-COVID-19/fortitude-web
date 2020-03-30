import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Grid, Header, Container, Button, Segment, TextArea, Card, Image, Modal, Icon } from 'semantic-ui-react'

const Appointment = props => (
  <div>
    <h1>Appointment Notes</h1>
    <h4>Enter notes and prescribed medication here.</h4>
    <div className="fill body">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/rachel.png'
            />
            <Card.Header>Rachel</Card.Header>
            <Card.Meta>Female, 78</Card.Meta>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Date Seen</Card.Header>
            <Card.Meta>April 1st, 2020</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
      <br />
      <Container>
        <Segment>
          <Header>Notes for Patient</Header>
          <TextArea style={{ minHeight: 100, width: 650 }} />
        </Segment>
      </Container>
    </div>
    
    <Grid>
      <Grid.Row columns={6}>
        <Grid.Column floated='left'>
          <Button onClick={props.goBack}>Back</Button>
        </Grid.Column>
        <Grid.Column floated='right'>
          <Modal trigger={<Button>Save</Button>} basic size='small'>
            <Header icon='comment alternate outline' content='Send Patient Summary' />
            <Modal.Content>
              <p>
                Would you like to send a text message summary of this appointment to the patient?
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' inverted onClick={props.goBack}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={props.goBack}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>  
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setData,
      changePage: () => push('/'),
      goBack: () => push('/appointments')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment)
