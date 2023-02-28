import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/Logo.png" alt="Would You Logo" draggable={false} />
          <p>Would You</p>
        </div>
        <div className="nav-items">
          <Link href="/">Home</Link>
          <Link href="/commands">Commands</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/discord">Support</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link href="/invite"><button className="wy-button primary">Invite</button></Link>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
