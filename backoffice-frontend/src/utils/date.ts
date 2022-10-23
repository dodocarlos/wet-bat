import { format } from 'date-fns'

const formatDate = (date: number | Date) => format(date, 'MM/dd/yyyy')

export { formatDate }
