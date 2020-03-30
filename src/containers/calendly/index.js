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
    <p>
      Create and account with Calendly to manage your schedule. Set it up with Zoom or Google Meet so that each meeting will be created with a video call so patients are able to recieve assistance remotely and continue social distancing.
    </p>
    <a target="_blank" href='https://calendly.com/'>https://calendly.com/</a>
    
    <div className="fill body">
      <Header as='h2' inverted textAlign='center'>
        Floated
      </Header>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column floated='left'>
            <Button onClick={props.goBack}>Back</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setData,
      changePage: () => push('/calendly'),
      goBack: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendly)
