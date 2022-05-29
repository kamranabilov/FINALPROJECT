// var global = window.querySelector('.header-second');
// window.addEventListener('load',window.addEventListener("scroll",function(){
//     var global = this.document.querySelector('header-second');
//     global.classList.toggle("stiky",this.window.scrollY > 150);
// }))



// window.onload = () => {
// 	document.querySelector('..canvas-close').onclick = function() {
// 	  this.parentNode.remove()
// 	  return false;
// 	};
//   };

// const product = document.getElementsByClassName(".product-wrapper-img");
// const img = document.getElementsByTagName("img");
// product.addEventListener("mousemove", onZoom);
// product.addEventListener("mouseover", onZoom);
// product.addEventListener("mouseleave", offZoom);
// function onZoom(e) {
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;
//     img.style.transformOrigin = `${x}px ${y}px`;
//     img.style.transform = "scale(2.5)";
// }
// function offZoom(e) {
//     img.style.transformOrigin = `center center`;
//     img.style.transform = "scale(1)";
// }



var closebtns = document.getElementsByClassName("search-close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}


window.addEventListener('scroll', function(){
	let welcome2 = document.querySelector(".well");

	if(window.pageYOffset>200){
		welcome2.classList.add('sticky');
	}else{
        welcome2.classList.remove('sticky');
    }
})


$(window).on('scroll', function () {
	if ($(this).scrollTop() > 600) {
		$('.scroll').removeClass('not-visible');
	} else {
		$('.scroll').addClass('not-visible');
	}
});
$('.scroll').on('click', function (event) {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
});



function sebet(id, img, title, price){
	let items = localStorage.getItem("items")
	?JSON.parse(localStorage.getItem("items"))
	:[];
	if(items.length > 0){
		if(items.some(item => item.item.id ===id)){
			items = items.filter(item => item.item.id !==id)
		}else{
			items.push({
				item:{
					id,
					img,
					title,
					price
				},
				count : 1
			})
		}
	}else{
		items.push({
			item: {
				id,
				img,
				title,
				price
			},
			count : 1
		})
	}localStorage.setItem("items", JSON.stringify(items));
};

function productList (){
	const items = localStorage.getItem("items")
	?JSON.parse(localStorage.getItem("items"))
	:[];
	const products = document.querySelector(".canvas-content");
	document.querySelector('.notic').innerHTML=items.length;
	if(items.length > 0){
		items.forEach(item =>{
			products.insertAdjacentHTML("afterbegin",  ` <div class="canvas-box">
			<div class="canvas-item">
				<ul class="custom-ul">
					<li class="custom-li">
						<div class="canvas-image">
							<a href="product-details.html">
								<img src="${item.item.img}" alt="">
							</a>
						</div>
						<div class="canvas-img-title">
							<h3 class="pro-text">
								<a class="text" href="product-details.html">${item.item.title}</a>
							</h3>
							<p class="card-pro">
								<span class="card-quantity">${item.count} <b>×</b></span>
								<span class="card-price2">${item.item.price}</span>
							</p>
						</div>
						<button class="btn-xmark"> <i class="fa-solid fa-xmark"></i></button>
					</li>
					<li class="custom-li">
						<div class="canvas-image">
							<a href="product-details.html">
								<img src="${item.item.img}" alt="">
							</a>
						</div>
						<div class="canvas-img-title">
							<h3 class="pro-text">
								<a class="text" href="product-details.html">${item.item.title}</a>
							</h3>
							<p class="card-pro">
								<span class="card-quantity">${item.count} <b>×</b></span>
								<span class="card-price2">${item.item.price}</span>
							</p>
						</div>
						<button class="btn-xmark"> <i class="fa-solid fa-xmark"></i></button>
					</li>
				</ul>
			</div>
			<div class="canvas-price-box">
				<ul>
					<li>
						<span class="sub-total">sub-total</span>
						<span class="sub-total"><b>$300.00</b></span>
					</li>
					<li>
						<span class="sub-total">Eco Tax (-2.00)</span>
						<span class="sub-total"><b>$10.00</b></span>
					</li>
					<li>
						<span class="sub-total">VAT (20%)</span>
						<span class="sub-total"><b>$60.00</b></span>
					</li>
					<li class="total">
						<span class="total2">total</span>
						<span class="total2"><b>$370.00</b></span>
					</li>
				</ul>
			</div>
			<div class="minicart-button">
				<a href="cart.html"><i class="fa-solid fa-cart-shopping"></i> view cart</a>
				<a href="cart.html"><i class="fa-solid fa-share"></i> checkout</a>
			</div>
		</div>


			
		`)
		});
	}
}

productList ();




		// <li class="custom-li">
		// 	<div class="canvas-image">
		// 		<a href="product-details.html">
		// 			<img src="${item.item.img}" alt="">
		// 		</a>
		// 	</div>
		// 	<div class="canvas-img-title">
		// 		<h3 class="pro-text">
		// 			<a class="text" href="product-details.html">${item.item.title}</a>
		// 		</h3>
		// 		<p class="card-pro">
		// 			<span class="card-quantity">${item.count}<b>×</b></span>
		// 			<span class="card-price2">${item.item.price}</span>
		// 		</p>
		// 	</div>
		// 	<button class="btn-xmark"> <i class="fa-solid fa-xmark"></i></button>
		// </li>