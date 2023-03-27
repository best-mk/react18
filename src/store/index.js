import React from "react";
import UserStore from "./use.Store";
class RootStore {
  // 组合store
  constructor() {
    //对子模块进行实例化操作并赋值给RootStore对应的属性
    //这样将来实例化RootStore的时候就可以通过对应的属性获取导入的对应子模块的实例对象
    this.userStore= new UserStore();
	//多个模块按照上述语法补充...
  }
}

//实例化根store注入context
const rootStore = new RootStore();
//使用React的useContext机制 导出useStore方法，供业务组件统一使用
//useContext查找机制：优先从Provider value找，如果找不到，就会找createContext方法传递过来的默认参数
//核心目的：让每个业务组件可以通过统一一样的方法获取store的数据
const context = React.createContext(rootStore);

//通过useContext拿到rootStore实例对象，然后返回给useStore
//导出useStore方法，供组件通过调用该方法使用根实例
//在业务组件中 调用useStore()->rootStore
const useStore = () => React.useContext(context);
export { useStore };