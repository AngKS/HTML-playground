import './App.css';
import { React, useState, useEffect } from 'react';
import Block from './components/Block'

function App() {

  const [Blocks, setBlocks] = useState([]);

  let initialBlock = {
    id: 0,
    type: 'search',
    tag: 'input',
    content: '',
    children: []
  }

  let renderBlocks = () => {
    // check if there are any blocks
    if (Blocks.length > 0) {
      return Blocks.map((block, index) => {
        return <Block id={block.id} type={block.type} tag={block.tag} content={block.content} children={block.children} />

      })
    } else {
      return <Block id={initialBlock.id} type={initialBlock.type} tag={initialBlock.tag} content={initialBlock.content} children={initialBlock.children} />
    }
  }

  useEffect(() => {
    //  render blocks on load
    renderBlocks()
  }, [])



  return (
    <div className="App container text-center">
      <h1>Block Editor</h1>
      <div className="" id="Blocks"></div>

    </div>
  );
}

export default App;
