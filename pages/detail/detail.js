
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
var md5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');
Page({
  data:{
    // text:"这是一个页面"
    list: [{
      firstImg: "../image/iReading_Article.png", desc: "国家主席习近平16日应约同美国总统特朗普通电话。习近平指出，过去的一年，中美关系总体保持稳定并取得重要进展。保持中美关系健康稳定发展，符合两国和两国人民利益，也是国际社会共同期待。双方要保持高层及各级别交往，充分发挥4个高级别对话机制作用并适时举办第二轮对话。中美经贸合作给两国人民带来许多实实在在的利益。双方应该采取建设性方式，通过对彼此开放市场、做大合作蛋糕，妥善解决双方关切的经贸问题。要积极推进两军、执法、禁毒、人文、地方等合作，就重大国际和地区问题保持密切沟通协商。双方要相向而行、相互尊重、聚焦合作，以建设性方式处理敏感问题，尊重彼此核心利益和重大关切，维护中美关系健康稳定发展势头。特朗普表示，美方高度重视对华关系和美中合作，愿同中方一道，加强高层及各级别交往，拓展务实领域合作，处理好两国经贸中的问题，推动双边关系取得更大发展。习近平应询介绍了对当前朝鲜半岛局势的看法，指出朝鲜半岛形势出现一些积极变化。各方应该共同努力把来之不易的缓和势头延续下去，为重启对话谈判创造条件。实现朝鲜半岛无核化，维护朝鲜半岛和平稳定符合各方共同利益，维护国际社会在这个问题上的团结十分重要。中方愿继续同包括美方在内的国际社会一道，密切沟通、相互信任、相互尊重、加强合作，推动朝鲜半岛问题朝着妥善解决的方向不断取得进展。"}],
     dd:'',
     hidden:false,
     page: 1,
     size: 20,
     hasMore:true,
     hasRefesh:false,
  },
  onLoad:function(options){
   console.log(md5.hex_md5('123456'));
    // console.log(d);
    // var that = this;
    // var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    // network_util._get(url,
    // function(res){
    // that.setData({
    //    list:res.data.result.list,
    //    hidden: true,
    // });
    // },function(res){
    //  console.log(res);
//  });


let map = new Map();
// map.set('username','13261570828');
// map.set('password','123456');
// map.set('orgid','0010000');0010000022464
map.set('customerid','0010000022464');
let d = json_util.mapToJson(util.tokenAndKo(map));
console.log(d);
 var url1 = 'http://127.0.0.1:8088/getUserBindingDevice';
 var that = this;
network_util._post(url1,d,
function(res){
     console.log(res);
    },function(res){
    that.setData({
      hidden: true,
    });
     console.log(res);
 });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
   //事件处理函数
  bindViewTap: function(e) {
    console.log(e.currentTarget.dataset.title);
  },

  loadMore: function(e) {
     var that = this;
    that.setData({
    hasRefesh:true,});
    if (!this.data.hasMore) return
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno='+(++that.data.page)+'&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
       list: that.data.list.concat(res.data.result.list),
       hidden: true,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
  })
},

refesh: function(e) {
 var that = this;
 that.setData({
    hasRefesh:true,
 });
    var url = 'http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=1&ps=10';
    network_util._get(url,
    function(res){
    that.setData({
      list:res.data.result.list,
       hidden: true,
       page:1,
       hasRefesh:false,
    });
    },function(res){
     console.log(res);
 })
},
})
