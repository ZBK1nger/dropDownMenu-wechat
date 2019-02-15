
const app = getApp()
Page({
  data: {
    dropDownMenuTitle: ['区域', '来源', '租售', '筛选'],
    dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
    dropDownMenuFirstData: [
      {
        id: 0, title: '不限',
      },
      {
        id: 1, title: '道里区',
        childModel: [
          { id: '1-1', title: '中央大街' },
          { id: '1-2', title: '埃德蒙顿路' }]
      },
      {
        id: 2, title: '南岗区',
        childModel: [
          { id: '2-1', title: '果戈里' },
          { id: '2-2', title: '通达街' }]
      },
      {
        id: 3, title: '松北区',
        childModel: [
          { id: '3-1', title: '世茂大道' },
          { id: '3-2', title: '市政府' }]
      }
    ],
    dropDownMenuSecondData: [
      { id: 1, title: '个人房源' },
      { id: 2, title: '经纪人房源' }],
    dropDownMenuThirdData: [
      { id: 1, title: '出租' },
      { id: 2, title: '出售' }]
  },
  onLoad: function () {

  },
  /**
* 生命周期函数--监听页面初次渲染完成
*/
  onReady: function () {

  },
  selectedItem: function (e) {
    console.log("选中的id：" + e.detail.selectedId + "；选中的内容：" + e.detail.selectedTitle);
  },
})