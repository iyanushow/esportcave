import React from "react";
import Accordion from "../atoms/Accordion/Accordion";
import styles from "./faq.module.css";

const faqs = [
  {
    title: "Are players on eSportcave real or computer BOT?",
    content: `Players on eSportcave are real and play in real-time. Like you, the system randomly matches you with other players wagering the same entry fee as you.`,
  },
  {
    title: "Can I win a real cash prize on eSportcave?",
    content: `Oh Yes! By wagering your game, the winner takes all at the end of a challenge, and winners can withdraw their winnings.`,
  },
  {
    title: "Is eSportcave a gambling app?",
    content: `No. eSportcave is not a gambling app, and games on eSportcave are based on skills, not games of chance.`,
  },
  {
    title: "How do I withdraw my winnings?",
    content: `You can use the “Cashout” button on your homepage to request a withdrawal of your winnings. Withdrawals are processed instantly, but you might sometimes experience delays depending on your bank.`,
  },

  {
    title: "How can I download the app?",
    content: `You can download the eSportcave app from the IOS app store or Android play store. You can also visit our website and request the app link with your phone number; please note this only works for android users.`,
  },
  {
    title: "Is eSportcave app free?",
    content: `Yes, eSportcave App is free to download. However, you need to wager your game to play with friends or other players. You know what they say; put your money where your mouth is.`,
  },
  {
    title: "Do I need to create  my own game on eSportcave?",
    content: `No, You do not need to create a game, the app randomly pairs you with an opponent in  the same game category and entry fee option as you.`,
  },
  {
    title: "What type of games can I play in eSportcave?",
    content: `eSportcave aims to offer different genres of games in its collection, we will definitely keep you in the loop as they launch.`,
  },
];

const Faq = () => {
  const accordOne = {
    rows: faqs.filter((_, idx) => idx < 4),
  };
  const accordTwo = {
    rows: faqs.filter((_, idx) => 3 < idx && idx < 8),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.accordionContainer}>
          <Accordion items={accordOne} className={styles.accordion} />
          <Accordion items={accordTwo} className={styles.accordion} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
