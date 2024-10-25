/**
 * 存储localStorage
 */
export const cmSetStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const cmGetStore = (name) => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const cmRemoveStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

// 获取对应的
export const cmGetStoreItem = (name) => {
  if (!name) return
  const obj = window.localStorage.getItem(name)
  return JSON.parse(obj)
}

// 用于判断有没有重复的成语,将ID返回
const findDuplicateIdioms = (dictionary) => {
  const idiomMap = {};
  const duplicates = [];

  dictionary.forEach(({ id, words }) => {
    if (idiomMap[words]) {
      // 如果成语已经在 map 中，添加其 ID
      duplicates.push(id);
      // 同时添加原来成语的 ID
      if (!duplicates.includes(idiomMap[words])) {
        duplicates.push(idiomMap[words]);
      }
    } else {
      // 如果成语不在 map 中，添加成语及其 ID
      idiomMap[words] = id;
    }
  });

  return duplicates;
};

/***
 * @跳转对应小程序参数封装
 * 101  健康自测，心里自测
    102  视频直播
    103  秒杀商品
    104  福利商品
    111  优惠券
    112  我的收藏
    113  购物车
    114  消息中心
    115  订单
    116  我的体检
    117  我的护理
    118  我的预约
    119  我的测评
    120  我的报告
    121  我的地址
    127  积分商品列表
    128  积分商品详情
    --130  积分商品详情
 *
 */
export const cmXcxParams = (pt, pid, goodsType) => {
  if (!pt) return
  const obj = window.localStorage.getItem('main')

  let params = {
    path: '/pages/user/oauth',
    query: `uid=${
      JSON.parse(obj).userInfo.id
    }&pt=${pt}&pid=${pid}&goodsType=${goodsType}`
  }
  return params
}

/**
 * 日期时间格式化
 * yyyy年MM月dd日
 * hh:mm:ss
 */

export const dateFormat = function (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  date = new Date(date)
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

// js判断
export const regularCheck = (str, type) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str)
    case 'number': //数字
      return /^[0-9]$/.test(str)
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str)
    case 'lower': //小写
      return /^[a-z]+$/.test(str)
    case 'upper': //大写
      return /^[A-Z]+$/.test(str)
    case 'dateBirth': // 判断年份月份日期 2023-02-10 1920 - 2028 5年
      return /^((19[1-9]\d{1})|(20((0[0-9])|(2[0-8]))))\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2][0-9])|30|31)$/
    default:
      return true
  }
}

// import { cmXcxParams,wxNavigator } from '@/utils/common'
// import { wxNavigator } from '@/utils/common'
// wxNavigator(true,res.data,104,item.id)
/**
 * 判断环境、跳转
 * 调用示例：wxNavigator(是否跳转，跳转url，字典索引(对应小程序页面)类型,跳转详情id)
 * wxNavigatorIs()参数：isRouterTo：是否跳转
 * routerTo()参数： url：跳转路径、id：详情id
 * pageInt：字典索引(对应小程序页面)类型
 * consultId: 咨询id
 */
export const wxNavigator = (isRouterTo, url, pageInt, id, consultIds, goodsType) => {
  let consultId = consultIds ? consultIds : ''
  let wxEnvment = 1
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    wx.miniProgram.getEnv((res) => {
      if (res.miniprogram) {
        wxEnvment = 1
      } else {
        wxEnvment = 2
      }
    })
  } else {
    wxEnvment = 3
  }
  if (isRouterTo) {
    routerTo(wxEnvment, url, pageInt, id, consultId, goodsType)
  }
  return wxEnvment
}

/**
 * 页面跳转：
 * 区分：微信内部1、微信浏览器2、浏览器3
 * 参数： pageInt：字典索引(对应小程序页面)类型、url：跳转路径、id：详情id
 */
export const routerTo = (wxEnvment, url, pageInt, id, consultId, goodsType) => {
  if (wxEnvment === 1) {
    let wxPath = wxPathStatus(pageInt, id, consultId, goodsType)
    wx.miniProgram.navigateTo({
      url: wxPath
    })
  } else if (wxEnvment === 2) {
    window.location.href = url
  } else if (wxEnvment === 3) {
    window.location.href = url
  }
}

/***
 * @定义微信枚举路径
 * 参数：pageInt: 索引、id：参数、goodsType：商品类型
 * 字典索引(对应小程序页面)：
 * 101  健康自测，心里自测
  102  视频直播
  103  秒杀商品
  104  福利商品
  111  优惠券
  112  我的收藏
  113  购物车
  114  消息中心
  115  订单
  116  我的体检
  117  我的护理
  118  我的预约
  119  我的测评
  120  我的报告
  121  我的地址
 */
let wxPathStatus = (pageInt, id, consultId, goodsType) => {
  switch (pageInt) {
    case 101: //健康自测，心里自测
      return `../../pages/promotion/index0?contentType=${id}`
    case 102: //直播详情
      return `../../pages/video/videoDetail?Vid=${id}`
    case 103: //商品详情
      return `../../pages_submblies/center/shopProductDetail?id=${id}`
    case 104: //福利详情
      return `../../pages_submblies/center/shopRegisterDetails?id=${id}`
    case 111: //优惠券
      return '../../pages_submblies/user/coupon'
    case 112: //我的收藏
      return '../../pages_submblies/user/myCollection'
    case 113: //购物车
      return '../../pages/cart/index'
    case 114: //消息中心
      return '../../pages_submblies/user/messageCenter'
    case 115: //订单
      return `../../pages_submblies/order/index?id=${id}`
    case 116: //我的体检
      return '../../pages_submblies/reservation/reservationList?type=2'
    case 117: //我的护理
      return '../../pages_submblies/reservation/reservationList?type=1'
    case 118: // 我的预约
      return '../../pages_submblies/reservation/reservationList?type=3'
    case 119: //我的测评
      return '../../pages_submblies/answer/text_result'
    case 120: //我的报告
      return '../../pages_subpackage_one/reportPage/index'
    case 121: //我的地址
      return '../../pages/address/index'
    case 122: // 测评详情页
      return `../../pages_submblies/answer/test_details?id=${id}`
    case 123: // 健康e企行活动列表
      return `../../pages_submblies/activityModule/activity-list`
    case 124: // 视频咨询
      return `../../pages/home/callkit?id=${id}&consultId=${consultId}`
    case 125: // 通用预览下载文件
      return `../../pages_subpackage_one/download/index?id=${id}`
    case 126: // 消息公告详情
      return `../../pages_submblies/user/messageDetail?id=${id}`
    case 127: // 积分商品首页
      return `../..//pages_submblies/integral/integral-shop`
    case 128: // 积分商品详情
      return `../../pages_submblies/integral/integral-product-details?id=${id}&goodsType=${goodsType}`
    case 130: // 测评
      return `../../pages/promotion/index0`
  }
}

// 企微客户
export const onCtService = () => {
  wx.openCustomerServiceChat({
    extInfo: {
      url: 'https://work.weixin.qq.com/kfid/kfc7f09810fa05c1510'
    },
    corpId: 'wwb0358bf95f575fd5',
    showMessageCard: true,
    success(res) {
      console.log(res, '成功')
    }
  })
}

// 检测客户端
export const modelJudgment = () => {
  /**
   * toLowerCase()
   */
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (
    userAgent.match(/iPad/i) ||
    userAgent.match(/iPhone/i) ||
    userAgent.match(/iPod/i)
  ) {
    return 'iOS'
  } else if (userAgent.match(/Android/i)) {
    return 'Android'
  } else {
    return 'unknown'
  }
}

/***
 * 接收小程序参数处理
 * ctx：截取指定参数名称
 * 示例：id
 */
export const getCodeFromUrl = (ctx) => {
  const queryString = window.location.href.split('?')[1] || ''
  const params = queryString.split('&')
  for (let i = 0; i < params.length; i++) {
    const param = params[i].split('=')
    if (param[0] === ctx) {
      return param[1]
    }
  }
  return null
}
