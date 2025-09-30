"use client";
import { Listbox, ListboxSection, ListboxItem } from "@heroui/listbox";
import { Todo, TodoStatus } from "@/types/todo";
import { Input } from "@heroui/input";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox } from "@heroui/checkbox";
import clsx from "clsx";
import { useState, useEffect, ChangeEventHandler } from "react";
import { Divider } from "@heroui/divider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const motionProps:any = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      height: "auto",
      overflowY: "unset",
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 1,
        },
        opacity: {
          easings: "ease",
          duration: 1,
        },
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      height: 0,
      overflowY: "hidden",
      transition: {
        height: {
          easings: "ease",
          duration: 0.25,
        },
        opacity: {
          easings: "ease",
          duration: 0.3,
        },
      },
    },
  },
};
export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

interface TodoListProps {
  onItemClick?: (todo: Todo) => void;
  params?: any
}

export function TodoList({ onItemClick,params }: TodoListProps) {
  const searchParams = useSearchParams()
  const [isFocus, setFocus] = useState(false);
  const [todoLists, setTodoLists] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const urlParams = await params
      console.log(urlParams);
      
      const result = await(await fetch(`/api/todo/plan/${urlParams.planId}`)).json()
      setTodoLists(result.data);
      return 
    }
    getTodos()
 
  }, []);

  useEffect(() => {
    const inputElement = document.getElementById("myInput");
    if (inputElement) {
      const handleKeyPress = (event: any) => {
        if (event.keyCode === 13) {
          event.preventDefault();

          setTodoLists((prevTodos) => [
            ...prevTodos,
            {
              id: Date.now().toString(),
              title: event?.target.value,
              description: {},
              status: TodoStatus.UNDONE,
              priority: "low",
            },
          ]);
          (event.target as HTMLInputElement).value = "";
        }
      };

      inputElement.addEventListener("keypress", handleKeyPress);

      return () => {
        inputElement.removeEventListener("keypress", handleKeyPress);
      };
    }
  }, []);

  function handleTodoStatusChange(todoId: string, isChecked: boolean) {
    setTodoLists((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? { ...todo, status: isChecked ? TodoStatus.DONE : TodoStatus.UNDONE }
          : todo
      )
    );
  }

  const statusArr = [TodoStatus.UNDONE, TodoStatus.DONE];

  const pathName = usePathname()
  const { replace } = useRouter()
  function handleTodoClick(item:Todo) {
    const params = new URLSearchParams(searchParams);
    params.set('id', item.id)
    // replace(`${pathName}?${params.toString()}`)
    onItemClick?.(item)
  }
  return (
    <>
      <div className="flex-col flex tran">
        <Input
          label="Add Todo"
          size="lg"
          id="myInput"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={clsx(
            isFocus
              ? "border border-primary rounded-[var(--heroui-radius-large)]"
              : ""
          )}
        />

        <Accordion
          motionProps={motionProps}
          defaultExpandedKeys={statusArr}
          variant="light"
          className="mt-5"
          selectionMode="multiple"
        >
          {statusArr.map((status) => {
            return todoLists.filter((i) => i.status === status).length ? (
              <AccordionItem key={status} aria-label={status} title={status}>
                <Listbox
                  hideEmptyContent
                  aria-label="Dynamic Actions"
                  items={todoLists}
                >
                  {todoLists
                    .filter((i) => i.status === status)
                    .map((item) => (
                      <ListboxItem
                        key={item.id}
                        className={item.id === "delete" ? "text-danger" : ""}
                        onPress={() => handleTodoClick(item)}
                        textValue={item.title}
                        startContent={ListboxItemContent(
                          item,
                          handleTodoStatusChange
                        )}
                      ></ListboxItem>
                    ))}
                </Listbox>
              </AccordionItem>
            ) : (
              <></>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}

export function ListboxItemContent(
  item: Todo,
  handleTodoStatusChange: (todoId: string, isChecked: boolean) => void
) {
  return (
    <div className="flex items-center gap-2 w-full">
      <Checkbox
        size="md"
        isSelected={item.status === TodoStatus.DONE}
        onValueChange={(isChecked) =>
          handleTodoStatusChange(item.id, isChecked)
        }
        aria-label={`Toggle completion for ${item.title}`}
      />
      <span className="flex-1 text-left">{item.title}</span>
    </div>
  );
}
