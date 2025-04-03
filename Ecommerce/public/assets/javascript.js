



const carousel = document.querySelector('.carousel-child') || null;
if (carousel) {


    const children = carousel['children'];

    let index = 0;

    let prev = null;

    children[index].classList.add('carousel-animation')
    children[index].style.display = 'block'


    function carouselRun() {
        children[index].classList.remove('carousel-animation')
        children[index].style.display = 'none';
        prev = index;

        index = index + 1;

        if (index >= children.length) {
            index = 0;
        }

        for (let i = 0; i < children.length; i++) {
            if (i == index || i == prev) {
                children[i].style.display = 'block'
            }
            else {
                children[i].style.display = 'none'
            }
        }

        children[index].classList.add('carousel-animation');

    }

    setInterval(carouselRun, 3000)
}



// anchor handling in the form
document.addEventListener('click',(event)=>{
    const haveAccount = document.getElementById('haveAccount');
    const Register = document.getElementById('register');
    const Login = document.getElementsByClassName('loginForm')[0];

    if(event.target == haveAccount){
        console.log("login",Login)
        Register.classList.add('deactive-form')
        Login.style.display = 'block'
    }
})

// login form
if(document.contains(document.getElementById('login'))){
document.getElementById('login').addEventListener('submit',(event)=>{

    try {
        event.preventDefault();

        const forms = document.getElementsByClassName('forms');
        const LoginForm = document.getElementById('login');

        const formdata = new FormData(event.target);

        const email = formdata.get('email');
        const password = formdata.get('password');

        const data = new Object({
            email, password
        })

        axios.post('http://localhost:8000/api/login',data, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data)
                if (res.data.status == 200) {
                    alert(res.data.message)
                    setTimeout(() => {
                        window.location.href = "/index.html"
                        forms[0].style.display = 'none'
                        forms[1].style.display = 'none'
                    }, 800)
                }else{
                    alert(res.data.message)
                }
            })
            .catch((error) => {
                console.log(error)
            })

    } catch (error) {
        console.log("error while login");
        throw error;
    }

})}

document.addEventListener('DOMContentLoaded',async()=>{
    try {

        const nav = document.getElementById('nav') || null;
        const forms = document.getElementsByClassName('forms') || null;


        console.log("nav",nav)

        await axios.post('http://localhost:8000/api/authenticated',{
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data,forms)
            if(res.data.status == 200 && forms.length > 0 ){
                nav.style.display = "flex"
                forms[0].style.display = 'none'
                forms[1].style.display = 'none'
            }
        })
        .catch((error)=>{
            console.log(error)
            throw error;
        })
    } catch (error) {
        console.log("error in user already authenticated",error);
        throw error;
    }
    
})





function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = new Object({
        username, email, password
    })



    axios.post('http://localhost:8000/api/register', data)
        .then((res) => {
            console.log(res.data)
            if (res.data.status == 200) {
                alert(res.data.message)
                setTimeout(() => {
                    window.location.href = "/login.html"
                }, 2000)
            }
            else{
                alert(res.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function login() {
    const email = document.getElementById('useremail').value;
    const password = document.getElementById('userpassword').value;

    const data = new Object({
        email, password
    })



    axios.post('http://localhost:8000/api/login', data, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(res.data)
            if (res.data.status == 200) {
                alert(res.data.message)
                setTimeout(() => {
                    window.location.href = "/index.html"
                }, 2000)
            }else{
                alert(res.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

if(document.contains(document?.getElementById('reg'))){
document?.getElementById('reg').addEventListener('submit',async function (event){ 
        try {
    
            event.preventDefault();
    
            const formdata = new FormData(this)
    
            await axios.post('http://localhost:8000/api/addproduct', formdata, {
                withCredentials: true
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
                throw error;
            })
    
        } catch (error) {
            console.log("error while adding the product", error)
            throw error;
        }
    })
}


document.addEventListener("DOMContentLoaded", async () => {
    const product = document.getElementById('product');

    const productContainer = document.getElementsByClassName('products')[0];

    if (document.contains(product)) {
        axios.post('http://localhost:8000/api/getproducts', {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data)

                if (res.data.status == 200 && res.data) {
                    (res.data.data)?.forEach((product) => {
                        productContainer.innerHTML += `
                    <div class="card" id="${product._id}">
                    <div class="card-img">
                        <img src="http://localhost:8000/temp/${product?.images[0]}" alt="">
                    </div>
                    <div class="info">
    
                        <div class="details">
                            <h1>${product.name}</h1>
                            <div class="price">
                                <span>${product.discount}%</span>
                                <h2>$${product.price}</h2>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat magnam esse totam rem
                            reprehenderit animi, id, maiores quam maxime fugiat fugit facere velit quaerat iure. Laborum quo
                            error voluptates!</p>
                    </div>
                </div>
                    `
                    })

                }

                if (res.data.status == 400) {
                    alert(res.data.message)
                    setTimeout(() => {
                        window.location.href = "/index.html"
                    }, 1000)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const singleProduct = document.getElementById('single-product') || null;


    if (document.contains(singleProduct)) {
        const productId = new URLSearchParams(window.location.search).get('id')

        const id = new Object({
            id: productId || null
        })


        if (id.id != 'null') {
            axios.post('http://localhost:8000/api/singleproduct', id, {
                withCredentials: true,
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status == 200) {
                        singleProduct.innerHTML = `
                            <div class="product-img">
            <img src="temp/${res.data.data.images[0]}" alt="">
        </div>
        <div class="info">

            <div class="details">
                <h1>${res.data.data.name}</h1>
                <div class="price">
                    <span>${res.data.data.discount}%</span>
                    <h2>$${res.data.data.price}</h2>
                </div>
                <a href="/Buy.html"><button>BUY</button></a>
            </div>
            <div class="extra-img" id="extra">
            </div>
            <h3>DESCRIPTION</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat magnam esse totam rem
                reprehenderit animi, id, maiores quam maxime fugiat fugit facere velit quaerat iure. Laborum quo
                error voluptates!
            </p>
        </div>
                        `;

                        (res.data.data.images).map((image) => {

                            const extra = document.getElementById("extra");
                            const div = document.createElement("div");
                            div.classList.add("product-img");

                            const img = document.createElement("img");
                            img.src = `http://localhost:8000/temp/${image}`;
                            img.alt = "Product Image";

                            div.appendChild(img);
                            extra.appendChild(div);
                        })
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }

})


document.addEventListener('click', (event) => {
    const productId = event.target.closest('.card')
    const frame = document.getElementsByTagName('iframe')[0] || null;

    if (frame) {
        frame.src = `/product.html?id=${productId?.id || null}`
    }

})



function logout() {
    try {
        axios.post('http://localhost:8000/api/logout')
            .then((res) => {
                console.log(res.data)
                if (res.data.status == 200) {
                    alert(res.data.message)
                    window.location.href = '/index.html'
                }
            })
            .catch((error) => {
                console.log(error)
                throw error;
            })
    } catch (error) {
        console.log(error);
        throw error;
    }
}



/* document.addEventListener('click',(event)=>{
    const menu = document.getElementById('menu')
    const links = document.getElementsByClassName('links')[0];
    const windowSize = window.innerWidth;
    if(event.target != links && !links.contains(event.target) && windowSize <= 748){
        console.log("hide menu")
        console.log(window.innerWidth)
        links.style.display = "none";
        menu.style.display = "block"
    }
    if(event.target == menu){
        links.classList.add('text-animation');
        links.style.display = "flex";
        menu.style.display = 'none'
    }
}) */


