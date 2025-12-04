// Smooth scroll untuk menu di navbar
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efek hover ke tombol untuk menambahkan interaksi suara hati 💖
const heroButton = document.querySelector('.hero button');
if(heroButton){
    heroButton.addEventListener('click', () => {
        console.log("User tertarik untuk mendaftar 💘");
    });
}

// Navbar berubah saat discroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.style.background = '#d93d6b';
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    } else {
        header.style.background = '#ff4f82';
        header.style.boxShadow = 'none';
    }
});

// Pop-up saat tombol "Daftar Gratis" ditekan (sementara)
const daftarBtn = document.querySelector('#daftar button');
if(daftarBtn){
    daftarBtn.addEventListener('click', () => {
        alert("🚀 Pendaftaran segera tersedia! Sistem sedang disiapkan.");
    });
}