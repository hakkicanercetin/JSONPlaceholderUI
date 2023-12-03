let data;
        async function main() {
          const temp = getUsers()
          const [users] = await Promise.all([temp])
          let container = document.getElementsByClassName("container")[0];
          let wrapper = document.getElementsByClassName("row")[0];
          function createCards(user) {
            return `<div class="card" style="width: 17rem;">
              <div class="card-body">
                  <h5>Personal Informations</h5>
                  <p>${user.id}</p>
                  <p>${user.name}</p>
                  <p>${user.username}</p>
                  <hr>
                  <h5>Addres</h5>
                  <p>${user.address.street}</p>
                  <p>${user.address.suite}</p>
                  <p>${user.address.city}</p>
                  <p>${user.address.zipcode}</p>
                  <hr>
                  <h5>Company</h5>
                  <p>${user.company.name}</p>
                  <p>${user.company.catchPhrase}</p>
                  <p>${user.company.bs}</p>
                  <hr>
                  <h5>Contact</h5>
                  <p>${user.email}</p>
                  <p>${user.phone}</p>
                  <p>${user.website}</p>
              </div>
          </div>`;
          }
          for (let i = 0; i < users.length; i++) {
            wrapper.innerHTML += createCards(users[i]);
          }
          container.appendChild(wrapper);
        }
        async function getUsers() {
          try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
          );
          data = await response.json();
       } catch (err) {
        console.log("Bir hatayla karşılaştık!")
       }
        return data;
      }
      main()