
type Props = {
    amount: number;
    className?: string;
}

const FormattedPrice = ({amount, className}:Props) =>{
    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
       
        maximumFractionDigits: 2,
    })
    return(
        <span className={`text-base text-black ${className}`} >{formattedAmount}</span>
    )
}

export default FormattedPrice;