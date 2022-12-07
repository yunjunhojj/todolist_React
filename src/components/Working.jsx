export const Working = (props) => {
    console.log("component working", props)

    return (
        <>
            <p>Working...</p>
            <div className='working'>
                {props.todoList.map((todo, index) => {
                    if (!todo.isDone) {
                        return (
                            <div className='workingBox'>
                                <div className='title'>제목 : {todo.title}</div>
                                <div className='content'>내용 : {todo.content}</div>
                                <button onClick={() => { props.handleDelete(props.todoList[index].id) }} name="삭제">삭제하기</button>
                                <button onClick={() => { props.handleChange(props.todoList[index]) }} name="완료">완료</button>
                            </div>
                        )
                    }
                    return null;
                })}

            </div>
        </>
    )
}