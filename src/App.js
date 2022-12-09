import { useState } from 'react';
import { Header } from './components/Header';
import { Working } from './components/Working';
import './app.css'
import { InputBar } from './components/InputBar';

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState(
    [
      { title: "working", content: "해야할 것 예시", isDone: false, id: 1 },
      { title: "Done", content: "다 한거 예시", isDone: true, id: 2 },
    ]);



  // 추가하기 버튼 클릭
  const onSubmitHandler = () => {
    if (title == "") {
      alert("제목 입력 해주세요"); return
    }
    if (content == "") {
      alert("내용 입력 해주세요"); return;
    }

    const todo = {
      title: title,
      content: content,
      isDone: false,
      id: todoList.length + 1,
    }
    setTodoList([...todoList, todo])
    setTitle("");
    setContent("");

  }

  // 완료 및 취소 버튼
  const onChangeHandler = (index) => {
    index.isDone = (index.isDone - 1) * -1;
    console.log(index)
    const newTodoList = todoList.filter((todo) => todo.id !== index.id)

    setTodoList([...newTodoList, index])
  }

  // 삭제 버튼
  const onDeleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)

    setTodoList(newTodoList)
  }

  return (
    <div className='App'>
      <Header />
      <InputBar handleSubmit={onSubmitHandler} content={content} title={title} setContent={setContent} setTitle={setTitle}></InputBar>
      <Working componentName="Working" btnName="삭제하기" todoList={todoList} handleDelete={onDeleteHandler} handleChange={onChangeHandler} key={todoList.id}></Working>
      <Working componentName="Done" btnName="취소하기" todoList={todoList} handleDelete={onDeleteHandler} handleChange={onChangeHandler} key={todoList.id}></Working>

    </div >
  )
}

export default App;
