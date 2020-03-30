import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Header, Grid, Button } from 'semantic-ui-react'

const Patient = props => (
  <div>
    <h1>Appointment Planner</h1>

    {/* <h4>We use Calendly for appointment coordination.</h4> */}
    <h4>Schedule and view recent appointments.</h4>
    <div className="fill">

      <iframe width='100%' height='90%' src="https://master.d2hu6zuqjn9j6q.amplifyapp.com/"></iframe>
      {/* <p>
        Create an account with Calendly for scheduling virtual appointments with patients. 
      </p>
      <p>
        Set up a new meeting type, and add Zoom or Google Meet so that each meeting will be created with a video call so patients are able to recieve assistance remotely and continue praticing social distancing.
      </p>
      <span>👉 <a target="_blank" href='https://calendly.com/'>https://calendly.com/</a></span> */}
    
    </div>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column floated='left'>
            <Button onClick={props.goBack}>Back</Button>
          </Grid.Column>
          <Grid.Column floated='right'>
            <Button onClick={props.changePage}>Add Patient</Button>
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
      changePage: () => push('/onboard'),
      goBack: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient)
