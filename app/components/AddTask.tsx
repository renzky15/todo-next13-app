"use client";
import React, {FormEventHandler, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Modal from "@/app/components/Modal";
import {addTodo} from "@/api";
import {useRouter} from "next/navigation";

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [newTask, setNewTask] = useState('');
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            id:Math.random().toString(),
            text: newTask
        })
        setNewTask('');
        setModalOpen(false);
        router.refresh();
    }
    return (
        <div>
            <button onClick={() => setModalOpen(!modalOpen)} className="btn btn-primary w-full">Add new task <AiOutlinePlus size={18}/></button>
            <Modal open={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">Add new task</h3>
                    <div className="modal-action">
                        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AddTask;