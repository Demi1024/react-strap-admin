import React,{useEffect, useState} from 'react';

import {Button} from 'reactstrap';

const CandyDispenser=()=> {
    const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
    const [candies, setCandies] = useState(initialCandies)
    const [selectedCandies,setSelectedCandies] = useState([]);
    const [resultCandies,setResultCandies] = useState([]);

    useEffect(()=>{
      let newCandy = {}
      let newCandyList = []
      selectedCandies.forEach(item=>{
        if(newCandy[item] === undefined){
          newCandy[item] = 1
        } else {
          newCandy[item] += 1
        }
      })
      Object.keys(newCandy).forEach(key=>{
        newCandyList.push({
          name:key,
          value:newCandy[key]
        })
      })
      setResultCandies(newCandyList)
      
    },[selectedCandies])

    const dispense = candy => {
      setCandies(allCandies => allCandies.filter(c => c !== candy))
      setSelectedCandies([...selectedCandies,candy])
    }
    
    return (
      <div>
        <h1>糖果售货机</h1>
        <div>
          <div>在售糖果</div>
          {candies.length === 0 ? (
            <Button onClick={() => setCandies(initialCandies)}>重新填满</Button>
          ) : (
            <ul>
              {candies.map(candy => (
                <li key={candy}>
                  <Button onClick={() => dispense(candy)}>选择</Button> {candy}
                </li>
              ))}
            </ul>
          )}
          <div>您已选择的糖果有：
            {resultCandies.map(item=>{
              return <Button color="info">{item.name}:{item.value}</Button>
            })}
          </div>
        </div>
      </div>
    )
  }
  export default CandyDispenser;