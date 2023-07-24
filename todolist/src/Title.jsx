export function Title(){
    const title = "my Todo List"
    
    return (
        <div className="title">
            {title.toLocaleUpperCase()}
        </div>
    )
}