function sql2Table(){
    console.log("sql2Table");
    let dbType = document.getElementById("dbType").value;
    let sql = document.getElementById("sql").value;
    if(dbType=="M") {
        mysql2Json();
    } else {
        oracle2Json();
    }
}
function mysql2Json(){

}
function oracle2Json(){

}

