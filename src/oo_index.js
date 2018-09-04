
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  let postIds = 0


  // document.querySelector('#submit-button').addEventListener('click', function(event){
  //   // console.log(event);
  //   event.preventDefault();
  //
  //   const description = document.querySelector('#new-task-description').value;
  //
  //   const tasks = document.querySelector('#tasks');
  //   const li = document.createElement('li');
  //   li.dataset.id = ++postIds;
  //   li.innerHTML = `
  //   <span>${description}</span>
  //   <button data-id="${li.dataset.id}" data-action="delete">X</button>
  //   `
  //   // li.innerText = description;
  //   tasks.appendChild(li);
  //   document.querySelector('#new-task-description').value = "";
  //
  //
  // })
  //
  // document.querySelector('#list').addEventListener('click', function (event) {
  //   if (event.target.dataset.action === 'delete'){
  //     console.log(`deleting post ${event.target.dataset.id}`);
  //     const tasks = document.querySelector('#tasks');
  //     const lis = document.querySelectorAll('li');
  //     // let deleteli;
  //     lis.forEach(function(li){
  //       if(li.dataset.id === event.target.dataset.id) {
  //         // deleteli = ele
  //         tasks.removeChild(li)
  //       }
  //     })
  //
  //   }
  // })

  document.querySelector("#main-content").addEventListener('click', function (event) {

    console.log(event);

    if (event.target.id === "submit-button"){
      event.preventDefault();

      const description = document.querySelector('#new-task-description').value;

      const tasks = document.querySelector('#tasks');
      const li = document.createElement('li');
      li.dataset.id = ++postIds;
      li.innerHTML = `
      <span>${description}</span>
      <button data-id="${li.dataset.id}" data-action="delete">X</button>
      `
      // li.innerText = description;
      tasks.appendChild(li);
      document.querySelector('#new-task-description').value = "";

    }
    else if (event.target.dataset.action === 'delete'){
      console.log(`deleting post ${event.target.dataset.id}`);
      const tasks = document.querySelector('#tasks');
      const lis = document.querySelectorAll('li');
      // let deleteli;
      lis.forEach(function(li){
        if(li.dataset.id === event.target.dataset.id) {
          // deleteli = ele
          tasks.removeChild(li)
        }
      })

    }
  })



});
