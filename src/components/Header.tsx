export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">M</div>
          <span>CA MONK</span>
        </div>
        <nav className="nav">
          <a href="#tools">Tools</a>
          <a href="#practice">Practice</a>
          <a href="#events">Events</a>
          <a href="#jobs">Job Board</a>
          <a href="#points">Points</a>
        </nav>
        <button className="profile-btn">Profile</button>
      </div>
    </header>
  )
}
