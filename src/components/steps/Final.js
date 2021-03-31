import React from 'react';
import { Form, Input, Button, DatePicker, Radio, Select } from 'antd';
import 'antd/dist/antd.css';
import { ProgressBar } from 'react-bootstrap';
import Questions from '../../Api/questions.json';
import edit from '../../static/images/icons/edit.png';
import calen from '../../static/images/icons/calen.png';
import moment from 'moment';
import First from './First';

const Final = (props) => {

    const confirmbtn = () => {
        let info = [{ firstName: props.f_first_name },
            { lastName: props.f_last_name},
            { birthDate: moment(props.f_date_of_birth).format('ll')  },
            { gender: props.f_gender },
            {nationality: props.f_nationality},
            {country:props.f_country},
            { contactNum: props.f_phone },
            { email: props.f_email },
            {f_1_two:props.f_1_two},
            {f_2_two:props.f_2_two},
            {f_3_two:props.f_3_two},
            {f_1_three:props.f_1_three},
            {f_1_four:props.f_1_four},
            {f_1_five:props.f_1_five},
            {f_1_six:props.f_1_six},
            {f_1_seven:props.f_1_seven},
            {f_1_eight:props.f_1_eight}
        
        ]
            localStorage.setItem("Information", JSON.stringify(info));

            alert("Apply confirmed successfully !")
    }

    const backbtn = () => {
        props.handelBackBtn();
    }

    return (
        <div className="final_step">
            <div className="container">
                <div className="title">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <h2>digg</h2>
                        </div>
                        <div className="col-md-10 col-12">
                            <div className="progressBar">
                                <h4>Progress</h4>
                                <ProgressBar now={100} />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="review">Complete - Review your application</p>

                <div className="personal_info">
                    <div className="title_info">
                        <h2>Basic Information</h2>
                        <img src={edit} alt="edit" />
                    </div>
                    <div className="info">
                        <div> <span> <strong>Name : </strong>{props.f_first_name} {props.f_last_name}  </span></div>
                        <div>
                            <span> <strong>Date of birth:  </strong>  {moment(props.f_date_of_birth).format('ll')}  </span>
                        </div>
                        <div> <span> <strong>Gender:  </strong> {props.f_gender} </span></div>
                        <div>    <span> <strong>Nationality:  </strong> {props.f_nationality} </span></div>
                        <div> <span> <strong>Country of residence:   </strong> {props.f_country} </span></div>
                        <div>     <span> <strong>Contact Number:  </strong> {props.f_phone} </span></div>
                        <div> <span> <strong>Email:  </strong> {props.f_email} </span></div>

                    </div>
                </div>
                <div className="personal_q">
                    <div className="title_info">
                        <h2>Questionnaire</h2>
                    </div>

                    <div className="info">
                        <div className="title_q">
                            <p>Have you ever visited Dubai?</p>
                            <img src={edit} alt="edit" />
                        </div>


                        <div> <span><img src={calen} alt="logo" />  {props.f_1_two}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p>Do you have any friends or family in Dubai?</p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" />{props.f_2_two}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p>How long do you want to stay in stay in Dubai?</p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" /> {props.f_3_two}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p> Why do you want to come to Dubai?</p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_three}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p> What industries would you prefer to work in?</p>
                            <img src={edit} alt="edit" />
                        </div>


                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_four}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p> What are your interests?</p>
                            <img src={edit} alt="edit" />
                        </div>


                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_five}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p>  Do you have any financial savings?</p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_six}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p> What is your level of education? </p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_seven}  </span></div>

                    </div>
                    <div className="info">
                        <div className="title_q">
                            <p> How soon do you want to come to Dubai?</p>
                            <img src={edit} alt="edit" />
                        </div>

                        <div> <span> <img src={calen} alt="logo" /> {props.f_1_eight}  </span></div>

                    </div>
                </div>
                <button className="dis_btn" onClick={backbtn}> Back</button>
                <button type="submit" className="main_btn"  onClick={confirmbtn}> Complete Application</button>
            </div>
        </div>
    )

};

export default Final;

