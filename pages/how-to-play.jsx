import Layout from "../src/Layout/Layout/Layout";

function HowToPlay() {
  return (
    <main>
      <h1>Whot Game Rules</h1>
      <h2>General Rules</h2>
      <div>
        <h4>Internet Settings:</h4>
        Playing <b>WHOT!</b> game on the <i>eSportcave</i> app requires you to
        have a strong & stable internet connection and be positioned in areas
        where your phone reception is great, to enjoy a seamless gaming
        experience as the eSportcave app might experience occasional freeze if
        you do not have a strong internet.
        <br />
        <i>
          Please note that we are not liable for any loss that occurs during
          your game play as you might be disconnected from the game if your
          internet connection is not stable.
        </i>
        <h4>Turn Time</h4>
        On <i>eSportcave</i>, each player has a turn time countdown of 20
        seconds to play a card or pick from the stack pile at each turn, in
        cases where a player misses his/her turn, they automatically miss their
        turn to play.
        <h4>Raise Stake</h4>
        During a game play, you can raise the stake amount at any time to
        increase the total prize to be won during a game.
        <br />
        Please note, the opponent has to accept the “raise stake” offer within
        10 seconds, for the new stake to be applied to the stake balance.
        <br />
        <h2>1 on 1 Match Mode</h2>
        The 1 on 1 battle is a game of death that leaves only one winner
        standing and the rules applicable are as follows:
        <br />
        <br />
        {/* <table>
          <tr>
            <th>Cards</th>
            <th>Effects</th>
            <th>Explanation</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> */}
        <br />
        Note that in a two-player game (2 players), there is no difference
        between <b>&quot;HOLD ON&quot;</b> and <b>&quot;SUSPENSION&quot;</b>{" "}
        since there is only one opponent to skip.
        <h4>Variations</h4>
        The rules supplied with the cards also describe a short game without
        scoring: there is just one deal and the first player to get rid of all
        their cards is the winner.
        <br />
        <h2>Tournament Games</h2>
        The tournament challenge takes a slightly different approach. The game
        is played until a player declares all his card, the remaining
        participant’s cards is then calculated and the player with the highest
        points is eliminated. <br />
        This continues, until the <i>&quot;Finale&quot;</i> where only two
        players face off in a final challenge of 1 on 1. The winner of the final
        is declared the winner of the tournament…
        <h2>Special Cards</h2>
        {/* <table>
          <tr>
            <th>Cards</th>
            <th>Effects</th>
            <th>Explanation</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> */}
        In the multi-player tournament game(4 players), the use of the 1 and 8
        varies. <b>&quot;HOLD ON&quot;</b> means all the other players to wait
        while the same player plays another card while{" "}
        <b>&quot;SUSPENSION&quot;</b> means just the next player misses a turn.
        <br />
        The next card played after a &quot;HOLD ON&quot; or
        &quot;SUSPENSION&quot; has to follow the normal rules - it must have the
        same symbol as the 1 or 8, or the same number (causing another hold on
        or suspension) or a wild 20
        <b>WHOT! </b> card accompanied by a call for the shape that should be
        played next.
        <br />A player whose hand is reduced to two cards must warn the other
        players by saying <i>“warning”</i> . A player with just one card must
        warn the others by saying <i>&quot;last card&quot;</i>. <br />
        Any card symbol or number can win the game.
        <br />
        <b>
          Note: Star cards count double when scoring. To help when calculating
          the score, the star cards show two numbers: the large number is the
          number of the card, used in play; the small number is the point value
          of the card, used in scoring.
        </b>
        <br />
        If you cannot or do not wish to play a card at your turn, you draw one
        card from the draw pile instead; having drawn a card, you are not
        allowed to play a card on this turn.
        <br />
        <i>
          If the draw pile runs out, all except the top card of the play pile
          are shuffled to form a new draw pile, and play continues.
        </i>
        <br />
        <h2>Deal</h2>
        Deal and play are clockwise and the turn to deal passes to the left
        after each hand. The card shuffles randomly and is distributed clockwise
        to all players. The system deals 7 cards to each player, one at a time,
        and puts the rest of the pack face down to form a draw pile.
        <br />
        When a <b>WHOT!</b> card is played, the player must name a suit
        (symbol). The next card played must be a card of the named suit or
        another Whot card.
        <br />
        <h2>Scoring</h2>
        The play ends when a player wins by getting rid of all their cards. The
        other players score penalty points for the cards left in their hands.
        Circles, squares, crosses and triangles count face value, stars count
        double (the penalty value is usually printed inside the small stars),
        and <b>WHOT!</b> cards count 20.
        <br />
        The player who has the highest count or more penalty points drop out,
        while the game continues. The last player left in, is declared the
        winner of the Tournament.
      </div>
    </main>
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
