import quoteData from '../data/quoteData.json';

const Quotes = () => {
    //숫자를 random 처리 : Math.random() :
    const index = Math.floor(Math.random()*quoteData.length);
    const data = quoteData[index];
  return (
    <div id='quote-page'>
        <p>" {data.line} "</p>
        <small>-{data.movie}</small>
    </div>
  )
}

export default Quotes