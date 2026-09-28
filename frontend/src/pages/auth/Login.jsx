import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="brand">
            <span className="brand-mark">♡</span>
            <span>ByYourSide</span>
          </Link>

          <span className="auth-label">Welcome back</span>

          <h1>Sign in to your account</h1>

          <p>
            Continue where you left off and take the next step.
          </p>
        </div>

        <form className="auth-form">
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
            <div className="form-label-row">
              <label htmlFor="password">Password</label>

              <a href="#">Forgot password?</a>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="button button-primary auth-button">
            Sign in
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </main>
  )
}

export default Login