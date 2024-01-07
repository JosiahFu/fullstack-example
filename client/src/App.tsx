import { useState } from 'react';
import { Data1Format } from 'server';
import StringField from './components/StringField';
import IntField from './components/IntField';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = async () => {
    const data: Data1Format = { name, age }

    fetch('/data1', {body: JSON.stringify(data)})
  }

  return <main>
    <h1>Form</h1>
    <p>Name</p>
    <StringField value={name} onChange={setName} />
    <p>Age</p>
    <IntField value={age} onChange={setAge} />
    <button onClick={handleSubmit}>Submit</button>
  </main>
}

export default App;
