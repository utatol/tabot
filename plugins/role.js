let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE._data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Bocil Pristel'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Dewasa'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Abang-Abang'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Om-Om'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Wakil President'
          : ((user.level >= 60) && (user.level <= 70)) ? 'President'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Mantan President'
          : 'Pensiun'
  user.role = role
  return true
}

module.exports = handler