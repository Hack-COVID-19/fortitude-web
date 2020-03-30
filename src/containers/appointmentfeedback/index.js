import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Grid, Header, Container, Icon, Label, Segment } from 'semantic-ui-react'

const AppointmentFeedback = props => (
  <div>
    <h1>Appointment Feedback</h1>
    <h4>View your appointment notes and prescribed medication here.</h4>
    <div className="fill body">
      <Container>
        <Segment>
          <Grid>
            <Grid.Column>
                Tamiflu: 50mg, 2x/ day
                <br />
                <br />
                Use once during the morning and once at night as everyday until completed.
                <br /> 
                <br />
                Do not drink while using Tamiflu.
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  </div>
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setData,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentFeedback)
