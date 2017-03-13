//logs.js
var util = require('../../utils/util.js')
var initLine="this is the first initLine";
var extensionLine=[];
var types = ['default', 'primary', 'warn'];
for (var i = 0; i < types.length; ++i) {
  (function(type) {
    types = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page({
  data: {
   text:initLine,
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  onLoad: function () {
 
  },
add:function(){
  extensionLine.push("other line"),
  this.setData({
     text: initLine + '\n' + extensionLine.join('\n')
  })
},
remove:function(e){
extensionLine.pop();
this.setData({
  text:initLine+"\n"+extensionLine.join("\n")
})
},
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }



})
