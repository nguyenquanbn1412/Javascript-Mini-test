// 1. Function trả về mảng các user có age > 25 và isStatus = true:
function filterUsersByAgeAndStatus(users) {
  return users.filter((user) => user.age > 25 && user.isStatus === true);
}
// 2.Function trả về mảng các user có age tăng dần:
function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
