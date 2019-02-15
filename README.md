# dropDownMenu-wechat


#### 微信小程序下拉菜单自定义组件

* 级联选择器，例如xx区-xx街道
* 下拉列表，例如排序，从多到少，从小到大

![img](https://github.com/ZBK1nger/dropDownMenu-wechat/blob/master/source/Feb-16-2019%2000-49-26.gif)

#### 使用
* 将项目中component文件夹拖入项目中
* 在将要使用的该组件的.json文件中引入，例如：

~~~

{
  "usingComponents": {
    "dropdownmenu": "/component/dropdownmenu/dropdownmenu"
  }
}

~~~
* 在.wxml文件中引用

~~~

<dropdownmenu dropDownMenuTitle='{{dropDownMenuTitle}}' dropDownMenuDistrictData='{{dropDownMenuFirstData}}' dropDownMenuSourceData='{{dropDownMenuSecondData}}' dropDownMenuStyleData='{{dropDownMenuThirdData}}' dropDownMenuFilterData='{{dropDownMenuFourthData}}'
  bind:selectedItem='selectedItem' />
  
~~~
* 如调用接口返回JSON格式不统一，亦或是导航上item种类数量不符合要求，请自行修改