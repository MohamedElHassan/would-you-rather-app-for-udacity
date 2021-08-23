import React ,{useState} from 'react';
import { connect } from 'react-redux'
import { Card, Image, Button , Header ,Form, Radio , Icon} from "semantic-ui-react";
import { handleSaveAnswer } from '../actions/questions'
import { withRouter , Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from '../loginAuth';
function QuestionPage(props){
    const [submit,handleSubmitValue] = useState(false)
    const [chooseValue,handleChooseValue] = useState('')
    const { id } = props.match.params
    //includes
    const questions = Object.keys(props.questions)
    if(!questions.includes(id)){
      logout()
     return <Redirect to='/'/>

    }
    
    const question = props.questions[id];
    const author = props.users[question.author];
    const { authedUser} = props
    const handleChange=(e,text)=> {
        handleChooseValue(text.value)
        console.log(chooseValue)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        props.dispatch(handleSaveAnswer({authedUser:authedUser,qid:question.id,answer:chooseValue}))
        handleSubmitValue(true)
    }
    
return(
  
    <div style={{marginTop:-20}}>
    Return to Home <Link to='/dashboard'><Icon name='log out' size='big' link /></Link>
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

         {
          submit === true || question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) ? null
          : <Form.Field>
          <Radio
            label={question.optionOne.text}
            name='radioGroup'
            value='optionOne'
            checked={chooseValue === 'optionOne'}
            onChange={handleChange}
          />
        </Form.Field>
         }
          {submit === true || question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) ? 'Votes : ' + question.optionOne.votes.length + ' Out of ' + Object.keys(props.users).length +' Votes\n||  '  : null  }
         {
          submit === true || question.optionTwo.votes.includes(authedUser) || question.optionOne.votes.includes(authedUser) ? null :
         <Form.Field>
          <Radio
            label={question.optionTwo.text}
            name='radioGroup'
            value='optionTwo'
            checked={chooseValue === 'optionTwo'}
            onChange={handleChange}
          />
        </Form.Field>
      }
        {submit === true || question.optionTwo.votes.includes(authedUser) || question.optionOne.votes.includes(authedUser) ? 'Votes : ' + question.optionTwo.votes.length + ' Out of ' + Object.keys(props.users).length +' Votes '  : null  }
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button disabled={chooseValue  === ''} basic color='green' onClick={handleSubmit}>
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

export default withRouter(connect(mapStateToProps)(QuestionPage))