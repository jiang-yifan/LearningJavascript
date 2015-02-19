Function.prototype.myBind= function (obj){
  var fn = this;
  return function(){
    return  fn.apply(obj);
  };
};
