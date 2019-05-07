const validator=require('validator')
const chalk =require('chalk')
const notes =require('./notes.js')
const yargs=require('yargs')
yargs.version('1.1.1')
yargs.command({
    command:"add",
    builder:{
        title:{ describe:"Notes title", 
        demandOption: true,
        type:'string'

        },
        body:{
            describe:"Notes body",
            demandOption:true,
            type:'string'
        }
    },
    describe:"Add a new note",
    handler(argv ){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:"remove",
    builder:{
        title:{
            describe:"title of note to remove",
    demandOption:true,
    type:'string'
        }
    },
    describe:"Removing a notes",
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:"list",
    describe:"listing all the notes",
    handler(){
        console.log(chalk.magenta.inverse("Listing all note:-"))
        notes.listNotes()
    }
})
yargs.command({
    command:"read",
    describe:"Reading a notes",
    builder:{
          title:{describe:'title of note to read',
              type:'string',
              demandOption:true
          }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()