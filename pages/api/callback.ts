import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function callbackRoute(req, res) {
    req.session.user = req.query.key;

    await req.session.save();

    if (process.env.NEXT_PUBLIC_MODE === "DEVELOPMENT") {
      res.redirect("http://localhost:3000");
    } else {
      res.redirect("https://wouldyoubot.gg");
    }
  },
  {
    cookieName: "wouldyou_user",
    password:
      "wouldyouweb-v3-03-2023-production-marcdev-12398649187956916593619589153-9054832097540723572537",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);

declare module "iron-session" {
  interface IronSessionData {
    user?: string | string[];
  }
}
