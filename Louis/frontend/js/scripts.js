var xhr = null;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

function addInfos() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        // Check response is ready or not
        data = xhr.responseText;

        // We convert the data who is a string into a dictionary
        var dictionary = JSON.parse(data);

        console.log("Received data on the next recipe !");
        console.log(dictionary);

        // We add all infos into the web page
        titleDiv = document.getElementById('title-container');
        imgDiv = document.getElementById('image-container');
        healthDiv = document.getElementById('healthScore-container');

        titleDiv.innerHTML = dictionary['title'];
        imgDiv.src = dictionary['image'];
        healthDiv.innerHTML = dictionary['healthScore'];
    }
    if (xhr.status == 500) {
        getInfos();
    }
}

function getInfos() {
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = addInfos;
    // asynchronous requests
    xhr.open("POST", "http://localhost:6969/get-recipe", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network
    xhr.send();
}


// function addImage() {
//     // Check response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log("Image received - TEST 1");
//         dataDiv = document.getElementById('image_recipe');
//         dictImg = JSON.parse(xhr.responseText);
//         console.log(dictImg.image);
//         dataDiv.src = dictImg.image;
//     }
// }

// function addTitle() {
//     // Check response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log("Title received!");
//         dataDiv = document.getElementById('title-container');
//         dictTitle = JSON.parse(xhr.responseText);
//         dataDiv.innerHTML = dictTitle.title;
//     }
// }

// function getImage() {
//     console.log("!!Get image...");
//     xhr = getXmlHttpRequestObject();
//     xhr.onreadystatechange = addImage;
//     // asynchronous requests
//     xhr.open("GET", "http://localhost:6969/image", true);
//     // Send the request over the network
//     xhr.send(null);
// }

// function getTitle() {
//     console.log("!!Get title...");
//     xhr = getXmlHttpRequestObject();
//     xhr.onreadystatechange = addTitle;
//     // asynchronous requests
//     xhr.open("GET", "http://localhost:6969/title", true);
//     // Send the request over the network
//     xhr.send(null);
// }


//! -------------------------------------------------
//! Tests 
//! -------------------------------------------------


// function dataCallback() {
//     // Check response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log("User data received!");
//         getDate();
//         dataDiv = document.getElementById('result-container');
//         // Set current data text
//         dataDiv.innerHTML = xhr.responseText;
//     }
// }


// function getUsers() {
//     console.log("Get users... §§§");
//     xhr = getXmlHttpRequestObject();
//     xhr.onreadystatechange = dataCallback;
//     // asynchronous requests
//     xhr.open("GET", "http://localhost:6969/users", true);
//     // Send the request over the network
//     xhr.send(null);
// }


// function getDate() {
//     date = new Date().toString();

//     document.getElementById('time-container').textContent
//         = date;
// }

// function sendDataCallback() {
//     // Check response is ready or not
//     if (xhr.readyState == 4 && xhr.status == 201) {
//         titleDiv = document.getElementById('title-container');
//         imgDiv = document.getElementById('image-container');

//         data = xhr.responseText;

//         var dictionary = JSON.parse(data);


//         console.log(dictionary);
//         console.log(dictionary['title']);
//         console.log(dictionary['image']);

//         titleDiv.innerHTML = dictionary['title'];
//         imgDiv.src = dictionary['image'];
//     }
// }

// function sendData() {
//     // dataToSend = document.getElementById('data-input').value;
//     // if (!dataToSend) {
//     //     console.log("Data is empty.");
//     //     return;
//     // }
//     // console.log("Sending data: " + dataToSend);
//     xhr = getXmlHttpRequestObject();
//     xhr.onreadystatechange = sendDataCallback;
//     // asynchronous requests
//     xhr.open("POST", "http://localhost:6969/users", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     // Send the request over the network
//     dataToSend = "TEST 1"
//     xhr.send(JSON.stringify({"data": dataToSend}));
// }


// (function () {
//     getDate();
// })();
