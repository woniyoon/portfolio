import React, {useEffect} from "react";
import "./Modal.css";

function Modal({ close, project }){

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px;`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    // id
    // period
    // projectThumbnail
    // title
    // const project = detail[projectId];

    return (
        <div className="modalContainer">
            <div className="modalOverlay">
            </div>
            <main className="modalContent">
                <p className="xBtn" onClick={close} align="right"><strong>X</strong></p>
                <p><strong>프로젝트명 : </strong>{project.title}</p><br/>
                <p><strong>기간 : </strong>{project.period}</p><br/>
                <p><strong>팀명 : </strong>{project.teamName}</p><br/>
                <p><strong>소개 : </strong>{project.motif}</p><br/>
                <p><strong>스택아키텍처</strong></p><br/>
                <div className="imgContainer" align="center">
                    <img src={project.architecture} width="90%"/>
                    <p align="left"><strong>스크린샷</strong></p><br/>
                    { project.screenShots.map((item, index)=>{ 
                        return <div key={index}><img src={item.img} width="80%" /><p>{item.description}</p></div>}) 
                    }
                    <br/><br/>
                    <span className="closeBtn" onClick={close}>CLOSE</span>
                </div>
            </main>
        </div>
    );
}

export default Modal;