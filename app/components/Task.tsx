"use client"
import React, {FormEventHandler, useState} from 'react';
import {ITask} from "@/types/tasks";
import {FiEdit, FiTrash2} from "react-icons/fi";
import Modal from "@/app/components/Modal";
import {useRouter} from "next/navigation";
import {deleteTodo, editTodo} from "@/api";

interface TaskProps {
  task: ITask;
}
const Task:React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [taskEdit, setTaskEdit] = useState(false);
    const [taskDelete, setTaskDelete] = useState(false);
    const [currentTaskValue, setCurrentTaskValue] = useState(task.text);

    const handleEdit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: currentTaskValue
        })
        setCurrentTaskValue('');
        setTaskEdit(false);
        router.refresh();
    }
    const handleDelete = async (id:string) => {
        await deleteTodo(id);
        setTaskDelete(false);
        router.refresh();
    }
    return(
        <tr key={task.id}>
            <td>{task.text}</td>
            <td>
                <button onClick={() => setTaskEdit(true)} className="btn btn-primary text-white mr-5 cursor-pointer"><FiEdit size={18}/></button>
                <Modal open={taskEdit} setModalOpen={setTaskEdit}>
                    <form onSubmit={handleEdit}>
                        <h3 className="font-bold text-lg">Edit task</h3>
                        <div className="modal-action">
                            <input value={currentTaskValue} onChange={(e) => setCurrentTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal>
                <button onClick={() => setTaskDelete(true)} className="btn btn-error text-white cursor-pointer"><FiTrash2 size={18}/></button>
                <Modal open={taskDelete} setModalOpen={setTaskDelete}>
                    <h3 className="text-lg">Delete this task anyway?</h3>
                    <div className="modal-action">
                        <button className="btn btn-error text-white" onClick={() => handleDelete(task.id)}>Yes</button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}
 export default Task;