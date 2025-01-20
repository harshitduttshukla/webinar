
import harshit from '../assets/harshit2.jpg'

interface CardProps {
    img : string;
    name : string;
    number : number;
    email : string;
    address : string
}

function Card({img,name,number,email,address}:CardProps) {
  return (
    <div className='h-96 rounded-2xl shadow  md:col-span-2  shadow-lg  col-span-11 hidden md:block'>
        
    <div className= "h-96 w-72 bg-white rounded-2xl shadow-sm shadow-black">




        <img src={img} alt="" className="mt-11 ml-16 h-24 rounded-2xl" />
        <div className='mt-8 ml-14 text-black font-bold text-2xl'>{name}</div>
        <div className='ml-8 mt-4 flex  text-'>{email}</div>
        <div className='mt-1 flex justify-center'>{number}</div>
        <div className='mt-4 flex justify-center'>{address} </div>
    </div>
    </div>
  )
}

export default Card