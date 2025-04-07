



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
document.addEventListener('click', (event) => {
    const haveAccount = document.getElementById('haveAccount');
    const Register = document.getElementById('register');
    const Login = document.getElementsByClassName('loginForm')[0];

    if (event.target == haveAccount) {
        console.log("login", Login)
        Register.classList.add('deactive-form')
        Login.style.display = 'block'
    }
})

// login form
if (document.contains(document.getElementById('login'))) {
    document.getElementById('login').addEventListener('submit', (event) => {

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

            axios.post('http://localhost:8000/api/login', data, {
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
                    } else {
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

    })
}
if (document.contains(document.getElementById('register'))) {
    document.getElementById('register').addEventListener('submit', (event) => {

        try {
            event.preventDefault();

            const Register = document.getElementById('register');
            const Login = document.getElementsByClassName('loginForm')[0];

            const formdata = new FormData(event.target);

            const username = formdata.get('username');
            const email = formdata.get('email');
            const password = formdata.get('password');

            const data = new Object({
                username, email, password
            })

            axios.post('http://localhost:8000/api/register', data, {
                withCredentials: true,
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status == 200) {
                        alert(res.data.message)
                        setTimeout(() => {
                            Register.classList.add('deactive-form')
                            Login.style.display = 'block'
                        }, 800)
                    } else {
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

    })
}

document.addEventListener('DOMContentLoaded', async () => {
    try {

        const nav = document.getElementById('nav') || null;
        const forms = document.getElementsByClassName('forms') || null;


        console.log("nav", nav)

        await axios.post('http://localhost:8000/api/authenticated', {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data, forms)
                if (res.data.status == 200 && forms.length > 0) {
                    nav.style.display = "flex"
                    forms[0].style.display = 'none'
                    forms[1].style.display = 'none'
                }
            })
            .catch((error) => {
                console.log(error)
                throw error;
            })
    } catch (error) {
        console.log("error in user already authenticated", error);
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
                    Register.classList.add('deactive-form')
                    Login.style.display = 'block'
                }, 2000)
            }
            else {
                alert(res.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}


if (document.contains(document?.getElementById('reg'))) {
    document?.getElementById('reg').addEventListener('submit', async function (event) {
        try {

            event.preventDefault();

            const formdata = new FormData(this)

            await axios.post('http://localhost:8000/api/addproduct', formdata, {
                withCredentials: true
            })
                .then((res) => {
                    console.log(res.data)
                })
                .catch((error) => {
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
                                <h2>&#8377;${product.price}</h2>
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



document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu')
    const links = document.getElementsByClassName('links')[0];
    const windowSize = window.innerWidth;
    if (event.target != links && !links.contains(event.target) && windowSize <= 748) {
        console.log("hide menu")
        console.log(window.innerWidth)
        links.style.display = "none";
        menu.style.display = "block"
    }
    if (event.target == menu) {
        links.classList.add('text-animation');
        links.style.display = "flex";
        menu.style.display = 'none'
    }
})


// card element navigation
if(document.contains(document.getElementById('product'))){
document.addEventListener('click',(event)=>{
    const card = event.target.closest('.card');
    const cardId = card.getAttribute('id');   
    if(card.contains(event.target)){
        window.location.href = `/product.html?id=${cardId}`
    }
})
}

document.addEventListener('scroll',(event)=>{

    console.log('user scrolling');
    const rect = element.getBoundingClientRect();
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade');
          }
        });
      });
      
})


function buy(){
    try {
        const id = new URLSearchParams(window.location.search).get('id');
        console.log(id);
        axios.post(`http://localhost:8000/api/buy/${id}`)
            .then((res) => {
                console.log(res.data)
                if (res.data.status == 200) {
                    alert(res.data.message)
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

function overview(){
    try 
    {
        const container = document.getElementById('d-product');
        console.log("container",container);

        const id = new URLSearchParams(window.location.search).get('id');
        axios.post(`http://localhost:8000/api/singleproduct/${id}`,)
            .then((res) => {
                console.log(res.data)
                if (res.data.status == 200) {
                    console.log("images",res.data.data)
                    const payload = res.data.data;
                    const specification = payload.specification;
                    /* alert(res.data.message) */
                    container.innerHTML = `
                    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <img src="http://localhost:8000/temp/${payload.images[3]}" style="object-fit:contain; align-self:center; height:auto; border-radius:10px;"
                        alt="Two each of gray, white, and black shirts laying flat."
                        class="hidden size-full rounded-lg object-cover lg:block animation">
                    <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8" >
                        <img src="http://localhost:8000/temp/${payload.images[1]}"
                            alt="Model wearing plain black basic tee."
                            class="aspect-3/2 w-full rounded-lg object-cover fade">
                        <img src="http://localhost:8000/temp/${payload.images[2]}" alt="Model wearing plain gray basic tee."
                            class="aspect-3/2 w-full rounded-lg object-cover fade">
                    </div>
                    <img src="http://localhost:8000/temp/${payload.images[0]}" alt="Model wearing plain white basic tee."
                        class="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto fade" style="max-width: 400px; justify-self:center; object-fit:contain; max-height:600px;">
                </div>

                <div class="product-card ">
                    <div class="features flex justify-center place-items-center " style="margin: 10px;">
                        <div class="bg-white carousel-animation">
                            <div
                                class="mx-auto mt-10  grid grid-cols-1 items-center bg-gray-100 rounded-md lg:mx-32 md:px-0 flex justify-center place-items-center">
                                <div class='p-10'>
                                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical
                                        Specifications</h2>
                                    <p class="mt-4 text-gray-500 text-xl" style="padding: 10px 0px;">The walnut wood
                                        card
                                        tray is
                                        precision milled to perfectly fit a stack of Focus cards. The powder coated
                                        steel
                                        divider separates active cards from new ones, or can be used to archive
                                        important
                                        task
                                        lists.</p>

                                    <dl
                                        class="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 sm:gap-y-4 lg:gap-x-2">
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">Owner</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification.owner}</dd>
                                        </div>
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">Material</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification.material}</dd>
                                        </div>
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">Movement</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification.movement}
                                            </dd>
                                        </div>
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">Case-size</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification.caseSize}
                                            </dd>
                                        </div>
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">Resistance</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification.waterResistance}
                                            </dd>
                                        </div>
                                        <div class="border-t border-gray-300 pt-4">
                                            <dt class="font-medium text-xl text-gray-900">ID</dt>
                                            <dd class="mt-2 text-sm text-gray-500">${specification._id}</dd>
                                        </div>
                                    </dl>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="products">
                    </div>

                </div>
                <!-- Product info -->
                <div 
                    class="px-4 mx-2 pt-10 pb-16 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-36 lg:pt-16 lg:pb-24">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Description</h1>
                    </div>

                    <!-- Options -->
                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 class="sr-only">Product information</h2>
                        <p class=" tracking-tight text-gray-500">${specification.brand}</p>
                        <p class="text-xl tracking-tight text-black-500">${payload.name}</p>
                        <div class="flex justify-start place-items-center ">
                            <p class="text-xl tracking-tight text-red-500 mr-4">${payload.discount}</p>
                            <p class="text-3xl tracking-tight text-gray-900">&#8377;${payload.price}</p>
                        </div>

                        <!-- Reviews -->
                        






                        <button
                            class="mt-10 flex w-full items-center justify-center rounded-md border border-indigo-600 bg-transparent px-8 py-3 text-base font-medium text-indigo-600 hover:text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add
                            to Wishlist</button>
                        <button onclick="buy()"
                            class="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Buy
                        </button>

                    </div>

                    <div
                        class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        <!-- Description and details -->
                        <div>
                            <h3 class="sr-only">Description</h3>

                            <div class="space-y-6">
                                <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your
                                    vibrant personality with three grayscale options. Feeling adventurous? Put on a
                                    heather
                                    gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;.
                                    Need
                                    to add an extra pop of color to your outfit? Our white tee has you covered.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolor ex necessitatibus facere praesentium perspiciatis quaerat nam ducimus a soluta. Aperiam quod voluptate obcaecati tempora eligendi in a, labore hic minus, sint provident ullam sunt mollitia doloribus iure nesciunt explicabo sapiente, autem nulla quibusdam maxime consequuntur. Possimus, reprehenderit similique, dolorem libero voluptatum maxime impedit nostrum illo modi aliquid, animi assumenda error. Unde alias eum praesentium, vel atque minus voluptatem, magnam vitae, officia soluta laborum suscipit nihil doloribus? Vel, non fugit eveniet cumque laudantium sit earum qui vero hic sapiente, modi dicta praesentium quidem mollitia laborum quo nobis exercitationem sint explicabo ullam,   </p>
                            </div>
                        </div>

                       
                    `
                    
                }
            })
            .catch((error) => {
                console.log(error)
                throw error;
            })
    } catch (error) {
        console.log("error in the overview",error)
        throw error;
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    try {
        overview();
    } catch (error) {
        throw error;
    }
})

