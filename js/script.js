// Menunggu hingga seluruh konten DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmiForm'); // Mendapatkan elemen formulir BMI
    const resultDiv = document.getElementById('result'); // Mendapatkan elemen div untuk menampilkan hasil

    // Menambahkan event listener untuk submit pada form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        // Validate input
        if (weight <= 0 || height <= 0) {
            alert('Please enter positive values for weight and height.');
            return;
        }
        
        // Convert height to meters
        const heightInMeters = height / 100;
        
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Determine BMI category
        let category = '';
        let description = '';
        let suggestion = '';
        if (bmi < 18.5) {
            category = 'Kekurangan berat badan'; // Kategori BMI kurang dari 18.5
            description = 'Anda memiliki kekurangan berat badan. Disarankan untuk mengonsumsi makanan yang lebih bergizi dan konsultasi dengan ahli gizi.';
            suggestion = `
                <p>Untuk menambah berat badan, Anda bisa mengonsumsi makanan yang tinggi kalori namun tetap sehat. Konsultasikan dengan ahli gizi untuk mendapatkan pola makan yang sesuai.</p>
            `;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat badan normal'; // Kategori BMI antara 18.5 dan 24.9
            description = 'Anda memiliki berat badan normal. Pertahankan pola makan dan gaya hidup sehat Anda.';
            suggestion = `
                <p>Untuk menjaga berat badan ideal, tetaplah berolahraga secara rutin dan jaga pola makan sehat.</p>
            `;
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan berat badan'; // Kategori BMI antara 25 dan 29.9
            description = 'Anda memiliki kelebihan berat badan. Disarankan untuk mengatur kalori makanan yang dikonsumsi dan rutin berolahraga.';
            suggestion = `
                <p>Untuk menurunkan berat badan, perhatikan asupan kalori dan tingkatkan aktivitas fisik. Mengatur pola makan dan berolahraga secara teratur dapat membantu Anda mencapai berat badan yang sehat.</p>
            `;
        } else {
            category = 'Obesitas'; // Kategori BMI 30 atau lebih
            description = 'Anda memiliki obesitas. Disarankan untuk konsultasi dengan dokter untuk program penurunan berat badan yang aman.';
            suggestion = `
                <p>Untuk mengatasi obesitas, penting untuk berkonsultasi dengan dokter atau ahli gizi. Mereka dapat membantu Anda menyusun rencana penurunan berat badan yang aman dan efektif.</p>
            `;
        }
        
        // Menampilkan hasil perhitungan BMI di elemen resultDiv
        resultDiv.innerHTML = `
            <h2>Hasil</h2>
            <p>${category}</p>
            <p>BMI Anda: ${bmi.toFixed(1)}</p>
            <p>${description}</p>
            <p>${suggestion}</p>
        `;
    });

    // Menambahkan event listener untuk reset pada form
    form.addEventListener('reset', function() {
        resultDiv.innerHTML = ''; // Mengosongkan konten resultDiv saat form direset
    });
});
