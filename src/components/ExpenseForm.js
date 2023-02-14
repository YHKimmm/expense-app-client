import { React, useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { AddExpense, UpdateExpense, DeleteExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';
const ExpenseForm = ({ expense, setIsEditing }) => {
    const dispatch = useDispatch();
    const descriptions = ['Groceries', 'Gas', 'Rent', 'Car Payment', 'Car Insurance']
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isNewExpense) {
            AddExpense(dispatch, { description: description, amount: amount })
        } else {
            UpdateExpense(dispatch, { id: expense.id, description: description, amount: amount })
            setIsEditing(false);
        }
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        DeleteExpense(dispatch, { id: expense.id, description: description, amount: amount })
        setIsEditing(false);
    }

    useEffect(() => {
        if (expense) {
            setIsNewExpense(false);
            setAmount(expense.amount);
            setDescription(expense.description);
        } else {
            setIsNewExpense(true);
        }
    }, [expense])

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='select'
                            onChange={e => setDescription(e.target.value)} type="text" placeholder="Enter description">
                            {descriptions.map((description, index) => <option key={index}>{description}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control onChange={e => setAmount(e.target.value)} type="number" step='0.01' placeholder={amount} />
                    </Form.Group>
                </Col>
            </Row>
            {isNewExpense ? <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                Add
            </Button> :
                <div>
                    <Button style={{ marginRight: '2px' }} variant="success" type="submit">
                        Save
                    </Button>
                    <Button style={{ marginRight: '2px' }} variant="danger" onClick={deleteHandler}>
                        Delete
                    </Button>
                    <Button style={{ marginRight: '2px' }} variant='default' onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>}
        </Form>
    )
}

export default ExpenseForm