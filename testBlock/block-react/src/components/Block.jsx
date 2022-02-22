import { React, useState, useEffect } from 'react';

function Block({ id, type, tag, content, children }) {

    const [onFocus, setOnFocus] = useState(false)
    const [onHover, setOnHover] = useState(false)
    const [contents, setContents] = useState(content)

    let Tag = tag

    document.getElementbyId(id).addEventListener('focus', () => {
        setOnFocus(true)
    })



    return (
        <Tag id={id} >{contents}</Tag>
    )
}

export default Block