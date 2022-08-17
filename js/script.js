let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;

  const contentContainer = document.getElementById("content-container");
  const tableBodyRow = document.createElement("tr");
  tableBodyRow.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td>
  <button class="btn btn-primary delete-btn">Delete</button>
  <button class="btn btn-secondary done-btn">Done</button>
  </td>
  `;
  contentContainer.appendChild(tableBodyRow);
  document.getElementById("input-value").value = "";
  const deleteBtn = document.getElementsByClassName("delete-btn");
  for (let button of deleteBtn) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
  const doneBtn = document.getElementsByClassName("done-btn");
  for (let button of doneBtn) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.textDecorationLine = 'line-through'; 
    });
  }
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", function(event){
      tableBodyRow.style.display = "none";
  });
});