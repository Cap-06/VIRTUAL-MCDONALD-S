function placeOrder() {
    let selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (selectedItems.length === 0) {
      alert('Please select at least one item to order.');
      return;
    }
  
    let orderId = generateOrderId();
    let orderPromise = createOrderPromise();
  
    orderPromise.then(() => {
      displayOrderResult(orderId);
    });
  }
  
  function generateOrderId() {
    // Generate a random order id (you can implement a more sophisticated logic)
    return 'ORDER' + Math.floor(Math.random() * 1000);
  }
  
  function createOrderPromise() {
    return new Promise((resolve) => {
      let randomSeconds = Math.floor(Math.random() * 5) + 1;
      setTimeout(() => {
        resolve();
      }, randomSeconds * 1000);
    });
  }

  function displayOrderResult(orderId) {
    let orderResultDiv = document.getElementById('orderResult');
    let selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    let foodImagesHTML = '';
  
    selectedItems.forEach((item) => {
      switch (item.value) {
        case 'Burger':
          foodImagesHTML += `<img src="https://mcdonaldsblog.in/wp-content/uploads/2019/08/mcdonalds-indian-burger-new.jpg" alt="Burger" class="foodImage">`;
          break;
        case 'Fries':
          foodImagesHTML += `<img src="https://lh3.googleusercontent.com/PvoBeKMLrw5uZqgIl0OxM04cpRhr7w4AKQjSoYGLhv0yciTCq2rh8w8PWmZHHbbEBczdv9cLZwYaOJgIALAELebyQxGB=w1200-rw" alt="Fries" class="foodImage">`;
          break;
        case 'Cold-Drink':
          foodImagesHTML += `<img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2023/7/8/original/Mixology_revised.jpg" alt="Drink" class="foodImage">`;
          break;
          case 'Coffee':
          foodImagesHTML += `<img src="https://content.fortune.com/wp-content/uploads/2016/10/94648598.jpg" alt="Drink" class="foodImage">`;
          break;
      }
    });
  
    orderResultDiv.innerHTML = `${foodImagesHTML}<div class="orderId">${orderId}</div>`;
  }



