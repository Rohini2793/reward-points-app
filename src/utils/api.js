export const fetchTransactions = async () => {
    const response = await fetch('/data/mockTransactions.json');
    return await response.json();
  };
  