import React, { Component, useState } from "react";
import { connect } from "react-redux";

import { handleAddQuestion } from "../actions/questions";
import { Card,  Image } from "semantic-ui-react";

function Leaderboard({ users }) {
  console.log("The leaderboard props", users);

  const scores = users.map((user) => {
    return {
      questions: user.questions.length,
      answers: Object.values(user.answers).length,
      totalScore: user.questions.length + Object.values(user.answers).length,
      user,
    };
  }).sort((a,b)=>b.totalScore - a.totalScore);
  return (
    <div>
      <ul>
        {scores.map((score) => (
          <li key={score.user.id}>
            <Card>
              <Image src={score.user.avatarURL} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{score.user.name}</Card.Header>
                <Card.Description>
                  <span className=''>Question answered {score.answers}</span>
                </Card.Description>
                <Card.Description>
                  Created Questions{score.questions}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>Score {score.totalScore}</Card.Content>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Leaderboard);
