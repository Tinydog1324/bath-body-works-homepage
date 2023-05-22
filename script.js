function addToCart(product) {
    var cartItems = document.getElementById("cart-items");
    var li = document.createElement("li");
    li.textContent = product;
    cartItems.appendChild(li);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      removeFromCart(li);
    };
    li.appendChild(deleteButton);
  }

  function removeFromCart(item) {
    item.parentNode.removeChild(item);
  }


   // JavaScript code for the image carousel
   var carouselImages = document.querySelectorAll('.carousel-image');
   var currentImageIndex = 0;

   function showNextImage() {
     carouselImages[currentImageIndex].classList.remove('active');
     currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
     carouselImages[currentImageIndex].classList.add('active');
   }

   setInterval(showNextImage, 3000); // Change image every 3 seconds



   function openModal(imageSrc) {
    var modal = document.getElementById("productModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "flex";
  }

  function closeModal() {
    var modal = document.getElementById("productModal");
    modal.style.display = "none";
  }
  



  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('header a[href^="#"]');

    navLinks.forEach(function(link) {
      link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').slice(1);
      var targetSection = document.getElementById(targetId);
      var targetOffsetTop = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
      });
    }
  });