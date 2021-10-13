import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();

    const transaction = [
        {id: 1, 
        type:'Income',
        category:'Salary',
        amount:'$0',
        date:'Wed Oct 13 2021'
        },
        {id: 2, 
        type:'Expense',
        category:'Pets',
        amount:'$70',
        date:'Wed Oct 14 2021'
        },
        {id: 3, 
        type:'Expense',
        category:'Car',
        amount:'$500',
        date:'Wed Oct 15 2021'
        }
        
    ]
    return (
        <MUIList dense={false} className = {classes.list}>
            {transaction.map((transaction) =>(
                <Slide direction="down" in mountonEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
            
        </MUIList>
    )
}

export default List
