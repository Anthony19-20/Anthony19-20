function creationNode(){
    var chaine="P !! Je suis ... Ton frère ! Un autre p ! Fils de article comme toi ...";
    var msgArct = document.getElementById('ici');
    msgErr = document.createElement('img');
    msgErr.setAttribute("src","./images/pa.jpg");
    msgErr.style.display="block";
    msgArct.appendChild(msgErr);
    document.body.style.backgroundColor = 'grey';
}

function creationNodeRetardee(){
    setTimeout(creationNode,1000);
}

window.onload=function(){
    creationNodeRetardee();
}
