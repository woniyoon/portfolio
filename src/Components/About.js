import React, { useState } from "react";
import { profile, profileHover } from "../images/index";
import "./About.css";


const About = () => {
    const [profileImg, setProfileImg] = useState(profile);

    componentDidMount(){
        document.title = "J1 - FrontEndDev"
    }

    changeProfileImg = () => {
        // this.setState(prev=>({
        //     profileImg: profileHover,
        // }));
        setProfileImg(profileHover);
    }

    removeProfileImg = () => {
        setProfileImg(profile);
        // this.setState(prev=>({
        //     profileImg: profile,
        // }));
    }

    return (
        const { profileImg } = this.state;
        const { t } = this.props;

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
                <p>{t("about.comment")}</p>
            </section>
        </aside>
        <section className="aboutDetail">
            <div className="note">
                <table align="center">
                    <tbody>
                        <tr>
                            <td>{t("about.name")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.residence")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.hobbies")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.interest")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.mbti")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.editor")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.coopTools")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.tmi1")}</td>
                        </tr>
                        <tr>
                            <td>{t("about.tmi2")}</td>
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

};

// class About extends React.Component {
//     state = {
//         profileImg: profile,
//     }

//     componentDidMount(){
//         document.title = "J1 - FrontEndDev"
//     }

//     changeProfileImg = () => {
//         this.setState(prev=>({
//             profileImg: profileHover,
//         }));
//     }

//     removeProfileImg = () => {
//         this.setState(prev=>({
//             profileImg: profile,
//         }));
//     }

//     render() {
//         const { profileImg } = this.state;
//         const { t } = this.props;

//         return (
//             <div id="about" className="about" >
//                 <aside className="aboutTitle" >
//                     <section className="aboutImgContainer">
//                         <img className="profileImg" 
//                             src={profileImg} 
//                             alt="profile" 
//                             title="개발할 땐 안경을 씁니다" 
//                             onMouseEnter={this.changeProfileImg} 
//                             onMouseLeave={this.removeProfileImg}
//                         />
//                     </section>
//                     <section className="shortAboutTitle">
//                         <p className="fullname">JAEWON YOON</p>
//                         <p>Frontend Developer</p>
//                         <p>{t("about.comment")}</p>
//                     </section>
//                 </aside>
//                 <section className="aboutDetail">
//                     <div className="note">
//                         <table align="center">
//                             <tbody>
//                                 <tr>
//                                     <td>{t("about.name")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.residence")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.hobbies")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.interest")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.mbti")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.editor")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.coopTools")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.tmi1")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{t("about.tmi2")}</td>
//                                 </tr>
//                                 <tr>
//                                     <td><br/></td>
//                                 </tr>
//                                 <tr>
//                                     <td><br/></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }

// export default About;