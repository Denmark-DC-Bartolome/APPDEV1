import { useState } from "react";
import leafImage from "../../assets/leaf.jpg";
import googleIcon from "../../assets/google_icon.svg";
import facebookIcon from "../../assets/facebook_icon.svg";
import styles from "./Login.module.css";

const authContent = {
  login: {
    submitLabel: "Login",
    passwordPlaceholder: "Enter Password",
  },
  signup: {
    submitLabel: "SignUp",
    passwordPlaceholder: "Create Password",
  },
};

function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const content = authContent[mode];

  function changeMode(nextMode) {
    setMode(nextMode);
    setPassword("");
    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(`${mode === "login" ? "Login" : "Sign up"} isn't available yet. An authentication service hasn't been connected.`);
  }

  return (
    <main className={styles.page}>
      <section className={styles.loginCard} aria-label="Account access">
        <div className={styles.imagePanel}>
          <img className={styles.leafImage} src={leafImage} alt="" />
        </div>

        <div className={styles.contentPanel}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>
              <span>Hello<span className={styles.comma}>,</span></span>{" "}
              <span className={styles.greetingEnd}>Guyss!</span>
            </h1>
          </header>

          <div className={styles.tabs} role="group" aria-label="Authentication mode">
            {Object.keys(authContent).map((option) => (
              <button
                key={option}
                className={`${styles.tab} ${mode === option ? styles.activeTab : ""}`}
                type="button"
                aria-pressed={mode === option}
                onClick={() => changeMode(option)}
              >
                {authContent[option].submitLabel}
              </button>
            ))}
          </div>

          <form
            className={styles.form}
            aria-label={mode === "login" ? "Login form" : "Sign up form"}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputGroup}>
              <label className={styles.visuallyHidden} htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.visuallyHidden} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                placeholder={content.passwordPlaceholder}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <button className={styles.loginButton} type="submit">
              {content.submitLabel}
            </button>
          </form>

          <div className={styles.divider}>Or</div>

          <div className={styles.socialOptions}>
            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Google"
              onClick={() => setNotice("Google sign-in isn't available yet. An authentication provider hasn't been connected.")}
            >
              <img src={googleIcon} alt="" />
            </button>
            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Facebook"
              onClick={() => setNotice("Facebook sign-in isn't available yet. An authentication provider hasn't been connected.")}
            >
              <img src={facebookIcon} alt="" />
            </button>
          </div>

          <p className={styles.notice} role="status">{notice}</p>
        </div>
      </section>
    </main>
  );
}

export default Login;
