import React from 'react';

const Widget = () => {
    return (
        <div className="col-lg-2 col-md-4 widget">
            <div className="widget-col">
                <div className="widget-user">
                    <a href="#"><i className="fas fa-cog"></i></a>
                    <img src={process.env.PUBLIC_URL + "/assets/images/user.png"}  alt="logo"/>
                    <h2>Abdullah Mohammed</h2>
                    <p>CC Agent (Experience)</p>
                </div>
                <div className="notifications">
                    <span className="notification-text"><i className="far fa-bell"></i> Notifications</span>
                    <span className="notification-num">10</span>
                </div>
                <div className="notification-row">
                    <p>New Complaint ticket added and approved</p>
                    <span className="time"><span></span> 2 minutes ago</span>
                </div>
                <div className="notification-row">
                    <p>New Complaint ticket added and approved</p>
                    <span className="time"><span></span> 2 minutes ago</span>
                </div>
                <div className="notification-row">
                    <p>New Complaint ticket added and approved</p>
                    <span className="time"><span></span> 2 minutes ago</span>
                </div>
                <div className="notification-row">
                    <p>New Complaint ticket added and approved</p>
                    <span className="time"><span></span> 2 minutes ago</span>
                </div>
                <div className="notification-row">
                    <p>New Complaint ticket added and approved</p>
                    <span className="time"><span></span> 2 minutes ago</span>
                </div> 
            </div>
        </div>
    )
}

export default Widget;