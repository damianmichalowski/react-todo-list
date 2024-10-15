import { useEffect, useState } from "react";
import "./style.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];

		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currenTodos) => {
			return [
				...currenTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currenTodos) => {
			return currenTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currenTodos) => {
			return currenTodos.filter((todo) => todo.id !== id);
		});
	}

	console.log(todos);

	return (
		<>
			<h1 className="header">Todo List 🎯</h1>
			<NewTodoForm onSubmit={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}
