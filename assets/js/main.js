let input = document.querySelector('.inp');
let ul = document.querySelector('.ul-list');
let addBtn = document.querySelector('.add-btn');
 
addBtn.addEventListener('click', function () {
    if(input.value!=''){
         ul.innerHTML += `<li class="list-item">
    <div class="d-flex justify-content-between mt-3 px-2 py-1 rounded">
        <p class="text-danger">${input.value}</p>
        <button class="btn delete-btn btn-danger"><i class="las la-trash-alt"></i></button>
    </div>
</li>`;
    input.value = '';
    }
   

    let deleteBtns = document.querySelectorAll('.delete-btn'); 
    deleteBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let listItem = this.closest('li');
            listItem.parentNode.removeChild(listItem);
        });
    });
});
