import {
  CalendarLtrRegular,
  ClockRegular,
  LocationRegular,
  MailRegular,
  SparkleRegular,
} from '@fluentui/react-icons'

type EventDetail = {
  label: string
  value: string
  icon: typeof CalendarLtrRegular
}

const eventDetails: EventDetail[] = [
  { label: 'Date', value: 'Saturday, June 20, 2026', icon: CalendarLtrRegular },
  { label: 'Time', value: '2:00 to 5:00 in the afternoon', icon: ClockRegular },
  { label: 'Location', value: 'The Garden Room, 18 Willow Lane', icon: LocationRegular },
]

function App() {
  return (
    <main className="invitation-shell">
      <section className="hero-section" aria-labelledby="invitation-title">
        <div className="hero-copy">
          <p className="eyebrow"><SparkleRegular aria-hidden="true" /> A gathering for a growing family</p>
          <h1 id="invitation-title">A little wonder is on the way</h1>
          <p className="hero-intro">
            Please join us as we celebrate the parents-to-be and the sweet new chapter ahead.
          </p>
          <a className="primary-action" href="mailto:hello@example.com?subject=Baby%20shower%20RSVP">
            <MailRegular aria-hidden="true" /> RSVP with the hosts
          </a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span className="mark-label">the</span>
          <span className="mark-main">little<br />one</span>
          <span className="mark-label">celebration</span>
        </div>
      </section>

      <section className="details-section" aria-labelledby="details-heading">
        <div className="section-heading">
          <p className="eyebrow">Save the afternoon</p>
          <h2 id="details-heading">Come as you are.</h2>
          <p>Good company, garden air, and a few small surprises.</p>
        </div>
        <div className="details-grid">
          {eventDetails.map(({ label, value, icon: Icon }) => (
            <article className="detail-item" key={label}>
              <Icon className="detail-icon" aria-hidden="true" />
              <div>
                <p className="detail-label">{label}</p>
                <p className="detail-value">{value}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="note-section" aria-labelledby="note-heading">
        <div className="note-rule" aria-hidden="true" />
        <div>
          <p className="eyebrow">A note from the hosts</p>
          <h2 id="note-heading">We cannot wait to celebrate with you.</h2>
          <p className="host-note">
            Your presence is the best present. If you would like to bring something, a favorite book for the nursery would be lovely.
          </p>
          <p className="contact-line">Questions? <a href="mailto:hello@example.com">hello@example.com</a></p>
        </div>
      </section>

      <footer className="invitation-footer">With love, the soon-to-be three of us</footer>
    </main>
  )
}

export default App