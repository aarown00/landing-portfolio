document.getElementById('contactForm').addEventListener('submit', function(e) {
        // Reset form fields after submission
        setTimeout(() => {
          this.reset();
        }, 100);
      });