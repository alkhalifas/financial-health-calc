export default function calculateFinancialScore(income, savings, homeOwnership, loans, _401k, investments) {
    const MAX_SCORE = 100;

    // Define weightage for each criterion
    const incomeWeight = 0.3;
    const savingsWeight = 0.2;
    const homeOwnershipWeight = 0.1;
    const loansWeight = 0.1;
    const _401kWeight = 0.1;
    const investmentsWeight = 0.2;

    // Calculate individual scores for each criterion
    const incomeScore = Math.min(income / 100000, 1) * incomeWeight * MAX_SCORE;
    const savingsScore = Math.min(savings / 50000, 1) * savingsWeight * MAX_SCORE;
    const homeOwnershipScore = homeOwnership * homeOwnershipWeight * MAX_SCORE;
    const loansScore = (1 - Math.min(loans / 50000, 1)) * loansWeight * MAX_SCORE;
    const _401kScore = Math.min(_401k / 50000, 1) * _401kWeight * MAX_SCORE;
    const investmentsScore = Math.min(investments / 50000, 1) * investmentsWeight * MAX_SCORE;

    // Calculate total financial score
    const totalScore = incomeScore + savingsScore + homeOwnershipScore + loansScore + _401kScore + investmentsScore;
    return Math.floor(totalScore);
}