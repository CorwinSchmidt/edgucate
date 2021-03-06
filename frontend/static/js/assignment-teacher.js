function sendToBackendGrade(id, grade) {
    console.log("id", id)
    const data = {
        "type" : 'grade_submit',
        "studentAssignmentId" : id,
        "grade" : grade,
    };

    console.log(data);
    fetch(window.location.href, {
        method: "post", 
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
var ids = document.getElementsByClassName('grade-id');
for (var i=0 ; i < buttons.length ; i++){
    (function(index){
    buttons[index].onclick = function(){
        // alert("I am button " + );
        // sendToBackend(fields[index].value);
        console.log("index", index);
        console.log(fields[index].value);
        console.log(ids[index].innerHTML);
        sendToBackendGrade(ids[index].innerHTML, fields[index].value)
    };
    })(i)
}

var downloads = document.getElementsByClassName('download-button');

for (var j = 0; j < downloads.length; j++) {
    downloads[j].addEventListener('click', function() {
        console.clear();
        console.log("You clicked:", this.id);

        const data = {
            "type" : 'text_download',
            "studentAssignmentId" : this.id,
        };
    
        console.log(data);
        fetch(window.location.href , {
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

        window.open(window.location.origin + "/download/"+this.id)


    });
}