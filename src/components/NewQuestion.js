import React, { useState } from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { Button, Form } from "semantic-ui-react";

function NewQuestion(props) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const { authedUser } = props;

  const handleChange1 = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setValue1(text);
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setValue2(text);
  };
  const handleSubmit = (e) => {
    const { authedUser } = props;
    let question = {
      optionOneText: value1,
      optionTwoText: value2,
      author: authedUser,
    };

    console.log(question);
    props.dispatch(handleAddQuestion(question));
    e.preventDefault();

    setValue1('');
    setValue2('');
  };
  return (
    <div>
      <Header as='h1' textAlign='center'>
        Create New Question
      </Header>
      <Form>
        <Form.Field width='5'>
          <label>Would You Rather</label>
          <input
            placeholder='Enter Option One Text here'
            onChange={handleChange1}
          />
        </Form.Field>
        <Form.Field width='5'>
          <label>Or</label>
          <input
            placeholder='Enter Option Two Text here'
            onChange={handleChange2}
          />
        </Form.Field>

        <Button type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question,
  };
}

export default connect(mapStateToProps)(NewQuestion);
