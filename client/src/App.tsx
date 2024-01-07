import { useState } from 'react';
import { Data1Format } from 'server';
import StringField from './components/StringField';
import IntField from './components/IntField';

// Reusable function to send JSON to a url
function postJson(url: string, data: unknown) {
    return fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
}

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit = async () => {
        const data: Data1Format = { name, age };

        try {
            const result = await postJson('/data1', data);
            if (!result.ok) throw new Error();
            alert('Data submitted');
        } catch (e) {
            alert(`Error occurred!\n${e}`);
        }
    };

    return (
        <main>
            <h1>Form</h1>
            <p>Name</p>
            <StringField value={name} onChange={setName} />
            <p>Age</p>
            <IntField value={age} onChange={setAge} />
            <button onClick={handleSubmit}>Submit</button>
        </main>
    );
}

export default App;
