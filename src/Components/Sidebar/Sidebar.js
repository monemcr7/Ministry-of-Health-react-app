import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-lg-2  sidebar-col">
            <div className="sidebar-logo">
                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"}  alt="logo"/>
            </div>
            <div className="sidebar-link">
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="active"><i className="far fa-sad-tear"></i> <span>Complains</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="far fa-question-circle"></i> <span>Inquiries</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-stethoscope"></i> <span>Consultation</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="far fa-lightbulb"></i> <span>Suggestions</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-book"></i> <span>Knowledge Base</span></a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-users"></i> <span>Users</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;