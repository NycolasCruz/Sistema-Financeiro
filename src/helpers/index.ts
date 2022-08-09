export function getCurrentMonth() {
    let currentDate =  new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
}