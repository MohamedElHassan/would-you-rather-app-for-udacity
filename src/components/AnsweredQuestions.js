import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image, Button, Header} from "semantic-ui-react";

function AnsweredQuestions(props) {
    const question = props.questions[props.id];
    const author = props.users[question.author];

const handleQuestion = (e) => {
    e.preventDefault();
    
  };
  return (
    <Link to={`/poll/${question.id}`}>
    
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
    </Link>
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


export default connect(mapStateToProps)(AnsweredQuestions);
