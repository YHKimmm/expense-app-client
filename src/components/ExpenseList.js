import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetExpenses } from '../services/expenses';
import { Row, Col, Button } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses)

    useEffect(() => {
        GetExpenses(dispatch)
    }, [])

    return (
        <>
            <div style={{ marginBottom: '1rem' }}>
                {expenses.map(expense => <ListRow key={expense.id} expense={expense} />)}
            </div>
        </>
    )
}

const ListRow = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <>
            {isEditing ?
                <ExpenseForm expense={expense} setIsEditing={setIsEditing} /> :
                <ExpenseRow expense={expense} isEditing={isEditing} setIsEditing={setIsEditing} />}
        </>
    )
}


const ExpenseRow = ({ expense, setIsEditing, isEditing }) => {
    return (
        <>
            <div>
                <Row>
                    <Col>{expense.description}</Col>
                    <Col>${expense.amount}</Col>
                    <Col><Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button></Col>
                </Row>
                <hr />
            </div>
        </>
    )
}

export default ExpenseList