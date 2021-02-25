console.log('DOM loaded! 🚀');
let button = document.querySelector('.btn')
  //Get Employee
//   const getEmployees = () => {
//     fetch('/api/employees', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); 
//         let emailData;
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].email)
//             emailData = data[i].email
            
//         }

//         console.log(emailData);
//         if (emailData === button) {
//             console.log('yes');
//         } else {
//             console.log('no');
//         }
      
//       })
      

//   };

 
  button.addEventListener('click',(e) => {
    const email = e.target.querySelector('#inputEmail')

    fetch(`/api/employees/${email}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        
      })
      .then((response) => response.json()).then((data) => {
        console.log(data);

      })

  })