import layout from "../login/Login.module.css";
import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup() {
  return (
    <div className={layout.login}>
      <section className={layout.left}>
        <h1 className={layout.tagline}>
          Need webdesign
          <br />
          for your business?
          <br />
          <strong>Design Spacee</strong>
          <br />
          will help you.
        </h1>

        <img
          className={layout.logo}
          src={logo}
          alt="Design Spacee logo"
        />

        <p className={layout.link}>
          figma.com/@designspacee
        </p>
      </section>

      <section className={layout.right}>
        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <h2>Create Account</h2>

          <div className={styles.socialOptions}>
            <button type="button" className={styles.socialButton}>
              Sign up with Google
            </button>

            <button type="button" className={styles.socialButton}>
              Sign up with Facebook
            </button>
          </div>

          <div className={styles.divider}>OR</div>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            aria-label="Full Name"
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autoComplete="new-password"
            required
          />

          <button type="submit" className={styles.createButton}>
            Create Account
          </button>

          <p className={styles.loginPrompt}>
            Already have an account? <a href="#login">Login</a>
          </p>
        </form>
      </section>
    </div>
  );
}