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

    clickProject(project){
        this.setState(prev => ({
            isSelected: true,
        }));
    }

    closeModal = () => {
        this.setState(prev => ({
            isSelected: false,
        }));
    }

    render(){
        const work = this.props.work;
        // const { isSelected } = this.state;

        var divStyle = {
            backgroundImage: "url(" + work.projectThumnail + ")"
        }

        return(
            <div>
                <div className="projectPcs" style={divStyle} onClick={()=> this.props.customClickEvent(this.props.work)} >
                    {/* <div className={`descriptionBack ${isSelected ? "transparentBack" : ""}`}  */}
                    <div className="descriptionBack" 
                        // onMouseEnter={this.handleHover}
                        // onMouseLeave={this.handleHover}
                    >
                        <p className="projectTitle" align="center">{work.title}<br/>{work.period}</p>
                    </div>
                    {/* <img className="projectThumnail" src={work.projectThumnail}/> */}
                </div>
                {/* <article className={`projectDetail ${isSelected ? "show" : ""}`} align="center">
                    <p>프로젝트 디테일</p>
                </article> */}
                {/* {
                    isSelected ?  <Modal project={work} close={this.closeModal} /> : null
                } */}
            </div>
        );
    }
}

export default Project;