export const generateAllPresents = () => {
  const startDate = new Date('2025-11-03'); // November 3, 2025
  const presents = [];

  for (let day = 1; day <= 365; day++) {
    const unlockDate = new Date(startDate);
    unlockDate.setDate(unlockDate.getDate() + (day - 1));

    const dateString = unlockDate.toISOString().split('T')[0]; // YYYY-MM-DD format

    presents.push({
      day: day,
      type: 'text',
      title: '',
      content: `Day ${day} - PavelVoliTaru${day}`,
      unlockDate: dateString,
      opened: false,
      createdAt: new Date().toISOString()
    });
  }

  return presents;
};

// Function to download as CSV for backup
export const downloadPresentsAsCSV = (presents) => {
  const headers = 'Day,Type,Title,Content,Unlock Date\n';
  const rows = presents.map(p => 
    `${p.day},${p.type},"${p.title}","${p.content}",${p.unlockDate}`
  ).join('\n');

  const csv = headers + rows;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '365-pokloni-backup.csv';
  a.click();
  window.URL.revokeObjectURL(url);
};
