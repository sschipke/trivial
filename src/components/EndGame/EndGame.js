import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {determineWinner} from '../../util/helperFuncs';
import './EndGame.scss'

export const EndGame = ({teams}) => {
  const winningTeam = determineWinner(teams)

  return(
    <section className="end-game-section">
      <div className="end-game-div">
      <h1 className="congrats">Congratulations!</h1>
    {winningTeam && <div className="winning-team-div">
      <h2 className="winning-team">{winningTeam.name} you win!</h2>
      <p className="winning-questions">You answered {winningTeam.score} questions correctly!</p>
      </div>}
    {!winningTeam && <h2>It's a tie! You both win!</h2>}
    </div>

    </section>
  )
}

export const mapStateToProps = state => ({
  teams: state.teams,
})

export default connect(mapStateToProps)(EndGame);

EndGame.propTypes = {
  teams: PropTypes.array.isRequired,
}