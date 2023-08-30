import Form from "../../components/form";

export default function UpdateUser() {

  const onUpdateUser = async ( password) => {
    const res = await fetch("/api/auth/updatePassword", {
      method: "PATCH",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
      return;
    }
    alert("signup successful");
  };

  return (
    <div className="flex justify-center items-center">
      <Form onFormSubmit={onUpdateUser}  updatePassword/>
    </div>
  );
}