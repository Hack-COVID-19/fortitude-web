import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Grid, Header, Container, Icon, Label, Segment } from 'semantic-ui-react'

const AppointmentFeedback = props => (
  <div className="fill body">
    <Container>
      <Header>Your Prescription</Header>
      <span>Tamiflu: 50mg, 2x/ day</span>
      <Grid>
        <Grid.Column width={4}>
          <Icon name="user circle" size='massive'/>
        </Grid.Column>
        <Grid.Column width={10}>
          <Label style={{ minHeight: 100}}>
            Use once during the morning and once at night as everyday until completed. Do not drink while using Tamiflu
          </Label>
        </Grid.Column>
      </Grid>
      <Segment placeholder>
        <Header icon>
          <Icon name='pdf file outline' />
          No documents are listed.
        </Header>
      </Segment>
    </Container>
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
