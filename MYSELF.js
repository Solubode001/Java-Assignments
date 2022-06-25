var firstname = "Samuel";
var lastname = "Olubode";
var height = "181cm";
var country = "Nigeria";

function getName() {
  var details = firstname + ' ' + lastname + ' ' + height + ' ' + country;
  return details; // returns value instead of printing it
}

console.log(getName());
