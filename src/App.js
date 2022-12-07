import { useState } from 'react';
import { Done } from './components/Done';
import { Header } from './components/Header';
import { Working } from './components/Working';
import './app.css'

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState(
    [
      { title: "working", content: "해야할 것 예시", isDone: false, id: 1 },
      { title: "Done", content: "다 한거 예시", isDone: true, id: 2 },
    ]);


  const onSubmitHandler = () => {
    const todo = {
      title: title,
      content: content,
      isDone: false,
      id: todoList.length + 1,
    }
    setTodoList([...todoList, todo])
    console.log("todolist :", todoList)
  }

  const onChangeHandler = (index) => {
    index.isDone = (index.isDone - 1) * -1;
    console.log(index)
    const newTodoList = todoList.filter((todo) => todo.id !== index.id)

    setTodoList([...newTodoList, index])
  }

  const onDeleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)

    setTodoList(newTodoList)
  }

  return (
    <div className='App'>
      <Header />
      <div>
        <span className='addBtn'>제목</span><input className='addBtn' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="제목 입력 하세요."></input>
        <span className='addBtn'>내용</span><input className='addBtn' type="text" value={content} onChange={(e) => { setContent(e.target.value) }} placeholder="내용 입력 하세요."></input>
        <button className='addBtn' onClick={onSubmitHandler}>추가하기 </button>
      </div>
      <Working todoList={todoList} handleDelete={onDeleteHandler} handleChange={onChangeHandler} key={todoList.id}></Working>

      <Done todoList={todoList} handleDelete={onDeleteHandler} handleChange={onChangeHandler} key={todoList.id}></Done>

    </div >
  )
}

export default App;
