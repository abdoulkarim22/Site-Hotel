function search () {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll(".produits");
    let l = document.getElementsByTagName("h4");
    for (var i = 0; i<=l.length; i++) {
        let a = item[i].getElementsByTagName("h3")[0];
        let value = a.innerHTML || a.innerText || a.innerContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i];style.display = "";
        }
        else{
            item[i];style.display = "none";
        }
        
    }
}