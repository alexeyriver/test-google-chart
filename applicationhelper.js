let select = document.getElementById("select-search");
let createSelect = document.createElement("select");
let item = null;
createSelect.innerHTML = ` <select id="select-item" >
  <option value="">Select a product...</option>
  ${seeder
    .map((product) => {
      return `<option value='${product.name}'>${product.name}</option>`;
    })
    .join("")}
  </select>`;
createSelect.id = "select-item";
select.appendChild(createSelect);
let selectSearch = document.getElementById("select-item");
selectSearch.addEventListener("change", (e) => {
  let productInfo = document.getElementById("product-info");
  let selectProduct = seeder.filter(
    (product) => product.name == e.target.value
  );
  productInfo.innerHTML = ` <p> Name: ${selectProduct[0].name} </p>
  <p> About: ${selectProduct[0].about} </p>
  <p> Price: ${selectProduct[0].price} </p> `;
  item = selectProduct[0];
  window.item = item;
  
});
