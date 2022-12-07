export const Done = (props) => {
    console.log("component Done", props)

    return (
        <>
            <p>Done...</p>
            <div className='working'>
                {props.todoList.map((todo, index) => {
                    if (todo.isDone) {
                        return (
                            <div className='workingBox'>
                                <div className='title'>제목 : {todo.title}</div>
                                <div className='content'>내용 : {todo.content}</div>
                                <button onClick={() => { props.handleDelete(props.todoList[index].id) }} value="삭제">삭제하기</button>
                                <button onClick={() => { props.handleChange(props.todoList[index]) }}>취소</button>
                            </div>
                        )
                    }
                    return null;
                })}

            </div>
        </>
    )
}