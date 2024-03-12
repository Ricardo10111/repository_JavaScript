const oneDay = new Date('1989-09-15 17:43:12')
const today = new Date()

const comparationDate = (date1, date2) => {
  const diference = date2 - date1

  const segundos = Math.floor(diference / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)
  const meses = Math.floor(dias / 30)
  const años = Math.floor(meses / 12)

  return {
    minutos,
    segundos,
    dias,
    meses,
    años
  }
}
console.log(
  `Desde ${oneDay} hasta ${today} han pasado ${comparationDate(oneDay, today).minutos} minutos, ${comparationDate(oneDay, today).segundos} segundos, ${comparationDate(oneDay, today).dias} dias, ${comparationDate(oneDay, today).meses} meses y ${comparationDate(oneDay, today).años} años`
)
