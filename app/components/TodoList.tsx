import React from 'react';
import {ITask} from "@/types/tasks";
import {BsTrash} from "react-icons/bs";
import Task from "@/app/components/Task";
interface TodoListProps {
    tasks: ITask[];
}
const TodoList:React.FC<TodoListProps> = ({tasks}) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map((task, i) => (
                           <Task key={i} task={task}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default TodoList;