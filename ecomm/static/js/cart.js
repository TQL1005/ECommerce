document.addEventListener('DOMContentLoaded', function() { //load thru all page
    var updateBtns = document.getElementsByClassName("update-cart");

    for (var i = 0; i < updateBtns.length; i++) { // receive full amount btn
        updateBtns[i].addEventListener('click', function() {
            var productID = this.dataset.product;
            var action = this.dataset.action;
            console.log("productID", productID, "action", action);

            console.log('user',user)
            if(user === "AnonymousUser"){
                addCookieItem(productID, action)
            }else{
                updateUserOrder(productID,action) //
            }
        });
    }
});



function updateUserOrder(productId,action){
    console.log('User is logged in ')

    var url = '/update_item/'
    fetch (url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action}) // pushing data productId and action into JSON down to BackEnd
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data',data)
        location.reload();// reload page every item added
    })
}

function addCookieItem(productId, action){
	console.log('User is not authenticated')

	if (action == 'add'){
		if (cart[productId] == undefined){
		cart[productId] = {'quantity':1}

		}else{
			cart[productId]['quantity'] += 1
		}
	}

	if (action == 'remove'){
		cart[productId]['quantity'] -= 1

		if (cart[productId]['quantity'] <= 0){
			console.log('Item should be deleted')
			delete cart[productId];
		}
	}
	console.log('CART:', cart)
	document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"

	location.reload()
}

