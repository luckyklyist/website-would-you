const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/Logo.png" alt="Would You Logo" draggable={false} />
          <p>Would You</p>
        </div>
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">Commands</div>
          <div className="nav-item">Vote</div>
          <div className="nav-item">Support</div>
        </div>
      </div>
      <div className="nav-right">
        <button className="wy-button primary">Invite</button>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
