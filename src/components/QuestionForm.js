import React, { useState } from "react";

const QUESTION_URL="http://localhost:4000/questions"

function QuestionForm(props) {
  function QuestionForm({ addQuiz }) {
    const original = {
      prompt: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctIndex: 0,
    };
    const [formData, setFormData] = useState(original)
  
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  
    function updateform(x){
      return {
        prompt: x.prompt,
        answers: [x.answer1, x.answer2, x.answer3, x.answer4],
        correctIndex: x.correctIndex
      }
    }
  
      function handleSubmit(event) {
      event.preventDefault();
      
         fetch(QUESTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(updateform(formData)),
        })
        .then((response) => response.json())
        .then((results) => {
            setFormData(original)
            addQuiz(results)
        })
    }
  
    return (
      <section>
        <h1>New Question</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Prompt:
            <input
              type="text"
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 1:
            <input
              type="text"
              name="answer1"
              value={formData.answer1}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 2:
            <input
              type="text"
              name="answer2"
              value={formData.answer2}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 3:
            <input
              type="text"
              name="answer3"
              value={formData.answer3}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 4:
            <input
              type="text"
              name="answer4"
              value={formData.answer4}
              onChange={handleChange}
            />
          </label>
          <label>
            Correct Answer:
            <select
              name="correctIndex"
              value={formData.correctIndex}
              onChange={handleChange}
            >
              <option value="0">{formData.answer1}</option>
              <option value="1">{formData.answer2}</option>
              <option value="2">{formData.answer3}</option>
              <option value="3">{formData.answer4}</option>
            </select>
          </label>
          <button type="submit">Add Question</button>
        </form>
      </section>
    );
  }
}
  export default QuestionForm;