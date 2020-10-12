import React from "react";
import { profile, profileHover } from "../images/index";
import "./About.css";

class About extends React.Component {
    state = {
        profileImg: profile,
    }

    componentDidMount(){
        document.title = "J1 - FrontEndDev"
    }

    changeProfileImg = () => {
        this.setState(prev=>({
            profileImg: profileHover,
        }));
    }

    removeProfileImg = () => {
        this.setState(prev=>({
            profileImg: profile,
        }));
    }

    render() {
        const { profileImg } = this.state;
        
        return (
            <div id="about" className="about" >
                <aside className="aboutTitle" >
                    <section className="aboutImgContainer">
                        <img className="profileImg" 
                            src={profileImg} 
                            alt="profile" 
                            title="개발할 땐 안경을 씁니다" 
                            onMouseEnter={this.changeProfileImg} 
                            onMouseLeave={this.removeProfileImg}
                        />
                    </section>
                    <section className="shortAboutTitle">
                        <p className="fullname">JAEWON YOON</p>
                        <p>Frontend Developer</p>
                        <p>끊임없이 발전해가는 개발자</p>
                    </section>
                </aside>
                <section className="aboutDetail">
                    <div className="note">
                        <table align="center">
                            <tbody>
                                <tr>
                                    <td>이름 : 윤재원</td>
                                </tr>
                                <tr>
                                    <td>거주지 : 서울</td>
                                </tr>
                                <tr>
                                    <td>취미 : 여행, 외국어 배우기, 방탈출, 보드게임</td>
                                </tr>
                                <tr>
                                    <td>최근 관심사 : React.js(독학중), Node.js </td>
                                </tr>
                                <tr>
                                    <td>MBTI : INFJ</td>
                                </tr>
                                <tr>
                                    <td>사용하는 에디터 : Visual Studio Code</td>
                                </tr>
                                <tr>
                                    <td>좋아하는 협업툴 : Trello, Slack</td>
                                </tr>
                                <tr>
                                    <td>TMI 1 : 사람의 언어를 공부했었으나 현재는 프로그래밍 언어를 공부함</td>
                                </tr>
                                <tr>
                                    <td>TMI 2 : 다른 사람들과 같이 작업하는 걸 좋아함</td>
                                </tr>
                                <tr>
                                    <td><br/></td>
                                </tr>
                                <tr>
                                    <td><br/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;