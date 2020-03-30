import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Grid, Header, Container, Button, Segment, TextArea, Card, Image } from 'semantic-ui-react'

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
          <Button onClick={props.goBack}>Save</Button>
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
      changePage: () => push('/about-us'),
      goBack: () => push('/appointments')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment)
