import React from 'react';
import { Form, Input, Button, DatePicker, Radio, Select } from 'antd';
import 'antd/dist/antd.css';
import { ProgressBar } from 'react-bootstrap';
import Questions from '../../Api/questions.json';
 import g from '../../static/images/icons/calen.png'

const Third = (props) => {

    const validateInput = (values) => {
        props.submittedValues(values);
        props.handelNextBtn();
    }

    const backbtn = () => {
        props.handelBackBtn();
    }


    function onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }

    return (
        <div className="step_three">
            <div className="container">
                <div className="title">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <h2>digg</h2>
                        </div>
                        <div className="col-md-10 col-12">
                            <div className="progressBar">
                                <h4>Progress</h4>
                                <ProgressBar now={100 / 7} />
                            </div>
                        </div>
                    </div>
                </div>

             


                <Form onFinish={validateInput}
                    initialValues={{
                        f_1_three: props.f_1_three,
                    }}
                >
                    <div className="q_form">
                        <p>{Questions.step3.q1.text}</p>
                        <Form.Item name="f_1_three" rules={[{ required: true, message: 'cannot be empty!' }]}>
                            <Radio.Group onChange={onChange} name="f_1_three" >

                                {Questions.step3.q1.choices.map((choice, index) =>
                                    <Radio.Button key={index} value={choice.value}>
                                        {/* <img src={require(`../../static/images/icons/${choice.img}`)} alt="icon" /> */}
                                        <img src={g} alt="icon" />
                                        {choice.value}
                                    </Radio.Button>

                                )}
                            </Radio.Group>
                        </Form.Item>
                    </div>
                  
                    
                    <button className="dis_btn" onClick={backbtn}> Back</button>
                    <button type="submit" className="main_btn"> Next</button>
                </Form>


            </div>
        </div>





    )

};

export default Third;

