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
        return null.tt();
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
    return instance.tu(x0);
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
$p.z = (function(srcPos, dest, destPos, length) {
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
  $p.z = (function(srcPos, dest, destPos, length) {
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
  return (($objectGetClass($thiz).jw() + "@") + $thiz.w());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.dN();
  return ((x === (void 0)) ? $thiz.dJ() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().q0(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().gL, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.q0 = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rD = (function(onTry, handleObserverErrors) {
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
$p.pB = (function(this$, observer) {
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
$p.pr = (function() {
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
  this.k9 = null;
  this.hm = 0;
  this.hl = code;
  this.k9 = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gl();
  this.hm = ((x === (void 0)) ? 1 : ((1 + x.hm) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gs === (-1)) || (this.hm > $m_Lcom_raquo_airstream_core_Transaction$().gs))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().c9(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gs));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b5) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().dU.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iZ(this);
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
  this.ka = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gs = 1000;
  this.ka = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.oM = (function(transaction) {
  try {
    transaction.hl.e(transaction);
    var x = transaction.k9;
    if ((x !== (void 0))) {
      while (x.ty()) {
        x.tp().tB(transaction);
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
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iZ($thiz.dU.shift());
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
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iZ(_trx);
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
$p.iZ = (function(newTransaction) {
  var x = this.gl();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().oM(newTransaction);
    this.rj(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rj = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gl();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().s(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sv(transaction$tailLocal1);
    transaction$tailLocal1.hl = $m_Lcom_raquo_airstream_core_Transaction$().ka;
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
      $m_Lcom_raquo_airstream_core_Transaction$().oM(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sv = (function(doneTransaction) {
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
  this.ke = null;
  this.kc = null;
  this.kd = null;
  this.ke = onWillStart;
  this.kc = onStart;
  this.kd = onStop;
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
$p.qL = (function(onStart, onStop) {
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
      subscription.pu();
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
  this.kK = null;
  this.cX = null;
  this.ex = false;
  this.gy = null;
  this.bJ = null;
  this.ey = 0;
  this.kK = onAccessAfterKilled;
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
$p.oj = (function() {
  if ((!(!this.bJ.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.kK);
      this.bJ = new $c_s_Some(newOwner);
      this.ex = false;
      this.ey = 0;
      var i = 0;
      var originalNumSubs = (this.cX.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.ey) | 0);
        this.cX[ix].ps(newOwner);
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
$p.rc = (function() {
  if ((!this.bJ.c())) {
    this.ex = false;
    var arr = this.cX;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pu();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bJ;
    if ((!this$4.c())) {
      this$4.H().po();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.ex = true;
    this.bJ = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qG = (function(subscription, prepend) {
  if (prepend) {
    this.ey = ((1 + this.ey) | 0);
    this.cX.unshift(subscription);
  } else {
    this.cX.push(subscription);
  }
  var this$1 = this.bJ;
  if ((!this$1.c())) {
    var x0 = this$1.H();
    subscription.ps(x0);
  }
});
$p.sG = (function(subscription) {
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
  this.kL = null;
  this.gA = null;
  this.gz = dynamicOwner;
  this.kL = activate;
  this.gA = $m_s_None$();
  dynamicOwner.qG(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hb = (function() {
  this.gz.sG(this);
});
$p.ps = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.gA = this.kL.e(owner);
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
$p.pu = (function() {
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
$p.pQ = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.e(owner);
    return $m_s_None$();
  })), prepend);
});
$p.pR = (function(dynamicOwner, observable, onNext) {
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
  $thiz.oN($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
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
    $thiz.kO.T();
    $thiz.hv = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.kP = null;
  this.kO = null;
  this.hv = false;
  this.kP = owner;
  this.kO = cleanup;
  this.hv = false;
  owner.pz(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hb = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.kP, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  d7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.kQ = null;
  this.kR = null;
  this.cY = null;
  this.dW = false;
  this.kQ = activate;
  this.kR = deactivate;
  this.cY = $m_s_None$();
  this.dW = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.rZ = (function() {
  var this$1 = this.cY;
  return ((!this$1.c()) && (!this$1.H().gz.bJ.c()));
});
$p.sV = (function(nextOwner) {
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
    if ((this.rZ() && (!nextOwner.bJ.c()))) {
      this.dW = true;
    }
    var this$3 = this.cY;
    if ((!this$3.c())) {
      this$3.H().hb();
      this.cY = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.dW)) {
        this.kQ.T();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.dW)) {
          this.kR.T();
        }
      })));
    })), false);
    this.cY = new $c_s_Some(newPilotSubscription);
    this.dW = false;
  }
});
$p.qZ = (function() {
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
$p.j4 = (function(initial) {
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
$p.oy = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pd(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().qL(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
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
  return [...$m_sjsr_Compat$().t5(items)];
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
$p.rP = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rw = (function(this$, cb) {
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
  this.l3 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.oS($m_Lcom_raquo_laminar_api_package$().b.ba().pS());
  this.l3 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qH = (function(parent, child) {
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
$p.sD = (function(parent, child) {
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
$p.rV = (function(parent, newChild, referenceChild) {
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
$p.rU = (function(parent, newChild, referenceChild) {
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
$p.sI = (function(parent, newChild, oldChild) {
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
$p.s3 = (function(node, ancestor) {
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
$p.qw = (function(element, listener) {
  element.addEventListener(listener.eC.d2.eB, listener.hM, listener.hN);
});
$p.sE = (function(element, listener) {
  element.removeEventListener(listener.eC.d2.eB, listener.hM, listener.hN);
});
$p.ra = (function(tag) {
  return document.createElement(tag.hY);
});
$p.rG = (function(element, attr) {
  var x = this.rH(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hH.jh(x));
});
$p.rH = (function(element, attr) {
  var domValue = element.bt.getAttributeNS(null, attr.fj);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pL = (function(element, attr, value) {
  this.sS(element, attr, attr.hH.g4(value));
});
$p.sS = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sF(element, attr);
  } else {
    element.bt.setAttribute(attr.fj, domValue);
  }
});
$p.sF = (function(element, attr) {
  element.bt.removeAttribute(attr.fj);
});
$p.sT = (function(element, prop, value) {
  this.sU(element, prop, prop.mJ.g4(value));
});
$p.sU = (function(element, prop, value) {
  element.bt[prop.e0] = value;
});
$p.oS = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.hZ);
});
$p.rJ = (function(element, attr) {
  var x = this.rK(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hI.jh(x));
});
$p.rK = (function(element, attr) {
  var $x_2 = element.d3;
  var this$2 = attr.gF;
  var $x_1 = $x_2.getAttributeNS((this$2.c() ? null : this$2.H()), attr.hJ);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pM = (function(element, attr, value) {
  this.sW(element, attr, attr.hI.g4(value));
});
$p.sW = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sH(element, attr);
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
$p.sH = (function(element, attr) {
  var $x_1 = element.d3;
  var this$2 = attr.gF;
  $x_1.removeAttributeNS((this$2.c() ? null : this$2.H()), attr.hJ);
});
$p.sQ = (function(element, attr, value) {
  this.sR(element, attr, attr.mG.g4(value));
});
$p.sR = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sB(element, attr);
  } else {
    element.a1().setAttribute(attr.hE, domValue);
  }
});
$p.sB = (function(element, attr) {
  element.a1().removeAttribute(attr.hE);
});
$p.r9 = (function(text) {
  return document.createComment(text);
});
$p.rb = (function(text) {
  return document.createTextNode(text);
});
$p.s0 = (function(element) {
  return $m_sc_StringOps$().r3(element.tagName, 45);
});
$p.re = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.oT(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.oT = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.l3, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rd = (function(node) {
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
  this.l4 = null;
  this.hA = null;
  this.hB = seq;
  this.l4 = scalaArray;
  this.hA = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bF = (function(f) {
  if ((this.hB !== null)) {
    this.hB.bF(f);
  } else if ((this.hA !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rw(this.hA, $m_sjs_js_Any$().pd(f));
  } else {
    $m_sc_ArrayOps$().rx(this.l4, f);
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
$p.iU = (function(this$, onNext) {
  return new $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
    var observable = this$.dQ();
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pR(_$11.bq(), observable, onNext);
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
  $thiz.lx = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.mM.bt.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bq().bJ.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.gW) {
        var ev$5 = false;
        ignoreNextActivation.gW = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pQ(element.bq(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.bb = null;
  this.mB = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.bb = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.mB = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
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
  $thiz.lM = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.y = $thiz.lM;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().bb);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fj, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rG(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pL(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.ld = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.hC = $thiz.ld;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gE, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rJ(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pM(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mC = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().b.pY();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jO()])));
  $m_Lcom_raquo_laminar_api_package$().b.pY();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jO(), $m_Lcom_raquo_laminar_api_package$().b.sp()])));
  $m_Lcom_raquo_laminar_api_package$().b.qX();
  $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jO(), $m_Lcom_raquo_laminar_api_package$().b.em()])));
  this.mC = $m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  dL: 1
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
$p.ov = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.dZ)) {
      ctx.p7();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.t0(maybeLastSeenChild.dB, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.dB = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.t0 = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.dZ)) {
    ctx.p7();
  }
  var elem = ctx.dX;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().s(maybeLastSeenChild.a1(), ctx.d1.a1().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().rW(ctx.dY, newChildNode, ctx.d1, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().pD(ctx.dY, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = (((-1) + elem$1) | 0);
    elem$1 = ev$4;
  }
  ctx.pC(newChildNode);
  ctx.d0.clear();
  ctx.d0.set(newChildNode.a1(), newChildNode);
  ctx.dX = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  dM: 1
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
$p.S = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.dB;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.j7(newValue));
      this.t1(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.dB = ev$2;
      ev$2 = null;
    } else {
      x.gG.textContent = renderable.j7(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.t1 = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().pD(ctx.dY, ctx.d1, newTextNode, (void 0));
  ctx.d1 = newTextNode;
  if (ctx.dZ) {
    ctx.dZ = false;
    ctx.pC(newTextNode);
    ctx.d0.clear();
    ctx.dX = 0;
  }
});
var $d_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildTextInserter$, "com.raquo.laminar.inserters.ChildTextInserter$", ({
  dN: 1
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
$p.p7 = (function() {
  if ((this.dZ || (this.dX !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rd(this.dY.a1())));
  }
  if ((this.d0 === null)) {
    this.d0 = new Map();
  }
  if ((!(!(!(this.d1.a1() instanceof Comment))))) {
    var contentNode = this.d1;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().rV(this.dY.a1(), newSentinelNode.hQ, contentNode.a1());
    this.d1 = newSentinelNode;
    this.dX = 1;
    this.d0.set(contentNode.a1(), contentNode);
  }
  this.dZ = true;
});
$p.pC = (function(after) {
  var elem = this.dX;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.a1().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.d0.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().sC(this.dY, maybePrevChild);
        var ev$5 = (((-1) + elem$1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dQ: 1
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
$p.sK = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, sentinelNode, hooks);
  return this.tc(parentNode, sentinelNode, strictMode);
});
$p.tc = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  dR: 1
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
  dV: 1
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
$p.sY = (function() {
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
$p.s9 = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.ez.e(ev);
    return (this$2.c() ? $m_s_None$() : new $c_s_Some((this$2.H(), value.T())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.d2, this.eA, this.gD, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  dZ: 1
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
  e0: 1
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
  this.mL = null;
  this.mK = null;
  this.mL = key;
  this.mK = items;
}
$p = $c_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_LockedCompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_LockedCompositeKey() {
}
$h_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = $p;
$p.qp = (function(include) {
  return this.mL.qo(include.dQ().gc(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((include$2) => ((!(!include$2)) ? this.mK : $m_sci_Nil$())))), $m_Lcom_raquo_laminar_api_package$().iV());
});
var $d_Lcom_raquo_laminar_keys_LockedCompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_LockedCompositeKey, "com.raquo.laminar.keys.LockedCompositeKey", ({
  e3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.q2 = null;
  this.q3 = null;
  this.q4 = null;
  this.q5 = null;
  this.q2 = "http://www.w3.org/2000/svg";
  this.q3 = "http://www.w3.org/1999/xlink";
  this.q4 = "http://www.w3.org/XML/1998/namespace";
  this.q5 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sc = (function(namespace) {
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
  e5: 1
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
  this.mM = null;
  this.hK = null;
  this.mM = thisNode;
  this.hK = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  e6: 1
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
  e7: 1
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
  this.q6 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.q6 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  ed: 1
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
  this.hO = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.hO = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  eh: 1
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
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.t3())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  em: 1
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
    hooks.pv(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qH(parent.a1(), child.a1());
  if (appended) {
    child.dP(nextParent);
  }
  return appended;
});
$p.sC = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().s(child.a1().parentNode, parent.a1())) {
    child.dT($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().sD(parent.a1(), child.a1());
    child.dP($m_s_None$());
  }
  return removed;
});
$p.rW = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.dT(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pv(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().rU(parent.a1(), newChild.a1(), referenceChild.a1());
  newChild.dP(nextParent);
  return inserted;
});
$p.pD = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.eU().bg(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.dT($m_s_None$());
      newChild.dT(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pv(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().sI(parent.a1(), newChild.a1(), oldChild.a1());
      if (replaced) {
        oldChild.dP($m_s_None$());
        newChild.dP(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  ep: 1
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
$p.tb = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bq(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eq: 1
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
  this.q7 = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.q7 = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  ew: 1
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
  ex: 1
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
$p.r2 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.rv().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("footerText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().a2("https://github.com/oswaldo/first"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("viewOnGithub"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("licenseNotice"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().a2("https://github.com/oswaldo/first/blob/main/TRADEMARK.md"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("trademarkPolicy"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])));
});
var $d_Lfirst_Footer$ = new $TypeData().i($c_Lfirst_Footer$, "first.Footer$", ({
  eB: 1
}));
var $n_Lfirst_Footer$;
function $m_Lfirst_Footer$() {
  if ((!$n_Lfirst_Footer$)) {
    $n_Lfirst_Footer$ = new $c_Lfirst_Footer$();
  }
  return $n_Lfirst_Footer$;
}
function $s_Lfirst_Main__main__AT__V(args) {
  $m_Lfirst_Main$().s6(args);
}
function $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  return (appContainer$lzy1$1.gX ? appContainer$lzy1$1.gY : appContainer$lzy1$1.rT(document.querySelector("#appContainer")));
}
function $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.gX ? appContainer$lzy1$2.gY : $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
}
/** @constructor */
function $c_Lfirst_Main$() {
  this.i0 = null;
  this.gH = null;
  this.nc = null;
  this.nb = null;
  this.n9 = null;
  this.na = null;
  $n_Lfirst_Main$ = this;
  this.i0 = $m_Lcom_raquo_laminar_api_package$().b.gB.j4($m_s_None$());
  this.gH = new $c_sci_$colon$colon(new $c_T3("en", "English", "\ud83c\uddfa\ud83c\uddf8"), new $c_sci_$colon$colon(new $c_T3("pt-br", "Portugu\u00eas (BR)", "\ud83c\udde7\ud83c\uddf7"), new $c_sci_$colon$colon(new $c_T3("de", "Deutsch", "\ud83c\udde9\ud83c\uddea"), $m_sci_Nil$())));
  var isOpen = $m_Lcom_raquo_laminar_api_package$().b.gB.j4(false);
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().b.W();
  var $x_15 = $m_sr_ScalaRunTime$();
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().b.y.A("language-selector");
  var $x_12 = $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_13 = $m_Lcom_raquo_laminar_api_Implicits$RichSource$();
    var this$7 = $m_Lcom_raquo_laminar_api_package$().b;
    var x0 = this$7.mA;
    $m_Lcom_raquo_laminar_api_package$();
    var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().g3(x0.em(), false, false);
    return $x_13.iU(new $c_Lcom_raquo_airstream_misc_MapStream(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().oy(window, p.d2.eB, p.eA), p.ez), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => _$3.target)), $m_s_None$()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2) => ((target) => {
      if (((!(!$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(isOpen.cZ).H())) && (!(!(!el$2.bt.contains(target)))))) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V(isOpen, false);
      }
    }))(el)));
  })));
  var $x_11 = $m_Lcom_raquo_laminar_api_package$().b.W();
  var $x_10 = $m_sr_ScalaRunTime$();
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().b.y.A("custom-select");
  var $x_8 = new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
    $f_Lcom_raquo_airstream_state_Var__update__F1__V(isOpen, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => (!(!(!_$5))))));
  })));
  $m_Lcom_raquo_laminar_api_package$();
  var $x_7 = $m_Lcom_raquo_laminar_inserters_ChildInserter$().ov(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lfirst_Translations$().gI.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentCode) => {
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
    return $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("select-selected"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ((flag$2 + " ") + name$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])));
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hO, (void 0));
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().b.W();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().b.y.A("select-items");
  var $x_3 = new $c_Lcom_raquo_laminar_keys_LockedCompositeKey($m_Lcom_raquo_laminar_api_package$().b.y, $m_sci_Nil$().f5($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["select-hide"])))).qp(new $c_Lcom_raquo_airstream_misc_MapSignal(isOpen.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => (!(!(!_$7))))), $m_s_None$()));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().b;
  var this$36 = this.gH;
  var f = ((x$1) => {
    if ((x$1 !== null)) {
      var code = x$1.e2;
      var name$1 = x$1.e3;
      var flag$1 = x$1.e4;
      return $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("select-item"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ((flag$1 + " ") + name$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)).sY().s9(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => code))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
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
      t.Z = nx;
      t = nx;
      rest = rest.p();
    }
    var $x_1 = h;
  }
  this.nc = $x_16.i($x_15.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_12, $x_11.i($x_10.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_9, $x_8, $x_7, $x_6.i($x_5.d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])))])));
  this.nb = $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().a2("https://github.com/oswaldo/first"), $m_Lcom_raquo_laminar_api_package$().b.jY().a2("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.A("github-corner"), $m_Lcom_raquo_laminar_api_package$().b.qP().s4().a2("View source on GitHub"), $m_Lcom_raquo_laminar_api_package$().b.ba().pS().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().th().a2("80"), $m_Lcom_raquo_laminar_api_package$().b.ba().rO().a2("80"), $m_Lcom_raquo_laminar_api_package$().b.ba().tg().a2("0 0 250 250"), $m_Lcom_raquo_laminar_api_package$().b.ba().pO().a2("fill:#e94560; color:#1a1a2e; position: absolute; top: 0; border: 0; right: 0;"), $m_Lcom_raquo_laminar_api_package$().b.ba().jR().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jg().a2("M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z")]))), $m_Lcom_raquo_laminar_api_package$().b.ba().jR().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jg().a2("M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"), $m_Lcom_raquo_laminar_api_package$().b.ba().p5().a2("currentColor"), $m_Lcom_raquo_laminar_api_package$().b.ba().hC.A("octo-arm"), $m_Lcom_raquo_laminar_api_package$().b.ba().pO().a2("transform-origin: 130px 106px;")]))), $m_Lcom_raquo_laminar_api_package$().b.ba().jR().h5($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.ba().jg().a2("M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"), $m_Lcom_raquo_laminar_api_package$().b.ba().p5().a2("currentColor"), $m_Lcom_raquo_laminar_api_package$().b.ba().hC.A("octo-body")])))])))])));
  this.n9 = $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("alpha-banner"), $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$1) => {
    $m_Lcom_raquo_laminar_api_package$();
    return $m_Lcom_raquo_laminar_api_Implicits$RichSource$().iU($m_Lfirst_Translations$().M("alphaWarning"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$2) => ((html) => {
      el$2$2.bt.innerHTML = html;
    }))(el$2$1)));
  })))])));
  this.na = $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("container"), this.nb, this.nc, this.n9, $m_Lcom_raquo_laminar_api_package$().b.rN().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("hero"), $m_Lcom_raquo_laminar_api_package$().b.rL().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tagline"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("tagline"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("description"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("description"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("release-badge"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().ov(new $c_Lcom_raquo_airstream_misc_MapSignal(this.i0.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $c_s_Some)) {
      var tag = x$1$2.eI;
      return $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("badge"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lfirst_Translations$().M("latestVersion"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((l) => ((l + " ") + tag))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])));
    }
    if (($m_s_None$() === x$1$2)) {
      $m_Lcom_raquo_laminar_api_package$();
      return new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hO, (void 0)))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("install-wrapper"), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("install-box"), $m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.qW().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("copy-btn"), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().g3($m_Lcom_raquo_laminar_api_package$().b.em(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    window.navigator.clipboard.writeText("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh");
    var feedback = document.querySelector(".copy-feedback");
    feedback.classList.add("visible");
    window.setTimeout((() => {
      feedback.classList.remove("visible");
    }), 2000.0);
  }))), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-copy")])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("copy-feedback"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("copiedToClipboard"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("platforms-section"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("supportedPlatforms"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("platforms-icons"), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("platform-icon"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fab fa-linux")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Linux", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("platform-icon"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fab fa-apple")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "macOS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.qn($m_sr_ScalaRunTime$().d(new ($d_T.r().C)(["platform-icon", "disabled"])), $m_Lcom_raquo_laminar_api_package$().b.iV()), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fab fa-windows")]))), $m_Lcom_raquo_laminar_api_package$().b.hh().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Windows", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tooltip"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("windowsNotSupported"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jB().a2("why"), $m_Lcom_raquo_laminar_api_package$().b.jy().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("whyTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("highlight"), $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().b, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$3) => {
    $m_Lcom_raquo_laminar_api_package$();
    return $m_Lcom_raquo_laminar_api_Implicits$RichSource$().iU($m_Lfirst_Translations$().M("whyHighlight"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2$3) => ((html$1) => {
      el$2$3.bt.innerHTML = html$1;
    }))(el$3)));
  })))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("whyText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("features-grid"), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-ghost")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature1Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-exchange-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature2Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-cloud")]))), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("feature3Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jB().a2("usage"), $m_Lcom_raquo_laminar_api_package$().b.jy().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("quickStartTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("step1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jT().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first save gemini-config --artifacts \".gemini/,GEMINI.md\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("step2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jT().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first load gemini-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("code-block"), $m_Lcom_raquo_laminar_api_package$().b.ej().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("step3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.jT().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.h8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "first swap claude-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.jX().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jB().a2("tech-stack"), $m_Lcom_raquo_laminar_api_package$().b.jy().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("techStackTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tech-intro"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("techStackIntro"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tech-logos"), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().a2("https://www.scala-lang.org/"), $m_Lcom_raquo_laminar_api_package$().b.jY().a2("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.A("tech-logo-link"), $m_Lcom_raquo_laminar_api_package$().b.pi().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.pN().a2("https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true"), $m_Lcom_raquo_laminar_api_package$().b.oq().a2("Scala"), $m_Lcom_raquo_laminar_api_package$().b.y.A("tech-logo")]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tech-desc"), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Scala", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("scalaDesc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.fM().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.g9().a2("https://scala-native.org/"), $m_Lcom_raquo_laminar_api_package$().b.jY().a2("_blank"), $m_Lcom_raquo_laminar_api_package$().b.y.A("tech-logo-link"), $m_Lcom_raquo_laminar_api_package$().b.pi().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.pN().a2("https://github.com/scala/scala-lang/blob/main/resources/img/frontpage/scala-logo-white.png?raw=true"), $m_Lcom_raquo_laminar_api_package$().b.oq().a2("Scala Native"), $m_Lcom_raquo_laminar_api_package$().b.y.A("tech-logo")]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("tech-desc"), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Scala Native", $m_Lcom_raquo_laminar_modifiers_RenderableText$().E)]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("scalaNativeDesc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("benefits-grid"), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-rocket")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit1Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-shield-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit2Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-brain")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit3Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))]))), $m_Lcom_raquo_laminar_api_package$().b.W().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("benefit-card"), $m_Lcom_raquo_laminar_api_package$().b.ci().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.y.A("fas fa-tachometer-alt")]))), $m_Lcom_raquo_laminar_api_package$().b.f0().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit4Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))]))), $m_Lcom_raquo_laminar_api_package$().b.b8().i($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().S($m_Lfirst_Translations$().M("benefit4Desc"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().E))])))])))]))), $m_Lfirst_Footer$().r2()])))])));
}
$p = $c_Lfirst_Main$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Main$;
/** @constructor */
function $h_Lfirst_Main$() {
}
$h_Lfirst_Main$.prototype = $p;
$p.s6 = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().b;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((appContainer$lzy1$2) => (() => $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Main$().na));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().g3(this$2.lR.sr(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().oy(document, p.d2.eB, p.eA), p.ez), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.T(), rootNode.T());
  })), this$2.td());
  this.rs();
});
$p.rs = (function() {
  $m_sjs_js_Thenable$Implicits$().pT(fetch("https://api.github.com/repos/oswaldo/first/releases/latest")).ru(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => $m_sjs_js_Thenable$Implicits$().pT(_$1.json()))), $m_s_concurrent_ExecutionContext$().jx()).s7(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((json) => {
    var tag = json.tag_name;
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lfirst_Main$().i0, new $c_s_Some(tag));
  })), $m_s_concurrent_ExecutionContext$().jx()).sx(new $c_Lfirst_Main$$anon$1(), $m_s_concurrent_ExecutionContext$().jx());
});
var $d_Lfirst_Main$ = new $TypeData().i($c_Lfirst_Main$, "first.Main$", ({
  eC: 1
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
  this.i1 = null;
  $n_Lfirst_Translations$ = this;
  this.gI = $m_Lcom_raquo_laminar_api_package$().b.gB.j4(this.rf());
  this.i1 = $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("en", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Full Context Swapping for Developer Workflows"), new $c_T2("description", "A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter."), new $c_T2("whyTitle", "Why first?"), new $c_T2("whyHighlight", "Your repository is for <em>your</em> code, not your tools' config files."), new $c_T2("whyText", "Modern development has normalized an uncomfortable reality: every tool we adopt\u2014IDEs, linters, CI systems, and now AI coding assistants\u2014leaves its own debris in our repositories. When you want to try a different AI assistant, you shouldn't need to commit new config files to your repository."), new $c_T2("feature1Title", "Non-invasive"), new $c_T2("feature1Text", "AI assistants and tools store their configs outside your repo."), new $c_T2("feature2Title", "Context Swapping"), new $c_T2("feature2Text", "Switch entire development environments with one command."), new $c_T2("feature3Title", "Remote Contexts"), new $c_T2("feature3Text", "Share team configurations via HTTP/HTTPS or GitHub."), new $c_T2("quickStartTitle", "Quick Start"), new $c_T2("step1Title", "Save your current context"), new $c_T2("step2Title", "Load a saved context"), new $c_T2("step3Title", "Swap to a different setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Powered by the Scala Ecosystem"), new $c_T2("scalaDesc", "A modern, expressive, and safe programming language."), new $c_T2("scalaNativeDesc", "Compiles Scala directly to native machine code for instant startup."), new $c_T2("benefit1Title", "Productivity"), new $c_T2("benefit1Desc", "Excellent IDE support and tooling."), new $c_T2("benefit2Title", "Modernity"), new $c_T2("benefit2Desc", "Concise, Python-like syntax with static safety."), new $c_T2("benefit3Title", "GenAI Ready"), new $c_T2("benefit3Desc", "Strong type system reduces hallucinations."), new $c_T2("benefit4Title", "Performance"), new $c_T2("benefit4Desc", "Native speed with no JVM overhead."), new $c_T2("footerText", "Built with \u2764\ufe0f using Scala Native and late-night coding sessions."), new $c_T2("viewOnGithub", "View on GitHub"), new $c_T2("latestVersion", "Latest Release:"), new $c_T2("supportedPlatforms", "Supported Platforms"), new $c_T2("windowsNotSupported", "Windows support is coming soon!"), new $c_T2("licenseNotice", "Code licensed under MIT."), new $c_T2("trademarkPolicy", "Trademark Policy"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Alpha Stage</strong>: This project is currently in an experimental phase. It is primarily used for internal workflows. Expect frequent updates and limited support. Happy exploring! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Copied!")])))), new $c_T2("pt-br", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Troca Completa de Contexto para Fluxos de Trabalho de Desenvolvedores"), new $c_T2("description", "Uma ferramenta de linha de comando que permite a troca perfeita entre diferentes contextos de desenvolvimento e configura\u00e7\u00f5es de assistentes de IA, mantendo seus projetos limpos de arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyTitle", "Por que first?"), new $c_T2("whyHighlight", "Seu reposit\u00f3rio \u00e9 para o <em>seu</em> c\u00f3digo, n\u00e3o para arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyText", "O desenvolvimento moderno normalizou uma realidade desconfort\u00e1vel: cada ferramenta que adotamos\u2014IDEs, linters, sistemas de CI e agora assistentes de codifica\u00e7\u00e3o de IA\u2014deixa seus pr\u00f3prios detritos em nossos reposit\u00f3rios. Quando voc\u00ea quer experimentar um assistente de IA diferente, n\u00e3o deveria precisar commitar novos arquivos de configura\u00e7\u00e3o em seu reposit\u00f3rio."), new $c_T2("feature1Title", "N\u00e3o invasivo"), new $c_T2("feature1Text", "Assistentes de IA e ferramentas armazenam suas configura\u00e7\u00f5es fora do seu reposit\u00f3rio."), new $c_T2("feature2Title", "Troca de Contexto"), new $c_T2("feature2Text", "Troque ambientes de desenvolvimento inteiros com um comando."), new $c_T2("feature3Title", "Contextos Remotos"), new $c_T2("feature3Text", "Compartilhe configura\u00e7\u00f5es de equipe via HTTP/HTTPS ou GitHub."), new $c_T2("quickStartTitle", "In\u00edcio R\u00e1pido"), new $c_T2("step1Title", "Salve seu contexto atual"), new $c_T2("step2Title", "Carregue um contexto salvo"), new $c_T2("step3Title", "Troque para uma configura\u00e7\u00e3o diferente"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Impulsionado pelo Ecossistema Scala"), new $c_T2("scalaDesc", "Uma linguagem moderna, expressiva e segura."), new $c_T2("scalaNativeDesc", "Compila Scala diretamente para c\u00f3digo de m\u00e1quina nativo para inicializa\u00e7\u00e3o instant\u00e2nea."), new $c_T2("benefit1Title", "Produtividade"), new $c_T2("benefit1Desc", "Excelente suporte de IDE e ferramentas."), new $c_T2("benefit2Title", "Modernidade"), new $c_T2("benefit2Desc", "Sintaxe concisa tipo Python com seguran\u00e7a est\u00e1tica."), new $c_T2("benefit3Title", "Pronto para GenAI"), new $c_T2("benefit3Desc", "Sistema de tipos forte reduz alucina\u00e7\u00f5es."), new $c_T2("benefit4Title", "Desempenho"), new $c_T2("benefit4Desc", "Velocidade nativa sem overhead da JVM."), new $c_T2("footerText", "Constru\u00eddo com \u2764\ufe0f usando Scala Native e sess\u00f5es de codifica\u00e7\u00e3o tarde da noite."), new $c_T2("viewOnGithub", "Ver no GitHub"), new $c_T2("latestVersion", "\u00daltima Vers\u00e3o:"), new $c_T2("supportedPlatforms", "Plataformas Suportadas"), new $c_T2("windowsNotSupported", "Suporte para Windows em breve!"), new $c_T2("licenseNotice", "C\u00f3digo licenciado sob MIT."), new $c_T2("trademarkPolicy", "Pol\u00edtica de Marcas"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Est\u00e1gio Alfa</strong>: Este projeto est\u00e1 atualmente em uma fase experimental. \u00c9 usado principalmente para fluxos de trabalho internos. Espere atualiza\u00e7\u00f5es frequentes e suporte limitado. Boa explora\u00e7\u00e3o! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Copiado!")])))), new $c_T2("de", $m_sci_Map$().eZ($m_sr_ScalaRunTime$().d(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Vollst\u00e4ndiger Kontextwechsel f\u00fcr Entwickler-Workflows"), new $c_T2("description", "Ein Befehlszeilen-Tool, das den nahtlosen Wechsel zwischen verschiedenen Entwicklungskontexten und KI-Assistenten-Konfigurationen erm\u00f6glicht und Ihre Projekte frei von werkzeugspezifischem Ballast h\u00e4lt."), new $c_T2("whyTitle", "Warum first?"), new $c_T2("whyHighlight", "Ihr Repository ist f\u00fcr <em>Ihren</em> Code, nicht f\u00fcr Konfigurationsdateien von Tools."), new $c_T2("whyText", "Die moderne Entwicklung hat eine unbequeme Realit\u00e4t normalisiert: Jedes Tool, das wir einf\u00fchren \u2013 IDEs, Linters, CI-Systeme und jetzt KI-Coding-Assistenten \u2013 hinterl\u00e4sst seine eigenen Spuren in unseren Repositories. Wenn Sie einen anderen KI-Assistenten ausprobieren m\u00f6chten, sollten Sie keine neuen Konfigurationsdateien in Ihr Repository committen m\u00fcssen."), new $c_T2("feature1Title", "Nicht-invasiv"), new $c_T2("feature1Text", "KI-Assistenten und Tools speichern ihre Konfigurationen au\u00dferhalb Ihres Repos."), new $c_T2("feature2Title", "Kontextwechsel"), new $c_T2("feature2Text", "Wechseln Sie ganze Entwicklungsumgebungen mit einem Befehl."), new $c_T2("feature3Title", "Remote-Kontexte"), new $c_T2("feature3Text", "Teilen Sie Teamkonfigurationen \u00fcber HTTP/HTTPS oder GitHub."), new $c_T2("quickStartTitle", "Schnellstart"), new $c_T2("step1Title", "Speichern Sie Ihren aktuellen Kontext"), new $c_T2("step2Title", "Laden Sie einen gespeicherten Kontext"), new $c_T2("step3Title", "Wechseln Sie zu einem anderen Setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackIntro", "Angetrieben vom Scala-\u00d6kosystem"), new $c_T2("scalaDesc", "Eine moderne, ausdrucksstarke und sichere Programmiersprache."), new $c_T2("scalaNativeDesc", "Kompiliert Scala direkt in nativen Maschinencode f\u00fcr sofortigen Start."), new $c_T2("benefit1Title", "Produktivit\u00e4t"), new $c_T2("benefit1Desc", "Hervorragende IDE-Unterst\u00fctzung und Tools."), new $c_T2("benefit2Title", "Modernit\u00e4t"), new $c_T2("benefit2Desc", "Pr\u00e4gnante, Python-\u00e4hnliche Syntax mit statischer Sicherheit."), new $c_T2("benefit3Title", "GenAI-Bereit"), new $c_T2("benefit3Desc", "Starkes Typsystem reduziert Halluzinationen."), new $c_T2("benefit4Title", "Leistung"), new $c_T2("benefit4Desc", "Native Geschwindigkeit ohne JVM-Overhead."), new $c_T2("footerText", "Erstellt mit \u2764\ufe0f unter Verwendung von Scala Native und n\u00e4chtlichen Coding-Sessions."), new $c_T2("viewOnGithub", "Auf GitHub ansehen"), new $c_T2("latestVersion", "Neueste Version:"), new $c_T2("supportedPlatforms", "Unterst\u00fctzte Plattformen"), new $c_T2("windowsNotSupported", "Windows-Unterst\u00fctzung kommt bald!"), new $c_T2("licenseNotice", "Code unter MIT lizenziert."), new $c_T2("trademarkPolicy", "Markenrichtlinie"), new $c_T2("alphaWarning", "\ud83d\udea7 <strong>Alpha-Phase</strong>: Dieses Projekt befindet sich derzeit in einer experimentellen Phase. Es wird haupts\u00e4chlich f\u00fcr interne Arbeitsabl\u00e4ufe verwendet. Erwarten Sie h\u00e4ufige Updates und begrenzten Support. Viel Spa\u00df beim Erkunden! \ud83d\udc09"), new $c_T2("copiedToClipboard", "Kopiert!")]))))])));
}
$p = $c_Lfirst_Translations$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Translations$;
/** @constructor */
function $h_Lfirst_Translations$() {
}
$h_Lfirst_Translations$.prototype = $p;
$p.rf = (function() {
  var this$1 = window.navigator.language;
  var browserLang = this$1.toLowerCase();
  return ((!(!browserLang.startsWith("pt"))) ? "pt-br" : ((!(!browserLang.startsWith("de"))) ? "de" : "en"));
});
$p.M = (function(key) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this.gI.cZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((lang) => $m_Lfirst_Translations$().i1.c7(lang, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Translations$().i1.e("en")))).c7(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => ("Missing key: " + key)))))), $m_s_None$());
});
var $d_Lfirst_Translations$ = new $TypeData().i($c_Lfirst_Translations$, "first.Translations$", ({
  eE: 1
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
  if ((!(!$m_jl_Utils$Cache$().i9.call(dict, encodedName)))) {
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
    $thiz.i5 = dict;
    $thiz.bV = (((1 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i5;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.i5);
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
    $thiz.i6 = dict;
    $thiz.bV = (((2 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i6;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.i6);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bV) << 24) >> 24) === 0)) {
    $thiz.i4 = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bV = (((4 | $thiz.bV) << 24) >> 24);
  }
  return $thiz.i4;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bV) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.i4);
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
  this.i5 = null;
  this.i6 = null;
  this.i4 = null;
  this.bV = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rp = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f1: 1
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
  f2: 1
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
  f7: 1
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
  this.i7 = null;
  this.ne = null;
  $n_jl_System$SystemProperties$ = this;
  this.i7 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.ne = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jv = (function(key, default$1) {
  if ((this.i7 !== null)) {
    var dict = this.i7;
    return ((!(!$m_jl_Utils$Cache$().i9.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.ne.jv(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  f8: 1
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
  this.i8 = false;
  this.nf = null;
  this.i8 = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.H = (function() {
  if ((!this.i8)) {
    this.go(null);
  }
  return this.nf;
});
$p.go = (function(o) {
  this.nf = o;
  this.i8 = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  fa: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.i9 = null;
  $n_jl_Utils$Cache$ = this;
  this.i9 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fc: 1
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
  fd: 1
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
$p.qR = (function(a, key) {
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
$p.p1 = (function(a, b) {
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
$p.jj = (function(a, b) {
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
$p.p2 = (function(a, b) {
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
$p.oY = (function(a, b) {
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
$p.oX = (function(a, b) {
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
$p.oZ = (function(a, b) {
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
$p.p0 = (function(a, b) {
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
  original.z(0, ret, 0, copyLength);
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
  original.z(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fe: 1
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
  return new $c_RTLong(this$1.sA(a.m, a.o, b.m, b.o), this$1.N);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.sz(a.m, a.o, b.m, b.o), this$1.N);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ri(a.m, a.o, b.m, b.o), this$1.N);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rh(a.m, a.o, b.m, b.o), this$1.N);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.px(value), this$1.N);
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
  return $m_RTLong$().py(this.m, this.o);
});
$p.tm = (function() {
  return ((this.m << 24) >> 24);
});
$p.tA = (function() {
  return ((this.m << 16) >> 16);
});
$p.tv = (function() {
  return this.m;
});
$p.tw = (function() {
  return this;
});
$p.tr = (function() {
  var lo = this.m;
  var hi = this.o;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.tq = (function() {
  var lo = this.m;
  return ((4.294967296E9 * this.o) + (lo >>> 0.0));
});
$p.to = (function(that) {
  return $m_RTLong$().pw(this.m, this.o, that.m, that.o);
});
$p.tn = (function(that) {
  return $m_RTLong$().pw(this.m, this.o, that.m, that.o);
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
      $thiz.N = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.N = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.N = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.N = 0;
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
      $thiz.N = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.N = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.N = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.N = (ahi & (((-1) + bhi) | 0));
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
      $thiz.N = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.N = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.N = quotHi;
    return quotLo;
  } else {
    $thiz.N = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.N = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.py = (function(lo, hi) {
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
$p.px = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.N = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.N = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.N = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.pw = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.rh = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.N = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.N = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.N = (-1);
      return (-1);
    } else {
      this.N = 0;
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
      var hi = this.N;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.N = hi$1;
      return lo$1;
    }
  }
});
$p.ri = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.N = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.N = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.sz = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.N = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.N = 0;
      return 0;
    } else {
      this.N = ahi;
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
      var hi = this.N;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.N = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.sA = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.N = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.N = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fh: 1
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
  this.ia = null;
  this.nj = null;
  $n_s_Array$EmptyArrays$ = this;
  this.ia = new $ac_I(0);
  this.nj = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fj: 1
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
  this.nk = null;
  this.gL = null;
  $n_s_PartialFunction$ = this;
  this.nk = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().nk));
  this.gL = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fr: 1
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
  this.np = null;
  $n_sc_ArrayOps$ = this;
  this.np = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().np));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.rx = (function(this$, f) {
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
  fz: 1
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
  fL: 1
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
    $m_sr_ScalaRunTime$().j6(xs, i, it.j());
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
    var destination = evidence$2.br($thiz.D());
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
  this.nw = null;
  this.fq = null;
  this.nw = head;
  this.fq = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.rM = (function() {
  return this.nw.T().n();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fU: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.nz = null;
  $n_sc_StringOps$ = this;
  this.nz = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().nz));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.r3 = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  g1: 1
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
  g5: 1
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
    return $m_jl_Integer$().pl($m_jl_System$SystemProperties$().jv("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
  this.nC = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.nC = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gd: 1
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
  this.iA = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.jk = (function() {
  var state = this.iA;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.T();
});
$p.jC = (function(state) {
  if ((this.iA !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.iA = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gh: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.nH = null;
  $n_sci_MapNode$ = this;
  this.nH = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gz: 1
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
$p.pA = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.z(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.z(srcPos, result, ix, length);
  return result;
});
$p.rX = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.z(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.z(ix, result, destPos, length);
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
$p.rQ = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dG((bitmap & (((-1) + bitpos) | 0)));
});
$p.cw = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.rQ(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gC: 1
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
  this.iE = null;
  this.bp = null;
  this.cr = null;
  this.eP = null;
  this.iF = null;
  this.nL = null;
  $n_sci_VectorStatics$ = this;
  this.iE = new $ac_O(0);
  this.bp = new ($d_O.r().r().C)(0);
  this.cr = new ($d_O.r().r().r().C)(0);
  this.eP = new ($d_O.r().r().r().r().C)(0);
  this.iF = new ($d_O.r().r().r().r().r().C)(0);
  this.nL = new ($d_O.r().r().r().r().r().r().C)(0);
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
  a.z(0, ac, 0, alen);
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
  a.z(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.jn = (function(level, a, f) {
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
      this.jn(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gT: 1
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
$p.rt = (function(k, h) {
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
  hb: 1
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
$p.oL = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  hh: 1
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
    curOther.z(0, newOther, 0, curLen);
    $thiz.fF = newOther;
    return newOther;
  }
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__($thiz, outer, first, other, size) {
  $thiz.fE = first;
  $thiz.fF = other;
  $thiz.dA = size;
  $thiz.nX = outer;
  return $thiz;
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.fE = null;
  this.fF = null;
  this.dA = 0;
  this.nX = null;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.su = (function(r) {
  var sz = this.dA;
  if ((sz === 0)) {
    this.fE = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[(((-1) + sz) | 0)] = r;
  }
  this.dA = ((1 + sz) | 0);
});
$p.sO = (function(n) {
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
  this.nY = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.nY = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  ho: 1
}));
var $n_s_concurrent_BatchingExecutorStatics$;
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
  }
  return $n_s_concurrent_BatchingExecutorStatics$;
}
function $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor($thiz) {
  if ((!$thiz.iO)) {
    $thiz.iP = $m_sjs_concurrent_JSExecutionContext$().o9;
    $thiz.iO = true;
  }
  return $thiz.iP;
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$() {
  this.iP = null;
  this.eS = null;
  this.iO = false;
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
$p.jx = (function() {
  return ((!this.iO) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.iP);
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  hp: 1
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
  this.o0 = null;
  this.o2 = null;
  this.o1 = null;
  this.iQ = null;
  this.o3 = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().eZ(new $c_sjsr_WrappedVarArgs([new $c_T2($d_Z.l(), $d_jl_Boolean.l()), new $c_T2($d_B.l(), $d_jl_Byte.l()), new $c_T2($d_C.l(), $d_jl_Character.l()), new $c_T2($d_S.l(), $d_jl_Short.l()), new $c_T2($d_I.l(), $d_jl_Integer.l()), new $c_T2($d_J.l(), $d_jl_Long.l()), new $c_T2($d_F.l(), $d_jl_Float.l()), new $c_T2($d_D.l(), $d_jl_Double.l()), new $c_T2($d_V.l(), $d_jl_Void.l())]));
  this.o0 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2$2);
  }));
  this.o2 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.o1 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  this.pf(this.o1);
  this.iQ = this.rq(new $c_s_concurrent_Future$$anon$4());
  this.o3 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2$1) => $m_s_concurrent_Future$().iQ));
  this.pf(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.rq = (function(exception) {
  return $m_s_concurrent_Promise$().rr(exception);
});
$p.pf = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  hr: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.t8(result)) {
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
$p.rr = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  hw: 1
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
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.pZ()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  hx: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.ro(x, y) : ((x instanceof $Char) ? this.rm(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.ro = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rn(xn, y);
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
$p.rn = (function(xn, yn) {
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
$p.rm = (function(xc, y) {
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
  i5: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  ia: 1
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
$p.j6 = (function(xs, idx, value) {
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
$p.iY = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bG(), (x.bk() + "("), ",", ")");
});
$p.d = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  ic: 1
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
  return this.qQ((hash ^ length));
});
$p.qQ = (function(h0) {
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
    var lo = this$1.px(dv);
    var hi = this$1.N;
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
$p.Y = (function(x) {
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
  ie: 1
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
  ig: 1
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
  this.o9 = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.o9 = $m_sjs_concurrent_QueueExecutionContext$().qM();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  ih: 1
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
$p.qM = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  ii: 1
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
$p.pT = (function(p) {
  return $m_sjs_js_Thenable$ThenableOps$().t4(p);
});
var $d_sjs_js_Thenable$Implicits$ = new $TypeData().i($c_sjs_js_Thenable$Implicits$, "scala.scalajs.js.Thenable$Implicits$", ({
  ip: 1
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
$p.t4 = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().ox(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  iq: 1
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
$p.ox = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  it: 1
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
$p.sX = (function(interval, body) {
  return setTimeout((() => {
    body.T();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  iu: 1
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
$p.t5 = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gZ;
  } else {
    var result = [];
    seq.bF(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  iF: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().og ? $c_jl_Throwable.prototype.eX.call($thiz) : $thiz);
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
  iJ: 1
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
$p.pU = (function(x, y, seed) {
  var h = seed;
  h = this.f(h, $f_T__hashCode__I("Tuple2"));
  h = this.f(h, x);
  h = this.f(h, y);
  return this.G(h, 2);
});
$p.cy = (function(x, seed, ignorePrefix) {
  var arr = x.bi();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.bk());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.f(h, $f_T__hashCode__I(x.bk()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.f(h, $m_sr_Statics$().Y(x.bj(i)));
      i = ((1 + i) | 0);
    }
    return this.G(h, arr);
  }
});
$p.k1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.n();
  while (iterator.r()) {
    var x = iterator.j();
    var h = $m_sr_Statics$().Y(x);
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
$p.ss = (function(xs, seed) {
  var it = xs.n();
  var h = seed;
  if ((!it.r())) {
    return this.G(h, 0);
  }
  var x0 = it.j();
  if ((!it.r())) {
    return this.G(this.f(h, $m_sr_Statics$().Y(x0)), 1);
  }
  var x1 = it.j();
  var initial = $m_sr_Statics$().Y(x0);
  h = this.f(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().Y(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.r()) {
    h = this.f(h, prev);
    var hash = $m_sr_Statics$().Y(it.j());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.f(h, hash);
      i = ((1 + i) | 0);
      while (it.r()) {
        h = this.f(h, $m_sr_Statics$().Y(it.j()));
        i = ((1 + i) | 0);
      }
      return this.G(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bI(this.f(this.f(h0, rangeDiff), prev));
});
$p.oA = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().c6(a);
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().Y($m_sr_ScalaRunTime$().eg(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Y($m_sr_ScalaRunTime$().eg(a, 0));
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Y($m_sr_ScalaRunTime$().eg(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().Y($m_sr_ScalaRunTime$().eg(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().Y($m_sr_ScalaRunTime$().eg(a, i)));
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
$p.sw = (function(start, step, last, seed) {
  return this.bI(this.f(this.f(this.f(seed, start), step), last));
});
$p.rR = (function(a, seed) {
  var h = seed;
  var l = a.v();
  switch (l) {
    case 0: {
      return this.G(h, 0);
      break;
    }
    case 1: {
      return this.G(this.f(h, $m_sr_Statics$().Y(a.B(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Y(a.B(0));
      h = this.f(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Y(a.B(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.f(h, prev);
        var hash = $m_sr_Statics$().Y(a.B(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.f(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.f(h, $m_sr_Statics$().Y(a.B(i)));
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
$p.s5 = (function(xs, seed) {
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
    var hash = $m_sr_Statics$().Y(head);
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
  return ((rangeState === 2) ? this.sw(initial, rangeDiff, prev, seed) : this.G(h, n));
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
$p.oB = (function(a, seed) {
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
$p.oC = (function(a, seed) {
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
$p.oD = (function(a, seed) {
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
$p.oE = (function(a, seed) {
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
$p.oF = (function(a, seed) {
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
$p.oG = (function(a, seed) {
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
  this.kN = null;
  this.kM = null;
  this.hu = false;
  this.kM = onAccessAfterKilled;
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
  return this.kN;
});
$p.oN = (function(x$0) {
  this.kN = x$0;
});
$p.pz = (function(subscription) {
  if (this.hu) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.kM.T();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.po = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.hu = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  d6: 1,
  bi: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$aria$(outer) {
  this.lb = null;
  this.lc = false;
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
$p.s4 = (function() {
  if ((!this.lc)) {
    this.lb = new $c_Lcom_raquo_laminar_keys_AriaAttr("label", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.lc = true;
  }
  return this.lb;
});
var $d_Lcom_raquo_laminar_api_Laminar$aria$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$aria$, "com.raquo.laminar.api.Laminar$aria$", ({
  dr: 1,
  dA: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lu = null;
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
  return this.lu;
});
$p.oN = (function(x$0) {
  this.lu = x$0;
});
$p.po = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pz = (function(subscription) {
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
$p.jh = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dz: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_AriaAttr(suffix, codec) {
  this.mG = null;
  this.hE = null;
  this.mG = codec;
  this.hE = ("aria-" + suffix);
}
$p = $c_Lcom_raquo_laminar_keys_AriaAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_AriaAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_AriaAttr() {
}
$h_Lcom_raquo_laminar_keys_AriaAttr.prototype = $p;
$p.a2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sQ(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_AriaAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_AriaAttr, "com.raquo.laminar.keys.AriaAttr", ({
  dT: 1,
  ae: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.mH = null;
  this.mI = null;
  this.gC = null;
  this.hF = null;
  this.mH = getRawDomValue;
  this.mI = setRawDomValue;
  this.gC = separator;
  this.hF = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.A = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().b.qq(), $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(items, this.gC)));
});
$p.qn = (function(value, mapper) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, mapper.jZ(value, this.gC));
});
$p.qo = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.dQ(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = valueMapper.jZ(nextRawItems, this.gC);
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
                currentLast.Z = newElem;
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
                    currentLast.Z = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.p();
                  }
                  nextToCopy = next.p();
                  next = next.p();
                }
              }
              if ((!nextToCopy.c())) {
                currentLast.Z = nextToCopy;
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
                currentLast$1.Z = newElem$1;
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
                    currentLast$1.Z = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.p();
                  }
                  nextToCopy$1 = next$1.p();
                  next$1 = next$1.p();
                }
              }
              if ((!nextToCopy$1.c())) {
                currentLast$1.Z = nextToCopy$1;
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
  dU: 1,
  ae: 1
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
$p.oU = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(domValue, this.hG);
});
$p.oW = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.hG, "");
});
$p.jh = (function(domValue) {
  return this.oU(domValue);
});
$p.g4 = (function(scalaValue) {
  return this.oW(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  dW: 1,
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
$p.t6 = (function(items, separator) {
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
        t.Z = nx;
      }
      t = nx;
    }
    rest = rest.p();
  }
  return ((h === null) ? $m_sci_Nil$() : h);
});
$p.jZ = (function(value, separator) {
  return this.t6(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringSeqValueMapper$", ({
  dX: 1,
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
$p.jZ = (function(value, separator) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().hd(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  dY: 1,
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
  e1: 1,
  ae: 1
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
$p.a2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pL(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  e2: 1,
  ae: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.e0 = null;
  this.mJ = null;
  this.e0 = name;
  this.mJ = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.a2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().sT(element, prop, value$2);
  })));
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bo: 1,
  ae: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.hJ = null;
  this.hI = null;
  this.gE = null;
  this.gF = null;
  this.hJ = localName;
  this.hI = codec;
  var this$1 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.H() + ":") + localName)));
  this.gE = (this$1.c() ? localName : this$1.H());
  this.gF = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sc(namespacePrefix.H())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.a2 = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pM(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  e4: 1,
  ae: 1
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
$p.bE = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  ee: 1,
  R: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.mV = null;
  this.mV = f$2;
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
$p.bE = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.mV.e(element);
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
  ef: 1,
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
  ei: 1,
  eg: 1
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
  ek: 1,
  ej: 1
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
  this.mW = null;
  this.mW = render$2;
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
$p.j7 = (function(value) {
  return this.mW.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  en: 1,
  el: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.j8(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().re($thiz.a1(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.hY = null;
  this.hY = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.i = (function(modifiers) {
  var element = this.qT();
  modifiers.bF(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.bE(element);
  })));
  return element;
});
$p.qT = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().ra(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  ez: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.hZ = null;
  this.hZ = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.h5 = (function(modifiers) {
  var element = this.qU();
  modifiers.bF(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.bE(element);
  })));
  return element;
});
$p.qU = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().oS(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eA: 1,
  br: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.gJ) << 24) >> 24) === 0)) {
    $thiz.i2 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.gJ = (((32 | $thiz.gJ) << 24) >> 24);
  }
  return $thiz.i2;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.gJ) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.i2);
}
/** @constructor */
function $c_jl_Character$() {
  this.i2 = null;
  this.gJ = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.t7 = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rg = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().qR($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
  eL: 1,
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
$p.pl = (function(s, radix, overflowBarrier) {
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
    var digit = character.rg(s.charCodeAt(i), radix);
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
  eQ: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
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
$p.sd = (function(value, offset, count) {
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
  f4: 1,
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
  $thiz.nh = s;
  $thiz.fm = e;
  $thiz.ni = writableStackTrace;
  if (writableStackTrace) {
    $thiz.eX();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nh = null;
    this.fm = null;
    this.ni = false;
    this.ng = null;
    this.e1 = null;
  }
  jD(cause) {
    this.fm = cause;
    return this;
  }
  g8() {
    return this.nh;
  }
  eX() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.U : this);
    this.ng = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  h9() {
    if ((this.e1 === null)) {
      if (this.ni) {
        this.e1 = $m_jl_StackTrace$().rp(this.ng);
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
  $thiz.X = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.X = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.g0 = (function(expect, update) {
  if (Object.is(expect, this.X)) {
    this.X = update;
    return true;
  } else {
    return false;
  }
});
$p.x = (function() {
  return ("" + this.X);
});
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().j6(dest, j, $m_sr_ScalaRunTime$().eg(src, i));
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
$p.p8 = (function(it, evidence$3) {
  var n = it.D();
  if ((n > (-1))) {
    var elements = evidence$3.br(n);
    var iterator = it.n();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().j6(elements, i, iterator.j());
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
    src.z(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.p4 = (function(xs, ys) {
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
  fi: 1,
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
$p.ti = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().nQ : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.qK = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  fq: 1,
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
  gm: 1,
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
    $thiz.b1($m_scm_Buffer$().p9(elems));
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
  var tl = $thiz.nZ;
  var b = tl.H();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.su(runnable);
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
  this.iR = null;
  this.iS = null;
  this.iR = first;
  this.iS = rest;
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
  this.qc = null;
  this.ql = null;
  this.qd = null;
  this.qg = null;
  this.qh = null;
  this.qf = null;
  this.qe = null;
  this.qb = null;
  this.qm = null;
  this.q9 = null;
  this.qk = null;
  this.qa = null;
  this.qi = null;
  this.qj = null;
  $n_s_reflect_ClassTag$ = this;
  this.qc = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.ql = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qd = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qg = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qh = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qf = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qe = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qb = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qm = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.q9 = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qk = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qa = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qi = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qj = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.ow = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hB: 1,
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
  i4: 1,
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
  i6: 1,
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
$p.rT = (function(value) {
  this.gY = value;
  this.gX = true;
  return value;
});
$p.x = (function() {
  return ("LazyRef " + (this.gX ? ("of: " + this.gY) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  i7: 1,
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
  ib: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.og = false;
  this.og = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  iI: 1,
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
  this.oh = 0;
  this.iT = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ap = $f_T__hashCode__I("Seq");
  this.dD = $f_T__hashCode__I("Map");
  this.oh = $f_T__hashCode__I("Set");
  this.iT = this.k1($m_sci_Nil$(), this.dD);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cm = (function(x, y) {
  return this.pU($m_sr_Statics$().Y(x), $m_sr_Statics$().Y(y), (-889275714));
});
$p.pJ = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.rR(xs, this.ap) : ((xs instanceof $c_sci_List) ? this.s5(xs, this.ap) : this.ss(xs, this.ap)));
});
$p.s8 = (function(xs) {
  if (xs.c()) {
    return this.iT;
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
  iL: 1,
  iK: 1
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
$p.qJ = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cm(k, v);
  this.h0 = ((this.h0 + h) | 0);
  this.h1 = (this.h1 ^ h);
  this.h2 = Math.imul(this.h2, (1 | h));
  this.h3 = ((1 + this.h3) | 0);
});
$p.eT = (function(v1, v2) {
  this.qJ(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  iM: 1,
  aR: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.hi = null;
  this.k2 = null;
  this.k3 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hi = $m_scm_Buffer$().oz($m_sr_ScalaRunTime$().d(new ($d_F1.r().C)([])));
  this.k2 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.ei(err) + "\n") + this.rI(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.k3 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
  }));
  this.sy(this.k2);
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
  return (($objectGetClass(e).jw() + ": ") + errorMessage);
});
$p.rI = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().ti(err.h9()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.r1 = (function(message, cause) {
  return ((message + "; cause: ") + (cause.c() ? $m_s_None$() : new $c_s_Some(this.ei(cause.H()))));
});
$p.sy = (function(fn) {
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
      var x$2 = this.k3;
      if (((x0 === null) ? (x$2 === null) : x0.q(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().sX(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cL: 1,
  hy: 1,
  hz: 1
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
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().q0(onNext, $m_s_PartialFunction$().gL, true), owner);
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
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.j7(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).bF(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.l5 = null;
  this.l6 = false;
  this.l7 = null;
  this.l8 = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.em = (function() {
  if ((!this.l6)) {
    this.l5 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.l6 = true;
  }
  return this.l5;
});
$p.sr = (function() {
  if ((!this.l8)) {
    this.l7 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.l8 = true;
  }
  return this.l7;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dp: 1,
  aI: 1,
  dF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$2() {
  this.l9 = null;
  this.la = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$2() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = $p;
$p.em = (function() {
  if ((!this.la)) {
    this.l9 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.la = true;
  }
  return this.l9;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$2, "com.raquo.laminar.api.Laminar$$anon$2", ({
  dq: 1,
  aI: 1,
  dG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(fn$3, outer) {
  this.mN = null;
  this.mN = fn$3;
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
$p.bE = (function(element) {
  this.fW(element);
});
$p.fW = (function(element) {
  return this.mN.e(element);
});
var $d_Lcom_raquo_laminar_modifiers_Binder$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Binder$$anon$1, "com.raquo.laminar.modifiers.Binder$$anon$1", ({
  e8: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.mO = null;
  this.hL = null;
  this.mO = key;
  this.hL = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.bE = (function(element) {
  if ((!this.hL.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.mO, null, this.hL, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  e9: 1,
  R: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.eC = null;
  this.hM = null;
  this.hN = null;
  this.eC = eventProcessor;
  this.hM = ((ev) => {
    var processor = eventProcessor.ez;
    var this$2 = processor.e(ev);
    if ((!this$2.c())) {
      callback.e(this$2.H());
    }
  });
  this.hN = (() => {
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
$p.bE = (function(element) {
  this.qS(element, false);
});
$p.qS = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qw(element.a1(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.hK, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().sE(element.a1(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tb(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bq(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pQ(element.bq(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.x = (function() {
  return (("EventListener(" + this.eC.d2.eB) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  ea: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.mQ = null;
  this.mR = null;
  this.mP = null;
  this.mQ = key;
  this.mR = value;
  this.mP = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.bE = (function(element) {
  this.mP.j2(element, this.mQ, this.mR);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  eb: 1,
  R: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.mS = null;
  this.mU = null;
  this.mT = null;
  this.mS = key;
  this.mU = values;
  this.mT = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.bE = (function(element) {
  this.fW(element);
});
$p.fW = (function(element) {
  element.pt(this.mS);
  var observable = this.mU;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.mT.j2(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pR(element.bq(), observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  ec: 1,
  R: 1,
  aJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.hW = null;
  this.n7 = null;
  this.n8 = null;
  this.n7 = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().s3(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.n8 = container;
  this.sb();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.bq = (function() {
  return this.hW;
});
$p.j8 = (function(x$0) {
  this.hW = x$0;
});
$p.sb = (function() {
  this.hW.oj();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(this, this.n7, (void 0));
});
$p.a1 = (function() {
  return this.n8;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eu: 1,
  ap: 1,
  aK: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ey)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a3.Z) {
    return ($thiz.a3.Q().jw() + "[]");
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
  this.i3 = null;
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
$p.jw = (function() {
  if ((this.i3 === null)) {
    this.i3 = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.i3;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eM: 1,
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
  this.q8 = null;
  $n_s_Predef$ = this;
  this.q8 = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.sJ = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  ft: 1,
  fm: 1,
  fn: 1
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
  return this.fo.jo(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b3 = (function() {
  return this.fo.hc($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cS = (function(elems) {
  return this.fo.jo(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
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
  return new $c_sc_Iterator$ConcatIterator($thiz).jd(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().O : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
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
  this.O = null;
  $n_sc_Iterator$ = this;
  this.O = new $c_sc_Iterator$$anon$19();
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
  fO: 1,
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
  $thiz.ip = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.ip = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aC = (function(it) {
  return this.ip.aC(it);
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
$p.pa = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.n()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jq(it))));
});
$p.b3 = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().pa(it$2$2))));
});
$p.aC = (function(source) {
  return this.pa(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  g2: 1,
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
  this.bw = null;
  this.aN = 0;
  this.bl = 0;
  this.a7 = dataMap;
  this.af = nodeMap;
  this.aq = content;
  this.bw = originalHashes;
  this.aN = size;
  this.bl = cachedJavaKeySetHashCode;
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
  return this.bl;
});
$p.dL = (function(index) {
  return this.aq.a[(index << 1)];
});
$p.cU = (function(index) {
  return this.aq.a[((1 + (index << 1)) | 0)];
});
$p.pg = (function(index) {
  return new $c_T2(this.aq.a[(index << 1)], this.aq.a[((1 + (index << 1)) | 0)]);
});
$p.g7 = (function(index) {
  return this.bw.a[index];
});
$p.cT = (function(index) {
  return this.aq.a[(((((-1) + this.aq.a.length) | 0) - index) | 0)];
});
$p.j1 = (function(key, originalHash, keyHash, shift) {
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
    return this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).j1(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.ju = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    return ($m_sr_BoxesRunTime$().s(key, this.dL(index)) ? this.cU(index) : f.T());
  } else {
    return (((this.af & bitpos) !== 0) ? this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).ju(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.T());
  }
});
$p.je = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    return ((this.bw.a[index] === originalHash) && $m_sr_BoxesRunTime$().s(key, this.dL(index)));
  } else {
    return (((this.af & bitpos) !== 0) && this.cT($m_sci_Node$().cw(this.af, mask, bitpos)).je(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.pW = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().el(keyHash, shift);
  var bitpos = $m_sci_Node$().dH(mask);
  if (((this.a7 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cw(this.a7, mask, bitpos);
    var key0 = this.dL(index);
    var key0UnimprovedHash = this.g7(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().s(key0, key))) {
      if (replaceValue) {
        var value0 = this.cU(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.r8(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cU(index);
      var key0Hash = $m_sc_Hashing$().cj(key0UnimprovedHash);
      return this.r6(bitpos, key0Hash, this.jK(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.af & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cw(this.af, mask, bitpos);
    var subNode = this.cT(index$2);
    var subNodeNew$2 = subNode.pX(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.r7(bitpos, subNode, subNodeNew$2));
  } else {
    return this.r5(bitpos, key, originalHash, keyHash, value);
  }
});
$p.jK = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().jr(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().el(keyHash0, shift);
    var mask1 = $m_sci_Node$().el(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dH(mask0) | $m_sci_Node$().dH(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().dH(mask0);
      var node = this.jK(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().ia, node.aM(), node.dI());
    }
  }
});
$p.jz = (function() {
  return (this.af !== 0);
});
$p.jM = (function() {
  return $m_jl_Integer$().dG(this.af);
});
$p.ha = (function() {
  return (this.a7 !== 0);
});
$p.jS = (function() {
  return $m_jl_Integer$().dG(this.a7);
});
$p.g2 = (function(bitpos) {
  return $m_jl_Integer$().dG((this.a7 & (((-1) + bitpos) | 0)));
});
$p.jN = (function(bitpos) {
  return $m_jl_Integer$().dG((this.af & (((-1) + bitpos) | 0)));
});
$p.r8 = (function(bitpos, newKey, newValue) {
  var dataIx = this.g2(bitpos);
  var idx = (dataIx << 1);
  var src = this.aq;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.z(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, dst, this.bw, this.aN, this.bl);
});
$p.r7 = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aq.a.length) | 0) - this.jN(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.z(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, dst, this.bw, ((((this.aN - oldNode.aM()) | 0) + newNode.aM()) | 0), ((((this.bl - oldNode.dI()) | 0) + newNode.dI()) | 0));
});
$p.r5 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.g2(bitpos);
  var idx = (dataIx << 1);
  var src = this.aq;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.z(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.z(idx, dst, destPos, length);
  var dstHashes = this.rX(this.bw, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a7 | bitpos), this.af, dst, dstHashes, ((1 + this.aN) | 0), ((this.bl + keyHash) | 0));
});
$p.sa = (function(bitpos, keyHash, node) {
  var dataIx = this.g2(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aq.a.length) | 0) - this.jN(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.z(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.z(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.z(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pA(this.bw, dataIx);
  this.a7 = (this.a7 ^ bitpos);
  this.af = (this.af | bitpos);
  this.aq = dst;
  this.bw = dstHashes;
  this.aN = (((((-1) + this.aN) | 0) + node.aM()) | 0);
  this.bl = ((((this.bl - keyHash) | 0) + node.dI()) | 0);
  return this;
});
$p.r6 = (function(bitpos, keyHash, node) {
  var dataIx = this.g2(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aq.a.length) | 0) - this.jN(bitpos)) | 0);
  var src = this.aq;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.z(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.z(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.z(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pA(this.bw, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a7 ^ bitpos), (this.af | bitpos), dst, dstHashes, (((((-1) + this.aN) | 0) + node.aM()) | 0), ((((this.bl - keyHash) | 0) + node.dI()) | 0));
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
    } else if ((((((this.bl === that.bl) && (this.af === that.af)) && (this.a7 === that.a7)) && (this.aN === that.aN)) && $m_ju_Arrays$().jj(this.bw, that.bw))) {
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
$p.oQ = (function() {
  var this$1 = this.aq;
  var contentClone = this$1.h();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dG(this.a7) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oR();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a7, this.af, contentClone, this.bw.h(), this.aN, this.bl);
});
$p.oR = (function() {
  return this.oQ();
});
$p.pX = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.pW(key, value, originalHash, hash, shift, replaceValue);
});
$p.jt = (function(index) {
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
  this.iu = 0;
  this.de = 0;
  this.ag = null;
  this.iu = originalHash;
  this.de = hash;
  this.ag = content;
  $m_s_Predef$().sJ((this.ag.v() >= 2));
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
$p.j1 = (function(key, originalHash, hash, shift) {
  var this$1 = this.rE(key, originalHash, hash, shift);
  if (this$1.c()) {
    $m_sc_Iterator$().O.j();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.H();
  }
});
$p.rE = (function(key, originalHash, hash, shift) {
  if ((this.de === hash)) {
    var index = this.f1(key);
    return ((index >= 0) ? new $c_s_Some(this.ag.B(index).aW()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.ju = (function(key, originalHash, hash, shift, f) {
  if ((this.de === hash)) {
    var x1 = this.f1(key);
    return ((x1 === (-1)) ? f.T() : this.ag.B(x1).aW());
  } else {
    return f.T();
  }
});
$p.je = (function(key, originalHash, hash, shift) {
  return ((this.de === hash) && (this.f1(key) >= 0));
});
$p.pX = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.f1(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ag.B(index).aW(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ag.dR(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ag.dF(new $c_T2(key, value))));
});
$p.jz = (function() {
  return false;
});
$p.jM = (function() {
  return 0;
});
$p.cT = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ha = (function() {
  return true;
});
$p.jS = (function() {
  return this.ag.v();
});
$p.dL = (function(index) {
  return this.ag.B(index).b0();
});
$p.cU = (function(index) {
  return this.ag.B(index).aW();
});
$p.pg = (function(index) {
  return this.ag.B(index);
});
$p.g7 = (function(index) {
  return this.iu;
});
$p.eh = (function(f) {
  this.ag.bF(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
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
$p.oR = (function() {
  return new $c_sci_HashCollisionMapNode(this.iu, this.de, this.ag);
});
$p.jt = (function(index) {
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
  this.iv = null;
  $n_sci_HashMap$ = this;
  this.iv = new $c_sci_HashMap($m_sci_MapNode$().nH);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.rz = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().j0(source).jW());
});
$p.aC = (function(it) {
  return this.rz(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  g9: 1,
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
  this.nE = null;
  this.nF = null;
  this.nE = head;
  this.nF = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.u = (function() {
  return this.nE;
});
$p.aX = (function() {
  return this.nF;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  gj: 1,
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
$p.jA = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
});
$p.aX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.u = (function() {
  this.jA();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  gk: 1,
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
  return new $c_sci_MapBuilderImpl().ok(it).pE();
});
$p.aC = (function(it) {
  return this.eZ(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  go: 1,
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
$p.rB = (function(it) {
  var k = it.D();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).on(it);
});
$p.b3 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.aC = (function(source) {
  return this.rB(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  h6: 1,
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
  this.nX = null;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__(this, outer, runnable, $m_s_concurrent_BatchingExecutorStatics$().nY, 1);
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
      this.sO(1024);
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
  hn: 1,
  aN: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.X = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.f6 = (function(owner) {
  var c = this.X;
  var current = c;
  var target = c;
  while (true) {
    var value = target.X;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.g0(current, target)) {
        return target;
      } else {
        current = this.X;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target = value.X;
    } else {
      owner.ta(value);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hA)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.o4 = null;
  this.o4 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.T = (function() {
  return (0, this.o4)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  hZ: 1,
  cC: 1,
  aQ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.o5 = null;
  this.o5 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.e = (function(x0) {
  return (0, this.o5)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  i0: 1,
  cD: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.o6 = null;
  this.o6 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.eT = (function(x0, x1) {
  return (0, this.o6)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  i1: 1,
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
  i9: 1,
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
$p.rC = (function(f) {
  return (() => f.T());
});
$p.pd = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  il: 1,
  im: 1,
  io: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iH)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.k6 = null;
  this.k4 = false;
  this.hj = null;
  this.k5 = null;
  this.k6 = onNextParam$2;
  this.k4 = handleObserverErrors$3;
  this.hj = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.k5 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.dN = (function() {
  return this.k5;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.jP = (function(nextValue) {
  try {
    this.k6.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.k4) {
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
    this.jP(nextValue$2);
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
  this.k7 = false;
  this.k8 = null;
  this.hk = onTryParam$2;
  this.k7 = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.k8 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.dN = (function() {
  return this.k8;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.jP = (function(nextValue) {
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
    if ((this.k7 && nextValue.pk())) {
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
  this.lk = null;
  this.ll = false;
  this.lo = null;
  this.lp = false;
  this.le = null;
  this.lf = false;
  this.lg = null;
  this.lh = false;
  this.li = null;
  this.lj = false;
  this.lm = null;
  this.ln = false;
  this.lq = null;
  this.lr = false;
  this.ls = null;
  this.lt = false;
  this.ld = null;
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
$p.jR = (function() {
  if ((!this.ll)) {
    this.lk = new $c_Lcom_raquo_laminar_tags_SvgTag("path", false);
    this.ll = true;
  }
  return this.lk;
});
$p.pS = (function() {
  if ((!this.lp)) {
    this.lo = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lp = true;
  }
  return this.lo;
});
$p.jg = (function() {
  if ((!this.lf)) {
    this.le = new $c_Lcom_raquo_laminar_keys_SvgAttr("d", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lf = true;
  }
  return this.le;
});
$p.p5 = (function() {
  if ((!this.lh)) {
    this.lg = new $c_Lcom_raquo_laminar_keys_SvgAttr("fill", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lh = true;
  }
  return this.lg;
});
$p.rO = (function() {
  if ((!this.lj)) {
    this.li = new $c_Lcom_raquo_laminar_keys_SvgAttr("height", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lj = true;
  }
  return this.li;
});
$p.pO = (function() {
  if ((!this.ln)) {
    this.lm = new $c_Lcom_raquo_laminar_keys_SvgAttr("style", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.ln = true;
  }
  return this.lm;
});
$p.tg = (function() {
  if ((!this.lr)) {
    this.lq = new $c_Lcom_raquo_laminar_keys_SvgAttr("viewBox", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lr = true;
  }
  return this.lq;
});
$p.th = (function() {
  if ((!this.lt)) {
    this.ls = new $c_Lcom_raquo_laminar_keys_SvgAttr("width", $m_Lcom_raquo_laminar_codecs_package$().bb, $m_s_None$());
    this.lt = true;
  }
  return this.ls;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  ds: 1,
  dK: 1,
  dC: 1,
  dE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.lv = null;
  this.lw = false;
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
$p.iV = (function() {
  if ((!this.lw)) {
    this.lv = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(this);
    this.lw = true;
  }
  return this.lv;
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
  this.mD = null;
  this.mF = false;
  this.mE = null;
  this.hD = null;
  this.mD = initialContext;
  this.mF = preferStrictMode;
  this.mE = insertFn;
  this.hD = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.fW = (function(element) {
  var this$1 = this.mD;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().sK(element, this.mF, this.hD) : this$1.H());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.mE.j2(insertContext, mountContext.hK, this.hD)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gq(element.bq(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.bE = (function(element) {
  this.fW(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  dO: 1,
  R: 1,
  dS: 1,
  dP: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.hP = null;
  this.hQ = null;
  this.hP = $m_s_None$();
  this.hQ = $m_Lcom_raquo_laminar_DomApi$().r9(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.eU = (function() {
  return this.hP;
});
$p.dP = (function(maybeNextParent) {
  this.hP = maybeNextParent;
});
$p.dT = (function(maybeNextParent) {
});
$p.bE = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.a1 = (function() {
  return this.hQ;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eo: 1,
  ap: 1,
  R: 1,
  av: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.hX = null;
  this.gG = null;
  this.hX = $m_s_None$();
  this.gG = $m_Lcom_raquo_laminar_DomApi$().rb(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.eU = (function() {
  return this.hX;
});
$p.dP = (function(maybeNextParent) {
  this.hX = maybeNextParent;
});
$p.dT = (function(maybeNextParent) {
});
$p.bE = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.t3 = (function() {
  return this.gG.data;
});
$p.a1 = (function() {
  return this.gG;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  ev: 1,
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
  eJ: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eR)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eU)));
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
$p.or = (function(str) {
  var str$1 = $m_jl_String$().sd(str, 0, str.a.length);
  this.t = (("" + this.t) + str$1);
  return this;
});
$p.x = (function() {
  return this.t;
});
$p.v = (function() {
  return this.t.length;
});
$p.oK = (function(index) {
  return this.t.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  f5: 1,
  aL: 1,
  bv: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f9)));
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
  fg: 1,
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
$p.j3 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.j3(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fs: 1,
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
$p.jd = (function(xs) {
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
  this.ip = null;
  this.nx = null;
  this.ny = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nx = $ct_O__(new $c_O());
  this.ny = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().nx));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  fW: 1,
  fX: 1,
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
$p.oz = (function(elems) {
  return this.eJ.cS(elems);
});
$p.p9 = (function(it) {
  return this.eJ.aC(it);
});
$p.b3 = (function() {
  return this.eJ.b3();
});
$p.aC = (function(source) {
  return this.p9(source);
});
$p.cS = (function(elems) {
  return this.oz(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cu(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.g5(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bh(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bh(0) === 0);
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
$p.rA = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aC.call(this, it));
});
$p.aC = (function(it) {
  return this.rA(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  ge: 1,
  fN: 1,
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
  this.iz = null;
  $n_sci_LazyList$ = this;
  this.iz = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).p6();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cS = (function(elems) {
  return this.jq(elems);
});
$p.sP = (function(ll, n) {
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
$p.jq = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.D() === 0) ? this.iz : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pG(coll.n()))))));
});
$p.pH = (function(it, suffix) {
  return (it.r() ? new $c_sci_LazyList$State$Cons(it.j(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pH(it, suffix))))) : suffix.T());
});
$p.pG = (function(it) {
  return (it.r() ? new $c_sci_LazyList$State$Cons(it.j(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pG(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.b3 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.aC = (function(source) {
  return this.jq(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gf: 1,
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
  this.nR = null;
  this.fA = outer;
  this.nR = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.qD = (function(x) {
  this.fA.b2(x);
  return this;
});
$p.qt = (function(xs) {
  this.fA.b1(xs);
  return this;
});
$p.b4 = (function(size) {
  this.fA.b4(size);
});
$p.b9 = (function() {
  return this.nR.e(this.fA.b9());
});
$p.b1 = (function(elems) {
  return this.qt(elems);
});
$p.b2 = (function(elem) {
  return this.qD(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  h3: 1,
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
$p.qE = (function(elem) {
  this.dx.b2(elem);
  return this;
});
$p.qu = (function(xs) {
  this.dx.b1(xs);
  return this;
});
$p.b1 = (function(elems) {
  return this.qu(elems);
});
$p.b2 = (function(elem) {
  return this.qE(elem);
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
  hv: 1,
  t: 1,
  a: 1,
  aC: 1
}));
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i8)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.oa = null;
  this.oa = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.jl = (function(runnable) {
  this.oa.then(((arg1$2) => {
    try {
      runnable.ep();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gm($m_jl_System$Streams$().eH);
    }
  }));
});
$p.jV = (function(t) {
  t.gm($m_jl_System$Streams$().eH);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  ij: 1,
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
$p.jl = (function(runnable) {
  setTimeout($m_sjs_js_Any$().rC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    try {
      runnable.ep();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gm($m_jl_System$Streams$().eH);
    }
  }))), 0);
});
$p.jV = (function(t) {
  t.gm($m_jl_System$Streams$().eH);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  ik: 1,
  b6: 1,
  b5: 1,
  aO: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.ob = null;
  this.ob = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.T = (function() {
  return (0, this.ob)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  iw: 1,
  iv: 1,
  cC: 1,
  aQ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.oc = null;
  this.oc = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oc)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  iy: 1,
  ix: 1,
  cD: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.od = null;
  this.od = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.eT = (function(x0, x1) {
  return (0, this.od)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  iA: 1,
  iz: 1,
  cE: 1,
  aR: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.oe = null;
  this.oe = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.j2 = (function(x0, x1, x2) {
  return (0, this.oe)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  iC: 1,
  iB: 1,
  i2: 1,
  fk: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.of = null;
  this.of = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.qI = (function(x0, x1, x2, x3) {
  return (0, this.of)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  iE: 1,
  iD: 1,
  i3: 1,
  fl: 1
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
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pB($thiz.cx(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pB($thiz.cv(), observer)) {
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
  this.kb = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kb = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.jF = (function(x) {
  return (x !== null);
});
$p.j5 = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.kb, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.c8 = (function(x) {
  return this.jF(x);
});
$p.bf = (function(x, default$1) {
  return this.j5(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  cW: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.kT = $m_Lcom_raquo_airstream_core_Observer$().rD(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.kT.en(tryValue);
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
        $thiz.pK($x_1, trx);
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
  this.kU = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kU = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.s2 = (function(x) {
  return true;
});
$p.qO = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.kU.pK(x, _$1);
  })));
});
$p.c8 = (function(x) {
  return this.s2(x);
});
$p.bf = (function(x, default$1) {
  return this.qO(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dd: 1,
  aB: 1,
  e: 1,
  i: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.oP(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bq().oj();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bq().rc();
  }))));
  $thiz.ja((void 0));
  $thiz.j9($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eV() === (void 0))) {
    $thiz.ja($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
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
  return $thiz.fZ().c7(prop, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$()))).r0(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
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
              currentLast.Z = newElem;
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
                  currentLast.Z = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.p();
                }
                nextToCopy = next.p();
                next = next.p();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.Z = nextToCopy;
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
              currentLast$1.Z = newElem$1;
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
                  currentLast$1.Z = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.p();
                }
                nextToCopy$1 = next$1.p();
                next$1 = next$1.p();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.Z = nextToCopy$1;
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
      t$3.Z = nx;
      t$3 = nx;
      rest = rest.p();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.ot($x_2);
  var domValues = key.hF.oU(key.mH.e($thiz));
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
              currentLast$2.Z = newElem$3;
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
                  currentLast$2.Z = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.p();
                }
                nextToCopy$2 = next$2.p();
                next$2 = next$2.p();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.Z = nextToCopy$2;
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
              currentLast$3.Z = newElem$4;
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
                  currentLast$3.Z = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.p();
                }
                nextToCopy$3 = next$3.p();
                next$3 = next$3.p();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.Z = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.ot($x_4);
  $thiz.j9($thiz.fZ().dS(key, newItems));
  key.mI.eT($thiz, key.hF.oW(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.eU(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.eU();
  $thiz.oO(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.H().bq().bJ.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.H().bq().bJ.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.H().bq())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.jb().qZ();
  } else {
    var x0 = maybeNextOwner.H();
    $thiz.jb().sV(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.hR = null;
  this.hR = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.s1 = (function(x) {
  if ((x !== null)) {
    x.b0();
    var r = x.aW();
    var x$3 = this.hR;
    if ((r === x$3)) {
      return true;
    }
  }
  return false;
});
$p.qN = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.b0();
    var r = x.aW();
    var x$3 = this.hR;
    if ((r === x$3)) {
      return item;
    }
  }
  return default$1.e(x);
});
$p.c8 = (function(x) {
  return this.s1(x);
});
$p.bf = (function(x, default$1) {
  return this.qN(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  er: 1,
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
$p.jF = (function(x) {
  return true;
});
$p.j5 = (function(x, default$1) {
  console.error(("Failed to fetch release: " + x));
});
$p.c8 = (function(x) {
  return this.jF(x);
});
$p.bf = (function(x, default$1) {
  return this.j5(x, default$1);
});
var $d_Lfirst_Main$$anon$1 = new $TypeData().i($c_Lfirst_Main$$anon$1, "first.Main$$anon$1", ({
  eD: 1,
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
  eH: 1,
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
  eK: 1,
  a9: 1,
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
  eO: 1,
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
  eT: 1,
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
  eV: 1,
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
  eW: 1,
  B: 1,
  v: 1,
  t: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eY)));
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
  eZ: 1,
  a9: 1,
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
  f0: 1,
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
  fb: 1,
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
  ff: 1,
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
  if ((!$thiz.ib)) {
    $thiz.ic = (($thiz.gK === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.ib = true;
  }
  return $thiz.ic;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.ib) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.ic);
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
    this.ic = null;
    this.gK = null;
    this.ib = false;
    this.gK = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  g8() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fo: 1,
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
  return (this.c() ? $m_sc_Iterator$().O : new $c_sc_Iterator$$anon$20(this.H()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fn = 0;
  this.nm = 0;
  this.nl = null;
  this.nl = outer;
  this.fn = 0;
  this.nm = outer.bi();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.r = (function() {
  return (this.fn < this.nm);
});
$p.j = (function() {
  var result = this.nl.bj(this.fn);
  this.fn = ((1 + this.fn) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fu: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.nn = null;
  this.no = null;
  this.nn = _1;
  this.no = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bi = (function() {
  return 2;
});
$p.bj = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.b0 = (function() {
  return this.nn;
});
$p.aW = (function() {
  return this.no;
});
$p.x = (function() {
  return (((("(" + this.b0()) + ",") + this.aW()) + ")");
});
$p.bk = (function() {
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
  fv: 1,
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
$p.bi = (function() {
  return 3;
});
$p.bj = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return (((((("(" + this.e2) + ",") + this.e3) + ",") + this.e4) + ")");
});
$p.bk = (function() {
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
  fw: 1,
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
  fK: 1,
  fJ: 1,
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
$p.jL = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.D = (function() {
  return 0;
});
$p.gp = (function(from, until) {
  return this;
});
$p.j = (function() {
  this.jL();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fP: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.fp = false;
  this.nr = null;
  this.nr = a$1;
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
    return $m_sc_Iterator$().O.j();
  } else {
    this.fp = true;
    return this.nr;
  }
});
$p.gp = (function(from, until) {
  return (((this.fp || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().O : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fQ: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.nu = null;
  this.gN = false;
  this.nt = null;
  this.io = null;
  this.ns = null;
  this.io = outer;
  this.ns = f$1;
  this.nu = $ct_scm_HashSet__(new $c_scm_HashSet());
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
    } else if (this.io.r()) {
      var a = this.io.j();
      if (this.nu.h4(this.ns.e(a))) {
        this.nt = a;
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
    return this.nt;
  } else {
    return $m_sc_Iterator$().O.j();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fS: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.gO = null;
  this.nv = null;
  this.gO = outer;
  this.nv = f$2;
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
  return this.nv.e(this.gO.j());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fT: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bv instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bv;
      $thiz.bv = c.bv;
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
      $thiz.bv = null;
      $thiz.bW = null;
      return false;
    } else {
      $thiz.bv = $thiz.bX.rM();
      if (($thiz.bW === $thiz.bX)) {
        $thiz.bW = $thiz.bW.fq;
      }
      $thiz.bX = $thiz.bX.fq;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.d4) {
        return true;
      } else if ((($thiz.bv !== null) && $thiz.bv.r())) {
        $thiz.d4 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bv = null;
  this.bX = null;
  this.bW = null;
  this.d4 = false;
  this.bv = current;
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
  } else if ((this.bv !== null)) {
    if (this.bv.r()) {
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
    return this.bv.j();
  } else {
    return $m_sc_Iterator$().O.j();
  }
});
$p.jd = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bX === null)) {
    this.bX = c;
    this.bW = c;
  } else {
    this.bW.fq = c;
    this.bW = c;
  }
  if ((this.bv === null)) {
    this.bv = $m_sc_Iterator$().O;
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
    return ((this.bM < 0) ? this.d5.j() : $m_sc_Iterator$().O.j());
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
    return $m_sc_Iterator$().O;
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
  fV: 1,
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
  return ((x >= 0) && ($thiz.bh(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.oV(n);
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
  fZ: 1,
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
  $thiz.fs = node.jS();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bx = ((1 + $thiz.bx) | 0);
  var cursorIndex = ($thiz.bx << 1);
  var lengthIndex = ((1 + ($thiz.bx << 1)) | 0);
  $thiz.ft.a[$thiz.bx] = node;
  $thiz.cF.a[cursorIndex] = 0;
  $thiz.cF.a[lengthIndex] = node.jM();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bx = (((-1) + $thiz.bx) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bx >= 0)) {
    var cursorIndex = ($thiz.bx << 1);
    var lengthIndex = ((1 + ($thiz.bx << 1)) | 0);
    var nodeCursor = $thiz.cF.a[cursorIndex];
    if ((nodeCursor < $thiz.cF.a[lengthIndex])) {
      var ev$1 = $thiz.cF;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.ft.a[$thiz.bx].jt(nodeCursor);
      if (nextNode.jz()) {
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
  $thiz.bx = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jz()) {
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
  this.bx = 0;
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
  $thiz.dd = (((-1) + node.jS()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bO = ((1 + $thiz.bO) | 0);
  $thiz.fv.a[$thiz.bO] = node;
  $thiz.fu.a[$thiz.bO] = (((-1) + node.jM()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bO = (((-1) + $thiz.bO) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bO >= 0)) {
    var nodeCursor = $thiz.fu.a[$thiz.bO];
    $thiz.fu.a[$thiz.bO] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fv.a[$thiz.bO].jt(nodeCursor));
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
  as.z(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.z(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.g2(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aq;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.z(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.z(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bw, dataIx, originalHash);
  bm.a7 = (bm.a7 | bitpos);
  bm.aq = dst;
  bm.bw = dstHashes;
  bm.aN = ((1 + bm.aN) | 0);
  bm.bl = ((bm.bl + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eK = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.co = $thiz.co.oQ();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eK = null;
  this.co = null;
  this.co = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nj, $m_s_Array$EmptyArrays$().ia, 0, 0);
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
        var subNodeNew = mapNode.jK(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sa(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.af & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cw(mapNode.af, mask, bitpos);
      var subNode = mapNode.cT(index$2);
      var beforeSize = subNode.aM();
      var beforeHash = subNode.dI();
      this.fa(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aN = ((mapNode.aN + ((subNode.aM() - beforeSize) | 0)) | 0);
      mapNode.bl = ((mapNode.bl + ((subNode.dI() - beforeHash) | 0)) | 0);
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
$p.jW = (function() {
  if ((this.co.aN === 0)) {
    return $m_sci_HashMap$().iv;
  } else if ((this.eK !== null)) {
    return this.eK;
  } else {
    this.eK = new $c_sci_HashMap(this.co);
    return this.eK;
  }
});
$p.op = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().Y(elem.b0());
  var im = $m_sc_Hashing$().cj(h);
  this.fa(this.co, elem.b0(), elem.aW(), h, im, 0);
  return this;
});
$p.ee = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().Y(key);
  this.fa(this.co, key, value, originalHash, $m_sc_Hashing$().cj(originalHash), 0);
  return this;
});
$p.j0 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.tx();
    while (iter.r()) {
      var next = iter.j();
      var originalHash = xs.t9(next.ph());
      var hash = $m_sc_Hashing$().cj(originalHash);
      this.fa(this.co, next.pn(), next.pZ(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rl();
    while (iter$2.r()) {
      var next$2 = iter$2.j();
      var originalHash$2 = xs.t9(next$2.ph());
      var hash$2 = $m_sc_Hashing$().cj(originalHash$2);
      this.fa(this.co, next$2.pn(), next$2.pZ(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eh(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.ee(key$2$2, value$2$2))));
  } else {
    var it = xs.n();
    while (it.r()) {
      this.op(it.j());
    }
  }
  return this;
});
$p.b1 = (function(elems) {
  return this.j0(elems);
});
$p.b2 = (function(elem) {
  return this.op(elem);
});
$p.b9 = (function() {
  return this.jW();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  ga: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.eL = null;
  this.nD = null;
  this.qY();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.qY = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.nD = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jk()))));
  this.eL = deferred;
});
$p.sN = (function() {
  this.eL.jC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.nD;
});
$p.qA = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.eL.jC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jk())))));
  })));
  this.eL = deferred;
  return this;
});
$p.qr = (function(xs) {
  if ((xs.D() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.eL.jC(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pH(xs.n(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jk()))))));
    this.eL = deferred;
  }
  return this;
});
$p.b1 = (function(elems) {
  return this.qr(elems);
});
$p.b2 = (function(elem) {
  return this.qA(elem);
});
$p.b9 = (function() {
  return this.sN();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gg: 1,
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
    return $m_sc_Iterator$().O.j();
  } else {
    var res = this.eM.J().u();
    this.eM = this.eM.J().aX();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gi: 1,
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
  gl: 1,
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
      var result = $m_sc_Iterator$().O.j();
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
      var result = $m_sc_Iterator$().O.j();
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
      var result = new $c_T2(this.cq.by, this.cq.cc);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cq.bz, this.cq.cd);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cq.bA, this.cq.ce);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cq.bB, this.cq.cf);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().O.j();
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
$p.pE = (function() {
  return (this.fx ? this.e9.jW() : this.cJ);
});
$p.qy = (function(key, value) {
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
    this.cJ.qV(this.e9);
    this.e9.ee(key, value);
  }
  return this;
});
$p.ok = (function(xs) {
  return (this.fx ? (this.e9.j0(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b1 = (function(elems) {
  return this.ok(elems);
});
$p.b2 = (function(elem) {
  return this.qy(elem.b0(), elem.aW());
});
$p.b9 = (function() {
  return this.pE();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gw: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pl($m_jl_System$SystemProperties$().jv("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
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
  this.nJ = 0;
  this.nK = null;
  $n_sci_Vector$ = this;
  this.nJ = $ps_sci_Vector$__liftedTree1$1__I();
  this.nK = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cS = (function(elems) {
  return this.jr(elems);
});
$p.jr = (function(it) {
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
      return new $c_sci_VectorBuilder().ol(it).pF();
    }
  }
});
$p.b3 = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aC = (function(source) {
  return this.jr(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gJ: 1,
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
      src.z(i, dest, 0, length);
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
        src$1.z(i$2, dest$1, 0, length$1);
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
      a = $thiz.V;
    }
    var i$3 = (31 & (($thiz.L >>> 15) | 0));
    if (($thiz.R === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.z(i$3, dest$2, 0, length$2);
      }
      $thiz.V = a;
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
      a = $thiz.P;
    }
    var i$4 = (31 & (($thiz.L >>> 10) | 0));
    if (($thiz.R === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.z(i$4, dest$3, 0, length$3);
      }
      $thiz.P = a;
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
        src$4.z(i$5, dest$4, 0, length$4);
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
      a = $thiz.a0;
    }
    var i$6 = (31 & $thiz.L);
    if (($thiz.R === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.z(i$6, dest$5, 0, length$5);
      }
      $thiz.a0 = a;
      $thiz.Q = (($thiz.Q - $thiz.L) | 0);
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
    if (($thiz.Q === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.Q) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a0;
    var destPos = $thiz.Q;
    data.z(0, dest, destPos, copy1);
    $thiz.Q = (($thiz.Q + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a0;
      data.z(copy1, dest$1, 0, copy2);
      $thiz.Q = (($thiz.Q + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.Q === 32)) {
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
      slice.z(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.K;
        slice.z(copy1, dest$1, 0, copy2);
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
      var dest$2 = $thiz.P;
      slice.z(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.P;
        slice.z(copy1$2, dest$3, 0, copy2$2);
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
      var dest$4 = $thiz.V;
      slice.z(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.V;
        slice.z(copy1$3, dest$5, 0, copy2$3);
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
      slice.z(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a4;
        slice.z(copy1$4, dest$7, 0, copy2$4);
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
      slice.z(0, dest$8, destPos$5, sl);
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
    } else if ((($thiz.Q === 32) || ($thiz.Q === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().jn((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
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
  $thiz.Q = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.F + n) | 0);
    var xor = (idx ^ $thiz.F);
    $thiz.F = idx;
    $thiz.Q = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a0) + ", a2=") + $thiz.K) + ", a3=") + $thiz.P) + ", a4=") + $thiz.V) + ", a5=") + $thiz.a4) + ", a6=") + $thiz.aG) + ", depth=") + $thiz.R));
  } else if ((xor < 1024)) {
    if (($thiz.R <= 1)) {
      $thiz.K = new ($d_O.r().r().C)(32);
      $thiz.K.a[0] = $thiz.a0;
      $thiz.R = 2;
    }
    $thiz.a0 = new $ac_O(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a0;
  } else if ((xor < 32768)) {
    if (($thiz.R <= 2)) {
      $thiz.P = new ($d_O.r().r().r().C)(32);
      $thiz.P.a[0] = $thiz.K;
      $thiz.R = 3;
    }
    $thiz.a0 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a0;
    $thiz.P.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
  } else if ((xor < 1048576)) {
    if (($thiz.R <= 3)) {
      $thiz.V = new ($d_O.r().r().r().r().C)(32);
      $thiz.V.a[0] = $thiz.P;
      $thiz.R = 4;
    }
    $thiz.a0 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.P = new ($d_O.r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a0;
    $thiz.P.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.V.a[(31 & ((idx >>> 15) | 0))] = $thiz.P;
  } else if ((xor < 33554432)) {
    if (($thiz.R <= 4)) {
      $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a4.a[0] = $thiz.V;
      $thiz.R = 5;
    }
    $thiz.a0 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.P = new ($d_O.r().r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a0;
    $thiz.P.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.V.a[(31 & ((idx >>> 15) | 0))] = $thiz.P;
    $thiz.a4.a[(31 & ((idx >>> 20) | 0))] = $thiz.V;
  } else {
    if (($thiz.R <= 5)) {
      $thiz.aG = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aG.a[0] = $thiz.a4;
      $thiz.R = 6;
    }
    $thiz.a0 = new $ac_O(32);
    $thiz.K = new ($d_O.r().r().C)(32);
    $thiz.P = new ($d_O.r().r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().r().C)(32);
    $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.K.a[(31 & ((idx >>> 5) | 0))] = $thiz.a0;
    $thiz.P.a[(31 & ((idx >>> 10) | 0))] = $thiz.K;
    $thiz.V.a[(31 & ((idx >>> 15) | 0))] = $thiz.P;
    $thiz.a4.a[(31 & ((idx >>> 20) | 0))] = $thiz.V;
    $thiz.aG.a[((idx >>> 25) | 0)] = $thiz.a4;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aG = null;
  this.a4 = null;
  this.V = null;
  this.P = null;
  this.K = null;
  this.a0 = null;
  this.Q = 0;
  this.F = 0;
  this.L = 0;
  this.gS = false;
  this.R = 0;
  this.a0 = new $ac_O(32);
  this.Q = 0;
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
$p.rS = (function(v) {
  var x1 = v.cB();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.R = 1;
      var i = v.g.a.length;
      this.Q = (31 & i);
      this.F = ((i - this.Q) | 0);
      var a = v.g;
      this.a0 = ((a.a.length === 32) ? a : $m_ju_Arrays$().ad(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bo;
      var a$1 = v.k;
      this.a0 = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().ad(a$1, 0, 32));
      this.R = 2;
      this.L = ((32 - v.bP) | 0);
      var i$1 = ((v.l + this.L) | 0);
      this.Q = (31 & i$1);
      this.F = ((i$1 - this.Q) | 0);
      this.K = new ($d_O.r().r().C)(32);
      this.K.a[0] = v.g;
      var dest = this.K;
      var length = d2.a.length;
      d2.z(0, dest, 1, length);
      this.K.a[((1 + d2.a.length) | 0)] = this.a0;
      break;
    }
    case 5: {
      var d3 = v.aY;
      var s2 = v.aZ;
      var a$2 = v.k;
      this.a0 = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().ad(a$2, 0, 32));
      this.R = 3;
      this.L = ((1024 - v.bd) | 0);
      var i$2 = ((v.l + this.L) | 0);
      this.Q = (31 & i$2);
      this.F = ((i$2 - this.Q) | 0);
      this.P = new ($d_O.r().r().r().C)(32);
      this.P.a[0] = $m_sci_VectorStatics$().ct(v.g, v.bD);
      var dest$1 = this.P;
      var length$1 = d3.a.length;
      d3.z(0, dest$1, 1, length$1);
      this.K = $m_ju_Arrays$().a6(s2, 32);
      this.P.a[((1 + d3.a.length) | 0)] = this.K;
      this.K.a[s2.a.length] = this.a0;
      break;
    }
    case 7: {
      var d4 = v.aD;
      var s3 = v.aF;
      var s2$2 = v.aE;
      var a$3 = v.k;
      this.a0 = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().ad(a$3, 0, 32));
      this.R = 4;
      this.L = ((32768 - v.aS) | 0);
      var i$3 = ((v.l + this.L) | 0);
      this.Q = (31 & i$3);
      this.F = ((i$3 - this.Q) | 0);
      this.V = new ($d_O.r().r().r().r().C)(32);
      this.V.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.b6), v.b7);
      var dest$2 = this.V;
      var length$2 = d4.a.length;
      d4.z(0, dest$2, 1, length$2);
      this.P = $m_ju_Arrays$().a6(s3, 32);
      this.K = $m_ju_Arrays$().a6(s2$2, 32);
      this.V.a[((1 + d4.a.length) | 0)] = this.P;
      this.P.a[s3.a.length] = this.K;
      this.K.a[s2$2.a.length] = this.a0;
      break;
    }
    case 9: {
      var d5 = v.ah;
      var s4 = v.ak;
      var s3$2 = v.aj;
      var s2$3 = v.ai;
      var a$4 = v.k;
      this.a0 = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().ad(a$4, 0, 32));
      this.R = 5;
      this.L = ((1048576 - v.aw) | 0);
      var i$4 = ((v.l + this.L) | 0);
      this.Q = (31 & i$4);
      this.F = ((i$4 - this.Q) | 0);
      this.a4 = new ($d_O.r().r().r().r().r().C)(32);
      this.a4.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.aI), v.aJ), v.aK);
      var dest$3 = this.a4;
      var length$3 = d5.a.length;
      d5.z(0, dest$3, 1, length$3);
      this.V = $m_ju_Arrays$().a6(s4, 32);
      this.P = $m_ju_Arrays$().a6(s3$2, 32);
      this.K = $m_ju_Arrays$().a6(s2$3, 32);
      this.a4.a[((1 + d5.a.length) | 0)] = this.V;
      this.V.a[s4.a.length] = this.P;
      this.P.a[s3$2.a.length] = this.K;
      this.K.a[s2$3.a.length] = this.a0;
      break;
    }
    case 11: {
      var d6 = v.a8;
      var s5 = v.ac;
      var s4$2 = v.ab;
      var s3$3 = v.aa;
      var s2$4 = v.a9;
      var a$5 = v.k;
      this.a0 = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().ad(a$5, 0, 32));
      this.R = 6;
      this.L = ((33554432 - v.ar) | 0);
      var i$5 = ((v.l + this.L) | 0);
      this.Q = (31 & i$5);
      this.F = ((i$5 - this.Q) | 0);
      this.aG = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aG.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.g, v.ax), v.ay), v.az), v.aA);
      var dest$4 = this.aG;
      var length$4 = d6.a.length;
      d6.z(0, dest$4, 1, length$4);
      this.a4 = $m_ju_Arrays$().a6(s5, 32);
      this.V = $m_ju_Arrays$().a6(s4$2, 32);
      this.P = $m_ju_Arrays$().a6(s3$3, 32);
      this.K = $m_ju_Arrays$().a6(s2$4, 32);
      this.aG.a[((1 + d6.a.length) | 0)] = this.a4;
      this.a4.a[s5.a.length] = this.V;
      this.V.a[s4$2.a.length] = this.P;
      this.P.a[s3$3.a.length] = this.K;
      this.K.a[s2$4.a.length] = this.a0;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.Q === 0) && (this.F > 0))) {
    this.Q = 32;
    this.F = (((-32) + this.F) | 0);
  }
  return this;
});
$p.qB = (function(elem) {
  if ((this.Q === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a0.a[this.Q] = elem;
  this.Q = ((1 + this.Q) | 0);
  return this;
});
$p.ol = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.Q === 0) && (this.F === 0)) && (!this.gS)) ? this.rS(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.pF = (function() {
  if (this.gS) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.Q + this.F) | 0);
  var realLen = ((len - this.L) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a0;
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
    var data$2 = $m_ju_Arrays$().ad(this.P, 1, i3);
    var a$2 = this.P.a[0];
    var prefix2 = $m_ju_Arrays$().ad(a$2, 1, a$2.a.length);
    var prefix1$2 = this.P.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a6(this.P.a[i3], i2$2);
    var a$3 = this.P.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a6(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().ad(this.V, 1, i4);
    var a$4 = this.V.a[0];
    var prefix3 = $m_ju_Arrays$().ad(a$4, 1, a$4.a.length);
    var a$5 = this.V.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().ad(a$5, 1, a$5.a.length);
    var prefix1$3 = this.V.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a6(this.V.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a6(this.V.a[i4].a[i3$2], i2$3);
    var a$6 = this.V.a[i4].a[i3$2].a[i2$3];
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
  return (((((((("VectorBuilder(len1=" + this.Q) + ", lenRest=") + this.F) + ", offset=") + this.L) + ", depth=") + this.R) + ")");
});
$p.b9 = (function() {
  return this.pF();
});
$p.b1 = (function(elems) {
  return this.ol(elems);
});
$p.b2 = (function(elem) {
  return this.qB(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gR: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.nM = null;
  $n_scm_ArrayBuffer$ = this;
  this.nM = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cS = (function(elems) {
  return this.pb(elems);
});
$p.pb = (function(coll) {
  var k = coll.D();
  if ((k >= 0)) {
    var array = this.pI(this.nM, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bS(array, 0, 2147483647) : coll.n().bS(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).om(coll);
  }
});
$p.b3 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.sM = (function(arrayLen, targetLen) {
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
$p.pI = (function(array, curSize, targetSize) {
  var newLen = this.sM(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.z(0, res, 0, curSize);
    return res;
  }
});
$p.aC = (function(source) {
  return this.pb(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  gW: 1,
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
  gX: 1,
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
  h2: 1,
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
  ha: 1,
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
    return $m_sc_Iterator$().O.j();
  } else {
    var r = this.jm(this.cN);
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
  hd: 1,
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
  hg: 1,
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
  this.iN = null;
  this.nW = null;
  this.nV = 0;
  this.iN = underlying;
  this.nW = mutationCount;
  this.nV = (mutationCount.T() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.r = (function() {
  $m_scm_MutationTracker$().oL(this.nV, (this.nW.T() | 0), "mutation occurred during iteration");
  return this.iN.r();
});
$p.j = (function() {
  return this.iN.j();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  hi: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.nZ = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.nZ = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.jl = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.jV = (function(t) {
  $m_s_concurrent_ExecutionContext$().eS.e(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  hq: 1,
  b6: 1,
  b5: 1,
  aO: 1,
  hm: 1
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
  this.o7 = 0;
  this.o8 = null;
  this.o8 = x$2;
  this.fL = 0;
  this.o7 = x$2.bi();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.r = (function() {
  return (this.fL < this.o7);
});
$p.j = (function() {
  var result = this.o8.bj(this.fL);
  this.fL = ((1 + this.fL) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  id: 1,
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
  return this.pc(elems);
});
$p.b3 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pc = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b9();
});
$p.aC = (function(source) {
  return this.pc(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  is: 1,
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
  return this.js(elems);
});
$p.js = (function(source) {
  return this.b3().b1(source).b9();
});
$p.b3 = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dC))));
});
$p.aC = (function(source) {
  return this.js(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  iG: 1,
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
$p.pj = (function() {
  return true;
});
$p.pk = (function() {
  return false;
});
$p.H = (function() {
  var $x_1 = this.cs;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
});
$p.bF = (function(f) {
});
$p.jI = (function(f) {
  return this;
});
$p.jU = (function(pf) {
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
$p.bk = (function() {
  return "Failure";
});
$p.bi = (function() {
  return 1;
});
$p.bj = (function(x$1) {
  return ((x$1 === 0) ? this.cs : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().iY(this);
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
$p.pj = (function() {
  return false;
});
$p.pk = (function() {
  return true;
});
$p.H = (function() {
  return this.cR;
});
$p.bF = (function(f) {
  f.e(this.cR);
});
$p.jI = (function(f) {
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
$p.jU = (function(pf) {
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
$p.bk = (function() {
  return "Success";
});
$p.bi = (function() {
  return 1;
});
$p.bj = (function(x$1) {
  return ((x$1 === 0) ? this.cR : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().iY(this);
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
    this.jD(cause);
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
  bi() {
    return 2;
  }
  bk() {
    return "ErrorHandlingError";
  }
  bj(n) {
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
  bi() {
    return 1;
  }
  bk() {
    return "ObserverError";
  }
  bj(n) {
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
    this.jD(cause);
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
  bi() {
    return 2;
  }
  bk() {
    return "ObserverErrorHandlingError";
  }
  bj(n) {
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
    acc = $m_sr_Statics$().f(acc, $m_sr_Statics$().Y(this.ev));
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
  bi() {
    return 2;
  }
  bk() {
    return "TransactionDepthExceeded";
  }
  bj(n) {
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
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().r1(message, cause), null, true, true);
    if ((!cause.c())) {
      this.jD(cause.H());
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
  bi() {
    return 2;
  }
  bk() {
    return "VarError";
  }
  bj(n) {
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
  $thiz.k0();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.kk = 1;
  $thiz.gw = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.gw = ((1 + $thiz.gw) | 0);
  $thiz.gv.ke.T();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.gv.kc.T(), (void 0)));
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
  $x_1.jU(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.gv.kd.T();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.kS = null;
  this.kT = null;
  this.hx = null;
  this.hw = null;
  this.cZ = null;
  this.kS = (void 0);
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
  return this.kS;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.pK = (function(value, transaction) {
  this.hx = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.hw, value, transaction);
});
$p.dQ = (function() {
  return this.cZ;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  d9: 1,
  ad: 1,
  aG: 1,
  au: 1,
  a2: 1,
  db: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.hT;
  if ((x === (void 0))) {
    $thiz.hT = $m_sjs_js_defined$().ox($m_Lcom_raquo_ew_JsArray$().be($m_sr_ScalaRunTime$().d(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.n0;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].tz() === propDomName)) {
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
  this.hS = null;
  this.n1 = null;
  this.mZ = null;
  this.mY = null;
  this.mX = null;
  this.hU = null;
  this.bt = null;
  this.n0 = null;
  this.hT = null;
  this.hU = tag;
  this.bt = ref;
  this.hS = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.n0 = (void 0);
  this.hT = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.eU = (function() {
  return this.hS;
});
$p.oO = (function(x$1) {
  this.hS = x$1;
});
$p.bE = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.bq = (function() {
  return this.n1;
});
$p.j8 = (function(x$0) {
  this.n1 = x$0;
});
$p.jb = (function() {
  return this.mZ;
});
$p.eV = (function() {
  return this.mY;
});
$p.fZ = (function() {
  return this.mX;
});
$p.ja = (function(x$1) {
  this.mY = x$1;
});
$p.j9 = (function(x$1) {
  this.mX = x$1;
});
$p.oP = (function(x$0) {
  this.mZ = x$0;
});
$p.dT = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.dP = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.r4 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().s0(this.bt)) {
    var x1 = this.hU;
    if (false) {
      return x1.tl();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mC;
  }
});
$p.rY = (function(propDomName) {
  var x = this.r4();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().rP(x, propDomName, 0));
});
$p.pt = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.rY(key.e0)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.e0)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.e0) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().oT(this.bt)) + "` that already has an input controller for `") + key.e0) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.e0);
      }
    }
  }
});
$p.x = (function() {
  return (("ReactiveHtmlElement(" + ((this.bt !== null) ? this.bt.outerHTML : ("tag=" + this.hU.hY))) + ")");
});
$p.a1 = (function() {
  return this.bt;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  es: 1,
  ap: 1,
  R: 1,
  av: 1,
  aK: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.hV = null;
  this.n5 = null;
  this.n4 = null;
  this.n3 = null;
  this.n2 = null;
  this.n6 = null;
  this.d3 = null;
  this.n6 = tag;
  this.d3 = ref;
  this.hV = $m_s_None$();
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
  return this.hV;
});
$p.oO = (function(x$1) {
  this.hV = x$1;
});
$p.bE = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().ef(parentNode, this, (void 0));
});
$p.bq = (function() {
  return this.n5;
});
$p.j8 = (function(x$0) {
  this.n5 = x$0;
});
$p.jb = (function() {
  return this.n4;
});
$p.eV = (function() {
  return this.n3;
});
$p.fZ = (function() {
  return this.n2;
});
$p.ja = (function(x$1) {
  this.n3 = x$1;
});
$p.j9 = (function(x$1) {
  this.n2 = x$1;
});
$p.oP = (function(x$0) {
  this.n4 = x$0;
});
$p.dT = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.dP = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.pt = (function(key) {
});
$p.x = (function() {
  return (("ReactiveSvgElement(" + ((this.d3 !== null) ? this.d3.outerHTML : ("tag=" + this.n6.hZ))) + ")");
});
$p.a1 = (function() {
  return this.d3;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  et: 1,
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
  eI: 1,
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
  a9: 1,
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
  eN: 1,
  a9: 1,
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
  eP: 1,
  a9: 1,
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
  return $m_RTLong$().py($thiz.m, $thiz.o);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bC: 1,
  a9: 1,
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
  eX: 1,
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
  var str = $m_jl_Character$().t7(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  f3: 1,
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
  f6: 1,
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
$p.rF = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.bk = (function() {
  return "None";
});
$p.bi = (function() {
  return 0;
});
$p.bj = (function(x$1) {
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
  this.rF();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fp: 1,
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
$p.bk = (function() {
  return "Some";
});
$p.bi = (function() {
  return 1;
});
$p.bj = (function(x$1) {
  return ((x$1 === 0) ? this.eI : $m_sr_Statics$().ek(x$1));
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().cy(this, (-889275714), false);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().iY(this);
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
  return this.bs();
});
$p.g6 = (function(coll) {
  return this.bU().aC(coll);
});
$p.gd = (function() {
  return this.bU().b3();
});
$p.bF = (function(f) {
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
  $thiz.bu = $m_jl_reflect_Array$().c6($thiz.bK);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bK = null;
  this.C = 0;
  this.bu = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.D = (function() {
  return ((this.bu - this.C) | 0);
});
$p.r = (function() {
  return (this.C < this.bu);
});
$p.j = (function() {
  if ((this.C >= $m_jl_reflect_Array$().c6(this.bK))) {
    $m_sc_Iterator$().O.j();
  }
  var r = $m_sr_ScalaRunTime$().eg(this.bK, this.C);
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.dK = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.C + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bu;
    } else {
      var a = this.bu;
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
  $thiz.im = self;
  $thiz.cC = 0;
  $thiz.bL = self.v();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.im = null;
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
    var r = this.im.B(this.cC);
    this.cC = ((1 + this.cC) | 0);
    this.bL = (((-1) + this.bL) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().O.j();
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
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().O);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qz = (function(elem) {
  this.fD = this.fD.jd(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b2 = (function(elem) {
  return this.qz(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fR: 1,
  hc: 1,
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
  if ((!$thiz.ir)) {
    $thiz.is = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.ir = true;
  }
  return $thiz.is;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.ir) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.is);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.is = null;
  this.it = null;
  this.ir = false;
  $n_sci_ArraySeq$ = this;
  this.it = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.jp = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.pV($m_s_Array$().p8(it, tag)));
});
$p.hc = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().pV($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.pV = (function(x) {
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
$p.jo = (function(it, evidence$5) {
  return this.jp(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  g7: 1,
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
  this.bx = 0;
  this.cF = null;
  this.ft = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bm);
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
$p.jL = (function() {
  $m_sc_Iterator$().O.j();
  throw new $c_jl_ClassCastException();
});
$p.j = (function() {
  this.jL();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gb: 1,
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
  gq: 1,
  gr: 1,
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
  gs: 1,
  gt: 1,
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
  gu: 1,
  gv: 1,
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
  this.iB = 0;
  this.nG = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.iB = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pU(this.iB, $m_sr_Statics$().Y(this.nG), (-889275714));
});
$p.sf = (function() {
  if ((!this.r())) {
    $m_sc_Iterator$().O.j();
  }
  this.iB = this.gQ.g7(this.dd);
  this.nG = this.gQ.cU(this.dd);
  this.dd = (((-1) + this.dd) | 0);
  return this;
});
$p.j = (function() {
  return this.sf();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gx: 1,
  g8: 1,
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
  this.bx = 0;
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
$p.se = (function() {
  if ((!this.r())) {
    $m_sc_Iterator$().O.j();
  }
  var payload = this.e7.pg(this.bN);
  this.bN = ((1 + this.bN) | 0);
  return payload;
});
$p.j = (function() {
  return this.se();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gy: 1,
  c6: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bC <= $thiz.as)) {
    $m_sc_Iterator$().O.j();
  }
  $thiz.dm = ((1 + $thiz.dm) | 0);
  var slice = $thiz.iD.cA($thiz.dm);
  while ((slice.a.length === 0)) {
    $thiz.dm = ((1 + $thiz.dm) | 0);
    slice = $thiz.iD.cA($thiz.dm);
  }
  $thiz.fy = $thiz.eb;
  var count = $thiz.nI;
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
      $thiz.bn = slice;
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
      $thiz.iC = slice;
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
  var pos = (((($thiz.as - $thiz.bC) | 0) + $thiz.cL) | 0);
  if ((pos === $thiz.eb)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dl > 1)) {
    var io = ((pos - $thiz.fy) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.eO ^ io));
    $thiz.eO = io;
  }
  $thiz.bC = (($thiz.bC - $thiz.as) | 0);
  var a = $thiz.aO.a.length;
  var b = $thiz.bC;
  $thiz.cK = ((a < b) ? a : b);
  $thiz.as = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aP = $thiz.bn.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bn = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bn.a[0];
    $thiz.aO = $thiz.aP.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bn = $thiz.cg.a[0];
    $thiz.aP = $thiz.bn.a[0];
    $thiz.aO = $thiz.aP.a[0];
  } else {
    $thiz.ea = $thiz.iC.a[((io >>> 25) | 0)];
    $thiz.cg = $thiz.ea.a[0];
    $thiz.bn = $thiz.cg.a[0];
    $thiz.aP = $thiz.bn.a[0];
    $thiz.aO = $thiz.aP.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aP = $thiz.bn.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bn = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bn.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bn = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bn.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.ea = $thiz.iC.a[((io >>> 25) | 0)];
    $thiz.cg = $thiz.ea.a[(31 & ((io >>> 20) | 0))];
    $thiz.bn = $thiz.cg.a[(31 & ((io >>> 15) | 0))];
    $thiz.aP = $thiz.bn.a[(31 & ((io >>> 10) | 0))];
    $thiz.aO = $thiz.aP.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.iD = null;
  this.cL = 0;
  this.nI = 0;
  this.aO = null;
  this.aP = null;
  this.bn = null;
  this.cg = null;
  this.ea = null;
  this.iC = null;
  this.cK = 0;
  this.as = 0;
  this.eO = 0;
  this.bC = 0;
  this.dm = 0;
  this.dl = 0;
  this.fy = 0;
  this.eb = 0;
  this.iD = v;
  this.cL = totalLength;
  this.nI = sliceCount;
  this.aO = v.g;
  this.cK = this.aO.a.length;
  this.as = 0;
  this.eO = 0;
  this.bC = this.cL;
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
  return ((this.bC - this.as) | 0);
});
$p.r = (function() {
  return (this.bC > this.as);
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
    var oldpos = ((((this.as - this.bC) | 0) + this.cL) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cL;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cL)) {
      this.as = 0;
      this.bC = 0;
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
      this.bC = ((this.as + ((this.cL - newpos) | 0)) | 0);
      if ((this.cK > this.bC)) {
        this.cK = this.bC;
      }
    }
  }
  return this;
});
$p.bS = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().c6(xs);
  var srcLen = ((this.bC - this.as) | 0);
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
      src.z(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().g1(this.aO, this.as, xs, ((start + copied) | 0), count);
    }
    this.as = ((this.as + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gA: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  C: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.iH = 0;
  $thiz.nO = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.iH = 0;
  this.nO = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b4 = (function(size) {
  if ((this.iH < size)) {
    this.sL(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.iJ = null;
  this.nQ = null;
  $n_scm_ArraySeq$ = this;
  this.iJ = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.nQ = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.ry = (function(it, evidence$2) {
  return this.jH($m_s_Array$().p8(it, evidence$2));
});
$p.hc = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.aL()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().jH(x$2$2))));
});
$p.jH = (function(x) {
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
$p.jo = (function(it, evidence$5) {
  return this.ry(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  h1: 1,
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
$p.jm = (function(nd) {
  return nd.eR;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  h7: 1,
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
$p.jm = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  h8: 1,
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
  this.iM = 0;
  this.nU = null;
  this.nU = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.iM = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.w = (function() {
  return this.iM;
});
$p.jm = (function(nd) {
  this.iM = this.nU.hf(nd.cO);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  h9: 1,
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
  return $m_sr_Statics$().Y(this.fK);
});
$p.x = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.fK);
});
$p.aL = (function() {
  return this.fK;
});
$p.br = (function(len) {
  return this.fK.a3.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hC: 1,
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
  this.st(s);
  this.pm("\n");
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bK = null;
  this.C = 0;
  this.bu = 0;
  this.id = null;
  this.id = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.sg = (function() {
  if ((this.C >= this.id.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.id.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sg();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fA: 1,
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
  this.bu = 0;
  this.ie = null;
  this.ie = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.sh = (function() {
  if ((this.C >= this.ie.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.ie.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return $bC(this.sh());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fB: 1,
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
  this.bu = 0;
  this.ig = null;
  this.ig = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.si = (function() {
  if ((this.C >= this.ig.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.ig.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.si();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fC: 1,
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
  this.bu = 0;
  this.ih = null;
  this.ih = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.sj = (function() {
  if ((this.C >= this.ih.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.ih.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sj();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fD: 1,
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
  this.bu = 0;
  this.ii = null;
  this.ii = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.sk = (function() {
  if ((this.C >= this.ii.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.ii.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sk();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fE: 1,
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
  this.bu = 0;
  this.ij = null;
  this.ij = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.sl = (function() {
  if ((this.C >= this.ij.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var t = this.ij.a[this.C];
  var lo = t.m;
  var hi = t.o;
  this.C = ((1 + this.C) | 0);
  return new $c_RTLong(lo, hi);
});
$p.j = (function() {
  return this.sl();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fF: 1,
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
  this.bu = 0;
  this.ik = null;
  this.ik = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.sm = (function() {
  if ((this.C >= this.ik.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.ik.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.sm();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  fG: 1,
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
  this.bu = 0;
  this.nq = null;
  this.nq = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.sn = (function() {
  if ((this.C >= this.nq.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  this.C = ((1 + this.C) | 0);
});
$p.j = (function() {
  this.sn();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fH: 1,
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
  this.bu = 0;
  this.il = null;
  this.il = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.so = (function() {
  if ((this.C >= this.il.a.length)) {
    $m_sc_Iterator$().O.j();
  }
  var r = this.il.a[this.C];
  this.C = ((1 + this.C) | 0);
  return r;
});
$p.j = (function() {
  return this.so();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fI: 1,
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.aa)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.iH = 0;
  this.nO = 0;
  this.eQ = null;
  this.nP = false;
  this.iI = null;
  this.eQ = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.nP = (elementClass === $d_C.l());
  this.iI = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oo = (function(elem) {
  var unboxedElem = (this.nP ? $uC(elem) : ((elem === null) ? this.eQ.a3.z : elem));
  this.iI.push(unboxedElem);
  return this;
});
$p.qs = (function(xs) {
  var it = xs.n();
  while (it.r()) {
    this.oo(it.j());
  }
  return this;
});
$p.sL = (function(size) {
});
$p.b9 = (function() {
  var elemRuntimeClass = ((this.eQ === $d_V.l()) ? $d_jl_Void.l() : (((this.eQ === $d_sr_Null$.l()) || (this.eQ === $d_sr_Nothing$.l())) ? $d_O.l() : this.eQ));
  return elemRuntimeClass.a3.r().w(this.iI);
});
$p.x = (function() {
  return "ArrayBuilder.generic";
});
$p.b1 = (function(elems) {
  return this.qs(elems);
});
$p.b2 = (function(elem) {
  return this.oo(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  h0: 1,
  gZ: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.im = null;
  this.cC = 0;
  this.bL = 0;
  this.nT = null;
  this.nS = 0;
  this.nT = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.nS = (mutationCount.T() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.r = (function() {
  $m_scm_MutationTracker$().oL(this.nS, (this.nT.T() | 0), "mutation occurred during iteration");
  return (this.bL > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  h4: 1,
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
  hs: 1,
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
  ht: 1,
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
  hu: 1,
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
    var state = _$this.X;
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
        state = _$this.X;
      }
    } else {
      var p = state.f6(_$this);
      var temp$state$2 = p.X;
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
      var temp$left = m.iS;
      var temp$right = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.iR, right);
      left = temp$left;
      right = temp$right;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
  while (true) {
    if ((callbacks instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = callbacks;
      m.iR.pP(resolved);
      callbacks = m.iS;
      continue;
    } else {
      callbacks.pP(resolved);
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
  this.X = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.ru = (function(f, executor) {
  var state = this.X;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.s7 = (function(f, executor) {
  var state = this.X;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.sx = (function(pf, executor) {
  var state = this.X;
  return ((!(state instanceof $c_s_util_Success)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 7, pf, executor)) : this);
});
$p.sq = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.X, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.x = (function() {
  var _$this = this;
  while (true) {
    var state = _$this.X;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      _$this = state.f6(_$this);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.t8 = (function(value) {
  var state = this.X;
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
        state = _$this.X;
      }
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state.f6(_$this);
      if ((p !== _$this)) {
        var temp$state$2 = p.X;
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
$p.jc = (function(other) {
  if ((other !== this)) {
    var state = this.X;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$2 = $m_s_Option$().qK($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$2.c() ? null : this$2.H());
      }
      if ((resolved !== null)) {
        this.er(state, resolved);
      } else {
        other.sq(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.jG = (function(target, link) {
  var _$this = this;
  while (true) {
    if ((_$this !== target)) {
      var state = _$this.X;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target.er(target.X, state))) {
          throw new $c_jl_IllegalStateException("Cannot link completed promises together");
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link !== null) ? link : new $c_s_concurrent_impl_Promise$Link(target));
        var p = l.f6(_$this);
        if (((_$this !== p) && _$this.g0(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().fG)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.X, state);
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
$p.ta = (function(resolved) {
  var _$this = this;
  while (true) {
    var state = _$this.X;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (_$this.g0(state, resolved) ? state.X : _$this);
      _$this = next;
      continue;
    } else {
      _$this.er(state, resolved);
    }
    break;
  }
});
$p.e = (function(v1) {
  this.er(this.X, v1);
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
  bk() {
    return "JavaScriptException";
  }
  bi() {
    return 1;
  }
  bj(x$1) {
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
  if ((!($thiz.jJ() === (void 0)))) {
    $thiz.iX($m_Lcom_raquo_airstream_core_Signal$().pr());
  }
  $thiz.pq(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jJ();
  if ((x === (void 0))) {
    $thiz.iX($m_Lcom_raquo_airstream_core_Signal$().pr());
    var nextValue = $thiz.jf();
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
  var isError = nextValue.pj();
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
      x[i].T();
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
      observer.jP(nextValue);
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
      x[i].T();
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
      x[i].T();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.nd && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.nd = false;
  this.fk = null;
  this.nd = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fk = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.st = (function(s) {
  this.pm(((s === null) ? "null" : s));
});
$p.pm = (function(s) {
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
  eS: 1,
  eG: 1,
  eF: 1,
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
  if (($thiz.bh(1) <= 0)) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.br = (function(len) {
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
$p.bs = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aM() === that.aM())) {
      try {
        return $thiz.sZ(that);
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
$p.br = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hD: 1,
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
  hF: 1,
  hE: 1,
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
  hH: 1,
  hG: 1,
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
  hJ: 1,
  hI: 1,
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
  hL: 1,
  hK: 1,
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
  hN: 1,
  hM: 1,
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
  hP: 1,
  hO: 1,
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
  hR: 1,
  hQ: 1,
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
$p.br = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hS: 1,
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
$p.br = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hT: 1,
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
$p.br = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hU: 1,
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
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.jQ(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.jQ(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.ki = null;
  this.kh = false;
  this.kj = null;
  this.kf = null;
  this.kg = null;
  this.kl = false;
  this.kk = 0;
  this.gw = 0;
  this.gv = null;
  this.ki = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.gv = makeConfig.qI(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
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
  return this.ki;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kh;
});
$p.dO = (function() {
  return this.kj;
});
$p.ck = (function(x$1) {
  this.kh = x$1;
});
$p.f4 = (function(x$1) {
  this.kj = x$1;
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
  return this.kf;
});
$p.cx = (function() {
  return this.kg;
});
$p.gr = (function() {
  return this.kl;
});
$p.et = (function(x$1) {
  this.kl = x$1;
});
$p.fX = (function(x$0) {
  this.kf = x$0;
});
$p.fY = (function(x$0) {
  this.kg = x$0;
});
$p.eq = (function() {
  return this.kk;
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
  ad: 1,
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
  this.kY = null;
  this.kX = false;
  this.kZ = null;
  this.hy = 0;
  this.kV = null;
  this.kW = null;
  this.l2 = false;
  this.hz = null;
  this.l0 = null;
  this.l1 = 0;
  this.l0 = parentDisplayName;
  this.kY = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hy = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hz = (void 0);
  this.l1 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.dN = (function() {
  return this.kY;
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kX;
});
$p.dO = (function() {
  return this.kZ;
});
$p.ck = (function(x$1) {
  this.kX = x$1;
});
$p.f4 = (function(x$1) {
  this.kZ = x$1;
});
$p.gi = (function() {
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.iW = (function() {
  return this.hy;
});
$p.iX = (function(x$1) {
  this.hy = x$1;
});
$p.gh = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.ge = (function(observer) {
  observer.en($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cv = (function() {
  return this.kV;
});
$p.cx = (function() {
  return this.kW;
});
$p.gr = (function() {
  return this.l2;
});
$p.et = (function(x$1) {
  this.l2 = x$1;
});
$p.fX = (function(x$0) {
  this.kV = x$0;
});
$p.fY = (function(x$0) {
  this.kW = x$0;
});
$p.jJ = (function() {
  return this.hz;
});
$p.pq = (function(x$1) {
  this.hz = x$1;
});
$p.k0 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eq = (function() {
  return this.l1;
});
$p.jf = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gk = (function() {
});
$p.dJ = (function() {
  return (this.l0.T() + ".signal");
});
$p.gc = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.dQ = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  de: 1,
  ad: 1,
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
  this.nA = null;
  this.nA = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.n = (function() {
  return this.nA.T();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  g3: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.gP = null;
  this.nB = null;
  this.gP = underlying;
  this.nB = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.n = (function() {
  return new $c_sc_Iterator$$anon$8(this.gP.n(), this.nB);
});
$p.D = (function() {
  return ((this.gP.D() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.gP.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  g4: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.hq = ($thiz.cW !== null);
  $thiz.gx = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.cW);
  if ($thiz.hq) {
    var newParentLastUpdateId = $thiz.cW.iW();
    if ((newParentLastUpdateId !== $thiz.gx)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jf(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.gx = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.hq) {
    $thiz.gx = $thiz.cW.iW();
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
$p.bs = (function() {
  return "Set";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.sZ = (function(that) {
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
        return $thiz.eY(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().s(x2.c7(kv$2$2.b0(), $m_sc_Map$().ny), kv$2$2.aW())))(o)));
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
    var completed = $thiz.er($thiz.X, $m_s_concurrent_impl_Promise$().gn(new $c_s_util_Failure(t)));
    if (((($thiz.fJ === 5) || ($thiz.fJ === 6)) || (!completed))) {
      e.jV(t);
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
  this.X = null;
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
$p.pP = (function(resolved) {
  this.fH = resolved;
  var e = this.fI;
  try {
    e.jl(this);
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
            f.jG(this, null);
          } else {
            this.jc(f);
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
          f$2.jG(this, null);
        } else {
          this.jc(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        v.bF(fun);
        var resolvedResult = null;
        break;
      }
      case 6: {
        fun.e(v);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((v instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().gn(v.jU(fun)) : v);
        break;
      }
      case 8: {
        if ((v instanceof $c_s_util_Failure)) {
          var f$3 = fun.bf(v.cs, $m_s_concurrent_Future$().o3);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().iQ) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.jG(this, null) : this.jc(f$3)), null) : v);
        } else {
          var resolvedResult = v;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((v instanceof $c_s_util_Failure) || (!(!fun.e(v.H())))) ? v : $m_s_concurrent_Future$().o2);
        break;
      }
      case 10: {
        var resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success(fun.bf(v.H(), $m_s_concurrent_Future$().o0)) : v);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.fJ)));
      }
    }
    if ((resolvedResult !== null)) {
      this.er(this.X, resolvedResult);
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
  hl: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kq = null;
  this.kp = false;
  this.kr = null;
  this.km = null;
  this.ko = null;
  this.kt = false;
  this.hn = null;
  this.kn = null;
  this.ks = 0;
  this.hn = parent;
  this.kn = fn;
  this.kq = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ks = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.dN = (function() {
  return this.kq;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kp;
});
$p.dO = (function() {
  return this.kr;
});
$p.ck = (function(x$1) {
  this.kp = x$1;
});
$p.f4 = (function(x$1) {
  this.kr = x$1;
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
  return this.km;
});
$p.cx = (function() {
  return this.ko;
});
$p.gr = (function() {
  return this.kt;
});
$p.et = (function(x$1) {
  this.kt = x$1;
});
$p.fX = (function(x$0) {
  this.km = x$0;
});
$p.fY = (function(x$0) {
  this.ko = x$0;
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
  return this.ks;
});
$p.he = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kn.e(nextParentValue));
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
$p.jQ = (function() {
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
  ad: 1,
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
  this.kx = null;
  this.kw = false;
  this.ky = null;
  this.ho = 0;
  this.ku = null;
  this.kv = null;
  this.kA = false;
  this.hp = null;
  this.hq = false;
  this.gx = 0;
  this.cW = null;
  this.hr = null;
  this.hs = null;
  this.kz = 0;
  this.cW = parent;
  this.hr = project;
  this.hs = recover;
  this.kx = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ho = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hp = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kz = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.dN = (function() {
  return this.kx;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kw;
});
$p.dO = (function() {
  return this.ky;
});
$p.ck = (function(x$1) {
  this.kw = x$1;
});
$p.f4 = (function(x$1) {
  this.ky = x$1;
});
$p.q = (function(obj) {
  return (this === obj);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.iW = (function() {
  return this.ho;
});
$p.iX = (function(x$1) {
  this.ho = x$1;
});
$p.ge = (function(observer) {
  observer.en($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cv = (function() {
  return this.ku;
});
$p.cx = (function() {
  return this.kv;
});
$p.gr = (function() {
  return this.kA;
});
$p.et = (function(x$1) {
  this.kA = x$1;
});
$p.fX = (function(x$0) {
  this.ku = x$0;
});
$p.fY = (function(x$0) {
  this.kv = x$0;
});
$p.jJ = (function() {
  return this.hp;
});
$p.pq = (function(x$1) {
  this.hp = x$1;
});
$p.k0 = (function() {
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
  return this.kz;
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
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jI(this.hr), transaction);
  })));
});
$p.jf = (function() {
  var originalValue = this.cW.k0().jI(this.hr);
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
  ad: 1,
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
  this.kE = null;
  this.kD = false;
  this.kF = null;
  this.kB = null;
  this.kC = null;
  this.kJ = false;
  this.ht = null;
  this.kG = null;
  this.kH = null;
  this.kI = 0;
  this.ht = parent;
  this.kG = project;
  this.kH = recover;
  this.kE = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kI = ((1 + parent.eq()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.dN = (function() {
  return this.kE;
});
$p.dJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.x = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f2 = (function() {
  return this.kD;
});
$p.dO = (function() {
  return this.kF;
});
$p.ck = (function(x$1) {
  this.kD = x$1;
});
$p.f4 = (function(x$1) {
  this.kF = x$1;
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
  return this.kB;
});
$p.cx = (function() {
  return this.kC;
});
$p.gr = (function() {
  return this.kJ;
});
$p.et = (function(x$1) {
  this.kJ = x$1;
});
$p.fX = (function(x$0) {
  this.kB = x$0;
});
$p.fY = (function(x$0) {
  this.kC = x$0;
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
$p.jQ = (function() {
  return this.ht;
});
$p.eq = (function() {
  return this.kI;
});
$p.he = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kG.e(nextParentValue));
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
  var this$1 = this.kH;
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
  ad: 1,
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
  return $m_s_util_hashing_MurmurHash3$().pJ(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jE = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bh = (function(len) {
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
  return this.jE((x | 0));
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
$p.bs = (function() {
  return "SeqView";
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bh = (function(len) {
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
  $thiz.lR = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.mA = new $c_Lcom_raquo_laminar_api_Laminar$$anon$2();
  $thiz.q1 = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
}
function $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, makeModifier) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    makeModifier.e(element).bE(element);
  })), $thiz.lx);
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
  return $m_s_util_hashing_MurmurHash3$().s8(this);
});
$p.bs = (function() {
  return "Map";
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.g6 = (function(coll) {
  return this.pp().aC(coll);
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
  aa: 1,
  a: 1,
  aV: 1,
  l: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.ma = null;
  this.mb = false;
  this.m2 = null;
  this.m3 = false;
  this.lS = null;
  this.lT = false;
  this.lU = null;
  this.lV = false;
  this.lW = null;
  this.lX = false;
  this.lY = null;
  this.lZ = false;
  this.m0 = null;
  this.m1 = false;
  this.lC = null;
  this.lD = false;
  this.lN = null;
  this.lO = false;
  this.m6 = null;
  this.m7 = false;
  this.mo = null;
  this.mp = false;
  this.lI = null;
  this.lJ = false;
  this.mi = null;
  this.mj = false;
  this.mk = null;
  this.ml = false;
  this.lP = null;
  this.lQ = false;
  this.mm = null;
  this.mn = false;
  this.m4 = null;
  this.m5 = false;
  this.mq = null;
  this.mr = false;
  this.lK = null;
  this.lL = false;
  this.my = null;
  this.mz = false;
  this.lE = null;
  this.lF = false;
  this.m8 = null;
  this.m9 = false;
  this.mu = null;
  this.mv = false;
  this.me = null;
  this.mf = false;
  this.mc = null;
  this.md = false;
  this.mg = null;
  this.mh = false;
  this.lM = null;
  this.y = null;
  this.gB = null;
  this.lx = null;
  this.lA = null;
  this.lB = false;
  this.ly = null;
  this.lz = false;
  this.lG = null;
  this.lH = false;
  this.ms = null;
  this.mt = false;
  this.lR = null;
  this.mA = null;
  this.mw = null;
  this.mx = false;
  this.q1 = null;
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
$p.pi = (function() {
  if ((!this.mb)) {
    this.ma = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    this.mb = true;
  }
  return this.ma;
});
$p.rN = (function() {
  if ((!this.m3)) {
    this.m2 = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.m3 = true;
  }
  return this.m2;
});
$p.rv = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.lT = true;
  }
  return this.lS;
});
$p.rL = (function() {
  if ((!this.lV)) {
    this.lU = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.lV = true;
  }
  return this.lU;
});
$p.jy = (function() {
  if ((!this.lX)) {
    this.lW = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.lX = true;
  }
  return this.lW;
});
$p.ej = (function() {
  if ((!this.lZ)) {
    this.lY = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.lZ = true;
  }
  return this.lY;
});
$p.f0 = (function() {
  if ((!this.m1)) {
    this.m0 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.m1 = true;
  }
  return this.m0;
});
$p.fM = (function() {
  if ((!this.lD)) {
    this.lC = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.lD = true;
  }
  return this.lC;
});
$p.h8 = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.lO = true;
  }
  return this.lN;
});
$p.ci = (function() {
  if ((!this.m7)) {
    this.m6 = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.m7 = true;
  }
  return this.m6;
});
$p.hh = (function() {
  if ((!this.mp)) {
    this.mo = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mp = true;
  }
  return this.mo;
});
$p.qW = (function() {
  if ((!this.lJ)) {
    this.lI = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.lJ = true;
  }
  return this.lI;
});
$p.b8 = (function() {
  if ((!this.mj)) {
    this.mi = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mj = true;
  }
  return this.mi;
});
$p.jT = (function() {
  if ((!this.ml)) {
    this.mk = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.ml = true;
  }
  return this.mk;
});
$p.W = (function() {
  if ((!this.lQ)) {
    this.lP = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.lQ = true;
  }
  return this.lP;
});
$p.jX = (function() {
  if ((!this.mn)) {
    this.mm = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.mn = true;
  }
  return this.mm;
});
$p.g9 = (function() {
  if ((!this.m5)) {
    this.m4 = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.m5 = true;
  }
  return this.m4;
});
$p.pN = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mr = true;
  }
  return this.mq;
});
$p.qX = (function() {
  if ((!this.lL)) {
    this.lK = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mB);
    this.lL = true;
  }
  return this.lK;
});
$p.pY = (function() {
  if ((!this.mz)) {
    this.my = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mz = true;
  }
  return this.my;
});
$p.oq = (function() {
  if ((!this.lF)) {
    this.lE = new $c_Lcom_raquo_laminar_keys_HtmlProp("alt", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.lF = true;
  }
  return this.lE;
});
$p.jB = (function() {
  if ((!this.m9)) {
    this.m8 = new $c_Lcom_raquo_laminar_keys_HtmlProp("id", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.m9 = true;
  }
  return this.m8;
});
$p.jY = (function() {
  if ((!this.mv)) {
    this.mu = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().bb);
    this.mv = true;
  }
  return this.mu;
});
$p.em = (function() {
  if ((!this.mf)) {
    this.me = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mf = true;
  }
  return this.me;
});
$p.sp = (function() {
  if ((!this.md)) {
    this.mc = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.md = true;
  }
  return this.mc;
});
$p.jO = (function() {
  if ((!this.mh)) {
    this.mg = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mh = true;
  }
  return this.mg;
});
$p.qq = (function() {
  if ((!this.lB)) {
    this.lA = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lB = true;
  }
  return this.lA;
});
$p.iV = (function() {
  if ((!this.lz)) {
    this.ly = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(this);
    this.lz = true;
  }
  return this.ly;
});
$p.qP = (function() {
  if ((!this.lH)) {
    this.lG = new $c_Lcom_raquo_laminar_api_Laminar$aria$(this);
    this.lH = true;
  }
  return this.lG;
});
$p.ba = (function() {
  if ((!this.mt)) {
    this.ms = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mt = true;
  }
  return this.ms;
});
$p.td = (function() {
  if ((!this.mx)) {
    this.mw = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mx = true;
  }
  return this.mw;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dx: 1,
  dJ: 1,
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
$p.bs = (function() {
  return "IndexedSeqView";
});
$p.bh = (function(len) {
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
$p.bs = (function() {
  return "IndexedSeqView";
});
$p.bh = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fM: 1,
  bS: 1,
  aS: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
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
  this.iG = null;
  this.nN = null;
  this.iG = underlying;
  this.nN = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.B = (function(n) {
  return this.iG.B(n);
});
$p.v = (function() {
  return this.iG.aB;
});
$p.c5 = (function() {
  return "ArrayBufferView";
});
$p.n = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.nN);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  gY: 1,
  fx: 1,
  aS: 1,
  ar: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
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
$p.pp = (function() {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gD)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gE)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gF)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gG)));
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
$p.j3 = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.bg = (function(key) {
  return false;
});
$p.c7 = (function(key, default$1) {
  return default$1.T();
});
$p.n = (function() {
  return $m_sc_Iterator$().O;
});
$p.dS = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.e = (function(key) {
  this.j3(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gp: 1,
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
  return ($m_sr_BoxesRunTime$().s(key, this.cp) ? this.e8 : default$1.T());
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
  return ($m_sr_BoxesRunTime$().s(key, this.ca) ? this.df : ($m_sr_BoxesRunTime$().s(key, this.cb) ? this.dg : default$1.T()));
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
  return ($m_sr_BoxesRunTime$().s(key, this.bZ) ? this.cG : ($m_sr_BoxesRunTime$().s(key, this.c0) ? this.cH : ($m_sr_BoxesRunTime$().s(key, this.c1) ? this.cI : default$1.T())));
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
  this.by = null;
  this.cc = null;
  this.bz = null;
  this.cd = null;
  this.bA = null;
  this.ce = null;
  this.bB = null;
  this.cf = null;
  this.by = key1;
  this.cc = value1;
  this.bz = key2;
  this.cd = value2;
  this.bA = key3;
  this.ce = value3;
  this.bB = key4;
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
  if ($m_sr_BoxesRunTime$().s(key, this.by)) {
    return this.cc;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bz)) {
    return this.cd;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bA)) {
    return this.ce;
  } else if ($m_sr_BoxesRunTime$().s(key, this.bB)) {
    return this.cf;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bg = (function(key) {
  return ((($m_sr_BoxesRunTime$().s(key, this.by) || $m_sr_BoxesRunTime$().s(key, this.bz)) || $m_sr_BoxesRunTime$().s(key, this.bA)) || $m_sr_BoxesRunTime$().s(key, this.bB));
});
$p.c7 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().s(key, this.by) ? this.cc : ($m_sr_BoxesRunTime$().s(key, this.bz) ? this.cd : ($m_sr_BoxesRunTime$().s(key, this.bA) ? this.ce : ($m_sr_BoxesRunTime$().s(key, this.bB) ? this.cf : default$1.T()))));
});
$p.n = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.es = (function(key, value) {
  return ($m_sr_BoxesRunTime$().s(key, this.by) ? new $c_sci_Map$Map4(this.by, value, this.bz, this.cd, this.bA, this.ce, this.bB, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bz) ? new $c_sci_Map$Map4(this.by, this.cc, this.bz, value, this.bA, this.ce, this.bB, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bA) ? new $c_sci_Map$Map4(this.by, this.cc, this.bz, this.cd, this.bA, value, this.bB, this.cf) : ($m_sr_BoxesRunTime$().s(key, this.bB) ? new $c_sci_Map$Map4(this.by, this.cc, this.bz, this.cd, this.bA, this.ce, this.bB, value) : $m_sci_HashMap$().iv.fb(this.by, this.cc).fb(this.bz, this.cd).fb(this.bA, this.ce).fb(this.bB, this.cf).fb(key, value)))));
});
$p.eY = (function(p) {
  return ((((!(!p.e(new $c_T2(this.by, this.cc)))) && (!(!p.e(new $c_T2(this.bz, this.cd))))) && (!(!p.e(new $c_T2(this.bA, this.ce))))) && (!(!p.e(new $c_T2(this.bB, this.cf)))));
});
$p.qV = (function(builder) {
  return builder.ee(this.by, this.cc).ee(this.bz, this.cd).ee(this.bA, this.ce).ee(this.bB, this.cf);
});
$p.w = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cm(this.by, this.cc);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bz, this.cd);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bA, this.ce);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cm(this.bB, this.cf);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gc)));
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
  if ((!$thiz.iw)) {
    if ($thiz.gR) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.gR = true;
    try {
      var res = $thiz.ix.T();
    } finally {
      $thiz.gR = false;
    }
    $thiz.bY = true;
    $thiz.ix = null;
    $thiz.iy = res;
    $thiz.iw = true;
  }
  return $thiz.iy;
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
  this.iy = null;
  this.ix = null;
  this.bY = false;
  this.gR = false;
  this.iw = false;
  this.ix = lazyState;
  this.bY = false;
  this.gR = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bs = (function() {
  return "LinearSeq";
});
$p.v = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bh = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jE = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.B = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.f7 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.J = (function() {
  return ((!this.iw) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.iy);
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
$p.p6 = (function() {
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
  return ((this.bY && (this.J() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().O : new $c_sci_LazyList$LazyIterator(this));
});
$p.bF = (function(f) {
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
$p.rk = (function(n) {
  return ((n <= 0) ? this : ((this.bY && (this.J() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().iz : $m_sci_LazyList$().sP(this, n)));
});
$p.dE = (function(sb, start, sep, end) {
  this.p6();
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
$p.oV = (function(n) {
  return this.rk(n);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gU)));
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
  return $m_sci_IndexedSeqDefaults$().nC;
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bh = (function(len) {
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
  return $m_s_util_hashing_MurmurHash3$().pJ(this);
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
$p.bF = (function(f) {
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
  return $m_sjsr_WrappedVarArgs$().js(coll);
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
  this.bm = null;
  this.bm = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pp = (function() {
  return $m_sci_HashMap$();
});
$p.D = (function() {
  return this.bm.aN;
});
$p.aM = (function() {
  return this.bm.aN;
});
$p.c = (function() {
  return (this.bm.aN === 0);
});
$p.n = (function() {
  return (this.c() ? $m_sc_Iterator$().O : new $c_sci_MapKeyValueTupleIterator(this.bm));
});
$p.bg = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Y(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bm.je(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Y(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bm.j1(key, keyUnimprovedHash, keyHash, 0);
});
$p.c7 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().Y(key);
  var keyHash = $m_sc_Hashing$().cj(keyUnimprovedHash);
  return this.bm.ju(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fb = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().Y(key);
  var newRootNode = this.bm.pW(key, value, keyUnimprovedHash, $m_sc_Hashing$().cj(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bm) ? this : new $c_sci_HashMap(newRootNode));
});
$p.eh = (function(f) {
  this.bm.eh(f);
});
$p.q = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bm;
      var x$2 = that.bm;
      return ((x === null) ? (x$2 === null) : x.q(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.w = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().iT;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bm);
    return $m_s_util_hashing_MurmurHash3$().k1(hashIterator, $m_s_util_hashing_MurmurHash3$().dD);
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
  gH: 1,
  g0: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gI)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gS)));
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
  $thiz.iL = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
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
  return $doubleToInt((size * $thiz.iK));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.iK = loadFactor;
  $thiz.aT = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.iL = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aT.a.length);
  $thiz.dy = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.iK = 0.0;
  this.aT = null;
  this.iL = 0;
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
  var hash = this.hf($m_sr_Statics$().Y(elem));
  var x1 = this.aT.a[(hash & (((-1) + this.aT.a.length) | 0))];
  return (((x1 === null) ? null : x1.rt(elem, hash)) !== null);
});
$p.b4 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.iK)));
  if ((target > this.aT.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.h4 = (function(elem) {
  if ((((1 + this.dy) | 0) >= this.iL)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aT.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hf($m_sr_Statics$().Y(elem)));
});
$p.on = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hf((h$2$2 | 0)));
    }));
    xs.tj.ts(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.r()) {
      var next = iter.j();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eR, next.cO);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rl();
    while (iter$2.r()) {
      var next$2 = iter$2.j();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pn(), next$2.ph());
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
  return $m_s_util_hashing_MurmurHash3$().k1(hashIterator, $m_s_util_hashing_MurmurHash3$().oh);
});
$p.b2 = (function(elem) {
  this.h4(elem);
  return this;
});
$p.b1 = (function(elems) {
  return this.on(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cr: 1,
  gV: 1,
  fy: 1,
  j: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aW: 1,
  fY: 1,
  e: 1,
  d: 1,
  hj: 1,
  I: 1,
  hk: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gn)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hf)));
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
  return $m_sci_ArraySeq$().jp(coll, this.ae());
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
$p.bs = (function() {
  return "IndexedSeq";
});
$p.bh = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.dM = (function() {
  return $m_sci_ArraySeq$().it;
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
  return $m_sci_ArraySeq$().jp(coll, this.ae());
});
$p.bU = (function() {
  return $m_sci_ArraySeq$().it;
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
$p.bs = (function() {
  return "IndexedSeq";
});
$p.bh = (function(len) {
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
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().nK : new $c_sci_NewVectorIterator(this, this.v(), this.cB()));
});
$p.c5 = (function() {
  return "Vector";
});
$p.bS = (function(xs, start, len) {
  return this.n().bS(xs, start, len);
});
$p.h6 = (function() {
  return $m_sci_Vector$().nJ;
});
$p.aH = (function(index) {
  return $m_scg_CommonErrors$().ga(index, (((-1) + this.v()) | 0));
});
$p.bF = (function(f) {
  var c = this.cB();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.jn((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.cA(i), f);
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
$p.bs = (function() {
  return "IndexedSeq";
});
$p.bh = (function(len) {
  var x = this.v();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.v();
});
$p.dM = (function() {
  return $m_scm_ArraySeq$().iJ;
});
$p.pe = (function(coll) {
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
  return $x_1.jH(elemRuntimeClass.a3.r().w(jsElems));
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
  return this.pe(coll);
});
$p.g6 = (function(coll) {
  return this.pe(coll);
});
$p.bU = (function() {
  return $m_scm_ArraySeq$().iJ;
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
  return this$1.oJ(this.d6, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().p3(this.d6, that.d6) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oB(this.d7, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().oX(this.d7, that.d7) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oC(this.cE, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().oY(this.cE, that.cE) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oD(this.d8, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().oZ(this.d8, that.d8) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oE(this.d9, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().p0(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oF(this.da, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jj(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oG(this.db, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().p1(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
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
  return $m_s_reflect_ClassTag$().ow($objectGetClass(this.cn).a3.Q());
});
$p.v = (function() {
  return this.cn.a.length;
});
$p.B = (function(i) {
  return this.cn.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oA(this.cn, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().p4(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oH(this.dc, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().p2(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
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
  return this$1.oI(this.e6, this$1.ap);
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
$p.bs = (function() {
  return "LinearSeq";
});
$p.jE = (function(x) {
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
$p.oi = (function(prefix) {
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
      curr.Z = temp;
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
    return this.oi(prefix);
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
      curr.Z = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.ot = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oi(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.r0 = (function(pf) {
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
        t.Z = nx;
        t = nx;
      }
      rest = rest.p();
    }
    return h;
  }
});
$p.bF = (function(f) {
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
$p.bh = (function(len) {
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
$p.oV = (function(n) {
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
  return this$1.oJ(this.dq, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().p3(this.dq, that.dq) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oB(this.dr, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().oX(this.dr, that.dr) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oC(this.bQ, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().oY(this.bQ, that.bQ) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
      jsb.or(this.bQ);
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
  return this$1.oD(this.ds, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().oZ(this.ds, that.ds) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oE(this.dt, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().p0(this.dt, that.dt) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oF(this.du, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jj(this.du, that.du) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oG(this.dv, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().p1(this.dv, that.dv) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return $m_s_reflect_ClassTag$().ow($objectGetClass(this.cM).a3.Q());
});
$p.v = (function() {
  return this.cM.a.length;
});
$p.B = (function(index) {
  return this.cM.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oA(this.cM, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().p4(this.cM, that.cM) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oH(this.dw, this$1.ap);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().p2(this.dw, that.dw) : $c_scm_ArraySeq.prototype.q.call(this, that));
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
  return this$1.oI(this.ec, this$1.ap);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h5)));
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
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
    var $x_1 = $m_sci_VectorStatics$().bp;
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
  gL: 1,
  ac: 1,
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
  this.iq = null;
  this.Z = null;
  this.iq = head;
  this.Z = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.u = (function() {
  return this.iq;
});
$p.bk = (function() {
  return "::";
});
$p.bi = (function() {
  return 2;
});
$p.bj = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.iq;
      break;
    }
    case 1: {
      return this.Z;
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
  return this.Z;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  g6: 1,
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
$p.jA = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.t2 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.D = (function() {
  return 0;
});
$p.n = (function() {
  return $m_sc_Iterator$().O;
});
$p.bk = (function() {
  return "Nil";
});
$p.bi = (function() {
  return 0;
});
$p.bj = (function(x$1) {
  return $m_sr_Statics$().ek(x$1);
});
$p.bG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.p = (function() {
  this.t2();
});
$p.u = (function() {
  this.jA();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gB: 1,
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().iE, $m_sci_VectorStatics$().iE, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.ou = (function(index) {
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
  this.ou((v1 | 0));
});
$p.B = (function(i) {
  this.ou(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  gK: 1,
  ab: 1,
  ac: 1,
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
  this.bo = null;
  this.bP = len1;
  this.bo = data2;
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
      return ((i2 < this.bo.a.length) ? this.bo.a[i2].a[i1] : this.k.a[(31 & io)]);
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
      if ((i2 < this.bo.a.length)) {
        var a2 = this.bo;
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
        return new $c_sci_Vector2(this.g, this.bP, this.bo, a1c$1, this.l);
      }
    } else {
      var a1$2 = this.g;
      var a1c$2 = a1$2.h();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bP, this.bo, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector2(this.g, this.bP, this.bo, x$1, x$2);
  } else if ((this.bo.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().I(this.bo, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.l) | 0);
    return new $c_sci_Vector2(this.g, this.bP, x$6, a, x$8);
  } else {
    var $x_5 = this.g;
    var $x_4 = this.bP;
    var $x_3 = this.bo;
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
      return this.bo;
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
      return ((i2 < this.bo.a.length) ? this.bo.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  gM: 1,
  ab: 1,
  ac: 1,
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
  this.bD = null;
  this.bd = 0;
  this.aY = null;
  this.aZ = null;
  this.bc = len1;
  this.bD = prefix2;
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
      return this.bD.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
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
        return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, a3c, this.aZ, this.k, this.l);
      } else if ((i2 < this.aZ.a.length)) {
        var a2$1 = this.aZ;
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, this.aY, a2c$1, this.k, this.l);
      } else {
        var a1$2 = this.k;
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, this.aY, this.aZ, a1c$2, this.l);
      }
    } else if ((index >= this.bc)) {
      var io$2 = ((index - this.bc) | 0);
      var a2$2 = this.bD;
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
      return new $c_sci_Vector3(a1c$4, this.bc, this.bD, this.bd, this.aY, this.aZ, this.k, this.l);
    }
  } else {
    throw this.aH(index);
  }
});
$p.dF = (function(elem) {
  if ((this.k.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eW(this.k, elem);
    var x$2 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, this.aY, this.aZ, x$1, x$2);
  } else if ((this.aZ.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().I(this.aZ, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, this.aY, x$9, a, x$11);
  } else if ((this.aY.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().I(this.aY, $m_sci_VectorStatics$().I(this.aZ, this.k));
    var x$18 = $m_sci_VectorStatics$().bp;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.l) | 0);
    return new $c_sci_Vector3(this.g, this.bc, this.bD, this.bd, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.g;
    var $x_7 = this.bc;
    var $x_6 = this.bD;
    var $x_5 = this.bd;
    var $x_4 = this.aY;
    var $x_3 = this.bd;
    var $x_2 = $m_sci_VectorStatics$().eP;
    var x = $m_sci_VectorStatics$().I(this.aZ, this.k);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bp;
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
      return this.bD;
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
      return this.bD.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.g.a[index];
    }
  } else {
    throw this.aH(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gN: 1,
  ab: 1,
  ac: 1,
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
    var x$24 = $m_sci_VectorStatics$().bp;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.l) | 0);
    return new $c_sci_Vector4(this.g, this.aQ, this.b6, this.aR, this.b7, this.aS, this.aD, x$23, x$24, a$1, x$26);
  } else if ((this.aD.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().I(this.aD, $m_sci_VectorStatics$().I(this.aF, $m_sci_VectorStatics$().I(this.aE, this.k)));
    var x$35 = $m_sci_VectorStatics$().cr;
    var x$36 = $m_sci_VectorStatics$().bp;
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
    var $x_3 = $m_sci_VectorStatics$().iF;
    var x = $m_sci_VectorStatics$().I(this.aF, $m_sci_VectorStatics$().I(this.aE, this.k));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cr;
    var $x_1 = $m_sci_VectorStatics$().bp;
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
  gO: 1,
  ab: 1,
  ac: 1,
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
    var x$30 = $m_sci_VectorStatics$().bp;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, this.ak, x$29, x$30, a$1, x$32);
  } else if ((this.ak.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k)));
    var x$44 = $m_sci_VectorStatics$().cr;
    var x$45 = $m_sci_VectorStatics$().bp;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.l) | 0);
    return new $c_sci_Vector5(this.g, this.at, this.aI, this.au, this.aJ, this.av, this.aK, this.aw, this.ah, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.ah.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().I(this.ah, $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k))));
    var x$58 = $m_sci_VectorStatics$().eP;
    var x$59 = $m_sci_VectorStatics$().cr;
    var x$60 = $m_sci_VectorStatics$().bp;
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
    var $x_4 = $m_sci_VectorStatics$().nL;
    var x = $m_sci_VectorStatics$().I(this.ak, $m_sci_VectorStatics$().I(this.aj, $m_sci_VectorStatics$().I(this.ai, this.k)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().eP;
    var $x_2 = $m_sci_VectorStatics$().cr;
    var $x_1 = $m_sci_VectorStatics$().bp;
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
  gP: 1,
  ab: 1,
  ac: 1,
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
    var x$36 = $m_sci_VectorStatics$().bp;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, this.ab, x$35, x$36, a$1, x$38);
  } else if ((this.ab.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k)));
    var x$53 = $m_sci_VectorStatics$().cr;
    var x$54 = $m_sci_VectorStatics$().bp;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, this.ac, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.ac.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().I(this.ac, $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k))));
    var x$70 = $m_sci_VectorStatics$().eP;
    var x$71 = $m_sci_VectorStatics$().cr;
    var x$72 = $m_sci_VectorStatics$().bp;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.l) | 0);
    return new $c_sci_Vector6(this.g, this.al, this.ax, this.am, this.ay, this.an, this.az, this.ao, this.aA, this.ar, this.a8, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a8.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().I(this.a8, $m_sci_VectorStatics$().I(this.ac, $m_sci_VectorStatics$().I(this.ab, $m_sci_VectorStatics$().I(this.aa, $m_sci_VectorStatics$().I(this.a9, this.k)))));
    var x$87 = $m_sci_VectorStatics$().iF;
    var x$88 = $m_sci_VectorStatics$().eP;
    var x$89 = $m_sci_VectorStatics$().cr;
    var x$90 = $m_sci_VectorStatics$().bp;
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
  gQ: 1,
  ab: 1,
  ac: 1,
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
$p.bs = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bh = (function(len) {
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
$p.qx = (function(x) {
  var this$1 = this.aV;
  var str = ("" + $cToS(x));
  this$1.t = (this$1.t + str);
  return this;
});
$p.x = (function() {
  return this.aV.t;
});
$p.os = (function(xs) {
  if (false) {
    var this$3 = this.aV;
    var str = xs.tk;
    this$3.t = (("" + this$3.t) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aV.or(xs.bQ);
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
  return this.qx($uC(elem));
});
$p.g5 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).os(coll);
});
$p.g6 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).os(coll);
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aV.oK(i));
});
$p.B = (function(i) {
  return $bC(this.aV.oK(i));
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.he)));
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
$p.qF = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c3 === 0)) {
    this.c2 = last1;
  } else {
    this.cP.Z = last1;
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
      last0.Z = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.c3 = len;
    this.cP = last0;
  }
  return this;
});
$p.qv = (function(xs) {
  var it = xs.n();
  if (it.r()) {
    var fresh = new $c_scm_ListBuffer().hg(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c3 === 0)) {
      this.c2 = fresh.c2;
    } else {
      this.cP.Z = fresh.c2;
    }
    this.cP = fresh.cP;
    this.c3 = ((this.c3 + fresh.c3) | 0);
  }
  return this;
});
$p.bs = (function() {
  return "ListBuffer";
});
$p.b1 = (function(elems) {
  return this.qv(elems);
});
$p.b2 = (function(elem) {
  return this.qF(elem);
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
  return this.tf().n();
});
$p.bh = (function(len) {
  var x = this.aB;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.D = (function() {
  return this.aB;
});
$p.ji = (function(n) {
  this.dn = $m_scm_ArrayBuffer$().pI(this.dn, this.aB, n);
});
$p.b4 = (function(size) {
  if (((size > this.aB) && (size >= 1))) {
    this.ji(size);
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
$p.te = (function(index, elem) {
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
$p.tf = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.dp)));
});
$p.dM = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qC = (function(elem) {
  this.dp = ((1 + this.dp) | 0);
  var newSize = ((1 + this.aB) | 0);
  this.ji(newSize);
  this.aB = newSize;
  this.te((((-1) + this.aB) | 0), elem);
  return this;
});
$p.om = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aB;
    if ((elemsLength > 0)) {
      this.dp = ((1 + this.dp) | 0);
      this.ji(((this.aB + elemsLength) | 0));
      $m_s_Array$().g1(elems.dn, 0, this.dn, this.aB, elemsLength);
      this.aB = ((this.aB + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bs = (function() {
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
  return this.om(elems);
});
$p.b2 = (function(elem) {
  return this.qC(elem);
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
$p.bs = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bh = (function(len) {
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
  ir: 1,
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
