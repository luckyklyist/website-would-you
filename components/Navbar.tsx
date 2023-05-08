import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/user";

interface NavbarProps {
  sessionKey: string;
}

const Navbar = ({ sessionKey }: NavbarProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const lineOneControls = useAnimationControls();
  const lineTwoControls = useAnimationControls();
  const lineThreeControls = useAnimationControls();
  const menuControls = useAnimationControls();
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  });

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/v1/session/user", {
        sessionKey,
      })
      .then(function response(response) {
        setUser(response.data.session.user);
      });
  }, []);

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
    <nav className={`${navActive ? "active" : ""}`}>
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
          <Link href="/invite" target={"popup"} onClick={() => {
            window.open("/invite", '_blank', 'width=500,height=700,screenX=160,screenY=100');
            return false;
          }
          }>Invite</Link>
        </div>
      </div>
      <div className="nav-right">
        {user.username !== undefined ? (
          <div className="nav-user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#25314C"
                d="M12 17a.997.997 0 0 1-.707-.293l-7-7a.999.999 0 1 1 1.414-1.414L12 14.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 12 17Z"
              />
            </svg>
            <p>{user?.username}</p>
            <img
              src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=64`}
              width={45}
              height={45}
              alt=""
              draggable={false}
            />
          </div>
        ) : (
          <Link
            href={
              process.env.NEXT_PUBLIC_MODE === "DEVELOPMENT"
                ? "http://localhost:3001/api/v1/auth/login"
                : "https://api.wouldyoubot.gg/api/v1/auth/login"
            }
          >
            <button className="wy-button primary">Login</button>
          </Link>
        )}
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
        <hr />
      </div>

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
          <Link href="/invite">Invite</Link>
          <Link
            href={
              process.env.NEXT_PUBLIC_MODE === "DEVELOPMENT"
                ? "http://localhost:3001/api/v1/auth/login"
                : "https://api.wouldyoubot.gg/api/v1/auth/login"
            }
            target={"_blank"}
          >
            <button className="wy-button primary">Login</button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
