import React from "react";
import { Link } from "react-router-dom";
import Project from "./projects.json";

const ProjectCard = () => {
    const ProjectList = () =>
        Project.map((card, index) => {
            return (
                <div className="project">
                    <div className="img-container" id={"img" + card.id} >
                        <img alt={card.Title} src={process.env.PUBLIC_URL + card.image} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Title:</strong> {card.Title}
                            </li>
                            <li>
                                <strong><Link className="card--link" to={card.Github}>Github Repository</Link> </strong>
                            </li>
                            <li>
                                <strong><Link className="card--link" to={card.Deployment}>Webpage</Link></strong>
                            </li>
                        </ul>
                    </div>

                </div>
            );
        });
};

export default ProjectCard;
