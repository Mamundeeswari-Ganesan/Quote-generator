
import './App.css'


function App() {
  const quotes=[{
    quote:'live let live',
    person: 'Ajith'
  },
  {
    quote:'Quote',
    person: 'Person2'
  },
  {quote:'Let none falter, who thinks he is right, and we may succeed.',
perons:'Abraham Lincoln'}
]
  const button=document.querySelector('#new');
  const quote=document.querySelector('.quote');
  const person=document.querySelector('.person');
  console.log(button, quote,person);
  function btnClick(){
    const random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
  }
  button.addEventListener('click',btnClick);
  return(
    <div className="container">
    <div className="header">
      <h2>Quote of the Day</h2>
    </div>
    <div className="main-content">
      <div className="text-area">
        <span className='quote'>Let none falter, who thinks he is right, and we may succeed.</span>
      </div>
      <div className="person">Abraham Lincoln</div>
      <div className="button-area">
        <button id="new">New Quote</button>
      </div>
    </div>
  </div>
  );

}

export default App
