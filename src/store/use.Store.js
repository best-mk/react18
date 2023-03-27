//用户模块
import { computed, makeAutoObservable } from "mobx";
class UserStore {
  //定义数据
  userinfo= [];
  constructor() {
    //响应式处理
    makeAutoObservable(this, {
      // 标记computed
      fillterList: computed,
    });
    //如果没有计算属性直接：
    //makeAutoObservable(this);
  };
  //get计算属性：computed,计算属性需要在makeAutoObservable里做一下标记
  get fillterList() {
    return this.userinfo.filter((item) => item.name==='ailjx');
  };
  addUse = () => {
    this.userinfo.push({})
  };
}
//导出
export default UserStore;