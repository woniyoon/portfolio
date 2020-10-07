import React from 'react';
import Project from './Project';
import './Works.css';
import Modal from './Modal';
import { sbScreen1, 
    sbScreen2, 
    sbScreen3, 
    sdScreen1, 
    sdScreen2, 
    sdScreen3, 
    sdScreen4,
    sbArch,
    sdArch,
    sbWeb,
    socdocLogo } from "../images/index.js";
    
class Works extends React.Component {
    state = {
        isSelected: false,
        project: null,
        top: 0,
    };

    // handleHover = () => {
    //     console.log("??");
    //     this.setState(prev => ({
    //         isSelected: !prev.isSelected,
    //     }));
    // }

    clickProject(project){
        console.log(document.documentElement.scrollTop);
        

        this.setState(prev => ({
            isSelected: true,
            project,
            top: document.documentElement.scrollTop,
        }));
    }

    closeModal = () => {
        this.setState(prev => ({
            isSelected: false,
        }));
    }

    getProject = ()=>{
    
        return projects.map((project)=>{
            return (
                <Project customClickEvent={this.clickProject.bind(this)} key={project.id} project={project} />
                // {
                //     isSelected ?  <Modal project={work} close={this.closeModal} /> : null
                // }
            )
        });
    }

    render() {
        const { isSelected, project, top } = this.state;

        return (
            <div className="workContainer">
                {this.getProject()}
                {isSelected ?  <Modal project={project} close={this.closeModal} top={top} /> : null}
            </div>
        );
    }

}

const projects = [
    {
        id: "sb001",
        title: "스타벅스 웹사이트",
        period: "2020-06",
        projectThumnail: sbWeb,
        teamName: "NOT NULL",
        motif: "개발자 워너비 5명이 힘을 모아 FE부터 BE까지! 🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️ 기능도 중요하지만 디자인도 놓치고 싶지 않은 NOT NULL팀. 즐겨마시는 커피☕️, 음료🍹와 관련된 웹사이트를 개발하기로 정하고, 여러 프랜차이즈 카페 사이트를 조사하다가 한국 스타벅스 사이트의 아름다운 디자인과 북미 스타벅스의 온라인 주문 기능이 합쳐져 심미성과 기능성 모두 겸비한 스타벅스 사이트를 만들어보기로 결심!",
        architecture: sbArch,
        screenShots: [{img: sbScreen1, description: "장바구니"}, 
                        {img: sbScreen2, description: "결제 전 페이지"},
                        {img: sbScreen3, description: "관리자 페이지" }],
    },
    {
        id: "sd002",
        title: "속닥속닥",
        period: "2020-08",
        projectThumnail: socdocLogo,
        teamName: "시너지",
        motif: "모든 세상 사람들이 최소 하나씩은 갖고 있는 것은 바로 병🤒 아닐까요? 👁눈, 👃코, 👄입부터 🧍‍♀️ 전신... 아픈 곳은 많은데, ⌛️시간은 없고~ 🏥병원은 가야하고!! 그런 사람들을 위해 만들어본 병원 예약 플랫폼이 바로 속닥속닥입니다. 속닥이라는 이름에 걸맞게 속이 아픈 사람들을 타겟으로 잡았고, 등록된 병원들의 정보와 리뷰들을 🕵️‍♀️확인할 수 있어요. 병원이 전부라면 차별성이 부족하죠? 속닥속닥에서는 💊약국 정보와 리뷰에 🚑민간구급차현황 정보, 건강정보 등을 찾아볼 수 있어요! 또 다른 고객인 👩‍⚕️👨‍⚕️병원 회원들은 누가 방문할 예정이고, 방문했던 혹은 방문할 환자의 건강 정보, 병원 정보 관리 등을 할 수 있어요. (이 시국에 어울리게 지역별 일일 코로나 확진자수도 알 수 있어요!)",
        architecture: sdArch,
        screenShots: [{img: sdScreen1, description: "메인화면입니다."}, 
                        {img: sdScreen2, description: "병원 정보 업데이트 페이지"},
                        {img: sdScreen3, description: "병원 예약 관리 페이지"},
                        {img: sdScreen4, description: "병원 후기 모아보기 페이지" }],
    },
];


export default Works;