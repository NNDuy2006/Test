function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').innerHTML = previewPic.alt;
    if(previewPic.className == "aragami") {
        document.getElementById('image').style.width = "960px";
    } else if(previewPic.className == "monster") {
        document.getElementById('image').style.backgroundColor = "black";
    } else {
        document.getElementById('image').style.width = "510px";
        document.getElementById('image').style.height = "510px";
    }
    
}

function unDo() {
    document.getElementById('image').style.backgroundImage = 'url()';
	document.getElementById('image').innerHTML = "Hover over an image to change this section.";
    document.getElementById('image').style.backgroundColor = "#8e68ff";
    document.getElementById('image').style.width = "510px";
    document.getElementById('image').style.height = "510px";
}

function addTabIndex() {
    document.querySelector("#skipmain").setAttribute("tabindex", "0");
    console.log("Skip_to_main_content tabindex=0");
    list = document.getElementsByTagName('li');
    for(var i = 0; i < list.length; i++) {
        console.log("Navigator tabindex=1");
        list[i].setAttribute("tabindex", "1");
    }
    ge = document.getElementsByClassName("aragami");
    for(var i = 0; i < ge.length; i++) {
        console.log("aragami tabindex=2");
        ge[i].setAttribute("tabindex", "2");
    }
    mh = document.getElementsByClassName("monster");
    for(var i = 0; i < mh.length; i++) {
        console.log("monster tabindex=2");
        mh[i].setAttribute("tabindex", "2");
    }
    kj = document.querySelectorAll(".flex a");
    for(var i = 0; i < kj.length; i++) {
        console.log("kaiju tabindex=2");
        kj[i].setAttribute("tabindex", "2");
    }
}