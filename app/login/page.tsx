"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { useState } from "react";
import SignIn from "@/components/sign-in";
export default function App() {
  const [action, setAction] = useState("");
  function handleSubmit(payload: any) {
    console.log(payload);
  }
  return (
    <Card isBlurred className="">
      <CardHeader className="w-full flex flex-col font-bold text-4xl mt-5">
        <p>Login</p>
      </CardHeader>
      <SignIn></SignIn>
      <CardBody>
        <Form
          className="w-80 flex flex-col gap-4 p-5"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
            handleSubmit(data);
          }}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <div className="flex gap-2 mt-8">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}
