import api from '../../services/api'

export function sendMessage(data) {
  return api.post('/confidential', data)
}
