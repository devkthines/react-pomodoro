
import { Fade } from "react-awesome-reveal";
import {useState, useEffect} from 'react'
export default function QuoteMachine(){

const quoteArray = [
    '“Everything you can imagine is real.”―Pablo Picasso',
    '“You can’t go back and change the beginning, but you can start where you are and change the ending.” ―C.S. Lewis',
    'quote3',
    'quote4',
    'quote5'
]
const quoteName = 'quotes'
// console.log(arr[(Math.floor(Math.random() * arr.length))]);
const randomQuotes = (arr) =>  Math.floor(Math.random() * arr.length);
const [quote, setQuote] = useState(<h6>{quoteArray[randomQuotes(quoteArray)]}</h6>);

useEffect(() => {

    //Implementing the setInterval method
    const interval = setInterval(() => {
        setQuote(<h6 className={quoteName}>{quoteArray[randomQuotes(quoteArray)]}</h6>);
    }, 6000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [quote]);

return(
<>
 {quote}
</>
)

}