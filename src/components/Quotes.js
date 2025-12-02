import quoteData from '../data/quoteData.json';

const Quotes = () => {
    //숫자를 random 처리 : Math.random() :
    const index = Math.floor(Math.random()*quoteData.length);
    const data = quoteData[index];
  return (
    <div id='quote-page'>
        <p>{data.verse}</p>
        <small>-{data.bible}</small>
    </div>
  )
}

export default Quotes