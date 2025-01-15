import Link from "next/link"


export default function Navbar(){
    return(
        <div className="flex ">
            <h1 className="w-[250px] font-bold text-[32px] mx-[100px]  text-orange-700 ">CAR RENTAL</h1>
        <div className="flex gap-10 mx-[550px] ">
            <h1 className="font-bold text-lg"><Link href="/Home">Home</Link></h1>
            <h1 className="font-bold text-lg"><Link href="/Category">Category</Link></h1>
            <h1 className="font-bold text-lg"><Link href="/Details">Details</Link></h1>
            <h1 className="font-bold text-lg"><Link href="/Payment">Payment</Link></h1>
            <h1 className="font-bold text-lg"><Link href="/Dashboard">Dasboard</Link></h1>
        </div>
        
        </div>
    )
}