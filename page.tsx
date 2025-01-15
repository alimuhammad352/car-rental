'use client';

import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the type for the task
interface Task {
  id: string;
  title: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]); // Use Task type for tasks array
  const inputReference = useRef<HTMLInputElement | null>(null); // Type the input reference

  const handleAddTask = () => {
    const inputValue = inputReference.current?.value;
    if (!inputValue) {
      toast.warn('Please enter your task', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);

    if (inputReference.current) {
      inputReference.current.value = '';
    }
  };

  // Handle Enter key event
  function OnKeyEnter(my_key: React.KeyboardEvent) {
    if (my_key.key === 'Enter') {
      handleAddTask();
    }
  }

  // Delete task function
  function deleteTask(id: string) {
    setTasks(tasks.filter((elem) => elem.id !== id));
  }

  return (
    <div className='mt-[500px]'>
      <div className='flex'>
        <div className=' text-black h-12 text-center mt-4 text-4xl font-bold mb-4'>
          <h1>Search</h1>
        </div>
        <input 
          onKeyDown={OnKeyEnter}
          ref={inputReference} 
          className='border-2 border-gray-700 rounded p-2 m-4' 
        />
        <button
          onClick={handleAddTask}
          className='bg-black p-2 font-semibold text-yellow-400 rounded px-3'
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.length === 0 ? (
          <h1 className='bg-gray-100 p-8'>No Tasks Available!</h1>
        ) : (
          tasks.map((elem, index) => (
            <div key={elem.id} className='bg-gray-400 flex justify-between px-4'>
              <li className='m-4'>
                {index + 1}. {elem.title}
              </li>
              <button 
                onClick={() => deleteTask(elem.id)} 
                className='bg-black text-white p-4'
              >
                Delete
              </button>
            </div>
          ))
        )}
      </ul>
      <ToastContainer />
    </div>
  );
}
