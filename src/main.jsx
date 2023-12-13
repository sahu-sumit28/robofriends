import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card';
import 'tachyons';

import {Robots} from './Robots';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Card id={Robots[0].id} name={Robots[0].name} email={Robots[0].email} username={Robots[0].username}/>
    <Card id={Robots[1].id} name={Robots[1].name} email={Robots[1].email} username={Robots[1].username}/>
    <Card id={Robots[2].id} name={Robots[2].name} email={Robots[2].email} username={Robots[2].username}/>
    <Card id={Robots[3].id} name={Robots[3].name} email={Robots[3].email} username={Robots[3].username}/>
    <Card id={Robots[4].id} name={Robots[4].name} email={Robots[4].email} username={Robots[4].username}/>
  </React.StrictMode>,
)

