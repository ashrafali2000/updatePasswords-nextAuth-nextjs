import Form from "../../components/form";

export default function UpdateUser() {

  const onUpdateUser = async (email, password) => {
    const res = await fetch("/api/auth/signup", {
      method: "PATCH",
      body: JSON.stringify({ email, password }),
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
      <Form onFormSubmit={onSignUp}  updatePassword/>
    </div>
  );
}