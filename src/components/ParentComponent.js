import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const[age, setAge] = useState(25)
    const[salary, setSalary] = useState(5000)

    //call back  hook will return a memorized version of the callback function that
    //only changes if one of the dependencies has changed 
    const incrementAge = useCallback(() =>{
        setAge(age +1)
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000)
    },[salary])

    return (
        <div>
            <Title />
            <Count text = "Age" count = {age} />
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text = "Salaray" count = {salary}></Count>
            <Button handleClick = {incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
