import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setData
} from '../../modules/iexCloud'
import { Message } from 'semantic-ui-react'

const Home = props => (
  <div>
    <h1>Home</h1>
    <h4>Welcome to Fortitude Health.</h4>
    
    <div className="fill body">
      <Message>
        <Message.Header>Site Features</Message.Header>
          <Message.List>
            <Message.Item>Healthcare worker self-registration</Message.Item>
            <Message.Item>Patient onboarding</Message.Item>
            <Message.Item>Scheduling and creation of vitual appointments</Message.Item>
            <Message.Item>Appointment notes and patient note review</Message.Item>
            <Message.Item>HIPAA Compliant</Message.Item>
          </Message.List>
      </Message>
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
)(Home)
