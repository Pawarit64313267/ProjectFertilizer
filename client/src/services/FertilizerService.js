import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('fertilizer') 
  },
  show(fertilizerId) {
    return Api().get('fertilizer/' + fertilizerId) 
  },
  post(fertilizer) {
    return Api().post('fertilizer', fertilizer) 
  },
  put(fertilizer) {
    return Api().put('fertilizer/' + fertilizer.id, fertilizer) 
  },
  delete(fertilizerId) {
    return Api().delete('fertilizer/' + fertilizerId) 
  },
}
