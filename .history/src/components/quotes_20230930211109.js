
import { Slide } from "react-awesome-reveal";

export default function QuoteMachine(){

const quoteArray = ['quote1','quote2','quote3','quote4','quote5']
// console.log(arr[(Math.floor(Math.random() * arr.length))]);
const randomQuotes = (arr) =>  Math.floor(Math.random() * arr.length);

return(
<>
<Slide><h6>{quoteArray[randomQuotes(quoteArray)]}</h6>
</>
)

}