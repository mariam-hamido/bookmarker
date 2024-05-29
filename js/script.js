

var site= document.getElementById('siteName');

var siteUrl= document.getElementById('siteUrl');


var bookContainer=[];
function addBook()
{
   var book={
    site: site.value,
    url:siteUrl.value,
   }
   bookContainer.push(book);
   console.log(bookContainer);
   clear();
   display();
   console.log(site.value);
   console.log(book);
}

function clear()
{
    site.value=null;
    siteUrl.value=null;
}

function del(delIndex)
{
    bookContainer.splice(delIndex,1);
    display()
}

function display()
{
    var list='';
    for (var i=0;i<bookContainer.length;i++){
        var index=i+1;
        list+=` 
        <div class="d-flex justify-content-between border border-1 py-2 rounded-2 px-2">
        <h5 class=" ">`+index+`</h5>
        <h5 class=" text-center col-3">`+bookContainer[i].site+`</h5>
        <a href="https://`+bookContainer[i].url+`"><button type="button" class="btn btn-success"><i class="fa-regular fa-eye pe-1"></i>Visit</button></a>
        <button type="button" onClick="del(`+i+`)" class="btn btn-danger"><i class="fa-solid fa-trash pe-1"></i>delete</button>
        </div>
        
        `
    }
    document.getElementById('data').innerHTML=list;
    
}
