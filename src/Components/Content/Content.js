import React , {useState} from 'react';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Form from 'react-bootstrap/Form'

const Content = ({click}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );
    const [fileName, setFileName] = useState("upload Attachments (PDF, PNG, JPG)");
    
      
    return (
    <React.Fragment>
        <div className="col-lg-8 col-md-8 content-col">
            <div className="row">
                <span onClick={click} className="bar-mobile"><i className="fas fa-bars"></i></span>
                <div className="col-md-6 search-input">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search by Ticket Number" />
                        <button type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>

                <div className="col-md-6 text-right create-ticket">
                    <Button variant="light" onClick={handleShow}>
                        <i className="fas fa-plus-circle"></i> Add New Ticket
                    </Button>
                </div>
            </div>
            <Cards />
            <Pagination />
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
            <Modal.Title>Create New ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="create-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label-form">Select City</label>
                                <select className="form-control">
                                    <option value="0">Select City</option>
                                    <option defaultValue="Riyadh" >Riyadh</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="label-form">Type of Division</label>
                                <select className="form-control">
                                    <option value="0">Type of Division</option>
                                    <option defaultValue="Riyadh" >Government Hospital</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="label-form">Main Classification</label>
                                <select className="form-control">
                                    <option value="0">Main Classification</option>
                                    <option defaultValue="Riyadh" >Safety</option>
                                </select>
                            </div>

                            <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" defaultChecked />
                                    <label className="custom-control-label" htmlFor="customCheck">Did this cause harm to the patient / reviewer’s condition?</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="label-form">Date & Time</label>
                                <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                showTimeSelect
                                excludeTimes={[
                                    setHours(setMinutes(new Date(), 0), 17),
                                    setHours(setMinutes(new Date(), 30), 18),
                                    setHours(setMinutes(new Date(), 30), 19),
                                    setHours(setMinutes(new Date(), 30), 17)
                                ]}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </div>

                            <div className="form-group">
                                <label className="label-form">What is the department?</label>
                                <select className="form-control">
                                    <option defaultValue="Select department" >Select department</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label-form">Remark & Note</label>
                                <textarea className="form-control" placeholder="Remark & Note" />
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="label-form">Contact Source</label>
                                <select className="form-control">
                                    <option value="0">Contact Source</option>
                                    <option defaultValue="Manual Submission" >Manual Submission</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label-form">Name Of Division</label>
                                <select className="form-control">
                                    <option value="0">Name Of Division</option>
                                    <option defaultValue="King Saud Hospital" >King Saud Hospital</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="label-form">Sub Classification</label>
                                <select className="form-control">
                                    <option value="0">Sub Classification</option>
                                    <option defaultValue="King Saud Hospital" >Safety Issues</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label-form">What is the name of the medicine?</label>
                                <select className="form-control">
                                    <option value="0">What is the name of the medicine?</option>
                                    <option defaultValue="King Saud Hospital" >medicine</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label-form">Sub Classification</label>
                                <select className="form-control">
                                    <option value="0">Sub Classification</option>
                                    <option defaultValue="King Saud Hospital" >Safety Issues</option>
                                </select>
                            </div>

                            <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1" defaultChecked />
                                    <label className="custom-control-label" htmlFor="customCheck2">Urgent Ticket</label>
                                </div>
                            </div>

                            <div className="form-group group-text-area ">
                            <Form.File
                                type="file"
                                className="custom-file-label"
                                id="inputGroupFile01"
                                label={fileName}
                                onChange={(e) => setFileName(e.target.files[0].name)}
                                custom
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="primary">Save</Button>
            <Button variant="light"  className="close-btn" onClick={handleClose}>
            Cancel
            </Button>
            </Modal.Footer>
        </Modal>
    </React.Fragment>
        
    )
}

export default Content;