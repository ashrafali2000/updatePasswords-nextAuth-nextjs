import Form from "../../components/form";
import { getSession, useSession } from "next-auth/react";

export default function UpdateUser() {
  const { data: session } = useSession();

  const onUpdateUser = async (oldPassword, newPassword) => {
    const userEmail = session.user.email;
    const response = await fetch("/api/auth/updatePassword", {
      method: "PATCH",
      body: JSON.stringify({ oldPassword, newPassword, userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data.message);
      return;
    }
    alert("Update Password successful");
  };

  return (
    <div className="flex justify-center items-center">
      <Form onFormSubmit={onUpdateUser} updatePassword />
    </div>
  );
}

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
      // email: session.user.email,
    },
  };
}