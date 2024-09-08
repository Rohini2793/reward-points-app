import React, { useState, useEffect } from 'react';
// Utility function for points calculation
const calculateRewardPoints = (amount) => {
    let points = 0;
    if (amount > 100) {
        points += (amount - 100) * 2; // 2 points for every dollar over $100
        amount = 100;
    }
    if (amount > 50) {
        points += (amount - 50) * 1; // 1 point for every dollar between $50 and $100
    }
    return points;
};

// Simulate API call to fetch data
const fetchTransactionData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { customerId: 1, date: '2024-07-01', amount: 120 },
                { customerId: 1, date: '2024-08-01', amount: 80 },
                { customerId: 2, date: '2024-07-15', amount: 200 },
                { customerId: 2, date: '2024-08-20', amount: 75 },
            ]);
        }, 1000);
    });
};

const RewardPoints = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTransactionData();
                setTransactions(data);
            } catch (err) {
                setError('Error fetching transaction data');
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    // Aggregate points by customer and month
    const aggregatePoints = (transactions) => {
        const pointsByCustomer = {};

        transactions.forEach((transaction) => {
            const { customerId, amount, date } = transaction;
            const month = new Date(date).toLocaleString('default', { month: 'long' });

            if (!pointsByCustomer[customerId]) {
                pointsByCustomer[customerId] = {};
            }
            if (!pointsByCustomer[customerId][month]) {
                pointsByCustomer[customerId][month] = 0;
            }

            pointsByCustomer[customerId][month] += calculateRewardPoints(amount);
        });

        return pointsByCustomer;
    };

    if (loading) {
        return <div>Loading transactions...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const pointsByCustomer = aggregatePoints(transactions);

    return (
        <div>
            <h1>Reward Points Summary</h1>
            {Object.keys(pointsByCustomer).map((customerId) => (
                <div key={customerId}>
                    <h2>Customer {customerId}</h2>
                    {Object.keys(pointsByCustomer[customerId]).map((month) => (
                        <p key={month}>
                            {month}: {pointsByCustomer[customerId][month]} points
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RewardPoints;
