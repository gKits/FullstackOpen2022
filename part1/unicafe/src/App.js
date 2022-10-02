import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttons = [
    {
      text: 'good',
      func: function() {setGood(good + 1)}
    },
    {
      text: 'neutral',
      func: function() {setNeutral(neutral + 1)}
    },
    {
      text: 'bad',
      func: function() {setBad(bad + 1)}
    }
  ]

  return (
    <div>
      <Header title='Unicafe'/>
      <Buttons title='Give us your feedback' buttons={buttons}/>
      <Statistics stats={{good:good, neutral:neutral, bad:bad}}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Buttons = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.buttons.map((button, index) => (
        <button onClick={() => button.func()} key={index}>{button.text}</button>
      ))}
    </div>
  )
}

const StatisticRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.unit}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.stats.good + props.stats.neutral + props.stats.bad
  const average = Math.round(((props.stats.good - props.stats.bad) / total)*100)/100
  const positive = Math.round(100 * props.stats.good / total)
  return (
    <div>
      <h3>Statistics</h3>
      {
        total === 0?
        <div>No feedback given</div>:
        <table>
          <tbody>
            <StatisticRow text='good' value={props.stats.good}/>
            <StatisticRow text='neutral' value={props.stats.neutral}/>
            <StatisticRow text='bad' value={props.stats.bad}/>
            <StatisticRow text='total' value={total}/>
            <StatisticRow text='average' value={average}/>
            <StatisticRow text='positive' value={positive} unit='%'/>
          </tbody>
        </table>
      }
    </div>
  )
}

export default App
