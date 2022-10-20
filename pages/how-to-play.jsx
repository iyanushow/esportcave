import Table from "../src/components/atoms/Table/Table";
import Layout from "../src/Layout/Layout/Layout";
import S from "../styles/pagestyles/play.module.css";
function HowToPlay() {
  return (
    <div className={S.play}>
      <h1>Whot Game Rules</h1>
      <h2>General Rules</h2>

      <section className={S.content}>
        <h4 className={S.lead}>Internet Settings:</h4>
        <div>
          Playing <span className={S.shout}>WHOT!</span> game on the{" "}
          <span className={S.italics}>eSportcave</span> app requires you to have
          a strong & stable internet connection and be positioned in areas where
          your phone reception is great, to enjoy a seamless gaming experience
          as the eSportcave app might experience occasional freeze if you do not
          have a strong internet.
        </div>
        <div className={S.italics}>
          Please note that we are not liable for any loss that occurs during
          your game play as you might be disconnected from the game if your
          internet connection is not stable.
        </div>
        <h4 className={S.lead}>Turn Time</h4>
        <div>
          On <span className={S.italics}>eSportcave</span>, each player has a
          turn time countdown of 20 seconds to play a card or pick from the
          stack pile at each turn, in cases where a player misses his/her turn,
          they automatically miss their turn to play.
        </div>
        <br />
        <h4 className={S.lead}>Raise Stake</h4>
        <div>
          During a game play, you can raise the stake amount at any time to
          increase the total prize to be won during a game.
        </div>
        <br />
        <div>
          Please note, the opponent has to accept the “raise stake” offer within
          10 seconds, for the new stake to be applied to the stake balance.
        </div>
        <br />
        <h2 className={S.lead2}>1 on 1 Match Mode</h2>
        <div>
          The 1 on 1 battle is a game of death that leaves only one winner
          standing and the rules applicable are as follows:
        </div>
        <br />
        <Table />
        <br />
        <div>
          Note that in a two-player game (2 players), there is no difference
          between <span className={S.shout}>&quot;HOLD ON&quot;</span> and{" "}
          <span className={S.shout}>&quot;SUSPENSION&quot;</span> since there is
          only one opponent to skip.
        </div>
        <h4 className={S.lead2}>Variations</h4>
        <div>
          The rules supplied with the cards also describe a short game without
          scoring: there is just one deal and the first player to get rid of all
          their cards is the winner.
        </div>
        <br />
        <h2 className={S.lead2}>Tournament Games</h2>
        <div>
          The tournament challenge takes a slightly different approach. The game
          is played until a player declares all his card, the remaining
          participant’s cards is then calculated and the player with the highest
          points is eliminated. <br />
          This continues, until the{" "}
          <span className={S.italics}>&quot;Finale&quot;</span> where only two
          players face off in a final challenge of 1 on 1. The winner of the
          final is declared the winner of the tournament…
        </div>
        <h2 className={S.lead2}>Special Cards</h2>
        <Table />
        <div>
          In the multi-player tournament game(4 players), the use of the 1 and 8
          varies. <span className={S.shout}>&quot;HOLD ON&quot;</span> means all
          the other players to wait while the same player plays another card
          while{" "}
        </div>
        <span className={S.shout}>&quot;SUSPENSION&quot;</span> means just the
        next player misses a turn.
        <br />
        <div>
          The next card played after a &quot;HOLD ON&quot; or
          &quot;SUSPENSION&quot; has to follow the normal rules - it must have
          the same symbol as the 1 or 8, or the same number (causing another
          hold on or suspension) or a wild 20
          <span className={S.shout}>WHOT! </span> card accompanied by a call for
          the shape that should be played next.
          <br />A player whose hand is reduced to two cards must warn the other
          players by saying <span className={S.italics}>“warning”</span> . A
          player with just one card must warn the others by saying{" "}
          <span className={S.italics}>&quot;last card&quot;</span>. <br />
          Any card symbol or number can win the game.
        </div>
        <br />
        <span className={S.shout}>
          Note: Star cards count double when scoring. To help when calculating
          the score, the star cards show two numbers: the large number is the
          number of the card, used in play; the small number is the point value
          of the card, used in scoring.
        </span>
        <br />
        <div>
          If you cannot or do not wish to play a card at your turn, you draw one
          card from the draw pile instead; having drawn a card, you are not
          allowed to play a card on this turn.
        </div>
        <br />
        <span className={S.italics}>
          If the draw pile runs out, all except the top card of the play pile
          are shuffled to form a new draw pile, and play continues.
        </span>
        <br />
        <h2 className={S.lead2}>Deal</h2>
        <div>
          Deal and play are clockwise and the turn to deal passes to the left
          after each hand. The card shuffles randomly and is distributed
          clockwise to all players. The system deals 7 cards to each player, one
          at a time, and puts the rest of the pack face down to form a draw
          pile.
        </div>
        <br />
        <div>
          When a <span className={S.shout}>WHOT!</span> card is played, the
          player must name a suit (symbol). The next card played must be a card
          of the named suit or another Whot card.
        </div>
        <br />
        <h2 className={S.lead2}>Scoring</h2>
        <div>
          The play ends when a player wins by getting rid of all their cards.
          The other players score penalty points for the cards left in their
          hands. Circles, squares, crosses and triangles count face value, stars
          count double (the penalty value is usually printed inside the small
          stars), and <span className={S.shout}>WHOT!</span> cards count 20.
        </div>
        <br />
        <div>
          The player who has the highest count or more penalty points drop out,
          while the game continues. The last player left in, is declared the
          winner of the Tournament.
        </div>
      </section>
    </div>
  );
}

HowToPlay.getLayout = function getLayout(page) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  );
};

export default HowToPlay;
