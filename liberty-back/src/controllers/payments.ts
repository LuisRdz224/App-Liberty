import debtsByState from "../data/data.json";

// Controller to get debts by state
const getDebtsByState = async (req, res) => {
    const { state } = req.params;
    const debts = debtsByState[state.toLowerCase()];

    if (!debts) {
        return res.status(404).json({ error: 'Estado no encontrado' });
    }

    // Calculate debts by total, on time and over due
    const totalDebt = debts.data.reduce((total, debt) => total + debt.amount, 0);
    const onTimeDebt = debts.data
        .filter(debt => debt.status === 'on time')
        .reduce((total, debt) => total + debt.amount, 0);
    const overdueDebt = debts.data
        .filter(debt => debt.status === 'overdue')
        .reduce((total, debt) => total + debt.amount, 0);

    res.json({
        debts: {
            totalDebt,
            onTimeDebt,
            overdueDebt,
            data: debts.data
        },
    });
};

module.exports = {
    getDebtsByState,
};