import { ElNotification } from 'element-plus'

var notificationInstance = null

export default (options) => {
  notificationInstance && notificationInstance.close()
  notificationInstance = ElNotification(options)
}
