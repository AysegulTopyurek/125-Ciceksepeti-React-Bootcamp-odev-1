// Form button
function formVisibility() {
    document.querySelector('.form').style.display="block";
    document.querySelector('.imgGrid').style.display="none";
}

function imgGridVisibility() {
    document.querySelector('.form').style.display="none";
    document.querySelector('.imgGrid').style.display="block";
}

// Get data from url
let dataResponse=[];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    dataResponse = data;
     dataResponse.forEach((item,index) => {
      item['url']="https://picsum.photos/300/200?random="+(index)
       
     });
    console.log("datass",dataResponse.length)
    listBox(data)
  });
//
// Get data with for loop
  const listBox=(data)=>{
      console.log("datattatat",data)
    for (let i = 0; i < Math.min(data.length,10); i++) {
       
    

        const box = document.createElement("div");
        document.querySelector(".products").appendChild(box);
        box.className="box";
    
    
        const img = document.createElement("div");
        box.appendChild(img);
        img.className="img";
    
        const picture = document.createElement("img");
        picture.src=data[i].url;
        img.appendChild(picture);
        
        
        const title = document.createElement("div");
        box.appendChild(title);
        title.className="title";
    
    
        const h2 = document.createElement("h2");
        h2.innerHTML=data[i].title
        title.appendChild(h2);
    
    
        const desc = document.createElement("div");
        box.appendChild(desc);
        desc.className="desc";
        desc.innerHTML=data[i].body
    
        const buttonSet = document.createElement("div");
        box.appendChild(buttonSet);
        buttonSet.className="buttonSet";
    
        const button = document.createElement("button");
        button.innerHTML="BUY NOW"
        buttonSet.appendChild(button);
      
        
    }
  }

// search 


function typing() {
    document.getElementById("products").innerHTML ="";
    let search = document.querySelector("#search");
    let searchValue = search.value.toLowerCase();
    console.log("searchvalue",searchValue)
    //filtering response data
    console.log("ne geldi dataresponse",dataResponse)
    filteredData = dataResponse.filter(
      (data) =>
        data.title.includes(searchValue) 
    );
    console.log("ne gitti dataresponse",filteredData)
    //filtering d
    filteredData.length>0 && listBox(filteredData);
  }


// Modal

function closeModal() {
    document.querySelector("body").style.overflow="inherit";
    document.querySelector("#modalWrapper").style.display="none"
}

function showModal() {
   
   let CompanyName=document.querySelector("#companyName").value;
   let firstName=document.querySelector("#firstName").value;
   let lastName=document.querySelector("#lastName").value;
   let emailAddress=document.querySelector("#emailAddress").value;
   let title=document.querySelector("#title").value;
   let phone=document.querySelector("#phone").value;
   let cancelRegistration=document.querySelector("#cancelRegistration").value;
   let traninig=document.querySelector("#traninig").value;
   let jobValidity=document.querySelector('[name="job"]').validity.valid
   let dietary=document.querySelector("#dietary").value;
   let expectations=document.querySelector("#expectations").value;


     if(CompanyName!='' && firstName != '' && lastName !='' && emailAddress !='' && title!= '' && phone !='' && cancelRegistration != 'off' && jobValidity !='true' && dietary!='' && expectations !=''){
        document.querySelector("#modalWrapper").style.display="flex";
        document.querySelector("body").style.overflow="hidden";
        document.querySelector(".CompanyName").innerHTML = document.querySelector("#companyName").value;
        document.querySelector(".FirstName").innerHTML = firstName;
        document.querySelector(".LastName").innerHTML = lastName;
        document.querySelector(".EmailAddress").innerHTML = emailAddress;
        document.querySelector(".Title").innerHTML = title;
        document.querySelector(".Phone").innerHTML = phone;
        document.querySelector(".CancelRegistration").innerHTML = cancelRegistration;
        document.querySelector(".TrainingSession").innerHTML = traninig;
        document.querySelector(".JobFunction").innerHTML = document.querySelector('[name="job"]:checked').value;
        document.querySelector(".DietaryRequirements").innerHTML = dietary;
        document.querySelector(".Expectations").innerHTML = expectations;
     }
     else{
         alert('Please fill in all data!')
     }
  
}


function showMenu() {
    document.querySelector("aside").style.display="flex"
    document.querySelector(".closeMenu").style.display="block"
    document.querySelector(".showMenu").style.display="none"
}

function closeMenu() {
    document.querySelector("aside").style.display="none"
    document.querySelector(".showMenu").style.display="block"
    document.querySelector(".closeMenu").style.display="none"
}