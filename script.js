document.getElementById('drawButton').addEventListener('click', () => {
  const selected = new Set();
  while (selected.size < 4) {
    const rand = Math.floor(Math.random() * 25) + 1;
    selected.add(rand);
  }

  const sortedNumbers = Array.from(selected).sort((a, b) => a - b);
  const numbersText = sortedNumbers.join(', ');

  Swal.fire({
    title: '추첨 결과',
    text: `오늘의 청소 당번은 ${numbersText}번입니다.`,
    icon: 'success',
    confirmButtonText: '확인',
    customClass: {
      title: 'text-xl font-bold text-blue-600',
      content: 'text-lg text-gray-700',
      confirmButton: 'bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600'
    }
  });
});
