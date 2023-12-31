import React, { useRef } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helpers/axiosHelper";

const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Both input field must be filled");
    }

    /// axios

    const { status, message, jwts } = await loginUser({ email, password });
    toast[status](message);

    if (status === "success") {
      const { refreshJWT, accessJWT } = jwts;

      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refresJWT", refreshJWT);
    }

    //fetch user info and redirect to dashboard
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
      passRef: emailRef,
    },

    {
      label: "Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
      passRef: passwordRef,
    },
  ];
  return (
    <div>
      <MainLayout>
        <div className="p-3 text-dark">
          <Form
            onSubmit={handleOnSubmit}
            className="form-center form border shadow-lg p-4 rounded mt-5"
          >
            <h2>Welcome Admin login area </h2>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <div className="d-grid mt-2">
              <Button variant="primary" type="submit">
                {" "}
                Login
              </Button>
            </div>
          </Form>
        </div>
      </MainLayout>
    </div>
  );
};

export default LogIn;
