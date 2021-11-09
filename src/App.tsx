import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}


const LIST_DATA =
[
    {
      name: 'Bruce Willis',
      url: 'https://cdn.vox-cdn.com/thumbor/Ea7WG0WB_DlOWNknjuiEZZt_2CE=/0x0:2000x1000/920x613/filters:focal(711x131:1031x451):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59057741/Thanos_MCU.0.jpg',
      age: 42,
      note: 'purple dude; has six senses and six infinity stones',
    },
    {
      name: 'Mark Twain',
      url: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_2248,w_3340,x_0,y_0/v1554736973/shape/mentalfloss/539787-gettyimages-2504374.jpg?itok=B669Wm3H',
      age: 111,
      note: 'Mississippi',
    },
    {
      name: 'Drake',
      url: 'https://cdn.mos.cms.futurecdn.net/rf6WRbFBBk4RALfywgywUY-320-80.jpg',
      age: 35,
      note: 'rapper for people who like pop',
    }
  ];


function App() {
  
  const [people, setPeople] = useState<IState["people"]>(
    LIST_DATA
  )


  return (
    <div className="App">
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
