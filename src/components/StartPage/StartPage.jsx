export default function StartPage({ nextPage }) {
  const operations = [
    'Отборы',
    'Упаковка',
    'Сортировка по СД',
    'Пересоздание задания',
    'Консолидация',
    'Отгрузка',
    'Заказ пустых ТОТов',
    'Работа с пустыми ТОТами',
    'Новая упаковка',
  ];
  return (
    <main className="main">
      {operations.map((text, i) => (
        <button key={i} className="main__operation-button transition" onClick={nextPage}>
          {text}
        </button>
      ))}
    </main>
  );
}
