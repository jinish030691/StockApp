import React from 'react';
import '../App.css';
import { Col ,Form ,FormControl ,Button , InputGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBell , faCommentDots} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
            <Col md={3} className="logo p-3 d-flex align-items-center">
                <h4 className="text-uppercase font-weight-bold mb-0">coinfarming</h4>
            </Col>
            <Col lg={6} md={5} className="p-3 d-flex">
                <Form inline className="search-container w-100">
                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                    Search
                </Form.Label>
                <InputGroup className="w-100">
                    <InputGroup.Prepend>
                    <InputGroup.Text className="search-btn bg-transparent border-0"><Button className="bg-transparent border-0 p-0"><FontAwesomeIcon className="top-icon ctext-secondary" icon={faSearch}/> </Button></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroupUsername2" placeholder="Search..." className="search-input border-0 shadow-none"/>
                </InputGroup>
                </Form>
            </Col>
            <Col lg={3} md={4} className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <FontAwesomeIcon className="top-icon ctext-secondary cursor-pointer" icon={faBell}  />
                    </div>
                    <div>
                    <FontAwesomeIcon className="top-icon ctext-secondary cursor-pointer"  icon={faCommentDots} />
                    </div>
                    <div aria-haspopup="true" className="d-flex align-items-center" aria-expanded="false">
                    <div className="user-profile rounded-circle cursor-pointer">
                        <img src="assets/img/profile.png" className="img-fluid" width="50" height="100" alt="user"/>
                    </div>
                    <div className="user-info">
                        <span className="user-name ml-3 font-weight-bold ctext-secondary">Elizabeth</span>
                    </div>
                    </div>
                </div>
                
            </Col>
        </>
    )
}

export default Header