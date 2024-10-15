import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="list">
			{todos.length === 0 && (
				<div className="no-todos">
					<h2 className="no-todos-header">Nothing to see here!</h2>
					<p className="no-todos-message">
						Looks like you have no tasks. Let’s change that!
					</p>
				</div>
			)}
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
}
