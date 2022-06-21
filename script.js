function experience(){
    var drp = document.querySelector('.abt-drop-content');
    drp.classList.toggle ('show');
}



function everything(){
    var everything = document.querySelector('.for-everything');
    var arts = document.querySelector('.for-arts');
    var creative = document.querySelector('.for-creative');
    var design = document.querySelector('.for-design');
    
    var total = everything.classList[1] + arts.classList[1] + creative.classList[1] + design.classList[1];
    if (total=="port-hideport-hideport-hideport-hide") {
        if (everything.classList[1] = "port-hide") {
            everything.classList.remove('port-hide');
        }
    
        else if (arts.classList[1] = "port-hide"){
            everything.classList.add('port-hide');
            arts.classList.remove('port-hide');
        }  
    }
}

function art(){
    var everything = document.querySelector('.for-everything');
    var arts = document.querySelector('.for-arts');
    var creative = document.querySelector('.for-creative');
    var design = document.querySelector('.for-design');
    
    if (arts.classList[1] == "port-hide"){
        arts.classList.remove('port-hide');
    }

    else{
        arts.classList.add('port-hide');
    }    
}

function creative(){
    var everything = document.querySelector('.for-everything');
    var arts = document.querySelector('.for-arts');
    var creative = document.querySelector('.for-creative');
    var design = document.querySelector('.for-design');
    
    if (creative.classList[1] == "port-hide"){
        creative.classList.remove('port-hide');
    }
    else{
        creative.classList.add('port-hide');
    }  
}

function design(){
    var everything = document.querySelector('.for-everything');
    var arts = document.querySelector('.for-arts');
    var creative = document.querySelector('.for-creative');
    var design = document.querySelector('.for-design');
    
    if (design.classList[1] == "port-hide"){
        design.classList.remove('port-hide');
    }
    else{
        design.classList.add('port-hide');
    }  
}