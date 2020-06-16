import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

//Use costume hook - useDocumentTitle
function DocTitleTwo() {
    const [count, setCount] = useState(0)

useDocumentTitle(count)

    return (
        <div>
            <button onClick = {()=>setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
