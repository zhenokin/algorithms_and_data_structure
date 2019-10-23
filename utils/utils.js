export function generateRandomArray(length) {
    return new Array(length).fill('').map(() => Math.floor(Math.random() * length * 100));
}

export function non() {}
