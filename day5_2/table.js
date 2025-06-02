const form=document.getElementById("form");
if(form){
    form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const age=document.getElementById("age").value.trim();
    const height=document.getElementById("height").value.trim();
    const weight=document.getElementById("weight").value.trim();
    let data=JSON.parse(localStorage.getItem("user"))||[];
    data.push({name,email,age,height,weight});
    localStorage.setItem("user",JSON.stringify(data));
    form.reset();
    });
}
    const tablebody=document.getElementById("tablevalue");
    if(tablebody){
        const data=JSON.parse(localStorage.getItem("user"))||[]
        data.forEach((element) => {
        const row=document.createElement("tr");
        row.innerHTML=`<td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.age}</td>
        <td>${element.height}</td>
        <td>${element.weight}</td>`;
        tablebody.appendChild(row);
});
    }
    function clearData(){
        localStorage.removeItem("user");
        location.reload();
    }
