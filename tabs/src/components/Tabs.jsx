import { useState } from "react";
import "./Tabs.css"

const Tabs = () => {
  const [ActiveTab, setActiveTabs] = useState('');

  const content = [
    
      'Tab 1 Content is showing here.',
    
      'Tab 2 Content is showing here.',
    
      'Tab 3 Content is showing here.'
  ]

  return(
    <>
    <div id="tabs">
      <menu>
        <button onClick={(e) => setActiveTabs(0) }>Tab 1</button>
        <button onClick={(e) => setActiveTabs(1) }>Tab 2</button>
        <button onClick={(e) => setActiveTabs(2) }>Tab 3</button>
      </menu>
    </div>
    <div id="tab-content">
    {ActiveTab !== '' ? (
          <p>{content[ActiveTab]}</p>
        ) : ''}
    </div>
    </>
  )
}

export default Tabs;