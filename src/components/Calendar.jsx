import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay, isSameDay } from 'date-fns';

export function Calendar({ selectedDate, onDateSelect }) {
  const monthStart = startOfMonth(new Date(2025, 4));
  const monthEnd = endOfMonth(new Date(2025, 4));
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const isWeekend = (date) => {
    const d = getDay(date);
    return d === 0 || d === 5 || d === 6;
  };

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="font-bold">{d}</div>)}
        {Array.from({ length: getDay(monthStart) }).map((_, i) => <div key={i}></div>)}
        {days.map((day) => (
          <button key={day}
            onClick={() => onDateSelect(day)}
            className={`rounded border p-2 bg-white ${isSameDay(day, selectedDate) ? 'bg-blue-100 border-blue-400' : 'hover:bg-blue-50'}`}>
            <span>{format(day, 'd')}</span>
            <span className="block text-xs text-blue-600">{isWeekend(day) ? '150 BGN' : '130 BGN'}</span>
          </button>
        ))}
      </div>
    </div>
  );
}