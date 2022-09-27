export const add = (numbers: number[]) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum;
};