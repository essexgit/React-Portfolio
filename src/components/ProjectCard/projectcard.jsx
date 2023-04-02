import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    return (
        <div className="project">
            <div className="img-container" id={"img" + props.id} >
                <img alt={props.Title} src={process.env.PUBLIC_URL + props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Title:</strong> {props.Title}
                    </li>
                    <li>
                        <strong><Link className="card--link" to={props.Github}>Github Repository</Link> </strong>
                    </li>
                    <li>
                        <strong><Link className="card--link" to={props.Deployment}>Webpage</Link></strong>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ProjectCard;
