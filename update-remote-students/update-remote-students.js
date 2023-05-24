// Please do not change the name of this function
function updateRemoteStudents (studentsArr) {
  let studentsCopy = [...studentsArr]
  studentsCopy = studentsCopy.map(student => {
    if (!student.location) {
      student.location = 'remote'
    }
    return student
  })
  return studentsCopy
}

module.exports = updateRemoteStudents;
