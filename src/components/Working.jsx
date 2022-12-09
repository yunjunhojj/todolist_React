export const Working = (props) => {

    return (
        <>
            <p>{props.componentName}...</p>
            <div className='working'>

                {props.todoList.map((todo, index) => {
                    if (!todo.isDone && props.componentName == "Working") {
                        return (
                            <div className='workingBox' key={index}>
                                <div className='title'>제목 : {todo.title}</div>
                                <div className='content'>내용 : {todo.content}</div>
                                <button onClick={() => { props.handleDelete(props.todoList[index].id) }} name="삭제">{props.btnName}</button>
                                <button onClick={() => { props.handleChange(props.todoList[index]) }} name="완료">완료</button>
                            </div>
                        )
                    }
                    return null;
                })}</div>
            <div className='working'>
                {props.todoList.map((todo, index) => {
                    if (todo.isDone && props.componentName == "Done") {
                        return (
                            <div className='workingBox' key={index}>
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