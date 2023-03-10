import Link from "next/link";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const lineOneControls = useAnimationControls();
  const lineTwoControls = useAnimationControls();
  const lineThreeControls = useAnimationControls();
  const menuControls = useAnimationControls();

  function toggleMobileMenu() {
    if (mobileMenu) {
      lineOneControls.start(
        { rotate: "0deg" },
        { duration: 0.3, type: "spring" }
      );
      lineTwoControls.start(
        { opacity: 1, transform: "translateX(0)" },
        { duration: 0.12 }
      );
      lineThreeControls.start(
        { rotate: "0deg" },
        { duration: 0.3, type: "spring" }
      );
      menuControls.start(
        { opacity: 0.5, left: "100vw", pointerEvents: "none" },
        { duration: 0.21, type: "easeInOut" }
      );

      setMobileMenu(false);
    } else {
      lineOneControls.start(
        { rotate: "45deg" },
        { duration: 0.3, type: "spring" }
      );
      lineTwoControls.start(
        { opacity: 0, transform: "translateX(1)" },
        { duration: 0.12 }
      );
      lineThreeControls.start(
        { rotate: "-45deg" },
        { duration: 0.3, type: "spring" }
      );
      menuControls.start(
        { opacity: 1, left: "0", pointerEvents: "all" },
        { duration: 0.21, type: "easeInOut" }
      );

      setMobileMenu(true);
    }
  }

  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <div className="logo">
            <img src="/Logo.png" alt="Would You Logo" draggable={false} />
            <p>Would You</p>
          </div>
        </Link>
        <div className="nav-items">
          <Link href="/">Home</Link>
          <Link href="/commands">Commands</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/discord">Support</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link href="/invite" target={"_blank"}>
          <button className="wy-button primary">Invite</button>
        </Link>
        <div className="menu-icon" onClick={() => toggleMobileMenu()}>
          <motion.span
            className="menu-line line-1"
            initial={{ rotate: "0deg" }}
            animate={lineOneControls}
          ></motion.span>
          <motion.span
            className="menu-line line-2"
            initial={{ opacity: 1, transform: "translateX(0)" }}
            animate={lineTwoControls}
          ></motion.span>
          <motion.span
            className="menu-line line-3"
            initial={{ rotate: "0deg" }}
            animate={lineThreeControls}
          ></motion.span>
        </div>
      </div>
      <hr />

      <motion.div
        className="nav-mobile-menu"
        transition={{ duration: 0.21, type: "easeInOut" }}
        initial={{ opacity: 0.5, left: "100vw", pointerEvents: "none" }}
        animate={menuControls}
      >
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/commands">Commands</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/discord">Support</Link>
          <Link href="/invite" target={"_blank"}>
            <button className="wy-button primary">Invite</button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
