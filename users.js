const api = axios.create({
    baseURL: "https://686e4933c9090c4953890664.mockapi.io",
});

let box = document.querySelector(".card")

async function getData() {
   let {data} = await api.get("/users");
   showCart(data) 
}

function showCart(data) {
    box.innerHTML = ""; 
    data.forEach(item => {
        box.insertAdjacentHTML(
            "beforeend",
            `
            <div class="cart-item">
                <img src="https://www.digiseller.ru/preview/768455/p1_2667524_b9418746.png" alt="product image" width="50" />
                <p>${item.name}</p>
                <p>${item.email}</p>
                <p>${item.password}</p>
            </div>`
        );
    });
}