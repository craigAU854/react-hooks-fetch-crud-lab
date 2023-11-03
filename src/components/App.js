import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quizlist, setQuizList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((results) => {
    setQuizList(results) 
    })
    }, [])

    function addQuiz(newQuiz) {
      setQuizList([...quizlist, newQuiz])
    }
  
    function delQuiz(QuizID) {
      setQuizList(quizlist.filter(quiz => quiz.id !== QuizID))
    }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuiz={addQuiz}/> : <QuestionList questions={quizlist} delQuiz={delQuiz}/>}
    </main>
  );
}

export default App;