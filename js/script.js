document.addEventListener('DOMContentLoaded', function() {
    
    // Get form dan output elements
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const birthdateInput = document.getElementById('birthdate');
    const messageInput = document.getElementById('message');
    
    // Output elements
    const outputName = document.getElementById('outputName');
    const outputBirthdate = document.getElementById('outputBirthdate');
    const outputGender = document.getElementById('outputGender');
    const outputMessage = document.getElementById('outputMessage');
    const currentTimeElement = document.getElementById('currentTime');
    
    // Update current time
    function updateCurrentTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toString();
    }
    
    // Update time setiap detik
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // Update output saat input berubah (real-time)
    nameInput.addEventListener('input', function() {
        outputName.textContent = this.value || 'Harfi Novan';
    });
    
    birthdateInput.addEventListener('change', function() {
        outputBirthdate.textContent = this.value || '01/11/1995';
    });
    
    // Update gender saat radio button berubah
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            outputGender.textContent = this.value;
        });
    });
    
    messageInput.addEventListener('input', function() {
        outputMessage.textContent = this.value || 'I use Linear, Buat Website';
    });
    
    // Form submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi sederhana
        if (!nameInput.value) {
            alert('Nama harus diisi!');
            return;
        }
        
        if (!birthdateInput.value) {
            alert('Tanggal lahir harus diisi!');
            return;
        }
        
        if (!messageInput.value) {
            alert('Pesan harus diisi!');
            return;
        }
        
        alert('Form berhasil disubmit!');
    });
    
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});