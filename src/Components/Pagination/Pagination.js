import React from 'react';

const Pagination = () => {
    return (
        <div className="col-12 pagination">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                    <img src={process.env.PUBLIC_URL + "/assets/images/left-arrow.png"}  alt="logo"/>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <img src={process.env.PUBLIC_URL + "/assets/images/right-arrow.png"}  alt="logo"/>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
    )
}

export default Pagination;