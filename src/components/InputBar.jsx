export const InputBar = (props) => {
    console.log(props.title)
    return (
        <div>
            <span className='addBtn'>제목</span><input className='addBtn' type="text" value={props.title} onChange={(e) => { props.setTitle(e.target.value) }} placeholder="제목 입력 하세요."></input>
            <span className='addBtn'>내용</span><input className='addBtn' type="text" value={props.content} onChange={(e) => { props.setContent(e.target.value) }} placeholder="내용 입력 하세요."></input>
            <button className='addBtn' onClick={props.handleSubmit}>추가하기 </button>
        </div>
    )
}