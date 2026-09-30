import { useState } from 'react'
import { Link } from 'react-router-dom'

function Assessment() {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Assessment text:', text)
  }

  return (
    <main className="assessment-page">
      <section className="assessment-header">
        <span className="auth-label">Check-in</span>

        <h1>What have you noticed?</h1>

        <p>
          Share what you have observed about someone you care about.
          You can describe changes in their behaviour, communication,
          emotions, or daily activities.
        </p>
      </section>

      <section className="assessment-card">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="observations">
              Tell us what you have noticed
            </label>

            <textarea
              id="observations"
              name="observations"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="For example: They have become more isolated recently and seem less interested in things they usually enjoy..."
              rows="8"
              required
            />
          </div>

          <div className="assessment-note">
            <span>ⓘ</span>
            <p>
              Share observations in your own words. ByYourSide provides
              awareness and supportive guidance based on the information
              provided. It is not a medical diagnosis.
            </p>
          </div>

          <div className="assessment-actions">
            <Link to="/dashboard" className="button button-secondary">
              Back
            </Link>

            <button
              type="submit"
              className="button button-primary"
              disabled={!text.trim()}
            >
              Continue
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Assessment