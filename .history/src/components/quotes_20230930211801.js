
import { Fade } from "react-awesome-reveal";
import {useState, useEffect} from 'react'
export default function QuoteMachine(){

const quoteArray = ['quote1','quote2','quote3','quote4','quote5']
// console.log(arr[(Math.floor(Math.random() * arr.length))]);
const randomQuotes = (arr) =>  Math.floor(Math.random() * arr.length);
const [quote, setCount] = useState(0);

useEffect(() => {

    //Implementing the setInterval method
    const interval = setInterval(() => {
        setCount(count + 1);
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [quote]);

return(
<>
<Fade><h6>{quoteArray[randomQuotes(quoteArray)]}</h6></Fade>
</>
)

}