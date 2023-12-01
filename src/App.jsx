/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import questionsInfo from './questions/info';
import { find } from 'lodash';

import './App.css'
import FlipComponent from './components/FilpComponent';

function Header({ selectedExercise, setSelectedExercise }) {
  return (
    <>
      <div className="header-title">
        <FlipComponent />
        <h1>Advent of Code</h1>
      </div>
      <div className="card">
        {questionsInfo.map(({id}) => {
          const day = id.split('-')[0];
          const part = id.split('-')[1];
          return (
            <button key={id} className={`exercise-button ${selectedExercise === id && 'selected'}`} onClick={() => setSelectedExercise(id)}>
              Day {day} - Part {part}
            </button>
          )
        })}
      </div>
    </>
  )
}

function App() {
  const INITIAL_QUESTION = '1-1';
  const [selectedExercise, setSelectedExercise] = useState(INITIAL_QUESTION);
  const [dataInput, setDataInput] = useState(find(questionsInfo, { id: INITIAL_QUESTION })?.initalInput.trim());
  const [answer, setAnswer] = useState('');
  const linkToQuestion = 'https://adventofcode.com/2023/day/' + selectedExercise.split('-')[0];
  const currentQuestionInfo = find(questionsInfo, {id: selectedExercise});

  useEffect(() => {
    setDataInput(currentQuestionInfo?.initalInput.trim())
    if(currentQuestionInfo?.complete) {
      setAnswer(currentQuestionInfo?.code(currentQuestionInfo?.initalInput.trim()))
    } else {
      setAnswer('')
    }
    
  }, [currentQuestionInfo])


  if(!currentQuestionInfo) {
    return (
      <>
        <Header {...{selectedExercise, setSelectedExercise}}/>
        <div className="card">Question not found.</div>
      </>
    )
  }

  let answerSection = answer !== '' ? <p>{answer}</p> : <p>Click Run Function to get the answer</p>;

  if(dataInput == currentQuestionInfo.initalInput.trim() && answer !== '') {
    answerSection = answer === currentQuestionInfo.initialInputAnswer ? (
      <p>You got it! <span className='correct'>{answer}</span></p>
    ) :(<p>Your answer <span className='wrong'>{answer}</span> is wrong, it should be {currentQuestionInfo.initialInputAnswer}</p>)
  }

  return (
    <>
      <Header {...{selectedExercise, setSelectedExercise}}/>
      <div className="question-answer-area">
        <div className='description'>
          <a href={linkToQuestion} target='blank'>{linkToQuestion}</a>
        </div>

        <textarea
          style={{ width: '600px', height: '200px' }}
          onChange={(e) => {
            setDataInput(e.currentTarget.value);
            const answer = currentQuestionInfo.code(e.currentTarget.value);
            setAnswer(answer)
          }}
          value={dataInput}
        />
        
        {!currentQuestionInfo.complete && (
          <button onClick={() => {
            const answer = currentQuestionInfo.code(dataInput);
            setAnswer(answer)
          }}>Run Function</button>
        )}

        <div className='answer-section'>
          <h2>Answer</h2>
          {answerSection}
        </div>
      </div>
    </>
  )
}

export default App
