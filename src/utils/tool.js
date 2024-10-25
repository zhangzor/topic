import {
  showToast,
  showLoadingToast,
  showConfirmDialog,
  showImagePreview
} from 'vant'

/**
 * 定义多种弹窗
 * 自定义
 */
export const isShowToast = (name, overlay, duration) => {
  return showToast({ message: name, overlay: overlay ? true : false, duration: duration ? duration : 2000 })
}

/**
 * 带文案
 * 自定义
 */
export const isShowLoadingToast = (name, forbidClick, overlay, duration) => {
  return showLoadingToast({
    message: name ? name : '加载中...',
    forbidClick: forbidClick ? true : false,
    overlay: overlay ? true : false,
    duration: duration === true ? 0 : (duration > 0 ? duration : 500)
  })
}

export const isShowConfirmDialog = (
  title,
  confirmButtonText,
  confirmButtonColor,
  cancelButtonText,
  message
) => {
  return showConfirmDialog({
    title: title ? title : '',
    confirmButtonText: confirmButtonText ? confirmButtonText : '确定',
    confirmButtonColor: confirmButtonColor ? confirmButtonColor : '#1B8BFF',
    cancelButtonText: cancelButtonText ? cancelButtonText : '取消',
    message: message ? message : '提示内容？'
  })
    .then(() => {
      return 1
    })
    .catch(() => {
      return 2
    })
}

// 回到顶部
export const iscrollTop = () => {
  return window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 图片预览
export const openImagePreview = (list, index, closeable) => {
  return showImagePreview({
    images: list ? list : [],
    startPosition: index ? index : 0,
    closeable: closeable ? closeable : false
  })
}
