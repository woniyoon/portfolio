import React from "react";
import "./Modal.css";

function Modal({ close, project, top, t }){

    // id
    // period
    // projectThumbnail
    // title
    // const project = detail[projectId];

    // console.log(top);

    return (
        <div className="modalContainer" style={{top}}>
            <div id="modalOverlay" className="modalOverlay" onClick={close} style={{top}}>
            </div>
            <main className="modalContent">
                <p className="xBtn" onClick={close} align="right"><strong>X</strong></p>
                <p>{t(project.id+".name")}</p><br/>
                <p>{t(project.id+".team")}</p><br/>
                <p>{t(project.id+".period")}</p><br/>
                <p>{t(project.id+".about")}</p><br/>
                <p>{t("architecture")}</p><br/>
                <div className="imgContainer" align="center">
                    <img src={project.architecture} width="90%" alt="project_architecture"/>
                    <p align="left">{t("screenshots")}</p><br/>
                    { project.screenShots.map((item, index)=>{ 
                        return <div key={index}><img src={item.img} width="80%" alt="project_screenshot" /><p>{t(project.id+".screenshot"+(index+1))}</p><br/><br/></div>}) 
                    }
                    <br/><br/>
                    <p><a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}><strong>{t("sourcecode")}</strong></a></p>
                </div>
            </main>
        </div>
    );
}

export default Modal;