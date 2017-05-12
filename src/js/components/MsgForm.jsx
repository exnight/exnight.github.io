import React, { Component } from 'react';
import firebase from 'firebase';
import { Form, Message } from 'semantic-ui-react';

class MsgForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      sent: false,
    };
  }

  componentWillMount() {
    this.msgRef = firebase.database()
      .ref('msg/');
  }

  handleChange(e, { value }) {
    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, message } = this.state;
    this.msgRef.push({
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      text: message,
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      sent: true,
    }, setTimeout(() => {
      this.setState({ sent: false });
    }, 10000));
  }

  handleDismiss() {
    this.setState({ sent: false });
  }

  render() {
    const { firstName, lastName, email, message } = this.state;

    return (
      <Form size="big">
        <Form.Group inline widths={16}>
          <Form.Input
            required label="First Name" placeholder="First Name" name="firstName"
            value={firstName} onChange={this.handleChange}
          />
          <Form.Input
            required label="Last Name" placeholder="Last Name" name="lastName"
            value={lastName} onChange={this.handleChange}
          />
          <Form.Input
            required label="Email" placeholder="Email address" name="email"
            value={email} onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          required label="Your thoughts" placeholder="Leave your thoughts here..."
          name="message" value={message} onChange={this.handleChange}
        />
        <Form.Button color="blue" onClick={this.handleSubmit}>Submit</Form.Button>
        <Message
          icon="send" success visible={this.state.sent} header="Message Sent"
          content="Thank you for your message, I will reply to it soon."
          onDismiss={this.handleDismiss}
        />
      </Form>
    );
  }
}

export default MsgForm;
