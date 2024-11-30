const url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    let collegeArr = await getCollege(country);
    showColl(collegeArr)
})


function showColl(collegeArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collegeArr){ 
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    };
}

async function getCollege(country) {
   try{
    let res = await axios.get(url + country)
    return res.data;
   }catch(e){
     return e;
   }
}