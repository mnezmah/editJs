import { useState } from 'react'
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list"
import './App.css'

const App=()=> {

    const saveData = () =>{
        editor.save().then((data)=>{
            console.log({data})
        }).catch(err => {
            console.log({err})
        })
    }

    const editor = new EditorJS({
    holderId: 'editorjs',
    tools: {
        header:{
            class: Header,
            inlineToolbar:  ['link']
        },
        list: {
            class: List,
            inlineToolbar: [
                'link', 'bold'
            ]
        }
    }
})

  return (
    <div className='App'>
     <h1>Editor js</h1>
        <div id='editorjs'></div>
        <button onClick={saveData}>create article</button>
    </div>
  )
}

export default App
