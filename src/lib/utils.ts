import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatprice(
  price:number | string,
  options:{
    currency?: 'INR' | 'USD' | 'EUR',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
){
  const {currency = 'INR', notation='compact'} = options
  const numericprice = typeof price === 'string'? parseFloat(price):price
  return new Intl.NumberFormat('en-US',{
    style:"currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericprice)

}