import Note from '../Model/NotesModel.js';

export async function getNotes(req,res){
   try {
    const Getnotes = await Note.find().sort({createdAt:-1});
    res.status(200).json(Getnotes)
   } catch (error) {
    console.log("Error In Getting Notes",error);
    res.status(500).json({message:"Internal Server Error"})
   }
}
export async function getNotesById(req,res) {
    try {
        const Getnotes = await Note.findById(req.params.id);
        if(!Getnotes) return res.status(404).json({message:"Note Not Found"});
        res.status(200).json(Getnotes);
    } catch (error) {
       console.log("Unable To Get That Notes",error);
       res.status(500).json({message:"Internal Server Error"}); 
    }
    
}

export async function createNotes(req,res){
    try {
        const {title, content} = req.body;
        const newNotes = new Note({title, content});

        const SaveNotes = await newNotes.save();
        res.status(201).json({SaveNotes});
    } catch (error) {
        console.log("Error In Creating Notes",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
export async function updateNotes(req,res){
    try {
        const {title, content} = req.body;
        const updateNotes = await Note.findByIdAndUpdate(req.params.id,{title,content},
            {
                new:true,
            }
        );
        if(!updateNotes) return res.status(404).json({message:"Note Not Found"});
        res.status(200).json({message:"Updated Succesfully"});
    } catch (error) {
        console.log("Error In Updating Notes",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
export async function delteteNotes(req,res){
    try {
        const delteteNotes = await Note.findByIdAndDelete(req.params.id);
        if(!delteteNotes) return res.status(404).json({message:"Note Not Found"})
        res.status(200).json({message:"Deleted Succesfully"});
    } catch (error) {
      console.log("Error To Deleted The Notes",error);
      res.status(500).json({message:"Internal Server Error"});   
    }

}
