import {useState} from "react";
import "./Detail.css";


const Tag = () => {
    const [tagItem, setTagItem] = useState('')
    const [tagList, setTagList] = useState([])
  
    const onKeyPress = e => {
      if (e.target.value.length !== 0 && e.key === 'Enter') {
        submitTagItem()
      }
    }
  
    const submitTagItem = () => {
      let updatedTagList = [...tagList]
      updatedTagList.push(tagItem)
      setTagList(updatedTagList)
      setTagItem('')
    }
  
    const deleteTagItem = e => {
      const deleteTagItem = e.target.parentElement.firstChild.innerText
      const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
      setTagList(filteredTagList)
    }
  
    return (
      <div className = "wholebox">
        <div className ="tagbox">
          {tagList.map((tagItem, index) => {
            return (
              <div className="TagItem" key={index}>
                <p>{tagItem}</p>
                <button onClick={deleteTagItem}>X</button>
              </div>
            )
          })}
          <input
            type='text'
            placeholder='해시태그 입력 ex)#코딩, #어려워'
            tabIndex={2}
            onChange={e => setTagItem(e.target.value)}
            value={tagItem}
            onKeyPress={onKeyPress}
          />
        </div>
      </div>
    )
  }
  

  export default Tag;