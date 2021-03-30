import React from 'react';
import { Form, Input, Button, DatePicker, Radio, Select } from 'antd';
import 'antd/dist/antd.css';
import Nationality from '../../Api/Nationality.json';
import man from '../../static/images/man.png';
import top from '../../static/images/top.png';
import whithshape from '../../static/images/Path 968.png'

const First = (props) => {

    const validateInput = (values) => {
        props.submittedValues(values);
        props.handelNextBtn();
    }

    function onDateChange(date, dateString) {
    }

    function onChange(e) {
    }

    function onSelectOneChange(value) {
    }
    function onSelectTwoChange(value) {
    }

    const { Option } = Select;

    return (
        <div className="step_one">
            <div className="left">
                <h2 className="logo">digg</h2>
                <div className="home_img">
                    <img src={top} className="top_img" alt="top" />
                    <img src={man} className="man_img" alt="man" />
                    <img src={whithshape} className="shape_img" alt="shape" />
                </div>
                <q>
                    Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!
                                </q>
                <h3>
                    Mohammed, One Step Dubai student
                                </h3>
                <h3>
                    Pakistan
                                </h3>
            </div>
            <div className="right">
                <h2 className="title_sm">digg</h2>
                <p className="title_2">Apply now to work in Dubai </p>
                <Form onFinish={validateInput}
                    initialValues={{
                        f_first_name: props.f_first_name,
                        f_last_name: props.f_last_name,
                        f_date_of_birth: props.f_date_of_birth,
                        f_gender: props.f_gender,
                        f_nationality: props.f_nationality,
                        f_country: props.f_country,
                        f_phone: props.f_phone,
                        f_email: props.f_email
                    }}
                >
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_first_name" label={""} rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Input placeholder=" " suffix={<label className="floating-label" htmlFor="name">First Name</label>} />
                            </Form.Item>
                        </div>
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_last_name" label={""} rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Input placeholder=" " suffix={<label className="floating-label" htmlFor="name">Last Name</label>} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_date_of_birth" rules={[{ required: true, message: 'Cannot be empty!' }]} >
                                <DatePicker name="f_date_of_birth" placeholder="Birth Of Date" onChange={onDateChange} format='YYYY/MM/DD' />
                            </Form.Item>
                        </div>
                        <div className="col-md-6 col-12">
                            <p className="gender"> Gender</p>
                            <Form.Item name="f_gender" rules={[{ required: true, message: 'Cannot be empty!' }]} >
                                <Radio.Group onChange={onChange} name="f_gender">
                                    <Radio value="Male">Male</Radio>
                                    <Radio value="Female">Female</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_nationality" rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Nationality"
                                    optionFilterProp="children"
                                    onChange={onSelectOneChange}
                                >
                                    {
                                        Nationality.map((na) =>
                                            <Option key={na.num_code} value={na.nationality}>{na.nationality}</Option>
                                        )
                                    }
                                </Select>


                            </Form.Item>
                        </div>
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_country" rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Country of residence"
                                    optionFilterProp="children"
                                    onChange={onSelectTwoChange}
                                >
                                    {
                                        Nationality.map((na) =>
                                            <Option key={na.num_code} value={na.en_short_name}>{na.en_short_name}</Option>
                                        )
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    <p className="q">How we can contact you ?</p>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_phone" label={""} rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Input type="num" placeholder=" " suffix={<label className="floating-label" htmlFor="name">Contact Number</label>} />

                            </Form.Item>

                        </div>
                        <div className="col-md-6 col-12">
                            <Form.Item name="f_email" label={""} rules={[{ required: true, message: 'cannot be empty!' }]}>
                                <Input type="email" placeholder=" " suffix={<label className="floating-label" htmlFor="name">Email Address</label>} />

                            </Form.Item>
                        </div>
                    </div>

                    <button type="submit" className="main_btn"> Apply now</button>
                </Form>
            </div>


        </div>

    )

};

export default First;
