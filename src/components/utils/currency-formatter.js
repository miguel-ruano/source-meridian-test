export default function currencyFormat(num, code = "$") {
    num = parseFloat(num)
    if (!isNaN(num))
        return `${code} ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
    else
        return `${code} ${0}`
}