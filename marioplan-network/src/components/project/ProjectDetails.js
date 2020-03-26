import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title #{id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sunt quis dolorem accusantium magnam expedita saepe, ratione, provident, perspiciatis dignissimos laudantium. Voluptate harum iure error consectetur adipisci magnam rerum ducimus.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Daniel Brito</div>
                    <div>2nd September, 2AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails