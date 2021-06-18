import { Currency } from './Components/Currency-data/'


window.addEventListener('DOMContentLoaded' , ()=> {
  const cont = document.querySelector('.animate')
  setTimeout(() => {
    cont.style.opacity = 1
  },500)
})



function App() {
  return (
    <div className="App">
      <Currency />
    </div>
  );
}

export default App;
