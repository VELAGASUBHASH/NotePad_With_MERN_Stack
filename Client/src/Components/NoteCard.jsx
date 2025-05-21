import {PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import {Link} from 'react-router'
import axios from 'axios'

const NoteCard = ({note,setnotes}) => {

    const handledelete = async (e,id)=>{
        e.preventDefault();

        if(!window.confirm("Are You Sure You Want To Delete Note")) return;

        try {
            await axios.delete(`http://localhost:5000/notes/${id}`)
            setnotes((prev)=>prev.filter(note => note._id !== id)) // For updating page after deleting notes
            toast.success("Notes Deleted Succesfully");
        } catch (error) {
            console.log("Error In Deleting Notes",error);
            toast.error("Unable To Delete The Notes");
        }
    }

  return (
   <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-blue-400'>
    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
            <span className='text-sm text-base-content/60'>
                {note.createdAt}
            </span>
            <div className='flex items-center gap-1'>
                <PenSquareIcon className='size-4'/>
                <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handledelete(e,note._id)}>
                    <Trash2Icon className='size-4'/>
                </button>
            </div>
        </div>
    </div>
   </Link>
  )
}

export default NoteCard