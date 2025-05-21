import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import NoteCard from '../Components/NoteCard';

const HomePage = () => {
  const [notes,setnotes] = useState([]);
  const [loading,setloading] = useState(true);

  useEffect(()=>{
    const getNotes = async()=>{
      try {
        const res = await axios.get("http://localhost:5000/notes");
        console.log(res.data);
        setnotes(res.data);
      } catch (error) {
        console.log("Unable To Fetch Notes",error);
      } finally{
        setloading(false) ;
      }
    }
    getNotes();
  }, []);
  return (
    <div className='min-h-screen '>
      <Navbar/> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

        {notes.map(note=>(
          <NoteCard key={note._id} note={note} setnotes={setnotes}/>
        ))}

      </div>
    </div>
  )
}

export default HomePage