import {useContext} from 'react'
import {NudgeBudgeExpenseTrackerContext} from './context/context';
import {incomeCategories, expenseCategories, resetCategories} from './constants/categories'


const useTransactions = (title) => {
    resetCategories();

    const {transactions} = useContext(NudgeBudgeExpenseTrackerContext);
    
    const transactionsPerType = transactions.filter((t) => t.type === title);
    
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount,0);

    const categories = title ==='Income' ? incomeCategories :expenseCategories;
    
    console.log({transactionsPerType, total, categories})

    transactionsPerType.forEach((t) =>{
        const category = categories.find((c) => c.type ===t.category)
        if(category) category.amount += t.amount
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets:[{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor:filteredCategories.map((c) => c.color)
        }],
        label: filteredCategories.map((c) => c.type)
    }
    return { filteredCategories, total, chartData}
}

export default useTransactions;
