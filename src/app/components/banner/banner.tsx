import Image from "next/image"
export default function Banner(){
    return(
        <div className="flex justify-center place-items-center space-x-2 w-full h-12 bg-slate-800">
            <Image
                src="/d-truck1.png"
                width={24}
                height={24}
                alt="delivery"
                className="ml-4 " />
        <p className="font-size:14  text-slate-200">
                Free delivery on all orders over £50 with code easter checkout
            </p>
            </div>
    );
}