let form = document.querySelector("form");
let cardsContainer = document.querySelector(".cards");

const userManger = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        
        const nameInput = document.querySelector("#name");
        const roleInput = document.querySelector("#role");
        const bioInput = document.querySelector("#bio");
        const photoInput = document.querySelector("#photo");
        
        const userData = {
            name: nameInput.value,
            role: roleInput.value,
            bio: bioInput.value,
            photo: photoInput.value
        };
        
        this.addUser(userData);
        form.reset();
    },
    addUser: function (userData) {
        this.users.push(userData);
        this.renderUsers();
    },
    renderUsers: function () {
        const userCards = this.users.map((user, index) => `
            <div class="card">
                <img src="${user.photo}" onerror="this.src='https://i.pravatar.cc/100?img=${index}'">
                <h3>${user.name}</h3>
                <h4>${user.role}</h4>
                <p>${user.bio}</p>
                <button onclick="userManger.removeUser(${index})">Remove</button>
            </div>
        `).join('');
        
        cardsContainer.innerHTML = userCards;
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUsers();
    }
}

userManger.init();