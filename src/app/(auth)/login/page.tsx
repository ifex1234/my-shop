import React from "react";
import style from "@/lib/styles/login.module.scss";

function Page() {
  return (
    <div className={`${style.container}`}>
      <h1> Welcome,</h1>
      <p>
        Type your e-mail or phone number to log in or create a Jumia account.
      </p>
    </div>
  );
}

export default Page;
