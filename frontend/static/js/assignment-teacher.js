function sendToBackendGrade(id, grade) {
    const data = {
        "type" : 'grade_submit',
        "studentAssignmentId" : id,
        "grade" : grade,
    };

    console.log(data);
    fetch(window.location.href, {
        method: "POST", 
        body : JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'}
    }).then(response => {
        response.json().then(json => {
            // code that can access both here
            if (response.status >= 400){
                console.log("error sending course to backend");
            }
        });
    });
}

var buttons = document.getElementsByClassName('grade-sub');
var fields = document.getElementsByClassName('grade-form');
for (var i=0 ; i < buttons.length ; i++){
    (function(index){
    buttons[index].onclick = function(){
        // alert("I am button " + );
        // sendToBackend(fields[index].value);
        console.log("index", index);
        console.log(fields[index].value);
    };
    })(i)
}