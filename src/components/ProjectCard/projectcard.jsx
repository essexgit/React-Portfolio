import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
    return (
        <Fragment key={props.id}>
            <div className="project">
                <Link to={props.Deployment}>
                    <div className="img-container"  >
                        <img src={`${props.image}`} width={450} height={250} alt={props.Title} />
                    </div>
                </Link>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Title:</strong> {props.Title}
                        </li>
                        <li>
                            <strong><Link className="card--link" to={props.Github}>Github Repository Link</Link>  </strong>
                        </li>
                        <li>
                            <strong><Link className="card--link" to={props.Deployment}>Webpage Link</Link></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectCard;
