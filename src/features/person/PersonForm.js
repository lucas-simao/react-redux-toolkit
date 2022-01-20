import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { update as updatePerson } from './personSlice'
import './PersonForm.css'

export function PersonForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [cpf, setCPF] = useState('')

    const dispatch = useDispatch()

    function setValuesToStore() {
        if (!name || age === 0 || !cpf) return
        dispatch(
            updatePerson({
                name: name,
                age: age,
                cpf: cpf,
            })
        )
        clearInputs()
    }

    function clearInputs() {
        setName('')
        setAge()
        setCPF('')
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setValuesToStore()
        }}>
            <div>
                <h1>Formulário de cadastro</h1>
                <span>By redux</span>
            </div>
            <div>
                <label htmlFor="fullName">Nome completo</label>
                <input value={name} onInput={({target}) => {
                    setName(target.value)
                }} type='text' id="fullName" name='fullName' placeholder='Ex.: João Silva'/>
            </div>
            <div>
                <label htmlFor="age">Idade</label>
                <input value={age} onInput={({target}) => {
                    setAge(target.value)
                }} type='tel' id="age" name='age' placeholder='Ex.: 29'/>
            </div>
            <div>
                <label htmlFor="cpf">CPF</label>
                <input value={cpf} onInput={({target}) => {
                    setCPF(target.value)
                }} type='text' id="cpf" name='cpf' placeholder='Ex.: 000.000.000-00'/>
            </div>
            <button type='submit'>Salvar</button>
        </form>
    )
}

