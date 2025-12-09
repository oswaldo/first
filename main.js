'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.h() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.tz();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.q(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.q.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.w();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.w.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.tA(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.q = (function(that) {
  return (this === that);
});
$p.x = (function() {
  var i = this.w();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.x();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.A = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.h = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.A = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.h = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = $L0;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.A = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.h = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.A = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    C: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.A = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.h = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    C: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  at: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).jz() + "@") + $thiz.w());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.dN();
  return ((x === (void 0)) ? $thiz.dJ() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().q4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().gL, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.q4 = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rH = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  cM: 1
}));
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
$p = $c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $p;
$p.pG = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  cP: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.ew = 0;
  this.ew = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pw = (function() {
  if ((this.ew === 2147483647)) {
    this.ew = 1;
  } else {
    this.ew = ((1 + this.ew) | 0);
  }
  return this.ew;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  cQ: 1
}));
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.hl = null;
  this.ke = null;
  this.hm = 0;
  this.hl = code;
  this.ke = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gl();
  this.hm = ((x === (void 0)) ? 1 : ((1 + x.hm) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gs === (-1)) || (this.hm > $m_Lcom_raquo_airstream_core_Transaction$().gs))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gs));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b5) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().dU.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().j1(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  cR: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gs = 0;
  this.kf = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gs = 1000;
  this.kf = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.oS = (function(transaction) {
  try {
    transaction.hl.e(transaction);
    var x = transaction.ke;
    if ((x !== (void 0))) {
      while (x.tE()) {
        x.tv().tH(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().c9(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  cS: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.gt.length | 0) === 0)) {
    if ((($thiz.dU.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.dU.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().j1($thiz.dU.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.gt.length | 0) > 0)) {
        var callback = $thiz.gt.shift();
        try {
          callback.e(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().c9(e$2);
        }
      }
      while ((($thiz.dU.length | 0) > 0)) {
        var _trx = $thiz.dU.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().j1(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.b5 = false;
  this.gt = null;
  this.dU = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.b5 = false;
  this.gt = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_F1.r().C)([])));
  this.dU = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  cT: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.dV.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gu.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gu.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.dV.set(parent, newChildren);
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ((maybeParentChildren.length | 0) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = x.shift();
    if (((x.length | 0) === 0)) {
      (!(!$thiz.dV.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gu = null;
  this.dV = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gu = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.dV = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.j1 = (function(newTransaction) {
  var x = this.gl();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().oS(newTransaction);
    this.rn(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rn = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gl();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().s(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sz(transaction$tailLocal1);
    transaction$tailLocal1.hl = $m_Lcom_raquo_airstream_core_Transaction$().kf;
    var maybeNextTransaction = this.gl();
    if ($m_sr_BoxesRunTime$().s(maybeNextTransaction, (void 0))) {
      if (((this.dV.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.dV.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.ed + (transactions.length | 0)) | 0);
          numChildren.ed = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.ed) + " children for ") + (this.dV.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().oS(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sz = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().s(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gl();
      if ((!$m_sr_BoxesRunTime$().s(maybeParentTransaction, (void 0)))) {
        doneTransaction$tailLocal1 = maybeParentTransaction;
      } else {
        return (void 0);
      }
    } else {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, maybeNextChildTrx);
      return (void 0);
    }
  }
});
$p.gl = (function() {
  return this.gu[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  cU: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onWillStart, onStart, onStop) {
  this.kj = null;
  this.kh = null;
  this.ki = null;
  this.kj = onWillStart;
  this.kh = onStart;
  this.ki = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  cX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config$;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = $p;
$p.qP = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  cY: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.cX.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.cX.splice(index, 1);
    if ((!$thiz.bJ.c())) {
      subscription.pz();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.gy.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.gy.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.kP = null;
  this.cX = null;
  this.ex = false;
  this.gy = null;
  this.bJ = null;
  this.ey = 0;
  this.kP = onAccessAfterKilled;
  this.cX = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.ex = true;
  this.gy = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bJ = $m_s_None$();
  this.ey = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oq = (function() {
  if ((!(!this.bJ.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.kP);
      this.bJ = new $c_s_Some(newOwner);
      this.ex = false;
      this.ey = 0;
      var i = 0;
      var originalNumSubs = (this.cX.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.ey) | 0);
        this.cX[ix].px(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.ex = true;
      this.ey = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.b5 || (!when))) {
      f();
    } else {
      this$4.b5 = true;
      try {
        f();
      } finally {
        this$4.b5 = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.rg = (function() {
  if ((!this.bJ.c())) {
    this.ex = false;
    var arr = this.cX;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pz();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bJ;
    if ((!this$4.c())) {
      this$4.H().pt();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.ex = true;
    this.bJ = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qK = (function(subscription, prepend) {
  if (prepend) {
    this.ey = ((1 + this.ey) | 0);
    this.cX.unshift(subscription);
  } else {
    this.cX.push(subscription);
  }
  var this$1 = this.bJ;
  if ((!this$1.c())) {
    var x0 = this$1.H();
    subscription.px(x0);
  }
});
$p.sK = (function(subscription) {
  if (this.ex) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.gy.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  d3: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.gz = null;
  this.kQ = null;
  this.gA = null;
  this.gz = dynamicOwner;
  this.kQ = activate;
  this.gA = $m_s_None$();
  dynamicOwner.qK(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hb = (function() {
  this.gz.sK(this);
});
$p.px = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.gA = this.kQ.e(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b5 || (!when))) {
    f();
  } else {
    this$2.b5 = true;
    try {
      f();
    } finally {
      this$2.b5 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pz = (function() {
  var this$1 = this.gA;
  if ((!this$1.c())) {
    this$1.H().hb();
    this.gA = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  d4: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $p;
$p.gq = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.e(owner)))), prepend);
});
$p.pU = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.e(owner);
    return $m_s_None$();
  })), prepend);
});
$p.pV = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  d5: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.oT($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.f8();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.f8().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.f8().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.f8().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.f8().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.hv)) {
    $thiz.kT.S();
    $thiz.hv = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.kU = null;
  this.kT = null;
  this.hv = false;
  this.kU = owner;
  this.kT = cleanup;
  this.hv = false;
  owner.pE(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hb = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.kU, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  d7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.kV = null;
  this.kW = null;
  this.cY = null;
  this.dW = false;
  this.kV = activate;
  this.kW = deactivate;
  this.cY = $m_s_None$();
  this.dW = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.s3 = (function() {
  var this$1 = this.cY;
  return ((!this$1.c()) && (!this$1.H().gz.bJ.c()));
});
$p.t0 = (function(nextOwner) {
  if (this.dW) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cY;
  if ((!this$1.c())) {
    var x0 = this$1.H();
    var x$2 = x0.gz;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.s3() && (!nextOwner.bJ.c()))) {
      this.dW = true;
    }
    var this$3 = this.cY;
    if ((!this$3.c())) {
      this$3.H().hb();
      this.cY = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.dW)) {
        this.kV.S();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.dW)) {
          this.kW.S();
        }
      })));
    })), false);
    this.cY = new $c_s_Some(newPilotSubscription);
    this.dW = false;
  }
});
$p.r3 = (function() {
  if (this.dW) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cY;
  if ((!this$1.c())) {
    this$1.H().hb();
  }
  this.cY = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  d8: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
$p = $c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $p;
$p.j7 = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  dc: 1
}));
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
$p = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $p;
$p.oE = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pj(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().qP(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  df: 1
}));
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
$h_Lcom_raquo_ew_JsArray$.prototype = $p;
$p.be = (function(items) {
  return [...$m_sjsr_Compat$().ta(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dg: 1
}));
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$RichJsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$h_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = $p;
$p.rT = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rA = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  dh: 1
}));
var $n_Lcom_raquo_ew_JsArray$RichJsArray$;
function $m_Lcom_raquo_ew_JsArray$RichJsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$RichJsArray$)) {
    $n_Lcom_raquo_ew_JsArray$RichJsArray$ = new $c_Lcom_raquo_ew_JsArray$RichJsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$RichJsArray$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.l8 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.oY($m_Lcom_raquo_laminar_api_package$().b.ba().pW());
  this.l8 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qL = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.U instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.sH = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.U instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.rZ = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.U instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.rY = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.U instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.sM = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.U instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.s7 = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? null : maybeShadowHost);
    }
    if ((effectiveParentNode === null)) {
      return false;
    }
    if ($m_sr_BoxesRunTime$().s(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.qA = (function(element, listener) {
  element.addEventListener(listener.eC.d2.eB, listener.hO, listener.hP);
});
$p.sI = (function(element, listener) {
  element.removeEventListener(listener.eC.d2.eB, listener.hO, listener.hP);
});
$p.re = (function(tag) {
  return document.createElement(tag.i0);
});
$p.rK = (function(element, attr) {
  var x = this.rL(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hH.jk(x));
});
$p.rL = (function(element, attr) {
  var domValue = element.bm.getAttributeNS(null, attr.fj);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pQ = (function(element, attr, value) {
  this.sW(element, attr, attr.hH.g4(value));
});
$p.sW = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sJ(element, attr);
  } else {
    element.bm.setAttribute(attr.fj, domValue);
  }
});
$p.sJ = (function(element, attr) {
  element.bm.removeAttribute(attr.fj);
});
$p.sX = (function(element, prop, value) {
  this.sY(element, prop, prop.mQ.g4(value));
});
$p.sY = (function(element, prop, value) {
  element.bm[prop.e0] = value;
});
$p.sZ = (function(element, styleProp, value) {
  var ref = element.bm;
  var styleCssName = styleProp.hI;
  var prefixes = styleProp.hJ;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.bh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.oY = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.i1);
});
$p.rN = (function(element, attr) {
  var x = this.rO(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hK.jk(x));
});
$p.rO = (function(element, attr) {
  var $x_2 = element.d3;
  var this$2 = attr.gF;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.H()), attr.hL);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pR = (function(element, attr, value) {
  this.t1(element, attr, attr.hK.g4(value));
});
$p.t1 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sL(element, attr);
  } else {
    var this$1 = attr.gF;
    if (this$1.c()) {
      element.d3.setAttribute(attr.gE, domValue);
    } else {
      var x0 = this$1.H();
      element.d3.setAttributeNS(x0, attr.gE, domValue);
    }
  }
});
$p.sL = (function(element, attr) {
  var $x_1 = element.d3;
  var this$2 = attr.gF;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.H()), attr.hL);
});
$p.sU = (function(element, attr, value) {
  this.sV(element, attr, attr.mN.g4(value));
});
$p.sV = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sF(element, attr);
  } else {
    element.a2().setAttribute(attr.hE, domValue);
  }
});
$p.sF = (function(element, attr) {
  element.a2().removeAttribute(attr.hE);
});
$p.rd = (function(text) {
  return document.createComment(text);
});
$p.rf = (function(text) {
  return document.createTextNode(text);
});
$p.s4 = (function(element) {
  return $m_sc_StringOps$().r7(element.tagName, 45);
});
$p.ri = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.oZ(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.oZ = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.l8, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rh = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  di: 1
}));
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_Seq(seq, scalaArray, jsArray) {
  this.hB = null;
  this.l9 = null;
  this.hA = null;
  this.hB = seq;
  this.l9 = scalaArray;
  this.hA = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bh = (function(f) {
  if ((this.hB !== null)) {
    this.hB.bh(f);
  } else if ((this.hA !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rA(this.hA, $m_sjs_js_Any$().pj(f));
  } else {
    $m_sc_ArrayOps$().rB(this.l9, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dj: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_Seq$() {
}
$p = $c_Lcom_raquo_laminar_Seq$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq$;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq$() {
}
$h_Lcom_raquo_laminar_Seq$.prototype = $p;
var $d_Lcom_raquo_laminar_Seq$ = new $TypeData().i($c_Lcom_raquo_laminar_Seq$, "com.raquo.laminar.Seq$", ({
  dk: 1
}));
var $n_Lcom_raquo_laminar_Seq$;
function $m_Lcom_raquo_laminar_Seq$() {
  if ((!$n_Lcom_raquo_laminar_Seq$)) {
    $n_Lcom_raquo_laminar_Seq$ = new $c_Lcom_raquo_laminar_Seq$();
  }
  return $n_Lcom_raquo_laminar_Seq$;
}
function $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.gB = $m_Lcom_raquo_airstream_state_Var$();
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Implicits$RichSource$() {
}
$p = $c_Lcom_raquo_laminar_api_Implicits$RichSource$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Implicits$RichSource$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Implicits$RichSource$() {
}
$h_Lcom_raquo_laminar_api_Implicits$RichSource$.prototype = $p;
$p.iW = (function(this$, onNext) {
  return new $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
    var observable = this$.dQ();
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pV(_$11.bs(), observable, onNext);
  })), $m_Lcom_raquo_laminar_modifiers_Binder$());
});
var $d_Lcom_raquo_laminar_api_Implicits$RichSource$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Implicits$RichSource$, "com.raquo.laminar.api.Implicits$RichSource$", ({
  dm: 1
}));
var $n_Lcom_raquo_laminar_api_Implicits$RichSource$;
function $m_Lcom_raquo_laminar_api_Implicits$RichSource$() {
  if ((!$n_Lcom_raquo_laminar_api_Implicits$RichSource$)) {
    $n_Lcom_raquo_laminar_api_Implicits$RichSource$ = new $c_Lcom_raquo_laminar_api_Implicits$RichSource$();
  }
  return $n_Lcom_raquo_laminar_api_Implicits$RichSource$;
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.lC = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.mT.bm.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bs().bJ.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.gW) {
        var ev$5 = false;
        ignoreNextActivation.gW = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pU(element.bs(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.bb = null;
  this.mI = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.bb = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.mI = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  dy: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.lR = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.y = $thiz.lR;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().bb);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fj, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rK(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pQ(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.li = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.hC = $thiz.li;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gE, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rN(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pR(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mJ = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().b.q2();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jS()])));
  $m_Lcom_raquo_laminar_api_package$().b.q2();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jS(), $m_Lcom_raquo_laminar_api_package$().b.st()])));
  $m_Lcom_raquo_laminar_api_package$().b.r1();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jS(), $m_Lcom_raquo_laminar_api_package$().b.em()])));
  this.mJ = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  dQ: 1
}));
var $n_Lcom_raquo_laminar_inputs_InputController$;
function $m_Lcom_raquo_laminar_inputs_InputController$() {
  if ((!$n_Lcom_raquo_laminar_inputs_InputController$)) {
    $n_Lcom_raquo_laminar_inputs_InputController$ = new $c_Lcom_raquo_laminar_inputs_InputController$();
  }
  return $n_Lcom_raquo_laminar_inputs_InputController$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = $p;
$p.oB = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.dZ)) {
      ctx.pd();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.t5(maybeLastSeenChild.dB, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.dB = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.t5 = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.dZ)) {
    ctx.pd();
  }
  var elem = ctx.dX;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().s(maybeLastSeenChild.a2(), ctx.d1.a2().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().s0(ctx.dY, newChildNode, ctx.d1, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().pI(ctx.dY, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = (((-1) + elem$1) | 0);
    elem$1 = ev$4;
  }
  ctx.pH(newChildNode);
  ctx.d0.clear();
  ctx.d0.set(newChildNode.a2(), newChildNode);
  ctx.dX = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  dR: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildTextInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildTextInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildTextInserter$.prototype = $p;
$p.T = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.dB;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.ja(newValue));
      this.t6(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.dB = ev$2;
      ev$2 = null;
    } else {
      x.gG.textContent = renderable.ja(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.t6 = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().pI(ctx.dY, ctx.d1, newTextNode, (void 0));
  ctx.d1 = newTextNode;
  if (ctx.dZ) {
    ctx.dZ = false;
    ctx.pH(newTextNode);
    ctx.d0.clear();
    ctx.dX = 0;
  }
});
var $d_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildTextInserter$, "com.raquo.laminar.inserters.ChildTextInserter$", ({
  dS: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildTextInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildTextInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildTextInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildTextInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodesMap) {
  this.dY = null;
  this.d1 = null;
  this.dZ = false;
  this.dX = 0;
  this.d0 = null;
  this.dY = parentNode;
  this.d1 = sentinelNode;
  this.dZ = strictMode;
  this.dX = extraNodeCount;
  this.d0 = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.pd = (function() {
  if ((this.dZ || (this.dX !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rh(this.dY.a2())));
  }
  if ((this.d0 === null)) {
    this.d0 = new Map();
  }
  if ((!(!(!(this.d1.a2() instanceof Comment))))) {
    var contentNode = this.d1;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().rZ(this.dY.a2(), newSentinelNode.hS, contentNode.a2());
    this.d1 = newSentinelNode;
    this.dX = 1;
    this.d0.set(contentNode.a2(), contentNode);
  }
  this.dZ = true;
});
$p.pH = (function(after) {
  var elem = this.dX;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.a2().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.d0.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().sG(this.dY, maybePrevChild);
        var ev$5 = (((-1) + elem$1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext$.prototype = $p;
$p.sO = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, sentinelNode, hooks);
  return this.th(parentNode, sentinelNode, strictMode);
});
$p.th = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  dW: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $p;
$p.hd = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().f5($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  e0: 1
}));
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$();
  }
  return $n_Lcom_raquo_laminar_keys_CompositeKey$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.d2 = null;
  this.eA = false;
  this.gD = false;
  this.ez = null;
  this.d2 = eventProp;
  this.eA = shouldUseCapture;
  this.gD = shouldBePassive;
  this.ez = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.t3 = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.ez.e(ev);
    if (this$2.c()) {
      return $m_s_None$();
    } else {
      var x0 = this$2.H();
      ev.stopPropagation();
      return new $c_s_Some(x0);
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.d2, this.eA, this.gD, newProcessor);
});
$p.sd = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.ez.e(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.H(), value.S())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.d2, this.eA, this.gD, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  e5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $p;
$p.g3 = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  e6: 1
}));
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
$p = $c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_LockedCompositeKey(key, items) {
  this.mS = null;
  this.mR = null;
  this.mS = key;
  this.mR = items;
}
$p = $c_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_LockedCompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_LockedCompositeKey() {
}
$h_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = $p;
$p.qt = (function(include) {
  return this.mS.qs(include.dQ().gc(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((include$2) => ((!(!include$2)) ? this.mR : $m_sci_Nil$())))), $m_Lcom_raquo_laminar_api_package$().iX());
});
var $d_Lcom_raquo_laminar_keys_LockedCompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_LockedCompositeKey, "com.raquo.laminar.keys.LockedCompositeKey", ({
  e9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.q6 = null;
  this.q7 = null;
  this.q8 = null;
  this.q9 = null;
  this.q6 = "http://www.w3.org/2000/svg";
  this.q7 = "http://www.w3.org/1999/xlink";
  this.q8 = "http://www.w3.org/XML/1998/namespace";
  this.q9 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sg = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  ec: 1
}));
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.mT = null;
  this.hM = null;
  this.mT = thisNode;
  this.hM = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  ed: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Binder$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Binder$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Binder$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Binder$() {
}
$h_Lcom_raquo_laminar_modifiers_Binder$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Binder$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Binder$, "com.raquo.laminar.modifiers.Binder$", ({
  ee: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Binder$;
function $m_Lcom_raquo_laminar_modifiers_Binder$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Binder$)) {
    $n_Lcom_raquo_laminar_modifiers_Binder$ = new $c_Lcom_raquo_laminar_modifiers_Binder$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Binder$;
}
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  R: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.qa = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.qa = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  ek: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.hQ = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.hQ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  eo: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.E = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.E = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.t8())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  et: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $p;
$p.ef = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.dT(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pA(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qL(parent.a2(), child.a2());
  if (appended) {
    child.dP(nextParent);
  }
  return appended;
});
$p.sG = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().s(child.a2().parentNode, parent.a2())) {
    child.dT($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().sH(parent.a2(), child.a2());
    child.dP($m_s_None$());
  }
  return removed;
});
$p.s0 = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.dT(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pA(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().rY(parent.a2(), newChild.a2(), referenceChild.a2());
  newChild.dP(nextParent);
  return inserted;
});
$p.pI = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.eU().bg(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.dT($m_s_None$());
      newChild.dT(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pA(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().sM(parent.a2(), newChild.a2(), oldChild.a2());
      if (replaced) {
        oldChild.dP($m_s_None$());
        newChild.dP(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  ew: 1
}));
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $p;
$p.tg = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bs(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  ex: 1
}));
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  this.qb = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.qb = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  eD: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildTextReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildTextReceiver$, "com.raquo.laminar.receivers.ChildTextReceiver$", ({
  eE: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildTextReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
}
/** @constructor */
function $c_Lfirst_Footer$() {
}
$p = $c_Lfirst_Footer$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Footer$;
/** @constructor */
function $h_Lfirst_Footer$() {
}
$h_Lfirst_Footer$.prototype = $p;
$p.r6 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.rz().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("footerText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().V("https://github.com/oswaldo/first"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("viewOnGithub"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("licenseNotice"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().V("https://github.com/oswaldo/first/blob/main/TRADEMARK.md"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("trademarkPolicy"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])));
});
var $d_Lfirst_Footer$ = new $TypeData().i($c_Lfirst_Footer$, "first.Footer$", ({
  eI: 1
}));
var $n_Lfirst_Footer$;
function $m_Lfirst_Footer$() {
  if ((!$n_Lfirst_Footer$)) {
    $n_Lfirst_Footer$ = new $c_Lfirst_Footer$();
  }
  return $n_Lfirst_Footer$;
}
function $s_Lfirst_Main__main__AT__V(args) {
  $m_Lfirst_Main$().sa(args);
}
function $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  return (appContainer$lzy1$1.gX ? appContainer$lzy1$1.gY : appContainer$lzy1$1.rX(document.querySelector("#appContainer")));
}
function $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.gX ? appContainer$lzy1$2.gY : $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
}
/** @constructor */
function $c_Lfirst_Main$() {
  this.i2 = null;
  this.gH = null;
  this.nj = null;
  this.ni = null;
  this.ng = null;
  this.nh = null;
  $n_Lfirst_Main$ = this;
  this.i2 = $m_Lcom_raquo_laminar_api_package$().b.gB.j7($m_s_None$());
  this.gH = new $c_sci_$colon$colon(new $c_T3("en", "English", "\ud83c\uddfa\ud83c\uddf8"), new $c_sci_$colon$colon(new $c_T3("pt-br", "Portugu\u00eas (BR)", "\ud83c\udde7\ud83c\uddf7"), new $c_sci_$colon$colon(new $c_T3("de", "Deutsch", "\ud83c\udde9\ud83c\uddea"), $m_sci_Nil$())));
  var isOpen = $m_Lcom_raquo_laminar_api_package$().b.gB.j7(false);
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().b.X();
  var $x_15 = $m_sr_ScalaRunTime$();
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().b.y.z("language-selector");
  var $x_12 = $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_13 = $m_Lcom_raquo_laminar_api_Implicits$RichSource$();
    var this$7 = $m_Lcom_raquo_laminar_api_package$().b;
    var x0 = this$7.mH;
    $m_Lcom_raquo_laminar_api_package$();
    var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().g3(x0.em(), false, false);
    return $x_13.iW(new $c_Lcom_raquo_airstream_misc_MapStream(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().oE(window, p.d2.eB, p.eA), p.ez), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => _$3.target)), $m_s_None$()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2) => ((target) => {
      if (((!(!$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(isOpen.cZ).H())) && (!(!(!el$2.bm.contains(target)))))) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V(isOpen, false);
      }
    }))(el)));
  })));
  var $x_11 = $m_Lcom_raquo_laminar_api_package$().b.X();
  var $x_10 = $m_sr_ScalaRunTime$();
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().b.y.z("custom-select");
  var $x_8 = new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
    $f_Lcom_raquo_airstream_state_Var__update__F1__V(isOpen, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => (!(!(!_$5))))));
  })));
  $m_Lcom_raquo_laminar_api_package$();
  var $x_7 = $m_Lcom_raquo_laminar_inserters_ChildInserter$().oB(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lfirst_Translations$().gI.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentCode) => {
    matchResult3: {
      var \u03b41$___1;
      var \u03b41$___2;
      var this$20 = this.gH;
      _return: {
        var these = this$20;
        while ((!these.c())) {
          var x0$1 = these.u();
          var x = x0$1.e2;
          if (((x === null) ? (currentCode === null) : $dp_equals__O__Z(x, currentCode))) {
            var this$21 = new $c_s_Some(these.u());
            break _return;
          }
          these = these.p();
        }
        var this$21 = $m_s_None$();
      }
      var x3 = (this$21.c() ? this.gH.u() : this$21.H());
      if ((x3 !== null)) {
        var \u03b41$___1 = x3.e3;
        var \u03b41$___2 = x3.e4;
        break matchResult3;
      }
      throw new $c_s_MatchError(x3);
    }
    var name$2 = \u03b41$___1;
    var flag$2 = \u03b41$___2;
    return $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("select-selected"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ((flag$2 + " ") + name$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])));
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hQ, (void 0));
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().b.X();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().b.y.z("select-items");
  var $x_3 = new $c_Lcom_raquo_laminar_keys_LockedCompositeKey($m_Lcom_raquo_laminar_api_package$().b.y, $m_sci_Nil$().f5($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["select-hide"])))).qt(new $c_Lcom_raquo_airstream_misc_MapSignal(isOpen.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => (!(!(!_$7))))), $m_s_None$()));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().b;
  var this$36 = this.gH;
  var f = ((x$1) => {
    if ((x$1 !== null)) {
      var code = x$1.e2;
      var name$1 = x$1.e3;
      var flag$1 = x$1.e4;
      return $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("select-item"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ((flag$1 + " ") + name$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)).t3().sd(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => code))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lfirst_Translations$().gI, c);
        $f_Lcom_raquo_airstream_state_Var__set__O__V(isOpen, false);
      })))])));
    }
    throw new $c_s_MatchError(x$1);
  });
  if ((this$36 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$2 = this$36.u();
    var h = new $c_sci_$colon$colon(f(x0$2), $m_sci_Nil$());
    var t = h;
    var rest = this$36.p();
    while ((rest !== $m_sci_Nil$())) {
      var x0$3 = rest.u();
      var nx = new $c_sci_$colon$colon(f(x0$3), $m_sci_Nil$());
      t.a0 = nx;
      t = nx;
      rest = rest.p();
    }
    var $x_1 = h;
  }
  this.nj = $x_16.i($x_15.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_12, $x_11.i($x_10.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_9, $x_8, $x_7, $x_6.i($x_5.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])))])));
  this.ni = $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().V("https://github.com/oswaldo/first"), $m_Lcom_raquo_laminar_api_package$().b.k3().V("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.z("github-corner"), $m_Lcom_raquo_laminar_api_package$().b.qT().s8().V("View source on GitHub"), $m_Lcom_raquo_laminar_api_package$().b.ba().pW().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().tn().V("80"), $m_Lcom_raquo_laminar_api_package$().b.ba().rS().V("80"), $m_Lcom_raquo_laminar_api_package$().b.ba().tl().V("0 0 250 250"), $m_Lcom_raquo_laminar_api_package$().b.ba().pS().V("fill:#e94560; color:#1a1a2e; position: absolute; top: 0; border: 0; right: 0;"), $m_Lcom_raquo_laminar_api_package$().b.ba().jV().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jj().V("M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z")]))), $m_Lcom_raquo_laminar_api_package$().b.ba().jV().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jj().V("M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"), $m_Lcom_raquo_laminar_api_package$().b.ba().pb().V("currentColor"), $m_Lcom_raquo_laminar_api_package$().b.ba().hC.z("octo-arm"), $m_Lcom_raquo_laminar_api_package$().b.ba().pS().V("transform-origin: 130px 106px;")]))), $m_Lcom_raquo_laminar_api_package$().b.ba().jV().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jj().V("M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"), $m_Lcom_raquo_laminar_api_package$().b.ba().pb().V("currentColor"), $m_Lcom_raquo_laminar_api_package$().b.ba().hC.z("octo-body")])))])))])));
  this.ng = $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("alpha-banner"), $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$1) => {
    $m_Lcom_raquo_laminar_api_package$();
    return $m_Lcom_raquo_laminar_api_Implicits$RichSource$().iW($m_Lfirst_Translations$().Q("alphaWarning"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$2) => ((html) => {
      el$2$2.bm.innerHTML = html;
    }))(el$2$1)));
  })))])));
  this.nh = $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("container"), this.ni, this.nj, this.ng, $m_Lcom_raquo_laminar_api_package$().b.rR().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("hero"), $m_Lcom_raquo_laminar_api_package$().b.rP().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jF().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.k2().V("https://raw.githubusercontent.com/oswaldo/first/refs/heads/main/images/first.png"), $m_Lcom_raquo_laminar_api_package$().b.j3().V("First Project Logo: An amorphous smiling ghost with the name 'first' written below it"), $m_Lcom_raquo_laminar_api_package$().b.y.z("project-logo"), $m_Lcom_raquo_laminar_api_package$().b.tm().V("150px")])))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tagline"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("tagline"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("description"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("description"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("release-badge"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oB(new $c_Lcom_raquo_airstream_misc_MapSignal(this.i2.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $c_s_Some)) {
      var tag = x$1$2.eI;
      return $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("badge"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lfirst_Translations$().Q("latestVersion"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((l) => ((l + " ") + tag))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])));
    }
    if (($m_s_None$() === x$1$2)) {
      $m_Lcom_raquo_laminar_api_package$();
      return new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hQ, (void 0)))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("install-wrapper"), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("install-box"), $m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.r0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("copy-btn"), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    window.navigator.clipboard.writeText("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh");
    var feedback = document.querySelector(".copy-feedback");
    feedback.classList.add("visible");
    window.setTimeout((() => {
      feedback.classList.remove("visible");
    }), 2000.0);
  }))), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-copy")])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("copy-feedback"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("copiedToClipboard"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("platforms-section"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("supportedPlatforms"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("platforms-icons"), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("platform-icon"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fab fa-linux")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Linux", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("platform-icon"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fab fa-apple")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "macOS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.qr($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["platform-icon", "disabled"])), $m_Lcom_raquo_laminar_api_package$().b.iX()), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fab fa-windows")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Windows", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tooltip"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("windowsNotSupported"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jE().V("why"), $m_Lcom_raquo_laminar_api_package$().b.jB().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("whyTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("highlight"), $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$3) => {
    $m_Lcom_raquo_laminar_api_package$();
    return $m_Lcom_raquo_laminar_api_Implicits$RichSource$().iW($m_Lfirst_Translations$().Q("whyHighlight"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$3) => ((html$1) => {
      el$2$3.bm.innerHTML = html$1;
    }))(el$3)));
  })))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("whyText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("features-grid"), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-ghost")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature1Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-exchange-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature2Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-cloud")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("feature3Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jE().V("usage"), $m_Lcom_raquo_laminar_api_package$().b.jB().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("quickStartTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("step1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first save gemini-config --artifacts \".gemini/,GEMINI.md\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("step2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first load gemini-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("step3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first swap claude-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jE().V("tech-stack"), $m_Lcom_raquo_laminar_api_package$().b.jB().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("techStackTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tech-intro"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("techStackIntro"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tech-logos"), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().V("https://www.scala-lang.org/"), $m_Lcom_raquo_laminar_api_package$().b.k3().V("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.z("tech-logo-link"), $m_Lcom_raquo_laminar_api_package$().b.jF().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.k2().V("https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true"), $m_Lcom_raquo_laminar_api_package$().b.j3().V("Scala"), $m_Lcom_raquo_laminar_api_package$().b.y.z("tech-logo")]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tech-desc"), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Scala", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("scalaDesc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().V("https://scala-native.org/"), $m_Lcom_raquo_laminar_api_package$().b.k3().V("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.z("tech-logo-link"), $m_Lcom_raquo_laminar_api_package$().b.jF().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.k2().V("https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true"), $m_Lcom_raquo_laminar_api_package$().b.j3().V("Scala Native"), $m_Lcom_raquo_laminar_api_package$().b.y.z("tech-logo")]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("tech-desc"), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Scala Native", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("scalaNativeDesc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("benefits-grid"), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-rocket")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit1Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-shield-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit2Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-brain")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit3Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.z("fas fa-tachometer-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit4Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().T($m_Lfirst_Translations$().Q("benefit4Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))]))), $m_Lfirst_Footer$().r6()])))])));
}
$p = $c_Lfirst_Main$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Main$;
/** @constructor */
function $h_Lfirst_Main$() {
}
$h_Lfirst_Main$.prototype = $p;
$p.sa = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().b;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((appContainer$lzy1$2) => (() => $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Main$().nh));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().g3(this$2.lW.sv(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().oE(document, p.d2.eB, p.eA), p.ez), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.S(), rootNode.S());
  })), this$2.ti());
  this.rw();
});
$p.rw = (function() {
  $m_sjs_js_Thenable$Implicits$().pX(fetch("https://api.github.com/repos/oswaldo/first/releases/latest")).ry(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => $m_sjs_js_Thenable$Implicits$().pX(_$1.json()))), $m_s_concurrent_ExecutionContext$().jA()).sb(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((json) => {
    var tag = json.tag_name;
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lfirst_Main$().i2, new $c_s_Some(tag));
  })), $m_s_concurrent_ExecutionContext$().jA()).sB(new $c_Lfirst_Main$$anon$1(), $m_s_concurrent_ExecutionContext$().jA());
});
var $d_Lfirst_Main$ = new $TypeData().i($c_Lfirst_Main$, "first.Main$", ({
  eJ: 1
}));
var $n_Lfirst_Main$;
function $m_Lfirst_Main$() {
  if ((!$n_Lfirst_Main$)) {
    $n_Lfirst_Main$ = new $c_Lfirst_Main$();
  }
  return $n_Lfirst_Main$;
}
/** @constructor */
function $c_Lfirst_Translations$() {
  this.gI = null;
  this.i3 = null;
  $n_Lfirst_Translations$ = this;
  this.gI = $m_Lcom_raquo_laminar_api_package$().b.gB.j7(this.rj());
  this.i3 = $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("en", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Full Context Swapping for Developer Workflows"), new $c_T2("description", "A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter."), new $c_T2("whyTitle", "Why first?"), new $c_T2("whyHighlight", "Your repository is for <em>your</em> code, not your tools' config files."), new $c_T2("whyText", "Modern development has normalized an uncomfortable reality: every tool we adopt\u2014IDEs, linters, CI systems, and now AI coding assistants\u2014leaves its own debris in our repositories. When you want to try a different AI assistant, you shouldn't need to commit new config files to your repository."), new $c_T2("feature1Title", "Non-invasive"), new $c_T2("feature1Text", "AI assistants and tools store their configs outside your repo."), new $c_T2("feature2Title", "Context Swapping"), new $c_T2("feature2Text", "Switch entire development environments with one command."), new $c_T2("feature3Title", "Remote Contexts"), new $c_T2("feature3Text", "Share team configurations via HTTP/HTTPS or GitHub."), new $c_T2("quickStartTitle", "Quick Start"), new $c_T2("step1Title", "Save your current context"), new $c_T2("step2Title", "Load a saved context"), new $c_T2("step3Title", "Swap to a different setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Powered by the Scala Ecosystem"), new $c_T2("scalaDesc", "A modern, expressive, and safe programming language."), new $c_T2("scalaNativeDesc", "Compiles Scala directly to native machine code for instant startup."), new $c_T2("benefit1Title", "Productivity"), new $c_T2("benefit1Desc", "Excellent IDE support and tooling."), new $c_T2("benefit2Title", "Modernity"), new $c_T2("benefit2Desc", "Concise, Python-like syntax with static safety."), new $c_T2("benefit3Title", "GenAI Ready"), new $c_T2("benefit3Desc", "Strong type system reduces hallucinations."), new $c_T2("benefit4Title", "Performance"), new $c_T2("benefit4Desc", "Native speed with no JVM overhead."), new $c_T2("footerText", "Built with \u2764\ufe0f using Scala Native and late-night coding sessions."), new $c_T2("viewOnGithub", "View on GitHub"), new $c_T2("latestVersion", "Latest Release:"), new $c_T2("supportedPlatforms", "Supported Platforms"), new $c_T2("windowsNotSupported", "Windows support is coming soon!"), new $c_T2("licenseNotice", "Code licensed under MIT."), new $c_T2("trademarkPolicy", "Trademark Policy"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Alpha Stage</strong>: This project is currently in an experimental phase. It is primarily used for internal workflows. Expect frequent updates and limited support. Happy exploring! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Copied!")])))), new $c_T2("pt-br", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Troca Completa de Contexto para Fluxos de Trabalho de Desenvolvedores"), new $c_T2("description", "Uma ferramenta de linha de comando que permite a troca perfeita entre diferentes contextos de desenvolvimento e configura\u00e7\u00f5es de assistentes de IA, mantendo seus projetos limpos de arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyTitle", "Por que first?"), new $c_T2("whyHighlight", "Seu reposit\u00f3rio \u00e9 para o <em>seu</em> c\u00f3digo, n\u00e3o para arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyText", "O desenvolvimento moderno normalizou uma realidade desconfort\u00e1vel: cada ferramenta que adotamos\u2014IDEs, linters, sistemas de CI e agora assistentes de codifica\u00e7\u00e3o de IA\u2014deixa seus pr\u00f3prios detritos em nossos reposit\u00f3rios. Quando voc\u00ea quer experimentar um assistente de IA diferente, n\u00e3o deveria precisar commitar novos arquivos de configura\u00e7\u00e3o em seu reposit\u00f3rio."), new $c_T2("feature1Title", "N\u00e3o invasivo"), new $c_T2("feature1Text", "Assistentes de IA e ferramentas armazenam suas configura\u00e7\u00f5es fora do seu reposit\u00f3rio."), new $c_T2("feature2Title", "Troca de Contexto"), new $c_T2("feature2Text", "Troque ambientes de desenvolvimento inteiros com um comando."), new $c_T2("feature3Title", "Contextos Remotos"), new $c_T2("feature3Text", "Compartilhe configura\u00e7\u00f5es de equipe via HTTP/HTTPS ou GitHub."), new $c_T2("quickStartTitle", "In\u00edcio R\u00e1pido"), new $c_T2("step1Title", "Salve seu contexto atual"), new $c_T2("step2Title", "Carregue um contexto salvo"), new $c_T2("step3Title", "Troque para uma configura\u00e7\u00e3o diferente"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Impulsionado pelo Ecossistema Scala"), new $c_T2("scalaDesc", "Uma linguagem moderna, expressiva e segura."), new $c_T2("scalaNativeDesc", "Compila Scala diretamente para c\u00f3digo de m\u00e1quina nativo para inicializa\u00e7\u00e3o instant\u00e2nea."), new $c_T2("benefit1Title", "Produtividade"), new $c_T2("benefit1Desc", "Excelente suporte de IDE e ferramentas."), new $c_T2("benefit2Title", "Modernidade"), new $c_T2("benefit2Desc", "Sintaxe concisa tipo Python com seguran\u00e7a est\u00e1tica."), new $c_T2("benefit3Title", "Pronto para GenAI"), new $c_T2("benefit3Desc", "Sistema de tipos forte reduz alucina\u00e7\u00f5es."), new $c_T2("benefit4Title", "Desempenho"), new $c_T2("benefit4Desc", "Velocidade nativa sem overhead da JVM."), new $c_T2("footerText", "Constru\u00eddo com \u2764\ufe0f usando Scala Native e sess\u00f5es de codifica\u00e7\u00e3o tarde da noite."), new $c_T2("viewOnGithub", "Ver no GitHub"), new $c_T2("latestVersion", "\u00daltima Vers\u00e3o:"), new $c_T2("supportedPlatforms", "Plataformas Suportadas"), new $c_T2("windowsNotSupported", "Suporte para Windows em breve!"), new $c_T2("licenseNotice", "C\u00f3digo licenciado sob MIT."), new $c_T2("trademarkPolicy", "Pol\u00edtica de Marcas"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Est\u00e1gio Alfa</strong>: Este projeto est\u00e1 atualmente em uma fase experimental. \u00c9 usado principalmente para fluxos de trabalho internos. Espere atualiza\u00e7\u00f5es frequentes e suporte limitado. Boa explora\u00e7\u00e3o! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Copiado!")])))), new $c_T2("de", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Vollst\u00e4ndiger Kontextwechsel f\u00fcr Entwickler-Workflows"), new $c_T2("description", "Ein Befehlszeilen-Tool, das den nahtlosen Wechsel zwischen verschiedenen Entwicklungskontexten und KI-Assistenten-Konfigurationen erm\u00f6glicht und Ihre Projekte frei von werkzeugspezifischem Ballast h\u00e4lt."), new $c_T2("whyTitle", "Warum first?"), new $c_T2("whyHighlight", "Ihr Repository ist f\u00fcr <em>Ihren</em> Code, nicht f\u00fcr Konfigurationsdateien von Tools."), new $c_T2("whyText", "Die moderne Entwicklung hat eine unbequeme Realit\u00e4t normalisiert: Jedes Tool, das wir einf\u00fchren \u2013 IDEs, Linters, CI-Systeme und jetzt KI-Coding-Assistenten \u2013 hinterl\u00e4sst seine eigenen Spuren in unseren Repositories. Wenn Sie einen anderen KI-Assistenten ausprobieren m\u00f6chten, sollten Sie keine neuen Konfigurationsdateien in Ihr Repository committen m\u00fcssen."), new $c_T2("feature1Title", "Nicht-invasiv"), new $c_T2("feature1Text", "KI-Assistenten und Tools speichern ihre Konfigurationen au\u00dferhalb Ihres Repos."), new $c_T2("feature2Title", "Kontextwechsel"), new $c_T2("feature2Text", "Wechseln Sie ganze Entwicklungsumgebungen mit einem Befehl."), new $c_T2("feature3Title", "Remote-Kontexte"), new $c_T2("feature3Text", "Teilen Sie Teamkonfigurationen \u00fcber HTTP/HTTPS oder GitHub."), new $c_T2("quickStartTitle", "Schnellstart"), new $c_T2("step1Title", "Speichern Sie Ihren aktuellen Kontext"), new $c_T2("step2Title", "Laden Sie einen gespeicherten Kontext"), new $c_T2("step3Title", "Wechseln Sie zu einem anderen Setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Angetrieben vom Scala-\u00d6kosystem"), new $c_T2("scalaDesc", "Eine moderne, ausdrucksstarke und sichere Programmiersprache."), new $c_T2("scalaNativeDesc", "Kompiliert Scala direkt in nativen Maschinencode f\u00fcr sofortigen Start."), new $c_T2("benefit1Title", "Produktivit\u00e4t"), new $c_T2("benefit1Desc", "Hervorragende IDE-Unterst\u00fctzung und Tools."), new $c_T2("benefit2Title", "Modernit\u00e4t"), new $c_T2("benefit2Desc", "Pr\u00e4gnante, Python-\u00e4hnliche Syntax mit statischer Sicherheit."), new $c_T2("benefit3Title", "GenAI-Bereit"), new $c_T2("benefit3Desc", "Starkes Typsystem reduziert Halluzinationen."), new $c_T2("benefit4Title", "Leistung"), new $c_T2("benefit4Desc", "Native Geschwindigkeit ohne JVM-Overhead."), new $c_T2("footerText", "Erstellt mit \u2764\ufe0f unter Verwendung von Scala Native und n\u00e4chtlichen Coding-Sessions."), new $c_T2("viewOnGithub", "Auf GitHub ansehen"), new $c_T2("latestVersion", "Neueste Version:"), new $c_T2("supportedPlatforms", "Unterst\u00fctzte Plattformen"), new $c_T2("windowsNotSupported", "Windows-Unterst\u00fctzung kommt bald!"), new $c_T2("licenseNotice", "Code unter MIT lizenziert."), new $c_T2("trademarkPolicy", "Markenrichtlinie"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Alpha-Phase</strong>: Dieses Projekt befindet sich derzeit in einer experimentellen Phase. Es wird haupts\u00e4chlich f\u00fcr interne Arbeitsabl\u00e4ufe verwendet. Erwarten Sie h\u00e4ufige Updates und begrenzten Support. Viel Spa\u00df beim Erkunden! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Kopiert!")]))))])));
}
$p = $c_Lfirst_Translations$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Translations$;
/** @constructor */
function $h_Lfirst_Translations$() {
}
$h_Lfirst_Translations$.prototype = $p;
$p.rj = (function() {
  var this$1 = window.navigator.language;
  var browserLang = this$1.toLowerCase();
  return ((!(!browserLang.startsWith("pt"))) ? "pt-br" : ((!(!browserLang.startsWith("de"))) ? "de" : "en"));
});
$p.Q = (function(key) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this.gI.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((lang) => $m_Lfirst_Translations$().i3.c7(lang, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Translations$().i3.e("en")))).c7(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => ("Missing key: " + key)))))), $m_s_None$());
});
var $d_Lfirst_Translations$ = new $TypeData().i($c_Lfirst_Translations$, "first.Translations$", ({
  eL: 1
}));
var $n_Lfirst_Translations$;
function $m_Lfirst_Translations$() {
  if ((!$n_Lfirst_Translations$)) {
    $n_Lfirst_Translations$ = new $c_Lfirst_Translations$();
  }
  return $n_Lfirst_Translations$;
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  aN: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cl("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().cl("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cl("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cl("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cl("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cl("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().ib.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bV) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.i7 = dict;
    $thiz.bV = (((1 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i7;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.i7);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bV) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.i8 = dict;
    $thiz.bV = (((2 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i8;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.i8);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bV) << 24) >> 24) === 0)) {
    $thiz.i6 = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bV = (((4 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i6;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.i6);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cl("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bH("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bH("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bH("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bH("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bH("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bH("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bH("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bH("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bH("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bH("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bH("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bH("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bH("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bH("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cl("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cl("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cl("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cl("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.i7 = null;
  this.i8 = null;
  this.i6 = null;
  this.bV = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rt = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f8: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.cl = (function(this$) {
  return new RegExp(this$);
});
$p.bH = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  f9: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.eH = null;
  $n_jl_System$Streams$ = this;
  this.eH = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  fe: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.20.1";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.i9 = null;
  this.nl = null;
  $n_jl_System$SystemProperties$ = this;
  this.i9 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nl = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jy = (function(key, default$1) {
  if ((this.i9 !== null)) {
    var dict = this.i9;
    return ((!(!$m_jl_Utils$Cache$().ib.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nl.jy(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  ff: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_ThreadLocal() {
  this.ia = false;
  this.nm = null;
  this.ia = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.H = (function() {
  if ((!this.ia)) {
    this.go(null);
  }
  return this.nm;
});
$p.go = (function(o) {
  this.nm = o;
  this.ia = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  fh: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.ib = null;
  $n_jl_Utils$Cache$ = this;
  this.ib = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fj: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bF: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.c6 = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fk: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.qV = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.p7 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = a.a[i$1];
    var lo = t.m;
    var hi = t.o;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.m;
    var hi$1 = t$1.o;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jm = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p8 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p4 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p3 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p9 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p5 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.p6 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.a6 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).a3.Q().a3.U(newLength);
  original.A(0, ret, 0, copyLength);
  return ret;
});
$p.ad = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).a3.Q().a3.U(retLength);
  original.A(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fl: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.sE(a.m, a.o, b.m, b.o), this$1.M);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.sD(a.m, a.o, b.m, b.o), this$1.M);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rm(a.m, a.o, b.m, b.o), this$1.M);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rl(a.m, a.o, b.m, b.o), this$1.M);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.pC(value), this$1.M);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.o;
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(a.m)) | 0));
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.m;
  var hi = a.o;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.m;
  return ((4.294967296E9 * a.o) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.m;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.m, true);
  fpBitsDataView.setInt32(4, a.o, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.m;
  var blo = b.m;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.o) + Math.imul(a.o, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.m;
  var blo = b.m;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, ((((a.o - b.o) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.m;
  var blo = b.m;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, ((((a.o + b.o) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.o;
  return new $c_RTLong((((32 & n) === 0) ? (((a.m >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.o;
  return new $c_RTLong((((32 & n) === 0) ? (((a.m >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.m;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (a.o << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.m ^ b.m), (a.o ^ b.o));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.m & b.m), (a.o & b.o));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.m | b.m), (a.o | b.o));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) >= (b.m >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) > (b.m >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) <= (b.m >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) < (b.m >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) >= (b.m >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) > (b.m >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) <= (b.m >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.o;
  var bhi = b.o;
  return ((ahi === bhi) ? ((a.m >>> 0) < (b.m >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!((a.m === b.m) && (a.o === b.o)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return ((a.m === b.m) && (a.o === b.o));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.m = 0;
  this.o = 0;
  this.m = lo;
  this.o = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.q = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.m === that.m) && (this.o === that.o)));
});
$p.w = (function() {
  return (this.m ^ this.o);
});
$p.x = (function() {
  return $m_RTLong$().pD(this.m, this.o);
});
$p.ts = (function() {
  return ((this.m << 24) >> 24);
});
$p.tG = (function() {
  return ((this.m << 16) >> 16);
});
$p.tB = (function() {
  return this.m;
});
$p.tC = (function() {
  return this;
});
$p.tx = (function() {
  var lo = this.m;
  var hi = this.o;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.tw = (function() {
  var lo = this.m;
  return ((4.294967296E9 * this.o) + (lo >>> 0.0));
});
$p.tu = (function(that) {
  return $m_RTLong$().pB(this.m, this.o, that.m, that.o);
});
$p.tt = (function(that) {
  return $m_RTLong$().pB(this.m, this.o, that.m, that.o);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bG: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      $thiz.M = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.M = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.M = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.M = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      $thiz.M = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.M = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.M = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.M = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var hi$7 = ((x / 4.294967296E9) | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.M = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.M = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.M = quotHi;
    return quotLo;
  } else {
    $thiz.M = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.M = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.pD = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.pC = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.M = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.M = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.M = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.pB = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.rl = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.M = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.M = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.M = (-1);
      return (-1);
    } else {
      this.M = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.M;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.M = hi$1;
      return lo$1;
    }
  }
});
$p.rm = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.M = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.M = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.sD = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.M = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.M = 0;
      return 0;
    } else {
      this.M = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.M;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.M = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.sE = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.M = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.M = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fo: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.ic = null;
  this.nq = null;
  $n_s_Array$EmptyArrays$ = this;
  this.ic = new $ac_I(0);
  this.nq = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fq: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aQ: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  e: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$() {
  this.nr = null;
  this.gL = null;
  $n_s_PartialFunction$ = this;
  this.nr = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().nr));
  this.gL = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fy: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.nw = null;
  $n_sc_ArrayOps$ = this;
  this.nw = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().nw));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.rB = (function(this$, f) {
  var len = $m_jl_reflect_Array$().c6(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.e($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  fG: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.cj = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fS: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.n();
  while (it.r()) {
    f.e(it.j());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.n();
  while ((res && it.r())) {
    res = (!(!p.e(it.j())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.D()) {
    case (-1): {
      return (!$thiz.n().r());
      break;
    }
    case 0: {
      return true;
      break;
    }
    default: {
      return false;
    }
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $thiz.n();
  var i = start;
  var y = (($m_jl_reflect_Array$().c6(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.r())) {
    $m_sr_ScalaRunTime$().j9(xs, i, it.j());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.D() === 0) ? (("" + start) + end) : $thiz.dE($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aV.t);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aV;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var it = $thiz.n();
  if (it.r()) {
    var obj = it.j();
    jsb.t = (("" + jsb.t) + obj);
    while (it.r()) {
      jsb.t = (("" + jsb.t) + sep);
      var obj$1 = it.j();
      jsb.t = (("" + jsb.t) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.D() >= 0)) {
    var destination = evidence$2.bt($thiz.D());
    $thiz.bS(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.aL();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.n();
    while (it.r()) {
      var elem = it.j();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a3.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nD = null;
  this.fq = null;
  this.nD = head;
  this.fq = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.rQ = (function() {
  return this.nD.S().n();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  g1: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.nG = null;
  $n_sc_StringOps$ = this;
  this.nG = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().nG));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.r7 = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  g8: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.ga = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gc: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
function $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pq($m_jl_System$SystemProperties$().jy("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      return 64;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.nJ = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.nJ = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gk: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.iC = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.jn = (function() {
  var state = this.iC;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.S();
});
$p.jG = (function(state) {
  if ((this.iC !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.iC = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  go: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.nO = null;
  $n_sci_MapNode$ = this;
  this.nO = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gG: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().c6(as)) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.pF = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.A(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.A(srcPos, result, ix, length);
  return result;
});
$p.s1 = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.A(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.A(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b0: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.fz = 0;
  $n_sci_Node$ = this;
  this.fz = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.el = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dH = (function(mask) {
  return (1 << mask);
});
$p.rU = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dG((bitmap & (((-1) + bitpos) | 0)));
});
$p.cw = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.rU(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gJ: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.iG = null;
  this.br = null;
  this.cr = null;
  this.eP = null;
  this.iH = null;
  this.nS = null;
  $n_sci_VectorStatics$ = this;
  this.iG = new $ac_O(0);
  this.br = new ($d_O.r().r().C)(0);
  this.cr = new ($d_O.r().r().r().C)(0);
  this.eP = new ($d_O.r().r().r().r().C)(0);
  this.iH = new ($d_O.r().r().r().r().r().C)(0);
  this.nS = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.eW = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.A(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.I = (function(a, elem) {
  var ac = $m_ju_Arrays$().a6(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.ct = (function(elem, a) {
  var ac = $objectGetClass(a).a3.Q().a3.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.A(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.jq = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.e(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.jq(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  h0: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.eR = null;
  this.cO = 0;
  this.aU = null;
  this.eR = _key;
  this.cO = _hash;
  this.aU = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.rx = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.cO) && $m_sr_BoxesRunTime$().s(k, _$this.eR))) {
      return _$this;
    } else if (((_$this.aU === null) || (_$this.cO > h))) {
      return null;
    } else {
      _$this = _$this.aU;
    }
  }
});
$p.x = (function() {
  return ((((("Node(" + this.eR) + ", ") + this.cO) + ") -> ") + this.aU);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  hi: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.oR = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  ho: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.fF;
  var curLen = curOther.a.length;
  if ((curSize <= curLen)) {
    return curOther;
  } else {
    var newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
    }
    var newOther = new ($d_jl_Runnable.r().C)(newLen);
    curOther.A(0, newOther, 0, curLen);
    $thiz.fF = newOther;
    return newOther;
  }
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__($thiz, outer, first, other, size) {
  $thiz.fE = first;
  $thiz.fF = other;
  $thiz.dA = size;
  $thiz.o4 = outer;
  return $thiz;
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.fE = null;
  this.fF = null;
  this.dA = 0;
  this.o4 = null;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.sy = (function(r) {
  var sz = this.dA;
  if ((sz === 0)) {
    this.fE = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[(((-1) + sz) | 0)] = r;
  }
  this.dA = ((1 + sz) | 0);
});
$p.sS = (function(n) {
  while (true) {
    if ((n > 0)) {
      var x1 = this.dA;
      switch (x1) {
        case 0: {
          break;
        }
        case 1: {
          var next = this.fE;
          this.fE = null;
          this.dA = 0;
          next.ep();
          n = (((-1) + n) | 0);
          continue;
          break;
        }
        default: {
          var o = this.fF;
          var next$2 = o.a[(((-2) + x1) | 0)];
          o.a[(((-2) + x1) | 0)] = null;
          this.dA = (((-1) + x1) | 0);
          next$2.ep();
          n = (((-1) + n) | 0);
          continue;
        }
      }
    }
    return (void 0);
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.o5 = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.o5 = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  hv: 1
}));
var $n_s_concurrent_BatchingExecutorStatics$;
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
  }
  return $n_s_concurrent_BatchingExecutorStatics$;
}
function $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor($thiz) {
  if ((!$thiz.iQ)) {
    $thiz.iR = $m_sjs_concurrent_JSExecutionContext$().og;
    $thiz.iQ = true;
  }
  return $thiz.iR;
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$() {
  this.iR = null;
  this.eS = null;
  this.iQ = false;
  $n_s_concurrent_ExecutionContext$ = this;
  this.eS = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => {
    x$1$2$2.gm($m_jl_System$Streams$().eH);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.jA = (function() {
  return ((!this.iQ) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.iR);
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  hw: 1
}));
var $n_s_concurrent_ExecutionContext$;
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
  }
  return $n_s_concurrent_ExecutionContext$;
}
/** @constructor */
function $c_s_concurrent_Future$() {
  this.o7 = null;
  this.o9 = null;
  this.o8 = null;
  this.iS = null;
  this.oa = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().eZ(new $c_sjsr_WrappedVarArgs([new $c_T2($d_Z.l(), $d_jl_Boolean.l()), new $c_T2($d_B.l(), $d_jl_Byte.l()), new $c_T2($d_C.l(), $d_jl_Character.l()), new $c_T2($d_S.l(), $d_jl_Short.l()), new $c_T2($d_I.l(), $d_jl_Integer.l()), new $c_T2($d_J.l(), $d_jl_Long.l()), new $c_T2($d_F.l(), $d_jl_Float.l()), new $c_T2($d_D.l(), $d_jl_Double.l()), new $c_T2($d_V.l(), $d_jl_Void.l())]));
  this.o7 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2$2);
  }));
  this.o9 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.o8 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  this.pl(this.o8);
  this.iS = this.ru(new $c_s_concurrent_Future$$anon$4());
  this.oa = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2$1) => $m_s_concurrent_Future$().iS));
  this.pl(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.ru = (function(exception) {
  return $m_s_concurrent_Promise$().rv(exception);
});
$p.pl = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  hy: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.td(result)) {
    return $thiz;
  } else {
    throw new $c_jl_IllegalStateException("Promise already completed.");
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Success(value));
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Failure(cause));
}
/** @constructor */
function $c_s_concurrent_Promise$() {
}
$p = $c_s_concurrent_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Promise$;
/** @constructor */
function $h_s_concurrent_Promise$() {
}
$h_s_concurrent_Promise$.prototype = $p;
$p.rv = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  hD: 1
}));
var $n_s_concurrent_Promise$;
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$();
  }
  return $n_s_concurrent_Promise$;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$() {
  this.fG = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.fG = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
}
$p = $c_s_concurrent_impl_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
}
$h_s_concurrent_impl_Promise$.prototype = $p;
$p.gn = (function(value) {
  if ((value === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.cs;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.q3()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  hE: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ay)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.s = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.rs(x, y) : ((x instanceof $Char) ? this.rq(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rs = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rr(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.m;
      var hi = t.o;
      var value = y.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.rr = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.m;
      return (x2 === ((4.294967296E9 * t.o) + (lo >>> 0.0)));
    } else {
      return (false && yn.q(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.m;
    var hi$1 = t$1.o;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.m;
      var hi$2 = t$2.o;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else {
      return (false && yn.q(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.rq = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.m;
      var hi = t.o;
      var value = xc.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  ic: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  ii: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.eg = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  } else if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.j9 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    xs.a[idx] = $uJ(value);
  } else if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
  } else if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
  } else if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
  } else if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.j0 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bG(), (x.bl() + "("), ",", ")");
});
$p.d = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  ik: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.f = (function(hash, data) {
  var h = this.cV(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.cV = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.G = (function(hash, length) {
  return this.qU((hash ^ length));
});
$p.qU = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.f3 = (function(lv) {
  var lo = lv.m;
  var hi = lv.o;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.ch = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.pC(dv);
    var hi = this$1.M;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.Z = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.ch((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.f3(new $c_RTLong(t.m, t.o));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.ek = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  im: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  io: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$() {
  this.og = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.og = $m_sjs_concurrent_QueueExecutionContext$().qQ();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  ip: 1
}));
var $n_sjs_concurrent_JSExecutionContext$;
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
  }
  return $n_sjs_concurrent_JSExecutionContext$;
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$() {
}
$h_sjs_concurrent_QueueExecutionContext$.prototype = $p;
$p.qQ = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  iq: 1
}));
var $n_sjs_concurrent_QueueExecutionContext$;
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
  }
  return $n_sjs_concurrent_QueueExecutionContext$;
}
/** @constructor */
function $c_sjs_js_Thenable$Implicits$() {
}
$p = $c_sjs_js_Thenable$Implicits$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$Implicits$;
/** @constructor */
function $h_sjs_js_Thenable$Implicits$() {
}
$h_sjs_js_Thenable$Implicits$.prototype = $p;
$p.pX = (function(p) {
  return $m_sjs_js_Thenable$ThenableOps$().t9(p);
});
var $d_sjs_js_Thenable$Implicits$ = new $TypeData().i($c_sjs_js_Thenable$Implicits$, "scala.scalajs.js.Thenable$Implicits$", ({
  iw: 1
}));
var $n_sjs_js_Thenable$Implicits$;
function $m_sjs_js_Thenable$Implicits$() {
  if ((!$n_sjs_js_Thenable$Implicits$)) {
    $n_sjs_js_Thenable$Implicits$ = new $c_sjs_js_Thenable$Implicits$();
  }
  return $n_sjs_js_Thenable$Implicits$;
}
/** @constructor */
function $c_sjs_js_Thenable$ThenableOps$() {
}
$p = $c_sjs_js_Thenable$ThenableOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$ThenableOps$;
/** @constructor */
function $h_sjs_js_Thenable$ThenableOps$() {
}
$h_sjs_js_Thenable$ThenableOps$.prototype = $p;
$p.t9 = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().oD(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  ix: 1
}));
var $n_sjs_js_Thenable$ThenableOps$;
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$();
  }
  return $n_sjs_js_Thenable$ThenableOps$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.oD = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  iA: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.t2 = (function(interval, body) {
  return setTimeout((() => {
    body.S();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  iB: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.ta = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gZ;
  } else {
    var result = [];
    seq.bh(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  iM: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().on ? $c_jl_Throwable.prototype.eX.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.bR = (function(t) {
  return (!((t instanceof $c_jl_VirtualMachineError) || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  iQ: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.f = (function(hash, data) {
  var h = this.cV(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.cV = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.G = (function(hash, length) {
  return this.bI((hash ^ length));
});
$p.bI = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pY = (function(x, y, seed) {
  var h = seed;
  h = this.f(h, $f_T__hashCode__I("Tuple2"));
  h = this.f(h, x);
  h = this.f(h, y);
  return this.G(h, 2);
});
$p.cy = (function(x, seed, ignorePrefix) {
  var arr = x.bj();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.bl());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.f(h, $f_T__hashCode__I(x.bl()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.f(h, $m_sr_Statics$().Z(x.bk(i)));
      i = ((1 + i) | 0);
    }
    return this.G(h, arr);
  }
});
$p.k6 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.n();
  while (iterator.r()) {
    var x = iterator.j();
    var h = $m_sr_Statics$().Z(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.f(h$2, a);
  h$2 = this.f(h$2, b);
  h$2 = this.cV(h$2, c);
  return this.G(h$2, n);
});
$p.sw = (function(xs, seed) {
  var it = xs.n();
  var h = seed;
  if ((!it.r())) {
    return this.G(h, 0);
  }
  var x0 = it.j();
  if ((!it.r())) {
    return this.G(this.f(h, $m_sr_Statics$().Z(x0)), 1);
  }
  var x1 = it.j();
  var initial = $m_sr_Statics$().Z(x0);
  h = this.f(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().Z(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.r()) {
    h = this.f(h, prev);
    var hash = $m_sr_Statics$().Z(it.j());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.f(h, hash);
      i = ((1 + i) | 0);
      while (it.r()) {
        h = this.f(h, $m_sr_Statics$().Z(it.j()));
        i = ((1 + i) | 0);
      }
      return this.G(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bI(this.f(this.f(h0, rangeDiff), prev));
});
$p.oG = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().c6(a);
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().Z($m_sr_ScalaRunTime$().eg(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Z($m_sr_ScalaRunTime$().eg(a, 0));
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Z($m_sr_ScalaRunTime$().eg(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().Z($m_sr_ScalaRunTime$().eg(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().Z($m_sr_ScalaRunTime$().eg(a, i)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.sA = (function(start, step, last, seed) {
  return this.bI(this.f(this.f(this.f(seed, start), step), last));
});
$p.rV = (function(a, seed) {
  var h = seed;
  var l = a.v();
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().Z(a.B(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Z(a.B(0));
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Z(a.B(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().Z(a.B(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().Z(a.B(i)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.s9 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.u();
    var tail = elems.p();
    var hash = $m_sr_Statics$().Z(head);
    h = this.f(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.sA(initial, rangeDiff, prev, seed) : this.G(h, n));
});
$p.oP = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.f(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oH = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.f(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oI = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.f(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oJ = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().ch(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().ch(a.a[0]);
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().ch(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().ch(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().ch(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oK = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().ch(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().ch(a.a[0]);
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().ch(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().ch(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().ch(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oL = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.f(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oM = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.G(this.f($x_1, $m_sr_Statics$().f3(new $c_RTLong(t.m, t.o))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().f3(new $c_RTLong(t$1.m, t$1.o));
      h = this.f(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().f3(new $c_RTLong(t$2.m, t$2.o));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().f3(new $c_RTLong(t$3.m, t$3.o));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.f($x_2, $m_sr_Statics$().f3(new $c_RTLong(t$4.m, t$4.o)));
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oN = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.f(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
$p.oO = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, 0), 1);
      break;
    }
    default: {
      h = this.f(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, 0);
            i = ((1 + i) | 0);
          }
          return this.G(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bI(this.f(this.f(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $thiz.gf(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.he(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gj(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gj(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.kS = null;
  this.kR = null;
  this.hu = false;
  this.kR = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.hu = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.f8 = (function() {
  return this.kS;
});
$p.oT = (function(x$0) {
  this.kS = x$0;
});
$p.pE = (function(subscription) {
  if (this.hu) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.kR.S();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.hu = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  d6: 1,
  bi: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$aria$(outer) {
  this.lg = null;
  this.lh = false;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_api_Laminar$aria$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$aria$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$aria$() {
}
$h_Lcom_raquo_laminar_api_Laminar$aria$.prototype = $p;
$p.s8 = (function() {
  if ((!this.lh)) {
    this.lg = new $c_Lcom_raquo_laminar_keys_AriaAttr("label", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.lh = true;
  }
  return this.lg;
});
var $d_Lcom_raquo_laminar_api_Laminar$aria$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$aria$, "com.raquo.laminar.api.Laminar$aria$", ({
  dr: 1,
  dA: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lz = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.f8 = (function() {
  return this.lz;
});
$p.oT = (function(x$0) {
  this.lz = x$0;
});
$p.pt = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dt: 1,
  bi: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.g4 = (function(scalaValue) {
  return scalaValue;
});
$p.jk = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dz: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_AriaAttr(suffix, codec) {
  this.mN = null;
  this.hE = null;
  this.mN = codec;
  this.hE = ("aria-" + suffix);
}
$p = $c_Lcom_raquo_laminar_keys_AriaAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_AriaAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_AriaAttr() {
}
$h_Lcom_raquo_laminar_keys_AriaAttr.prototype = $p;
$p.V = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sU(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_AriaAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_AriaAttr, "com.raquo.laminar.keys.AriaAttr", ({
  dY: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.mO = null;
  this.mP = null;
  this.gC = null;
  this.hF = null;
  this.mO = getRawDomValue;
  this.mP = setRawDomValue;
  this.gC = separator;
  this.hF = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.z = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().b.qu(), $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(items, this.gC)));
});
$p.qr = (function(value, mapper) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, mapper.k4(value, this.gC));
});
$p.qs = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.dQ(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = valueMapper.k4(nextRawItems, this.gC);
    var f = ((elem) => currentNormalizedItems.bg(elem));
    var l = nextNormalizedItems;
    block: {
      var result;
      while (true) {
        if (l.c()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l.u();
          var t = l.p();
          if (((!(!f(h))) === true)) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if (remaining.c()) {
              var result = start;
              break block;
            } else {
              var x = remaining.u();
              if (((!(!f(x))) !== true)) {
                remaining = remaining.p();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $c_sci_$colon$colon(start.u(), $m_sci_Nil$());
              var toProcess = start.p();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.u(), $m_sci_Nil$());
                currentLast.a0 = newElem;
                currentLast = newElem;
                toProcess = toProcess.p();
              }
              var next = firstMiss.p();
              var nextToCopy = next;
              while ((!next.c())) {
                var head = next.u();
                if (((!(!f(head))) !== true)) {
                  next = next.p();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.u(), $m_sci_Nil$());
                    currentLast.a0 = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.p();
                  }
                  nextToCopy = next.p();
                  next = next.p();
                }
              }
              if ((!nextToCopy.c())) {
                currentLast.a0 = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((elem$2) => nextNormalizedItems.bg(elem$2));
    var l$1 = currentNormalizedItems;
    block$2: {
      var $x_1;
      while (true) {
        if (l$1.c()) {
          var $x_1 = $m_sci_Nil$();
          break;
        } else {
          var h$1 = l$1.u();
          var t$1 = l$1.p();
          if (((!(!f$1(h$1))) === true)) {
            l$1 = t$1;
            continue;
          }
          var start$1 = l$1;
          var remaining$1 = t$1;
          while (true) {
            if (remaining$1.c()) {
              var $x_1 = start$1;
              break block$2;
            } else {
              var x$1 = remaining$1.u();
              if (((!(!f$1(x$1))) !== true)) {
                remaining$1 = remaining$1.p();
                continue;
              }
              var firstMiss$1 = remaining$1;
              var newHead$1 = new $c_sci_$colon$colon(start$1.u(), $m_sci_Nil$());
              var toProcess$1 = start$1.p();
              var currentLast$1 = newHead$1;
              while ((toProcess$1 !== firstMiss$1)) {
                var newElem$1 = new $c_sci_$colon$colon(toProcess$1.u(), $m_sci_Nil$());
                currentLast$1.a0 = newElem$1;
                currentLast$1 = newElem$1;
                toProcess$1 = toProcess$1.p();
              }
              var next$1 = firstMiss$1.p();
              var nextToCopy$1 = next$1;
              while ((!next$1.c())) {
                var head$1 = next$1.u();
                if (((!(!f$1(head$1))) !== true)) {
                  next$1 = next$1.p();
                } else {
                  while ((nextToCopy$1 !== next$1)) {
                    var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.u(), $m_sci_Nil$());
                    currentLast$1.a0 = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.p();
                  }
                  nextToCopy$1 = next$1.p();
                  next$1 = next$1.p();
                }
              }
              if ((!nextToCopy$1.c())) {
                currentLast$1.a0 = nextToCopy$1;
              }
              var $x_1 = newHead$1;
              break block$2;
            }
          }
        }
      }
    }
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this, thisBinder, result, $x_1);
  })));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  dZ: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.hG = null;
  this.hG = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.p0 = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(domValue, this.hG);
});
$p.p2 = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.hG, "");
});
$p.jk = (function(domValue) {
  return this.p0(domValue);
});
$p.g4 = (function(scalaValue) {
  return this.p2(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  e1: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$.prototype = $p;
$p.tb = (function(items, separator) {
  var this$1 = items.f9();
  var rest = this$1;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(rest.u(), separator).n();
    while (it.r()) {
      var nx = new $c_sci_$colon$colon(it.j(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.a0 = nx;
      }
      t = nx;
    }
    rest = rest.p();
  }
  return ((h === null) ? $m_sci_Nil$() : h);
});
$p.k4 = (function(value, separator) {
  return this.tb(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringSeqValueMapper$", ({
  e2: 1,
  bm: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
$p.k4 = (function(value, separator) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  e3: 1,
  bm: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.eB = null;
  this.eB = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  e7: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fj = null;
  this.hH = null;
  this.fj = name;
  this.hH = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.V = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pQ(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  e8: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.e0 = null;
  this.mQ = null;
  this.e0 = name;
  this.mQ = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.V = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sX(element, prop, value$2);
  })));
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bo: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.hL = null;
  this.hK = null;
  this.gE = null;
  this.gF = null;
  this.hL = localName;
  this.hK = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.H() + ":") + localName)));
  this.gE = (this$1.c() ? localName : this$1.H());
  this.gF = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sg(namespacePrefix.H())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.V = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pR(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  eb: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $p;
$p.bF = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  el: 1,
  R: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.n2 = null;
  this.n2 = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.bF = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.n2.e(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b5 || (!when))) {
    f();
  } else {
    this$2.b5 = true;
    try {
      f();
    } finally {
      this$2.b5 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  em: 1,
  R: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  ep: 1,
  en: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$, "com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$", ({
  er: 1,
  eq: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
function $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2, outer) {
  this.n3 = null;
  this.n3 = render$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.ja = (function(value) {
  return this.n3.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  eu: 1,
  es: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.jb(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().ri($thiz.a2(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.i0 = null;
  this.i0 = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.i = (function(modifiers) {
  var element = this.qX();
  modifiers.bh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.bF(element);
  })));
  return element;
});
$p.qX = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().re(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eG: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.i1 = null;
  this.i1 = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.h5 = (function(modifiers) {
  var element = this.qY();
  modifiers.bh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.bF(element);
  })));
  return element;
});
$p.qY = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().oY(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eH: 1,
  br: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.gJ) << 24) >> 24) === 0)) {
    $thiz.i4 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.gJ = (((32 | $thiz.gJ) << 24) >> 24);
  }
  return $thiz.i4;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.gJ) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.i4);
}
/** @constructor */
function $c_jl_Character$() {
  this.i4 = null;
  this.gJ = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.tc = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rk = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().qV($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  eS: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gb = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pq = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.gb(s);
  }
  var len = s.length;
  if ((len === 0)) {
    this.gb(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.gb(s);
  }
  var result = 0;
  while ((i !== len)) {
    var digit = character.rk(s.charCodeAt(i), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.gb(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.gb(s);
  }
  return (((result ^ sign) - sign) | 0);
});
$p.dG = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  eX: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.eE = null;
  this.fl = null;
  this.eF = null;
  this.eG = 0;
  this.eD = 0;
  this.eE = declaringClass;
  this.fl = methodName;
  this.eF = fileName;
  this.eG = lineNumber;
  this.eD = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.q = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.eF === that.eF) && (this.eG === that.eG)) && (this.eD === that.eD)) && (this.eE === that.eE)) && (this.fl === that.fl)));
});
$p.x = (function() {
  var result = "";
  if ((this.eE !== "<jscode>")) {
    result = ((("" + result) + this.eE) + ".");
  }
  result = (("" + result) + this.fl);
  if ((this.eF === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.eF);
    if ((this.eG >= 0)) {
      result = ((result + ":") + this.eG);
      if ((this.eD >= 0)) {
        result = ((result + ":") + this.eD);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.w = (function() {
  return (((($f_T__hashCode__I(this.eE) ^ $f_T__hashCode__I(this.fl)) ^ $f_T__hashCode__I(this.eF)) ^ this.eG) ^ this.eD);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.sh = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.a.length))) {
    throw new $c_jl_StringIndexOutOfBoundsException();
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fb: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.no = s;
  $thiz.fm = e;
  $thiz.np = writableStackTrace;
  if (writableStackTrace) {
    $thiz.eX();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.no = null;
    this.fm = null;
    this.np = false;
    this.nn = null;
    this.e1 = null;
  }
  jH(cause) {
    this.fm = cause;
    return this;
  }
  g8() {
    return this.no;
  }
  eX() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.U : this);
    this.nn = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  h9() {
    if ((this.e1 === null)) {
      if (this.np) {
        this.e1 = $m_jl_StackTrace$().rt(this.nn);
      } else {
        this.e1 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.e1;
  }
  gm(s) {
    this.h9();
    var t = this.x();
    s.eo(t);
    if ((this.e1.a.length !== 0)) {
      var i = 0;
      while ((i < this.e1.a.length)) {
        var t$1 = ("  at " + this.e1.a[i]);
        s.eo(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.eo("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.fm) && (wCause.fm !== null))) {
      var parentTrace = wCause.h9();
      wCause = wCause.fm;
      var thisTrace = wCause.h9();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.eo(t$2);
      if ((thisLength !== 0)) {
        var sameFrameCount = 0;
        while (true) {
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            var x = thisTrace.a[(((-1) + ((thisLength - sameFrameCount) | 0)) | 0)];
            var x$2 = parentTrace.a[(((-1) + ((parentLength - sameFrameCount) | 0)) | 0)];
            var $x_1 = ((x === null) ? (x$2 === null) : x.q(x$2));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            sameFrameCount = ((1 + sameFrameCount) | 0);
          } else {
            break;
          }
        }
        if ((sameFrameCount > 0)) {
          sameFrameCount = (((-1) + sameFrameCount) | 0);
        }
        var lengthToPrint = ((thisLength - sameFrameCount) | 0);
        var i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          var t$3 = ("  at " + thisTrace.a[i$2]);
          s.eo(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.eo(t$4);
        }
      } else {
        s.eo("  <no stack trace available>");
      }
    }
  }
  x() {
    var className = $objectClassName(this);
    var message = this.g8();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  w() {
    return $c_O.prototype.w.call(this);
  }
  q(that) {
    return $c_O.prototype.q.call(this, that);
  }
  get "message"() {
    var m = this.g8();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.x();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.Y = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.Y = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.g0 = (function(expect, update) {
  if (Object.is(expect, this.Y)) {
    this.Y = update;
    return true;
  } else {
    return false;
  }
});
$p.x = (function() {
  return ("" + this.Y);
});
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().j9(dest, j, $m_sr_ScalaRunTime$().eg(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.pe = (function(it, evidence$3) {
  var n = it.D();
  if ((n > (-1))) {
    var elements = evidence$3.bt(n);
    var iterator = it.n();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().j9(elements, i, iterator.j());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.aL();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.n();
    while (iterator$2.r()) {
      var elem = iterator$2.j();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a3.r().w(jsElems);
  }
});
$p.g1 = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.a3.Z && $objectGetClass(dest).a3.R(srcClass.a3))) {
    src.A(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pa = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().s(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fp: 1,
  a: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.to = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().nX : new $c_scm_ArraySeq$ofRef(xs)));
});
/** @constructor */
function $c_s_Option$() {
}
$p = $c_s_Option$.prototype = new $h_O();
$p.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $p;
$p.qO = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  fx: 1,
  a: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.c8(x) ? $thiz.e(x) : default$1.e(x));
}
/** @constructor */
function $c_sci_List$$anon$1() {
}
$p = $c_sci_List$$anon$1.prototype = new $h_O();
$p.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
}
$h_sci_List$$anon$1.prototype = $p;
$p.x = (function() {
  return "<function1>";
});
$p.e = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  gt: 1,
  e: 1
}));
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.b1($m_scm_Buffer$().pf(elems));
  } else {
    var it = elems.n();
    while (it.r()) {
      $thiz.b2(it.j());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  if ((runnable === null)) {
    throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "runnable is null");
  }
  var tl = $thiz.o6;
  var b = tl.H();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.sy(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.go(((1 + i) | 0));
      try {
        runnable.ep();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().eS.e(e$2);
        } else if ($m_s_util_control_NonFatal$().bR(e$2)) {
          $m_s_concurrent_ExecutionContext$().eS.e(e$2);
        } else {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
        }
      } finally {
        tl.go(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.go(batch);
      batch.ep();
      tl.go(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.iT = null;
  this.iU = null;
  this.iT = first;
  this.iU = rest;
}
$p = $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
/** @constructor */
function $h_s_concurrent_impl_Promise$ManyCallbacks() {
}
$h_s_concurrent_impl_Promise$ManyCallbacks.prototype = $p;
$p.x = (function() {
  return "ManyCallbacks";
});
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  cA: 1,
  ay: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qg = null;
  this.qp = null;
  this.qh = null;
  this.qk = null;
  this.ql = null;
  this.qj = null;
  this.qi = null;
  this.qf = null;
  this.qq = null;
  this.qd = null;
  this.qo = null;
  this.qe = null;
  this.qm = null;
  this.qn = null;
  $n_s_reflect_ClassTag$ = this;
  this.qg = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qp = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qh = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qk = $m_s_reflect_ManifestFactory$IntManifest$();
  this.ql = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qj = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qi = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qf = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qq = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qd = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qo = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qe = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qm = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qn = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.oC = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hI: 1,
  a: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.x = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.x = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.x = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.x = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.x = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.gW = false;
  this.gW = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.x = (function() {
  return ("" + this.gW);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  ib: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.ed = 0;
  this.ed = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.x = (function() {
  return ("" + this.ed);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  id: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.gX = false;
  this.gY = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.rX = (function(value) {
  this.gY = value;
  this.gX = true;
  return value;
});
$p.x = (function() {
  return ("LazyRef " + (this.gX ? ("of: " + this.gY) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  ie: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.dB = null;
  this.dB = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.x = (function() {
  return ("" + this.dB);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  ij: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.on = false;
  this.on = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  iP: 1,
  a: 1
}));
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$();
  }
  return $n_s_util_control_NoStackTrace$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ap = 0;
  this.dD = 0;
  this.oo = 0;
  this.iV = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ap = $f_T__hashCode__I("Seq");
  this.dD = $f_T__hashCode__I("Map");
  this.oo = $f_T__hashCode__I("Set");
  this.iV = this.k6($m_sci_Nil$(), this.dD);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cm = (function(x, y) {
  return this.pY($m_sr_Statics$().Z(x), $m_sr_Statics$().Z(y), (-889275714));
});
$p.pO = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.rV(xs, this.ap) : ((xs instanceof $c_sci_List) ? this.s9(xs, this.ap) : this.sw(xs, this.ap)));
});
$p.sc = (function(xs) {
  if (xs.c()) {
    return this.iV;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dD;
    xs.eh(accum);
    h = this.f(h, accum.h0);
    h = this.f(h, accum.h1);
    h = this.cV(h, accum.h2);
    return this.G(h, accum.h3);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  iS: 1,
  iR: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.h0 = 0;
  this.h1 = 0;
  this.h3 = 0;
  this.h2 = 0;
  this.h0 = 0;
  this.h1 = 0;
  this.h3 = 0;
  this.h2 = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.x = (function() {
  return "<function2>";
});
$p.qN = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cm(k, v);
  this.h0 = ((this.h0 + h) | 0);
  this.h1 = (this.h1 ^ h);
  this.h2 = Math.imul(this.h2, (1 | h));
  this.h3 = ((1 + this.h3) | 0);
});
$p.eT = (function(v1, v2) {
  this.qN(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  iT: 1,
  aR: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.hi = null;
  this.k7 = null;
  this.k8 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hi = $m_scm_Buffer$().oF($m_sr_ScalaRunTime$().d(new ($d_F1.r().C)([])));
  this.k7 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.ei(err) + "\n") + this.rM(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.k8 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
  }));
  this.sC(this.k7);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.ei = (function(e) {
  try {
    var errorMessage = e.g8();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jz() + ": ") + errorMessage);
});
$p.rM = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().to(err.h9()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.r5 = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.ei(cause.H()))));
});
$p.sC = (function(fn) {
  this.hi.b2(fn);
});
$p.c9 = (function(err) {
  var this$1 = this.hi;
  var it = this$1.n();
  while (it.r()) {
    var x0 = it.j();
    try {
      x0.e(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.k8;
      if (((x0 === null) ? (x$2 === null) : x0.q(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().t2(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cL: 1,
  hF: 1,
  hG: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.ck(true);
  $thiz.f4((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().q4(onNext, $m_s_PartialFunction$().gL, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.f2()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.f2()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.dO();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_F0.r().C)([])));
    $thiz.f4(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aE: 1,
  au: 1,
  a2: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.ja(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).bh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.la = null;
  this.lb = false;
  this.lc = null;
  this.ld = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.em = (function() {
  if ((!this.lb)) {
    this.la = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.lb = true;
  }
  return this.la;
});
$p.sv = (function() {
  if ((!this.ld)) {
    this.lc = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.ld = true;
  }
  return this.lc;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dp: 1,
  aI: 1,
  dF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$2() {
  this.le = null;
  this.lf = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$2() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = $p;
$p.em = (function() {
  if ((!this.lf)) {
    this.le = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.lf = true;
  }
  return this.le;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$2, "com.raquo.laminar.api.Laminar$$anon$2", ({
  dq: 1,
  aI: 1,
  dG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(fn$3, outer) {
  this.mU = null;
  this.mU = fn$3;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Binder$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Binder$$anon$1.prototype = $p;
$p.bF = (function(element) {
  this.fW(element);
});
$p.fW = (function(element) {
  return this.mU.e(element);
});
var $d_Lcom_raquo_laminar_modifiers_Binder$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Binder$$anon$1, "com.raquo.laminar.modifiers.Binder$$anon$1", ({
  ef: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.mV = null;
  this.hN = null;
  this.mV = key;
  this.hN = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.bF = (function(element) {
  if ((!this.hN.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.mV, null, this.hN, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  eg: 1,
  R: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.eC = null;
  this.hO = null;
  this.hP = null;
  this.eC = eventProcessor;
  this.hO = ((ev) => {
    var processor = eventProcessor.ez;
    var this$2 = processor.e(ev);
    if ((!this$2.c())) {
      callback.e(this$2.H());
    }
  });
  this.hP = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.eC.eA;
    this$3.passive = outer.eC.gD;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.bF = (function(element) {
  this.qW(element, false);
});
$p.qW = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qA(element.a2(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.hM, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().sI(element.a2(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tg(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bs(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pU(element.bs(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.x = (function() {
  return (("EventListener(" + this.eC.d2.eB) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  eh: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.mX = null;
  this.mY = null;
  this.mW = null;
  this.mX = key;
  this.mY = value;
  this.mW = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.bF = (function(element) {
  this.mW.j5(element, this.mX, this.mY);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  ei: 1,
  R: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.mZ = null;
  this.n1 = null;
  this.n0 = null;
  this.mZ = key;
  this.n1 = values;
  this.n0 = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.bF = (function(element) {
  this.fW(element);
});
$p.fW = (function(element) {
  element.py(this.mZ);
  var observable = this.n1;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.n0.j5(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pV(element.bs(), observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  ej: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.hY = null;
  this.ne = null;
  this.nf = null;
  this.ne = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().s7(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nf = container;
  this.sf();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.bs = (function() {
  return this.hY;
});
$p.jb = (function(x$0) {
  this.hY = x$0;
});
$p.sf = (function() {
  this.hY.oq();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(this, this.ne, (void 0));
});
$p.a2 = (function() {
  return this.nf;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eB: 1,
  ap: 1,
  aK: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eF)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a3.Z) {
    return ($thiz.a3.Q().jz() + "[]");
  } else {
    var name = $thiz.a3.N;
    var idx = (((-1) + name.length) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = (((-1) + idx) | 0);
    }
    if ((idx >= 0)) {
      var index$1 = idx;
      var c = name.charCodeAt(index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      idx = (((-1) + idx) | 0);
      while (true) {
        if ((idx >= 0)) {
          var index$2 = idx;
          var c$1 = name.charCodeAt(index$2);
          var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          idx = (((-1) + idx) | 0);
        } else {
          break;
        }
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = (((-1) + idx) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_3 = ((currChar !== 46) && (currChar !== 36));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        idx = (((-1) + idx) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.i5 = null;
  this.a3 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.x = (function() {
  return ((this.a3.Y ? "interface " : (this.a3.X ? "" : "class ")) + this.a3.N);
});
$p.jz = (function() {
  if ((this.i5 === null)) {
    this.i5 = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.i5;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eT: 1,
  a: 1,
  Y: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  v: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_s_Predef$() {
  this.qc = null;
  $n_s_Predef$ = this;
  this.qc = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.sN = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fA: 1,
  ft: 1,
  fu: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.b0();
      break;
    }
    case 1: {
      return $thiz.aW();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.e2;
      break;
    }
    case 1: {
      return $thiz.e3;
      break;
    }
    case 2: {
      return $thiz.e4;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fo = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fo = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.aC = (function(it) {
  return this.fo.jr(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b3 = (function() {
  return this.fo.hc($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cS = (function(elems) {
  return this.fo.jr(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gM = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gM = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.aC = (function(it) {
  return this.gM.aC(it);
});
$p.b3 = (function() {
  return this.gM.b3();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.D();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.n();
      while (it.r()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.j();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).jg(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().N : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.n();
  while (($thiz.r() && those.r())) {
    if ((!$m_sr_BoxesRunTime$().s($thiz.j(), those.j()))) {
      return false;
    }
  }
  return ($thiz.r() === those.r());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.N = null;
  $n_sc_Iterator$ = this;
  this.N = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.b3 = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.aC = (function(source) {
  return source.n();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fV: 1,
  K: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.ir = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.ir = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aC = (function(it) {
  return this.ir.aC(it);
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.pg = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.n()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jt(it))));
});
$p.b3 = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().pg(it$2$2))));
});
$p.aC = (function(source) {
  return this.pg(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  g9: 1,
  K: 1,
  a: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a7 = 0;
  this.af = 0;
  this.aq = null;
  this.bx = null;
  this.aN = 0;
  this.bn = 0;
  this.a7 = dataMap;
  this.af = nodeMap;
  this.aq = content;
  this.bx = originalHashes;
  this.aN = size;
  this.bn = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aM = (function() {
  return this.aN;
});
$p.dI = (function() {
  return this.bn;
});
$p.dL = (function(index) {
  return this.aq.a[(index << 1)];
});
$p.cU = (function(index) {
  return this.aq.a[((1 + (index << 1)) | 0)];
});
$p.pm = (function(index) {
  return new $c_T2(this.aq.a[(index << 1)], this.aq.a[((1 + (index << 1)) | 0)]);
});
$p.g7 = (function(index) {
  return this.bx.a[index];
});
$p.cT = (function(index) {
  return this.aq.a[(((((-1) + this.aq.a.length) | 0) - index) | 0)];
});
$p.j4 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    if ($m_sr_BoxesRunTime$().s(key, this.dL(index))) {
      return this.cU(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.af & bitpos) !== 0)) {
    return this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).j4(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.jx = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    return ($m_sr_BoxesRunTime$().s(key, this.dL(index)) ? this.cU(index) : f.S());
  } else {
    return (((this.af & bitpos) !== 0) ? this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).jx(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.S());
  }
});
$p.jh = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    return ((this.bx.a[index] === originalHash) && $m_sr_BoxesRunTime$().s(key, this.dL(index)));
  } else {
    return (((this.af & bitpos) !== 0) && this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).jh(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.q0 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    var key0 = this.dL(index);
    var key0UnimprovedHash = this.g7(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().s(key0, key))) {
      if (replaceValue) {
        var value0 = this.cU(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.rc(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cU(index);
      var key0Hash = $m_sc_Hashing$().cj(key0UnimprovedHash);
      return this.ra(bitpos, key0Hash, this.jO(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.af & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cw(this.af, mask, bitpos);
    var subNode = this.cT(index$2);
    var subNodeNew$2 = subNode.q1(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.rb(bitpos, subNode, subNodeNew$2));
  } else {
    return this.r9(bitpos, key, originalHash, keyHash, value);
  }
});
$p.jO = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().ju(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().el(keyHash0, shift);
    var mask1 = $m_sci_Node$().el(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dH(mask0) | $m_sci_Node$().dH(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().dH(mask0);
      var node = this.jO(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().ic, node.aM(), node.dI());
    }
  }
});
$p.jC = (function() {
  return (this.af !== 0);
});
$p.jQ = (function() {
  return $m_jl_Integer$().dG(this.af);
});
$p.ha = (function() {
  return (this.a7 !== 0);
});
$p.jW = (function() {
  return $m_jl_Integer$().dG(this.a7);
});
$p.g2 = (function(bitpos) {
  return $m_jl_Integer$().dG((this.a7 & (((-1) + bitpos) | 0)));
});
$p.jR = (function(bitpos) {
  return $m_jl_Integer$().dG((this.af & (((-1) + bitpos) | 0)));
});
$p.rc = (function(bitpos, newKey, newValue) {
  var dataIx = this.g2(bitpos);
  var idx = (dataIx << 1);
  var src = this.aq;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.A(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, dst, this.bx, this.aN, this.bn);
});
$p.rb = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aq.a.length) | 0) - this.jR(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.A(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, dst, this.bx, ((((this.aN - oldNode.aM()) | 0) + newNode.aM()) | 0), ((((this.bn - oldNode.dI()) | 0) + newNode.dI()) | 0));
});
$p.r9 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.g2(bitpos);
  var idx = (dataIx << 1);
  var src = this.aq;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.A(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.A(idx, dst, destPos, length);
  var dstHashes = this.s1(this.bx, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a7 | bitpos), this.af, dst, dstHashes, ((1 + this.aN) | 0), ((this.bn + keyHash) | 0));
});
$p.se = (function(bitpos, keyHash, node) {
  var dataIx = this.g2(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aq.a.length) | 0) - this.jR(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.A(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.A(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.A(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pF(this.bx, dataIx);
  this.a7 = (this.a7 ^ bitpos);
  this.af = (this.af | bitpos);
  this.aq = dst;
  this.bx = dstHashes;
  this.aN = (((((-1) + this.aN) | 0) + node.aM()) | 0);
  this.bn = ((((this.bn - keyHash) | 0) + node.dI()) | 0);
  return this;
});
$p.ra = (function(bitpos, keyHash, node) {
  var dataIx = this.g2(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aq.a.length) | 0) - this.jR(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.A(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.A(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.A(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pF(this.bx, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a7 ^ bitpos), (this.af | bitpos), dst, dstHashes, (((((-1) + this.aN) | 0) + node.aM()) | 0), ((((this.bn - keyHash) | 0) + node.dI()) | 0));
});
$p.eh = (function(f) {
  var iN = $m_jl_Integer$().dG(this.a7);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eT(this.dL(i$1), this.cU(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dG(this.af);
  var j = 0;
  while ((j < jN)) {
    this.cT(j).eh(f);
    j = ((1 + j) | 0);
  }
});
$p.q = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bn === that.bn) && (this.af === that.af)) && (this.a7 === that.a7)) && (this.aN === that.aN)) && $m_ju_Arrays$().jm(this.bx, that.bx))) {
      var a1 = this.aq;
      var a2 = that.aq;
      var length = this.aq.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().s(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.oW = (function() {
  var this$1 = this.aq;
  var contentClone = this$1.h();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dG(this.a7) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oX();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, contentClone, this.bx.h(), this.aN, this.bn);
});
$p.oX = (function() {
  return this.oW();
});
$p.q1 = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.q0(key, value, originalHash, hash, shift, replaceValue);
});
$p.jw = (function(index) {
  return this.cT(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  c5: 1,
  cf: 1,
  b0: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.iw = 0;
  this.de = 0;
  this.ag = null;
  this.iw = originalHash;
  this.de = hash;
  this.ag = content;
  $m_s_Predef$().sN((this.ag.v() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.f1 = (function(key) {
  var iter = this.ag.n();
  var i = 0;
  while (iter.r()) {
    if ($m_sr_BoxesRunTime$().s(iter.j().b0(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aM = (function() {
  return this.ag.v();
});
$p.j4 = (function(key, originalHash, hash, shift) {
  var this$1 = this.rI(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().N.j();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.H();
  }
});
$p.rI = (function(key, originalHash, hash, shift) {
  if ((this.de === hash)) {
    var index = this.f1(key);
    return ((index >= 0) ? new $c_s_Some(this.ag.B(index).aW()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jx = (function(key, originalHash, hash, shift, f) {
  if ((this.de === hash)) {
    var x1 = this.f1(key);
    return ((x1 === (-1)) ? f.S() : this.ag.B(x1).aW());
  } else {
    return f.S();
  }
});
$p.jh = (function(key, originalHash, hash, shift) {
  return ((this.de === hash) && (this.f1(key) >= 0));
});
$p.q1 = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.f1(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ag.B(index).aW(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ag.dR(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ag.dF(new $c_T2(key, value))));
});
$p.jC = (function() {
  return false;
});
$p.jQ = (function() {
  return 0;
});
$p.cT = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ha = (function() {
  return true;
});
$p.jW = (function() {
  return this.ag.v();
});
$p.dL = (function(index) {
  return this.ag.B(index).b0();
});
$p.cU = (function(index) {
  return this.ag.B(index).aW();
});
$p.pm = (function(index) {
  return this.ag.B(index);
});
$p.g7 = (function(index) {
  return this.iw;
});
$p.eh = (function(f) {
  this.ag.bh(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.b0();
      var v = x0$1$2$2.aW();
      return f.eT(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.q = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.de === that.de) && (this.ag.v() === that.ag.v()))) {
      var iter = this.ag.n();
      while (iter.r()) {
        var x1$2 = iter.j();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.b0();
        var value = x1$2.aW();
        var index = that.f1(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().s(value, that.ag.B(index).aW())))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.w = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.dI = (function() {
  return Math.imul(this.ag.v(), this.de);
});
$p.oX = (function() {
  return new $c_sci_HashCollisionMapNode(this.iw, this.de, this.ag);
});
$p.jw = (function(index) {
  return this.cT(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  c7: 1,
  cf: 1,
  b0: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.ix = null;
  $n_sci_HashMap$ = this;
  this.ix = new $c_sci_HashMap($m_sci_MapNode$().nO);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.rD = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().j2(source).k0());
});
$p.aC = (function(it) {
  return this.rD(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gg: 1,
  aU: 1,
  a: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.nL = null;
  this.nM = null;
  this.nL = head;
  this.nM = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.u = (function() {
  return this.nL;
});
$p.aX = (function() {
  return this.nM;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  gq: 1,
  ca: 1,
  a: 1
}));
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
}
$p = $c_sci_LazyList$State$Empty$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
}
$h_sci_LazyList$State$Empty$.prototype = $p;
$p.jD = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
});
$p.aX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.u = (function() {
  this.jD();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  gr: 1,
  ca: 1,
  a: 1
}));
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$();
  }
  return $n_sci_LazyList$State$Empty$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.eZ = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.c()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().or(it).pJ();
});
$p.aC = (function(it) {
  return this.eZ(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gv: 1,
  aU: 1,
  a: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.D();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.b4(((that < 0) ? 0 : that));
  }
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.rF = (function(it) {
  var k = it.D();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).ou(it);
});
$p.b3 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.aC = (function(source) {
  return this.rF(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  hd: 1,
  K: 1,
  a: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$SyncBatch(outer, runnable) {
  this.fE = null;
  this.fF = null;
  this.dA = 0;
  this.o4 = null;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__(this, outer, runnable, $m_s_concurrent_BatchingExecutorStatics$().o5, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.ep = (function() {
  while (true) {
    try {
      this.sS(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().eS.e(e$2);
      } else if ($m_s_util_control_NonFatal$().bR(e$2)) {
        $m_s_concurrent_ExecutionContext$().eS.e(e$2);
      } else {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
    }
    if ((this.dA > 0)) {
      continue;
    }
    return (void 0);
  }
});
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  cw: 1,
  hu: 1,
  aN: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.Y = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.f6 = (function(owner) {
  var c = this.Y;
  var current = c;
  var target = c;
  while (true) {
    var value = target.Y;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.g0(current, target)) {
        return target;
      } else {
        current = this.Y;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target = value.Y;
    } else {
      owner.tf(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  cz: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hH)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.ob = null;
  this.ob = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.S = (function() {
  return (0, this.ob)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  i6: 1,
  cC: 1,
  aQ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.oc = null;
  this.oc = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oc)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  i7: 1,
  cD: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.od = null;
  this.od = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.eT = (function(x0, x1) {
  return (0, this.od)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  i8: 1,
  cE: 1,
  aR: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.x = (function() {
  return "<function1>";
});
$p.e = (function(x) {
  return this.bf(x, $m_s_PartialFunction$().gL);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  ih: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.rG = (function(f) {
  return (() => f.S());
});
$p.pj = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  it: 1,
  iu: 1,
  iv: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction3() {
}
$p = $c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
}
$h_sjsr_AnonFunction3.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction4() {
}
$p = $c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
$h_sjsr_AnonFunction4.prototype = $p;
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iO)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kb = null;
  this.k9 = false;
  this.hj = null;
  this.ka = null;
  this.kb = onNextParam$2;
  this.k9 = handleObserverErrors$3;
  this.hj = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ka = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.dN = (function() {
  return this.ka;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.jT = (function(nextValue) {
  try {
    this.kb.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.k9) {
      this.gg(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.gg = (function(error) {
  try {
    if (this.hj.c8(error)) {
      this.hj.e(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c9(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.en = (function(nextValue) {
  nextValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.gg(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.jT(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cN: 1,
  au: 1,
  a2: 1,
  aE: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.hk = null;
  this.kc = false;
  this.kd = null;
  this.hk = onTryParam$2;
  this.kc = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kd = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.dN = (function() {
  return this.kd;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.jT = (function(nextValue) {
  this.en(new $c_s_util_Success(nextValue));
});
$p.gg = (function(error) {
  this.en(new $c_s_util_Failure(error));
});
$p.en = (function(nextValue) {
  try {
    if (this.hk.c8(nextValue)) {
      this.hk.e(nextValue);
    } else {
      nextValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c9(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kc && nextValue.pp())) {
      this.gg(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cO: 1,
  au: 1,
  a2: 1,
  aE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lp = null;
  this.lq = false;
  this.lt = null;
  this.lu = false;
  this.lj = null;
  this.lk = false;
  this.ll = null;
  this.lm = false;
  this.ln = null;
  this.lo = false;
  this.lr = null;
  this.ls = false;
  this.lv = null;
  this.lw = false;
  this.lx = null;
  this.ly = false;
  this.li = null;
  this.hC = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.jV = (function() {
  if ((!this.lq)) {
    this.lp = new $c_Lcom_raquo_laminar_tags_SvgTag("path", false);
    this.lq = true;
  }
  return this.lp;
});
$p.pW = (function() {
  if ((!this.lu)) {
    this.lt = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lu = true;
  }
  return this.lt;
});
$p.jj = (function() {
  if ((!this.lk)) {
    this.lj = new $c_Lcom_raquo_laminar_keys_SvgAttr("d", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lk = true;
  }
  return this.lj;
});
$p.pb = (function() {
  if ((!this.lm)) {
    this.ll = new $c_Lcom_raquo_laminar_keys_SvgAttr("fill", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lm = true;
  }
  return this.ll;
});
$p.rS = (function() {
  if ((!this.lo)) {
    this.ln = new $c_Lcom_raquo_laminar_keys_SvgAttr("height", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lo = true;
  }
  return this.ln;
});
$p.pS = (function() {
  if ((!this.ls)) {
    this.lr = new $c_Lcom_raquo_laminar_keys_SvgAttr("style", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.ls = true;
  }
  return this.lr;
});
$p.tl = (function() {
  if ((!this.lw)) {
    this.lv = new $c_Lcom_raquo_laminar_keys_SvgAttr("viewBox", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lw = true;
  }
  return this.lv;
});
$p.tn = (function() {
  if ((!this.ly)) {
    this.lx = new $c_Lcom_raquo_laminar_keys_SvgAttr("width", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.ly = true;
  }
  return this.lx;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  ds: 1,
  dP: 1,
  dC: 1,
  dE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.lA = null;
  this.lB = false;
  this.b = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.b = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
$p.iX = (function() {
  if ((!this.lB)) {
    this.lA = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(this);
    this.lB = true;
  }
  return this.lA;
});
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  dw: 1,
  bk: 1,
  bn: 1,
  bj: 1
}));
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_DynamicInserter(initialContext, preferStrictMode, insertFn, hooks) {
  this.mK = null;
  this.mM = false;
  this.mL = null;
  this.hD = null;
  this.mK = initialContext;
  this.mM = preferStrictMode;
  this.mL = insertFn;
  this.hD = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.fW = (function(element) {
  var this$1 = this.mK;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().sO(element, this.mM, this.hD) : this$1.H());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.mL.j5(insertContext, mountContext.hM, this.hD)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bs(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.bF = (function(element) {
  this.fW(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  dT: 1,
  R: 1,
  dX: 1,
  dU: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.hI = name;
  $thiz.hJ = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.hI = null;
  this.hJ = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.V = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sZ(element, styleProp, value$2);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.hR = null;
  this.hS = null;
  this.hR = $m_s_None$();
  this.hS = $m_Lcom_raquo_laminar_DomApi$().rd(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.eU = (function() {
  return this.hR;
});
$p.dP = (function(maybeNextParent) {
  this.hR = maybeNextParent;
});
$p.dT = (function(maybeNextParent) {
});
$p.bF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.a2 = (function() {
  return this.hS;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  ev: 1,
  ap: 1,
  R: 1,
  av: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.hZ = null;
  this.gG = null;
  this.hZ = $m_s_None$();
  this.gG = $m_Lcom_raquo_laminar_DomApi$().rf(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.eU = (function() {
  return this.hZ;
});
$p.dP = (function(maybeNextParent) {
  this.hZ = maybeNextParent;
});
$p.dT = (function(maybeNextParent) {
});
$p.bF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.t8 = (function() {
  return this.gG.data;
});
$p.a2 = (function() {
  return this.gG;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eC: 1,
  ap: 1,
  R: 1,
  av: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  eQ: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bx: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eY)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f1)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.t = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.t = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.t = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.ox = (function(str) {
  var str$1 = $m_jl_String$().sh(str, 0, str.a.length);
  this.t = (("" + this.t) + str$1);
  return this;
});
$p.x = (function() {
  return this.t;
});
$p.v = (function() {
  return this.t.length;
});
$p.oQ = (function(index) {
  return this.t.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fc: 1,
  aL: 1,
  bv: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fg)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  fn: 1,
  v: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.bf = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.x = (function() {
  return "<function1>";
});
$p.c8 = (function(x) {
  return false;
});
$p.j6 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.j6(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fz: 1,
  i: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.n = (function() {
  return this;
});
$p.jg = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dK = (function(n) {
  return this.gp(n, (-1));
});
$p.gp = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.x = (function() {
  return "<iterator>";
});
$p.bS = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.D = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.ir = null;
  this.nE = null;
  this.nF = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nE = $ct_O__(new $c_O());
  this.nF = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().nE));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  g3: 1,
  g4: 1,
  aU: 1,
  a: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.eJ = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eJ = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oF = (function(elems) {
  return this.eJ.cS(elems);
});
$p.pf = (function(it) {
  return this.eJ.aC(it);
});
$p.b3 = (function() {
  return this.eJ.b3();
});
$p.aC = (function(source) {
  return this.pf(source);
});
$p.cS = (function(elems) {
  return this.oF(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cu(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.g5(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bi(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bi(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.D();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.D();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.n(), that);
  } else {
    return false;
  }
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gM = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.rE = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aC.call(this, it));
});
$p.aC = (function(it) {
  return this.rE(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gl: 1,
  fU: 1,
  K: 1,
  a: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.iB = null;
  $n_sci_LazyList$ = this;
  this.iB = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).pc();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cS = (function(elems) {
  return this.jt(elems);
});
$p.sT = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.dB;
    var i = iRef.ed;
    while (((i > 0) && (!rest.c()))) {
      rest = rest.J().aX();
      restRef.dB = rest;
      i = (((-1) + i) | 0);
      iRef.ed = i;
    }
    return rest.J();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jt = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.D() === 0) ? this.iB : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pL(coll.n()))))));
});
$p.pM = (function(it, suffix) {
  return (it.r() ? new $c_sci_LazyList$State$Cons(it.j(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pM(it, suffix))))) : suffix.S());
});
$p.pL = (function(it) {
  return (it.r() ? new $c_sci_LazyList$State$Cons(it.j(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pL(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.b3 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.aC = (function(source) {
  return this.jt(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gm: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.fA = null;
  this.nY = null;
  this.fA = outer;
  this.nY = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.qH = (function(x) {
  this.fA.b2(x);
  return this;
});
$p.qx = (function(xs) {
  this.fA.b1(xs);
  return this;
});
$p.b4 = (function(size) {
  this.fA.b4(size);
});
$p.b9 = (function() {
  return this.nY.e(this.fA.b9());
});
$p.b1 = (function(elems) {
  return this.qx(elems);
});
$p.b2 = (function(elem) {
  return this.qH(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  ha: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dx = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dx = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.qI = (function(elem) {
  this.dx.b2(elem);
  return this;
});
$p.qy = (function(xs) {
  this.dx.b1(xs);
  return this;
});
$p.b1 = (function(elems) {
  return this.qy(elems);
});
$p.b2 = (function(elem) {
  return this.qI(elem);
});
$p.b9 = (function() {
  return this.dx;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  b3: 1,
  M: 1,
  H: 1,
  F: 1
}));
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  eX() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  hC: 1,
  t: 1,
  a: 1,
  aC: 1
}));
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.oh = null;
  this.oh = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.jo = (function(runnable) {
  this.oh.then(((arg1$2) => {
    try {
      runnable.ep();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gm($m_jl_System$Streams$().eH);
    }
  }));
});
$p.jZ = (function(t) {
  t.gm($m_jl_System$Streams$().eH);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  ir: 1,
  b6: 1,
  b5: 1,
  aO: 1
}));
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = $p;
$p.jo = (function(runnable) {
  setTimeout($m_sjs_js_Any$().rG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    try {
      runnable.ep();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gm($m_jl_System$Streams$().eH);
    }
  }))), 0);
});
$p.jZ = (function(t) {
  t.gm($m_jl_System$Streams$().eH);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  is: 1,
  b6: 1,
  b5: 1,
  aO: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.oi = null;
  this.oi = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.S = (function() {
  return (0, this.oi)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  iD: 1,
  iC: 1,
  cC: 1,
  aQ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.oj = null;
  this.oj = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oj)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  iF: 1,
  iE: 1,
  cD: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.ok = null;
  this.ok = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.eT = (function(x0, x1) {
  return (0, this.ok)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  iH: 1,
  iG: 1,
  cE: 1,
  aR: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.ol = null;
  this.ol = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.j5 = (function(x0, x1, x2) {
  return (0, this.ol)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  iJ: 1,
  iI: 1,
  i9: 1,
  fr: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.om = null;
  this.om = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.qM = (function(x0, x1, x2, x3) {
  return (0, this.om)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  iL: 1,
  iK: 1,
  ia: 1,
  fs: 1
}));
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b8)));
}
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.fX($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.fY($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.et(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.ge(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.b5 || (!when))) {
    var $x_1 = f();
  } else {
    this$2.b5 = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.b5 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cv();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cx();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.b5 || (!when))) {
    f();
  } else {
    this$3.b5 = true;
    try {
      f();
    } finally {
      this$3.b5 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pG($thiz.cx(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pG($thiz.cv(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gr())) {
    $thiz.gk();
    $thiz.et(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gh();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gi();
    $thiz.et(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cv();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cx();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.kg = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kg = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.jJ = (function(x) {
  return (x !== null);
});
$p.j8 = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.kg, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.c8 = (function(x) {
  return this.jJ(x);
});
$p.bf = (function(x, default$1) {
  return this.j8(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  cW: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.kY = $m_Lcom_raquo_airstream_core_Observer$().rH(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.kY.en(tryValue);
}
function $f_Lcom_raquo_airstream_state_Var__update__F1__V($thiz, mod) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult12: {
      var x36 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.cZ);
      if ((x36 instanceof $c_s_util_Success)) {
        var currentValue = x36.cR;
        try {
          var $x_1 = new $c_s_util_Success(mod.e(currentValue));
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          matchEnd8: {
            var $x_1;
            if ($m_s_util_control_NonFatal$().bR(e$2)) {
              var $x_1 = new $c_s_util_Failure(e$2);
              break matchEnd8;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
          }
        }
        $thiz.pP($x_1, trx);
        break matchResult12;
      }
      if ((x36 instanceof $c_s_util_Failure)) {
        var err = x36.cs;
        $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdate instead.", new $c_s_Some(err)));
        break matchResult12;
      }
      throw new $c_s_MatchError(x36);
    }
  })));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.kZ = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kZ = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.s6 = (function(x) {
  return true;
});
$p.qS = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.kZ.pP(x, _$1);
  })));
});
$p.c8 = (function(x) {
  return this.s6(x);
});
$p.bf = (function(x, default$1) {
  return this.qS(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dd: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.oV(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bs().oq();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bs().rg();
  }))));
  $thiz.jd((void 0));
  $thiz.jc($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eV() === (void 0))) {
    $thiz.jd($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eV();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eV();
    if ((x$2 === (void 0))) {
      var $x_2;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.eV();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eV();
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < (x.length | 0)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z(x$1, listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List($thiz, prop, reason) {
  return $thiz.fZ().c7(prop, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$()))).r4(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.fZ().c7(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.u();
      var x = x0.b0();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.aW();
        if ((!((x$3 === null) ? (reason === null) : $dp_equals__O__Z(x$3, reason)))) {
          var $x_1 = true;
        } else {
          var $x_1 = (reason === null);
        }
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return true;
      }
      these = these.p();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  var l = removeItems;
  block: {
    var result;
    while (true) {
      if (l.c()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.u();
        var t = l.p();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.c()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.u();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.p();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.u(), $m_sci_Nil$());
            var toProcess = start.p();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.u(), $m_sci_Nil$());
              currentLast.a0 = newElem;
              currentLast = newElem;
              toProcess = toProcess.p();
            }
            var next = firstMiss.p();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.u();
              if (((!(!f(head))) !== true)) {
                next = next.p();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.u(), $m_sci_Nil$());
                  currentLast.a0 = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.p();
                }
                nextToCopy = next.p();
                next = next.p();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.a0 = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.fZ().c7(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bg(t$1.b0()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.u();
        var t$2 = l$1.p();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.c()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.u();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.p();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.u(), $m_sci_Nil$());
            var toProcess$1 = start$1.p();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.u(), $m_sci_Nil$());
              currentLast$1.a0 = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.p();
            }
            var next$1 = firstMiss$1.p();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.u();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.p();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.u(), $m_sci_Nil$());
                  currentLast$1.a0 = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.p();
                }
                nextToCopy$1 = next$1.p();
                next$1 = next$1.p();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.a0 = nextToCopy$1;
            }
            var $x_3 = newHead$1;
            break block$2;
          }
        }
      }
    }
  }
  var f$2 = ((_$2) => new $c_T2(_$2, reason));
  if ((itemsToAdd === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$1 = itemsToAdd.u();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.p();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.u();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.a0 = nx;
      t$3 = nx;
      rest = rest.p();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.oz($x_2);
  var domValues = key.hF.p0(key.mO.e($thiz));
  var f$3 = ((elem) => result.bg(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.u();
        var t$4 = l$2.p();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.c()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.u();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.p();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.u(), $m_sci_Nil$());
            var toProcess$2 = start$2.p();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.u(), $m_sci_Nil$());
              currentLast$2.a0 = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.p();
            }
            var next$2 = firstMiss$2.p();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.u();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.p();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.u(), $m_sci_Nil$());
                  currentLast$2.a0 = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.p();
                }
                nextToCopy$2 = next$2.p();
                next$2 = next$2.p();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.a0 = nextToCopy$2;
            }
            var $x_5 = newHead$2;
            break block$4;
          }
        }
      }
    }
  }
  var l$3 = itemsToAdd;
  block$6: {
    var $x_4;
    while (true) {
      if (l$3.c()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.u();
        var t$5 = l$3.p();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.c()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.u();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.p();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.u(), $m_sci_Nil$());
            var toProcess$3 = start$3.p();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.u(), $m_sci_Nil$());
              currentLast$3.a0 = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.p();
            }
            var next$3 = firstMiss$3.p();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.u();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.p();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.u(), $m_sci_Nil$());
                  currentLast$3.a0 = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.p();
                }
                nextToCopy$3 = next$3.p();
                next$3 = next$3.p();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.a0 = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.oz($x_4);
  $thiz.jc($thiz.fZ().dS(key, newItems));
  key.mP.eT($thiz, key.hF.p2(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.eU(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.eU();
  $thiz.oU(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.H().bs().bJ.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.H().bs().bJ.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.H().bs())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.je().r3();
  } else {
    var x0 = maybeNextOwner.H();
    $thiz.je().t0(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.hT = null;
  this.hT = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.s5 = (function(x) {
  if ((x !== null)) {
    x.b0();
    var r = x.aW();
    var x$3 = this.hT;
    if ((r === x$3)) {
      return true;
    }
  }
  return false;
});
$p.qR = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.b0();
    var r = x.aW();
    var x$3 = this.hT;
    if ((r === x$3)) {
      return item;
    }
  }
  return default$1.e(x);
});
$p.c8 = (function(x) {
  return this.s5(x);
});
$p.bf = (function(x, default$1) {
  return this.qR(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  ey: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
/** @constructor */
function $c_Lfirst_Main$$anon$1() {
}
$p = $c_Lfirst_Main$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lfirst_Main$$anon$1;
/** @constructor */
function $h_Lfirst_Main$$anon$1() {
}
$h_Lfirst_Main$$anon$1.prototype = $p;
$p.jJ = (function(x) {
  return true;
});
$p.j8 = (function(x, default$1) {
  console.error(("Failed to fetch release: " + x));
});
$p.c8 = (function(x) {
  return this.jJ(x);
});
$p.bf = (function(x, default$1) {
  return this.j8(x, default$1);
});
var $d_Lfirst_Main$$anon$1 = new $TypeData().i($c_Lfirst_Main$$anon$1, "first.Main$$anon$1", ({
  eK: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  eO: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  eR: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  by: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  bB: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  eV: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aM: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  f0: 1,
  bu: 1,
  bs: 1,
  bw: 1,
  bt: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  f2: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  f3: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f5)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  f6: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  f7: 1,
  bE: 1,
  bA: 1,
  t: 1,
  a: 1
}));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  fi: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  fm: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aw: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.id)) {
    $thiz.ie = (($thiz.gK === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.id = true;
  }
  return $thiz.ie;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.id) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.ie);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.gK;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.gK + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ie = null;
    this.gK = null;
    this.id = false;
    this.gK = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  g8() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fv: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.c = (function() {
  return (this === $m_s_None$());
});
$p.D = (function() {
  return (this.c() ? 0 : 1);
});
$p.bg = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().s(this.H(), elem));
});
$p.n = (function() {
  return (this.c() ? $m_sc_Iterator$().N : new $c_sc_Iterator$$anon$20(this.H()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fn = 0;
  this.nt = 0;
  this.ns = null;
  this.ns = outer;
  this.fn = 0;
  this.nt = outer.bj();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.r = (function() {
  return (this.fn < this.nt);
});
$p.j = (function() {
  var result = this.ns.bk(this.fn);
  this.fn = ((1 + this.fn) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fB: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.nu = null;
  this.nv = null;
  this.nu = _1;
  this.nv = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bj = (function() {
  return 2;
});
$p.bk = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.b0 = (function() {
  return this.nu;
});
$p.aW = (function() {
  return this.nv;
});
$p.x = (function() {
  return (((("(" + this.b0()) + ",") + this.aW()) + ")");
});
$p.bl = (function() {
  return "Tuple2";
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().s(this.b0(), x$1.b0()) && $m_sr_BoxesRunTime$().s(this.aW(), x$1.aW()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bJ: 1,
  fC: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e2 = _1;
  this.e3 = _2;
  this.e4 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.bj = (function() {
  return 3;
});
$p.bk = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return (((((("(" + this.e2) + ",") + this.e3) + ",") + this.e4) + ")");
});
$p.bl = (function() {
  return "Tuple3";
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().s(this.e2, x$1.e2) && ($m_sr_BoxesRunTime$().s(this.e3, x$1.e3) && $m_sr_BoxesRunTime$().s(this.e4, x$1.e4)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bK: 1,
  fD: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fo = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  fR: 1,
  fQ: 1,
  K: 1,
  a: 1,
  a1: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c5() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.f)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.r = (function() {
  return false;
});
$p.jP = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.D = (function() {
  return 0;
});
$p.gp = (function(from, until) {
  return this;
});
$p.j = (function() {
  this.jP();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fW: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.fp = false;
  this.ny = null;
  this.ny = a$1;
  this.fp = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.r = (function() {
  return (!this.fp);
});
$p.j = (function() {
  if (this.fp) {
    return $m_sc_Iterator$().N.j();
  } else {
    this.fp = true;
    return this.ny;
  }
});
$p.gp = (function(from, until) {
  return (((this.fp || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().N : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fX: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.nB = null;
  this.gN = false;
  this.nA = null;
  this.iq = null;
  this.nz = null;
  this.iq = outer;
  this.nz = f$1;
  this.nB = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.gN = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.r = (function() {
  while (true) {
    if (this.gN) {
      return true;
    } else if (this.iq.r()) {
      var a = this.iq.j();
      if (this.nB.h4(this.nz.e(a))) {
        this.nA = a;
        this.gN = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.j = (function() {
  if (this.r()) {
    this.gN = false;
    return this.nA;
  } else {
    return $m_sc_Iterator$().N.j();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fZ: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.gO = null;
  this.nC = null;
  this.gO = outer;
  this.nC = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.D = (function() {
  return this.gO.D();
});
$p.r = (function() {
  return this.gO.r();
});
$p.j = (function() {
  return this.nC.e(this.gO.j());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  g0: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bw instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bw;
      $thiz.bw = c.bw;
      $thiz.d4 = c.d4;
      if ((c.bX !== null)) {
        if (($thiz.bW === null)) {
          $thiz.bW = c.bW;
        }
        c.bW.fq = $thiz.bX;
        $thiz.bX = c.bX;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.bX === null)) {
      $thiz.bw = null;
      $thiz.bW = null;
      return false;
    } else {
      $thiz.bw = $thiz.bX.rQ();
      if (($thiz.bW === $thiz.bX)) {
        $thiz.bW = $thiz.bW.fq;
      }
      $thiz.bX = $thiz.bX.fq;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.d4) {
        return true;
      } else if ((($thiz.bw !== null) && $thiz.bw.r())) {
        $thiz.d4 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bw = null;
  this.bX = null;
  this.bW = null;
  this.d4 = false;
  this.bw = current;
  this.bX = null;
  this.bW = null;
  this.d4 = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.r = (function() {
  if (this.d4) {
    return true;
  } else if ((this.bw !== null)) {
    if (this.bw.r()) {
      this.d4 = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.j = (function() {
  if (this.r()) {
    this.d4 = false;
    return this.bw.j();
  } else {
    return $m_sc_Iterator$().N.j();
  }
});
$p.jg = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bX === null)) {
    this.bX = c;
    this.bW = c;
  } else {
    this.bW.fq = c;
    this.bW = c;
  }
  if ((this.bw === null)) {
    this.bw = $m_sc_Iterator$().N;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bQ: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cD > 0)) {
    if ($thiz.d5.r()) {
      $thiz.d5.j();
      $thiz.cD = (((-1) + $thiz.cD) | 0);
    } else {
      $thiz.cD = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bM < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bM - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.d5 = null;
  this.bM = 0;
  this.cD = 0;
  this.d5 = underlying;
  this.bM = limit;
  this.cD = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.D = (function() {
  var size = this.d5.D();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cD) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bM < 0)) {
      return dropSize;
    } else {
      var x = this.bM;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.r = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bM !== 0) && this.d5.r());
});
$p.j = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bM > 0)) {
    this.bM = (((-1) + this.bM) | 0);
    return this.d5.j();
  } else {
    return ((this.bM < 0) ? this.d5.j() : $m_sc_Iterator$().N.j());
  }
});
$p.gp = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bM < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cD + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().N;
  } else if ((sum < 0)) {
    this.cD = 2147483647;
    this.bM = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.d5, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.cD = sum;
    this.bM = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  g2: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.p();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bi(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.p1(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.u();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.c() ? 0 : 1);
    } else if (xs.c()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.p();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.c()) && (!b.c())) && $m_sr_BoxesRunTime$().s(a.u(), b.u()))) {
      var temp$a = a.p();
      var temp$b = b.p();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.c() && b.c());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.fr = null;
  this.fr = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.r = (function() {
  return (!this.fr.c());
});
$p.j = (function() {
  var r = this.fr.u();
  this.fr = this.fr.p();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  g6: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cF === null)) {
    $thiz.cF = new $ac_I(($m_sci_Node$().fz << 1));
    $thiz.ft = new ($d_sci_Node.r().C)($m_sci_Node$().fz);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.e7 = node;
  $thiz.bN = 0;
  $thiz.fs = node.jW();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.by = ((1 + $thiz.by) | 0);
  var cursorIndex = ($thiz.by << 1);
  var lengthIndex = ((1 + ($thiz.by << 1)) | 0);
  $thiz.ft.a[$thiz.by] = node;
  $thiz.cF.a[cursorIndex] = 0;
  $thiz.cF.a[lengthIndex] = node.jQ();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.by = (((-1) + $thiz.by) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.by >= 0)) {
    var cursorIndex = ($thiz.by << 1);
    var lengthIndex = ((1 + ($thiz.by << 1)) | 0);
    var nodeCursor = $thiz.cF.a[cursorIndex];
    if ((nodeCursor < $thiz.cF.a[lengthIndex])) {
      var ev$1 = $thiz.cF;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.ft.a[$thiz.by].jw(nodeCursor);
      if (nextNode.jC()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.ha()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bN = 0;
  $thiz.fs = 0;
  $thiz.by = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jC()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.ha()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bN = 0;
  this.fs = 0;
  this.e7 = null;
  this.by = 0;
  this.cF = null;
  this.ft = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.r = (function() {
  return ((this.bN < this.fs) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.gQ = node;
  $thiz.dd = (((-1) + node.jW()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bO = ((1 + $thiz.bO) | 0);
  $thiz.fv.a[$thiz.bO] = node;
  $thiz.fu.a[$thiz.bO] = (((-1) + node.jQ()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bO = (((-1) + $thiz.bO) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bO >= 0)) {
    var nodeCursor = $thiz.fu.a[$thiz.bO];
    $thiz.fu.a[$thiz.bO] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fv.a[$thiz.bO].jw(nodeCursor));
    } else {
      var currNode = $thiz.fv.a[$thiz.bO];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.ha()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dd = (-1);
  $thiz.bO = (-1);
  $thiz.fu = new $ac_I(((1 + $m_sci_Node$().fz) | 0));
  $thiz.fv = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().fz) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.dd = 0;
  this.gQ = null;
  this.bO = 0;
  this.fu = null;
  this.fv = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.r = (function() {
  return ((this.dd >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.eK !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.A(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.A(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.g2(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aq;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.A(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.A(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bx, dataIx, originalHash);
  bm.a7 = (bm.a7 | bitpos);
  bm.aq = dst;
  bm.bx = dstHashes;
  bm.aN = ((1 + bm.aN) | 0);
  bm.bn = ((bm.bn + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eK = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.co = $thiz.co.oW();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eK = null;
  this.co = null;
  this.co = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nq, $m_s_Array$EmptyArrays$().ic, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.fa = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().el(keyHash, shift);
    var bitpos = $m_sci_Node$().dH(mask);
    if (((mapNode.a7 & bitpos) !== 0)) {
      var index = $m_sci_Node$().cw(mapNode.a7, mask, bitpos);
      var key0 = mapNode.dL(index);
      var key0UnimprovedHash = mapNode.g7(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().s(key0, key))) {
        mapNode.aq.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.cU(index);
        var key0Hash = $m_sc_Hashing$().cj(key0UnimprovedHash);
        var subNodeNew = mapNode.jO(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.se(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.af & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cw(mapNode.af, mask, bitpos);
      var subNode = mapNode.cT(index$2);
      var beforeSize = subNode.aM();
      var beforeHash = subNode.dI();
      this.fa(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aN = ((mapNode.aN + ((subNode.aM() - beforeSize) | 0)) | 0);
      mapNode.bn = ((mapNode.bn + ((subNode.dI() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.f1(key);
    if ((index$3 < 0)) {
      mapNode.ag = mapNode.ag.dF(new $c_T2(key, value));
    } else {
      mapNode.ag = mapNode.ag.dR(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.k0 = (function() {
  if ((this.co.aN === 0)) {
    return $m_sci_HashMap$().ix;
  } else if ((this.eK !== null)) {
    return this.eK;
  } else {
    this.eK = new $c_sci_HashMap(this.co);
    return this.eK;
  }
});
$p.ow = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().Z(elem.b0());
  var im = $m_sc_Hashing$().cj(h);
  this.fa(this.co, elem.b0(), elem.aW(), h, im, 0);
  return this;
});
$p.ee = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().Z(key);
  this.fa(this.co, key, value, originalHash, $m_sc_Hashing$().cj(originalHash), 0);
  return this;
});
$p.j2 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.tD();
    while (iter.r()) {
      var next = iter.j();
      var originalHash = xs.te(next.pn());
      var hash = $m_sc_Hashing$().cj(originalHash);
      this.fa(this.co, next.ps(), next.q3(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rp();
    while (iter$2.r()) {
      var next$2 = iter$2.j();
      var originalHash$2 = xs.te(next$2.pn());
      var hash$2 = $m_sc_Hashing$().cj(originalHash$2);
      this.fa(this.co, next$2.ps(), next$2.q3(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eh(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.ee(key$2$2, value$2$2))));
  } else {
    var it = xs.n();
    while (it.r()) {
      this.ow(it.j());
    }
  }
  return this;
});
$p.b1 = (function(elems) {
  return this.j2(elems);
});
$p.b2 = (function(elem) {
  return this.ow(elem);
});
$p.b9 = (function() {
  return this.k0();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gh: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.eL = null;
  this.nK = null;
  this.r2();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.r2 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.nK = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jn()))));
  this.eL = deferred;
});
$p.sR = (function() {
  this.eL.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.nK;
});
$p.qE = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.eL.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jn())))));
  })));
  this.eL = deferred;
  return this;
});
$p.qv = (function(xs) {
  if ((xs.D() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.eL.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pM(xs.n(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jn()))))));
    this.eL = deferred;
  }
  return this;
});
$p.b1 = (function(elems) {
  return this.qv(elems);
});
$p.b2 = (function(elem) {
  return this.qE(elem);
});
$p.b9 = (function() {
  return this.sR();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gn: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.eM = null;
  this.eM = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.r = (function() {
  return (!this.eM.c());
});
$p.j = (function() {
  if (this.eM.c()) {
    return $m_sc_Iterator$().N.j();
  } else {
    var res = this.eM.J().u();
    this.eM = this.eM.J().aX();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gp: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.fw = null;
  $n_sci_List$ = this;
  this.fw = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.cS = (function(elems) {
  return $m_sci_Nil$().f5(elems);
});
$p.b3 = (function() {
  return new $c_scm_ListBuffer();
});
$p.aC = (function(source) {
  return $m_sci_Nil$().f5(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gs: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  $thiz.eN = outer;
  $thiz.dh = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dh = 0;
  this.eN = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.r = (function() {
  return (this.dh < 2);
});
$p.j = (function() {
  switch (this.dh) {
    case 0: {
      var result = new $c_T2(this.eN.ca, this.eN.df);
      break;
    }
    case 1: {
      var result = new $c_T2(this.eN.cb, this.eN.dg);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().N.j();
    }
  }
  this.dh = ((1 + this.dh) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dh = ((this.dh + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.di = outer;
  $thiz.dj = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dj = 0;
  this.di = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.r = (function() {
  return (this.dj < 3);
});
$p.j = (function() {
  switch (this.dj) {
    case 0: {
      var result = new $c_T2(this.di.bZ, this.di.cG);
      break;
    }
    case 1: {
      var result = new $c_T2(this.di.c0, this.di.cH);
      break;
    }
    case 2: {
      var result = new $c_T2(this.di.c1, this.di.cI);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().N.j();
    }
  }
  this.dj = ((1 + this.dj) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dj = ((this.dj + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cq = outer;
  $thiz.dk = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dk = 0;
  this.cq = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.r = (function() {
  return (this.dk < 4);
});
$p.j = (function() {
  switch (this.dk) {
    case 0: {
      var result = new $c_T2(this.cq.bz, this.cq.cc);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cq.bA, this.cq.cd);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cq.bB, this.cq.ce);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cq.bC, this.cq.cf);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().N.j();
    }
  }
  this.dk = ((1 + this.dk) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dk = ((this.dk + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cJ = null;
  this.fx = false;
  this.e9 = null;
  this.cJ = $m_sci_Map$EmptyMap$();
  this.fx = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b4 = (function(size) {
});
$p.pJ = (function() {
  return (this.fx ? this.e9.k0() : this.cJ);
});
$p.qC = (function(key, value) {
  if (this.fx) {
    this.e9.ee(key, value);
  } else if ((this.cJ.aM() < 4)) {
    this.cJ = this.cJ.dS(key, value);
  } else if (this.cJ.bg(key)) {
    this.cJ = this.cJ.dS(key, value);
  } else {
    this.fx = true;
    if ((this.e9 === null)) {
      this.e9 = new $c_sci_HashMapBuilder();
    }
    this.cJ.qZ(this.e9);
    this.e9.ee(key, value);
  }
  return this;
});
$p.or = (function(xs) {
  return (this.fx ? (this.e9.j2(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b1 = (function(elems) {
  return this.or(elems);
});
$p.b2 = (function(elem) {
  return this.qC(elem.b0(), elem.aW());
});
$p.b9 = (function() {
  return this.pJ();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gD: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pq($m_jl_System$SystemProperties$().jy("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.nQ = 0;
  this.nR = null;
  $n_sci_Vector$ = this;
  this.nQ = $ps_sci_Vector$__liftedTree1$1__I();
  this.nR = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cS = (function(elems) {
  return this.ju(elems);
});
$p.ju = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.D();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.ae().aL();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cn;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bS(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.n().bS(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().os(it).pK();
    }
  }
});
$p.b3 = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aC = (function(source) {
  return this.ju(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gQ: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.R >= 6)) {
    a = $thiz.aG;
    var i = (($thiz.L >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.A(i, dest, 0, length);
    }
    var newOffset = (($thiz.L % 33554432) | 0);
    $thiz.F = (($thiz.F - (($thiz.L - newOffset) | 0)) | 0);
    $thiz.L = newOffset;
    if (((($thiz.F >>> 25) | 0) === 0)) {
      $thiz.R = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.R >= 5)) {
    if ((a === null)) {
      a = $thiz.a4;
    }
    var i$2 = (31 & (($thiz.L >>> 20) | 0));
    if (($thiz.R === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.A(i$2, dest$1, 0, length$1);
      }
      $thiz.a4 = a;
      var newOffset$1 = (($thiz.L % 1048576) | 0);
      $thiz.F = (($thiz.F - (($thiz.L - newOffset$1) | 0)) | 0);
      $thiz.L = newOffset$1;
      if (((($thiz.F >>> 20) | 0) === 0)) {
        $thiz.R = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().ad(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.R >= 4)) {
    if ((a === null)) {
      a = $thiz.W;
    }
    var i$3 = (31 & (($thiz.L >>> 15) | 0));
    if (($thiz.R === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.A(i$3, dest$2, 0, length$2);
      }
      $thiz.W = a;
      var newOffset$2 = (($thiz.L % 32768) | 0);
      $thiz.F = (($thiz.F - (($thiz.L - newOffset$2) | 0)) | 0);
      $thiz.L = newOffset$2;
      if (((($thiz.F >>> 15) | 0) === 0)) {
        $thiz.R = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().ad(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.R >= 3)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$4 = (31 & (($thiz.L >>> 10) | 0));
    if (($thiz.R === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.A(i$4, dest$3, 0, length$3);
      }
      $thiz.O = a;
      var newOffset$3 = (($thiz.L % 1024) | 0);
      $thiz.F = (($thiz.F - (($thiz.L - newOffset$3) | 0)) | 0);
      $thiz.L = newOffset$3;
      if (((($thiz.F >>> 10) | 0) === 0)) {
        $thiz.R = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().ad(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.R >= 2)) {
    if ((a === null)) {
      a = $thiz.K;
    }
    var i$5 = (31 & (($thiz.L >>> 5) | 0));
    if (($thiz.R === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.A(i$5, dest$4, 0, length$4);
      }
      $thiz.K = a;
      var newOffset$4 = (($thiz.L % 32) | 0);
      $thiz.F = (($thiz.F - (($thiz.L - newOffset$4) | 0)) | 0);
      $thiz.L = newOffset$4;
      if (((($thiz.F >>> 5) | 0) === 0)) {
        $thiz.R = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().ad(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.R >= 1)) {
    if ((a === null)) {
      a = $thiz.a1;
    }
    var i$6 = (31 & $thiz.L);
    if (($thiz.R === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.A(i$6, dest$5, 0, length$5);
      }
      $thiz.a1 = a;
      $thiz.P = (($thiz.P - $thiz.L) | 0);
      $thiz.L = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().ad(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.gS = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.P === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.P) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a1;
    var destPos = $thiz.P;
    data.A(0, dest, destPos, copy1);
    $thiz.P = (($thiz.P + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a1;
      data.A(copy1, dest$1, 0, copy2);
      $thiz.P = (($thiz.P + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.P === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.F) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.F >>> 5) | 0));
      var dest = $thiz.K;
      slice.A(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.K;
        slice.A(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.F % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var t = slice.a[i];
            var lo = t.m;
            var hi = t.o;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$3 = slice.a[i];
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.F) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.F >>> 10) | 0));
      var dest$2 = $thiz.O;
      slice.A(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.O;
        slice.A(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.F % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = slice.a[i$1];
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var t$1 = slice.a[i$1];
            var lo$1 = t$1.m;
            var hi$1 = t$1.o;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$12 = slice.a[i$1];
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.F) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.F >>> 15) | 0));
      var dest$4 = $thiz.W;
      slice.A(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.W;
        slice.A(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.F % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = slice.a[i$2];
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$17 = slice.a[i$2];
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var t$2 = slice.a[i$2];
            var lo$2 = t$2.m;
            var hi$2 = t$2.o;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$21 = slice.a[i$2];
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.F) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.F >>> 20) | 0));
      var dest$6 = $thiz.a4;
      slice.A(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a4;
        slice.A(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.F % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = slice.a[i$3];
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$25 = slice.a[i$3];
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$26 = slice.a[i$3];
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var t$3 = slice.a[i$3];
            var lo$3 = t$3.m;
            var hi$3 = t$3.o;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$30 = slice.a[i$3];
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.F >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aG;
      slice.A(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cB();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cA(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.P === 32) || ($thiz.P === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().jq((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.F) | 0);
  var xor = (idx ^ $thiz.F);
  $thiz.F = idx;
  $thiz.P = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.F + n) | 0);
    var xor = (idx ^ $thiz.F);
    $thiz.F = idx;
    $thiz.P = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a1) + ", a2=") + $thiz.K) + ", a3=") + $thiz.O) + ", a4=") + $thiz.W) + ", a5=") + $thiz.a4) + ", a6=") + $thiz.aG) + ", depth=") + $thiz.R));
  } else if ((xor < 1024)) {
    if (($thiz.R <= 1)) {
      $thiz.K = new ($d_O.r().r().C)(32);
      $thiz.K.a[0] = $thiz.a1;
      $thiz.R = 2;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
  } else if ((xor < 32768)) {
    if (($thiz.R <= 2)) {
      $thiz.O = new ($d_O.r().r().r().C)(32);
      $thiz.O.a[0] = $thiz.K;
      $thiz.R = 3;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
  } else if ((xor < 1048576)) {
    if (($thiz.R <= 3)) {
      $thiz.W = new ($d_O.r().r().r().r().C)(32);
      $thiz.W.a[0] = $thiz.O;
      $thiz.R = 4;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.W.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
  } else if ((xor < 33554432)) {
    if (($thiz.R <= 4)) {
      $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a4.a[0] = $thiz.W;
      $thiz.R = 5;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.W = new ($d_O.r().r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.W.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.a4.a[(31 & ((idx >>> 20) | 0))] = $thiz.W;
  } else {
    if (($thiz.R <= 5)) {
      $thiz.aG = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aG.a[0] = $thiz.a4;
      $thiz.R = 6;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.W = new ($d_O.r().r().r().r().C)(32);
    $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.W.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.a4.a[(31 & ((idx >>> 20) | 0))] = $thiz.W;
    $thiz.aG.a[((idx >>> 25) | 0)] = $thiz.a4;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aG = null;
  this.a4 = null;
  this.W = null;
  this.O = null;
  this.K = null;
  this.a1 = null;
  this.P = 0;
  this.F = 0;
  this.L = 0;
  this.gS = false;
  this.R = 0;
  this.a1 = new $ac_O(32);
  this.P = 0;
  this.F = 0;
  this.L = 0;
  this.gS = false;
  this.R = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.rW = (function(v) {
  var x1 = v.cB();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.R = 1;
      var i = v.g.a.length;
      this.P = (31 & i);
      this.F = ((i - this.P) | 0);
      var a = v.g;
      this.a1 = ((a.a.length === 32) ? a : $m_ju_Arrays$().ad(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bq;
      var a$1 = v.k;
      this.a1 = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().ad(a$1, 0, 32));
      this.R = 2;
      this.L = ((32 - v.bP) | 0);
      var i$1 = ((v.l + this.L) | 0);
      this.P = (31 & i$1);
      this.F = ((i$1 - this.P) | 0);
      this.K = new ($d_O.r().r().C)(32);
      this.K.a[0] = v.g;
      var dest = this.K;
      var length = d2.a.length;
      d2.A(0, dest, 1, length);
      this.K.a[((1 + d2.a.length) | 0)] = this.a1;
      break;
    }
    case 5: {
      var d3 = v.aY;
      var s2 = v.aZ;
      var a$2 = v.k;
      this.a1 = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().ad(a$2, 0, 32));
      this.R = 3;
      this.L = ((1024 - v.bd) | 0);
      var i$2 = ((v.l + this.L) | 0);
      this.P = (31 & i$2);
      this.F = ((i$2 - this.P) | 0);
      this.O = new ($d_O.r().r().r().C)(32);
      this.O.a[0] = $m_sci_VectorStatics$().ct(v.g, v.bE);
      var dest$1 = this.O;
      var length$1 = d3.a.length;
      d3.A(0, dest$1, 1, length$1);
      this.K = $m_ju_Arrays$().a6(s2, 32);
      this.O.a[((1 + d3.a.length) | 0)] = this.K;
      this.K.a[s2.a.length] = this.a1;
      break;
    }
    case 7: {
      var d4 = v.aD;
      var s3 = v.aF;
      var s2$2 = v.aE;
      var a$3 = v.k;
      this.a1 = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().ad(a$3, 0, 32));
      this.R = 4;
      this.L = ((32768 - v.aS) | 0);
      var i$3 = ((v.l + this.L) | 0);
      this.P = (31 & i$3);
      this.F = ((i$3 - this.P) | 0);
      this.W = new ($d_O.r().r().r().r().C)(32);
      this.W.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.b6), v.b7);
      var dest$2 = this.W;
      var length$2 = d4.a.length;
      d4.A(0, dest$2, 1, length$2);
      this.O = $m_ju_Arrays$().a6(s3, 32);
      this.K = $m_ju_Arrays$().a6(s2$2, 32);
      this.W.a[((1 + d4.a.length) | 0)] = this.O;
      this.O.a[s3.a.length] = this.K;
      this.K.a[s2$2.a.length] = this.a1;
      break;
    }
    case 9: {
      var d5 = v.ah;
      var s4 = v.ak;
      var s3$2 = v.aj;
      var s2$3 = v.ai;
      var a$4 = v.k;
      this.a1 = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().ad(a$4, 0, 32));
      this.R = 5;
      this.L = ((1048576 - v.aw) | 0);
      var i$4 = ((v.l + this.L) | 0);
      this.P = (31 & i$4);
      this.F = ((i$4 - this.P) | 0);
      this.a4 = new ($d_O.r().r().r().r().r().C)(32);
      this.a4.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.aI), v.aJ), v.aK);
      var dest$3 = this.a4;
      var length$3 = d5.a.length;
      d5.A(0, dest$3, 1, length$3);
      this.W = $m_ju_Arrays$().a6(s4, 32);
      this.O = $m_ju_Arrays$().a6(s3$2, 32);
      this.K = $m_ju_Arrays$().a6(s2$3, 32);
      this.a4.a[((1 + d5.a.length) | 0)] = this.W;
      this.W.a[s4.a.length] = this.O;
      this.O.a[s3$2.a.length] = this.K;
      this.K.a[s2$3.a.length] = this.a1;
      break;
    }
    case 11: {
      var d6 = v.a8;
      var s5 = v.ac;
      var s4$2 = v.ab;
      var s3$3 = v.aa;
      var s2$4 = v.a9;
      var a$5 = v.k;
      this.a1 = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().ad(a$5, 0, 32));
      this.R = 6;
      this.L = ((33554432 - v.ar) | 0);
      var i$5 = ((v.l + this.L) | 0);
      this.P = (31 & i$5);
      this.F = ((i$5 - this.P) | 0);
      this.aG = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aG.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.ax), v.ay), v.az), v.aA);
      var dest$4 = this.aG;
      var length$4 = d6.a.length;
      d6.A(0, dest$4, 1, length$4);
      this.a4 = $m_ju_Arrays$().a6(s5, 32);
      this.W = $m_ju_Arrays$().a6(s4$2, 32);
      this.O = $m_ju_Arrays$().a6(s3$3, 32);
      this.K = $m_ju_Arrays$().a6(s2$4, 32);
      this.aG.a[((1 + d6.a.length) | 0)] = this.a4;
      this.a4.a[s5.a.length] = this.W;
      this.W.a[s4$2.a.length] = this.O;
      this.O.a[s3$3.a.length] = this.K;
      this.K.a[s2$4.a.length] = this.a1;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.P === 0) && (this.F > 0))) {
    this.P = 32;
    this.F = (((-32) + this.F) | 0);
  }
  return this;
});
$p.qF = (function(elem) {
  if ((this.P === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a1.a[this.P] = elem;
  this.P = ((1 + this.P) | 0);
  return this;
});
$p.os = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.P === 0) && (this.F === 0)) && (!this.gS)) ? this.rW(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.pK = (function() {
  if (this.gS) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.P + this.F) | 0);
  var realLen = ((len - this.L) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a1;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().a6(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().ad(this.K, 1, i2);
    var prefix1 = this.K.a[0];
    var a$1 = this.K.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().a6(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.L) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().ad(this.O, 1, i3);
    var a$2 = this.O.a[0];
    var prefix2 = $m_ju_Arrays$().ad(a$2, 1, a$2.a.length);
    var prefix1$2 = this.O.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a6(this.O.a[i3], i2$2);
    var a$3 = this.O.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a6(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().ad(this.W, 1, i4);
    var a$4 = this.W.a[0];
    var prefix3 = $m_ju_Arrays$().ad(a$4, 1, a$4.a.length);
    var a$5 = this.W.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().ad(a$5, 1, a$5.a.length);
    var prefix1$3 = this.W.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a6(this.W.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a6(this.W.a[i4].a[i3$2], i2$3);
    var a$6 = this.W.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().a6(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().ad(this.a4, 1, i5);
    var a$7 = this.a4.a[0];
    var prefix4 = $m_ju_Arrays$().ad(a$7, 1, a$7.a.length);
    var a$8 = this.a4.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().ad(a$8, 1, a$8.a.length);
    var a$9 = this.a4.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().ad(a$9, 1, a$9.a.length);
    var prefix1$4 = this.a4.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().a6(this.a4.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a6(this.a4.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a6(this.a4.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.a4.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().a6(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().ad(this.aG, 1, i6);
    var a$11 = this.aG.a[0];
    var prefix5 = $m_ju_Arrays$().ad(a$11, 1, a$11.a.length);
    var a$12 = this.aG.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().ad(a$12, 1, a$12.a.length);
    var a$13 = this.aG.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().ad(a$13, 1, a$13.a.length);
    var a$14 = this.aG.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().ad(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aG.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().a6(this.aG.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a6(this.aG.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a6(this.aG.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a6(this.aG.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aG.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().a6(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.x = (function() {
  return (((((((("VectorBuilder(len1=" + this.P) + ", lenRest=") + this.F) + ", offset=") + this.L) + ", depth=") + this.R) + ")");
});
$p.b9 = (function() {
  return this.pK();
});
$p.b1 = (function(elems) {
  return this.os(elems);
});
$p.b2 = (function(elem) {
  return this.qF(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gY: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.nT = null;
  $n_scm_ArrayBuffer$ = this;
  this.nT = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cS = (function(elems) {
  return this.ph(elems);
});
$p.ph = (function(coll) {
  var k = coll.D();
  if ((k >= 0)) {
    var array = this.pN(this.nT, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bS(array, 0, 2147483647) : coll.n().bS(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).ot(coll);
  }
});
$p.b3 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.sQ = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.pN = (function(array, curSize, targetSize) {
  var newLen = this.sQ(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.A(0, res, 0, curSize);
    return res;
  }
});
$p.aC = (function(source) {
  return this.ph(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  h3: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.dx = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b4 = (function(size) {
  this.dx.b4(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  h4: 1,
  b3: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.eJ = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  h9: 1,
  bR: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.dx = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b4 = (function(size) {
  this.dx.b4(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  hh: 1,
  b3: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.fB = outer;
  $thiz.dz = 0;
  $thiz.cN = null;
  $thiz.fC = outer.aT.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dz = 0;
  this.cN = null;
  this.fC = 0;
  this.fB = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.r = (function() {
  if ((this.cN !== null)) {
    return true;
  } else {
    while ((this.dz < this.fC)) {
      var n = this.fB.aT.a[this.dz];
      this.dz = ((1 + this.dz) | 0);
      if ((n !== null)) {
        this.cN = n;
        return true;
      }
    }
    return false;
  }
});
$p.j = (function() {
  if ((!this.r())) {
    return $m_sc_Iterator$().N.j();
  } else {
    var r = this.jp(this.cN);
    this.cN = this.cN.aU;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.fD = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.fD = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.b1 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b9 = (function() {
  return this.fD;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eJ = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  hk: 1,
  bR: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.cS = (function(elems) {
  return new $c_scm_ListBuffer().hg(elems);
});
$p.b3 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.aC = (function(source) {
  return new $c_scm_ListBuffer().hg(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  hn: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.iP = null;
  this.o3 = null;
  this.o2 = 0;
  this.iP = underlying;
  this.o3 = mutationCount;
  this.o2 = (mutationCount.S() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.r = (function() {
  $m_scm_MutationTracker$().oR(this.o2, (this.o3.S() | 0), "mutation occurred during iteration");
  return this.iP.r();
});
$p.j = (function() {
  return this.iP.j();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  hp: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.o6 = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.o6 = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.jo = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.jZ = (function(t) {
  $m_s_concurrent_ExecutionContext$().eS.e(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  hx: 1,
  b6: 1,
  b5: 1,
  aO: 1,
  ht: 1
}));
var $n_s_concurrent_ExecutionContext$parasitic$;
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$();
  }
  return $n_s_concurrent_ExecutionContext$parasitic$;
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aL();
    var x$3 = x.aL();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.a3.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.a3.Q())) + "]") : clazz.a3.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.fL = 0;
  this.oe = 0;
  this.of = null;
  this.of = x$2;
  this.fL = 0;
  this.oe = x$2.bj();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.r = (function() {
  return (this.fL < this.oe);
});
$p.j = (function() {
  var result = this.of.bk(this.fL);
  this.fL = ((1 + this.fL) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  il: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.cS = (function(elems) {
  return this.pi(elems);
});
$p.b3 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pi = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b9();
});
$p.aC = (function(source) {
  return this.pi(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  iz: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.cS = (function(elems) {
  return this.jv(elems);
});
$p.jv = (function(source) {
  return this.b3().b1(source).b9();
});
$p.b3 = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dC))));
});
$p.aC = (function(source) {
  return this.jv(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  iN: 1,
  ai: 1,
  a1: 1,
  K: 1,
  a: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.cs = null;
  this.cs = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.po = (function() {
  return true;
});
$p.pp = (function() {
  return false;
});
$p.H = (function() {
  var $x_1 = this.cs;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
});
$p.bh = (function(f) {
});
$p.jM = (function(f) {
  return this;
});
$p.jY = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bf(this.cs, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().bR(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.bT = (function(fa, fb) {
  return fa.e(this.cs);
});
$p.bl = (function() {
  return "Failure";
});
$p.bj = (function() {
  return 1;
});
$p.bk = (function(x$1) {
  return ((x$1 === 0) ? this.cs : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().j0(this);
});
$p.q = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.cs;
    var x$2 = x$1.cs;
    return ((x === null) ? (x$2 === null) : x.q(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  cH: 1,
  b8: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.cR = null;
  this.cR = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.po = (function() {
  return false;
});
$p.pp = (function() {
  return true;
});
$p.H = (function() {
  return this.cR;
});
$p.bh = (function(f) {
  f.e(this.cR);
});
$p.jM = (function(f) {
  try {
    return new $c_s_util_Success(f.e(this.cR));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().bR(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.jY = (function(pf) {
  return this;
});
$p.bT = (function(fa, fb) {
  try {
    return fb.e(this.cR);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().bR(e$2)) {
      return fa.e(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.bl = (function() {
  return "Success";
});
$p.bj = (function() {
  return 1;
});
$p.bk = (function(x$1) {
  return ((x$1 === 0) ? this.cR : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().j0(this);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().s(this.cR, x$1.cR)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cI: 1,
  b8: 1,
  J: 1,
  d: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fd = null;
    this.fc = null;
    this.fd = error;
    this.fc = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().ei(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().ei(cause)), null, true, true);
    this.jH(cause);
  }
  bG() {
    return new $c_s_Product$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
  }
  q(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fd;
      var x$2 = x$0.fd;
      if (((x === null) ? (x$2 === null) : x.q(x$2))) {
        var x$3 = this.fc;
        var x$4 = x$0.fc;
        return ((x$3 === null) ? (x$4 === null) : x$3.q(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bj() {
    return 2;
  }
  bl() {
    return "ErrorHandlingError";
  }
  bk(n) {
    if ((n === 0)) {
      return this.fd;
    }
    if ((n === 1)) {
      return this.fc;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("ErrorHandlingError: " + this.fd) + "; cause: ") + this.fc);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bb: 1,
  al: 1,
  t: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fe = null;
    this.fe = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().ei(error)), null, true, true);
  }
  bG() {
    return new $c_s_Product$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
  }
  q(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fe;
      var x$2 = x$0.fe;
      return ((x === null) ? (x$2 === null) : x.q(x$2));
    } else {
      return false;
    }
  }
  bj() {
    return 1;
  }
  bl() {
    return "ObserverError";
  }
  bk(n) {
    if ((n === 0)) {
      return this.fe;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ("ObserverError: " + this.fe);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bc: 1,
  al: 1,
  t: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fg = null;
    this.ff = null;
    this.fg = error;
    this.ff = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().ei(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().ei(cause)), null, true, true);
    this.jH(cause);
  }
  bG() {
    return new $c_s_Product$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
  }
  q(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fg;
      var x$2 = x$0.fg;
      if (((x === null) ? (x$2 === null) : x.q(x$2))) {
        var x$3 = this.ff;
        var x$4 = x$0.ff;
        return ((x$3 === null) ? (x$4 === null) : x$3.q(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bj() {
    return 2;
  }
  bl() {
    return "ObserverErrorHandlingError";
  }
  bk(n) {
    if ((n === 0)) {
      return this.fg;
    }
    if ((n === 1)) {
      return this.ff;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("ObserverErrorHandlingError: " + this.fg) + "; cause: ") + this.ff);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bd: 1,
  al: 1,
  t: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.ev = null;
    this.eu = 0;
    this.ev = trx;
    this.eu = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bG() {
    return new $c_s_Product$$anon$1(this);
  }
  w() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().f(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().Z(this.ev));
    acc = $m_sr_Statics$().f(acc, this.eu);
    return $m_sr_Statics$().G(acc, 2);
  }
  q(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eu === x$0.eu)) {
        var x = this.ev;
        var x$2 = x$0.ev;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bj() {
    return 2;
  }
  bl() {
    return "TransactionDepthExceeded";
  }
  bk(n) {
    if ((n === 0)) {
      return this.ev;
    }
    if ((n === 1)) {
      return this.eu;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("TransactionDepthExceeded: " + this.ev) + "; maxDepth: ") + this.eu);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  be: 1,
  al: 1,
  t: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.fi = null;
    this.fh = null;
    this.fi = message;
    this.fh = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().r5(message, cause), null, true, true);
    if ((!cause.c())) {
      this.jH(cause.H());
    }
  }
  bG() {
    return new $c_s_Product$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
  }
  q(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.fi === x$0.fi)) {
        var x = this.fh;
        var x$2 = x$0.fh;
        return ((x === null) ? (x$2 === null) : x.q(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bj() {
    return 2;
  }
  bl() {
    return "VarError";
  }
  bk(n) {
    if ((n === 0)) {
      return this.fi;
    }
    if ((n === 1)) {
      return this.fh;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  x() {
    return ((("VarError: " + this.fi) + "; cause: ") + this.fh);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  bf: 1,
  al: 1,
  t: 1,
  a: 1,
  d: 1,
  J: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.k5();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.kp = 1;
  $thiz.gw = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.gw = ((1 + $thiz.gw) | 0);
  $thiz.gv.kj.S();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.gv.kh.S(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().bR(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.jY(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.gv.ki.S();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.kX = null;
  this.kY = null;
  this.hx = null;
  this.hw = null;
  this.cZ = null;
  this.kX = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.hx = initial;
  this.hw = new $c_Lcom_raquo_airstream_state_VarSignal(this.hx, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.cZ = this.hw;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.dN = (function() {
  return this.kX;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.pP = (function(value, transaction) {
  this.hx = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.hw, value, transaction);
});
$p.dQ = (function() {
  return this.cZ;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  d9: 1,
  ae: 1,
  aG: 1,
  au: 1,
  a2: 1,
  db: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.hV;
  if ((x === (void 0))) {
    $thiz.hV = $m_sjs_js_defined$().oD($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.n7;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].tF() === propDomName)) {
          var $x_1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var $x_1 = (-1);
    }
    return ($x_1 >= 0);
  } else {
    return false;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.hU = null;
  this.n8 = null;
  this.n6 = null;
  this.n5 = null;
  this.n4 = null;
  this.hW = null;
  this.bm = null;
  this.n7 = null;
  this.hV = null;
  this.hW = tag;
  this.bm = ref;
  this.hU = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.n7 = (void 0);
  this.hV = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.eU = (function() {
  return this.hU;
});
$p.oU = (function(x$1) {
  this.hU = x$1;
});
$p.bF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.bs = (function() {
  return this.n8;
});
$p.jb = (function(x$0) {
  this.n8 = x$0;
});
$p.je = (function() {
  return this.n6;
});
$p.eV = (function() {
  return this.n5;
});
$p.fZ = (function() {
  return this.n4;
});
$p.jd = (function(x$1) {
  this.n5 = x$1;
});
$p.jc = (function(x$1) {
  this.n4 = x$1;
});
$p.oV = (function(x$0) {
  this.n6 = x$0;
});
$p.dT = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.dP = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.r8 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().s4(this.bm)) {
    var x1 = this.hW;
    if (false) {
      return x1.tr();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mJ;
  }
});
$p.s2 = (function(propDomName) {
  var x = this.r8();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().rT(x, propDomName, 0));
});
$p.py = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.s2(key.e0)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.e0)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.e0) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().oZ(this.bm)) + "` that already has an input controller for `") + key.e0) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.e0);
      }
    }
  }
});
$p.x = (function() {
  return (("ReactiveHtmlElement(" + ((this.bm !== null) ? this.bm.outerHTML : ("tag=" + this.hW.i0))) + ")");
});
$p.a2 = (function() {
  return this.bm;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  ez: 1,
  ap: 1,
  R: 1,
  av: 1,
  aK: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.hX = null;
  this.nc = null;
  this.nb = null;
  this.na = null;
  this.n9 = null;
  this.nd = null;
  this.d3 = null;
  this.nd = tag;
  this.d3 = ref;
  this.hX = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.eU = (function() {
  return this.hX;
});
$p.oU = (function(x$1) {
  this.hX = x$1;
});
$p.bF = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.bs = (function() {
  return this.nc;
});
$p.jb = (function(x$0) {
  this.nc = x$0;
});
$p.je = (function() {
  return this.nb;
});
$p.eV = (function() {
  return this.na;
});
$p.fZ = (function() {
  return this.n9;
});
$p.jd = (function(x$1) {
  this.na = x$1;
});
$p.jc = (function(x$1) {
  this.n9 = x$1;
});
$p.oV = (function(x$0) {
  this.nb = x$0;
});
$p.dT = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.dP = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.py = (function(key) {
});
$p.x = (function() {
  return (("ReactiveSvgElement(" + ((this.d3 !== null) ? this.d3.outerHTML : ("tag=" + this.nd.i1))) + ")");
});
$p.a2 = (function() {
  return this.d3;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  eA: 1,
  ap: 1,
  R: 1,
  av: 1,
  aK: 1,
  bq: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  eP: 1,
  aM: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bz: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1,
  aq: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  eU: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1,
  aq: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  eW: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1,
  aq: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.m === that.m) && ($thiz.o === that.o)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.m ^ $thiz.o);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().pD($thiz.m, $thiz.o);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bC: 1,
  aa: 1,
  a: 1,
  a3: 1,
  Y: 1,
  aq: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  f4: 1,
  bB: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().tc(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  fa: 1,
  a: 1,
  a3: 1,
  aL: 1,
  Y: 1,
  aq: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  fd: 1,
  aM: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.rJ = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.bl = (function() {
  return "None";
});
$p.bj = (function() {
  return 0;
});
$p.bk = (function(x$1) {
  return $m_sr_Statics$().ek(x$1);
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return 2433880;
});
$p.x = (function() {
  return "None";
});
$p.H = (function() {
  this.rJ();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fw: 1,
  bH: 1,
  b: 1,
  J: 1,
  d: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.eI = null;
  this.eI = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.H = (function() {
  return this.eI;
});
$p.bl = (function() {
  return "Some";
});
$p.bj = (function() {
  return 1;
});
$p.bk = (function(x$1) {
  return ((x$1 === 0) ? this.eI : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().j0(this);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().s(this.eI, x$1.eI)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bI: 1,
  bH: 1,
  b: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.c5 = (function() {
  return this.bu();
});
$p.g6 = (function(coll) {
  return this.bU().aC(coll);
});
$p.gd = (function() {
  return this.bU().b3();
});
$p.bh = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.eY = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bS = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f9 = (function() {
  return $m_sci_Nil$().f5(this);
});
$p.D = (function() {
  return (-1);
});
$p.g5 = (function(coll) {
  return this.g6(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bK = xs;
  $thiz.C = 0;
  $thiz.bv = $m_jl_reflect_Array$().c6($thiz.bK);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.D = (function() {
  return ((this.bv - this.C) | 0);
});
$p.r = (function() {
  return (this.C < this.bv);
});
$p.j = (function() {
  if ((this.C >= $m_jl_reflect_Array$().c6(this.bK))) {
    $m_sc_Iterator$().N.j();
  }
  var r = $m_sr_ScalaRunTime$().eg(this.bK, this.C);
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.dK = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.C + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bv;
    } else {
      var a = this.bv;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.C = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bL) ? $thiz.bL : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.ip = self;
  $thiz.cC = 0;
  $thiz.bL = self.v();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.ip = null;
  this.cC = 0;
  this.bL = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.D = (function() {
  return this.bL;
});
$p.r = (function() {
  return (this.bL > 0);
});
$p.j = (function() {
  if ((this.bL > 0)) {
    var r = this.ip.B(this.cC);
    this.cC = ((1 + this.cC) | 0);
    this.bL = (((-1) + this.bL) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().N.j();
  }
});
$p.dK = (function(n) {
  if ((n > 0)) {
    this.cC = ((this.cC + n) | 0);
    var b = ((this.bL - n) | 0);
    this.bL = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gp = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bL = ((b < 0) ? 0 : b);
  this.cC = ((this.cC + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bP: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.fD = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().N);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qD = (function(elem) {
  this.fD = this.fD.jg(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b2 = (function(elem) {
  return this.qD(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fY: 1,
  hj: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.c7(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.e(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.n();
  while (it.r()) {
    var next = it.j();
    f.eT(next.b0(), next.aW());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.n(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.b0();
      var v = x0$1$2$2.aW();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.gd();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.n();
  while (it.r()) {
    var next = it.j();
    if (seen.h4(f.e(next))) {
      builder.b2(next);
    }
  }
  return builder.b9();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dM().b3();
  b.b1($thiz);
  b.b1(suffix);
  return b.b9();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.it)) {
    $thiz.iu = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.it = true;
  }
  return $thiz.iu;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.it) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.iu);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iu = null;
  this.iv = null;
  this.it = false;
  $n_sci_ArraySeq$ = this;
  this.iv = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.js = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.pZ($m_s_Array$().pe(it, tag)));
});
$p.hc = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().pZ($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.pZ = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.jr = (function(it, evidence$5) {
  return this.js(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ge: 1,
  bT: 1,
  bM: 1,
  bL: 1,
  bN: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
  this.bN = 0;
  this.fs = 0;
  this.e7 = null;
  this.by = 0;
  this.cF = null;
  this.ft = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bo);
  while (this.r()) {
    var originalHash = this.e7.g7(this.bN);
    outer.fa(outer.co, this.e7.dL(this.bN), this.e7.cU(this.bN), originalHash, $m_sc_Hashing$().cj(originalHash), 0);
    this.bN = ((1 + this.bN) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.jP = (function() {
  $m_sc_Iterator$().N.j();
  throw new $c_jl_ClassCastException();
});
$p.j = (function() {
  this.jP();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gi: 1,
  c6: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dh = 0;
  this.eN = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gx: 1,
  gy: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dj = 0;
  this.di = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  gz: 1,
  gA: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dk = 0;
  this.cq = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  gB: 1,
  gC: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dd = 0;
  this.gQ = null;
  this.bO = 0;
  this.fu = null;
  this.fv = null;
  this.iD = 0;
  this.nN = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.iD = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pY(this.iD, $m_sr_Statics$().Z(this.nN), (-889275714));
});
$p.sj = (function() {
  if ((!this.r())) {
    $m_sc_Iterator$().N.j();
  }
  this.iD = this.gQ.g7(this.dd);
  this.nN = this.gQ.cU(this.dd);
  this.dd = (((-1) + this.dd) | 0);
  return this;
});
$p.j = (function() {
  return this.sj();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gE: 1,
  gf: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bN = 0;
  this.fs = 0;
  this.e7 = null;
  this.by = 0;
  this.cF = null;
  this.ft = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.si = (function() {
  if ((!this.r())) {
    $m_sc_Iterator$().N.j();
  }
  var payload = this.e7.pm(this.bN);
  this.bN = ((1 + this.bN) | 0);
  return payload;
});
$p.j = (function() {
  return this.si();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gF: 1,
  c6: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bD <= $thiz.as)) {
    $m_sc_Iterator$().N.j();
  }
  $thiz.dm = ((1 + $thiz.dm) | 0);
  var slice = $thiz.iF.cA($thiz.dm);
  while ((slice.a.length === 0)) {
    $thiz.dm = ((1 + $thiz.dm) | 0);
    slice = $thiz.iF.cA($thiz.dm);
  }
  $thiz.fy = $thiz.eb;
  var count = $thiz.nP;
  var idx = $thiz.dm;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dl = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.dl;
  switch (x1) {
    case 1: {
      $thiz.aO = slice;
      break;
    }
    case 2: {
      $thiz.aP = slice;
      break;
    }
    case 3: {
      $thiz.bp = slice;
      break;
    }
    case 4: {
      $thiz.cg = slice;
      break;
    }
    case 5: {
      $thiz.ea = slice;
      break;
    }
    case 6: {
      $thiz.iE = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.eb = (($thiz.fy + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.dl) | 0))))) | 0);
  if (($thiz.eb > $thiz.cL)) {
    $thiz.eb = $thiz.cL;
  }
  if (($thiz.dl > 1)) {
    $thiz.eO = (((-1) + (1 << Math.imul(5, $thiz.dl))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.as - $thiz.bD) | 0) + $thiz.cL) | 0);
  if ((pos === $thiz.eb)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dl > 1)) {
    var io = ((pos - $thiz.fy) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.eO ^ io));
    $thiz.eO = io;
  }
  $thiz.bD = (($thiz.bD - $thiz.as) | 0);
  var a = $thiz.aO.a.length;
  var b = $thiz.bD;
  $thiz.cK = ((a < b) ? a : b);
  $thiz.as = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aP = $thiz.bp.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bp = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bp.a[0];
    $thiz.aO = $thiz.aP.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bp = $thiz.cg.a[0];
    $thiz.aP = $thiz.bp.a[0];
    $thiz.aO = $thiz.aP.a[0];
  } else {
    $thiz.ea = $thiz.iE.a[((io >>> 25) | 0)];
    $thiz.cg = $thiz.ea.a[0];
    $thiz.bp = $thiz.cg.a[0];
    $thiz.aP = $thiz.bp.a[0];
    $thiz.aO = $thiz.aP.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aP = $thiz.bp.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bp = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bp.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bp = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bp.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.ea = $thiz.iE.a[((io >>> 25) | 0)];
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bp = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bp.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.iF = null;
  this.cL = 0;
  this.nP = 0;
  this.aO = null;
  this.aP = null;
  this.bp = null;
  this.cg = null;
  this.ea = null;
  this.iE = null;
  this.cK = 0;
  this.as = 0;
  this.eO = 0;
  this.bD = 0;
  this.dm = 0;
  this.dl = 0;
  this.fy = 0;
  this.eb = 0;
  this.iF = v;
  this.cL = totalLength;
  this.nP = sliceCount;
  this.aO = v.g;
  this.cK = this.aO.a.length;
  this.as = 0;
  this.eO = 0;
  this.bD = this.cL;
  this.dm = 0;
  this.dl = 1;
  this.fy = 0;
  this.eb = this.cK;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.D = (function() {
  return ((this.bD - this.as) | 0);
});
$p.r = (function() {
  return (this.bD > this.as);
});
$p.j = (function() {
  if ((this.as === this.cK)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aO.a[this.as];
  this.as = ((1 + this.as) | 0);
  return r;
});
$p.dK = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.as - this.bD) | 0) + this.cL) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cL;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cL)) {
      this.as = 0;
      this.bD = 0;
      this.cK = 0;
    } else {
      while ((newpos >= this.eb)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.fy) | 0);
      if ((this.dl > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.eO ^ io));
        this.eO = io;
      }
      this.cK = this.aO.a.length;
      this.as = (31 & io);
      this.bD = ((this.as + ((this.cL - newpos) | 0)) | 0);
      if ((this.cK > this.bD)) {
        this.cK = this.bD;
      }
    }
  }
  return this;
});
$p.bS = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().c6(xs);
  var srcLen = ((this.bD - this.as) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.as === this.cK)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.aO.a.length - this.as) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aO;
      var srcPos = this.as;
      var destPos = ((start + copied) | 0);
      src.A(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().g1(this.aO, this.as, xs, ((start + copied) | 0), count);
    }
    this.as = ((this.as + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gH: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  C: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.iJ = 0;
  $thiz.nV = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.iJ = 0;
  this.nV = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b4 = (function(size) {
  if ((this.iJ < size)) {
    this.sP(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.iL = null;
  this.nX = null;
  $n_scm_ArraySeq$ = this;
  this.iL = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.nX = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.rC = (function(it, evidence$2) {
  return this.jL($m_s_Array$().pe(it, evidence$2));
});
$p.hc = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.aL()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().jL(x$2$2))));
});
$p.jL = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.jr = (function(it, evidence$5) {
  return this.rC(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  h8: 1,
  bT: 1,
  bM: 1,
  bL: 1,
  bN: 1,
  a: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.dz = 0;
  this.cN = null;
  this.fC = 0;
  this.fB = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.jp = (function(nd) {
  return nd.eR;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  he: 1,
  b4: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dz = 0;
  this.cN = null;
  this.fC = 0;
  this.fB = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.jp = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hf: 1,
  b4: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dz = 0;
  this.cN = null;
  this.fC = 0;
  this.fB = null;
  this.iO = 0;
  this.o1 = null;
  this.o1 = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.iO = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.w = (function() {
  return this.iO;
});
$p.jp = (function(nd) {
  this.iO = this.o1.hf(nd.cO);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hg: 1,
  b4: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.fK = null;
  this.fK = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.q = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.w = (function() {
  return $m_sr_Statics$().Z(this.fK);
});
$p.x = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.fK);
});
$p.aL = (function() {
  return this.fK;
});
$p.bt = (function(len) {
  return this.fK.a3.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hJ: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
$p.eo = (function(s) {
  this.sx(s);
  this.pr("\n");
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.ig = null;
  this.ig = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.sk = (function() {
  if ((this.C >= this.ig.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.ig.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sk();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fH: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.ih = null;
  this.ih = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.sl = (function() {
  if ((this.C >= this.ih.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.ih.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return $bC(this.sl());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fI: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.ii = null;
  this.ii = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.sm = (function() {
  if ((this.C >= this.ii.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.ii.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sm();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fJ: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.ij = null;
  this.ij = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.sn = (function() {
  if ((this.C >= this.ij.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.ij.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sn();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fK: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.ik = null;
  this.ik = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.so = (function() {
  if ((this.C >= this.ik.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.ik.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.so();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fL: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.il = null;
  this.il = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.sp = (function() {
  if ((this.C >= this.il.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var t = this.il.a[this.C];
  var lo = t.m;
  var hi = t.o;
  this.C = ((1 + this.C) | 0);
  return new $c_RTLong(lo, hi);
});
$p.j = (function() {
  return this.sp();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fM: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.im = null;
  this.im = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.sq = (function() {
  if ((this.C >= this.im.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.im.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sq();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  fN: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.nx = null;
  this.nx = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.sr = (function() {
  if ((this.C >= this.nx.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  this.C = ((1 + this.C) | 0);
});
$p.j = (function() {
  this.sr();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fO: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bK = null;
  this.C = 0;
  this.bv = 0;
  this.io = null;
  this.io = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.ss = (function() {
  if ((this.C >= this.io.a.length)) {
    $m_sc_Iterator$().N.j();
  }
  var r = this.io.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.ss();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fP: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c5() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ab)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.iJ = 0;
  this.nV = 0;
  this.eQ = null;
  this.nW = false;
  this.iK = null;
  this.eQ = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.nW = (elementClass === $d_C.l());
  this.iK = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.ov = (function(elem) {
  var unboxedElem = (this.nW ? $uC(elem) : ((elem === null) ? this.eQ.a3.z : elem));
  this.iK.push(unboxedElem);
  return this;
});
$p.qw = (function(xs) {
  var it = xs.n();
  while (it.r()) {
    this.ov(it.j());
  }
  return this;
});
$p.sP = (function(size) {
});
$p.b9 = (function() {
  var elemRuntimeClass = ((this.eQ === $d_V.l()) ? $d_jl_Void.l() : (((this.eQ === $d_sr_Null$.l()) || (this.eQ === $d_sr_Nothing$.l())) ? $d_O.l() : this.eQ));
  return elemRuntimeClass.a3.r().w(this.iK);
});
$p.x = (function() {
  return "ArrayBuilder.generic";
});
$p.b1 = (function(elems) {
  return this.qw(elems);
});
$p.b2 = (function(elem) {
  return this.ov(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  h7: 1,
  h6: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.ip = null;
  this.cC = 0;
  this.bL = 0;
  this.o0 = null;
  this.nZ = 0;
  this.o0 = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.nZ = (mutationCount.S() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.r = (function() {
  $m_scm_MutationTracker$().oR(this.nZ, (this.o0.S() | 0), "mutation occurred during iteration");
  return (this.bL > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hb: 1,
  bP: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  eX() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  hz: 1,
  aw: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1,
  aC: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  eX() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  hA: 1,
  aw: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1,
  aC: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  eX() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  hB: 1,
  aw: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1,
  aC: 1
}));
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var _$this = $thiz;
  while (true) {
    var state = _$this.Y;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      _$this = state.f6(_$this);
    } else {
      return null;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, state, callbacks) {
  var _$this = $thiz;
  while (true) {
    if ((state instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, callbacks, state);
      return callbacks;
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
      if (_$this.g0(state, ((state !== $m_s_concurrent_impl_Promise$().fG) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(_$this, callbacks, state) : callbacks))) {
        return callbacks;
      } else {
        state = _$this.Y;
      }
    } else {
      var p = state.f6(_$this);
      var temp$state$2 = p.Y;
      _$this = p;
      state = temp$state$2;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, left, right) {
  while (true) {
    if ((left instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks(left, right);
    } else {
      var m = left;
      var temp$left = m.iU;
      var temp$right = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.iT, right);
      left = temp$left;
      right = temp$right;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
  while (true) {
    if ((callbacks instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = callbacks;
      m.iT.pT(resolved);
      callbacks = m.iU;
      continue;
    } else {
      callbacks.pT(resolved);
    }
    return (void 0);
  }
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gn(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().fG);
  return $thiz;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.Y = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.ry = (function(f, executor) {
  var state = this.Y;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.sb = (function(f, executor) {
  var state = this.Y;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.sB = (function(pf, executor) {
  var state = this.Y;
  return ((!(state instanceof $c_s_util_Success)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 7, pf, executor)) : this);
});
$p.su = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.Y, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.x = (function() {
  var _$this = this;
  while (true) {
    var state = _$this.Y;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      _$this = state.f6(_$this);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.td = (function(value) {
  var state = this.Y;
  return ((!(state instanceof $c_s_util_Try)) && this.er(state, $m_s_concurrent_impl_Promise$().gn(value)));
});
$p.er = (function(state, resolved) {
  var _$this = this;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
      if (_$this.g0(state, resolved)) {
        if ((state !== $m_s_concurrent_impl_Promise$().fG)) {
          $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(_$this, state, resolved);
        }
        return true;
      } else {
        state = _$this.Y;
      }
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state.f6(_$this);
      if ((p !== _$this)) {
        var temp$state$2 = p.Y;
        _$this = p;
        state = temp$state$2;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
});
$p.jf = (function(other) {
  if ((other !== this)) {
    var state = this.Y;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$2 = $m_s_Option$().qO($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$2.c() ? null : this$2.H());
      }
      if ((resolved !== null)) {
        this.er(state, resolved);
      } else {
        other.su(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.jK = (function(target, link) {
  var _$this = this;
  while (true) {
    if ((_$this !== target)) {
      var state = _$this.Y;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target.er(target.Y, state))) {
          throw new $c_jl_IllegalStateException("Cannot link completed promises together");
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link !== null) ? link : new $c_s_concurrent_impl_Promise$Link(target));
        var p = l.f6(_$this);
        if (((_$this !== p) && _$this.g0(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().fG)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.Y, state);
          }
        } else {
          target = p;
          link = l;
          continue;
        }
      } else {
        _$this = state.f6(_$this);
        continue;
      }
    }
    break;
  }
});
$p.tf = (function(resolved) {
  var _$this = this;
  while (true) {
    var state = _$this.Y;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (_$this.g0(state, resolved) ? state.Y : _$this);
      _$this = next;
      continue;
    } else {
      _$this.er(state, resolved);
    }
    break;
  }
});
$p.e = (function(v1) {
  this.er(this.Y, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b7)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  b7: 1,
  aP: 1,
  a: 1,
  cy: 1,
  cx: 1,
  cv: 1,
  e: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.x = (function() {
  return this.a5;
});
$p.q = (function(that) {
  return (this === that);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.U = null;
    this.U = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  g8() {
    return $dp_toString__T(this.U);
  }
  bl() {
    return "JavaScriptException";
  }
  bj() {
    return 1;
  }
  bk(x$1) {
    return ((x$1 === 0) ? this.U : $m_sr_Statics$().ek(x$1));
  }
  bG() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
  }
  q(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().s(this.U, x$1.U)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cF: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1,
  J: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.jN() === (void 0)))) {
    $thiz.iZ($m_Lcom_raquo_airstream_core_Signal$().pw());
  }
  $thiz.pv(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jN();
  if ((x === (void 0))) {
    $thiz.iZ($m_Lcom_raquo_airstream_core_Signal$().pw());
    var nextValue = $thiz.ji();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Failure(nextError), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  var isError = nextValue.po();
  var elem = false;
  elem = false;
  $thiz.ck(false);
  var this$ = $thiz.cv();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.en(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cx();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gj(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.ck(true);
  var x = $thiz.dO();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c9(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.ck(false);
  var this$ = $thiz.cv();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.jT(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cx();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.he(nextValue, transaction);
  }
  $thiz.ck(true);
  var x = $thiz.dO();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.ck(false);
  var this$ = $thiz.cv();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.gg(nextError);
  }
  var this$$1 = $thiz.cx();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gf(nextError, transaction);
  }
  $thiz.ck(true);
  var x = $thiz.dO();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].S();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.hI = null;
  this.hJ = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  dJ: 1,
  ea: 1,
  a9: 1,
  dL: 1,
  e4: 1,
  dK: 1,
  dM: 1,
  dN: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.nk && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.nk = false;
  this.fk = null;
  this.nk = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fk = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.sx = (function(s) {
  this.pr(((s === null) ? "null" : s));
});
$p.pr = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fk = (("" + this.fk) + rest);
      rest = "";
    } else {
      var $x_1 = this.fk;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fk = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  eZ: 1,
  eN: 1,
  eM: 1,
  bu: 1,
  bs: 1,
  bw: 1,
  bt: 1,
  bv: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.c())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.p();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bi(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.gd();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.n();
    var different = false;
    while (it.r()) {
      var next = it.j();
      if (seen.h4(f.e(next))) {
        builder.b2(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b9() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aL = (function() {
  return $d_Z.l();
});
$p.bt = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aL = (function() {
  return $d_B.l();
});
$p.bt = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aL = (function() {
  return $d_C.l();
});
$p.bt = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aL = (function() {
  return $d_D.l();
});
$p.bt = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aL = (function() {
  return $d_F.l();
});
$p.bt = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aL = (function() {
  return $d_I.l();
});
$p.bt = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aL = (function() {
  return $d_J.l();
});
$p.bt = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.cQ = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.x = (function() {
  return this.cQ;
});
$p.q = (function(that) {
  return (this === that);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aL = (function() {
  return $d_S.l();
});
$p.bt = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aL = (function() {
  return $d_V.l();
});
$p.bt = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.bU = (function() {
  return $m_sc_View$();
});
$p.x = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bu = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aM() === that.aM())) {
      try {
        return $thiz.t4(that);
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aW)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aW)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.cQ = null;
  this.cQ = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aL = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hK: 1,
  aA: 1,
  az: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.a5 = null;
  this.a5 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hM: 1,
  hL: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.a5 = null;
  this.a5 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  hO: 1,
  hN: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.a5 = null;
  this.a5 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  hQ: 1,
  hP: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.a5 = null;
  this.a5 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  hS: 1,
  hR: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.a5 = null;
  this.a5 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  hU: 1,
  hT: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.a5 = null;
  this.a5 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hW: 1,
  hV: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.a5 = null;
  this.a5 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  hY: 1,
  hX: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.cQ = null;
  this.cQ = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aL = (function() {
  return $d_sr_Nothing$.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hZ: 1,
  aA: 1,
  az: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.cQ = null;
  this.cQ = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aL = (function() {
  return $d_sr_Null$.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  i0: 1,
  aA: 1,
  az: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.cQ = null;
  this.cQ = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aL = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  i1: 1,
  aA: 1,
  az: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.a5 = null;
  this.a5 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  i3: 1,
  i2: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.a5 = null;
  this.a5 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  i5: 1,
  i4: 1,
  a4: 1,
  U: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.jU(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.jU(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.kn = null;
  this.km = false;
  this.ko = null;
  this.kk = null;
  this.kl = null;
  this.kq = false;
  this.kp = 0;
  this.gw = 0;
  this.gv = null;
  this.kn = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.gv = makeConfig.qM(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.gw)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.dN = (function() {
  return this.kn;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.km;
});
$p.dO = (function() {
  return this.ko;
});
$p.ck = (function(x$1) {
  this.km = x$1;
});
$p.f4 = (function(x$1) {
  this.ko = x$1;
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.ge = (function(observer) {
});
$p.cv = (function() {
  return this.kk;
});
$p.cx = (function() {
  return this.kl;
});
$p.gr = (function() {
  return this.kq;
});
$p.et = (function(x$1) {
  this.kq = x$1;
});
$p.fX = (function(x$0) {
  this.kk = x$0;
});
$p.fY = (function(x$0) {
  this.kl = x$0;
});
$p.eq = (function() {
  return this.kp;
});
$p.gk = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.gi = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  cZ: 1,
  ae: 1,
  a2: 1,
  am: 1,
  an: 1,
  aF: 1,
  aD: 1,
  ao: 1,
  aH: 1,
  cV: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.l3 = null;
  this.l2 = false;
  this.l4 = null;
  this.hy = 0;
  this.l0 = null;
  this.l1 = null;
  this.l7 = false;
  this.hz = null;
  this.l5 = null;
  this.l6 = 0;
  this.l5 = parentDisplayName;
  this.l3 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hy = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hz = (void 0);
  this.l6 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.dN = (function() {
  return this.l3;
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.l2;
});
$p.dO = (function() {
  return this.l4;
});
$p.ck = (function(x$1) {
  this.l2 = x$1;
});
$p.f4 = (function(x$1) {
  this.l4 = x$1;
});
$p.gi = (function() {
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.iY = (function() {
  return this.hy;
});
$p.iZ = (function(x$1) {
  this.hy = x$1;
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.ge = (function(observer) {
  observer.en($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cv = (function() {
  return this.l0;
});
$p.cx = (function() {
  return this.l1;
});
$p.gr = (function() {
  return this.l7;
});
$p.et = (function(x$1) {
  this.l7 = x$1;
});
$p.fX = (function(x$0) {
  this.l0 = x$0;
});
$p.fY = (function(x$0) {
  this.l1 = x$0;
});
$p.jN = (function() {
  return this.hz;
});
$p.pv = (function(x$1) {
  this.hz = x$1;
});
$p.k5 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eq = (function() {
  return this.l6;
});
$p.ji = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gk = (function() {
});
$p.dJ = (function() {
  return (this.l5.S() + ".signal");
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  de: 1,
  ae: 1,
  a2: 1,
  am: 1,
  an: 1,
  aG: 1,
  bg: 1,
  ao: 1,
  bh: 1,
  da: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.h7($thiz)) {
        return $thiz.f7(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.nH = null;
  this.nH = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.n = (function() {
  return this.nH.S();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  ga: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  ab: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.gP = null;
  this.nI = null;
  this.gP = underlying;
  this.nI = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.n = (function() {
  return new $c_sc_Iterator$$anon$8(this.gP.n(), this.nI);
});
$p.D = (function() {
  return ((this.gP.D() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.gP.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gb: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  ab: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.hq = ($thiz.cW !== null);
  $thiz.gx = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.cW);
  if ($thiz.hq) {
    var newParentLastUpdateId = $thiz.cW.iY();
    if ((newParentLastUpdateId !== $thiz.gx)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.ji(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.gx = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.hq) {
    $thiz.gx = $thiz.cW.iY();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.cW, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.cW, $thiz);
}
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.q = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bu = (function() {
  return "Set";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.t4 = (function(that) {
  return this.eY(that);
});
$p.e = (function(v1) {
  return this.bg(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aM() === o.aM())) {
      try {
        return $thiz.eY(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().s(x2.c7(kv$2$2.b0(), $m_sc_Map$().nF), kv$2$2.aW())))(o)));
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a5)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  var wasInterrupted = false;
  if ((wasInterrupted || $m_s_util_control_NonFatal$().bR(t))) {
    var completed = $thiz.er($thiz.Y, $m_s_concurrent_impl_Promise$().gn(new $c_s_util_Failure(t)));
    if (((($thiz.fJ === 5) || ($thiz.fJ === 6)) || (!completed))) {
      e.jZ(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
  }
}
function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
  $thiz.gV = _fun;
  $thiz.fI = _ec;
  $thiz.fH = _arg;
  $thiz.fJ = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.Y = null;
  this.gV = null;
  this.fI = null;
  this.fH = null;
  this.fJ = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.pT = (function(resolved) {
  this.fH = resolved;
  var e = this.fI;
  try {
    e.jo(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.gV = null;
    this.fH = null;
    this.fI = null;
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.ep = (function() {
  var v = this.fH;
  var fun = this.gV;
  var ec = this.fI;
  this.gV = null;
  this.fH = null;
  this.fI = null;
  try {
    switch (this.fJ) {
      case 0: {
        var resolvedResult = null;
        break;
      }
      case 1: {
        var resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success(fun.e(v.H())) : v);
        break;
      }
      case 2: {
        if ((v instanceof $c_s_util_Success)) {
          var f = fun.e(v.H());
          if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            f.jK(this, null);
          } else {
            this.jf(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = v;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().gn(fun.e(v));
        break;
      }
      case 4: {
        var f$2 = fun.e(v);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.jK(this, null);
        } else {
          this.jf(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        v.bh(fun);
        var resolvedResult = null;
        break;
      }
      case 6: {
        fun.e(v);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((v instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().gn(v.jY(fun)) : v);
        break;
      }
      case 8: {
        if ((v instanceof $c_s_util_Failure)) {
          var f$3 = fun.bf(v.cs, $m_s_concurrent_Future$().oa);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().iS) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.jK(this, null) : this.jf(f$3)), null) : v);
        } else {
          var resolvedResult = v;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((v instanceof $c_s_util_Failure) || (!(!fun.e(v.H())))) ? v : $m_s_concurrent_Future$().o9);
        break;
      }
      case 10: {
        var resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success(fun.bf(v.H(), $m_s_concurrent_Future$().o7)) : v);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.fJ)));
      }
    }
    if ((resolvedResult !== null)) {
      this.er(this.Y, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), ec);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  cB: 1,
  b7: 1,
  aP: 1,
  a: 1,
  cy: 1,
  cx: 1,
  cv: 1,
  e: 1,
  ay: 1,
  aN: 1,
  hs: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kv = null;
  this.ku = false;
  this.kw = null;
  this.kr = null;
  this.kt = null;
  this.ky = false;
  this.hn = null;
  this.ks = null;
  this.kx = 0;
  this.hn = parent;
  this.ks = fn;
  this.kv = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kx = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.dN = (function() {
  return this.kv;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.ku;
});
$p.dO = (function() {
  return this.kw;
});
$p.ck = (function(x$1) {
  this.ku = x$1;
});
$p.f4 = (function(x$1) {
  this.kw = x$1;
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.ge = (function(observer) {
});
$p.cv = (function() {
  return this.kr;
});
$p.cx = (function() {
  return this.kt;
});
$p.gr = (function() {
  return this.ky;
});
$p.et = (function(x$1) {
  this.ky = x$1;
});
$p.fX = (function(x$0) {
  this.kr = x$0;
});
$p.fY = (function(x$0) {
  this.kt = x$0;
});
$p.gk = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.hn);
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gi = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gj = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eq = (function() {
  return this.kx;
});
$p.he = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.ks.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().bR(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
    }
  })));
});
$p.gf = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.jU = (function() {
  return this.hn;
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  d0: 1,
  ae: 1,
  a2: 1,
  am: 1,
  an: 1,
  aF: 1,
  aD: 1,
  ao: 1,
  aH: 1,
  at: 1,
  ba: 1,
  b9: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.kC = null;
  this.kB = false;
  this.kD = null;
  this.ho = 0;
  this.kz = null;
  this.kA = null;
  this.kF = false;
  this.hp = null;
  this.hq = false;
  this.gx = 0;
  this.cW = null;
  this.hr = null;
  this.hs = null;
  this.kE = 0;
  this.cW = parent;
  this.hr = project;
  this.hs = recover;
  this.kC = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ho = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hp = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kE = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.dN = (function() {
  return this.kC;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kB;
});
$p.dO = (function() {
  return this.kD;
});
$p.ck = (function(x$1) {
  this.kB = x$1;
});
$p.f4 = (function(x$1) {
  this.kD = x$1;
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.iY = (function() {
  return this.ho;
});
$p.iZ = (function(x$1) {
  this.ho = x$1;
});
$p.ge = (function(observer) {
  observer.en($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cv = (function() {
  return this.kz;
});
$p.cx = (function() {
  return this.kA;
});
$p.gr = (function() {
  return this.kF;
});
$p.et = (function(x$1) {
  this.kF = x$1;
});
$p.fX = (function(x$0) {
  this.kz = x$0;
});
$p.fY = (function(x$0) {
  this.kA = x$0;
});
$p.jN = (function() {
  return this.hp;
});
$p.pv = (function(x$1) {
  this.hp = x$1;
});
$p.k5 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.he = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gf = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gk = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gi = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eq = (function() {
  return this.kE;
});
$p.gj = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hs;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.bf(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().bR(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
        }
      }
      $x_1.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jM(this.hr), transaction);
  })));
});
$p.ji = (function() {
  var originalValue = this.cW.k5().jM(this.hr);
  return originalValue.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hs;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.H();
      try {
        var $x_1 = new $c_s_util_Success(x0.bf(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().bR(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
        }
      }
      return $x_1.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.H())));
          return (this$7.c() ? originalValue : this$7.H());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  d1: 1,
  ae: 1,
  a2: 1,
  am: 1,
  an: 1,
  aG: 1,
  bg: 1,
  ao: 1,
  bh: 1,
  at: 1,
  cJ: 1,
  cK: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapStream(parent, project, recover) {
  this.kJ = null;
  this.kI = false;
  this.kK = null;
  this.kG = null;
  this.kH = null;
  this.kO = false;
  this.ht = null;
  this.kL = null;
  this.kM = null;
  this.kN = 0;
  this.ht = parent;
  this.kL = project;
  this.kM = recover;
  this.kJ = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kN = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.dN = (function() {
  return this.kJ;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kI;
});
$p.dO = (function() {
  return this.kK;
});
$p.ck = (function(x$1) {
  this.kI = x$1;
});
$p.f4 = (function(x$1) {
  this.kK = x$1;
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.ge = (function(observer) {
});
$p.cv = (function() {
  return this.kG;
});
$p.cx = (function() {
  return this.kH;
});
$p.gr = (function() {
  return this.kO;
});
$p.et = (function(x$1) {
  this.kO = x$1;
});
$p.fX = (function(x$0) {
  this.kG = x$0;
});
$p.fY = (function(x$0) {
  this.kH = x$0;
});
$p.gk = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.ht);
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gi = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gj = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jU = (function() {
  return this.ht;
});
$p.eq = (function() {
  return this.kN;
});
$p.he = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kL.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().bR(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.gf(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, _$2, transaction);
  })));
});
$p.gf = (function(nextError, transaction) {
  var this$1 = this.kM;
  if (this$1.c()) {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
  } else {
    var x0 = this$1.H();
    try {
      var $x_1 = new $c_s_util_Success(x0.bf(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => null))));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($m_s_util_control_NonFatal$().bR(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
    }
    $x_1.bT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((tryError) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError), transaction);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
      if ((nextValue === null)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
      } else if ((!nextValue.c())) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.H(), transaction);
      }
    })));
  }
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapStream, "com.raquo.airstream.misc.MapStream", ({
  d2: 1,
  ae: 1,
  a2: 1,
  am: 1,
  an: 1,
  aF: 1,
  aD: 1,
  ao: 1,
  aH: 1,
  at: 1,
  ba: 1,
  b9: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.h7 = (function(that) {
  return true;
});
$p.q = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pO(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jI = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bi = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.f7 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bf = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.c8 = (function(x) {
  return this.jI((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.bu = (function() {
  return "SeqView";
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bi = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.as)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.lW = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.mH = new $c_Lcom_raquo_laminar_api_Laminar$$anon$2();
  $thiz.q5 = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
}
function $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, makeModifier) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    makeModifier.e(element).bF(element);
  })), $thiz.lC);
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.q = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().sc(this);
});
$p.bu = (function() {
  return "Map";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.g6 = (function(coll) {
  return this.pu().aC(coll);
});
$p.bf = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eh = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.c8 = (function(key) {
  return this.bg(key);
});
$p.dE = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.e5 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.e5 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.B = (function(idx) {
  return this.e5.B(idx);
});
$p.v = (function() {
  return this.e5.v();
});
$p.n = (function() {
  return this.e5.n();
});
$p.D = (function() {
  return this.e5.D();
});
$p.c = (function() {
  return this.e5.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bS: 1,
  aS: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  ab: 1,
  a: 1,
  aV: 1,
  l: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mf = null;
  this.mg = false;
  this.m7 = null;
  this.m8 = false;
  this.lX = null;
  this.lY = false;
  this.lZ = null;
  this.m0 = false;
  this.m1 = null;
  this.m2 = false;
  this.m3 = null;
  this.m4 = false;
  this.m5 = null;
  this.m6 = false;
  this.lH = null;
  this.lI = false;
  this.lS = null;
  this.lT = false;
  this.mb = null;
  this.mc = false;
  this.mt = null;
  this.mu = false;
  this.lN = null;
  this.lO = false;
  this.mn = null;
  this.mo = false;
  this.mp = null;
  this.mq = false;
  this.lU = null;
  this.lV = false;
  this.mr = null;
  this.ms = false;
  this.m9 = null;
  this.ma = false;
  this.mv = null;
  this.mw = false;
  this.lP = null;
  this.lQ = false;
  this.mD = null;
  this.mE = false;
  this.lJ = null;
  this.lK = false;
  this.md = null;
  this.me = false;
  this.mz = null;
  this.mA = false;
  this.mj = null;
  this.mk = false;
  this.mh = null;
  this.mi = false;
  this.ml = null;
  this.mm = false;
  this.mF = null;
  this.mG = false;
  this.lR = null;
  this.y = null;
  this.gB = null;
  this.lC = null;
  this.lF = null;
  this.lG = false;
  this.lD = null;
  this.lE = false;
  this.lL = null;
  this.lM = false;
  this.mx = null;
  this.my = false;
  this.lW = null;
  this.mH = null;
  this.mB = null;
  this.mC = false;
  this.q5 = null;
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_MountHooks__$init$__V(this);
  $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $p;
$p.jF = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.mg = true;
  }
  return this.mf;
});
$p.rR = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.m8 = true;
  }
  return this.m7;
});
$p.rz = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.lY = true;
  }
  return this.lX;
});
$p.rP = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.m0 = true;
  }
  return this.lZ;
});
$p.jB = (function() {
  if ((!this.m2)) {
    this.m1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.m2 = true;
  }
  return this.m1;
});
$p.ej = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.m4 = true;
  }
  return this.m3;
});
$p.f0 = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.m6 = true;
  }
  return this.m5;
});
$p.fM = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.lI = true;
  }
  return this.lH;
});
$p.h8 = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.lT = true;
  }
  return this.lS;
});
$p.ci = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.mc = true;
  }
  return this.mb;
});
$p.hh = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mu = true;
  }
  return this.mt;
});
$p.r0 = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.lO = true;
  }
  return this.lN;
});
$p.b8 = (function() {
  if ((!this.mo)) {
    this.mn = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mo = true;
  }
  return this.mn;
});
$p.jX = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.mq = true;
  }
  return this.mp;
});
$p.X = (function() {
  if ((!this.lV)) {
    this.lU = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.lV = true;
  }
  return this.lU;
});
$p.k1 = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.ms = true;
  }
  return this.mr;
});
$p.g9 = (function() {
  if ((!this.ma)) {
    this.m9 = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.ma = true;
  }
  return this.m9;
});
$p.k2 = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mw = true;
  }
  return this.mv;
});
$p.r1 = (function() {
  if ((!this.lQ)) {
    this.lP = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mI);
    this.lQ = true;
  }
  return this.lP;
});
$p.q2 = (function() {
  if ((!this.mE)) {
    this.mD = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mE = true;
  }
  return this.mD;
});
$p.j3 = (function() {
  if ((!this.lK)) {
    this.lJ = new $c_Lcom_raquo_laminar_keys_HtmlProp("alt", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.lK = true;
  }
  return this.lJ;
});
$p.jE = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_keys_HtmlProp("id", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.me = true;
  }
  return this.md;
});
$p.k3 = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mA = true;
  }
  return this.mz;
});
$p.em = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mk = true;
  }
  return this.mj;
});
$p.st = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.mi = true;
  }
  return this.mh;
});
$p.jS = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mm = true;
  }
  return this.ml;
});
$p.tm = (function() {
  if ((!this.mG)) {
    this.mF = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("width");
    this.mG = true;
  }
  return this.mF;
});
$p.qu = (function() {
  if ((!this.lG)) {
    this.lF = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lG = true;
  }
  return this.lF;
});
$p.iX = (function() {
  if ((!this.lE)) {
    this.lD = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(this);
    this.lE = true;
  }
  return this.lD;
});
$p.qT = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Lcom_raquo_laminar_api_Laminar$aria$(this);
    this.lM = true;
  }
  return this.lL;
});
$p.ba = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.my = true;
  }
  return this.mx;
});
$p.ti = (function() {
  if ((!this.mC)) {
    this.mB = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mC = true;
  }
  return this.mB;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dx: 1,
  dO: 1,
  dB: 1,
  dH: 1,
  aI: 1,
  dI: 1,
  dD: 1,
  dv: 1,
  dl: 1,
  du: 1,
  bk: 1,
  bn: 1,
  bj: 1,
  dn: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a6)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.bu = (function() {
  return "IndexedSeqView";
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.e5 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bu = (function() {
  return "IndexedSeqView";
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fT: 1,
  bS: 1,
  aS: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  ab: 1,
  a: 1,
  aV: 1,
  l: 1,
  bO: 1,
  q: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.iI = null;
  this.nU = null;
  this.iI = underlying;
  this.nU = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.B = (function(n) {
  return this.iI.B(n);
});
$p.v = (function() {
  return this.iI.aB;
});
$p.c5 = (function() {
  return "ArrayBufferView";
});
$p.n = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.nU);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  h5: 1,
  fE: 1,
  aS: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  ab: 1,
  a: 1,
  aV: 1,
  l: 1,
  bO: 1,
  q: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.pu = (function() {
  return $m_sci_Map$();
});
$p.bU = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.v() === that.v()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.v();
      var equal = (length === o.v());
      if (equal) {
        var index = 0;
        var a = $thiz.h6();
        var b = o.h6();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().s($thiz.B(index), o.B(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.n().dK(index);
          var thatIt = o.n().dK(index);
          while ((equal && thisIt.r())) {
            equal = $m_sr_BoxesRunTime$().s(thisIt.j(), thatIt.j());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.z)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.z)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gK)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gM)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gN)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.aM = (function() {
  return 0;
});
$p.D = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.j6 = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.bg = (function(key) {
  return false;
});
$p.c7 = (function(key, default$1) {
  return default$1.S();
});
$p.n = (function() {
  return $m_sc_Iterator$().N;
});
$p.dS = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.e = (function(key) {
  this.j6(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gw: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cp = null;
  this.e8 = null;
  this.cp = key1;
  this.e8 = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aM = (function() {
  return 1;
});
$p.D = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().s(key, this.cp)) {
    return this.e8;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bg = (function(key) {
  return $m_sr_BoxesRunTime$().s(key, this.cp);
});
$p.c7 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().s(key, this.cp) ? this.e8 : default$1.S());
});
$p.n = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cp, this.e8));
});
$p.es = (function(key, value) {
  return ($m_sr_BoxesRunTime$().s(key, this.cp) ? new $c_sci_Map$Map1(this.cp, value) : new $c_sci_Map$Map2(this.cp, this.e8, key, value));
});
$p.eY = (function(p) {
  return (!(!p.e(new $c_T2(this.cp, this.e8))));
});
$p.w = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cm(this.cp, this.e8);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().f(h, a);
  h = $m_s_util_hashing_MurmurHash3$().f(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cV(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 1);
});
$p.dS = (function(key, value) {
  return this.es(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cb: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.ca = null;
  this.df = null;
  this.cb = null;
  this.dg = null;
  this.ca = key1;
  this.df = value1;
  this.cb = key2;
  this.dg = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aM = (function() {
  return 2;
});
$p.D = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().s(key, this.ca)) {
    return this.df;
  } else if ($m_sr_BoxesRunTime$().s(key, this.cb)) {
    return this.dg;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bg = (function(key) {
  return ($m_sr_BoxesRunTime$().s(key, this.ca) || $m_sr_BoxesRunTime$().s(key, this.cb));
});
$p.c7 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().s(key, this.ca) ? this.df : ($m_sr_BoxesRunTime$().s(key, this.cb) ? this.dg : default$1.S()));
});
$p.n = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.es = (function(key, value) {
  return ($m_sr_BoxesRunTime$().s(key, this.ca) ? new $c_sci_Map$Map2(this.ca, value, this.cb, this.dg) : ($m_sr_BoxesRunTime$().s(key, this.cb) ? new $c_sci_Map$Map2(this.ca, this.df, this.cb, value) : new $c_sci_Map$Map3(this.ca, this.df, this.cb, this.dg, key, value)));
});
$p.eY = (function(p) {
  return ((!(!p.e(new $c_T2(this.ca, this.df)))) && (!(!p.e(new $c_T2(this.cb, this.dg)))));
});
$p.w = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cm(this.ca, this.df);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.cb, this.dg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().f(h, a);
  h = $m_s_util_hashing_MurmurHash3$().f(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cV(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 2);
});
$p.dS = (function(key, value) {
  return this.es(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cc: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.bZ = null;
  this.cG = null;
  this.c0 = null;
  this.cH = null;
  this.c1 = null;
  this.cI = null;
  this.bZ = key1;
  this.cG = value1;
  this.c0 = key2;
  this.cH = value2;
  this.c1 = key3;
  this.cI = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aM = (function() {
  return 3;
});
$p.D = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().s(key, this.bZ)) {
    return this.cG;
  } else if ($m_sr_BoxesRunTime$().s(key, this.c0)) {
    return this.cH;
  } else if ($m_sr_BoxesRunTime$().s(key, this.c1)) {
    return this.cI;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bg = (function(key) {
  return (($m_sr_BoxesRunTime$().s(key, this.bZ) || $m_sr_BoxesRunTime$().s(key, this.c0)) || $m_sr_BoxesRunTime$().s(key, this.c1));
});
$p.c7 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().s(key, this.bZ) ? this.cG : ($m_sr_BoxesRunTime$().s(key, this.c0) ? this.cH : ($m_sr_BoxesRunTime$().s(key, this.c1) ? this.cI : default$1.S())));
});
$p.n = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.es = (function(key, value) {
  return ($m_sr_BoxesRunTime$().s(key, this.bZ) ? new $c_sci_Map$Map3(this.bZ, value, this.c0, this.cH, this.c1, this.cI) : ($m_sr_BoxesRunTime$().s(key, this.c0) ? new $c_sci_Map$Map3(this.bZ, this.cG, this.c0, value, this.c1, this.cI) : ($m_sr_BoxesRunTime$().s(key, this.c1) ? new $c_sci_Map$Map3(this.bZ, this.cG, this.c0, this.cH, this.c1, value) : new $c_sci_Map$Map4(this.bZ, this.cG, this.c0, this.cH, this.c1, this.cI, key, value))));
});
$p.eY = (function(p) {
  return (((!(!p.e(new $c_T2(this.bZ, this.cG)))) && (!(!p.e(new $c_T2(this.c0, this.cH))))) && (!(!p.e(new $c_T2(this.c1, this.cI)))));
});
$p.w = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cm(this.bZ, this.cG);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.c0, this.cH);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.c1, this.cI);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().f(h, a);
  h = $m_s_util_hashing_MurmurHash3$().f(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cV(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 3);
});
$p.dS = (function(key, value) {
  return this.es(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cd: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bz = null;
  this.cc = null;
  this.bA = null;
  this.cd = null;
  this.bB = null;
  this.ce = null;
  this.bC = null;
  this.cf = null;
  this.bz = key1;
  this.cc = value1;
  this.bA = key2;
  this.cd = value2;
  this.bB = key3;
  this.ce = value3;
  this.bC = key4;
  this.cf = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aM = (function() {
  return 4;
});
$p.D = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().s(key, this.bz)) {
    return this.cc;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bA)) {
    return this.cd;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bB)) {
    return this.ce;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bC)) {
    return this.cf;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bg = (function(key) {
  return ((($m_sr_BoxesRunTime$().s(key, this.bz) || $m_sr_BoxesRunTime$().s(key, this.bA)) || $m_sr_BoxesRunTime$().s(key, this.bB)) || $m_sr_BoxesRunTime$().s(key, this.bC));
});
$p.c7 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().s(key, this.bz) ? this.cc : ($m_sr_BoxesRunTime$().s(key, this.bA) ? this.cd : ($m_sr_BoxesRunTime$().s(key, this.bB) ? this.ce : ($m_sr_BoxesRunTime$().s(key, this.bC) ? this.cf : default$1.S()))));
});
$p.n = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.es = (function(key, value) {
  return ($m_sr_BoxesRunTime$().s(key, this.bz) ? new $c_sci_Map$Map4(this.bz, value, this.bA, this.cd, this.bB, this.ce, this.bC, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bA) ? new $c_sci_Map$Map4(this.bz, this.cc, this.bA, value, this.bB, this.ce, this.bC, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bB) ? new $c_sci_Map$Map4(this.bz, this.cc, this.bA, this.cd, this.bB, value, this.bC, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bC) ? new $c_sci_Map$Map4(this.bz, this.cc, this.bA, this.cd, this.bB, this.ce, this.bC, value) : $m_sci_HashMap$().ix.fb(this.bz, this.cc).fb(this.bA, this.cd).fb(this.bB, this.ce).fb(this.bC, this.cf).fb(key, value)))));
});
$p.eY = (function(p) {
  return ((((!(!p.e(new $c_T2(this.bz, this.cc)))) && (!(!p.e(new $c_T2(this.bA, this.cd))))) && (!(!p.e(new $c_T2(this.bB, this.ce))))) && (!(!p.e(new $c_T2(this.bC, this.cf)))));
});
$p.qZ = (function(builder) {
  return builder.ee(this.bz, this.cc).ee(this.bA, this.cd).ee(this.bB, this.ce).ee(this.bC, this.cf);
});
$p.w = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cm(this.bz, this.cc);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bA, this.cd);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bB, this.ce);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bC, this.cf);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().f(h, a);
  h = $m_s_util_hashing_MurmurHash3$().f(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cV(h, c);
  return $m_s_util_hashing_MurmurHash3$().G(h, 4);
});
$p.dS = (function(key, value) {
  return this.es(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  ce: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gj)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.b9 = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.iy)) {
    if ($thiz.gR) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.gR = true;
    try {
      var res = $thiz.iz.S();
    } finally {
      $thiz.gR = false;
    }
    $thiz.bY = true;
    $thiz.iz = null;
    $thiz.iA = res;
    $thiz.iy = true;
  }
  return $thiz.iA;
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.t = (("" + b.t) + start);
  if ((!$thiz.bY)) {
    b.t = (b.t + "<not computed>");
  } else if ((!$thiz.c())) {
    var obj = $thiz.J().u();
    b.t = (("" + b.t) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.J().aX();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bY) || (elem.J() !== elem$2.J())))) {
      elem = elem$2;
      if ((elem$2.bY && (!elem$2.c()))) {
        elem$2 = elem$2.J().aX();
        while ((((elem !== elem$2) && (elem$2.bY && (!elem$2.c()))) && (elem.J() !== elem$2.J()))) {
          b.t = (("" + b.t) + sep);
          var obj$1 = elem.J().u();
          b.t = (("" + b.t) + obj$1);
          elem = elem.J().aX();
          elem$2 = elem$2.J().aX();
          if ((elem$2.bY && (!elem$2.c()))) {
            elem$2 = elem$2.J().aX();
          }
        }
      }
    }
    if ((!(elem$2.bY && (!elem$2.c())))) {
      while ((elem !== elem$2)) {
        b.t = (("" + b.t) + sep);
        var obj$2 = elem.J().u();
        b.t = (("" + b.t) + obj$2);
        elem = elem.J().aX();
      }
      if ((!elem.bY)) {
        b.t = (("" + b.t) + sep);
        b.t = (b.t + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.J() === b$1.J())))) {
          runner = runner.J().aX();
          elem$2 = elem$2.J().aX();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.J() === b$2.J())) && (k > 0))) {
        b.t = (("" + b.t) + sep);
        var obj$3 = elem.J().u();
        b.t = (("" + b.t) + obj$3);
        elem = elem.J().aX();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.J() === b$3.J())))) {
          b.t = (("" + b.t) + sep);
          var obj$4 = elem.J().u();
          b.t = (("" + b.t) + obj$4);
          elem = elem.J().aX();
        } else {
          break;
        }
      }
      b.t = (("" + b.t) + sep);
      b.t = (b.t + "<cycle>");
    }
  }
  b.t = (("" + b.t) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.iA = null;
  this.iz = null;
  this.bY = false;
  this.gR = false;
  this.iy = false;
  this.iz = lazyState;
  this.bY = false;
  this.gR = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bu = (function() {
  return "LinearSeq";
});
$p.v = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bi = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jI = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.B = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.f7 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.J = (function() {
  return ((!this.iy) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.iA);
});
$p.c = (function() {
  return (this.J() === $m_sci_LazyList$State$Empty$());
});
$p.D = (function() {
  return ((this.bY && (this.J() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.u = (function() {
  return this.J().u();
});
$p.pc = (function() {
  var these = this;
  var those = this;
  if ((!these.c())) {
    these = these.J().aX();
  }
  while ((those !== these)) {
    if (these.c()) {
      return this;
    }
    these = these.J().aX();
    if (these.c()) {
      return this;
    }
    these = these.J().aX();
    if ((these === those)) {
      return this;
    }
    those = those.J().aX();
  }
  return this;
});
$p.n = (function() {
  return ((this.bY && (this.J() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().N : new $c_sci_LazyList$LazyIterator(this));
});
$p.bh = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.c())) {
      f.e(_$this.J().u());
      _$this = _$this.J().aX();
      continue;
    }
    break;
  }
});
$p.c5 = (function() {
  return "LazyList";
});
$p.ro = (function(n) {
  return ((n <= 0) ? this : ((this.bY && (this.J() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().iB : $m_sci_LazyList$().sT(this, n)));
});
$p.dE = (function(sb, start, sep, end) {
  this.pc();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aV, start, sep, end);
  return sb;
});
$p.x = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").t;
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c8 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.p1 = (function(n) {
  return this.ro(n);
});
$p.p = (function() {
  return this.J().aX();
});
$p.bU = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  c9: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aX: 1,
  as: 1,
  aT: 1,
  aY: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h1)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.gZ = null;
  this.gZ = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f7 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.h6 = (function() {
  return $m_sci_IndexedSeqDefaults$().nJ;
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.q = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pO(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bf = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.gd = (function() {
  return $m_sjsr_WrappedVarArgs$().b3();
});
$p.bh = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.bS = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f9 = (function() {
  return $m_sci_Nil$().f5(this);
});
$p.dM = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.v = (function() {
  return (this.gZ.length | 0);
});
$p.B = (function(idx) {
  return this.gZ[idx];
});
$p.c5 = (function() {
  return "WrappedVarArgs";
});
$p.g5 = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jv(coll);
});
$p.c8 = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return this.B((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cG: 1,
  z: 1,
  w: 1,
  u: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  x: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bo = null;
  this.bo = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pu = (function() {
  return $m_sci_HashMap$();
});
$p.D = (function() {
  return this.bo.aN;
});
$p.aM = (function() {
  return this.bo.aN;
});
$p.c = (function() {
  return (this.bo.aN === 0);
});
$p.n = (function() {
  return (this.c() ? $m_sc_Iterator$().N : new $c_sci_MapKeyValueTupleIterator(this.bo));
});
$p.bg = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Z(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bo.jh(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Z(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bo.j4(key, keyUnimprovedHash, keyHash, 0);
});
$p.c7 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().Z(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bo.jx(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fb = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().Z(key);
  var newRootNode = this.bo.q0(key, value, keyUnimprovedHash, $m_sc_Hashing$().cj(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bo) ? this : new $c_sci_HashMap(newRootNode));
});
$p.eh = (function(f) {
  this.bo.eh(f);
});
$p.q = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bo;
      var x$2 = that.bo;
      return ((x === null) ? (x$2 === null) : x.q(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.w = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().iV;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bo);
    return $m_s_util_hashing_MurmurHash3$().k6(hashIterator, $m_s_util_hashing_MurmurHash3$().dD);
  }
});
$p.c5 = (function() {
  return "HashMap";
});
$p.dS = (function(key, value) {
  return this.fb(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  c8: 1,
  aj: 1,
  af: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ah: 1,
  i: 1,
  e: 1,
  ag: 1,
  d: 1,
  a6: 1,
  u: 1,
  ak: 1,
  gO: 1,
  g7: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gP)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gZ)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.b1 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.aT.a.length) | 0));
  var x1 = $thiz.aT.a[idx];
  if ((x1 === null)) {
    $thiz.aT.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.cO <= hash))) {
      if (((n.cO === hash) && $m_sr_BoxesRunTime$().s(elem, n.eR))) {
        return false;
      }
      prev = n;
      n = n.aU;
    }
    if ((prev === null)) {
      $thiz.aT.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.aU = new $c_scm_HashSet$Node(elem, hash, prev.aU);
    }
  }
  $thiz.dy = ((1 + $thiz.dy) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aT.a.length;
  $thiz.iN = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dy === 0)) {
    $thiz.aT = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aT = $m_ju_Arrays$().a6($thiz.aT, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aT.a[i];
        if ((old !== null)) {
          preLow.aU = null;
          preHigh.aU = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aU;
            if (((n.cO & oldlen) === 0)) {
              lastLow.aU = n;
              lastLow = n;
            } else {
              lastHigh.aU = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.aU = null;
          if ((old !== preLow.aU)) {
            $thiz.aT.a[i] = preLow.aU;
          }
          if ((preHigh.aU !== null)) {
            $thiz.aT.a[((i + oldlen) | 0)] = preHigh.aU;
            lastHigh.aU = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = (((-1) + capacity) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.iM));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.iM = loadFactor;
  $thiz.aT = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.iN = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aT.a.length);
  $thiz.dy = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.iM = 0.0;
  this.aT = null;
  this.iN = 0;
  this.dy = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aM = (function() {
  return this.dy;
});
$p.hf = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.bg = (function(elem) {
  var hash = this.hf($m_sr_Statics$().Z(elem));
  var x1 = this.aT.a[(hash & (((-1) + this.aT.a.length) | 0))];
  return (((x1 === null) ? null : x1.rx(elem, hash)) !== null);
});
$p.b4 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.iM)));
  if ((target > this.aT.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.h4 = (function(elem) {
  if ((((1 + this.dy) | 0) >= this.iN)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aT.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hf($m_sr_Statics$().Z(elem)));
});
$p.ou = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hf((h$2$2 | 0)));
    }));
    xs.tp.ty(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.r()) {
      var next = iter.j();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eR, next.cO);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rp();
    while (iter$2.r()) {
      var next$2 = iter$2.j();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.ps(), next$2.pn());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.n = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bU = (function() {
  return $m_scm_HashSet$();
});
$p.D = (function() {
  return this.dy;
});
$p.c = (function() {
  return (this.dy === 0);
});
$p.c5 = (function() {
  return "HashSet";
});
$p.w = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.r()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().k6(hashIterator, $m_s_util_hashing_MurmurHash3$().oo);
});
$p.b2 = (function(elem) {
  this.h4(elem);
  return this;
});
$p.b1 = (function(elems) {
  return this.ou(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cr: 1,
  h2: 1,
  fF: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aW: 1,
  g5: 1,
  e: 1,
  d: 1,
  hq: 1,
  I: 1,
  hr: 1,
  G: 1,
  C: 1,
  M: 1,
  H: 1,
  F: 1,
  ax: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gu)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hm)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.g6 = (function(coll) {
  return $m_sci_ArraySeq$().js(coll, this.ae());
});
$p.gd = (function() {
  return $m_sci_ArraySeq$().hc(this.ae());
});
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f7 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bu = (function() {
  return "IndexedSeq";
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.dM = (function() {
  return $m_sci_ArraySeq$().iv;
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.bS = (function(xs, start, len) {
  var srcLen = this.v();
  var destLen = $m_jl_reflect_Array$().c6(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().g1(this.cz(), 0, xs, start, copied);
  }
  return copied;
});
$p.h6 = (function() {
  return 2147483647;
});
$p.g5 = (function(coll) {
  return $m_sci_ArraySeq$().js(coll, this.ae());
});
$p.bU = (function() {
  return $m_sci_ArraySeq$().iv;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.g = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.g = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f7 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bu = (function() {
  return "IndexedSeq";
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.dM = (function() {
  return $m_sci_Vector$();
});
$p.v = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.l : this.g.a.length);
});
$p.n = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().nR : new $c_sci_NewVectorIterator(this, this.v(), this.cB()));
});
$p.c5 = (function() {
  return "Vector";
});
$p.bS = (function(xs, start, len) {
  return this.n().bS(xs, start, len);
});
$p.h6 = (function() {
  return $m_sci_Vector$().nQ;
});
$p.aH = (function(index) {
  return $m_scg_CommonErrors$().ga(index, (((-1) + this.v()) | 0));
});
$p.bh = (function(f) {
  var c = this.cB();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.jq((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.cA(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bU = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bu = (function() {
  return "IndexedSeq";
});
$p.bi = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.dM = (function() {
  return $m_scm_ArraySeq$().iL;
});
$p.pk = (function(coll) {
  var evidence$1 = this.ae();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aL();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.D();
  var it = coll.n();
  while (it.r()) {
    var elem = it.j();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.jL(elemRuntimeClass.a3.r().w(jsElems));
});
$p.gd = (function() {
  return $m_scm_ArraySeq$().hc(this.ae());
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.bS = (function(xs, start, len) {
  var srcLen = this.v();
  var destLen = $m_jl_reflect_Array$().c6(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().g1(this.c4(), 0, xs, start, copied);
  }
  return copied;
});
$p.q = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().c6(this.c4()) !== $m_jl_reflect_Array$().c6(other.c4()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.g5 = (function(coll) {
  return this.pk(coll);
});
$p.g6 = (function(coll) {
  return this.pk(coll);
});
$p.bU = (function() {
  return $m_scm_ArraySeq$().iL;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.d6 = null;
  this.d6 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.v = (function() {
  return this.d6.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oP(this.d6, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().p9(this.d6, that.d6) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.d6);
});
$p.fV = (function(i) {
  return this.d6.a[i];
});
$p.e = (function(v1) {
  return this.fV((v1 | 0));
});
$p.B = (function(i) {
  return this.fV(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cz = (function() {
  return this.d6;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  bV: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.d7 = null;
  this.d7 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.v = (function() {
  return this.d7.a.length;
});
$p.fN = (function(i) {
  return this.d7.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oH(this.d7, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().p3(this.d7, that.d7) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.d7);
});
$p.e = (function(v1) {
  return this.fN((v1 | 0));
});
$p.B = (function(i) {
  return this.fN(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cz = (function() {
  return this.d7;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  bW: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cE = null;
  this.cE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.v = (function() {
  return this.cE.a.length;
});
$p.fO = (function(i) {
  return this.cE.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oI(this.cE, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().p4(this.cE, that.cE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cE);
});
$p.dE = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cE).dE(sb, start, sep, end);
});
$p.e = (function(v1) {
  return $bC(this.fO((v1 | 0)));
});
$p.B = (function(i) {
  return $bC(this.fO(i));
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cz = (function() {
  return this.cE;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  bX: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.d8 = null;
  this.d8 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.v = (function() {
  return this.d8.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oJ(this.d8, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().p5(this.d8, that.d8) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.d8);
});
$p.fQ = (function(i) {
  return this.d8.a[i];
});
$p.e = (function(v1) {
  return this.fQ((v1 | 0));
});
$p.B = (function(i) {
  return this.fQ(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cz = (function() {
  return this.d8;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  bY: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.d9 = null;
  this.d9 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.v = (function() {
  return this.d9.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oK(this.d9, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().p6(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.d9);
});
$p.fR = (function(i) {
  return this.d9.a[i];
});
$p.e = (function(v1) {
  return this.fR((v1 | 0));
});
$p.B = (function(i) {
  return this.fR(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cz = (function() {
  return this.d9;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  bZ: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.da = null;
  this.da = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.v = (function() {
  return this.da.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oL(this.da, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jm(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.da);
});
$p.fS = (function(i) {
  return this.da.a[i];
});
$p.e = (function(v1) {
  return this.fS((v1 | 0));
});
$p.B = (function(i) {
  return this.fS(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cz = (function() {
  return this.da;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  c0: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.v = (function() {
  return this.db.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oM(this.db, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().p7(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.db);
});
$p.fT = (function(i) {
  return this.db.a[i];
});
$p.e = (function(v1) {
  return this.fT((v1 | 0));
});
$p.B = (function(i) {
  return this.fT(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cz = (function() {
  return this.db;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  c1: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cn = null;
  this.cn = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.ae = (function() {
  return $m_s_reflect_ClassTag$().oC($objectGetClass(this.cn).a3.Q());
});
$p.v = (function() {
  return this.cn.a.length;
});
$p.B = (function(i) {
  return this.cn.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oG(this.cn, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pa(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cn);
});
$p.e = (function(v1) {
  return this.B((v1 | 0));
});
$p.cz = (function() {
  return this.cn;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  c2: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.v = (function() {
  return this.dc.a.length;
});
$p.fP = (function(i) {
  return this.dc.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oN(this.dc, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().p8(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dc);
});
$p.e = (function(v1) {
  return this.fP((v1 | 0));
});
$p.B = (function(i) {
  return this.fP(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cz = (function() {
  return this.dc;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  c3: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.e6 = null;
  this.e6 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.v = (function() {
  return this.e6.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oO(this.e6, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.e6.a.length === that.e6.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.e6);
});
$p.fU = (function(i) {
});
$p.e = (function(v1) {
  this.fU((v1 | 0));
});
$p.B = (function(i) {
  this.fU(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cz = (function() {
  return this.e6;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  c4: 1,
  W: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.c() ? 0 : 1);
    } else if (xs.c()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.p();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = a.c();
      var bEmpty = b.c();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().s(a.u(), b.u()))) {
        var temp$a = a.p();
        var temp$b = b.p();
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.n = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.bu = (function() {
  return "LinearSeq";
});
$p.jI = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.B = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.f7 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dM = (function() {
  return $m_sci_List$();
});
$p.op = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.u(), this);
    var curr = result;
    var that = prefix.p();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.u(), this);
      curr.a0 = temp;
      curr = temp;
      that = that.p();
    }
    return result;
  }
});
$p.c = (function() {
  return (this === $m_sci_Nil$());
});
$p.f5 = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.op(prefix);
  }
  if ((prefix.D() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.f9();
    }
  }
  var iter = prefix.n();
  if (iter.r()) {
    var result = new $c_sci_$colon$colon(iter.j(), this);
    var curr = result;
    while (iter.r()) {
      var temp = new $c_sci_$colon$colon(iter.j(), this);
      curr.a0 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oz = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.op(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.r4 = (function(pf) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var rest = this;
    var h = null;
    var x = null;
    while ((h === null)) {
      x = pf.bf(rest.u(), $m_sci_List$().fw);
      if ((x !== $m_sci_List$().fw)) {
        h = new $c_sci_$colon$colon(x, $m_sci_Nil$());
      }
      rest = rest.p();
      if ((rest === $m_sci_Nil$())) {
        return ((h === null) ? $m_sci_Nil$() : h);
      }
    }
    var t = h;
    while ((rest !== $m_sci_Nil$())) {
      x = pf.bf(rest.u(), $m_sci_List$().fw);
      if ((x !== $m_sci_List$().fw)) {
        var nx = new $c_sci_$colon$colon(x, $m_sci_Nil$());
        t.a0 = nx;
        t = nx;
      }
      rest = rest.p();
    }
    return h;
  }
});
$p.bh = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.e(these.u());
    these = these.p();
  }
});
$p.v = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.p();
  }
  return len;
});
$p.bi = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.bg = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().s(these.u(), elem)) {
      return true;
    }
    these = these.p();
  }
  return false;
});
$p.c5 = (function() {
  return "List";
});
$p.f9 = (function() {
  return this;
});
$p.q = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.c8 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.p1 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.bU = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.g = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.dq = null;
  this.dq = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.v = (function() {
  return this.dq.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oP(this.dq, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().p9(this.dq, that.dq) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dq);
});
$p.fV = (function(index) {
  return this.dq.a[index];
});
$p.e = (function(v1) {
  return this.fV((v1 | 0));
});
$p.B = (function(i) {
  return this.fV(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.c4 = (function() {
  return this.dq;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  ch: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.dr = null;
  this.dr = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.v = (function() {
  return this.dr.a.length;
});
$p.fN = (function(index) {
  return this.dr.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oH(this.dr, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().p3(this.dr, that.dr) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dr);
});
$p.e = (function(v1) {
  return this.fN((v1 | 0));
});
$p.B = (function(i) {
  return this.fN(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.c4 = (function() {
  return this.dr;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  ci: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bQ = null;
  this.bQ = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.v = (function() {
  return this.bQ.a.length;
});
$p.fO = (function(index) {
  return this.bQ.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oI(this.bQ, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().p4(this.bQ, that.bQ) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.bQ);
});
$p.dE = (function(sb, start, sep, end) {
  var jsb = sb.aV;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var len = this.bQ.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.ox(this.bQ);
    } else {
      jsb.v();
      var c = this.bQ.a[0];
      var str = ("" + $cToS(c));
      jsb.t = (jsb.t + str);
      var i = 1;
      while ((i < len)) {
        jsb.t = (("" + jsb.t) + sep);
        var c$1 = this.bQ.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.t = (jsb.t + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return sb;
});
$p.e = (function(v1) {
  return $bC(this.fO((v1 | 0)));
});
$p.B = (function(i) {
  return $bC(this.fO(i));
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.c4 = (function() {
  return this.bQ;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cj: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.ds = null;
  this.ds = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.v = (function() {
  return this.ds.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oJ(this.ds, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().p5(this.ds, that.ds) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.ds);
});
$p.fQ = (function(index) {
  return this.ds.a[index];
});
$p.e = (function(v1) {
  return this.fQ((v1 | 0));
});
$p.B = (function(i) {
  return this.fQ(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.c4 = (function() {
  return this.ds;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  ck: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.dt = null;
  this.dt = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.v = (function() {
  return this.dt.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oK(this.dt, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().p6(this.dt, that.dt) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dt);
});
$p.fR = (function(index) {
  return this.dt.a[index];
});
$p.e = (function(v1) {
  return this.fR((v1 | 0));
});
$p.B = (function(i) {
  return this.fR(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.c4 = (function() {
  return this.dt;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cl: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.du = null;
  this.du = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.v = (function() {
  return this.du.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oL(this.du, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jm(this.du, that.du) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.du);
});
$p.fS = (function(index) {
  return this.du.a[index];
});
$p.e = (function(v1) {
  return this.fS((v1 | 0));
});
$p.B = (function(i) {
  return this.fS(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.c4 = (function() {
  return this.du;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cm: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.dv = null;
  this.dv = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.v = (function() {
  return this.dv.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oM(this.dv, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().p7(this.dv, that.dv) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dv);
});
$p.fT = (function(index) {
  return this.dv.a[index];
});
$p.e = (function(v1) {
  return this.fT((v1 | 0));
});
$p.B = (function(i) {
  return this.fT(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.c4 = (function() {
  return this.dv;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cn: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.cM = null;
  this.cM = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.ae = (function() {
  return $m_s_reflect_ClassTag$().oC($objectGetClass(this.cM).a3.Q());
});
$p.v = (function() {
  return this.cM.a.length;
});
$p.B = (function(index) {
  return this.cM.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oG(this.cM, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pa(this.cM, that.cM) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cM);
});
$p.e = (function(v1) {
  return this.B((v1 | 0));
});
$p.c4 = (function() {
  return this.cM;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  co: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dw = null;
  this.dw = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.v = (function() {
  return this.dw.a.length;
});
$p.fP = (function(index) {
  return this.dw.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oN(this.dw, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().p8(this.dw, that.dw) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dw);
});
$p.e = (function(v1) {
  return this.fP((v1 | 0));
});
$p.B = (function(i) {
  return this.fP(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.c4 = (function() {
  return this.dw;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cp: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.ec = null;
  this.ec = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.v = (function() {
  return this.ec.a.length;
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oO(this.ec, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.ec.a.length === that.ec.a.length) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.n = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.ec);
});
$p.fU = (function(index) {
});
$p.e = (function(v1) {
  this.fU((v1 | 0));
});
$p.B = (function(i) {
  this.fU(i);
});
$p.ae = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.c4 = (function() {
  return this.ec;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cq: 1,
  X: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hc)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.k = suffix1;
  $thiz.l = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.g = null;
  this.k = null;
  this.l = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.g = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.g.a.length))) {
    return this.g.a[index];
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.g.a.length))) {
    var a1 = this.g;
    var a1c = a1.h();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.g.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eW(this.g, elem));
  } else {
    var $x_2 = this.g;
    var $x_1 = $m_sci_VectorStatics$().br;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cB = (function() {
  return 1;
});
$p.cA = (function(idx) {
  return this.g;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.g.a.length))) {
    return this.g.a[index];
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gS: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.is = null;
  this.a0 = null;
  this.is = head;
  this.a0 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.u = (function() {
  return this.is;
});
$p.bl = (function() {
  return "::";
});
$p.bj = (function() {
  return 2;
});
$p.bk = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.is;
      break;
    }
    case 1: {
      return this.a0;
      break;
    }
    default: {
      return $m_sr_Statics$().ek(x$1);
    }
  }
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.p = (function() {
  return this.a0;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gd: 1,
  aZ: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aX: 1,
  as: 1,
  aT: 1,
  aY: 1,
  bU: 1,
  s: 1,
  k: 1,
  A: 1,
  V: 1,
  a: 1,
  J: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.jD = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.t7 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.D = (function() {
  return 0;
});
$p.n = (function() {
  return $m_sc_Iterator$().N;
});
$p.bl = (function() {
  return "Nil";
});
$p.bj = (function() {
  return 0;
});
$p.bk = (function(x$1) {
  return $m_sr_Statics$().ek(x$1);
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.p = (function() {
  this.t7();
});
$p.u = (function() {
  this.jD();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gI: 1,
  aZ: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  aX: 1,
  as: 1,
  aT: 1,
  aY: 1,
  bU: 1,
  s: 1,
  k: 1,
  A: 1,
  V: 1,
  a: 1,
  J: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.g = null;
  this.k = null;
  this.l = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().iG, $m_sci_VectorStatics$().iG, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oA = (function(index) {
  throw this.aH(index);
});
$p.dR = (function(index, elem) {
  throw this.aH(index);
});
$p.dF = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cB = (function() {
  return 0;
});
$p.cA = (function(idx) {
  return null;
});
$p.q = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aH = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.e = (function(v1) {
  this.oA((v1 | 0));
});
$p.B = (function(i) {
  this.oA(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  gR: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.g = null;
  this.k = null;
  this.l = 0;
  this.bP = 0;
  this.bq = null;
  this.bP = len1;
  this.bq = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.bP) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bq.a.length) ? this.bq.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.l))) {
    if ((index >= this.bP)) {
      var io = ((index - this.bP) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bq.a.length)) {
        var a2 = this.bq;
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.g, this.bP, a2c, this.k, this.l);
      } else {
        var a1$1 = this.k;
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.g, this.bP, this.bq, a1c$1, this.l);
      }
    } else {
      var a1$2 = this.g;
      var a1c$2 = a1$2.h();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bP, this.bq, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector2(this.g, this.bP, this.bq, x$1, x$2);
  } else if ((this.bq.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().I(this.bq, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.l) | 0);
    return new $c_sci_Vector2(this.g, this.bP, x$6, a, x$8);
  } else {
    var $x_5 = this.g;
    var $x_4 = this.bP;
    var $x_3 = this.bq;
    var $x_2 = this.bP;
    var $x_1 = $m_sci_VectorStatics$().cr;
    var x = this.k;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.l) | 0));
  }
});
$p.cB = (function() {
  return 3;
});
$p.cA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.g;
      break;
    }
    case 1: {
      return this.bq;
      break;
    }
    case 2: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.bP) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bq.a.length) ? this.bq.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  gT: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.g = null;
  this.k = null;
  this.l = 0;
  this.bc = 0;
  this.bE = null;
  this.bd = 0;
  this.aY = null;
  this.aZ = null;
  this.bc = len1;
  this.bE = prefix2;
  this.bd = len12;
  this.aY = data3;
  this.aZ = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.bd) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aY.a.length) ? this.aY.a[i3].a[i2].a[i1] : ((i2 < this.aZ.a.length) ? this.aZ.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.bc)) {
      var io$2 = ((index - this.bc) | 0);
      return this.bE.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.l))) {
    if ((index >= this.bd)) {
      var io = ((index - this.bd) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aY.a.length)) {
        var a3 = this.aY;
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, a3c, this.aZ, this.k, this.l);
      } else if ((i2 < this.aZ.a.length)) {
        var a2$1 = this.aZ;
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, this.aY, a2c$1, this.k, this.l);
      } else {
        var a1$2 = this.k;
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, this.aY, this.aZ, a1c$2, this.l);
      }
    } else if ((index >= this.bc)) {
      var io$2 = ((index - this.bc) | 0);
      var a2$2 = this.bE;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.h();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.h();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.g, this.bc, a2c$2, this.bd, this.aY, this.aZ, this.k, this.l);
    } else {
      var a1$4 = this.g;
      var a1c$4 = a1$4.h();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bc, this.bE, this.bd, this.aY, this.aZ, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, this.aY, this.aZ, x$1, x$2);
  } else if ((this.aZ.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().I(this.aZ, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, this.aY, x$9, a, x$11);
  } else if ((this.aY.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().I(this.aY, $m_sci_VectorStatics$().I(this.aZ, this.k));
    var x$18 = $m_sci_VectorStatics$().br;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bE, this.bd, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.g;
    var $x_7 = this.bc;
    var $x_6 = this.bE;
    var $x_5 = this.bd;
    var $x_4 = this.aY;
    var $x_3 = this.bd;
    var $x_2 = $m_sci_VectorStatics$().eP;
    var x = $m_sci_VectorStatics$().I(this.aZ, this.k);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().br;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.l) | 0));
  }
});
$p.cB = (function() {
  return 5;
});
$p.cA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.g;
      break;
    }
    case 1: {
      return this.bE;
      break;
    }
    case 2: {
      return this.aY;
      break;
    }
    case 3: {
      return this.aZ;
      break;
    }
    case 4: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.bd) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aY.a.length) ? this.aY.a[i3].a[i2].a[i1] : ((i2 < this.aZ.a.length) ? this.aZ.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.bc)) {
      var io$2 = ((index - this.bc) | 0);
      return this.bE.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gU: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.g = null;
  this.k = null;
  this.l = 0;
  this.aQ = 0;
  this.b6 = null;
  this.aR = 0;
  this.b7 = null;
  this.aS = 0;
  this.aD = null;
  this.aF = null;
  this.aE = null;
  this.aQ = len1;
  this.b6 = prefix2;
  this.aR = len12;
  this.b7 = prefix3;
  this.aS = len123;
  this.aD = data4;
  this.aF = suffix3;
  this.aE = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.aS) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aD.a.length) ? this.aD.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aF.a.length) ? this.aF.a[i3].a[i2].a[i1] : ((i2 < this.aE.a.length) ? this.aE.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.aR)) {
      var io$2 = ((index - this.aR) | 0);
      return this.b7.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aQ)) {
      var io$3 = ((index - this.aQ) | 0);
      return this.b6.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.l))) {
    if ((index >= this.aS)) {
      var io = ((index - this.aS) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aD.a.length)) {
        var a4 = this.aD;
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, a4c, this.aF, this.aE, this.k, this.l);
      } else if ((i3 < this.aF.a.length)) {
        var a3$1 = this.aF;
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, a3c$1, this.aE, this.k, this.l);
      } else if ((i2 < this.aE.a.length)) {
        var a2$2 = this.aE;
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, this.aF, a2c$2, this.k, this.l);
      } else {
        var a1$3 = this.k;
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, this.aF, this.aE, a1c$3, this.l);
      }
    } else if ((index >= this.aR)) {
      var io$2 = ((index - this.aR) | 0);
      var a3$2 = this.b7;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.h();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.h();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.h();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, a3c$2, this.aS, this.aD, this.aF, this.aE, this.k, this.l);
    } else if ((index >= this.aQ)) {
      var io$3 = ((index - this.aQ) | 0);
      var a2$4 = this.b6;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.h();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.h();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.g, this.aQ, a2c$4, this.aR, this.b7, this.aS, this.aD, this.aF, this.aE, this.k, this.l);
    } else {
      var a1$6 = this.g;
      var a1c$6 = a1$6.h();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, this.aF, this.aE, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, this.aF, this.aE, x$1, x$2);
  } else if ((this.aE.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().I(this.aE, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.l) | 0);
    return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, this.aF, x$12, a, x$14);
  } else if ((this.aF.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().I(this.aF, $m_sci_VectorStatics$().I(this.aE, this.k));
    var x$24 = $m_sci_VectorStatics$().br;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.l) | 0);
    return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, x$23, x$24, a$1, x$26);
  } else if ((this.aD.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().I(this.aD, $m_sci_VectorStatics$().I(this.aF, $m_sci_VectorStatics$().I(this.aE, this.k)));
    var x$35 = $m_sci_VectorStatics$().cr;
    var x$36 = $m_sci_VectorStatics$().br;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.l) | 0);
    return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.g;
    var $x_10 = this.aQ;
    var $x_9 = this.b6;
    var $x_8 = this.aR;
    var $x_7 = this.b7;
    var $x_6 = this.aS;
    var $x_5 = this.aD;
    var $x_4 = this.aS;
    var $x_3 = $m_sci_VectorStatics$().iH;
    var x = $m_sci_VectorStatics$().I(this.aF, $m_sci_VectorStatics$().I(this.aE, this.k));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cr;
    var $x_1 = $m_sci_VectorStatics$().br;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.l) | 0));
  }
});
$p.cB = (function() {
  return 7;
});
$p.cA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.g;
      break;
    }
    case 1: {
      return this.b6;
      break;
    }
    case 2: {
      return this.b7;
      break;
    }
    case 3: {
      return this.aD;
      break;
    }
    case 4: {
      return this.aF;
      break;
    }
    case 5: {
      return this.aE;
      break;
    }
    case 6: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.aS) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aD.a.length) ? this.aD.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aF.a.length) ? this.aF.a[i3].a[i2].a[i1] : ((i2 < this.aE.a.length) ? this.aE.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.aR)) {
      var io$2 = ((index - this.aR) | 0);
      return this.b7.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aQ)) {
      var io$3 = ((index - this.aQ) | 0);
      return this.b6.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gV: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.g = null;
  this.k = null;
  this.l = 0;
  this.at = 0;
  this.aI = null;
  this.au = 0;
  this.aJ = null;
  this.av = 0;
  this.aK = null;
  this.aw = 0;
  this.ah = null;
  this.ak = null;
  this.aj = null;
  this.ai = null;
  this.at = len1;
  this.aI = prefix2;
  this.au = len12;
  this.aJ = prefix3;
  this.av = len123;
  this.aK = prefix4;
  this.aw = len1234;
  this.ah = data5;
  this.ak = suffix4;
  this.aj = suffix3;
  this.ai = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.aw) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ah.a.length) ? this.ah.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ak.a.length) ? this.ak.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aj.a.length) ? this.aj.a[i3].a[i2].a[i1] : ((i2 < this.ai.a.length) ? this.ai.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.av)) {
      var io$2 = ((index - this.av) | 0);
      return this.aK.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.au)) {
      var io$3 = ((index - this.au) | 0);
      return this.aJ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.at)) {
      var io$4 = ((index - this.at) | 0);
      return this.aI.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.l))) {
    if ((index >= this.aw)) {
      var io = ((index - this.aw) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.ah.a.length)) {
        var a5 = this.ah;
        var a5c = a5.h();
        var a4 = a5c.a[i5];
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, a5c, this.ak, this.aj, this.ai, this.k, this.l);
      } else if ((i4 < this.ak.a.length)) {
        var a4$1 = this.ak;
        var a4c$1 = a4$1.h();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, a4c$1, this.aj, this.ai, this.k, this.l);
      } else if ((i3 < this.aj.a.length)) {
        var a3$2 = this.aj;
        var a3c$2 = a3$2.h();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, a3c$2, this.ai, this.k, this.l);
      } else if ((i2 < this.ai.a.length)) {
        var a2$3 = this.ai;
        var a2c$3 = a2$3.h();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, a2c$3, this.k, this.l);
      } else {
        var a1$4 = this.k;
        var a1c$4 = a1$4.h();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, this.ai, a1c$4, this.l);
      }
    } else if ((index >= this.av)) {
      var io$2 = ((index - this.av) | 0);
      var a4$2 = this.aK;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.h();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.h();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.h();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.h();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, a4c$2, this.aw, this.ah, this.ak, this.aj, this.ai, this.k, this.l);
    } else if ((index >= this.au)) {
      var io$3 = ((index - this.au) | 0);
      var a3$4 = this.aJ;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.h();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.h();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.h();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, a3c$4, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, this.ai, this.k, this.l);
    } else if ((index >= this.at)) {
      var io$4 = ((index - this.at) | 0);
      var a2$6 = this.aI;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.h();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.h();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.g, this.at, a2c$6, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, this.ai, this.k, this.l);
    } else {
      var a1$8 = this.g;
      var a1c$8 = a1$8.h();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, this.ai, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, this.ai, x$1, x$2);
  } else if ((this.ai.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().I(this.ai, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, this.aj, x$15, a, x$17);
  } else if ((this.aj.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k));
    var x$30 = $m_sci_VectorStatics$().br;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, x$29, x$30, a$1, x$32);
  } else if ((this.ak.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k)));
    var x$44 = $m_sci_VectorStatics$().cr;
    var x$45 = $m_sci_VectorStatics$().br;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.ah.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().I(this.ah, $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k))));
    var x$58 = $m_sci_VectorStatics$().eP;
    var x$59 = $m_sci_VectorStatics$().cr;
    var x$60 = $m_sci_VectorStatics$().br;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.g;
    var $x_13 = this.at;
    var $x_12 = this.aI;
    var $x_11 = this.au;
    var $x_10 = this.aJ;
    var $x_9 = this.av;
    var $x_8 = this.aK;
    var $x_7 = this.aw;
    var $x_6 = this.ah;
    var $x_5 = this.aw;
    var $x_4 = $m_sci_VectorStatics$().nS;
    var x = $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().eP;
    var $x_2 = $m_sci_VectorStatics$().cr;
    var $x_1 = $m_sci_VectorStatics$().br;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.l) | 0));
  }
});
$p.cB = (function() {
  return 9;
});
$p.cA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.g;
      break;
    }
    case 1: {
      return this.aI;
      break;
    }
    case 2: {
      return this.aJ;
      break;
    }
    case 3: {
      return this.aK;
      break;
    }
    case 4: {
      return this.ah;
      break;
    }
    case 5: {
      return this.ak;
      break;
    }
    case 6: {
      return this.aj;
      break;
    }
    case 7: {
      return this.ai;
      break;
    }
    case 8: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.aw) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ah.a.length) ? this.ah.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ak.a.length) ? this.ak.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aj.a.length) ? this.aj.a[i3].a[i2].a[i1] : ((i2 < this.ai.a.length) ? this.ai.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.av)) {
      var io$2 = ((index - this.av) | 0);
      return this.aK.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.au)) {
      var io$3 = ((index - this.au) | 0);
      return this.aJ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.at)) {
      var io$4 = ((index - this.at) | 0);
      return this.aI.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gW: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.g = null;
  this.k = null;
  this.l = 0;
  this.al = 0;
  this.ax = null;
  this.am = 0;
  this.ay = null;
  this.an = 0;
  this.az = null;
  this.ao = 0;
  this.aA = null;
  this.ar = 0;
  this.a8 = null;
  this.ac = null;
  this.ab = null;
  this.aa = null;
  this.a9 = null;
  this.al = len1;
  this.ax = prefix2;
  this.am = len12;
  this.ay = prefix3;
  this.an = len123;
  this.az = prefix4;
  this.ao = len1234;
  this.aA = prefix5;
  this.ar = len12345;
  this.a8 = data6;
  this.ac = suffix5;
  this.ab = suffix4;
  this.aa = suffix3;
  this.a9 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.B = (function(index) {
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.ar) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.a.length) ? this.a8.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ac.a.length) ? this.ac.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aA.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.az.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.ay.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.al)) {
      var io$5 = ((index - this.al) | 0);
      return this.ax.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.l))) {
    if ((index >= this.ar)) {
      var io = ((index - this.ar) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a8.a.length)) {
        var a6 = this.a8;
        var a6c = a6.h();
        var a5 = a6c.a[i6];
        var a5c = a5.h();
        var a4 = a5c.a[i5];
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, a6c, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
      } else if ((i5 < this.ac.a.length)) {
        var a5$1 = this.ac;
        var a5c$1 = a5$1.h();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.h();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, a5c$1, this.ab, this.aa, this.a9, this.k, this.l);
      } else if ((i4 < this.ab.a.length)) {
        var a4$2 = this.ab;
        var a4c$2 = a4$2.h();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.h();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, a4c$2, this.aa, this.a9, this.k, this.l);
      } else if ((i3 < this.aa.a.length)) {
        var a3$3 = this.aa;
        var a3c$3 = a3$3.h();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.h();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, a3c$3, this.a9, this.k, this.l);
      } else if ((i2 < this.a9.a.length)) {
        var a2$4 = this.a9;
        var a2c$4 = a2$4.h();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.h();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, a2c$4, this.k, this.l);
      } else {
        var a1$5 = this.k;
        var a1c$5 = a1$5.h();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, a1c$5, this.l);
      }
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      var a5$2 = this.aA;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.h();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.h();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.h();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.h();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.h();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, a5c$2, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      var a4$4 = this.az;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.h();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.h();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.h();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.h();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, a4c$4, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      var a3$6 = this.ay;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.h();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.h();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.h();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, a3c$6, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
    } else if ((index >= this.al)) {
      var io$5 = ((index - this.al) | 0);
      var a2$8 = this.ax;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.h();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.h();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.g, this.al, a2c$8, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
    } else {
      var a1$10 = this.g;
      var a1c$10 = a1$10.h();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, this.a9, x$1, x$2);
  } else if ((this.a9.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().I(this.a9, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, this.aa, x$18, a, x$20);
  } else if ((this.aa.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k));
    var x$36 = $m_sci_VectorStatics$().br;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, x$35, x$36, a$1, x$38);
  } else if ((this.ab.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k)));
    var x$53 = $m_sci_VectorStatics$().cr;
    var x$54 = $m_sci_VectorStatics$().br;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.ac.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().I(this.ac, $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k))));
    var x$70 = $m_sci_VectorStatics$().eP;
    var x$71 = $m_sci_VectorStatics$().cr;
    var x$72 = $m_sci_VectorStatics$().br;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a8.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().I(this.a8, $m_sci_VectorStatics$().I(this.ac, $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k)))));
    var x$87 = $m_sci_VectorStatics$().iH;
    var x$88 = $m_sci_VectorStatics$().eP;
    var x$89 = $m_sci_VectorStatics$().cr;
    var x$90 = $m_sci_VectorStatics$().br;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cB = (function() {
  return 11;
});
$p.cA = (function(idx) {
  switch (idx) {
    case 0: {
      return this.g;
      break;
    }
    case 1: {
      return this.ax;
      break;
    }
    case 2: {
      return this.ay;
      break;
    }
    case 3: {
      return this.az;
      break;
    }
    case 4: {
      return this.aA;
      break;
    }
    case 5: {
      return this.a8;
      break;
    }
    case 6: {
      return this.ac;
      break;
    }
    case 7: {
      return this.ab;
      break;
    }
    case 8: {
      return this.aa;
      break;
    }
    case 9: {
      return this.a9;
      break;
    }
    case 10: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l))) {
    var io = ((index - this.ar) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.a.length) ? this.a8.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ac.a.length) ? this.ac.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aA.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.az.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.ay.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.al)) {
      var io$5 = ((index - this.al) | 0);
      return this.ax.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  gX: 1,
  ac: 1,
  ad: 1,
  a7: 1,
  y: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  u: 1,
  x: 1,
  z: 1,
  p: 1,
  q: 1,
  D: 1,
  A: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aV = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aV = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bu = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bi = (function(len) {
  var x = this.aV.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b4 = (function(size) {
});
$p.b1 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.v = (function() {
  return this.aV.v();
});
$p.D = (function() {
  return this.aV.v();
});
$p.qB = (function(x) {
  var this$1 = this.aV;
  var str = ("" + $cToS(x));
  this$1.t = (this$1.t + str);
  return this;
});
$p.x = (function() {
  return this.aV.t;
});
$p.oy = (function(xs) {
  if (false) {
    var this$3 = this.aV;
    var str = xs.tq;
    this$3.t = (("" + this$3.t) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aV.ox(xs.bQ);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aV;
    var s = xs.aV;
    this$4.t = (("" + this$4.t) + s);
  } else {
    var ks = xs.D();
    if ((ks !== 0)) {
      var b = this.aV;
      if ((ks > 0)) {
        b.v();
      }
      var it = xs.n();
      while (it.r()) {
        var c = $uC(it.j());
        var str$1 = ("" + $cToS(c));
        b.t = (b.t + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.aV.v() === 0);
});
$p.bU = (function() {
  return $m_scm_IndexedSeq$();
});
$p.b9 = (function() {
  return this.aV.t;
});
$p.b2 = (function(elem) {
  return this.qB($uC(elem));
});
$p.g5 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oy(coll);
});
$p.g6 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oy(coll);
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aV.oQ(i));
});
$p.B = (function(i) {
  return $bC(this.aV.oQ(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cu: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  aL: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hl)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().hg($thiz);
  $thiz.c2 = buf.c2;
  $thiz.cP = buf.cP;
  $thiz.gT = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.gU = ((1 + $thiz.gU) | 0);
  if ($thiz.gT) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.gU = 0;
  this.c2 = null;
  this.cP = null;
  this.gT = false;
  this.c3 = 0;
  this.gU = 0;
  this.c2 = $m_sci_Nil$();
  this.cP = null;
  this.gT = false;
  this.c3 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.b4 = (function(size) {
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.n = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.c2.n(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.gU)));
});
$p.dM = (function() {
  return $m_scm_ListBuffer$();
});
$p.B = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.c2, i);
});
$p.v = (function() {
  return this.c3;
});
$p.D = (function() {
  return this.c3;
});
$p.c = (function() {
  return (this.c3 === 0);
});
$p.f9 = (function() {
  this.gT = (!this.c());
  return this.c2;
});
$p.qJ = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c3 === 0)) {
    this.c2 = last1;
  } else {
    this.cP.a0 = last1;
  }
  this.cP = last1;
  this.c3 = ((1 + this.c3) | 0);
  return this;
});
$p.hg = (function(xs) {
  var it = xs.n();
  if (it.r()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.j(), $m_sci_Nil$());
    this.c2 = last0;
    while (it.r()) {
      var last1 = new $c_sci_$colon$colon(it.j(), $m_sci_Nil$());
      last0.a0 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.c3 = len;
    this.cP = last0;
  }
  return this;
});
$p.qz = (function(xs) {
  var it = xs.n();
  if (it.r()) {
    var fresh = new $c_scm_ListBuffer().hg(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c3 === 0)) {
      this.c2 = fresh.c2;
    } else {
      this.cP.a0 = fresh.c2;
    }
    this.cP = fresh.cP;
    this.c3 = ((this.c3 + fresh.c3) | 0);
  }
  return this;
});
$p.bu = (function() {
  return "ListBuffer";
});
$p.b1 = (function(elems) {
  return this.qz(elems);
});
$p.b2 = (function(elem) {
  return this.qJ(elem);
});
$p.b9 = (function() {
  return this.f9();
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.c2, i);
});
$p.bU = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  ct: 1,
  b1: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  b2: 1,
  H: 1,
  F: 1,
  ax: 1,
  s: 1,
  k: 1,
  a8: 1,
  M: 1,
  V: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.dp = 0;
  $thiz.dn = initialElements;
  $thiz.aB = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.dp = 0;
  this.dn = null;
  this.aB = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.n = (function() {
  return this.tk().n();
});
$p.bi = (function(len) {
  var x = this.aB;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.aB;
});
$p.jl = (function(n) {
  this.dn = $m_scm_ArrayBuffer$().pN(this.dn, this.aB, n);
});
$p.b4 = (function(size) {
  if (((size > this.aB) && (size >= 1))) {
    this.jl(size);
  }
});
$p.B = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().ga(n, (((-1) + this.aB) | 0));
  }
  if ((hi > this.aB)) {
    throw $m_scg_CommonErrors$().ga((((-1) + hi) | 0), (((-1) + this.aB) | 0));
  }
  return this.dn.a[n];
});
$p.tj = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().ga(index, (((-1) + this.aB) | 0));
  }
  if ((hi > this.aB)) {
    throw $m_scg_CommonErrors$().ga((((-1) + hi) | 0), (((-1) + this.aB) | 0));
  }
  this.dp = ((1 + this.dp) | 0);
  this.dn.a[index] = elem;
});
$p.v = (function() {
  return this.aB;
});
$p.tk = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.dp)));
});
$p.dM = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qG = (function(elem) {
  this.dp = ((1 + this.dp) | 0);
  var newSize = ((1 + this.aB) | 0);
  this.jl(newSize);
  this.aB = newSize;
  this.tj((((-1) + this.aB) | 0), elem);
  return this;
});
$p.ot = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aB;
    if ((elemsLength > 0)) {
      this.dp = ((1 + this.dp) | 0);
      this.jl(((this.aB + elemsLength) | 0));
      $m_s_Array$().g1(elems.dn, 0, this.dn, this.aB, elemsLength);
      this.aB = ((this.aB + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bu = (function() {
  return "ArrayBuffer";
});
$p.bS = (function(xs, start, len) {
  var srcLen = this.aB;
  var destLen = $m_jl_reflect_Array$().c6(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().g1(this.dn, 0, xs, start, copied);
  }
  return copied;
});
$p.b1 = (function(elems) {
  return this.ot(elems);
});
$p.b2 = (function(elem) {
  return this.qG(elem);
});
$p.bU = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.e = (function(v1) {
  return this.B((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cg: 1,
  b1: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  b2: 1,
  H: 1,
  F: 1,
  ax: 1,
  cs: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dC = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dC = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b4 = (function(size) {
});
$p.bu = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bi = (function(len) {
  var x = (this.dC.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dM = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.B = (function(index) {
  return this.dC[index];
});
$p.v = (function() {
  return (this.dC.length | 0);
});
$p.D = (function() {
  return (this.dC.length | 0);
});
$p.c5 = (function() {
  return "WrappedArray";
});
$p.b9 = (function() {
  return this;
});
$p.b2 = (function(elem) {
  this.dC.push(elem);
  return this;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  return this.dC[index];
});
$p.bU = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  iy: 1,
  b1: 1,
  L: 1,
  n: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  i: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  C: 1,
  b2: 1,
  H: 1,
  F: 1,
  ax: 1,
  s: 1,
  k: 1,
  S: 1,
  p: 1,
  q: 1,
  T: 1,
  cs: 1,
  M: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
$s_Lfirst_Main__main__AT__V(new ($d_T.r().C)([]));
