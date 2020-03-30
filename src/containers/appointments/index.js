import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { List, Image, Grid, Button } from 'semantic-ui-react'

const Appointments = props => (
  <div>
    <h1>Appointments</h1>
    <h4>Recent appointments are listed below.</h4>

    <div className="fill">
      
    <List>
      <List.Item>
        <Image avatar src='/rachel.png' />
        <List.Content>
          <List.Header as='a' onClick={() => props.goToAppt('Rachel')}>Rachel</List.Header>
          <List.Description>
            Last prescribed {' '}
            <a>
              <b>Tamiflu</b>
            </a>{' '}
            just now.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/veronika.jpg' />
        <List.Content>
          <List.Header as='a' onClick={() => props.goToAppt('Veronika')}>Veronika</List.Header>
          <List.Description>Was prescribed nothing 2 hours ago.</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/lindsay.png' />
        <List.Content>
          <List.Header as='a' onClick={() => props.goToAppt('Lindsay')}>Lindsay</List.Header>
          <List.Description>
            Last prescribed{' '}
            <a>
              <b>Tamiflu</b>
            </a>{' '}
            10 hours ago.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/matthew.png' />
        <List.Content>
          <List.Header as='a' onClick={() => props.goToAppt('Matthew')}>Matthew</List.Header>
          <List.Description>
            Last prescribed{' '}
            <a>
              <b>Prilosec</b>
            </a>{' '}
            yesterday.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='/jenny.jpg' />
        <List.Content>
          <List.Header as='a' onClick={() => props.goToAppt('Jenny')}>Jenny</List.Header>
          <List.Description>
            Last prescribed{' '}
            <a>
              <b>Asprin</b>
            </a>{' '}
            3 days ago.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
    </div>
    
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column floated='left'>
            <Button onClick={props.goBack}>Back</Button>
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
      goToAppt: (id) => push(`/appointment/${id}`),
      changePage: () => push('/'),
      goBack: () => push('/onboard')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments)
