import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="brand">
            <span className="brand-mark">♡</span>
            <span>ByYourSide</span>
          </Link>

          <span className="auth-label">Get started</span>

          <h1>Create your account</h1>

          <p>
            Create an account to keep track of your check-ins and guidance.
          </p>
        </div>

        <form className="auth-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm password</label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="button button-primary auth-button">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  )
}

export default Register