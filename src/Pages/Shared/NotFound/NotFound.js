import React from 'react';

const NotFound = () => {
    return (
        <div className="my-5">
            <div>
                <h1 className="lh-lg fw-bolder">SpicyX Tourism</h1>
                <p>
                    <span className="fw-bold">404.</span>
                    <span className="fw-light"> That’s an error.</span>
                </p>
                <p>The requested URL /al was not found on this server.
                    <span className="fw-light"> That’s all we know.</span>
                </p>
            </div>
            <div>
                {/* from google's 404 image! FUN right?  */}
                <img src="https://www.google.com/images/errors/robot.png" alt="" />
            </div>
        </div>
    );
};

export default NotFound;