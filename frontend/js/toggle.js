var users = [
    {
        "name" : "John Doe",
        "gender" : "male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "female",
        "image" : "/images/jane.png"
    }
]
var curID = 0;

function toggle() {

    curID = (curID + 1) % 2;
    var user = users[curID];
    
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText = users[curID].name;
    document.getElementById("user-gender").innerText = users[curID].gender;

}
