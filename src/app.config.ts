export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/records/records',
    'pages/mine/mine'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#DEB887',
    navigationBarTitleText: '中国象棋',
    navigationBarTextStyle: 'black'
  },
  cloud: true
})