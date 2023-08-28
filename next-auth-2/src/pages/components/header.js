import Link from "next/link"
export default function Header(){
    return (
<div>
  <h1>Next Authentication</h1> <div>
    <button className="shadow-md py-2 px-6 border-[1px] border-black rounded-full border-black font-semibold hover:bg-[#efefef]">Profile</button>
    <Link className="shadow-md py-2 px-6 border-[1px] text-white rounded-full font-semibold hover:bg-[#37f] bg-indigo-600" href={"/auth/signin"}>Signin</Link>
    <button className="shadow-md py-2 px-6 border-[1px]  rounded-full font-semibold border-black ">Logout</button>
  </div>
</div>
)
}