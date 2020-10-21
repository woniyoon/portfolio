import React from 'react';
import './Project.css';

const Project = ({ project, t, customClickEvent }) => {

    var divStyle = {
        backgroundImage: "url(" + project.projectThumnail + ")"
    }

    return(
        <div className="projectPcs" style={divStyle} onClick={()=> customClickEvent(project)} >
            <div className="descriptionBack" >
                <p className="projectTitle" align="center">{t(project.id+".name").substring(7)}<br/>{project.period}</p>
            </div>
        </div>
    );
}

export default Project;