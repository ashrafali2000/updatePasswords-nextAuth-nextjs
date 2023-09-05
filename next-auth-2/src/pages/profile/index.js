import { getSession } from "next-auth/react";
import Link from "next/link";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req: req });
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: {
      email: session.user.email,
    },
  };
}

export default function Profile({email}) {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold"> {email} profile page</h1>
      <h1>Hi {email}</h1>
      <h2>Are You Change Your Password</h2>
      <Link href={"./auth/updatePassword"} className=" rounded-full bg-indigo-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >update password</Link>
    </div>
  );
}