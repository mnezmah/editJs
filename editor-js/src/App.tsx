import { useState } from 'react'
import EditorJS from "@editorjs/editorjs";
import './App.css'

const App=()=> {
const editor = new EditorJS({})

  return (
    <div className='App'>
     <h1>Editor js</h1>
        <div id='editorjs'></div>
        <button>create article</button>
    </div>
  )
}

export default App
