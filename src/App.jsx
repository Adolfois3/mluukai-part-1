import { useState } from "react"


const Statistic = ({props, name})=>{

  return(
    <>
    <p>{name} {props}</p>
    </>
  )

}

const Button = ({name,incrementar})=>{

  return(
    <button onClick={incrementar}>{name}</button>

  )
}

export const App =  () => {




  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all , setAll]= useState(0)

  function goodIn (){
    setGood(good + 1)
        setAll(all + 1)
  }
    function neutralIn (){
    setNeutral(neutral + 1)
        setAll(all + 1)
  }

    function badIn (){
    setBad(bad + 1)
    setAll(all  + 1 )
  }


    const promedio = good + neutral + bad / all
    const promedioPositivo = good / all * 100








  return (
    <>
    <div>
      <h1>Give Feedback</h1>

      <Button incrementar={goodIn} name={"Good"}></Button>
      <Button incrementar={neutralIn}  name={"Neural"}></Button>
      <Button incrementar={badIn} name={"Bad"}></Button>

      <h2>Statistics</h2>

      <table>


      <Statistic name={"Good"} props={good} ></Statistic>
      <Statistic name={"Neutral"} props={neutral}  ></Statistic>
      <Statistic name={"Bad"} props={bad}  ></Statistic>
      <Statistic name={"All"}  props={all} ></Statistic>
      <Statistic name={"average"}  props={promedio} ></Statistic>
      <Statistic name={"positive"}  props={promedioPositivo} ></Statistic>
      </table>
    </div>
    </>

  )

}

