import React from 'react';
import { useSelector } from 'react-redux';
import './PersonCard.css'

export function PersonCard() {
    const personName = useSelector((state) => state.person.name)
    const personAge = useSelector((state) => state.person.age)
    const personCPF = useSelector((state) => state.person.cpf)

    return (
        <>
            { (personName && personAge > 0 && personCPF) && 
                (
                    <div className='personCard'>
                        <h3>Cartão de apresentação</h3>
                        <p>Nome: {personName}</p>
                        <p>Idade: {personAge}</p>
                        <p>CPF: {personCPF}</p>
                    </div>
                )
            }
        </>
    )
}