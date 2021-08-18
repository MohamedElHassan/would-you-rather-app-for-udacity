import React ,{useState} from 'react';
import { connect } from 'react-redux'
import { Card, Image, Button , Header ,Form, Radio } from "semantic-ui-react";

function QuestionPage(props){
    const [chooseValue,handleChooseValue] = useState('')

    const question = props.questions[props.id];
    const author = props.users[question.author];
    const handleChange=(e,text)=> {
        handleChooseValue(text.value)
        console.log(chooseValue)
    }
    const handleSubmit= (e)=>{
        
        e.preventDefault();
        
    }
return(
    <div>
        <Header as='h1'>Question</Header>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={author.avatarURL}
          />
          <Card.Header>{author.name} Asks</Card.Header>
          <Card.Meta>
            <strong>Would You Rather</strong>
          </Card.Meta>
         
             

          <Form.Field>
          <Radio
            label={question.optionOne.text}
            name='radioGroup'
            value={question.optionOne.text}
            checked={chooseValue === question.optionOne.text}
            onChange={handleChange}
          />
        </Form.Field>


        <Form.Field>
          <Radio
            label={question.optionTwo.text}
            name='radioGroup'
            value={question.optionTwo.text}
            checked={chooseValue === question.optionTwo.text}
            onChange={handleChange}
          />
        </Form.Field>


        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Card.Content>
      </Card>
      <br />
    </div>
)
}

const mapStateToProps = (state) => {
    
    return{
    questions: state.questions,
    authedUser: state.authedUser,
    users:state.users
    
    }
};

export default connect(mapStateToProps)(QuestionPage)