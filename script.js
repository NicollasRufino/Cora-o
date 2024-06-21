document.getElementById('showButton').addEventListener('click', function() {
    const compliments = [
        "Você é incrível! Seu sorriso ilumina meu dia! Você é a melhor namorada do mundo, Eu te amo mais do que tudo,obg por tudo, desculpa por ser essa pessoa dificil, Eespero que ainda veja o seu futuro junto comigo,Eu te amo hoje e pra todo sempre!"
    ];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    document.getElementById('compliment').innerText = randomCompliment;
    document.getElementById('surprise').classList.remove('hidden');
});