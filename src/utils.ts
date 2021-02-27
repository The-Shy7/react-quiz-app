// randomizes order of answers for a question 
// to avoid having the correct answer always 
// being in the same position
export const shuffleArray = (arr: any[]) => 
    [...arr].sort(() => Math.random() - 0.5);