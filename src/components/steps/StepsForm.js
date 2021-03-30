import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eighth from './Eighth';
import Final from './Final';

class StepsForm extends Component {

    state = {
        step: 1,
        step_one_fields: {
            f_first_name: '',
            f_last_name: '',
            f_date_of_birth: null,
            f_gender: 'Male',
            f_nationality: null,
            f_country: null,
            f_phone: '',
            f_email: '',
        },
        step_two_fields: {
            f_1_two: '',
            f_2_two: '',
            f_3_two: ''
        },
        step_three_fields: {
            f_1_three: '',
        },
        step_four_fields: {
            f_1_four: '',
        },
        step_five_fields: {
            f_1_five: '',
        },
        step_six_fields: {
            f_1_six: '',
        },
        step_seven_fields: {
            f_1_seven: '',
        },
        step_eight_fields: {
            f_1_eight: '',
        },
        step_nine_fields: {
            f_1_nine: '',
        },
        confirm: false
    }
    handelNextBtn = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    handelBackBtn = () => {
        const step = this.state.step;
        this.setState({
            step: step - 1
        });
    }
    getStepOneValues = (values) => {
        const { step_one_fields } = this.state;
        this.setState({
            step_one_fields: {
                ...step_one_fields,
                ...values
                }
            })
        }



    render() {
        const { step, step_one_fields, step_two_fields,
            step_three_fields, step_four_fields, step_five_fields,
            step_six_fields, step_seven_fields, step_eight_fields,
            step_nine_fields, confirm } = this.state;
            if(step===1){
              return(
                <First {...step_one_fields} handelNextBtn={this.handelNextBtn} submittedValues={this.getStepOneValues}/>
              )
            }
     
       else { return (
            <div>
                {this.state.confirm ?
                    <h2> confirmed</h2>
                    : null}
            </div>
        )}
    }
}

export default StepsForm;