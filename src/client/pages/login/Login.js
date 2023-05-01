import React from "react";
import loginStyle from "./index.module.scss";
import { FaEye } from "react-icons/fa";

export default function Login() {
  return (
    <div className={`${loginStyle.container}`}>
      <article>
        <div>
          <div className={loginStyle.title}>Sign In to Recharge Direct</div>
          <div className={loginStyle.text}>
            if you don’t an account you can <a href="#6">Register here!</a>
          </div>
        </div>
        <img src="/client/Character 1.svg" alt="" className={loginStyle.img} />
        <form>
          <div className={loginStyle.inputContainer}>
            <input type="email" placeholder="Enter email" />
            <img src="/client/X.svg" alt="" className={loginStyle.clearIcon} />
          </div>
          <div className={loginStyle.inputContainer}>
            <input type="password" placeholder="Enter password" />
            <FaEye className={loginStyle.clearIcon} />
          </div>
          <div className={loginStyle.title}>Recover Password ?</div>

          <button>sign in</button>
        </form>
        <div className={loginStyle.pink}></div>
        <div className={loginStyle.blue}></div>
      </article>
    </div>
  );
}
