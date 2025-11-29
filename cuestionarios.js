var answersJson = JSON.parse(localStorage.getItem("allQuests"));
var edQuest;
if (localStorage.getItem("editQuest") == null) {
    console.log("FALSE");
    localStorage.setItem("editQuest", "-1");
    edQuest = JSON.parse(localStorage.getItem("editQuest"));
} else {
    console.log("TRUE");
    edQuest = JSON.parse(localStorage.getItem("editQuest"));
}
