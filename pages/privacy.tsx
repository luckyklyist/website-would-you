import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Would You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <Navbar />

      <main className="imprint-main">
        <h1>
          Privacy <span>Policy</span>
        </h1>
        <div className="imprint-content">
          <h3>Data Usage</h3>
          <p>
            The bot may use stored data, as defined below, for different
            features including but not limited to: Custom Would You Messages,
            Guild IDs, Language Selection, Internal Settings. No usage of the
            data outside of the aforementioned cases will happen, and the data
            is not shared with any third-party site or service.
          </p>

          <h3>Stored Information</h3>
          <p>
            The bot may store the following information automatically when a
            command is run in a new Discord ServerServer name and icon may be
            used in log channels along with the users profile picture and
            username after voting. Said channels are publicly avalible to
            everyone. But no data is stored on our servers.Custom Would You
            Messages, Guild IDs, Language Selection, Internal SettingsNo other
            information outside of the above mentioned one will be stored.
          </p>

          <h3>Updating Data</h3>
          <p>
            The data may be updated when using specific commands. Updating data
            will require the input of an end user, and data that can be seen as
            sensitive, such as content of a message, may need to be stored when
            using certain commands.No other actions may update the stored
            information at any given time.
          </p>

          <h3>Temporarily stored Information</h3>
          <p>
            The Bot may store information temporarily in cache for a period of a
            maximum of 30 days. After this time period, the cached information
            will be dropped and only be re-added when required.Data may be
            dropped from cache pre-maturely through actions such as removing the
            bot from the Server or the bot restarting.
          </p>

          <h3>Removal of Data</h3>
          <p>
            If your want to get your data removed dm the founders
            ForGetFulSkyBro#9999 and Dominik#5555 to get all your data wiped.
          </p>

          <h3>Manual removal</h3>
          <p>
            Manual removal of the data can be requested through email at
            dominik@wouldyoubot.com or as mentioned above a dm to the founders.
            For security reasons, we will ask you to provide us with proof of
            ownership of the server. It is only the server&apos;s owner that may
            request manual removal and requesting it will result in the bot
            being removed from the server!
          </p>
          <br />
          <br />
          <br />
        </div>
      </main>

      <Footer />
    </>
  );
}
