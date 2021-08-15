import React, { Component } from 'react';
import { Form, FormGroup, Label, Input,
    Button, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


    class Contact extends Component {
        constructor(props) {
            super(props);

            this.state = {
                firstname: '',
                lastname: '',
                telnum: '',
                email: '',
                agree: false,
                contactType: 'Tel.',
                message: '',
                touched: {
                    firstname: false,
                    lastname: false,
                    telnum: false,
                    email: false
                }
            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
        }
        handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }
        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }
        handleBlur = (field) => (evt) => {
            this.setState({
                touched: { ...this.state.touched, [field]: true }
            });
        }
        validate(firstname, lastname, telnum, email) {
            const errors = {
                firstname: '',
                lastname: '',
                telnum: '',
                email: ''
            };

            if (this.state.touched.firstname && firstname.length < 3)
                errors.firstname = 'First Name should be >= 3 characters';
            else if (this.state.touched.firstname && firstname.length > 10)
                errors.firstname = 'First Name should be <= 10 characters';

            if (this.state.touched.lastname && lastname.length < 3)
                errors.lastname = 'Last Name should be >= 3 characters';
            else if (this.state.touched.lastname && lastname.length > 10)
                errors.lastname = 'Last Name should be <= 10 characters';

            const reg = /^\d+$/;
            if (this.state.touched.telnum && !reg.test(telnum))
                errors.telnum = 'Tel. Number should contain only numbers';

            if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
                errors.email = 'Email should contain a @';

            return errors;
        }

        handleLogin(event) {
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value
                + " Remember: " + this.remember.checked);
            event.preventDefault();

        }
        handleSubmit(event) {
            console.log('Current State is: ' + JSON.stringify(this.state));
            alert('Current State is: ' + JSON.stringify(this.state));
            event.preventDefault();
        }
        render() {
            const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
            return (
                <div className={'container'}>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                                  placeholder="First Name"
                                                  className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                                  placeholder="Last Name"
                                                  className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                                  placeholder="Tel. Number"
                                                  className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                                  placeholder="Email"
                                                  className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                              className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                                    className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                                      rows="12"
                                                      className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                           innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                           innerRef={(input) => this.password = input}  />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                               innerRef={(input) => this.remember = input}  />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                        </div>
                    </div>
                </div>

            )
        }
    }


export default Contact;