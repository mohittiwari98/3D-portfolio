// Minimal JS just for the spotlight effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      // Update CSS variables for the spotlight effect
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });

//adding video part here 
  const video1 = document.getElementById('projectVideo1');
  const video2 = document.getElementById('projectVideo2');
  const video3 = document.getElementById('projectVideo3');
  const video4 = document.getElementById('projectVideo4');

  const videoList =[video1, video2, video3, video4];

  videoList.forEach (function(video){
      video.addEventListener("mouseover", function(){
          video.play()
      })
      video.addEventListener("mouseout", function(){
      video.pause();
  })
  })


  // form handling
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 3 seconds
    setTimeout(function() {
      document.getElementById('successMessage').style.display = 'none';
    }, 3000);

  });


  // Send mail
  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("9c9UABgvXx_XjFIfd"); 
  
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      emailjs.sendForm("service_5buonrg", "template_5gqsi34", this);
    });
  });
  
