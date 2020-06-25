import { information } from "01/r_comp"

const taskInfo = [
  ["Причина задачи", "creationReason"],
  ["Номер задачи", "id"],
  ["Дата создания", "creationTime"],
  ["Адрес", "address", "housingStockId"],
  ["Комментарий к квартире", ""],
  ["Теги к квартире", ""],
  ["Собственник 1", ""],
  ["Статус собственника 1", ""],
  ["Юридическое состояние", ""],
  ["Номер ЛС собственника 1", ""],
  ["Контактный номер телефона", ""],
]

export const useInformation = (state) => {
  return {
    loading: false,
    list: taskInfo.reduce((l, { 0: title, 1: value, 2: url }) => {
      if (/дата/i.test(title)) {
        return [
          ...l,
          { title, value: new Date(state[value]).toLocaleDateString() },
        ]
      }
      if (/адрес/i.test(title)) {
        return [
          ...l,
          { title, value: state[value], url: `/objects/${state[url]}` },
        ]
      }
      return [...l, { title, value: state[value] ?? "-" }]
    }, []),
  }
}