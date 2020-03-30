import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Header, Grid, Button } from 'semantic-ui-react'

const Calendly = props => (
  <div>
    <h1>Calendly</h1>

    <h4>We use Calendly for appointment coordination.</h4>
    <div className="fill body">
      <p>
        Create an account with Calendly for scheduling virtual appointments with patients. 
      </p>
      <p>
        Set up a new meeting type, and add Zoom or Google Meet so that each meeting will be created with a video call so patients are able to recieve assistance remotely and continue praticing social distancing.
      </p>
      <span>👉 <a target="_blank" href='https://calendly.com/'>https://calendly.com/</a></span>
    
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
)(Calendly)
