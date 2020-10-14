import React from 'react';
// import Modal from '../components/Modal';
import './Project.css';

class Project extends React.Component {
    state = {
        isSelected: false,
    };

    // handleHover = () => {
    //     console.log("??");
    //     this.setState(prev => ({
    //         isSelected: !prev.isSelected,
    //     }));
    // }

    // clickProject(project){
        

    //     this.setState(prev => ({
    //         isSelected: true,
    //     }));
    // }

    // closeModal = () => {
    //     this.setState(prev => ({
    //         isSelected: false,
    //     }));
    // }

    render(){
        const { project, t } = this.props;
        // const { isSelected } = this.state;

        var divStyle = {
            backgroundImage: "url(" + project.projectThumnail + ")"
        }

        return(
            <div className="projectPcs" style={divStyle} onClick={()=> this.props.customClickEvent(project)} >
                {/* <div className={`descriptionBack ${isSelected ? "transparentBack" : ""}`}  */}
                <div className="descriptionBack" 
                    // onMouseEnter={this.handleHover}
                    // onMouseLeave={this.handleHover}
                >
                    <p className="projectTitle" align="center">{t(project.id+".name").substring(7)}<br/>{project.period}</p>
                </div>
                {/* <img className="projectThumnail" src={work.projectThumnail}/> */}
            </div>
        );
    }
}

export default Project;