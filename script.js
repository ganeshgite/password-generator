// table filling logic
const deletePasswords = (element) => {
  data = localStorage.getItem("passwords");
  newData = JSON.parse(data);
  // console.log(newData);
  updatedData = newData.filter((e) => {
    return e.website != element;
  });
  console.log(updatedData);
  localStorage.setItem("passwords", JSON.stringify(updatedData));
  // console.log(`successfully deleted ${element}  password`);
  showPasswords();
};

// copy text password logic
const copyText = (txt) =>{
   navigator.clipboard.writeText(txt)
    console.log( "copied the text :-"+ txt);
}

// show password logic
const showPasswords = () => {
  let table = document.querySelector("#table");
  data = localStorage.getItem("passwords");

  if (data == null)
   {
    table.innerHTML = "No Data To Show";
  } 
  else
   {
    table.innerHTML =`
     <tr>
        <th>Sr </th>
        <th>Websites</th>
        <th>Username</th>
        <th>Password </th>
        <th>Delete </th>
    </tr>`
    let arr = JSON.parse(data);
    for (let index = 0; index < arr.length; index++) 
    {
      const element = arr[index];
      let str = `

    <tr align="center" >
        <td>${1 + index}</td>
        <td>${element.website}</td>
        <td>${element.username}</td>
        <td >${element.password}&nbsp;  &nbsp;  &nbsp; <button onclick="copyText('${element.password}')" > copy  </button> </</td>
        <td><button onclick="deletePasswords('${
          element.website
        }')"  > Delete</button></td>
    </tr>
`;
      const tabledata = table.innerHTML = table.innerHTML + str;
    }
    username.value ="";
    password.value ="";
    website.value ="";  
      
    
  }
 
};
showPasswords();

const btn = document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();

  user = document.getElementById("username");
  pass = document.getElementById("password");
  website = document.getElementById("website");
  //   console.log(user.value, pass.value);
  const passwords = localStorage.getItem("passwords");
  //   localStorage.setItem("username", user.value);

  if (passwords == null) {
    let json = [];
    json.push({
      username: user.value,
      password: pass.value,
      website: website.value,
    });
    // console.log(json);
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      username: user.value,
      password: pass.value,
      website: website.value,
    });
    // console.log(json);
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});
