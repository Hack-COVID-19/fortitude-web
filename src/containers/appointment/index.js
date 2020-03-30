import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Grid, Header, Container, Icon, Label, Item, Segment, TextArea } from 'semantic-ui-react'

const Appointment = props => (
  <div className="fill body">
    <Container>
      <Header>Patient</Header>
      <Grid>
        <Grid.Column width={4}>
          <Icon name="user circle" size='massive'/>
          <br />
          <br />
          <Label>Elliot Baker</Label>
        </Grid.Column>
        <Grid.Column width={10}>
          <Item.Content>
            <Item.Header>Details</Item.Header>
            <Item.Meta>
              <p>Age: 70 years</p>
              <p>DOB: 21st March, 1950</p>
              <p>Address: 123 Main street, San Francisco, CA - 90001</p>
            </Item.Meta>
            <Item.Description>
              Pre existing conditions
            </Item.Description>
          </Item.Content>
        </Grid.Column>
      </Grid>
      <Segment>
        <Header>Prescription</Header>
        <TextArea style={{ minHeight: 100, width: 650 }} />
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
)(Appointment)
