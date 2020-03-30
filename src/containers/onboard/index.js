import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Header, Grid, Button } from 'semantic-ui-react'

const Onboard = props => (
  <div>
    <h1>Onboarding</h1>
    <h4>Use the form below to add a new patient.</h4>
    <p>
      If a patient is no longer able to recieve housecare treatment because of COVID-19 restrictions, you can ask them if they would like to continue recieving treatment remotely.
    </p>
    <p>
      If so, add thir name and phone number to the form below.
    </p>
    
    <div className="fill body">
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
      changePage: () => push('/'),
      goBack: () => push('/calendly')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboard)
