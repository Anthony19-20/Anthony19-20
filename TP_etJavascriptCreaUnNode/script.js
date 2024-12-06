function creationNode(){
    var chaine="P !! Je suis ... Ton frère ! Un autre p ! Fils de article comme toi ...";
    //var msgArct = document.getElementById('text');
    var msgImage = document.getElementById('mainImage');
    msgImg = document.createElement('img');
    msgImg.setAttribute("src", "./images/riviere.jpg");
    msgImg.style.display="block";
    msgImage.appendChild(msgImg);

    /*msgErr = document.createElement('p');
    msgErr.id = "msg-err";
    msgErr.textContent = chaine;
    msgErr.style.color = "black";
    msgArct.appendChild(msgErr);*/

    document.body.style.backgroundColor = 'grey';
}

function creationNodeRetardee(){
    setTimeout(creationNode,1000);
}

window.onload=function(){
    creationNodeRetardee();
}
