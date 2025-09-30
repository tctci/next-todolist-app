"use client";
import dynamic from "next/dynamic";
import { Divider } from "@heroui/divider";
import { useState } from "react";
import { TodoList } from "@/components/todoList";
import { Todo } from "@/types/todo";

export default  function CataloguePage(props: { params: any; }) {
  
  const Editor = dynamic(() => import("@/components/editor/Editor"), {
    ssr: false,
  });
  const [data, setData] = useState({});
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    console.log("点击的 Todo:", todo);
    setSelectedTodo(todo);
    console.log(data);
    
    setData(todo.description);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 pr-4.5">
        <TodoList onItemClick={handleTodoClick} params={props.params}></TodoList>
      </div>
      <div className="flex h-full">
        <Divider orientation="vertical"></Divider>
      </div>
      <div className="w-1/2">

        <Editor value={data} onChange={()=>{}} holder="editorjs-container" />

      </div>
    </div>
  );
}
