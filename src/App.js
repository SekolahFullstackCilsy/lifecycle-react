import { useEffect, useState, Fragment } from 'react'
import { Person, Header } from './components/Person'
import axios from 'axios'

function App() {
  const initialPersons = [
    {
      id: '1',
      body: 'Saefulloh',
      title: 'Saefulloh',
      userId: '25'
    },
    {
      id: '1',
      body: 'Saefulloh',
      title: 'Saefulloh',
      userId: '25'
    }
  ]

  const getData = async (setPersons) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPersons(res.data)
    return res.data
  }

  const [persons, setPersons] = useState(initialPersons)

  const initialRegiser = {
    name: '',
    password: '',
    email: ''
  }

  const [fieldValues, setFieldValues] = useState(initialRegiser)
  console.log(fieldValues)

  useEffect(() => {
    console.log('akan dijalankan setelah render')
    getData(setPersons)
  }, [])

  useEffect(() => {
    console.log('Akan dijalankan setelah komponen re-render')
  }, [persons])


  const onChangeInput = (e) => {
    const updateFieldValue = {
      ...fieldValues,
      [e.target.name]: e.target.value
    }
    
    setFieldValues(updateFieldValue)
  }

  return (
    <Fragment>
      {
        persons.map(person => (
          <Person key={person.id} person={person} />
        ))
      }

      <button onClick={() => {
        setPersons([...persons, {
          id: '3',
          name: 'Raka',
          age: '20'
        }])
      }}>Update Person</button>

      <button onClick={() => {
        const index = persons.findIndex(person => person.id === '1')
        let updatedPersons = persons

        if (index >= 0) {
          updatedPersons = updatedPersons.splice(index - 1, 1)
        }

        setPersons(updatedPersons)
      }}>
        Delete Saefulloh
      </button>

      <input type="text" name="email" value={fieldValues.email} onChange={onChangeInput} />
      <input type="text" name="name" value={fieldValues.name} onChange={onChangeInput} />
      <input type="password" name="password" value={fieldValues.password} onChange={onChangeInput} />
    </Fragment>
  );
}

export default App;
