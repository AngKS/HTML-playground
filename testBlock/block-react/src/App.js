import './App.css';
import { React, useState, useEffect } from 'react';

function App() {

  let initialBlock = {
    id: 0,
    type: 'search',
    tag: 'input',
    content: '',
    children: []
  }

  const [Blocks, setBlocks] = useState([initialBlock]);
  const [HTML, setHTML] = useState('');
  const [currBlock, setCurrBlock] = useState(Blocks[-1]);
  const [blockContent, setBlockContent] = useState('')

  let updateBlock = (id, content = null, type = null, tag = null) => {

    // find block by id
    let block = Blocks.find(block => block.id === id)
    // update content of block
    block.content = content
    // update type of block
    block.type = type
    // update tag of block
    block.tag = tag
    // update HTML
    return
  }

  let renderBlocks = (blocks) => {

    let html = HTML

    // check if blocks is empty
    if (blocks.length === 0) {
      // add initial block
      blocks.push(initialBlock)
    }
    blocks.map((block, index) => {
      // check if block is a paragraph
      if (block.tag === 'paragraph') {
        // add paragraph to html
        html += `<${block.tag}>${block.content}</${block.tag}>`
      }
      else if (block.tag === 'input') {
        // add input to html
        html += `<${block.tag} placeholder="${block.content}" type="${block.type}" id="${block.id}" value=""></${block.tag}>`
      }

      // check if block has children
      if (block.children.length > 0) {
        // add children to html
        html += renderBlocks(block.children)
      }

    }
    )

    // add html to div with id 'Blocks'
    document.getElementById('Blocks').innerHTML = html
    // shift focus to last item of the array
    document.getElementById(blocks[blocks.length - 1].id).focus()
    setCurrBlock(blocks[blocks.length - 1])
  }

  // check for keyboard input
  document.onkeydown = function (e) {
    // check if key is enter
    if (e.key === 'Enter') {
      e.preventDefault()
      // add new block
      setBlocks([...Blocks, {
        id: Blocks.length,
        type: 'search',
        tag: 'input',
        content: '',
        children: []
      }])
    }
    // if key is backspace and block is empty
    console.log(currBlock.content);
    if (e.key === 'Backspace' && currBlock.content === '') {
      console.log(currBlock.content)
      console.log('backspace')
      // remove block
      setBlocks(Blocks.slice(0, Blocks.length - 1))
    }

  }


  useEffect(() => {
    renderBlocks(Blocks)

  }, [Blocks])


  return (
    <div className="App container text-center">
      <h1>Block Editor</h1>
      <div className="" id="Blocks"></div>
      
    </div>
  );
}

export default App;
