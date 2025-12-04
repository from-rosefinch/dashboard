const TodoList = ({todos,onDel,onToggle}) => {
  return (
    <ul id="todo-list">
        {
            todos.map((list,idx)=>{
                return (
                <li key={idx}>
                    <input 
                        type="checkbox" 
                        onChange={()=>{onToggle(list.id)}}
                        checked={list.done}
                    />
                    <span style={{
                        textDecoration : list.done ? "line-through" : "none",
                        textDecorationColor : list.done ? "rgba(134, 119, 90, 1)" : "none",
                        textDecorationThickness : list.done ? "2px" : "none"
                    }}>{list.todo}</span>
                    <button onClick={()=>{onDel(list.id)}}>x</button>
                </li>)
            })
        }
    </ul>
  )
}

export default TodoList