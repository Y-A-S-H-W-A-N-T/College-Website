import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/home'
import AddNews from './components/addnews'
import Display from './components/display'
import MainNews from './components/mainnews'
import News from './components/titles'
import Quiz from './components/quiz'
import Questions from './components/questions'
import AddTest from './components/addtest'
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/addnews' element={<AddNews/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/display' element={<Display/>}/>
          <Route exact path='/news/:id' element={<MainNews/>}/>
          <Route exact path='/quiz' element={<Quiz/>}/>
          <Route exact path='/questions/:id' element={<Questions/>}/>
          <Route exact path='/addquiz' element={<AddTest/>}/>
          <Route exact path='*' element={<Error/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
