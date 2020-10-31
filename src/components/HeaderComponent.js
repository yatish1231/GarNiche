import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Button, FormGroup, Input, Label, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className="header-component container-fluid">
                <div className="row">
                    <div className="col text-center d-none d-md-block">
                        <a id="brand-text">garniche</a>
                    </div>
                </div>
                <Navbar dark expand="md" className="navbar-fluid">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto d-block d-md-none" href="/"><a id="brand-text">garniche</a></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                <NavItem className="mx-2">
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem className="mx-2">
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem className="mx-2">
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Me</NavLink>
                                </NavItem>
                                <NavItem className="mx-2">
                                    <div className="nav-link">
                                        <Button onClick={this.toggleModal} id="order-button" className="m-0 p-0">
                                            <FontAwesomeIcon icon={faShoppingBasket} inverse size="md" /> Order
                                    </Button>
                                </div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="m-0 p-0">
                    <div className="m-0 p-0 container-fluid">
                        <div className="row row-header">
                            <div className="m-0 p-0 col-12">
                                {/* <img src="/garniche_logo.png" className="img img-fluid" id="main-img"/> */}
                                {/* <h1>GarNiche</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p> */}
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form className="container-fluid">
                            <FormGroup row>
                                <Input id="username" type="text"
                                    placeholder="Username" name="username"
                                    innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Input id="password" type="password"
                                    placeholder="Password" name="password"
                                    innerRef={(input) => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup row className="ml-2">
                                <Label htmlFor="remember">Remember me</Label>
                                <Input id="remember" type="checkbox"
                                    name="remember"
                                    innerRef={(input) => this.remember = input}
                                />
                            </FormGroup>
                            <FormGroup row className="justify-content-md-center">
                                <Button id="remember" type="submit"
                                    name="remember" value="Login" className="btn-primary btn-outline-primary"
                                >Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header;