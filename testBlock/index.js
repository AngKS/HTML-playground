
let initialBlock = {
    id: 0,
    type: 'input',
    content: 'type something to begin...',
    children: [],
}

let Blocks = [initialBlock]


let mainBody = document.getElementById("root")

function addBlock() {

    let newBlock = {
        id: Blocks.length,
        type: 'paragraph',
        content: '',
        children: [],
    }

    // add block to start of array
    Blocks.unshift(newBlock)

    renderBlocks(Blocks)
}

// listen to keydown events
document.addEventListener('keydown', (event) => {
    // if the key is enter
    if (event.keyCode === 13) {
        // add a new block
        addBlock()
    }
})




// function that will render the blocks
function renderBlocks(blocks) {
    console.log(blocks)
    // if main body have content, render blocks after
    if (mainBody.hasChildNodes()) {
        // remove all children
        while (mainBody.firstChild) {
            mainBody.removeChild(mainBody.firstChild)
        }
    }
    let html = ''
    //  check if the blocks array is empty
    if (blocks.length === 0) {
        // if it is empty, render the initial block
        html += `<input type="text" placeholder="${initialBlock.content}" id="block-${initialBlock.id} onChange='(e) => updateContent(blockID, e)' ">`
    } else {
        blocks.forEach(block => {
            
            // check what type of block it is
            if (block.type === 'paragraph') {
                html += `<p id='block-${block.id}'>${block.content}</p>`
            }
            else if (block.type === 'header') {
                html += `<h1 id='block-${block.id}'>${block.content}</h1>`
            }
            else if (block.type === 'list') {
                html += `<ul id='block-${block.id}'>`
                block.children.forEach(child => {
                    html += `<li>${child.content}</li>`
                })
                html += `</ul>`
            }
            else if (block.type === 'input') {
                html += `<input type="text" placeholder="${block.content}" id="block-${block.id}">`
            }

        })
        mainBody.innerHTML = html
    }

}



renderBlocks(Blocks)



// mainBody.innerHTML = "Hello World"