const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=> 
{
    return("Your notes is") 
}

const addNote=(title,body)=>
{
   const notes=loadNotes()
   //console.log(notes)
//    const duplicateNotes=notes.filter(function (note){ 
//        return note.title===title})
   //const duplicateNotes=notes.filter((note)=> note.title===title)
   const duplicateNote=notes.find((note)=>note.title===title)
   //debugger
   if(!duplicateNote){
   notes.push(
       {
           title:title,
           body:body
        }
   )
   saveNotes(notes)
   console.log(chalk.blue.inverse('Notes Added!!'))
}
else{
    console.log(chalk.red.inverse('Note title taken!'))
}
}
const removeNotes=(title)=>
{ 
    const notes=loadNotes();
    //const len=notes.length;
    const keepNotes=notes.filter((note)=> note.title!=title)
   
    if(notes.length===keepNotes.length){
        console.log(chalk.red.inverse('No note found!!'))
    }
    else
    {
    console.log(chalk.green.inverse('Note removed!!!'))
    saveNotes(keepNotes)
    }

}
const listNotes=()=>{
    notes=loadNotes()
    notes.forEach((note) => console.log(chalk.blue(note.title))
    );
}
const readNotes=(title)=>{
    notes=loadNotes()
    const readNote=notes.find((note)=> note.title===title)
    if(readNote)
    {
        console.log(chalk.magenta("Your note"))
   
        console.log(chalk.white.inverse(readNote.title))
        console.log(chalk.white(readNote.body))
        
    }
    else
    {console.log(chalk.red('No Such note'))
    }
}
const saveNotes=(notes)=>
{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}
const loadNotes=()=>
{
    try{
        const dataBuffer =fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
       return[]
    }

}

module.exports=
{
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}