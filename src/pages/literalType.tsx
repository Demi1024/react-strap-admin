import React,{useState,useEffect} from 'react';
import {Button} from 'reactstrap';
import {prettySeconds,fixIfNotInt,formatCommand} from 'utils/index'

const scripts = "python train.py --epoch=5  --logdir=/output/tf_dir --modelname=model.h5 --output=/output"
type LiteralTypesProps = {
    history: any;
    match:any;
  };
const LiteralTypes = ()=>{

    const [toggle,setToogle] = useState(false);
    const [count,setCount]= useState(0);
    useEffect(()=>{
        document.title = `clicked ${count} times`;
    },[count]);

    const handleCilck = ()=>{
        let time = new Date()
        console.log(time)
        setToogle(!toggle)
        setCount(count+1)
    }
    return(
        <div>
            <h2>Test Page</h2>
            <Button onClick={handleCilck}>show div</Button>
            {
                toggle &&
                <div>12312312312312</div>
            }
            <div>{prettySeconds(count*60)}</div>
            <div>{fixIfNotInt(3)}</div>
            <div>{formatCommand(scripts)}</div>
        </div>
    )
}
export default LiteralTypes