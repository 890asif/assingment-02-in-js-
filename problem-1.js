function matchWinner(teamAGoals, teamBGoals){
if(typeof teamAGoals !== 'number' || typeof teamBGoals !=='number'){
        return "Invalid"
    }
 if(teamAGoals > teamBGoals){
    return "Team A Won";
 }
 else if(teamBGoals > teamAGoals){
    return "Team B Won";
 }
 else if(teamAGoals === teamBGoals){
    return "Draw"
 }
}
console.log(matchWinner(2,1))
console.log(matchWinner(2,3))
console.log(matchWinner(1,1))

