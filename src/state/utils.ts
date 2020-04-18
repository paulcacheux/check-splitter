const bankersRounding = (num: number): number => {
    const n = +num.toFixed(8); // Avoid rounding errors
    const i = Math.floor(n),
        f = n - i;
    const e = 1e-8; // Allow for rounding errors in f
    const r = f > 0.5 - e && f < 0.5 + e ? (i % 2 === 0 ? i : i + 1) : Math.round(n);
    return r;
};

export const convertToCents = (value: number): number => {
    const cents = value * 100;
    return bankersRounding(cents);
};
