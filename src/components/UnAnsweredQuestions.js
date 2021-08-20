import React from "react";
import { connect } from "react-redux";
import { Card, Image, Button } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
function UnAnsweredQuestions(props) {
    const question = props.questions[props.id];
    const author = props.users[question.author];
    
const handleQuestion = (e) => {
    e.preventDefault();
    props.history.push(`/poll/${question.id}`)
    
};
  return (
    <div>
    
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
          <Card.Description>{question.optionOne.text}...</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={handleQuestion}>
              View Poll
            </Button>
          </div>
        </Card.Content>
      </Card>
      <br />
    </div>
  );
}

// function mapStateToProps({ questions, authedUser, users }, { id }) {
//    const question = questions[id];
//    const author = users[question.author];
// console.log('The Author',author)
// console.log('The Question',question)
// console.log('The Questions',questions);
//   return {
//     authedUser,
//     question,
//     author,
//   };
// }

const mapStateToProps = (state) => ({
    questions: state.questions,
    authedUser: state.authedUser,
    users:state.users
    
    });


export default withRouter(connect(mapStateToProps)(UnAnsweredQuestions))
