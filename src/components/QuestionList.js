import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, delQuiz }) {

  const list= questions.map((quiz)=>
      <QuestionItem key={quiz.id} question ={quiz} delQuiz={delQuiz}/>
      )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {list}
      </ul>
    </section>
  );
}

export default QuestionList;