import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Card, Form, TextArea, Grid, Button, Modal, Header, Icon } from 'semantic-ui-react'

const items = [
  {
    header: 'Quick Update',
    meta: '⏰ 15 mins',
  },
  {
    header: 'Consultation',
    meta: '⏰ 30 mins',
  },
  {
    header: 'Session',
    meta: '⏰ 60 mins',
  },
  {
    header: 'Urgent Help',
    meta: '⏰ 0-90 mins',
  },
]

const Patient = props => (
  <div>
    <h1>Appointment Planner</h1>

    {/* <h4>We use Calendly for appointment coordination.</h4> */}
    <h4>Schedule and view recent appointments.</h4>
    <div className="fill">

      
    <Form>
      <TextArea placeholder='How are you feeling?' />
    </Form>

    <br />
    <Card.Group items={items} />
    
    </div>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column floated='left'>
            <Button onClick={props.goBack}>Back</Button>
          </Grid.Column>
          <Grid.Column floated='right'>
            <Modal trigger={<Button>Schedule</Button>} basic size='small'>
              <Header icon='calendar check outline' content='Confirm Appointment' />
              <Modal.Content>
                <p>
                  Are you sure you want to confirm this virtual apointment?
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
      goBack: () => push('/appointmentfeedback/1')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient)
