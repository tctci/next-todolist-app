"use client";
import dynamic from "next/dynamic";
import { Divider } from "@heroui/divider";
import { useState, use, useEffect } from "react";
import { TodoList } from "@/components/todoList";
import { Todo } from "@/types/todo";
import { useDebouncedCallback } from "use-debounce";
export default function CataloguePage(props: { params: Promise<any> }) {
  const params = use(props.params);

  const Editor = dynamic(() => import("@/components/editor/Editor"), {
    ssr: false,
  });
  const [data, setData] = useState({});
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
  };

  useEffect(() => {
    if(!selectedTodo?.id) return
    async function setTodoDescription(todoId: string) {
      const todo = await (await fetch(`/api/todo/${todoId}`)).json();
      console.log(todo.data);
      
      setData(todo.data.description);
    }
    setTodoDescription(selectedTodo?.id || '')
  }, [selectedTodo?.id]);

  const handleEditorChange = useDebouncedCallback((data: any) => {
    fetch(`/api/todo/${selectedTodo?.id}/description/save`, {
      method: "post",
      body: JSON.stringify(data),
    });
  }, 1000);
  return (
    <div className="flex h-full">
      <div className="w-1/2 pr-4.5">
        <TodoList onItemClick={handleTodoClick} params={params}></TodoList>
      </div>
      <div className="flex h-full">
        <Divider orientation="vertical"></Divider>
      </div>
      <div className="w-1/2">
        {selectedTodo ? (
          <Editor
            value={data}
            onChange={handleEditorChange}
            holder="editorjs-container"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
