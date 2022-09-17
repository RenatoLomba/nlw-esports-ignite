export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  return hours * 60 + minutes
}

export function convertMinutesToHourString(minutesAmount: number) {
  const date = new Date()
  date.setMinutes(minutesAmount + 3 * 60)

  return date
    .toLocaleDateString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .split(' ')[1]
}
