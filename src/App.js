import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";


function App() {

    const [parameters, setParameters] = useState({})

    const getParameters = (params) => {
      setParameters(params)
    }

    return (
        <div className="App">
            <Form getParameters={getParameters}/>
            <Users parameters={parameters}/>
        </div>
    );
}

export default App;
