function DisplayFactors(num : number): void 
{
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

DisplayFactors(20);
