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
  return (arg0.$classData.Z ? arg0.g() : $objectClone(arg0));
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
        return null.ri();
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
        return instance.p(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.p.call(instance, x0);
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
        return instance.v();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.v.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.rj(x0);
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
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.p = (function(that) {
  return (this === that);
});
$p.z = (function() {
  var i = this.v();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.z();
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
$p.y = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
$p.y = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
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
    A: 1,
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
  $p.y = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.g = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    A: 1,
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
  as: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).iI() + "@") + $thiz.v());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.dC();
  return ((x === (void 0)) ? $thiz.dy() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().nW(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().ge, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.nW = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.pz = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  co: 1
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
$p.nD = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  cr: 1
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
  this.eh = 0;
  this.eh = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.nt = (function() {
  if ((this.eh === 2147483647)) {
    this.eh = 1;
  } else {
    this.eh = ((1 + this.eh) | 0);
  }
  return this.eh;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  cs: 1
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
  this.gQ = null;
  this.je = null;
  this.gR = 0;
  this.gQ = code;
  this.je = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().fR();
  this.gR = ((x === (void 0)) ? 1 : ((1 + x.gR) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().fV === (-1)) || (this.gR > $m_Lcom_raquo_airstream_core_Transaction$().fV))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().fV));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b2) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().dH.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ii(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  ct: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.fV = 0;
  this.jf = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.fV = 1000;
  this.jf = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.mU = (function(transaction) {
  try {
    transaction.gQ.d(transaction);
    var x = transaction.je;
    if ((x !== (void 0))) {
      while (x.rn()) {
        x.re().rq(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().c1(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  cu: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.fW.length | 0) === 0)) {
    if ((($thiz.dH.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.dH.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ii($thiz.dH.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.fW.length | 0) > 0)) {
        var callback = $thiz.fW.shift();
        try {
          callback.d(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().c1(e$2);
        }
      }
      while ((($thiz.dH.length | 0) > 0)) {
        var _trx = $thiz.dH.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ii(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.b2 = false;
  this.fW = null;
  this.dH = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.b2 = false;
  this.fW = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_F1.r().C)([])));
  this.dH = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  cv: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.dI.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.fX.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.fX.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.dI.set(parent, newChildren);
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
      (!(!$thiz.dI.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.fX = null;
  this.dI = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.fX = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.dI = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.ii = (function(newTransaction) {
  var x = this.fR();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().mU(newTransaction);
    this.pi(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.pi = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.fR();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().r(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.qq(transaction$tailLocal1);
    transaction$tailLocal1.gQ = $m_Lcom_raquo_airstream_core_Transaction$().jf;
    var maybeNextTransaction = this.fR();
    if ($m_sr_BoxesRunTime$().r(maybeNextTransaction, (void 0))) {
      if (((this.dI.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.dI.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.e0 + (transactions.length | 0)) | 0);
          numChildren.e0 = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.e0) + " children for ") + (this.dI.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().mU(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.qq = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().r(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.fR();
      if ((!$m_sr_BoxesRunTime$().r(maybeParentTransaction, (void 0)))) {
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
$p.fR = (function() {
  return this.fX[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  cw: 1
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
  this.jj = null;
  this.jh = null;
  this.ji = null;
  this.jj = onWillStart;
  this.jh = onStart;
  this.ji = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  cz: 1
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
$p.oM = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  cA: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.cQ.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.cQ.splice(index, 1);
    if ((!$thiz.bA.b())) {
      subscription.nv();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.g1.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.g1.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.jP = null;
  this.cQ = null;
  this.ei = false;
  this.g1 = null;
  this.bA = null;
  this.ej = 0;
  this.jP = onAccessAfterKilled;
  this.cQ = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.ei = true;
  this.g1 = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bA = $m_s_None$();
  this.ej = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.mu = (function() {
  if ((!(!this.bA.b()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.jP);
      this.bA = new $c_s_Some(newOwner);
      this.ei = false;
      this.ej = 0;
      var i = 0;
      var originalNumSubs = (this.cQ.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.ej) | 0);
        this.cQ[ix].nu(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.ei = true;
      this.ej = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.b2 || (!when))) {
      f();
    } else {
      this$4.b2 = true;
      try {
        f();
      } finally {
        this$4.b2 = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.pb = (function() {
  if ((!this.bA.b())) {
    this.ei = false;
    var arr = this.cQ;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].nv();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bA;
    if ((!this$4.b())) {
      this$4.O().nq();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.ei = true;
    this.bA = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.oF = (function(subscription, prepend) {
  if (prepend) {
    this.ej = ((1 + this.ej) | 0);
    this.cQ.unshift(subscription);
  } else {
    this.cQ.push(subscription);
  }
  var this$1 = this.bA;
  if ((!this$1.b())) {
    var x0 = this$1.O();
    subscription.nu(x0);
  }
});
$p.qz = (function(subscription) {
  if (this.ei) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.g1.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  cF: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.g2 = null;
  this.jQ = null;
  this.g3 = null;
  this.g2 = dynamicOwner;
  this.jQ = activate;
  this.g3 = $m_s_None$();
  dynamicOwner.oF(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.gF = (function() {
  this.g2.qz(this);
});
$p.nu = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.g3 = this.jQ.d(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b2 || (!when))) {
    f();
  } else {
    this$2.b2 = true;
    try {
      f();
    } finally {
      this$2.b2 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.nv = (function() {
  var this$1 = this.g3;
  if ((!this$1.b())) {
    this$1.O().gF();
    this.g3 = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  cG: 1
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
$p.fT = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.d(owner)))), prepend);
});
$p.nO = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.d(owner);
    return $m_s_None$();
  })), prepend);
});
$p.nP = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().fT(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  cH: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.mV($m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.eN();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.eN().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.eN().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.eN().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.eN().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.h0)) {
    $thiz.jT.N();
    $thiz.h0 = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.jU = null;
  this.jT = null;
  this.h0 = false;
  this.jU = owner;
  this.jT = cleanup;
  this.h0 = false;
  owner.nA(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.gF = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.jU, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  cJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.jV = null;
  this.jW = null;
  this.cR = null;
  this.dJ = false;
  this.jV = activate;
  this.jW = deactivate;
  this.cR = $m_s_None$();
  this.dJ = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.pW = (function() {
  var this$1 = this.cR;
  return ((!this$1.b()) && (!this$1.O().g2.bA.b()));
});
$p.qL = (function(nextOwner) {
  if (this.dJ) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cR;
  if ((!this$1.b())) {
    var x0 = this$1.O();
    var x$2 = x0.g2;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.pW() && (!nextOwner.bA.b()))) {
      this.dJ = true;
    }
    var this$3 = this.cR;
    if ((!this$3.b())) {
      this$3.O().gF();
      this.cR = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().fT(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.dJ)) {
        this.jV.N();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.dJ)) {
          this.jW.N();
        }
      })));
    })), false);
    this.cR = new $c_s_Some(newPilotSubscription);
    this.dJ = false;
  }
});
$p.oY = (function() {
  if (this.dJ) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.cR;
  if ((!this$1.b())) {
    this$1.O().gF();
  }
  this.cR = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  cK: 1
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
$p.mG = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  cO: 1
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
$p.oL = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().ni(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().oM(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  cR: 1
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
$p.b9 = (function(items) {
  return [...$m_sjsr_Compat$().qW(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  cS: 1
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
$p.pM = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.pt = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  cT: 1
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
  this.k8 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.p9($m_Lcom_raquo_laminar_api_package$().c.qQ().qR());
  this.k8 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.oG = (function(parent, child) {
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
$p.qw = (function(parent, child) {
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
$p.pS = (function(parent, newChild, referenceChild) {
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
$p.pR = (function(parent, newChild, referenceChild) {
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
$p.qB = (function(parent, newChild, oldChild) {
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
$p.q1 = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().r(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.ov = (function(element, listener) {
  element.addEventListener(listener.en.em.eY, listener.hi, listener.hj);
});
$p.qx = (function(element, listener) {
  element.removeEventListener(listener.en.em.eY, listener.hi, listener.hj);
});
$p.p8 = (function(tag) {
  return document.createElement(tag.hs);
});
$p.pC = (function(element, attr) {
  var x = this.pD(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hd.iu(x));
});
$p.pD = (function(element, attr) {
  var domValue = element.b6.getAttributeNS(null, attr.eZ);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.nN = (function(element, attr, value) {
  this.qI(element, attr, attr.hd.gC(value));
});
$p.qI = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.qy(element, attr);
  } else {
    element.b6.setAttribute(attr.eZ, domValue);
  }
});
$p.qy = (function(element, attr) {
  element.b6.removeAttribute(attr.eZ);
});
$p.qJ = (function(element, prop, value) {
  this.qK(element, prop, prop.lf.gC(value));
});
$p.qK = (function(element, prop, value) {
  element.b6[prop.dN] = value;
});
$p.p9 = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.lx);
});
$p.pG = (function(element, attr) {
  var x = this.pH(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.he.iu(x));
});
$p.pH = (function(element, attr) {
  var $x_2 = element.j2();
  var this$2 = attr.g7;
  var $x_1 = $x_2.getAttributeNS((this$2.b() ? null : this$2.O()), attr.hf);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qM = (function(element, attr, value) {
  this.qN(element, attr, attr.he.gC(value));
});
$p.qN = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.qA(element, attr);
  } else {
    var this$1 = attr.g7;
    if (this$1.b()) {
      element.j2().setAttribute(attr.g6, domValue);
    } else {
      var x0 = this$1.O();
      element.j2().setAttributeNS(x0, attr.g6, domValue);
    }
  }
});
$p.qA = (function(element, attr) {
  var $x_1 = element.j2();
  var this$2 = attr.g7;
  $x_1.removeAttributeNS((this$2.b() ? null : this$2.O()), attr.hf);
});
$p.p7 = (function(text) {
  return document.createComment(text);
});
$p.pa = (function(text) {
  return document.createTextNode(text);
});
$p.pX = (function(element) {
  return $m_sc_StringOps$().p1(element.tagName, 45);
});
$p.pd = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.mZ(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.mZ = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.k8, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.pc = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  cU: 1
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
  this.h6 = null;
  this.k9 = null;
  this.h5 = null;
  this.h6 = seq;
  this.k9 = scalaArray;
  this.h5 = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.co = (function(f) {
  if ((this.h6 !== null)) {
    this.h6.co(f);
  } else if ((this.h5 !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().pt(this.h5, $m_sjs_js_Any$().ni(f));
  } else {
    $m_sc_ArrayOps$().pu(this.k9, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  cV: 1
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
  cW: 1
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
  $thiz.h7 = $m_Lcom_raquo_airstream_state_Var$();
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
$p.om = (function(this$, onNext) {
  return new $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
    var observable = this$.dE();
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().nP(_$11.bM, observable, onNext);
  })), $m_Lcom_raquo_laminar_modifiers_Binder$());
});
var $d_Lcom_raquo_laminar_api_Implicits$RichSource$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Implicits$RichSource$, "com.raquo.laminar.api.Implicits$RichSource$", ({
  cY: 1
}));
var $n_Lcom_raquo_laminar_api_Implicits$RichSource$;
function $m_Lcom_raquo_laminar_api_Implicits$RichSource$() {
  if ((!$n_Lcom_raquo_laminar_api_Implicits$RichSource$)) {
    $n_Lcom_raquo_laminar_api_Implicits$RichSource$ = new $c_Lcom_raquo_laminar_api_Implicits$RichSource$();
  }
  return $n_Lcom_raquo_laminar_api_Implicits$RichSource$;
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.kh = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.li.b6.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bM.bA.b()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.go) {
        var ev$5 = false;
        ignoreNextActivation.go = ev$5;
      } else {
        fn.d(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().nO(element.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.d(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.el = null;
  this.l8 = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.el = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.l8 = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  d7: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.kq = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.a0 = $thiz.kq;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().el);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.eZ, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().pC(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().nN(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.nX = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().el, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.g6, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().pG(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qM(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.l9 = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().c.nV();
  $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iX()])));
  $m_Lcom_raquo_laminar_api_package$().c.nV();
  $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iX(), $m_Lcom_raquo_laminar_api_package$().c.qn()])));
  $m_Lcom_raquo_laminar_api_package$().c.oW();
  $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iX(), $m_Lcom_raquo_laminar_api_package$().c.gJ()])));
  this.l9 = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  di: 1
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
$p.oH = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.dM)) {
      ctx.nc();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.qS(maybeLastSeenChild.dq, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.dq = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.qS = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.dM)) {
    ctx.nc();
  }
  var elem = ctx.dK;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().r(maybeLastSeenChild.am(), ctx.cT.am().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().pT(ctx.dL, newChildNode, ctx.cT, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().nF(ctx.dL, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = (((-1) + elem$1) | 0);
    elem$1 = ev$4;
  }
  ctx.nE(newChildNode);
  ctx.cS.clear();
  ctx.cS.set(newChildNode.am(), newChildNode);
  ctx.dK = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  dj: 1
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
$p.aU = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.dq;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.ip(newValue));
      this.qT(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.dq = ev$2;
      ev$2 = null;
    } else {
      x.g8.textContent = renderable.ip(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.qT = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().nF(ctx.dL, ctx.cT, newTextNode, (void 0));
  ctx.cT = newTextNode;
  if (ctx.dM) {
    ctx.dM = false;
    ctx.nE(newTextNode);
    ctx.cS.clear();
    ctx.dK = 0;
  }
});
var $d_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildTextInserter$, "com.raquo.laminar.inserters.ChildTextInserter$", ({
  dk: 1
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
  this.dL = null;
  this.cT = null;
  this.dM = false;
  this.dK = 0;
  this.cS = null;
  this.dL = parentNode;
  this.cT = sentinelNode;
  this.dM = strictMode;
  this.dK = extraNodeCount;
  this.cS = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.nc = (function() {
  if ((this.dM || (this.dK !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().pc(this.dL.b6)));
  }
  if ((this.cS === null)) {
    this.cS = new Map();
  }
  if ((!(!(!(this.cT.am() instanceof Comment))))) {
    var contentNode = this.cT;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().pS(this.dL.b6, newSentinelNode.hl, contentNode.am());
    this.cT = newSentinelNode;
    this.dK = 1;
    this.cS.set(contentNode.am(), contentNode);
  }
  this.dM = true;
});
$p.nE = (function(after) {
  var elem = this.dK;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.am().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.cS.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().qv(this.dL, maybePrevChild);
        var ev$5 = (((-1) + elem$1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dn: 1
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
$p.qD = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(parentNode, sentinelNode, hooks);
  return this.r2(parentNode, sentinelNode, strictMode);
});
$p.r2 = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  dp: 1
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
$p.gI = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().eL($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  ds: 1
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
  this.em = null;
  this.g5 = false;
  this.hc = false;
  this.g4 = null;
  this.em = eventProp;
  this.g5 = shouldUseCapture;
  this.hc = shouldBePassive;
  this.g4 = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.q6 = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.g4.d(ev);
    return (this$2.b() ? $m_s_None$() : new $c_s_Some((this$2.O(), value.N())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.em, this.g5, this.hc, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  dw: 1
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
$p.gB = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  dx: 1
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
  this.lh = null;
  this.lg = null;
  this.lh = key;
  this.lg = items;
}
$p = $c_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_LockedCompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_LockedCompositeKey() {
}
$h_Lcom_raquo_laminar_keys_LockedCompositeKey.prototype = $p;
$p.ol = (function(include) {
  return this.lh.ok(include.dE().fI(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((include$2) => ((!(!include$2)) ? this.lg : $m_sci_Nil$())))), $m_Lcom_raquo_laminar_api_package$().on());
});
var $d_Lcom_raquo_laminar_keys_LockedCompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_LockedCompositeKey, "com.raquo.laminar.keys.LockedCompositeKey", ({
  dA: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.nZ = null;
  this.o0 = null;
  this.o1 = null;
  this.o2 = null;
  this.nZ = "http://www.w3.org/2000/svg";
  this.o0 = "http://www.w3.org/1999/xlink";
  this.o1 = "http://www.w3.org/XML/1998/namespace";
  this.o2 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.q9 = (function(namespace) {
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
  dC: 1
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
  this.li = null;
  this.hg = null;
  this.li = thisNode;
  this.hg = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  dD: 1
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
  dE: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Binder$;
function $m_Lcom_raquo_laminar_modifiers_Binder$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Binder$)) {
    $n_Lcom_raquo_laminar_modifiers_Binder$ = new $c_Lcom_raquo_laminar_modifiers_Binder$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Binder$;
}
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.o3 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.o3 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  dK: 1
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
  this.ls = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.ls = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  dO: 1
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
  this.R = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.R = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.qV())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  dT: 1
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
$p.eC = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.ed(nextParent);
  if ((hooks !== (void 0))) {
    hooks.nw(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().oG(parent.am(), child.am());
  if (appended) {
    child.ea(nextParent);
  }
  return appended;
});
$p.qv = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().r(child.am().parentNode, parent.am())) {
    child.ed($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().qw(parent.am(), child.am());
    child.ea($m_s_None$());
  }
  return removed;
});
$p.pT = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.ed(nextParent);
  if ((hooks !== (void 0))) {
    hooks.nw(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().pR(parent.am(), newChild.am(), referenceChild.am());
  newChild.ea(nextParent);
  return inserted;
});
$p.nF = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.iq().ba(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.ed($m_s_None$());
      newChild.ed(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.nw(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().qB(parent.am(), newChild.am(), oldChild.am());
      if (replaced) {
        oldChild.ea($m_s_None$());
        newChild.ea(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  dW: 1
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
$p.r1 = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().fT(element.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.d(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  dY: 1
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
  this.o4 = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.o4 = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  e3: 1
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
  e4: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildTextReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
}
function $s_Lfirst_Main__main__AT__V(args) {
  $m_Lfirst_Main$().q3(args);
}
function $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (appContainer$lzy1$1.gp ? appContainer$lzy1$1.gq : appContainer$lzy1$1.pQ(document.querySelector("#appContainer")));
}
function $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.gp ? appContainer$lzy1$2.gq : $p_Lfirst_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
}
/** @constructor */
function $c_Lfirst_Main$() {
  this.ht = null;
  this.g9 = null;
  this.ga = null;
  this.lz = null;
  this.ly = null;
  $n_Lfirst_Main$ = this;
  this.ht = $m_sci_Map$().fB($m_sr_ScalaRunTime$().o(new ($d_T2.r().C)([new $c_T2("en", $m_sci_Map$().fB($m_sr_ScalaRunTime$().o(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Full Context Swapping for Developer Workflows"), new $c_T2("description", "A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter."), new $c_T2("whyTitle", "Why first?"), new $c_T2("whyHighlight", "Your repository is for <em>your</em> code, not your tools' config files."), new $c_T2("whyText", "Modern development has normalized an uncomfortable reality: every tool we adopt\u2014IDEs, linters, CI systems, and now AI coding assistants\u2014leaves its own debris in our repositories. When you want to try a different AI assistant, you shouldn't need to commit new config files to your repository."), new $c_T2("feature1Title", "Non-invasive"), new $c_T2("feature1Text", "AI assistants and tools store their configs outside your repo."), new $c_T2("feature2Title", "Context Swapping"), new $c_T2("feature2Text", "Switch entire development environments with one command."), new $c_T2("feature3Title", "Remote Contexts"), new $c_T2("feature3Text", "Share team configurations via HTTP/HTTPS or GitHub."), new $c_T2("quickStartTitle", "Quick Start"), new $c_T2("step1Title", "Save your current context"), new $c_T2("step2Title", "Load a saved context"), new $c_T2("step3Title", "Swap to a different setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackText", "Built with Scala Native for near-instant startup times and zero JVM overhead."), new $c_T2("footerText", "Built with \u2764\ufe0f using Scala Native and late-night coding sessions."), new $c_T2("viewOnGithub", "View on GitHub")])))), new $c_T2("pt-br", $m_sci_Map$().fB($m_sr_ScalaRunTime$().o(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Troca Completa de Contexto para Fluxos de Trabalho de Desenvolvedores"), new $c_T2("description", "Uma ferramenta de linha de comando que permite a troca perfeita entre diferentes contextos de desenvolvimento e configura\u00e7\u00f5es de assistentes de IA, mantendo seus projetos limpos de arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyTitle", "Por que first?"), new $c_T2("whyHighlight", "Seu reposit\u00f3rio \u00e9 para o <em>seu</em> c\u00f3digo, n\u00e3o para arquivos de configura\u00e7\u00e3o de ferramentas."), new $c_T2("whyText", "O desenvolvimento moderno normalizou uma realidade desconfort\u00e1vel: cada ferramenta que adotamos\u2014IDEs, linters, sistemas de CI e agora assistentes de codifica\u00e7\u00e3o de IA\u2014deixa seus pr\u00f3prios detritos em nossos reposit\u00f3rios. Quando voc\u00ea quer experimentar um assistente de IA diferente, n\u00e3o deveria precisar commitar novos arquivos de configura\u00e7\u00e3o em seu reposit\u00f3rio."), new $c_T2("feature1Title", "N\u00e3o invasivo"), new $c_T2("feature1Text", "Assistentes de IA e ferramentas armazenam suas configura\u00e7\u00f5es fora do seu reposit\u00f3rio."), new $c_T2("feature2Title", "Troca de Contexto"), new $c_T2("feature2Text", "Troque ambientes de desenvolvimento inteiros com um comando."), new $c_T2("feature3Title", "Contextos Remotos"), new $c_T2("feature3Text", "Compartilhe configura\u00e7\u00f5es de equipe via HTTP/HTTPS ou GitHub."), new $c_T2("quickStartTitle", "In\u00edcio R\u00e1pido"), new $c_T2("step1Title", "Salve seu contexto atual"), new $c_T2("step2Title", "Carregue um contexto salvo"), new $c_T2("step3Title", "Troque para uma configura\u00e7\u00e3o diferente"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackText", "Constru\u00eddo com Scala Native para tempos de inicializa\u00e7\u00e3o quase instant\u00e2neos e zero overhead da JVM."), new $c_T2("footerText", "Constru\u00eddo com \u2764\ufe0f usando Scala Native e sess\u00f5es de codifica\u00e7\u00e3o tarde da noite."), new $c_T2("viewOnGithub", "Ver no GitHub")])))), new $c_T2("de", $m_sci_Map$().fB($m_sr_ScalaRunTime$().o(new ($d_T2.r().C)([new $c_T2("title", "first"), new $c_T2("tagline", "Vollst\u00e4ndiger Kontextwechsel f\u00fcr Entwickler-Workflows"), new $c_T2("description", "Ein Befehlszeilen-Tool, das den nahtlosen Wechsel zwischen verschiedenen Entwicklungskontexten und KI-Assistenten-Konfigurationen erm\u00f6glicht und Ihre Projekte frei von werkzeugspezifischem Ballast h\u00e4lt."), new $c_T2("whyTitle", "Warum first?"), new $c_T2("whyHighlight", "Ihr Repository ist f\u00fcr <em>Ihren</em> Code, nicht f\u00fcr Konfigurationsdateien von Tools."), new $c_T2("whyText", "Die moderne Entwicklung hat eine unbequeme Realit\u00e4t normalisiert: Jedes Tool, das wir einf\u00fchren \u2013 IDEs, Linters, CI-Systeme und jetzt KI-Coding-Assistenten \u2013 hinterl\u00e4sst seine eigenen Spuren in unseren Repositories. Wenn Sie einen anderen KI-Assistenten ausprobieren m\u00f6chten, sollten Sie keine neuen Konfigurationsdateien in Ihr Repository committen m\u00fcssen."), new $c_T2("feature1Title", "Nicht-invasiv"), new $c_T2("feature1Text", "KI-Assistenten und Tools speichern ihre Konfigurationen au\u00dferhalb Ihres Repos."), new $c_T2("feature2Title", "Kontextwechsel"), new $c_T2("feature2Text", "Wechseln Sie ganze Entwicklungsumgebungen mit einem Befehl."), new $c_T2("feature3Title", "Remote-Kontexte"), new $c_T2("feature3Text", "Teilen Sie Teamkonfigurationen \u00fcber HTTP/HTTPS oder GitHub."), new $c_T2("quickStartTitle", "Schnellstart"), new $c_T2("step1Title", "Speichern Sie Ihren aktuellen Kontext"), new $c_T2("step2Title", "Laden Sie einen gespeicherten Kontext"), new $c_T2("step3Title", "Wechseln Sie zu einem anderen Setup"), new $c_T2("techStackTitle", "Tech Stack"), new $c_T2("techStackText", "Erstellt mit Scala Native f\u00fcr nahezu sofortige Startzeiten und null JVM-Overhead."), new $c_T2("footerText", "Erstellt mit \u2764\ufe0f unter Verwendung von Scala Native und n\u00e4chtlichen Coding-Sessions."), new $c_T2("viewOnGithub", "Auf GitHub ansehen")]))))])));
  this.g9 = $m_Lcom_raquo_laminar_api_package$().c.h7.mG(this.pe());
  this.ga = new $c_sci_$colon$colon(new $c_T3("en", "English", "\ud83c\uddfa\ud83c\uddf8"), new $c_sci_$colon$colon(new $c_T3("pt-br", "Portugu\u00eas (BR)", "\ud83c\udde7\ud83c\uddf7"), new $c_sci_$colon$colon(new $c_T3("de", "Deutsch", "\ud83c\udde9\ud83c\uddea"), $m_sci_Nil$())));
  var isOpen = $m_Lcom_raquo_laminar_api_package$().c.h7.mG(false);
  this.lz = $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("language-selector"), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("custom-select"), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gB($m_Lcom_raquo_laminar_api_package$().c.gJ(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_state_Var__update__F1__V(isOpen, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => (!(!(!_$2))))));
  }))), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oH(new $c_Lcom_raquo_airstream_misc_MapSignal(this.g9.ek, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentCode) => {
    matchResult1$1: {
      var \u03b41$;
      var this$139 = this.ga.pq(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentCode$2) => ((_$3) => {
        var x = _$3.dP;
        return ((x === null) ? (currentCode$2 === null) : $dp_equals__O__Z(x, currentCode$2));
      }))(currentCode)));
      var default$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.ga.t()));
      var x1 = (this$139.b() ? default$1.N() : this$139.O());
      if ((x1 !== null)) {
        var \u03b41$ = new $c_T2(x1.dQ, x1.dR);
        break matchResult1$1;
      }
      throw new $c_s_MatchError(x1);
    }
    var name$2 = \u03b41$.aT();
    var flag$2 = \u03b41$.aG();
    return $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("select-selected"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, ((flag$2 + " ") + name$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)])));
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().ls, (void 0))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("select-items"), new $c_Lcom_raquo_laminar_keys_LockedCompositeKey($m_Lcom_raquo_laminar_api_package$().c.a0, $m_sci_Nil$().eL($m_sr_ScalaRunTime$().o(new ($d_T.r().C)(["select-hide"])))).ol(new $c_Lcom_raquo_airstream_misc_MapSignal(isOpen.ek, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => (!(!(!_$4))))), $m_s_None$())), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().c, this.ga.q4(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 !== null)) {
      var code = x$1.dP;
      var name$1 = x$1.dQ;
      var flag$1 = x$1.dR;
      return $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("select-item"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, ((flag$1 + " ") + name$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gB($m_Lcom_raquo_laminar_api_package$().c.gJ(), false, false)).q6(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => code))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
        $f_Lcom_raquo_airstream_state_Var__set__O__V(this.g9, c);
        $f_Lcom_raquo_airstream_state_Var__set__O__V(isOpen, false);
      })))])));
    }
    throw new $c_s_MatchError(x$1);
  }))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])))])));
  this.ly = $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("container"), this.lz, $m_Lcom_raquo_laminar_api_package$().c.pK().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("hero"), $m_Lcom_raquo_laminar_api_package$().c.pI().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("tagline"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("tagline"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("description"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("description"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("install-box"), $m_Lcom_raquo_laminar_api_package$().c.gz().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)]))), $m_Lcom_raquo_laminar_api_package$().c.oV().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("copy-btn"), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().gB($m_Lcom_raquo_laminar_api_package$().c.gJ(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    window.navigator.clipboard.writeText("curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh");
  }))), $m_Lcom_raquo_laminar_api_package$().c.gE().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("fas fa-copy")])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.j4().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iM().fm("why"), $m_Lcom_raquo_laminar_api_package$().c.iJ().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("whyTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("highlight"), $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().c, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    $m_Lcom_raquo_laminar_api_package$();
    return $m_Lcom_raquo_laminar_api_Implicits$RichSource$().om(this.aJ("whyHighlight"), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el$2) => ((html) => {
      el$2.b6.innerHTML = html;
    }))(el)));
  })))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("whyText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("features-grid"), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("feature-card"), $m_Lcom_raquo_laminar_api_package$().c.gE().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("fas fa-ghost")]))), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature1Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))])))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("feature-card"), $m_Lcom_raquo_laminar_api_package$().c.gE().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("fas fa-exchange-alt")]))), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature2Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))])))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("feature-card"), $m_Lcom_raquo_laminar_api_package$().c.gE().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("fas fa-cloud")]))), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("feature3Text"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.j4().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iM().fm("usage"), $m_Lcom_raquo_laminar_api_package$().c.iJ().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("quickStartTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("code-block"), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("step1Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.j1().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.gz().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "first save gemini-config --artifacts \".gemini/,GEMINI.md\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("code-block"), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("step2Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.j1().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.gz().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "first load gemini-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.bw().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("code-block"), $m_Lcom_raquo_laminar_api_package$().c.eG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("step3Title"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.j1().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.gz().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "first swap claude-config", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.j4().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.iM().fm("tech-stack"), $m_Lcom_raquo_laminar_api_package$().c.iJ().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("techStackTitle"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("techStackText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.qZ().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.a0.aj("tech-list"), $m_Lcom_raquo_laminar_api_package$().c.gG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "Scala 3.3.4", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)]))), $m_Lcom_raquo_laminar_api_package$().c.gG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "Scala Native 0.5.9", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)]))), $m_Lcom_raquo_laminar_api_package$().c.gG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "Decline (CLI)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)]))), $m_Lcom_raquo_laminar_api_package$().c.gG().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().c, "Sttp (HTTP)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().R)])))])))]))), $m_Lcom_raquo_laminar_api_package$().c.ps().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("footerText"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))]))), $m_Lcom_raquo_laminar_api_package$().c.cr().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.op().w($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().c.pL().fm("https://github.com/oswaldo/first"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().aU(this.aJ("viewOnGithub"), $m_Lcom_raquo_laminar_modifiers_RenderableText$().R))])))])))])))])));
}
$p = $c_Lfirst_Main$.prototype = new $h_O();
$p.constructor = $c_Lfirst_Main$;
/** @constructor */
function $h_Lfirst_Main$() {
}
$h_Lfirst_Main$.prototype = $p;
$p.pe = (function() {
  var this$1 = window.navigator.language;
  var browserLang = this$1.toLowerCase();
  return ((!(!browserLang.startsWith("pt"))) ? "pt-br" : ((!(!browserLang.startsWith("de"))) ? "de" : "en"));
});
$p.q3 = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().c;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((appContainer$lzy1$2) => (() => $p_Lfirst_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Main$().ly));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().gB(this$2.kv.qo(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().oL(document, p.em.eY, p.g5), p.g4), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.N(), rootNode.N());
  })), this$2.r3());
});
$p.aJ = (function(key) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this.g9.ek, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((lang) => $m_Lfirst_Main$().ht.c0(lang, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lfirst_Main$().ht.d("en")))).c0(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => ("Missing key: " + key)))))), $m_s_None$());
});
var $d_Lfirst_Main$ = new $TypeData().i($c_Lfirst_Main$, "first.Main$", ({
  e8: 1
}));
var $n_Lfirst_Main$;
function $m_Lfirst_Main$() {
  if ((!$n_Lfirst_Main$)) {
    $n_Lfirst_Main$ = new $c_Lfirst_Main$();
  }
  return $n_Lfirst_Main$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cd("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cd("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cd("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cd("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cd("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cd("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().hA.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bN) << 24) >> 24) === 0)) {
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
    $thiz.hx = dict;
    $thiz.bN = (((1 | $thiz.bN) << 24) >> 24);
  }
  return $thiz.hx;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bN) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.hx);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bN) << 24) >> 24) === 0)) {
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
    $thiz.hy = dict;
    $thiz.bN = (((2 | $thiz.bN) << 24) >> 24);
  }
  return $thiz.hy;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bN) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.hy);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bN) << 24) >> 24) === 0)) {
    $thiz.hw = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bN = (((4 | $thiz.bN) << 24) >> 24);
  }
  return $thiz.hw;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bN) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.hw);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cd("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().by("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().by("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().by("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().by("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().by("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().by("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().by("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().by("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().by("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().by("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().by("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().by("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().by("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().by("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cd("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cd("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cd("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cd("<anonymous function>"), "{anonymous}");
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
  this.hx = null;
  this.hy = null;
  this.hw = null;
  this.bN = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.po = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  er: 1
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
$p.cd = (function(this$) {
  return new RegExp(this$);
});
$p.by = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  es: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
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
  this.hz = null;
  this.lA = null;
  $n_jl_System$SystemProperties$ = this;
  this.hz = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.lA = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.iH = (function(key, default$1) {
  if ((this.hz !== null)) {
    var dict = this.hz;
    return ((!(!$m_jl_Utils$Cache$().hA.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.lA.iH(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  ex: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.hA = null;
  $n_jl_Utils$Cache$ = this;
  this.hA = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  eA: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bn: 1
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
$p.bZ = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  eC: 1
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
$p.oR = (function(a, key) {
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
$p.n7 = (function(a, b) {
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
    var lo = t.k;
    var hi = t.m;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.k;
    var hi$1 = t$1.m;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.iw = (function(a, b) {
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
$p.n8 = (function(a, b) {
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
$p.n4 = (function(a, b) {
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
$p.n3 = (function(a, b) {
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
$p.n9 = (function(a, b) {
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
$p.n5 = (function(a, b) {
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
$p.n6 = (function(a, b) {
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
$p.Y = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).V.Q().V.U(newLength);
  original.y(0, ret, 0, copyLength);
  return ret;
});
$p.a6 = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).V.Q().V.U(retLength);
  original.y(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  eD: 1
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
  return new $c_RTLong(this$1.qu(a.k, a.m, b.k, b.m), this$1.I);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.qt(a.k, a.m, b.k, b.m), this$1.I);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ph(a.k, a.m, b.k, b.m), this$1.I);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.pg(a.k, a.m, b.k, b.m), this$1.I);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ny(value), this$1.I);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.m;
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(a.k)) | 0));
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.k;
  var hi = a.m;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.k;
  return ((4.294967296E9 * a.m) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.k;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.k, true);
  fpBitsDataView.setInt32(4, a.m, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.k;
  var blo = b.k;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.m) + Math.imul(a.m, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.k;
  var blo = b.k;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, ((((a.m - b.m) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.k;
  var blo = b.k;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, ((((a.m + b.m) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.m;
  return new $c_RTLong((((32 & n) === 0) ? (((a.k >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.m;
  return new $c_RTLong((((32 & n) === 0) ? (((a.k >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.k;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (a.m << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.k ^ b.k), (a.m ^ b.m));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.k & b.k), (a.m & b.m));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.k | b.k), (a.m | b.m));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) >= (b.k >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) > (b.k >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) <= (b.k >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) < (b.k >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) >= (b.k >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) > (b.k >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) <= (b.k >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.m;
  var bhi = b.m;
  return ((ahi === bhi) ? ((a.k >>> 0) < (b.k >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!((a.k === b.k) && (a.m === b.m)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return ((a.k === b.k) && (a.m === b.m));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.k = 0;
  this.m = 0;
  this.k = lo;
  this.m = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.p = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.k === that.k) && (this.m === that.m)));
});
$p.v = (function() {
  return (this.k ^ this.m);
});
$p.z = (function() {
  return $m_RTLong$().nz(this.k, this.m);
});
$p.rb = (function() {
  return ((this.k << 24) >> 24);
});
$p.rp = (function() {
  return ((this.k << 16) >> 16);
});
$p.rk = (function() {
  return this.k;
});
$p.rl = (function() {
  return this;
});
$p.rg = (function() {
  var lo = this.k;
  var hi = this.m;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.rf = (function() {
  var lo = this.k;
  return ((4.294967296E9 * this.m) + (lo >>> 0.0));
});
$p.rd = (function(that) {
  return $m_RTLong$().nx(this.k, this.m, that.k, that.m);
});
$p.rc = (function(that) {
  return $m_RTLong$().nx(this.k, this.m, that.k, that.m);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bo: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      $thiz.I = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.I = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.I = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.I = 0;
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
      $thiz.I = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.I = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.I = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.I = (ahi & (((-1) + bhi) | 0));
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
      $thiz.I = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.I = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.I = quotHi;
    return quotLo;
  } else {
    $thiz.I = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.I = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.nz = (function(lo, hi) {
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
$p.ny = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.I = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.I = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.I = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.nx = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.pg = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.I = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.I = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.I = (-1);
      return (-1);
    } else {
      this.I = 0;
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
      var hi = this.I;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.I = hi$1;
      return lo$1;
    }
  }
});
$p.ph = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.I = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.I = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.qt = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.I = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.I = 0;
      return 0;
    } else {
      this.I = ahi;
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
      var hi = this.I;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.I = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.qu = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.I = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.I = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  eG: 1
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
  this.hB = null;
  this.lE = null;
  $n_s_Array$EmptyArrays$ = this;
  this.hB = new $ac_I(0);
  this.lE = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  eI: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aH: 1
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
  this.lF = null;
  this.ge = null;
  $n_s_PartialFunction$ = this;
  this.lF = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().lF));
  this.ge = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  eP: 1
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
  this.lK = null;
  $n_sc_ArrayOps$ = this;
  this.lK = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().lK));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.pu = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bZ(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.d($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.d(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  eX: 1
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
$p.ca = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  f9: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.l();
  while (it.q()) {
    f.d(it.h());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.l();
  while ((res && it.q())) {
    res = (!(!p.d(it.h())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.B()) {
    case (-1): {
      return (!$thiz.l().q());
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
  var it = $thiz.l();
  var i = start;
  var y = (($m_jl_reflect_Array$().bZ(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.q())) {
    $m_sr_ScalaRunTime$().io(xs, i, it.h());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.B() === 0) ? (("" + start) + end) : $thiz.dt($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aS.s);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aS;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var it = $thiz.l();
  if (it.q()) {
    var obj = it.h();
    jsb.s = (("" + jsb.s) + obj);
    while (it.q()) {
      jsb.s = (("" + jsb.s) + sep);
      var obj$1 = it.h();
      jsb.s = (("" + jsb.s) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.B() >= 0)) {
    var destination = evidence$2.bk($thiz.B());
    $thiz.bJ(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.aH();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.l();
    while (it.q()) {
      var elem = it.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.V.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.V.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.lR = null;
  this.f6 = null;
  this.lR = head;
  this.f6 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.pJ = (function() {
  return this.lR.N().l();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fi: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.lU = null;
  $n_sc_StringOps$ = this;
  this.lU = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().lU));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.p1 = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  fp: 1
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
$p.fG = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  ft: 1
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
    return $m_jl_Integer$().no($m_jl_System$SystemProperties$().iH("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
  this.lX = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.lX = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  fB: 1
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
  this.hZ = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.ix = (function() {
  var state = this.hZ;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.N();
});
$p.iN = (function(state) {
  if ((this.hZ !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.hZ = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  fF: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.m2 = null;
  $n_sci_MapNode$ = this;
  this.m2 = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  fX: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().bZ(as)) | 0)));
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
$p.nC = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.y(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.y(srcPos, result, ix, length);
  return result;
});
$p.pU = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.y(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.y(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aR: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.ff = 0;
  $n_sci_Node$ = this;
  this.ff = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.e8 = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dw = (function(mask) {
  return (1 << mask);
});
$p.pN = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dv((bitmap & (((-1) + bitpos) | 0)));
});
$p.cp = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.pN(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  g0: 1
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
  this.i3 = null;
  this.bj = null;
  this.cj = null;
  this.ez = null;
  this.i4 = null;
  this.m6 = null;
  $n_sci_VectorStatics$ = this;
  this.i3 = new $ac_O(0);
  this.bj = new ($d_O.r().r().C)(0);
  this.cj = new ($d_O.r().r().r().C)(0);
  this.ez = new ($d_O.r().r().r().r().C)(0);
  this.i4 = new ($d_O.r().r().r().r().r().C)(0);
  this.m6 = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.eE = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.y(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.E = (function(a, elem) {
  var ac = $m_ju_Arrays$().Y(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.cl = (function(elem, a) {
  var ac = $objectGetClass(a).V.Q().V.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.y(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.iz = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.d(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.iz(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gh: 1
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
  this.eB = null;
  this.cI = 0;
  this.aR = null;
  this.eB = _key;
  this.cI = _hash;
  this.aR = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.pr = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.cI) && $m_sr_BoxesRunTime$().r(k, _$this.eB))) {
      return _$this;
    } else if (((_$this.aR === null) || (_$this.cI > h))) {
      return null;
    } else {
      _$this = _$this.aR;
    }
  }
});
$p.z = (function() {
  return ((((("Node(" + this.eB) + ", ") + this.cI) + ") -> ") + this.aR);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  gz: 1
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
$p.mT = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  gF: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
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
$p.r = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.pn(x, y) : ((x instanceof $Char) ? this.pl(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.pn = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.pm(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.k;
      var hi = t.m;
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
$p.pm = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.k;
      return (x2 === ((4.294967296E9 * t.m) + (lo >>> 0.0)));
    } else {
      return (false && yn.p(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.k;
    var hi$1 = t$1.m;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.k;
      var hi$2 = t$2.m;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else {
      return (false && yn.p(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.pl = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.k;
      var hi = t.m;
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
  hg: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  hk: 1
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
$p.e4 = (function(xs, idx) {
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
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.io = (function(xs, idx, value) {
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
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.ih = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bx(), (x.be() + "("), ",", ")");
});
$p.o = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  hm: 1
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
$p.e = (function(hash, data) {
  var h = this.cO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.cO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.D = (function(hash, length) {
  return this.oQ((hash ^ length));
});
$p.oQ = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.eJ = (function(lv) {
  var lo = lv.k;
  var hi = lv.m;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.c9 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.ny(dv);
    var hi = this$1.I;
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
$p.Q = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.c9((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.eJ(new $c_RTLong(t.k, t.m));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.e7 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  ho: 1
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
  hp: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
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
$p.oK = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  hv: 1
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
$p.qO = (function(interval, body) {
  return setTimeout((() => {
    body.N();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  hw: 1
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
$p.qW = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gr;
  } else {
    var result = [];
    seq.co(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  hH: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
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
$p.ck = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  hK: 1
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
$p.e = (function(hash, data) {
  var h = this.cO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.cO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.D = (function(hash, length) {
  return this.bz((hash ^ length));
});
$p.bz = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.nR = (function(x, y, seed) {
  var h = seed;
  h = this.e(h, $f_T__hashCode__I("Tuple2"));
  h = this.e(h, x);
  h = this.e(h, y);
  return this.D(h, 2);
});
$p.cs = (function(x, seed, ignorePrefix) {
  var arr = x.bc();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.be());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.e(h, $f_T__hashCode__I(x.be()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.e(h, $m_sr_Statics$().Q(x.bd(i)));
      i = ((1 + i) | 0);
    }
    return this.D(h, arr);
  }
});
$p.j6 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.l();
  while (iterator.q()) {
    var x = iterator.h();
    var h = $m_sr_Statics$().Q(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.e(h$2, a);
  h$2 = this.e(h$2, b);
  h$2 = this.cO(h$2, c);
  return this.D(h$2, n);
});
$p.qp = (function(xs, seed) {
  var it = xs.l();
  var h = seed;
  if ((!it.q())) {
    return this.D(h, 0);
  }
  var x0 = it.h();
  if ((!it.q())) {
    return this.D(this.e(h, $m_sr_Statics$().Q(x0)), 1);
  }
  var x1 = it.h();
  var initial = $m_sr_Statics$().Q(x0);
  h = this.e(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().Q(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.q()) {
    h = this.e(h, prev);
    var hash = $m_sr_Statics$().Q(it.h());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.e(h, hash);
      i = ((1 + i) | 0);
      while (it.q()) {
        h = this.e(h, $m_sr_Statics$().Q(it.h()));
        i = ((1 + i) | 0);
      }
      return this.D(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bz(this.e(this.e(h0, rangeDiff), prev));
});
$p.mI = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bZ(a);
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, $m_sr_Statics$().Q($m_sr_ScalaRunTime$().e4(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Q($m_sr_ScalaRunTime$().e4(a, 0));
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Q($m_sr_ScalaRunTime$().e4(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().Q($m_sr_ScalaRunTime$().e4(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().Q($m_sr_ScalaRunTime$().e4(a, i)));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.qr = (function(start, step, last, seed) {
  return this.bz(this.e(this.e(this.e(seed, start), step), last));
});
$p.pO = (function(a, seed) {
  var h = seed;
  var l = a.u();
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, $m_sr_Statics$().Q(a.x(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().Q(a.x(0));
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().Q(a.x(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().Q(a.x(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().Q(a.x(i)));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.q2 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.b())) {
    var head = elems.t();
    var tail = elems.n();
    var hash = $m_sr_Statics$().Q(head);
    h = this.e(h, hash);
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
  return ((rangeState === 2) ? this.qr(initial, rangeDiff, prev, seed) : this.D(h, n));
});
$p.mR = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.e(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mJ = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.e(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mK = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.e(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mL = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, $m_sr_Statics$().c9(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().c9(a.a[0]);
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().c9(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().c9(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().c9(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mM = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, $m_sr_Statics$().c9(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().c9(a.a[0]);
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().c9(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().c9(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().c9(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mN = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.e(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mO = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.D(this.e($x_1, $m_sr_Statics$().eJ(new $c_RTLong(t.k, t.m))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().eJ(new $c_RTLong(t$1.k, t$1.m));
      h = this.e(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().eJ(new $c_RTLong(t$2.k, t$2.m));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().eJ(new $c_RTLong(t$3.k, t$3.m));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.e($x_2, $m_sr_Statics$().eJ(new $c_RTLong(t$4.k, t$4.m)));
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mP = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.e(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.mQ = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.D(h, 0);
      break;
    }
    case 1: {
      return this.D(this.e(h, 0), 1);
      break;
    }
    default: {
      h = this.e(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, 0);
            i = ((1 + i) | 0);
          }
          return this.D(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bz(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $thiz.fL(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.gK(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fP(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fP(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.jS = null;
  this.jR = null;
  this.gZ = false;
  this.jR = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.gZ = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.eN = (function() {
  return this.jS;
});
$p.mV = (function(x$0) {
  this.jS = x$0;
});
$p.nA = (function(subscription) {
  if (this.gZ) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.jR.N();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.nq = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.gZ = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  cI: 1,
  b6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.ke = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.eN = (function() {
  return this.ke;
});
$p.mV = (function(x$0) {
  this.ke = x$0;
});
$p.nq = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.nA = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  d2: 1,
  b6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.gC = (function(scalaValue) {
  return scalaValue;
});
$p.iu = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  d8: 1,
  b9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.ld = null;
  this.le = null;
  this.ha = null;
  this.h9 = null;
  this.ld = getRawDomValue;
  this.le = setRawDomValue;
  this.ha = separator;
  this.h9 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.aj = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().c.oo(), $m_Lcom_raquo_laminar_keys_CompositeKey$().gI(items, this.ha)));
});
$p.ok = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.dE(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = valueMapper.nQ(nextRawItems, this.ha);
    var f = ((elem) => currentNormalizedItems.ba(elem));
    var l = nextNormalizedItems;
    block: {
      var result;
      while (true) {
        if (l.b()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l.t();
          var t = l.n();
          if (((!(!f(h))) === true)) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if (remaining.b()) {
              var result = start;
              break block;
            } else {
              var x = remaining.t();
              if (((!(!f(x))) !== true)) {
                remaining = remaining.n();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $c_sci_$colon$colon(start.t(), $m_sci_Nil$());
              var toProcess = start.n();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.t(), $m_sci_Nil$());
                currentLast.S = newElem;
                currentLast = newElem;
                toProcess = toProcess.n();
              }
              var next = firstMiss.n();
              var nextToCopy = next;
              while ((!next.b())) {
                var head = next.t();
                if (((!(!f(head))) !== true)) {
                  next = next.n();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.t(), $m_sci_Nil$());
                    currentLast.S = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.n();
                  }
                  nextToCopy = next.n();
                  next = next.n();
                }
              }
              if ((!nextToCopy.b())) {
                currentLast.S = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((elem$2) => nextNormalizedItems.ba(elem$2));
    var l$1 = currentNormalizedItems;
    block$2: {
      var $x_1;
      while (true) {
        if (l$1.b()) {
          var $x_1 = $m_sci_Nil$();
          break;
        } else {
          var h$1 = l$1.t();
          var t$1 = l$1.n();
          if (((!(!f$1(h$1))) === true)) {
            l$1 = t$1;
            continue;
          }
          var start$1 = l$1;
          var remaining$1 = t$1;
          while (true) {
            if (remaining$1.b()) {
              var $x_1 = start$1;
              break block$2;
            } else {
              var x$1 = remaining$1.t();
              if (((!(!f$1(x$1))) !== true)) {
                remaining$1 = remaining$1.n();
                continue;
              }
              var firstMiss$1 = remaining$1;
              var newHead$1 = new $c_sci_$colon$colon(start$1.t(), $m_sci_Nil$());
              var toProcess$1 = start$1.n();
              var currentLast$1 = newHead$1;
              while ((toProcess$1 !== firstMiss$1)) {
                var newElem$1 = new $c_sci_$colon$colon(toProcess$1.t(), $m_sci_Nil$());
                currentLast$1.S = newElem$1;
                currentLast$1 = newElem$1;
                toProcess$1 = toProcess$1.n();
              }
              var next$1 = firstMiss$1.n();
              var nextToCopy$1 = next$1;
              while ((!next$1.b())) {
                var head$1 = next$1.t();
                if (((!(!f$1(head$1))) !== true)) {
                  next$1 = next$1.n();
                } else {
                  while ((nextToCopy$1 !== next$1)) {
                    var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.t(), $m_sci_Nil$());
                    currentLast$1.S = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.n();
                  }
                  nextToCopy$1 = next$1.n();
                  next$1 = next$1.n();
                }
              }
              if ((!nextToCopy$1.b())) {
                currentLast$1.S = nextToCopy$1;
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
  dr: 1,
  ao: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.hb = null;
  this.hb = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.n0 = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().gI(domValue, this.hb);
});
$p.n2 = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.hb, "");
});
$p.iu = (function(domValue) {
  return this.n0(domValue);
});
$p.gC = (function(scalaValue) {
  return this.n2(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  dt: 1,
  b9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$.prototype = $p;
$p.qX = (function(items, separator) {
  var this$1 = items.eO();
  var rest = this$1;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = $m_Lcom_raquo_laminar_keys_CompositeKey$().gI(rest.t(), separator).l();
    while (it.q()) {
      var nx = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.S = nx;
      }
      t = nx;
    }
    rest = rest.n();
  }
  return ((h === null) ? $m_sci_Nil$() : h);
});
$p.nQ = (function(value, separator) {
  return this.qX(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringSeqValueMapper$", ({
  du: 1,
  bb: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
$p.nQ = (function(value, separator) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().gI(value, separator);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  dv: 1,
  bb: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.eY = null;
  this.eY = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  dy: 1,
  ao: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.eZ = null;
  this.hd = null;
  this.eZ = name;
  this.hd = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.fm = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().nN(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  dz: 1,
  ao: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.dN = null;
  this.lf = null;
  this.dN = name;
  this.lf = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.fm = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qJ(element, prop, value$2);
  })));
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bd: 1,
  ao: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.hf = null;
  this.he = null;
  this.g6 = null;
  this.g7 = null;
  this.hf = localName;
  this.he = codec;
  var this$1 = (namespacePrefix.b() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.O() + ":") + localName)));
  this.g6 = (this$1.b() ? localName : this$1.O());
  this.g7 = (namespacePrefix.b() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().q9(namespacePrefix.O())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  dB: 1,
  ao: 1
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
$p.bW = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  dL: 1,
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.lr = null;
  this.lr = f$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.bW = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.lr.d(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b2 || (!when))) {
    f();
  } else {
    this$2.b2 = true;
    try {
      f();
    } finally {
      this$2.b2 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  dM: 1,
  U: 1
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
  dP: 1,
  dN: 1
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
  dR: 1,
  dQ: 1
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
  this.lt = null;
  this.lt = render$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.ip = (function(value) {
  return this.lt.d(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  dU: 1,
  dS: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.mW(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().pd($thiz.am(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.hs = null;
  this.hs = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.w = (function(modifiers) {
  var element = this.oT();
  modifiers.co(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.bW(element);
  })));
  return element;
});
$p.oT = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().p8(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  e6: 1,
  bg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.lx = null;
  this.lx = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  e7: 1,
  bg: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.gb) << 24) >> 24) === 0)) {
    $thiz.hu = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.gb = (((32 | $thiz.gb) << 24) >> 24);
  }
  return $thiz.hu;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.gb) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.hu);
}
/** @constructor */
function $c_jl_Character$() {
  this.hu = null;
  this.gb = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.qY = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.pf = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().oR($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
  ee: 1,
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
$p.fH = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.no = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.fH(s);
  }
  var len = s.length;
  if ((len === 0)) {
    this.fH(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.fH(s);
  }
  var result = 0;
  while ((i !== len)) {
    var digit = character.pf(s.charCodeAt(i), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.fH(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.fH(s);
  }
  return (((result ^ sign) - sign) | 0);
});
$p.dv = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  ej: 1,
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
  this.eq = null;
  this.f1 = null;
  this.er = null;
  this.es = 0;
  this.ep = 0;
  this.eq = declaringClass;
  this.f1 = methodName;
  this.er = fileName;
  this.es = lineNumber;
  this.ep = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.p = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.er === that.er) && (this.es === that.es)) && (this.ep === that.ep)) && (this.eq === that.eq)) && (this.f1 === that.f1)));
});
$p.z = (function() {
  var result = "";
  if ((this.eq !== "<jscode>")) {
    result = ((("" + result) + this.eq) + ".");
  }
  result = (("" + result) + this.f1);
  if ((this.er === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.er);
    if ((this.es >= 0)) {
      result = ((result + ":") + this.es);
      if ((this.ep >= 0)) {
        result = ((result + ":") + this.ep);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.v = (function() {
  return (((($f_T__hashCode__I(this.eq) ^ $f_T__hashCode__I(this.f1)) ^ $f_T__hashCode__I(this.er)) ^ this.es) ^ this.ep);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bm: 1,
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
$p.qa = (function(value, offset, count) {
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
  eu: 1,
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
  $thiz.lC = s;
  $thiz.lD = writableStackTrace;
  if (writableStackTrace) {
    $thiz.pp();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.lC = null;
    this.lD = false;
    this.lB = null;
    this.gc = null;
  }
  iO(cause) {
    return this;
  }
  fF() {
    return this.lC;
  }
  pp() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.U : this);
    this.lB = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  pF() {
    if ((this.gc === null)) {
      if (this.lD) {
        this.gc = $m_jl_StackTrace$().po(this.lB);
      } else {
        this.gc = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.gc;
  }
  z() {
    var className = $objectClassName(this);
    var message = this.fF();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  v() {
    return $c_O.prototype.v.call(this);
  }
  p(that) {
    return $c_O.prototype.p.call(this, that);
  }
  get "message"() {
    var m = this.fF();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.z();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().io(dest, j, $m_sr_ScalaRunTime$().e4(src, i));
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
$p.nd = (function(it, evidence$3) {
  var n = it.B();
  if ((n > (-1))) {
    var elements = evidence$3.bk(n);
    var iterator = it.l();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().io(elements, i, iterator.h());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.aH();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.l();
    while (iterator$2.q()) {
      var elem = iterator$2.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.V.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.V.r().w(jsElems);
  }
});
$p.fz = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.V.Z && $objectGetClass(dest).V.R(srcClass.V))) {
    src.y(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.na = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().r(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  eH: 1,
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
$p.r7 = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().mb : new $c_scm_ArraySeq$ofRef(xs)));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cb(x) ? $thiz.d(x) : default$1.d(x));
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
$p.z = (function() {
  return "<function1>";
});
$p.d = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  fK: 1,
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
    $thiz.aY($m_scm_Buffer$().ne(elems));
  } else {
    var it = elems.l();
    while (it.q()) {
      $thiz.aZ(it.h());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.o9 = null;
  this.oi = null;
  this.oa = null;
  this.od = null;
  this.oe = null;
  this.oc = null;
  this.ob = null;
  this.o8 = null;
  this.oj = null;
  this.o6 = null;
  this.oh = null;
  this.o7 = null;
  this.of = null;
  this.og = null;
  $n_s_reflect_ClassTag$ = this;
  this.o9 = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.oi = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.oa = $m_s_reflect_ManifestFactory$CharManifest$();
  this.od = $m_s_reflect_ManifestFactory$IntManifest$();
  this.oe = $m_s_reflect_ManifestFactory$LongManifest$();
  this.oc = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.ob = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.o8 = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.oj = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.o6 = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.oh = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.o7 = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.of = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.og = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.mF = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  gM: 1,
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
$p.z = (function() {
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
$p.z = (function() {
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
$p.z = (function() {
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
$p.z = (function() {
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
$p.z = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.go = false;
  this.go = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.z = (function() {
  return ("" + this.go);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  hf: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.e0 = 0;
  this.e0 = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.z = (function() {
  return ("" + this.e0);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  hh: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.gp = false;
  this.gq = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.pQ = (function(value) {
  this.gq = value;
  this.gp = true;
  return value;
});
$p.z = (function() {
  return ("LazyRef " + (this.gp ? ("of: " + this.gq) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  hi: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.dq = null;
  this.dq = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.z = (function() {
  return ("" + this.dq);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  hl: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ai = 0;
  this.ds = 0;
  this.ms = 0;
  this.id = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ai = $f_T__hashCode__I("Seq");
  this.ds = $f_T__hashCode__I("Map");
  this.ms = $f_T__hashCode__I("Set");
  this.id = this.j6($m_sci_Nil$(), this.ds);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.ce = (function(x, y) {
  return this.nR($m_sr_Statics$().Q(x), $m_sr_Statics$().Q(y), (-889275714));
});
$p.nL = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.pO(xs, this.ai) : ((xs instanceof $c_sci_List) ? this.q2(xs, this.ai) : this.qp(xs, this.ai)));
});
$p.q5 = (function(xs) {
  if (xs.b()) {
    return this.id;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.ds;
    xs.e5(accum);
    h = this.e(h, accum.gs);
    h = this.e(h, accum.gt);
    h = this.cO(h, accum.gu);
    return this.D(h, accum.gv);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  hM: 1,
  hL: 1
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
  this.gs = 0;
  this.gt = 0;
  this.gv = 0;
  this.gu = 0;
  this.gs = 0;
  this.gt = 0;
  this.gv = 0;
  this.gu = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.z = (function() {
  return "<function2>";
});
$p.oJ = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().ce(k, v);
  this.gs = ((this.gs + h) | 0);
  this.gt = (this.gt ^ h);
  this.gu = Math.imul(this.gu, (1 | h));
  this.gv = ((1 + this.gv) | 0);
});
$p.eD = (function(v1, v2) {
  this.oJ(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  hN: 1,
  aI: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.gN = null;
  this.j7 = null;
  this.j8 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.gN = $m_scm_Buffer$().mH($m_sr_ScalaRunTime$().o(new ($d_F1.r().C)([])));
  this.j7 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.e6(err) + "\n") + this.pE(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.j8 = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.U : $x_1);
  }));
  this.qs(this.j7);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.e6 = (function(e) {
  try {
    var errorMessage = e.fF();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).iI() + ": ") + errorMessage);
});
$p.pE = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().r7(err.pF()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.p0 = (function(message, cause) {
  return ((message + "; cause: ") + (cause.b() ? $m_s_None$() : new $c_s_Some(this.e6(cause.O()))));
});
$p.qs = (function(fn) {
  this.gN.aZ(fn);
});
$p.c1 = (function(err) {
  var this$1 = this.gN;
  var it = this$1.l();
  while (it.q()) {
    var x0 = it.h();
    try {
      x0.d(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.j8;
      if (((x0 === null) ? (x$2 === null) : x0.p(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().qO(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cn: 1,
  gJ: 1,
  gK: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cc(true);
  $thiz.eK((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().nW(onNext, $m_s_PartialFunction$().ge, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.eI()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.eI()) {
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
  var x = $thiz.dD();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_F0.r().C)([])));
    $thiz.eK(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  az: 1,
  at: 1,
  a2: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.ip(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).co(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.ka = null;
  this.kb = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.qo = (function() {
  if ((!this.kb)) {
    this.ka = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.kb = true;
  }
  return this.ka;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  d0: 1,
  ba: 1,
  dd: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1(fn$3, outer) {
  this.lj = null;
  this.lj = fn$3;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Binder$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Binder$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Binder$$anon$1.prototype = $p;
$p.bW = (function(element) {
  this.fw(element);
});
$p.fw = (function(element) {
  return this.lj.d(element);
});
var $d_Lcom_raquo_laminar_modifiers_Binder$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Binder$$anon$1, "com.raquo.laminar.modifiers.Binder$$anon$1", ({
  dF: 1,
  U: 1,
  aD: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.lk = null;
  this.hh = null;
  this.lk = key;
  this.hh = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.bW = (function(element) {
  if ((!this.hh.b())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.lk, null, this.hh, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  dG: 1,
  U: 1,
  be: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.en = null;
  this.hi = null;
  this.hj = null;
  this.en = eventProcessor;
  this.hi = ((ev) => {
    var processor = eventProcessor.g4;
    var this$2 = processor.d(ev);
    if ((!this$2.b())) {
      callback.d(this$2.O());
    }
  });
  this.hj = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.en.g5;
    this$3.passive = outer.en.hc;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.bW = (function(element) {
  this.oS(element, false);
});
$p.oS = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().ov(element.b6, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.hg, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().qx(element.b6, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().r1(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().fT(element.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.d(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().nO(element.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.d(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.z = (function() {
  return (("EventListener(" + this.en.em.eY) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  dH: 1,
  U: 1,
  aD: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.lm = null;
  this.ln = null;
  this.ll = null;
  this.lm = key;
  this.ln = value;
  this.ll = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.bW = (function(element) {
  this.ll.il(element, this.lm, this.ln);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  dI: 1,
  U: 1,
  be: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.lo = null;
  this.lq = null;
  this.lp = null;
  this.lo = key;
  this.lq = values;
  this.lp = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.bW = (function(element) {
  this.fw(element);
});
$p.fw = (function(element) {
  element.qm(this.lo);
  var observable = this.lq;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.lp.il(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().nP(element.bM, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  dJ: 1,
  U: 1,
  aD: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.hq = null;
  this.lv = null;
  this.lw = null;
  this.lv = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().q1(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.lw = container;
  this.q8();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.gA = (function() {
  return this.hq;
});
$p.mW = (function(x$0) {
  this.hq = x$0;
});
$p.q8 = (function() {
  this.hq.mu();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(this, this.lv, (void 0));
});
$p.am = (function() {
  return this.lw;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  e1: 1,
  au: 1,
  bf: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e5)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.V.Z) {
    return ($thiz.V.Q().iI() + "[]");
  } else {
    var name = $thiz.V.N;
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
  this.hv = null;
  this.V = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.z = (function() {
  return ((this.V.Y ? "interface " : (this.V.X ? "" : "class ")) + this.V.N);
});
$p.iI = (function() {
  if ((this.hv === null)) {
    this.hv = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.hv;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  ef: 1,
  a: 1,
  Y: 1
}));
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  C: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_s_Predef$() {
  this.o5 = null;
  $n_s_Predef$ = this;
  this.o5 = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.qC = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  eR: 1,
  eL: 1,
  eM: 1
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
      return $thiz.aT();
      break;
    }
    case 1: {
      return $thiz.aG();
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
      return $thiz.dP;
      break;
    }
    case 1: {
      return $thiz.dQ;
      break;
    }
    case 2: {
      return $thiz.dR;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.f4 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.f4 = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.ax = (function(it) {
  return this.f4.iA(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b0 = (function() {
  return this.f4.gH($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cL = (function(elems) {
  return this.f4.iA(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gf = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gf = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.ax = (function(it) {
  return this.gf.ax(it);
});
$p.b0 = (function() {
  return this.gf.b0();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.B();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.l();
      while (it.q()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.h();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).ir(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().J : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.l();
  while (($thiz.q() && those.q())) {
    if ((!$m_sr_BoxesRunTime$().r($thiz.h(), those.h()))) {
      return false;
    }
  }
  return ($thiz.q() === those.q());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.J = null;
  $n_sc_Iterator$ = this;
  this.J = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.b0 = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.ax = (function(source) {
  return source.l();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fc: 1,
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
  $thiz.hO = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.hO = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.ax = (function(it) {
  return this.hO.ax(it);
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
$p.nf = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.l()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().iC(it))));
});
$p.b0 = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().nf(it$2$2))));
});
$p.ax = (function(source) {
  return this.nf(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  fq: 1,
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
  this.Z = 0;
  this.a8 = 0;
  this.ak = null;
  this.bo = null;
  this.aK = 0;
  this.bf = 0;
  this.Z = dataMap;
  this.a8 = nodeMap;
  this.ak = content;
  this.bo = originalHashes;
  this.aK = size;
  this.bf = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aI = (function() {
  return this.aK;
});
$p.dx = (function() {
  return this.bf;
});
$p.dA = (function(index) {
  return this.ak.a[(index << 1)];
});
$p.cN = (function(index) {
  return this.ak.a[((1 + (index << 1)) | 0)];
});
$p.nk = (function(index) {
  return new $c_T2(this.ak.a[(index << 1)], this.ak.a[((1 + (index << 1)) | 0)]);
});
$p.fE = (function(index) {
  return this.bo.a[index];
});
$p.cM = (function(index) {
  return this.ak.a[(((((-1) + this.ak.a.length) | 0) - index) | 0)];
});
$p.ik = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().e8(keyHash, shift);
  var bitpos = $m_sci_Node$().dw(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().cp(this.Z, mask, bitpos);
    if ($m_sr_BoxesRunTime$().r(key, this.dA(index))) {
      return this.cN(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    return this.cM($m_sci_Node$().cp(this.a8, mask, bitpos)).ik(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.iG = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().e8(keyHash, shift);
  var bitpos = $m_sci_Node$().dw(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().cp(this.Z, mask, bitpos);
    return ($m_sr_BoxesRunTime$().r(key, this.dA(index)) ? this.cN(index) : f.N());
  } else {
    return (((this.a8 & bitpos) !== 0) ? this.cM($m_sci_Node$().cp(this.a8, mask, bitpos)).iG(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.N());
  }
});
$p.is = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().e8(keyHash, shift);
  var bitpos = $m_sci_Node$().dw(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().cp(this.Z, mask, bitpos);
    return ((this.bo.a[index] === originalHash) && $m_sr_BoxesRunTime$().r(key, this.dA(index)));
  } else {
    return (((this.a8 & bitpos) !== 0) && this.cM($m_sci_Node$().cp(this.a8, mask, bitpos)).is(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.nT = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().e8(keyHash, shift);
  var bitpos = $m_sci_Node$().dw(mask);
  if (((this.Z & bitpos) !== 0)) {
    var index = $m_sci_Node$().cp(this.Z, mask, bitpos);
    var key0 = this.dA(index);
    var key0UnimprovedHash = this.fE(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().r(key0, key))) {
      if (replaceValue) {
        var value0 = this.cN(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.p6(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cN(index);
      var key0Hash = $m_sc_Hashing$().ca(key0UnimprovedHash);
      return this.p4(bitpos, key0Hash, this.iT(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cp(this.a8, mask, bitpos);
    var subNode = this.cM(index$2);
    var subNodeNew$2 = subNode.nU(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.p5(bitpos, subNode, subNodeNew$2));
  } else {
    return this.p3(bitpos, key, originalHash, keyHash, value);
  }
});
$p.iT = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().iD(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().e8(keyHash0, shift);
    var mask1 = $m_sci_Node$().e8(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dw(mask0) | $m_sci_Node$().dw(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().dw(mask0);
      var node = this.iT(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().hB, node.aI(), node.dx());
    }
  }
});
$p.iK = (function() {
  return (this.a8 !== 0);
});
$p.iV = (function() {
  return $m_jl_Integer$().dv(this.a8);
});
$p.gD = (function() {
  return (this.Z !== 0);
});
$p.j0 = (function() {
  return $m_jl_Integer$().dv(this.Z);
});
$p.fA = (function(bitpos) {
  return $m_jl_Integer$().dv((this.Z & (((-1) + bitpos) | 0)));
});
$p.iW = (function(bitpos) {
  return $m_jl_Integer$().dv((this.a8 & (((-1) + bitpos) | 0)));
});
$p.p6 = (function(bitpos, newKey, newValue) {
  var dataIx = this.fA(bitpos);
  var idx = (dataIx << 1);
  var src = this.ak;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.y(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.Z, this.a8, dst, this.bo, this.aK, this.bf);
});
$p.p5 = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.ak.a.length) | 0) - this.iW(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.y(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.Z, this.a8, dst, this.bo, ((((this.aK - oldNode.aI()) | 0) + newNode.aI()) | 0), ((((this.bf - oldNode.dx()) | 0) + newNode.dx()) | 0));
});
$p.p3 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.fA(bitpos);
  var idx = (dataIx << 1);
  var src = this.ak;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.y(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.y(idx, dst, destPos, length);
  var dstHashes = this.pU(this.bo, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.Z | bitpos), this.a8, dst, dstHashes, ((1 + this.aK) | 0), ((this.bf + keyHash) | 0));
});
$p.q7 = (function(bitpos, keyHash, node) {
  var dataIx = this.fA(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.ak.a.length) | 0) - this.iW(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.y(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.y(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.y(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.nC(this.bo, dataIx);
  this.Z = (this.Z ^ bitpos);
  this.a8 = (this.a8 | bitpos);
  this.ak = dst;
  this.bo = dstHashes;
  this.aK = (((((-1) + this.aK) | 0) + node.aI()) | 0);
  this.bf = ((((this.bf - keyHash) | 0) + node.dx()) | 0);
  return this;
});
$p.p4 = (function(bitpos, keyHash, node) {
  var dataIx = this.fA(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.ak.a.length) | 0) - this.iW(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.y(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.y(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.y(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.nC(this.bo, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.Z ^ bitpos), (this.a8 | bitpos), dst, dstHashes, (((((-1) + this.aK) | 0) + node.aI()) | 0), ((((this.bf - keyHash) | 0) + node.dx()) | 0));
});
$p.e5 = (function(f) {
  var iN = $m_jl_Integer$().dv(this.Z);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eD(this.dA(i$1), this.cN(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dv(this.a8);
  var j = 0;
  while ((j < jN)) {
    this.cM(j).e5(f);
    j = ((1 + j) | 0);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bf === that.bf) && (this.a8 === that.a8)) && (this.Z === that.Z)) && (this.aK === that.aK)) && $m_ju_Arrays$().iw(this.bo, that.bo))) {
      var a1 = this.ak;
      var a2 = that.ak;
      var length = this.ak.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().r(a1.a[i], a2.a[i]);
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
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.mX = (function() {
  var this$1 = this.ak;
  var contentClone = this$1.g();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dv(this.Z) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].mY();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.Z, this.a8, contentClone, this.bo.g(), this.aK, this.bf);
});
$p.mY = (function() {
  return this.mX();
});
$p.nU = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.nT(key, value, originalHash, hash, shift, replaceValue);
});
$p.iF = (function(index) {
  return this.cM(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  bN: 1,
  bX: 1,
  aR: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.hT = 0;
  this.d4 = 0;
  this.a9 = null;
  this.hT = originalHash;
  this.d4 = hash;
  this.a9 = content;
  $m_s_Predef$().qC((this.a9.u() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.eH = (function(key) {
  var iter = this.a9.l();
  var i = 0;
  while (iter.q()) {
    if ($m_sr_BoxesRunTime$().r(iter.h().aT(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aI = (function() {
  return this.a9.u();
});
$p.ik = (function(key, originalHash, hash, shift) {
  var this$1 = this.pA(key, originalHash, hash, shift);
  if (this$1.b()) {
    $m_sc_Iterator$().J.h();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.O();
  }
});
$p.pA = (function(key, originalHash, hash, shift) {
  if ((this.d4 === hash)) {
    var index = this.eH(key);
    return ((index >= 0) ? new $c_s_Some(this.a9.x(index).aG()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.iG = (function(key, originalHash, hash, shift, f) {
  if ((this.d4 === hash)) {
    var x1 = this.eH(key);
    return ((x1 === (-1)) ? f.N() : this.a9.x(x1).aG());
  } else {
    return f.N();
  }
});
$p.is = (function(key, originalHash, hash, shift) {
  return ((this.d4 === hash) && (this.eH(key) >= 0));
});
$p.nU = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.eH(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.a9.x(index).aG(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.dF(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.du(new $c_T2(key, value))));
});
$p.iK = (function() {
  return false;
});
$p.iV = (function() {
  return 0;
});
$p.cM = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gD = (function() {
  return true;
});
$p.j0 = (function() {
  return this.a9.u();
});
$p.dA = (function(index) {
  return this.a9.x(index).aT();
});
$p.cN = (function(index) {
  return this.a9.x(index).aG();
});
$p.nk = (function(index) {
  return this.a9.x(index);
});
$p.fE = (function(index) {
  return this.hT;
});
$p.e5 = (function(f) {
  this.a9.co(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.aT();
      var v = x0$1$2$2.aG();
      return f.eD(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.d4 === that.d4) && (this.a9.u() === that.a9.u()))) {
      var iter = this.a9.l();
      while (iter.q()) {
        var x1$2 = iter.h();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.aT();
        var value = x1$2.aG();
        var index = that.eH(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().r(value, that.a9.x(index).aG())))) {
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
$p.v = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.dx = (function() {
  return Math.imul(this.a9.u(), this.d4);
});
$p.mY = (function() {
  return new $c_sci_HashCollisionMapNode(this.hT, this.d4, this.a9);
});
$p.iF = (function(index) {
  return this.cM(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  bP: 1,
  bX: 1,
  aR: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.hU = null;
  $n_sci_HashMap$ = this;
  this.hU = new $c_sci_HashMap($m_sci_MapNode$().m2);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.pw = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().ij(source).j3());
});
$p.ax = (function(it) {
  return this.pw(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  fx: 1,
  aL: 1,
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
  this.lZ = null;
  this.m0 = null;
  this.lZ = head;
  this.m0 = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.t = (function() {
  return this.lZ;
});
$p.aV = (function() {
  return this.m0;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  fH: 1,
  bS: 1,
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
$p.iL = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aV = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.t = (function() {
  this.iL();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  fI: 1,
  bS: 1,
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
$p.fB = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.b()) {
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
  return new $c_sci_MapBuilderImpl().mv(it).nG();
});
$p.ax = (function(it) {
  return this.fB(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  fM: 1,
  aL: 1,
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
  var x1 = coll.B();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.b1(((that < 0) ? 0 : that));
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
$p.py = (function(it) {
  var k = it.B();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).my(it);
});
$p.b0 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.ax = (function(source) {
  return this.py(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  gu: 1,
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
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.mi = null;
  this.mi = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.N = (function() {
  return (0, this.mi)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  ha: 1,
  cd: 1,
  aH: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.mj = null;
  this.mj = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.d = (function(x0) {
  return (0, this.mj)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  hb: 1,
  ce: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.mk = null;
  this.mk = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.eD = (function(x0, x1) {
  return (0, this.mk)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  hc: 1,
  cf: 1,
  aI: 1
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
$p.z = (function() {
  return "<function1>";
});
$p.d = (function(x) {
  return this.bI(x, $m_s_PartialFunction$().ge);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  hj: 1,
  u: 1,
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
$p.ni = (function(f) {
  return ((arg1$2) => f.d(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  hq: 1,
  hr: 1,
  hs: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hJ)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.jb = null;
  this.j9 = false;
  this.gO = null;
  this.ja = null;
  this.jb = onNextParam$2;
  this.j9 = handleObserverErrors$3;
  this.gO = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ja = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.dC = (function() {
  return this.ja;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.iY = (function(nextValue) {
  try {
    this.jb.d(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.j9) {
      this.fM(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.fM = (function(error) {
  try {
    if (this.gO.cb(error)) {
      this.gO.d(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c1(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.e9 = (function(nextValue) {
  nextValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.fM(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.iY(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cp: 1,
  at: 1,
  a2: 1,
  az: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.gP = null;
  this.jc = false;
  this.jd = null;
  this.gP = onTryParam$2;
  this.jc = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jd = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.dC = (function() {
  return this.jd;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.iY = (function(nextValue) {
  this.e9(new $c_s_util_Success(nextValue));
});
$p.fM = (function(error) {
  this.e9(new $c_s_util_Failure(error));
});
$p.e9 = (function(nextValue) {
  try {
    if (this.gP.cb(nextValue)) {
      this.gP.d(nextValue);
    } else {
      nextValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c1(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.jc && nextValue.nn())) {
      this.fM(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cq: 1,
  at: 1,
  a2: 1,
  az: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.kc = null;
  this.kd = false;
  this.nX = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.qR = (function() {
  if ((!this.kd)) {
    this.kc = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.kd = true;
  }
  return this.kc;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  d1: 1,
  dh: 1,
  da: 1,
  dc: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.kf = null;
  this.kg = false;
  this.c = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.c = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
$p.on = (function() {
  if ((!this.kg)) {
    this.kf = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringSeqValueMapper$(this);
    this.kg = true;
  }
  return this.kf;
});
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  d5: 1,
  b8: 1,
  bc: 1,
  b7: 1
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
  this.la = null;
  this.lc = false;
  this.lb = null;
  this.h8 = null;
  this.la = initialContext;
  this.lc = preferStrictMode;
  this.lb = insertFn;
  this.h8 = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.fw = (function(element) {
  var this$1 = this.la;
  var insertContext = (this$1.b() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().qD(element, this.lc, this.h8) : this$1.O());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.lb.il(insertContext, mountContext.hg, this.h8)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().fT(element.bM, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.d(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.bW = (function(element) {
  this.fw(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  dl: 1,
  U: 1,
  dq: 1,
  dm: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.hk = null;
  this.hl = null;
  this.hk = $m_s_None$();
  this.hl = $m_Lcom_raquo_laminar_DomApi$().p7(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.iq = (function() {
  return this.hk;
});
$p.ea = (function(maybeNextParent) {
  this.hk = maybeNextParent;
});
$p.ed = (function(maybeNextParent) {
});
$p.bW = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(parentNode, this, (void 0));
});
$p.am = (function() {
  return this.hl;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  dV: 1,
  au: 1,
  U: 1,
  aE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.hr = null;
  this.g8 = null;
  this.hr = $m_s_None$();
  this.g8 = $m_Lcom_raquo_laminar_DomApi$().pa(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.iq = (function() {
  return this.hr;
});
$p.ea = (function(maybeNextParent) {
  this.hr = maybeNextParent;
});
$p.ed = (function(maybeNextParent) {
});
$p.bW = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(parentNode, this, (void 0));
});
$p.qV = (function() {
  return this.g8.data;
});
$p.am = (function() {
  return this.g8;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  e2: 1,
  au: 1,
  U: 1,
  aE: 1
}));
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
  ec: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bh: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ek)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.el)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.s = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.s = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.s = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.mB = (function(str) {
  var str$1 = $m_jl_String$().qa(str, 0, str.a.length);
  this.s = (("" + this.s) + str$1);
  return this;
});
$p.z = (function() {
  return this.s;
});
$p.u = (function() {
  return this.s.length;
});
$p.mS = (function(index) {
  return this.s.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  ev: 1,
  aF: 1,
  e9: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ey)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eB)));
}
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.z = (function() {
  return "<function1>";
});
$p.cb = (function(x) {
  return false;
});
$p.im = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.d = (function(v1) {
  this.im(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  eQ: 1,
  j: 1,
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
$p.l = (function() {
  return this;
});
$p.ir = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dz = (function(n) {
  return this.fS(n, (-1));
});
$p.fS = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.z = (function() {
  return "<iterator>";
});
$p.bJ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dt = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.B = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.hO = null;
  this.lS = null;
  this.lT = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.lS = $ct_O__(new $c_O());
  this.lT = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().lS));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  fk: 1,
  fl: 1,
  aL: 1,
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
  $thiz.et = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.et = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.mH = (function(elems) {
  return this.et.cL(elems);
});
$p.ne = (function(it) {
  return this.et.ax(it);
});
$p.b0 = (function() {
  return this.et.b0();
});
$p.ax = (function(source) {
  return this.ne(source);
});
$p.cL = (function(elems) {
  return this.mH(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cm(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.fC(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bb(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bb(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.B();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.B();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.l(), that);
  } else {
    return false;
  }
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gf = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.px = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ax.call(this, it));
});
$p.ax = (function(it) {
  return this.px(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  fC: 1,
  fb: 1,
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
  this.hY = null;
  $n_sci_LazyList$ = this;
  this.hY = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).nb();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cL = (function(elems) {
  return this.iC(elems);
});
$p.qH = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.dq;
    var i = iRef.e0;
    while (((i > 0) && (!rest.b()))) {
      rest = rest.F().aV();
      restRef.dq = rest;
      i = (((-1) + i) | 0);
      iRef.e0 = i;
    }
    return rest.F();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.iC = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.B() === 0) ? this.hY : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().nI(coll.l()))))));
});
$p.nJ = (function(it, suffix) {
  return (it.q() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().nJ(it, suffix))))) : suffix.N());
});
$p.nI = (function(it) {
  return (it.q() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().nI(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.b0 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.ax = (function(source) {
  return this.iC(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  fD: 1,
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
  this.fg = null;
  this.mc = null;
  this.fg = outer;
  this.mc = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.oC = (function(x) {
  this.fg.aZ(x);
  return this;
});
$p.os = (function(xs) {
  this.fg.aY(xs);
  return this;
});
$p.b1 = (function(size) {
  this.fg.b1(size);
});
$p.b5 = (function() {
  return this.mc.d(this.fg.b5());
});
$p.aY = (function(elems) {
  return this.os(elems);
});
$p.aZ = (function(elem) {
  return this.oC(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  gr: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dm = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dm = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.oD = (function(elem) {
  this.dm.aZ(elem);
  return this;
});
$p.ot = (function(xs) {
  this.dm.aY(xs);
  return this;
});
$p.aY = (function(elems) {
  return this.ot(elems);
});
$p.aZ = (function(elem) {
  return this.oD(elem);
});
$p.b5 = (function() {
  return this.dm;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aU: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.mn = null;
  this.mn = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.N = (function() {
  return (0, this.mn)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  hy: 1,
  hx: 1,
  cd: 1,
  aH: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.mo = null;
  this.mo = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.d = (function(x0) {
  return (0, this.mo)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  hA: 1,
  hz: 1,
  ce: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.mp = null;
  this.mp = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.eD = (function(x0, x1) {
  return (0, this.mp)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  hC: 1,
  hB: 1,
  cf: 1,
  aI: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.mq = null;
  this.mq = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.il = (function(x0, x1, x2) {
  return (0, this.mq)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  hE: 1,
  hD: 1,
  hd: 1,
  eJ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.mr = null;
  this.mr = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.oI = (function(x0, x1, x2, x3) {
  return (0, this.mr)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  hG: 1,
  hF: 1,
  he: 1,
  eK: 1
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
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.fx($m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.fy($m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.ee(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.fK(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.b2 || (!when))) {
    var $x_1 = f();
  } else {
    this$2.b2 = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.b2 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cn();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cq();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.b2 || (!when))) {
    f();
  } else {
    this$3.b2 = true;
    try {
      f();
    } finally {
      this$3.b2 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().nD($thiz.cq(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().nD($thiz.cn(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.fU())) {
    $thiz.fQ();
    $thiz.ee(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.fN();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.fO();
    $thiz.ee(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cn();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cq();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.jg = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jg = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.pY = (function(x) {
  return (x !== null);
});
$p.oN = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.jg, x, _$1);
  }))), (void 0)) : default$1.d(x));
});
$p.cb = (function(x) {
  return this.pY(x);
});
$p.bI = (function(x, default$1) {
  return this.oN(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  cy: 1,
  aW: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.jY = $m_Lcom_raquo_airstream_core_Observer$().pz(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.jY.e9(tryValue);
}
function $f_Lcom_raquo_airstream_state_Var__update__F1__V($thiz, mod) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult12: {
      var x36 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz.ek);
      if ((x36 instanceof $c_s_util_Success)) {
        var currentValue = x36.e2;
        try {
          var $x_1 = new $c_s_util_Success(mod.d(currentValue));
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          matchEnd8: {
            var $x_1;
            if ($m_s_util_control_NonFatal$().ck(e$2)) {
              var $x_1 = new $c_s_util_Failure(e$2);
              break matchEnd8;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
          }
        }
        $thiz.nM($x_1, trx);
        break matchResult12;
      }
      if ((x36 instanceof $c_s_util_Failure)) {
        var err = x36.e1;
        $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdate instead.", new $c_s_Some(err)));
        break matchResult12;
      }
      throw new $c_s_MatchError(x36);
    }
  })));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.jZ = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jZ = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.q0 = (function(x) {
  return true;
});
$p.oP = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.jZ.nM(x, _$1);
  })));
});
$p.cb = (function(x) {
  return this.q0(x);
});
$p.bI = (function(x, default$1) {
  return this.oP(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  cP: 1,
  aW: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.hn = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bM.mu();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bM.pb();
  })));
  $thiz.dO = (void 0);
  $thiz.eo = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.dO === (void 0))) {
    $thiz.dO = $m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.dO;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.dO;
    if ((x$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.dO;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.dO;
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
  return $thiz.eo.c0(prop, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$()))).oZ(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.eo.c0(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.b())) {
      var x0 = these.t();
      var x = x0.aT();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.aG();
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
      these = these.n();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  var l = removeItems;
  block: {
    var result;
    while (true) {
      if (l.b()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.t();
        var t = l.n();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.b()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.t();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.n();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.t(), $m_sci_Nil$());
            var toProcess = start.n();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.t(), $m_sci_Nil$());
              currentLast.S = newElem;
              currentLast = newElem;
              toProcess = toProcess.n();
            }
            var next = firstMiss.n();
            var nextToCopy = next;
            while ((!next.b())) {
              var head = next.t();
              if (((!(!f(head))) !== true)) {
                next = next.n();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.t(), $m_sci_Nil$());
                  currentLast.S = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.n();
                }
                nextToCopy = next.n();
                next = next.n();
              }
            }
            if ((!nextToCopy.b())) {
              currentLast.S = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.eo.c0(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.ba(t$1.aT()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.b()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.t();
        var t$2 = l$1.n();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.b()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.t();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.n();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.t(), $m_sci_Nil$());
            var toProcess$1 = start$1.n();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.t(), $m_sci_Nil$());
              currentLast$1.S = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.n();
            }
            var next$1 = firstMiss$1.n();
            var nextToCopy$1 = next$1;
            while ((!next$1.b())) {
              var head$1 = next$1.t();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.n();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.t(), $m_sci_Nil$());
                  currentLast$1.S = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.n();
                }
                nextToCopy$1 = next$1.n();
                next$1 = next$1.n();
              }
            }
            if ((!nextToCopy$1.b())) {
              currentLast$1.S = nextToCopy$1;
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
    var x0$1 = itemsToAdd.t();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.n();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.t();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.S = nx;
      t$3 = nx;
      rest = rest.n();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.mD($x_2);
  var domValues = key.h9.n0(key.ld.d($thiz));
  var f$3 = ((elem) => result.ba(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.b()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.t();
        var t$4 = l$2.n();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.b()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.t();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.n();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.t(), $m_sci_Nil$());
            var toProcess$2 = start$2.n();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.t(), $m_sci_Nil$());
              currentLast$2.S = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.n();
            }
            var next$2 = firstMiss$2.n();
            var nextToCopy$2 = next$2;
            while ((!next$2.b())) {
              var head$2 = next$2.t();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.n();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.t(), $m_sci_Nil$());
                  currentLast$2.S = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.n();
                }
                nextToCopy$2 = next$2.n();
                next$2 = next$2.n();
              }
            }
            if ((!nextToCopy$2.b())) {
              currentLast$2.S = nextToCopy$2;
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
      if (l$3.b()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.t();
        var t$5 = l$3.n();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.b()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.t();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.n();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.t(), $m_sci_Nil$());
            var toProcess$3 = start$3.n();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.t(), $m_sci_Nil$());
              currentLast$3.S = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.n();
            }
            var next$3 = firstMiss$3.n();
            var nextToCopy$3 = next$3;
            while ((!next$3.b())) {
              var head$3 = next$3.t();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.n();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.t(), $m_sci_Nil$());
                  currentLast$3.S = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.n();
                }
                nextToCopy$3 = next$3.n();
                next$3 = next$3.n();
              }
            }
            if ((!nextToCopy$3.b())) {
              currentLast$3.S = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.mD($x_4);
  $thiz.eo = $thiz.eo.dG(key, newItems);
  key.le.eD($thiz, key.h9.n2(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.f0, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.f0;
  $thiz.f0 = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.b()) && (!maybePrevParent.O().gA().bA.b()));
  var isNextParentActive = ((!maybeNextParent.b()) && (!maybeNextParent.O().gA().bA.b()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.b() ? $m_s_None$() : new $c_s_Some(maybeNextParent.O().gA())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.b()) {
    $thiz.hn.oY();
  } else {
    var x0 = maybeNextOwner.O();
    $thiz.hn.qL(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.hm = null;
  this.hm = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.pZ = (function(x) {
  if ((x !== null)) {
    x.aT();
    var r = x.aG();
    var x$3 = this.hm;
    if ((r === x$3)) {
      return true;
    }
  }
  return false;
});
$p.oO = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.aT();
    var r = x.aG();
    var x$3 = this.hm;
    if ((r === x$3)) {
      return item;
    }
  }
  return default$1.d(x);
});
$p.cb = (function(x) {
  return this.pZ(x);
});
$p.bI = (function(x, default$1) {
  return this.oO(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  dZ: 1,
  aW: 1,
  e: 1,
  j: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  ea: 1,
  D: 1,
  C: 1,
  u: 1,
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
  ed: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bi: 1,
  D: 1,
  C: 1,
  u: 1,
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
  bk: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  eh: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aG: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  em: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  en: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ep)));
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
  eq: 1,
  a9: 1,
  a: 1,
  a3: 1,
  Y: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ez: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  eE: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  eF: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.hC)) {
    $thiz.hD = (($thiz.gd === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.hC = true;
  }
  return $thiz.hD;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.hC) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.hD);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.gd;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.gd + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hD = null;
    this.gd = null;
    this.hC = false;
    this.gd = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  fF() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  eN: 1,
  D: 1,
  C: 1,
  u: 1,
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
$p.b = (function() {
  return (this === $m_s_None$());
});
$p.B = (function() {
  return (this.b() ? 0 : 1);
});
$p.ba = (function(elem) {
  return ((!this.b()) && $m_sr_BoxesRunTime$().r(this.O(), elem));
});
$p.l = (function() {
  return (this.b() ? $m_sc_Iterator$().J : new $c_sc_Iterator$$anon$20(this.O()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.f2 = 0;
  this.lH = 0;
  this.lG = null;
  this.lG = outer;
  this.f2 = 0;
  this.lH = outer.bc();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.q = (function() {
  return (this.f2 < this.lH);
});
$p.h = (function() {
  var result = this.lG.bd(this.f2);
  this.f2 = ((1 + this.f2) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  eS: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.lI = null;
  this.lJ = null;
  this.lI = _1;
  this.lJ = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bc = (function() {
  return 2;
});
$p.bd = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.aT = (function() {
  return this.lI;
});
$p.aG = (function() {
  return this.lJ;
});
$p.z = (function() {
  return (((("(" + this.aT()) + ",") + this.aG()) + ")");
});
$p.be = (function() {
  return "Tuple2";
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().r(this.aT(), x$1.aT()) && $m_sr_BoxesRunTime$().r(this.aG(), x$1.aG()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  br: 1,
  eT: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dP = _1;
  this.dQ = _2;
  this.dR = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.bc = (function() {
  return 3;
});
$p.bd = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.z = (function() {
  return (((((("(" + this.dP) + ",") + this.dQ) + ",") + this.dR) + ")");
});
$p.be = (function() {
  return "Tuple3";
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().r(this.dP, x$1.dP) && ($m_sr_BoxesRunTime$().r(this.dQ, x$1.dQ) && $m_sr_BoxesRunTime$().r(this.dR, x$1.dR)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bs: 1,
  eU: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.f4 = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  f8: 1,
  f7: 1,
  K: 1,
  a: 1,
  a1: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bY() + "("), ", ", ")");
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
$p.q = (function() {
  return false;
});
$p.iU = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.B = (function() {
  return 0;
});
$p.fS = (function(from, until) {
  return this;
});
$p.h = (function() {
  this.iU();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fd: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.f5 = false;
  this.lM = null;
  this.lM = a$1;
  this.f5 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.q = (function() {
  return (!this.f5);
});
$p.h = (function() {
  if (this.f5) {
    return $m_sc_Iterator$().J.h();
  } else {
    this.f5 = true;
    return this.lM;
  }
});
$p.fS = (function(from, until) {
  return (((this.f5 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().J : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fe: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.lP = null;
  this.gg = false;
  this.lO = null;
  this.hN = null;
  this.lN = null;
  this.hN = outer;
  this.lN = f$1;
  this.lP = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.gg = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.q = (function() {
  while (true) {
    if (this.gg) {
      return true;
    } else if (this.hN.q()) {
      var a = this.hN.h();
      if (this.lP.gw(this.lN.d(a))) {
        this.lO = a;
        this.gg = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.h = (function() {
  if (this.q()) {
    this.gg = false;
    return this.lO;
  } else {
    return $m_sc_Iterator$().J.h();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fg: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.gh = null;
  this.lQ = null;
  this.gh = outer;
  this.lQ = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.B = (function() {
  return this.gh.B();
});
$p.q = (function() {
  return this.gh.q();
});
$p.h = (function() {
  return this.lQ.d(this.gh.h());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fh: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bn instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bn;
      $thiz.bn = c.bn;
      $thiz.cU = c.cU;
      if ((c.bP !== null)) {
        if (($thiz.bO === null)) {
          $thiz.bO = c.bO;
        }
        c.bO.f6 = $thiz.bP;
        $thiz.bP = c.bP;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.bP === null)) {
      $thiz.bn = null;
      $thiz.bO = null;
      return false;
    } else {
      $thiz.bn = $thiz.bP.pJ();
      if (($thiz.bO === $thiz.bP)) {
        $thiz.bO = $thiz.bO.f6;
      }
      $thiz.bP = $thiz.bP.f6;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.cU) {
        return true;
      } else if ((($thiz.bn !== null) && $thiz.bn.q())) {
        $thiz.cU = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bn = null;
  this.bP = null;
  this.bO = null;
  this.cU = false;
  this.bn = current;
  this.bP = null;
  this.bO = null;
  this.cU = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.q = (function() {
  if (this.cU) {
    return true;
  } else if ((this.bn !== null)) {
    if (this.bn.q()) {
      this.cU = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  if (this.q()) {
    this.cU = false;
    return this.bn.h();
  } else {
    return $m_sc_Iterator$().J.h();
  }
});
$p.ir = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bP === null)) {
    this.bP = c;
    this.bO = c;
  } else {
    this.bO.f6 = c;
    this.bO = c;
  }
  if ((this.bn === null)) {
    this.bn = $m_sc_Iterator$().J;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  by: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cx > 0)) {
    if ($thiz.cV.q()) {
      $thiz.cV.h();
      $thiz.cx = (((-1) + $thiz.cx) | 0);
    } else {
      $thiz.cx = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bD < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bD - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.cV = null;
  this.bD = 0;
  this.cx = 0;
  this.cV = underlying;
  this.bD = limit;
  this.cx = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.B = (function() {
  var size = this.cV.B();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cx) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bD < 0)) {
      return dropSize;
    } else {
      var x = this.bD;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.q = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bD !== 0) && this.cV.q());
});
$p.h = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bD > 0)) {
    this.bD = (((-1) + this.bD) | 0);
    return this.cV.h();
  } else {
    return ((this.bD < 0) ? this.cV.h() : $m_sc_Iterator$().J.h());
  }
});
$p.fS = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bD < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cx + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().J;
  } else if ((sum < 0)) {
    this.cx = 2147483647;
    this.bD = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.cV, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.cx = sum;
    this.bD = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  fj: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.b())) {
    len = ((1 + len) | 0);
    these = these.n();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bb(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.n1(n);
  if (skipped.b()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.t();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.b() ? 0 : 1);
    } else if (xs.b()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.n();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.b()) && (!b.b())) && $m_sr_BoxesRunTime$().r(a.t(), b.t()))) {
      var temp$a = a.n();
      var temp$b = b.n();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.b() && b.b());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.f7 = null;
  this.f7 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.q = (function() {
  return (!this.f7.b());
});
$p.h = (function() {
  var r = this.f7.t();
  this.f7 = this.f7.n();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  fn: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cz === null)) {
    $thiz.cz = new $ac_I(($m_sci_Node$().ff << 1));
    $thiz.f9 = new ($d_sci_Node.r().C)($m_sci_Node$().ff);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.dU = node;
  $thiz.bE = 0;
  $thiz.f8 = node.j0();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bp = ((1 + $thiz.bp) | 0);
  var cursorIndex = ($thiz.bp << 1);
  var lengthIndex = ((1 + ($thiz.bp << 1)) | 0);
  $thiz.f9.a[$thiz.bp] = node;
  $thiz.cz.a[cursorIndex] = 0;
  $thiz.cz.a[lengthIndex] = node.iV();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bp = (((-1) + $thiz.bp) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bp >= 0)) {
    var cursorIndex = ($thiz.bp << 1);
    var lengthIndex = ((1 + ($thiz.bp << 1)) | 0);
    var nodeCursor = $thiz.cz.a[cursorIndex];
    if ((nodeCursor < $thiz.cz.a[lengthIndex])) {
      var ev$1 = $thiz.cz;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.f9.a[$thiz.bp].iF(nodeCursor);
      if (nextNode.iK()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gD()) {
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
  $thiz.bE = 0;
  $thiz.f8 = 0;
  $thiz.bp = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.iK()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gD()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bE = 0;
  this.f8 = 0;
  this.dU = null;
  this.bp = 0;
  this.cz = null;
  this.f9 = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.q = (function() {
  return ((this.bE < this.f8) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.gj = node;
  $thiz.d3 = (((-1) + node.j0()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bF = ((1 + $thiz.bF) | 0);
  $thiz.fb.a[$thiz.bF] = node;
  $thiz.fa.a[$thiz.bF] = (((-1) + node.iV()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bF = (((-1) + $thiz.bF) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bF >= 0)) {
    var nodeCursor = $thiz.fa.a[$thiz.bF];
    $thiz.fa.a[$thiz.bF] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fb.a[$thiz.bF].iF(nodeCursor));
    } else {
      var currNode = $thiz.fb.a[$thiz.bF];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gD()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.d3 = (-1);
  $thiz.bF = (-1);
  $thiz.fa = new $ac_I(((1 + $m_sci_Node$().ff) | 0));
  $thiz.fb = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().ff) | 0));
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
  this.d3 = 0;
  this.gj = null;
  this.bF = 0;
  this.fa = null;
  this.fb = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.q = (function() {
  return ((this.d3 >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.eu !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.y(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.y(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.fA(bitpos);
  var idx = (dataIx << 1);
  var src = bm.ak;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.y(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.y(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bo, dataIx, originalHash);
  bm.Z = (bm.Z | bitpos);
  bm.ak = dst;
  bm.bo = dstHashes;
  bm.aK = ((1 + bm.aK) | 0);
  bm.bf = ((bm.bf + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eu = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cg = $thiz.cg.mX();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eu = null;
  this.cg = null;
  this.cg = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().lE, $m_s_Array$EmptyArrays$().hB, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.eP = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().e8(keyHash, shift);
    var bitpos = $m_sci_Node$().dw(mask);
    if (((mapNode.Z & bitpos) !== 0)) {
      var index = $m_sci_Node$().cp(mapNode.Z, mask, bitpos);
      var key0 = mapNode.dA(index);
      var key0UnimprovedHash = mapNode.fE(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().r(key0, key))) {
        mapNode.ak.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.cN(index);
        var key0Hash = $m_sc_Hashing$().ca(key0UnimprovedHash);
        var subNodeNew = mapNode.iT(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.q7(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.a8 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cp(mapNode.a8, mask, bitpos);
      var subNode = mapNode.cM(index$2);
      var beforeSize = subNode.aI();
      var beforeHash = subNode.dx();
      this.eP(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aK = ((mapNode.aK + ((subNode.aI() - beforeSize) | 0)) | 0);
      mapNode.bf = ((mapNode.bf + ((subNode.dx() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.eH(key);
    if ((index$3 < 0)) {
      mapNode.a9 = mapNode.a9.du(new $c_T2(key, value));
    } else {
      mapNode.a9 = mapNode.a9.dF(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.j3 = (function() {
  if ((this.cg.aK === 0)) {
    return $m_sci_HashMap$().hU;
  } else if ((this.eu !== null)) {
    return this.eu;
  } else {
    this.eu = new $c_sci_HashMap(this.cg);
    return this.eu;
  }
});
$p.mA = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().Q(elem.aT());
  var im = $m_sc_Hashing$().ca(h);
  this.eP(this.cg, elem.aT(), elem.aG(), h, im, 0);
  return this;
});
$p.e3 = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().Q(key);
  this.eP(this.cg, key, value, originalHash, $m_sc_Hashing$().ca(originalHash), 0);
  return this;
});
$p.ij = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.rm();
    while (iter.q()) {
      var next = iter.h();
      var originalHash = xs.r0(next.nl());
      var hash = $m_sc_Hashing$().ca(originalHash);
      this.eP(this.cg, next.np(), next.r5(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.pk();
    while (iter$2.q()) {
      var next$2 = iter$2.h();
      var originalHash$2 = xs.r0(next$2.nl());
      var hash$2 = $m_sc_Hashing$().ca(originalHash$2);
      this.eP(this.cg, next$2.np(), next$2.r5(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.e5(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.e3(key$2$2, value$2$2))));
  } else {
    var it = xs.l();
    while (it.q()) {
      this.mA(it.h());
    }
  }
  return this;
});
$p.aY = (function(elems) {
  return this.ij(elems);
});
$p.aZ = (function(elem) {
  return this.mA(elem);
});
$p.b5 = (function() {
  return this.j3();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  fy: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.ev = null;
  this.lY = null;
  this.oX();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.oX = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.lY = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.ix()))));
  this.ev = deferred;
});
$p.qG = (function() {
  this.ev.iN(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.lY;
});
$p.oz = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.ev.iN(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.ix())))));
  })));
  this.ev = deferred;
  return this;
});
$p.oq = (function(xs) {
  if ((xs.B() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.ev.iN(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().nJ(xs.l(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.ix()))))));
    this.ev = deferred;
  }
  return this;
});
$p.aY = (function(elems) {
  return this.oq(elems);
});
$p.aZ = (function(elem) {
  return this.oz(elem);
});
$p.b5 = (function() {
  return this.qG();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  fE: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.ew = null;
  this.ew = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.q = (function() {
  return (!this.ew.b());
});
$p.h = (function() {
  if (this.ew.b()) {
    return $m_sc_Iterator$().J.h();
  } else {
    var res = this.ew.F().t();
    this.ew = this.ew.F().aV();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  fG: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.fc = null;
  $n_sci_List$ = this;
  this.fc = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.cL = (function(elems) {
  return $m_sci_Nil$().eL(elems);
});
$p.b0 = (function() {
  return new $c_scm_ListBuffer();
});
$p.ax = (function(source) {
  return $m_sci_Nil$().eL(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  fJ: 1,
  ah: 1,
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
  $thiz.ex = outer;
  $thiz.d7 = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.d7 = 0;
  this.ex = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.q = (function() {
  return (this.d7 < 2);
});
$p.h = (function() {
  switch (this.d7) {
    case 0: {
      var result = new $c_T2(this.ex.c2, this.ex.d5);
      break;
    }
    case 1: {
      var result = new $c_T2(this.ex.c3, this.ex.d6);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.h();
    }
  }
  this.d7 = ((1 + this.d7) | 0);
  return result;
});
$p.dz = (function(n) {
  this.d7 = ((this.d7 + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.d8 = outer;
  $thiz.d9 = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.d9 = 0;
  this.d8 = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.q = (function() {
  return (this.d9 < 3);
});
$p.h = (function() {
  switch (this.d9) {
    case 0: {
      var result = new $c_T2(this.d8.bR, this.d8.cA);
      break;
    }
    case 1: {
      var result = new $c_T2(this.d8.bS, this.d8.cB);
      break;
    }
    case 2: {
      var result = new $c_T2(this.d8.bT, this.d8.cC);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.h();
    }
  }
  this.d9 = ((1 + this.d9) | 0);
  return result;
});
$p.dz = (function(n) {
  this.d9 = ((this.d9 + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.ci = outer;
  $thiz.da = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.da = 0;
  this.ci = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.q = (function() {
  return (this.da < 4);
});
$p.h = (function() {
  switch (this.da) {
    case 0: {
      var result = new $c_T2(this.ci.bq, this.ci.c4);
      break;
    }
    case 1: {
      var result = new $c_T2(this.ci.br, this.ci.c5);
      break;
    }
    case 2: {
      var result = new $c_T2(this.ci.bs, this.ci.c6);
      break;
    }
    case 3: {
      var result = new $c_T2(this.ci.bt, this.ci.c7);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.h();
    }
  }
  this.da = ((1 + this.da) | 0);
  return result;
});
$p.dz = (function(n) {
  this.da = ((this.da + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cD = null;
  this.fd = false;
  this.dW = null;
  this.cD = $m_sci_Map$EmptyMap$();
  this.fd = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b1 = (function(size) {
});
$p.nG = (function() {
  return (this.fd ? this.dW.j3() : this.cD);
});
$p.ox = (function(key, value) {
  if (this.fd) {
    this.dW.e3(key, value);
  } else if ((this.cD.aI() < 4)) {
    this.cD = this.cD.dG(key, value);
  } else if (this.cD.ba(key)) {
    this.cD = this.cD.dG(key, value);
  } else {
    this.fd = true;
    if ((this.dW === null)) {
      this.dW = new $c_sci_HashMapBuilder();
    }
    this.cD.oU(this.dW);
    this.dW.e3(key, value);
  }
  return this;
});
$p.mv = (function(xs) {
  return (this.fd ? (this.dW.ij(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.aY = (function(elems) {
  return this.mv(elems);
});
$p.aZ = (function(elem) {
  return this.ox(elem.aT(), elem.aG());
});
$p.b5 = (function() {
  return this.nG();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  fU: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().no($m_jl_System$SystemProperties$().iH("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
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
  this.m4 = 0;
  this.m5 = null;
  $n_sci_Vector$ = this;
  this.m4 = $ps_sci_Vector$__liftedTree1$1__I();
  this.m5 = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cL = (function(elems) {
  return this.iD(elems);
});
$p.iD = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.B();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.a7().aH();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cf;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bJ(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.l().bJ(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().mw(it).nH();
    }
  }
});
$p.b0 = (function() {
  return new $c_sci_VectorBuilder();
});
$p.ax = (function(source) {
  return this.iD(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  g7: 1,
  ah: 1,
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
  if (($thiz.M >= 6)) {
    a = $thiz.aB;
    var i = (($thiz.H >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.y(i, dest, 0, length);
    }
    var newOffset = (($thiz.H % 33554432) | 0);
    $thiz.C = (($thiz.C - (($thiz.H - newOffset) | 0)) | 0);
    $thiz.H = newOffset;
    if (((($thiz.C >>> 25) | 0) === 0)) {
      $thiz.M = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 5)) {
    if ((a === null)) {
      a = $thiz.W;
    }
    var i$2 = (31 & (($thiz.H >>> 20) | 0));
    if (($thiz.M === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.y(i$2, dest$1, 0, length$1);
      }
      $thiz.W = a;
      var newOffset$1 = (($thiz.H % 1048576) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$1) | 0)) | 0);
      $thiz.H = newOffset$1;
      if (((($thiz.C >>> 20) | 0) === 0)) {
        $thiz.M = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().a6(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 4)) {
    if ((a === null)) {
      a = $thiz.P;
    }
    var i$3 = (31 & (($thiz.H >>> 15) | 0));
    if (($thiz.M === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.y(i$3, dest$2, 0, length$2);
      }
      $thiz.P = a;
      var newOffset$2 = (($thiz.H % 32768) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$2) | 0)) | 0);
      $thiz.H = newOffset$2;
      if (((($thiz.C >>> 15) | 0) === 0)) {
        $thiz.M = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().a6(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 3)) {
    if ((a === null)) {
      a = $thiz.K;
    }
    var i$4 = (31 & (($thiz.H >>> 10) | 0));
    if (($thiz.M === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.y(i$4, dest$3, 0, length$3);
      }
      $thiz.K = a;
      var newOffset$3 = (($thiz.H % 1024) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$3) | 0)) | 0);
      $thiz.H = newOffset$3;
      if (((($thiz.C >>> 10) | 0) === 0)) {
        $thiz.M = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().a6(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 2)) {
    if ((a === null)) {
      a = $thiz.G;
    }
    var i$5 = (31 & (($thiz.H >>> 5) | 0));
    if (($thiz.M === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.y(i$5, dest$4, 0, length$4);
      }
      $thiz.G = a;
      var newOffset$4 = (($thiz.H % 32) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$4) | 0)) | 0);
      $thiz.H = newOffset$4;
      if (((($thiz.C >>> 5) | 0) === 0)) {
        $thiz.M = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().a6(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 1)) {
    if ((a === null)) {
      a = $thiz.T;
    }
    var i$6 = (31 & $thiz.H);
    if (($thiz.M === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.y(i$6, dest$5, 0, length$5);
      }
      $thiz.T = a;
      $thiz.L = (($thiz.L - $thiz.H) | 0);
      $thiz.H = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().a6(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.gl = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.L === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.L) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.T;
    var destPos = $thiz.L;
    data.y(0, dest, destPos, copy1);
    $thiz.L = (($thiz.L + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.T;
      data.y(copy1, dest$1, 0, copy2);
      $thiz.L = (($thiz.L + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.L === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.C) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.C >>> 5) | 0));
      var dest = $thiz.G;
      slice.y(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.G;
        slice.y(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.C % 1024) | 0) !== 0)) {
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
            var lo = t.k;
            var hi = t.m;
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
      var a$1 = (31 & ((((32768 - $thiz.C) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.C >>> 10) | 0));
      var dest$2 = $thiz.K;
      slice.y(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.K;
        slice.y(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.C % 32768) | 0) !== 0)) {
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
            var lo$1 = t$1.k;
            var hi$1 = t$1.m;
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
      var a$2 = (31 & ((((1048576 - $thiz.C) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.C >>> 15) | 0));
      var dest$4 = $thiz.P;
      slice.y(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.P;
        slice.y(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.C % 1048576) | 0) !== 0)) {
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
            var lo$2 = t$2.k;
            var hi$2 = t$2.m;
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
      var a$3 = (31 & ((((33554432 - $thiz.C) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.C >>> 20) | 0));
      var dest$6 = $thiz.W;
      slice.y(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.W;
        slice.y(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.C % 33554432) | 0) !== 0)) {
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
            var lo$3 = t$3.k;
            var hi$3 = t$3.m;
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
      var destPos$5 = (($thiz.C >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aB;
      slice.y(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cv();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cu(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.L === 32) || ($thiz.L === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().iz((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.C) | 0);
  var xor = (idx ^ $thiz.C);
  $thiz.C = idx;
  $thiz.L = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.C + n) | 0);
    var xor = (idx ^ $thiz.C);
    $thiz.C = idx;
    $thiz.L = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.T) + ", a2=") + $thiz.G) + ", a3=") + $thiz.K) + ", a4=") + $thiz.P) + ", a5=") + $thiz.W) + ", a6=") + $thiz.aB) + ", depth=") + $thiz.M));
  } else if ((xor < 1024)) {
    if (($thiz.M <= 1)) {
      $thiz.G = new ($d_O.r().r().C)(32);
      $thiz.G.a[0] = $thiz.T;
      $thiz.M = 2;
    }
    $thiz.T = new $ac_O(32);
    $thiz.G.a[(31 & ((idx >>> 5) | 0))] = $thiz.T;
  } else if ((xor < 32768)) {
    if (($thiz.M <= 2)) {
      $thiz.K = new ($d_O.r().r().r().C)(32);
      $thiz.K.a[0] = $thiz.G;
      $thiz.M = 3;
    }
    $thiz.T = new $ac_O(32);
    $thiz.G = new ($d_O.r().r().C)(32);
    $thiz.G.a[(31 & ((idx >>> 5) | 0))] = $thiz.T;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.G;
  } else if ((xor < 1048576)) {
    if (($thiz.M <= 3)) {
      $thiz.P = new ($d_O.r().r().r().r().C)(32);
      $thiz.P.a[0] = $thiz.K;
      $thiz.M = 4;
    }
    $thiz.T = new $ac_O(32);
    $thiz.G = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.G.a[(31 & ((idx >>> 5) | 0))] = $thiz.T;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.G;
    $thiz.P.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
  } else if ((xor < 33554432)) {
    if (($thiz.M <= 4)) {
      $thiz.W = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.W.a[0] = $thiz.P;
      $thiz.M = 5;
    }
    $thiz.T = new $ac_O(32);
    $thiz.G = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.P = new ($d_O.r().r().r().r().C)(32);
    $thiz.G.a[(31 & ((idx >>> 5) | 0))] = $thiz.T;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.G;
    $thiz.P.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
    $thiz.W.a[(31 & ((idx >>> 20) | 0))] = $thiz.P;
  } else {
    if (($thiz.M <= 5)) {
      $thiz.aB = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aB.a[0] = $thiz.W;
      $thiz.M = 6;
    }
    $thiz.T = new $ac_O(32);
    $thiz.G = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.P = new ($d_O.r().r().r().r().C)(32);
    $thiz.W = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.G.a[(31 & ((idx >>> 5) | 0))] = $thiz.T;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.G;
    $thiz.P.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
    $thiz.W.a[(31 & ((idx >>> 20) | 0))] = $thiz.P;
    $thiz.aB.a[((idx >>> 25) | 0)] = $thiz.W;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aB = null;
  this.W = null;
  this.P = null;
  this.K = null;
  this.G = null;
  this.T = null;
  this.L = 0;
  this.C = 0;
  this.H = 0;
  this.gl = false;
  this.M = 0;
  this.T = new $ac_O(32);
  this.L = 0;
  this.C = 0;
  this.H = 0;
  this.gl = false;
  this.M = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.pP = (function(v) {
  var x1 = v.cv();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.M = 1;
      var i = v.f.a.length;
      this.L = (31 & i);
      this.C = ((i - this.L) | 0);
      var a = v.f;
      this.T = ((a.a.length === 32) ? a : $m_ju_Arrays$().a6(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bi;
      var a$1 = v.i;
      this.T = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().a6(a$1, 0, 32));
      this.M = 2;
      this.H = ((32 - v.bG) | 0);
      var i$1 = ((v.j + this.H) | 0);
      this.L = (31 & i$1);
      this.C = ((i$1 - this.L) | 0);
      this.G = new ($d_O.r().r().C)(32);
      this.G.a[0] = v.f;
      var dest = this.G;
      var length = d2.a.length;
      d2.y(0, dest, 1, length);
      this.G.a[((1 + d2.a.length) | 0)] = this.T;
      break;
    }
    case 5: {
      var d3 = v.aW;
      var s2 = v.aX;
      var a$2 = v.i;
      this.T = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().a6(a$2, 0, 32));
      this.M = 3;
      this.H = ((1024 - v.b8) | 0);
      var i$2 = ((v.j + this.H) | 0);
      this.L = (31 & i$2);
      this.C = ((i$2 - this.L) | 0);
      this.K = new ($d_O.r().r().r().C)(32);
      this.K.a[0] = $m_sci_VectorStatics$().cl(v.f, v.bv);
      var dest$1 = this.K;
      var length$1 = d3.a.length;
      d3.y(0, dest$1, 1, length$1);
      this.G = $m_ju_Arrays$().Y(s2, 32);
      this.K.a[((1 + d3.a.length) | 0)] = this.G;
      this.G.a[s2.a.length] = this.T;
      break;
    }
    case 7: {
      var d4 = v.ay;
      var s3 = v.aA;
      var s2$2 = v.az;
      var a$3 = v.i;
      this.T = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().a6(a$3, 0, 32));
      this.M = 4;
      this.H = ((32768 - v.aP) | 0);
      var i$3 = ((v.j + this.H) | 0);
      this.L = (31 & i$3);
      this.C = ((i$3 - this.L) | 0);
      this.P = new ($d_O.r().r().r().r().C)(32);
      this.P.a[0] = $m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl(v.f, v.b3), v.b4);
      var dest$2 = this.P;
      var length$2 = d4.a.length;
      d4.y(0, dest$2, 1, length$2);
      this.K = $m_ju_Arrays$().Y(s3, 32);
      this.G = $m_ju_Arrays$().Y(s2$2, 32);
      this.P.a[((1 + d4.a.length) | 0)] = this.K;
      this.K.a[s3.a.length] = this.G;
      this.G.a[s2$2.a.length] = this.T;
      break;
    }
    case 9: {
      var d5 = v.aa;
      var s4 = v.ad;
      var s3$2 = v.ac;
      var s2$3 = v.ab;
      var a$4 = v.i;
      this.T = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().a6(a$4, 0, 32));
      this.M = 5;
      this.H = ((1048576 - v.ar) | 0);
      var i$4 = ((v.j + this.H) | 0);
      this.L = (31 & i$4);
      this.C = ((i$4 - this.L) | 0);
      this.W = new ($d_O.r().r().r().r().r().C)(32);
      this.W.a[0] = $m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl(v.f, v.aD), v.aE), v.aF);
      var dest$3 = this.W;
      var length$3 = d5.a.length;
      d5.y(0, dest$3, 1, length$3);
      this.P = $m_ju_Arrays$().Y(s4, 32);
      this.K = $m_ju_Arrays$().Y(s3$2, 32);
      this.G = $m_ju_Arrays$().Y(s2$3, 32);
      this.W.a[((1 + d5.a.length) | 0)] = this.P;
      this.P.a[s4.a.length] = this.K;
      this.K.a[s3$2.a.length] = this.G;
      this.G.a[s2$3.a.length] = this.T;
      break;
    }
    case 11: {
      var d6 = v.a1;
      var s5 = v.a5;
      var s4$2 = v.a4;
      var s3$3 = v.a3;
      var s2$4 = v.a2;
      var a$5 = v.i;
      this.T = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().a6(a$5, 0, 32));
      this.M = 6;
      this.H = ((33554432 - v.al) | 0);
      var i$5 = ((v.j + this.H) | 0);
      this.L = (31 & i$5);
      this.C = ((i$5 - this.L) | 0);
      this.aB = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aB.a[0] = $m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl($m_sci_VectorStatics$().cl(v.f, v.as), v.at), v.au), v.av);
      var dest$4 = this.aB;
      var length$4 = d6.a.length;
      d6.y(0, dest$4, 1, length$4);
      this.W = $m_ju_Arrays$().Y(s5, 32);
      this.P = $m_ju_Arrays$().Y(s4$2, 32);
      this.K = $m_ju_Arrays$().Y(s3$3, 32);
      this.G = $m_ju_Arrays$().Y(s2$4, 32);
      this.aB.a[((1 + d6.a.length) | 0)] = this.W;
      this.W.a[s5.a.length] = this.P;
      this.P.a[s4$2.a.length] = this.K;
      this.K.a[s3$3.a.length] = this.G;
      this.G.a[s2$4.a.length] = this.T;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.L === 0) && (this.C > 0))) {
    this.L = 32;
    this.C = (((-32) + this.C) | 0);
  }
  return this;
});
$p.oA = (function(elem) {
  if ((this.L === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.T.a[this.L] = elem;
  this.L = ((1 + this.L) | 0);
  return this;
});
$p.mw = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.L === 0) && (this.C === 0)) && (!this.gl)) ? this.pP(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.nH = (function() {
  if (this.gl) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.L + this.C) | 0);
  var realLen = ((len - this.H) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.T;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().Y(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().a6(this.G, 1, i2);
    var prefix1 = this.G.a[0];
    var a$1 = this.G.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().Y(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.H) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().a6(this.K, 1, i3);
    var a$2 = this.K.a[0];
    var prefix2 = $m_ju_Arrays$().a6(a$2, 1, a$2.a.length);
    var prefix1$2 = this.K.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().Y(this.K.a[i3], i2$2);
    var a$3 = this.K.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().Y(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().a6(this.P, 1, i4);
    var a$4 = this.P.a[0];
    var prefix3 = $m_ju_Arrays$().a6(a$4, 1, a$4.a.length);
    var a$5 = this.P.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().a6(a$5, 1, a$5.a.length);
    var prefix1$3 = this.P.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().Y(this.P.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().Y(this.P.a[i4].a[i3$2], i2$3);
    var a$6 = this.P.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().Y(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().a6(this.W, 1, i5);
    var a$7 = this.W.a[0];
    var prefix4 = $m_ju_Arrays$().a6(a$7, 1, a$7.a.length);
    var a$8 = this.W.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().a6(a$8, 1, a$8.a.length);
    var a$9 = this.W.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().a6(a$9, 1, a$9.a.length);
    var prefix1$4 = this.W.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().Y(this.W.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().Y(this.W.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().Y(this.W.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.W.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().Y(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().a6(this.aB, 1, i6);
    var a$11 = this.aB.a[0];
    var prefix5 = $m_ju_Arrays$().a6(a$11, 1, a$11.a.length);
    var a$12 = this.aB.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().a6(a$12, 1, a$12.a.length);
    var a$13 = this.aB.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().a6(a$13, 1, a$13.a.length);
    var a$14 = this.aB.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().a6(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aB.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().Y(this.aB.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().Y(this.aB.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().Y(this.aB.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().Y(this.aB.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aB.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().Y(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.z = (function() {
  return (((((((("VectorBuilder(len1=" + this.L) + ", lenRest=") + this.C) + ", offset=") + this.H) + ", depth=") + this.M) + ")");
});
$p.b5 = (function() {
  return this.nH();
});
$p.aY = (function(elems) {
  return this.mw(elems);
});
$p.aZ = (function(elem) {
  return this.oA(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gf: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.m7 = null;
  $n_scm_ArrayBuffer$ = this;
  this.m7 = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cL = (function(elems) {
  return this.ng(elems);
});
$p.ng = (function(coll) {
  var k = coll.B();
  if ((k >= 0)) {
    var array = this.nK(this.m7, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bJ(array, 0, 2147483647) : coll.l().bJ(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).mx(coll);
  }
});
$p.b0 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.qF = (function(arrayLen, targetLen) {
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
$p.nK = (function(array, curSize, targetSize) {
  var newLen = this.qF(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.y(0, res, 0, curSize);
    return res;
  }
});
$p.ax = (function(source) {
  return this.ng(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  gk: 1,
  ah: 1,
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
  this.dm = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b1 = (function(size) {
  this.dm.b1(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  gl: 1,
  aU: 1,
  M: 1,
  H: 1,
  F: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.et = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  gq: 1,
  bz: 1,
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
  this.dm = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b1 = (function(size) {
  this.dm.b1(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  gy: 1,
  aU: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.fh = outer;
  $thiz.dp = 0;
  $thiz.cH = null;
  $thiz.fi = outer.aQ.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dp = 0;
  this.cH = null;
  this.fi = 0;
  this.fh = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.q = (function() {
  if ((this.cH !== null)) {
    return true;
  } else {
    while ((this.dp < this.fi)) {
      var n = this.fh.aQ.a[this.dp];
      this.dp = ((1 + this.dp) | 0);
      if ((n !== null)) {
        this.cH = n;
        return true;
      }
    }
    return false;
  }
});
$p.h = (function() {
  if ((!this.q())) {
    return $m_sc_Iterator$().J.h();
  } else {
    var r = this.iy(this.cH);
    this.cH = this.cH.aR;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.fj = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.fj = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b5 = (function() {
  return this.fj;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.et = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  gB: 1,
  bz: 1,
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
$p.cL = (function(elems) {
  return new $c_scm_ListBuffer().gM(elems);
});
$p.b0 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.ax = (function(source) {
  return new $c_scm_ListBuffer().gM(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  gE: 1,
  ah: 1,
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
  this.ic = null;
  this.mh = null;
  this.mg = 0;
  this.ic = underlying;
  this.mh = mutationCount;
  this.mg = (mutationCount.N() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.q = (function() {
  $m_scm_MutationTracker$().mT(this.mg, (this.mh.N() | 0), "mutation occurred during iteration");
  return this.ic.q();
});
$p.h = (function() {
  return this.ic.h();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  gG: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aH();
    var x$3 = x.aH();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.V.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.V.Q())) + "]") : clazz.V.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.fl = 0;
  this.ml = 0;
  this.mm = null;
  this.mm = x$2;
  this.fl = 0;
  this.ml = x$2.bc();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.q = (function() {
  return (this.fl < this.ml);
});
$p.h = (function() {
  var result = this.mm.bd(this.fl);
  this.fl = ((1 + this.fl) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  hn: 1,
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
$p.cL = (function(elems) {
  return this.nh(elems);
});
$p.b0 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.nh = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b5();
});
$p.ax = (function(source) {
  return this.nh(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  hu: 1,
  ah: 1,
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
$p.cL = (function(elems) {
  return this.iE(elems);
});
$p.iE = (function(source) {
  return this.b0().aY(source).b5();
});
$p.b0 = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dr))));
});
$p.ax = (function(source) {
  return this.iE(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  hI: 1,
  ah: 1,
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
  this.e1 = null;
  this.e1 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.nm = (function() {
  return true;
});
$p.nn = (function() {
  return false;
});
$p.iR = (function(f) {
  return this;
});
$p.nB = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bI(this.e1, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ck(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.bK = (function(fa, fb) {
  return fa.d(this.e1);
});
$p.be = (function() {
  return "Failure";
});
$p.bc = (function() {
  return 1;
});
$p.bd = (function(x$1) {
  return ((x$1 === 0) ? this.e1 : $m_sr_Statics$().e7(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
});
$p.z = (function() {
  return $m_sr_ScalaRunTime$().ih(this);
});
$p.p = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.e1;
    var x$2 = x$1.e1;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  ci: 1,
  ck: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.e2 = null;
  this.e2 = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.nm = (function() {
  return false;
});
$p.nn = (function() {
  return true;
});
$p.iR = (function(f) {
  try {
    return new $c_s_util_Success(f.d(this.e2));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ck(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.nB = (function(pf) {
  return this;
});
$p.bK = (function(fa, fb) {
  try {
    return fb.d(this.e2);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().ck(e$2)) {
      return fa.d(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
  }
});
$p.be = (function() {
  return "Success";
});
$p.bc = (function() {
  return 1;
});
$p.bd = (function(x$1) {
  return ((x$1 === 0) ? this.e2 : $m_sr_Statics$().e7(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
});
$p.z = (function() {
  return $m_sr_ScalaRunTime$().ih(this);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().r(this.e2, x$1.e2)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cj: 1,
  ck: 1,
  J: 1,
  d: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.eS = null;
    this.eR = null;
    this.eS = error;
    this.eR = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().e6(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().e6(cause)), null, true, true);
    this.iO(cause);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.eS;
      var x$2 = x$0.eS;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.eR;
        var x$4 = x$0.eR;
        return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bc() {
    return 2;
  }
  be() {
    return "ErrorHandlingError";
  }
  bd(n) {
    if ((n === 0)) {
      return this.eS;
    }
    if ((n === 1)) {
      return this.eR;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  z() {
    return ((("ErrorHandlingError: " + this.eS) + "; cause: ") + this.eR);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  aZ: 1,
  ak: 1,
  u: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.eT = null;
    this.eT = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().e6(error)), null, true, true);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.eT;
      var x$2 = x$0.eT;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    } else {
      return false;
    }
  }
  bc() {
    return 1;
  }
  be() {
    return "ObserverError";
  }
  bd(n) {
    if ((n === 0)) {
      return this.eT;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  z() {
    return ("ObserverError: " + this.eT);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  b0: 1,
  ak: 1,
  u: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.eV = null;
    this.eU = null;
    this.eV = error;
    this.eU = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().e6(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().e6(cause)), null, true, true);
    this.iO(cause);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.eV;
      var x$2 = x$0.eV;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.eU;
        var x$4 = x$0.eU;
        return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bc() {
    return 2;
  }
  be() {
    return "ObserverErrorHandlingError";
  }
  bd(n) {
    if ((n === 0)) {
      return this.eV;
    }
    if ((n === 1)) {
      return this.eU;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  z() {
    return ((("ObserverErrorHandlingError: " + this.eV) + "; cause: ") + this.eU);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b1)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  b1: 1,
  ak: 1,
  u: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.eg = null;
    this.ef = 0;
    this.eg = trx;
    this.ef = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().e(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().e(acc, $m_sr_Statics$().Q(this.eg));
    acc = $m_sr_Statics$().e(acc, this.ef);
    return $m_sr_Statics$().D(acc, 2);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.ef === x$0.ef)) {
        var x = this.eg;
        var x$2 = x$0.eg;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bc() {
    return 2;
  }
  be() {
    return "TransactionDepthExceeded";
  }
  bd(n) {
    if ((n === 0)) {
      return this.eg;
    }
    if ((n === 1)) {
      return this.ef;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  z() {
    return ((("TransactionDepthExceeded: " + this.eg) + "; maxDepth: ") + this.ef);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b2)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  b2: 1,
  ak: 1,
  u: 1,
  a: 1,
  d: 1,
  J: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.eX = null;
    this.eW = null;
    this.eX = message;
    this.eW = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().p0(message, cause), null, true, true);
    if ((!cause.b())) {
      this.iO(cause.O());
    }
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.eX === x$0.eX)) {
        var x = this.eW;
        var x$2 = x$0.eW;
        return ((x === null) ? (x$2 === null) : x.p(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bc() {
    return 2;
  }
  be() {
    return "VarError";
  }
  bd(n) {
    if ((n === 0)) {
      return this.eX;
    }
    if ((n === 1)) {
      return this.eW;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  z() {
    return ((("VarError: " + this.eX) + "; cause: ") + this.eW);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b3)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  b3: 1,
  ak: 1,
  u: 1,
  a: 1,
  d: 1,
  J: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.j5();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.jp = 1;
  $thiz.fZ = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.fZ = ((1 + $thiz.fZ) | 0);
  $thiz.fY.jj.N();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.fY.jh.N(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().ck(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.nB(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.fY.ji.N();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.jX = null;
  this.jY = null;
  this.h2 = null;
  this.h1 = null;
  this.ek = null;
  this.jX = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.h2 = initial;
  this.h1 = new $c_Lcom_raquo_airstream_state_VarSignal(this.h2, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.ek = this.h1;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.dC = (function() {
  return this.jX;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.nM = (function(value, transaction) {
  this.h2 = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.h1, value, transaction);
});
$p.dE = (function() {
  return this.ek;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  cL: 1,
  ad: 1,
  aB: 1,
  at: 1,
  a2: 1,
  cN: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.ho;
  if ((x === (void 0))) {
    $thiz.ho = $m_sjs_js_defined$().oK($m_Lcom_raquo_ew_JsArray$().b9($m_sr_ScalaRunTime$().o(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.lu;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].ro() === propDomName)) {
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
  this.f0 = null;
  this.bM = null;
  this.hn = null;
  this.dO = null;
  this.eo = null;
  this.hp = null;
  this.b6 = null;
  this.lu = null;
  this.ho = null;
  this.hp = tag;
  this.b6 = ref;
  this.f0 = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.lu = (void 0);
  this.ho = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.iq = (function() {
  return this.f0;
});
$p.bW = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eC(parentNode, this, (void 0));
});
$p.gA = (function() {
  return this.bM;
});
$p.mW = (function(x$0) {
  this.bM = x$0;
});
$p.ed = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ea = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.p2 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().pX(this.b6)) {
    var x1 = this.hp;
    if (false) {
      return x1.ra();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().l9;
  }
});
$p.pV = (function(propDomName) {
  var x = this.p2();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().pM(x, propDomName, 0));
});
$p.qm = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.pV(key.dN)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.dN)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.dN) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().mZ(this.b6)) + "` that already has an input controller for `") + key.dN) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.dN);
      }
    }
  }
});
$p.z = (function() {
  return (("ReactiveHtmlElement(" + ((this.b6 !== null) ? this.b6.outerHTML : ("tag=" + this.hp.hs))) + ")");
});
$p.am = (function() {
  return this.b6;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  e0: 1,
  au: 1,
  U: 1,
  aE: 1,
  bf: 1,
  dX: 1
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
  eb: 1,
  aG: 1,
  D: 1,
  C: 1,
  u: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bj)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bj: 1,
  a9: 1,
  a: 1,
  a3: 1,
  Y: 1,
  ap: 1
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
  eg: 1,
  a9: 1,
  a: 1,
  a3: 1,
  Y: 1,
  ap: 1
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
  ei: 1,
  a9: 1,
  a: 1,
  a3: 1,
  Y: 1,
  ap: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.k === that.k) && ($thiz.m === that.m)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.k ^ $thiz.m);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().nz($thiz.k, $thiz.m);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bl)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bl: 1,
  a9: 1,
  a: 1,
  a3: 1,
  Y: 1,
  ap: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  eo: 1,
  bk: 1,
  D: 1,
  C: 1,
  u: 1,
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
  var str = $m_jl_Character$().qY(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  et: 1,
  a: 1,
  a3: 1,
  aF: 1,
  Y: 1,
  ap: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  ew: 1,
  aG: 1,
  D: 1,
  C: 1,
  u: 1,
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
$p.pB = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.be = (function() {
  return "None";
});
$p.bc = (function() {
  return 0;
});
$p.bd = (function(x$1) {
  return $m_sr_Statics$().e7(x$1);
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return 2433880;
});
$p.z = (function() {
  return "None";
});
$p.O = (function() {
  this.pB();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  eO: 1,
  bp: 1,
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
  this.f3 = null;
  this.f3 = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.O = (function() {
  return this.f3;
});
$p.be = (function() {
  return "Some";
});
$p.bc = (function() {
  return 1;
});
$p.bd = (function(x$1) {
  return ((x$1 === 0) ? this.f3 : $m_sr_Statics$().e7(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
});
$p.z = (function() {
  return $m_sr_ScalaRunTime$().ih(this);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().r(this.f3, x$1.f3)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bq: 1,
  bp: 1,
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
$p.bY = (function() {
  return this.bl();
});
$p.fD = (function(coll) {
  return this.bL().ax(coll);
});
$p.fJ = (function() {
  return this.bL().b0();
});
$p.co = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.eF = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.b = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bJ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dt = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eO = (function() {
  return $m_sci_Nil$().eL(this);
});
$p.B = (function() {
  return (-1);
});
$p.fC = (function(coll) {
  return this.fD(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bB = xs;
  $thiz.A = 0;
  $thiz.bm = $m_jl_reflect_Array$().bZ($thiz.bB);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.B = (function() {
  return ((this.bm - this.A) | 0);
});
$p.q = (function() {
  return (this.A < this.bm);
});
$p.h = (function() {
  if ((this.A >= $m_jl_reflect_Array$().bZ(this.bB))) {
    $m_sc_Iterator$().J.h();
  }
  var r = $m_sr_ScalaRunTime$().e4(this.bB, this.A);
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.dz = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.A + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bm;
    } else {
      var a = this.bm;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.A = $x_1;
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
  return ((value < 0) ? 0 : ((value > $thiz.bC) ? $thiz.bC : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.hM = self;
  $thiz.cw = 0;
  $thiz.bC = self.u();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.hM = null;
  this.cw = 0;
  this.bC = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.B = (function() {
  return this.bC;
});
$p.q = (function() {
  return (this.bC > 0);
});
$p.h = (function() {
  if ((this.bC > 0)) {
    var r = this.hM.x(this.cw);
    this.cw = ((1 + this.cw) | 0);
    this.bC = (((-1) + this.bC) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.h();
  }
});
$p.dz = (function(n) {
  if ((n > 0)) {
    this.cw = ((this.cw + n) | 0);
    var b = ((this.bC - n) | 0);
    this.bC = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.fS = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bC = ((b < 0) ? 0 : b);
  this.cw = ((this.cw + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bx: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.fj = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().J);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.oy = (function(elem) {
  this.fj = this.fj.ir(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.aZ = (function(elem) {
  return this.oy(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  ff: 1,
  gA: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.c0(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.d(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.l();
  while (it.q()) {
    var next = it.h();
    f.eD(next.aT(), next.aG());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.l(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.aT();
      var v = x0$1$2$2.aG();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.fJ();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.l();
  while (it.q()) {
    var next = it.h();
    if (seen.gw(f.d(next))) {
      builder.aZ(next);
    }
  }
  return builder.b5();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dB().b0();
  b.aY($thiz);
  b.aY(suffix);
  return b.b5();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.hQ)) {
    $thiz.hR = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.hQ = true;
  }
  return $thiz.hR;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.hQ) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.hR);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.hR = null;
  this.hS = null;
  this.hQ = false;
  $n_sci_ArraySeq$ = this;
  this.hS = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.iB = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.nS($m_s_Array$().nd(it, tag)));
});
$p.gH = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().nS($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.nS = (function(x) {
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
$p.iA = (function(it, evidence$5) {
  return this.iB(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  fv: 1,
  bB: 1,
  bu: 1,
  bt: 1,
  bv: 1,
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
  this.bE = 0;
  this.f8 = 0;
  this.dU = null;
  this.bp = 0;
  this.cz = null;
  this.f9 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bg);
  while (this.q()) {
    var originalHash = this.dU.fE(this.bE);
    outer.eP(outer.cg, this.dU.dA(this.bE), this.dU.cN(this.bE), originalHash, $m_sc_Hashing$().ca(originalHash), 0);
    this.bE = ((1 + this.bE) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.iU = (function() {
  $m_sc_Iterator$().J.h();
  throw new $c_jl_ClassCastException();
});
$p.h = (function() {
  this.iU();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  fz: 1,
  bO: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.d7 = 0;
  this.ex = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  fO: 1,
  fP: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.d9 = 0;
  this.d8 = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  fQ: 1,
  fR: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.da = 0;
  this.ci = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  fS: 1,
  fT: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.d3 = 0;
  this.gj = null;
  this.bF = 0;
  this.fa = null;
  this.fb = null;
  this.i0 = 0;
  this.m1 = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.i0 = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().nR(this.i0, $m_sr_Statics$().Q(this.m1), (-889275714));
});
$p.qc = (function() {
  if ((!this.q())) {
    $m_sc_Iterator$().J.h();
  }
  this.i0 = this.gj.fE(this.d3);
  this.m1 = this.gj.cN(this.d3);
  this.d3 = (((-1) + this.d3) | 0);
  return this;
});
$p.h = (function() {
  return this.qc();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  fV: 1,
  fw: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bE = 0;
  this.f8 = 0;
  this.dU = null;
  this.bp = 0;
  this.cz = null;
  this.f9 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.qb = (function() {
  if ((!this.q())) {
    $m_sc_Iterator$().J.h();
  }
  var payload = this.dU.nk(this.bE);
  this.bE = ((1 + this.bE) | 0);
  return payload;
});
$p.h = (function() {
  return this.qb();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  fW: 1,
  bO: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bu <= $thiz.an)) {
    $m_sc_Iterator$().J.h();
  }
  $thiz.dc = ((1 + $thiz.dc) | 0);
  var slice = $thiz.i2.cu($thiz.dc);
  while ((slice.a.length === 0)) {
    $thiz.dc = ((1 + $thiz.dc) | 0);
    slice = $thiz.i2.cu($thiz.dc);
  }
  $thiz.fe = $thiz.dY;
  var count = $thiz.m3;
  var idx = $thiz.dc;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.db = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.db;
  switch (x1) {
    case 1: {
      $thiz.aL = slice;
      break;
    }
    case 2: {
      $thiz.aM = slice;
      break;
    }
    case 3: {
      $thiz.bh = slice;
      break;
    }
    case 4: {
      $thiz.c8 = slice;
      break;
    }
    case 5: {
      $thiz.dX = slice;
      break;
    }
    case 6: {
      $thiz.i1 = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.dY = (($thiz.fe + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.db) | 0))))) | 0);
  if (($thiz.dY > $thiz.cF)) {
    $thiz.dY = $thiz.cF;
  }
  if (($thiz.db > 1)) {
    $thiz.ey = (((-1) + (1 << Math.imul(5, $thiz.db))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.an - $thiz.bu) | 0) + $thiz.cF) | 0);
  if ((pos === $thiz.dY)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.db > 1)) {
    var io = ((pos - $thiz.fe) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.ey ^ io));
    $thiz.ey = io;
  }
  $thiz.bu = (($thiz.bu - $thiz.an) | 0);
  var a = $thiz.aL.a.length;
  var b = $thiz.bu;
  $thiz.cE = ((a < b) ? a : b);
  $thiz.an = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aM = $thiz.bh.a[(31 & ((io >>> 10) | 0))];
    $thiz.aL = $thiz.aM.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bh = $thiz.c8.a[(31 & ((io >>> 15) | 0))];
    $thiz.aM = $thiz.bh.a[0];
    $thiz.aL = $thiz.aM.a[0];
  } else if ((xor < 33554432)) {
    $thiz.c8 = $thiz.dX.a[(31 & ((io >>> 20) | 0))];
    $thiz.bh = $thiz.c8.a[0];
    $thiz.aM = $thiz.bh.a[0];
    $thiz.aL = $thiz.aM.a[0];
  } else {
    $thiz.dX = $thiz.i1.a[((io >>> 25) | 0)];
    $thiz.c8 = $thiz.dX.a[0];
    $thiz.bh = $thiz.c8.a[0];
    $thiz.aM = $thiz.bh.a[0];
    $thiz.aL = $thiz.aM.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aM = $thiz.bh.a[(31 & ((io >>> 10) | 0))];
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bh = $thiz.c8.a[(31 & ((io >>> 15) | 0))];
    $thiz.aM = $thiz.bh.a[(31 & ((io >>> 10) | 0))];
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.c8 = $thiz.dX.a[(31 & ((io >>> 20) | 0))];
    $thiz.bh = $thiz.c8.a[(31 & ((io >>> 15) | 0))];
    $thiz.aM = $thiz.bh.a[(31 & ((io >>> 10) | 0))];
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.dX = $thiz.i1.a[((io >>> 25) | 0)];
    $thiz.c8 = $thiz.dX.a[(31 & ((io >>> 20) | 0))];
    $thiz.bh = $thiz.c8.a[(31 & ((io >>> 15) | 0))];
    $thiz.aM = $thiz.bh.a[(31 & ((io >>> 10) | 0))];
    $thiz.aL = $thiz.aM.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.i2 = null;
  this.cF = 0;
  this.m3 = 0;
  this.aL = null;
  this.aM = null;
  this.bh = null;
  this.c8 = null;
  this.dX = null;
  this.i1 = null;
  this.cE = 0;
  this.an = 0;
  this.ey = 0;
  this.bu = 0;
  this.dc = 0;
  this.db = 0;
  this.fe = 0;
  this.dY = 0;
  this.i2 = v;
  this.cF = totalLength;
  this.m3 = sliceCount;
  this.aL = v.f;
  this.cE = this.aL.a.length;
  this.an = 0;
  this.ey = 0;
  this.bu = this.cF;
  this.dc = 0;
  this.db = 1;
  this.fe = 0;
  this.dY = this.cE;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.B = (function() {
  return ((this.bu - this.an) | 0);
});
$p.q = (function() {
  return (this.bu > this.an);
});
$p.h = (function() {
  if ((this.an === this.cE)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aL.a[this.an];
  this.an = ((1 + this.an) | 0);
  return r;
});
$p.dz = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.an - this.bu) | 0) + this.cF) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cF;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cF)) {
      this.an = 0;
      this.bu = 0;
      this.cE = 0;
    } else {
      while ((newpos >= this.dY)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.fe) | 0);
      if ((this.db > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.ey ^ io));
        this.ey = io;
      }
      this.cE = this.aL.a.length;
      this.an = (31 & io);
      this.bu = ((this.an + ((this.cF - newpos) | 0)) | 0);
      if ((this.cE > this.bu)) {
        this.cE = this.bu;
      }
    }
  }
  return this;
});
$p.bJ = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bZ(xs);
  var srcLen = ((this.bu - this.an) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.an === this.cE)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.aL.a.length - this.an) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aL;
      var srcPos = this.an;
      var destPos = ((start + copied) | 0);
      src.y(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().fz(this.aL, this.an, xs, ((start + copied) | 0), count);
    }
    this.an = ((this.an + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  fY: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  A: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.i6 = 0;
  $thiz.m9 = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.i6 = 0;
  this.m9 = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b1 = (function(size) {
  if ((this.i6 < size)) {
    this.qE(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.i8 = null;
  this.mb = null;
  $n_scm_ArraySeq$ = this;
  this.i8 = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.mb = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.pv = (function(it, evidence$2) {
  return this.iQ($m_s_Array$().nd(it, evidence$2));
});
$p.gH = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.aH()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().iQ(x$2$2))));
});
$p.iQ = (function(x) {
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
$p.iA = (function(it, evidence$5) {
  return this.pv(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  gp: 1,
  bB: 1,
  bu: 1,
  bt: 1,
  bv: 1,
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
  this.dp = 0;
  this.cH = null;
  this.fi = 0;
  this.fh = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.iy = (function(nd) {
  return nd.eB;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  gv: 1,
  aV: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dp = 0;
  this.cH = null;
  this.fi = 0;
  this.fh = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.iy = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  gw: 1,
  aV: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dp = 0;
  this.cH = null;
  this.fi = 0;
  this.fh = null;
  this.ib = 0;
  this.mf = null;
  this.mf = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.ib = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.v = (function() {
  return this.ib;
});
$p.iy = (function(nd) {
  this.ib = this.mf.gL(nd.cI);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  gx: 1,
  aV: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.fk = null;
  this.fk = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.p = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.v = (function() {
  return $m_sr_Statics$().Q(this.fk);
});
$p.z = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.fk);
});
$p.aH = (function() {
  return this.fk;
});
$p.bk = (function(len) {
  return this.fk.V.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  gN: 1,
  E: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hE = null;
  this.hE = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.qd = (function() {
  if ((this.A >= this.hE.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hE.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.qd();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  eY: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hF = null;
  this.hF = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.qe = (function() {
  if ((this.A >= this.hF.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hF.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return $bC(this.qe());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  eZ: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hG = null;
  this.hG = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.qf = (function() {
  if ((this.A >= this.hG.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hG.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.qf();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  f0: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hH = null;
  this.hH = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.qg = (function() {
  if ((this.A >= this.hH.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hH.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.qg();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  f1: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hI = null;
  this.hI = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.qh = (function() {
  if ((this.A >= this.hI.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hI.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.qh();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  f2: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hJ = null;
  this.hJ = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.qi = (function() {
  if ((this.A >= this.hJ.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var t = this.hJ.a[this.A];
  var lo = t.k;
  var hi = t.m;
  this.A = ((1 + this.A) | 0);
  return new $c_RTLong(lo, hi);
});
$p.h = (function() {
  return this.qi();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  f3: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hK = null;
  this.hK = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.qj = (function() {
  if ((this.A >= this.hK.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hK.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.qj();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  f4: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.lL = null;
  this.lL = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.qk = (function() {
  if ((this.A >= this.lL.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  this.A = ((1 + this.A) | 0);
});
$p.h = (function() {
  this.qk();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  f5: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bB = null;
  this.A = 0;
  this.bm = 0;
  this.hL = null;
  this.hL = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.ql = (function() {
  if ((this.A >= this.hL.a.length)) {
    $m_sc_Iterator$().J.h();
  }
  var r = this.hL.a[this.A];
  this.A = ((1 + this.A) | 0);
  return r;
});
$p.h = (function() {
  return this.ql();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  f6: 1,
  Z: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bY() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aa)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.i6 = 0;
  this.m9 = 0;
  this.eA = null;
  this.ma = false;
  this.i7 = null;
  this.eA = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.ma = (elementClass === $d_C.l());
  this.i7 = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.mz = (function(elem) {
  var unboxedElem = (this.ma ? $uC(elem) : ((elem === null) ? this.eA.V.z : elem));
  this.i7.push(unboxedElem);
  return this;
});
$p.or = (function(xs) {
  var it = xs.l();
  while (it.q()) {
    this.mz(it.h());
  }
  return this;
});
$p.qE = (function(size) {
});
$p.b5 = (function() {
  var elemRuntimeClass = ((this.eA === $d_V.l()) ? $d_jl_Void.l() : (((this.eA === $d_sr_Null$.l()) || (this.eA === $d_sr_Nothing$.l())) ? $d_O.l() : this.eA));
  return elemRuntimeClass.V.r().w(this.i7);
});
$p.z = (function() {
  return "ArrayBuilder.generic";
});
$p.aY = (function(elems) {
  return this.or(elems);
});
$p.aZ = (function(elem) {
  return this.mz(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  go: 1,
  gn: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.hM = null;
  this.cw = 0;
  this.bC = 0;
  this.me = null;
  this.md = 0;
  this.me = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.md = (mutationCount.N() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.q = (function() {
  $m_scm_MutationTracker$().mT(this.md, (this.me.N() | 0), "mutation occurred during iteration");
  return (this.bC > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  gs: 1,
  bx: 1,
  o: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.X = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.z = (function() {
  return this.X;
});
$p.p = (function(that) {
  return (this === that);
});
$p.v = (function() {
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
  fF() {
    return $dp_toString__T(this.U);
  }
  be() {
    return "JavaScriptException";
  }
  bc() {
    return 1;
  }
  bd(x$1) {
    return ((x$1 === 0) ? this.U : $m_sr_Statics$().e7(x$1));
  }
  bx() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  v() {
    return $m_s_util_hashing_MurmurHash3$().cs(this, (-889275714), false);
  }
  p(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().r(this.U, x$1.U)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cg: 1,
  D: 1,
  C: 1,
  u: 1,
  a: 1,
  J: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.iS() === (void 0)))) {
    $thiz.ig($m_Lcom_raquo_airstream_core_Signal$().nt());
  }
  $thiz.ns(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.iS();
  if ((x === (void 0))) {
    $thiz.ig($m_Lcom_raquo_airstream_core_Signal$().nt());
    var nextValue = $thiz.it();
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
  var isError = nextValue.nm();
  var elem = false;
  elem = false;
  $thiz.cc(false);
  var this$ = $thiz.cn();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.e9(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cq();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fP(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cc(true);
  var x = $thiz.dD();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].N();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().c1(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cc(false);
  var this$ = $thiz.cn();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.iY(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().c1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cq();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gK(nextValue, transaction);
  }
  $thiz.cc(true);
  var x = $thiz.dD();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].N();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cc(false);
  var this$ = $thiz.cn();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.fM(nextError);
  }
  var this$$1 = $thiz.cq();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fL(nextError, transaction);
  }
  $thiz.cc(true);
  var x = $thiz.dD();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].N();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.b())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.n();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bb(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.fJ();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.l();
    var different = false;
    while (it.q()) {
      var next = it.h();
      if (seen.gw(f.d(next))) {
        builder.aZ(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b5() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aH = (function() {
  return $d_Z.l();
});
$p.bk = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aH = (function() {
  return $d_B.l();
});
$p.bk = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aH = (function() {
  return $d_C.l();
});
$p.bk = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aH = (function() {
  return $d_D.l();
});
$p.bk = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aH = (function() {
  return $d_F.l();
});
$p.bk = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aH = (function() {
  return $d_I.l();
});
$p.bk = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aH = (function() {
  return $d_J.l();
});
$p.bk = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.cK = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.z = (function() {
  return this.cK;
});
$p.p = (function(that) {
  return (this === that);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aH = (function() {
  return $d_S.l();
});
$p.bk = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.X = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aH = (function() {
  return $d_V.l();
});
$p.bk = (function(len) {
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
$p.bL = (function() {
  return $m_sc_View$();
});
$p.z = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bl = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aI() === that.aI())) {
      try {
        return $thiz.qP(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.aN)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.cK = null;
  this.cK = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aH = (function() {
  return $d_O.l();
});
$p.bk = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  gO: 1,
  ax: 1,
  aw: 1,
  T: 1,
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
  this.X = null;
  this.X = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  gQ: 1,
  gP: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  gS: 1,
  gR: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  gU: 1,
  gT: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  gW: 1,
  gV: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  gY: 1,
  gX: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  h0: 1,
  gZ: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  h2: 1,
  h1: 1,
  a4: 1,
  T: 1,
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
  this.cK = null;
  this.cK = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aH = (function() {
  return $d_sr_Nothing$.l();
});
$p.bk = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  h3: 1,
  ax: 1,
  aw: 1,
  T: 1,
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
  this.cK = null;
  this.cK = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aH = (function() {
  return $d_sr_Null$.l();
});
$p.bk = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  h4: 1,
  ax: 1,
  aw: 1,
  T: 1,
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
  this.cK = null;
  this.cK = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aH = (function() {
  return $d_O.l();
});
$p.bk = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  h5: 1,
  ax: 1,
  aw: 1,
  T: 1,
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
  this.X = null;
  this.X = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  h7: 1,
  h6: 1,
  a4: 1,
  T: 1,
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
  this.X = null;
  this.X = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  h9: 1,
  h8: 1,
  a4: 1,
  T: 1,
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
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.iZ(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.iZ(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.jn = null;
  this.jm = false;
  this.jo = null;
  this.jk = null;
  this.jl = null;
  this.jq = false;
  this.jp = 0;
  this.fZ = 0;
  this.fY = null;
  this.jn = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.fY = makeConfig.oI(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.fZ)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.dC = (function() {
  return this.jn;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eI = (function() {
  return this.jm;
});
$p.dD = (function() {
  return this.jo;
});
$p.cc = (function(x$1) {
  this.jm = x$1;
});
$p.eK = (function(x$1) {
  this.jo = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.fK = (function(observer) {
});
$p.cn = (function() {
  return this.jk;
});
$p.cq = (function() {
  return this.jl;
});
$p.fU = (function() {
  return this.jq;
});
$p.ee = (function(x$1) {
  this.jq = x$1;
});
$p.fx = (function(x$0) {
  this.jk = x$0;
});
$p.fy = (function(x$0) {
  this.jl = x$0;
});
$p.eb = (function() {
  return this.jp;
});
$p.fQ = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.fN = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.fO = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.fI = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dE = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  cB: 1,
  ad: 1,
  a2: 1,
  al: 1,
  am: 1,
  aA: 1,
  ay: 1,
  an: 1,
  aC: 1,
  cx: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.k3 = null;
  this.k2 = false;
  this.k4 = null;
  this.h3 = 0;
  this.k0 = null;
  this.k1 = null;
  this.k7 = false;
  this.h4 = null;
  this.k5 = null;
  this.k6 = 0;
  this.k5 = parentDisplayName;
  this.k3 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.h3 = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.h4 = (void 0);
  this.k6 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.dC = (function() {
  return this.k3;
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eI = (function() {
  return this.k2;
});
$p.dD = (function() {
  return this.k4;
});
$p.cc = (function(x$1) {
  this.k2 = x$1;
});
$p.eK = (function(x$1) {
  this.k4 = x$1;
});
$p.fO = (function() {
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ie = (function() {
  return this.h3;
});
$p.ig = (function(x$1) {
  this.h3 = x$1;
});
$p.fN = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.fK = (function(observer) {
  observer.e9($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cn = (function() {
  return this.k0;
});
$p.cq = (function() {
  return this.k1;
});
$p.fU = (function() {
  return this.k7;
});
$p.ee = (function(x$1) {
  this.k7 = x$1;
});
$p.fx = (function(x$0) {
  this.k0 = x$0;
});
$p.fy = (function(x$0) {
  this.k1 = x$0;
});
$p.iS = (function() {
  return this.h4;
});
$p.ns = (function(x$1) {
  this.h4 = x$1;
});
$p.j5 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eb = (function() {
  return this.k6;
});
$p.it = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fQ = (function() {
});
$p.dy = (function() {
  return (this.k5.N() + ".signal");
});
$p.fI = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.dE = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  cQ: 1,
  ad: 1,
  a2: 1,
  al: 1,
  am: 1,
  aB: 1,
  b4: 1,
  an: 1,
  b5: 1,
  cM: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.gy($thiz)) {
        return $thiz.eM(o);
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
  this.lV = null;
  this.lV = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.l = (function() {
  return this.lV.N();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  fr: 1,
  aq: 1,
  i: 1,
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
  this.gi = null;
  this.lW = null;
  this.gi = underlying;
  this.lW = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.l = (function() {
  return new $c_sc_Iterator$$anon$8(this.gi.l(), this.lW);
});
$p.B = (function() {
  return ((this.gi.B() === 0) ? 0 : (-1));
});
$p.b = (function() {
  return this.gi.b();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  fs: 1,
  aq: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.gV = ($thiz.cP !== null);
  $thiz.g0 = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.cP);
  if ($thiz.gV) {
    var newParentLastUpdateId = $thiz.cP.ie();
    if ((newParentLastUpdateId !== $thiz.g0)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.it(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.g0 = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.gV) {
    $thiz.g0 = $thiz.cP.ie();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.cP, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.cP, $thiz);
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
$p.p = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bl = (function() {
  return "Set";
});
$p.z = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.qP = (function(that) {
  return this.eF(that);
});
$p.d = (function(v1) {
  return this.ba(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aI() === o.aI())) {
      try {
        return $thiz.eF(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().r(x2.c0(kv$2$2.aT(), $m_sc_Map$().lT), kv$2$2.aG())))(o)));
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
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.jv = null;
  this.ju = false;
  this.jw = null;
  this.jr = null;
  this.jt = null;
  this.jy = false;
  this.gS = null;
  this.js = null;
  this.jx = 0;
  this.gS = parent;
  this.js = fn;
  this.jv = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jx = ((1 + parent.eb()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.dC = (function() {
  return this.jv;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eI = (function() {
  return this.ju;
});
$p.dD = (function() {
  return this.jw;
});
$p.cc = (function(x$1) {
  this.ju = x$1;
});
$p.eK = (function(x$1) {
  this.jw = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.fK = (function(observer) {
});
$p.cn = (function() {
  return this.jr;
});
$p.cq = (function() {
  return this.jt;
});
$p.fU = (function() {
  return this.jy;
});
$p.ee = (function(x$1) {
  this.jy = x$1;
});
$p.fx = (function(x$0) {
  this.jr = x$0;
});
$p.fy = (function(x$0) {
  this.jt = x$0;
});
$p.fQ = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.gS);
});
$p.fN = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fO = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fP = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eb = (function() {
  return this.jx;
});
$p.gK = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.js.d(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().ck(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.b())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.O(), transaction);
    }
  })));
});
$p.fL = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.iZ = (function() {
  return this.gS;
});
$p.fI = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dE = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  cC: 1,
  ad: 1,
  a2: 1,
  al: 1,
  am: 1,
  aA: 1,
  ay: 1,
  an: 1,
  aC: 1,
  as: 1,
  aY: 1,
  aX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.jC = null;
  this.jB = false;
  this.jD = null;
  this.gT = 0;
  this.jz = null;
  this.jA = null;
  this.jF = false;
  this.gU = null;
  this.gV = false;
  this.g0 = 0;
  this.cP = null;
  this.gW = null;
  this.gX = null;
  this.jE = 0;
  this.cP = parent;
  this.gW = project;
  this.gX = recover;
  this.jC = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.gT = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.gU = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.jE = ((1 + parent.eb()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.dC = (function() {
  return this.jC;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eI = (function() {
  return this.jB;
});
$p.dD = (function() {
  return this.jD;
});
$p.cc = (function(x$1) {
  this.jB = x$1;
});
$p.eK = (function(x$1) {
  this.jD = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.ie = (function() {
  return this.gT;
});
$p.ig = (function(x$1) {
  this.gT = x$1;
});
$p.fK = (function(observer) {
  observer.e9($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cn = (function() {
  return this.jz;
});
$p.cq = (function() {
  return this.jA;
});
$p.fU = (function() {
  return this.jF;
});
$p.ee = (function(x$1) {
  this.jF = x$1;
});
$p.fx = (function(x$0) {
  this.jz = x$0;
});
$p.fy = (function(x$0) {
  this.jA = x$0;
});
$p.iS = (function() {
  return this.gU;
});
$p.ns = (function(x$1) {
  this.gU = x$1;
});
$p.j5 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gK = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fL = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.fQ = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.fN = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.fO = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eb = (function() {
  return this.jE;
});
$p.fP = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.gX;
    if (this$2.b()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.O();
      try {
        var $x_1 = new $c_s_util_Success(x0.bI(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().ck(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
        }
      }
      $x_1.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.b())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.O(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.iR(this.gW), transaction);
  })));
});
$p.it = (function() {
  var originalValue = this.cP.j5().iR(this.gW);
  return originalValue.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.gX;
    if (this$2.b()) {
      return originalValue;
    } else {
      var x0 = this$2.O();
      try {
        var $x_1 = new $c_s_util_Success(x0.bI(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().ck(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
        }
      }
      return $x_1.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.b() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.O())));
          return (this$7.b() ? originalValue : this$7.O());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.fI = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.dE = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  cD: 1,
  ad: 1,
  a2: 1,
  al: 1,
  am: 1,
  aB: 1,
  b4: 1,
  an: 1,
  b5: 1,
  as: 1,
  cl: 1,
  cm: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapStream(parent, project, recover) {
  this.jJ = null;
  this.jI = false;
  this.jK = null;
  this.jG = null;
  this.jH = null;
  this.jO = false;
  this.gY = null;
  this.jL = null;
  this.jM = null;
  this.jN = 0;
  this.gY = parent;
  this.jL = project;
  this.jM = recover;
  this.jJ = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.jN = ((1 + parent.eb()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.dC = (function() {
  return this.jJ;
});
$p.dy = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.z = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eI = (function() {
  return this.jI;
});
$p.dD = (function() {
  return this.jK;
});
$p.cc = (function(x$1) {
  this.jI = x$1;
});
$p.eK = (function(x$1) {
  this.jK = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.v = (function() {
  return $systemIdentityHashCode(this);
});
$p.fK = (function(observer) {
});
$p.cn = (function() {
  return this.jG;
});
$p.cq = (function() {
  return this.jH;
});
$p.fU = (function() {
  return this.jO;
});
$p.ee = (function(x$1) {
  this.jO = x$1;
});
$p.fx = (function(x$0) {
  this.jG = x$0;
});
$p.fy = (function(x$0) {
  this.jH = x$0;
});
$p.fQ = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.gY);
});
$p.fN = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fO = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fP = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.iZ = (function() {
  return this.gY;
});
$p.eb = (function() {
  return this.jN;
});
$p.gK = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.jL.d(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().ck(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
    }
  }
  $x_1.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.fL(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, _$2, transaction);
  })));
});
$p.fL = (function(nextError, transaction) {
  var this$1 = this.jM;
  if (this$1.b()) {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
  } else {
    var x0 = this$1.O();
    try {
      var $x_1 = new $c_s_util_Success(x0.bI(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => null))));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($m_s_util_control_NonFatal$().ck(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.U : e$2);
      }
    }
    $x_1.bK(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((tryError) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError), transaction);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
      if ((nextValue === null)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
      } else if ((!nextValue.b())) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.O(), transaction);
      }
    })));
  }
});
$p.fI = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.dE = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapStream, "com.raquo.airstream.misc.MapStream", ({
  cE: 1,
  ad: 1,
  a2: 1,
  al: 1,
  am: 1,
  aA: 1,
  ay: 1,
  an: 1,
  aC: 1,
  as: 1,
  aY: 1,
  aX: 1
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
$p.gy = (function(that) {
  return true;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().nL(this);
});
$p.z = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cm = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.iP = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bb = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eM = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cb = (function(x) {
  return this.iP((x | 0));
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
$p.bl = (function() {
  return "SeqView";
});
$p.cm = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bb = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ar)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.kv = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.nY = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
}
function $f_Lcom_raquo_laminar_api_Laminar__inContext__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, makeModifier) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    makeModifier.d(element).bW(element);
  })), $thiz.kh);
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
$p.p = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().q5(this);
});
$p.bl = (function() {
  return "Map";
});
$p.z = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.fD = (function(coll) {
  return this.nr().ax(coll);
});
$p.bI = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.e5 = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cb = (function(key) {
  return this.ba(key);
});
$p.dt = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.dS = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.dS = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.x = (function(idx) {
  return this.dS.x(idx);
});
$p.u = (function() {
  return this.dS.u();
});
$p.l = (function() {
  return this.dS.l();
});
$p.B = (function() {
  return this.dS.B();
});
$p.b = (function() {
  return this.dS.b();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bA: 1,
  aJ: 1,
  aq: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1,
  aM: 1,
  l: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.kE = null;
  this.kF = false;
  this.kw = null;
  this.kx = false;
  this.ky = null;
  this.kz = false;
  this.kA = null;
  this.kB = false;
  this.kC = null;
  this.kD = false;
  this.kk = null;
  this.kl = false;
  this.kr = null;
  this.ks = false;
  this.kI = null;
  this.kJ = false;
  this.km = null;
  this.kn = false;
  this.kU = null;
  this.kV = false;
  this.kW = null;
  this.kX = false;
  this.l2 = null;
  this.l3 = false;
  this.kM = null;
  this.kN = false;
  this.kt = null;
  this.ku = false;
  this.kY = null;
  this.kZ = false;
  this.kG = null;
  this.kH = false;
  this.ko = null;
  this.kp = false;
  this.l6 = null;
  this.l7 = false;
  this.kK = null;
  this.kL = false;
  this.kQ = null;
  this.kR = false;
  this.kO = null;
  this.kP = false;
  this.kS = null;
  this.kT = false;
  this.kq = null;
  this.a0 = null;
  this.h7 = null;
  this.kh = null;
  this.ki = null;
  this.kj = false;
  this.l0 = null;
  this.l1 = false;
  this.kv = null;
  this.l4 = null;
  this.l5 = false;
  this.nY = null;
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
$p.pK = (function() {
  if ((!this.kF)) {
    this.kE = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.kF = true;
  }
  return this.kE;
});
$p.ps = (function() {
  if ((!this.kx)) {
    this.kw = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.kx = true;
  }
  return this.kw;
});
$p.pI = (function() {
  if ((!this.kz)) {
    this.ky = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.kz = true;
  }
  return this.ky;
});
$p.iJ = (function() {
  if ((!this.kB)) {
    this.kA = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.kB = true;
  }
  return this.kA;
});
$p.eG = (function() {
  if ((!this.kD)) {
    this.kC = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.kD = true;
  }
  return this.kC;
});
$p.op = (function() {
  if ((!this.kl)) {
    this.kk = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.kl = true;
  }
  return this.kk;
});
$p.gz = (function() {
  if ((!this.ks)) {
    this.kr = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.ks = true;
  }
  return this.kr;
});
$p.gE = (function() {
  if ((!this.kJ)) {
    this.kI = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.kJ = true;
  }
  return this.kI;
});
$p.oV = (function() {
  if ((!this.kn)) {
    this.km = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.kn = true;
  }
  return this.km;
});
$p.cr = (function() {
  if ((!this.kV)) {
    this.kU = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.kV = true;
  }
  return this.kU;
});
$p.j1 = (function() {
  if ((!this.kX)) {
    this.kW = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.kX = true;
  }
  return this.kW;
});
$p.qZ = (function() {
  if ((!this.l3)) {
    this.l2 = new $c_Lcom_raquo_laminar_tags_HtmlTag("ul", false);
    this.l3 = true;
  }
  return this.l2;
});
$p.gG = (function() {
  if ((!this.kN)) {
    this.kM = new $c_Lcom_raquo_laminar_tags_HtmlTag("li", false);
    this.kN = true;
  }
  return this.kM;
});
$p.bw = (function() {
  if ((!this.ku)) {
    this.kt = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.ku = true;
  }
  return this.kt;
});
$p.j4 = (function() {
  if ((!this.kZ)) {
    this.kY = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.kZ = true;
  }
  return this.kY;
});
$p.pL = (function() {
  if ((!this.kH)) {
    this.kG = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().el);
    this.kH = true;
  }
  return this.kG;
});
$p.oW = (function() {
  if ((!this.kp)) {
    this.ko = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().l8);
    this.kp = true;
  }
  return this.ko;
});
$p.nV = (function() {
  if ((!this.l7)) {
    this.l6 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().el);
    this.l7 = true;
  }
  return this.l6;
});
$p.iM = (function() {
  if ((!this.kL)) {
    this.kK = new $c_Lcom_raquo_laminar_keys_HtmlProp("id", $m_Lcom_raquo_laminar_codecs_package$().el);
    this.kL = true;
  }
  return this.kK;
});
$p.gJ = (function() {
  if ((!this.kR)) {
    this.kQ = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.kR = true;
  }
  return this.kQ;
});
$p.qn = (function() {
  if ((!this.kP)) {
    this.kO = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.kP = true;
  }
  return this.kO;
});
$p.iX = (function() {
  if ((!this.kT)) {
    this.kS = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.kT = true;
  }
  return this.kS;
});
$p.oo = (function() {
  if ((!this.kj)) {
    this.ki = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.kj = true;
  }
  return this.ki;
});
$p.qQ = (function() {
  if ((!this.l1)) {
    this.l0 = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.l1 = true;
  }
  return this.l0;
});
$p.r3 = (function() {
  if ((!this.l5)) {
    this.l4 = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.l5 = true;
  }
  return this.l4;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  d6: 1,
  dg: 1,
  d9: 1,
  de: 1,
  ba: 1,
  df: 1,
  db: 1,
  d4: 1,
  cX: 1,
  d3: 1,
  b8: 1,
  bc: 1,
  b7: 1,
  cZ: 1
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
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.dS = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.l = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fa: 1,
  bA: 1,
  aJ: 1,
  aq: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1,
  aM: 1,
  l: 1,
  bw: 1,
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
  this.i5 = null;
  this.m8 = null;
  this.i5 = underlying;
  this.m8 = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.x = (function(n) {
  return this.i5.x(n);
});
$p.u = (function() {
  return this.i5.aw;
});
$p.bY = (function() {
  return "ArrayBufferView";
});
$p.l = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.m8);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  gm: 1,
  eV: 1,
  aJ: 1,
  aq: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aa: 1,
  a: 1,
  aM: 1,
  l: 1,
  bw: 1,
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
$p.nr = (function() {
  return $m_sci_Map$();
});
$p.bL = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.u() === that.u()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.u();
      var equal = (length === o.u());
      if (equal) {
        var index = 0;
        var a = $thiz.gx();
        var b = o.gx();
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
          equal = $m_sr_BoxesRunTime$().r($thiz.x(index), o.x(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.l().dz(index);
          var thatIt = o.l().dz(index);
          while ((equal && thisIt.q())) {
            equal = $m_sr_BoxesRunTime$().r(thisIt.h(), thatIt.h());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.y)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.y)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g1)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g2)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g3)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g4)));
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
$p.aI = (function() {
  return 0;
});
$p.B = (function() {
  return 0;
});
$p.b = (function() {
  return true;
});
$p.im = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.ba = (function(key) {
  return false;
});
$p.c0 = (function(key, default$1) {
  return default$1.N();
});
$p.l = (function() {
  return $m_sc_Iterator$().J;
});
$p.dG = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.d = (function(key) {
  this.im(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  fN: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
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
  this.ch = null;
  this.dV = null;
  this.ch = key1;
  this.dV = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aI = (function() {
  return 1;
});
$p.B = (function() {
  return 1;
});
$p.b = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().r(key, this.ch)) {
    return this.dV;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ba = (function(key) {
  return $m_sr_BoxesRunTime$().r(key, this.ch);
});
$p.c0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().r(key, this.ch) ? this.dV : default$1.N());
});
$p.l = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.ch, this.dV));
});
$p.ec = (function(key, value) {
  return ($m_sr_BoxesRunTime$().r(key, this.ch) ? new $c_sci_Map$Map1(this.ch, value) : new $c_sci_Map$Map2(this.ch, this.dV, key, value));
});
$p.eF = (function(p) {
  return (!(!p.d(new $c_T2(this.ch, this.dV))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().ce(this.ch, this.dV);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ds;
  h = $m_s_util_hashing_MurmurHash3$().e(h, a);
  h = $m_s_util_hashing_MurmurHash3$().e(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cO(h, c);
  return $m_s_util_hashing_MurmurHash3$().D(h, 1);
});
$p.dG = (function(key, value) {
  return this.ec(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  bT: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.c2 = null;
  this.d5 = null;
  this.c3 = null;
  this.d6 = null;
  this.c2 = key1;
  this.d5 = value1;
  this.c3 = key2;
  this.d6 = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aI = (function() {
  return 2;
});
$p.B = (function() {
  return 2;
});
$p.b = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().r(key, this.c2)) {
    return this.d5;
  } else if ($m_sr_BoxesRunTime$().r(key, this.c3)) {
    return this.d6;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ba = (function(key) {
  return ($m_sr_BoxesRunTime$().r(key, this.c2) || $m_sr_BoxesRunTime$().r(key, this.c3));
});
$p.c0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().r(key, this.c2) ? this.d5 : ($m_sr_BoxesRunTime$().r(key, this.c3) ? this.d6 : default$1.N()));
});
$p.l = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.ec = (function(key, value) {
  return ($m_sr_BoxesRunTime$().r(key, this.c2) ? new $c_sci_Map$Map2(this.c2, value, this.c3, this.d6) : ($m_sr_BoxesRunTime$().r(key, this.c3) ? new $c_sci_Map$Map2(this.c2, this.d5, this.c3, value) : new $c_sci_Map$Map3(this.c2, this.d5, this.c3, this.d6, key, value)));
});
$p.eF = (function(p) {
  return ((!(!p.d(new $c_T2(this.c2, this.d5)))) && (!(!p.d(new $c_T2(this.c3, this.d6)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().ce(this.c2, this.d5);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.c3, this.d6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ds;
  h = $m_s_util_hashing_MurmurHash3$().e(h, a);
  h = $m_s_util_hashing_MurmurHash3$().e(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cO(h, c);
  return $m_s_util_hashing_MurmurHash3$().D(h, 2);
});
$p.dG = (function(key, value) {
  return this.ec(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  bU: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.bR = null;
  this.cA = null;
  this.bS = null;
  this.cB = null;
  this.bT = null;
  this.cC = null;
  this.bR = key1;
  this.cA = value1;
  this.bS = key2;
  this.cB = value2;
  this.bT = key3;
  this.cC = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aI = (function() {
  return 3;
});
$p.B = (function() {
  return 3;
});
$p.b = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().r(key, this.bR)) {
    return this.cA;
  } else if ($m_sr_BoxesRunTime$().r(key, this.bS)) {
    return this.cB;
  } else if ($m_sr_BoxesRunTime$().r(key, this.bT)) {
    return this.cC;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ba = (function(key) {
  return (($m_sr_BoxesRunTime$().r(key, this.bR) || $m_sr_BoxesRunTime$().r(key, this.bS)) || $m_sr_BoxesRunTime$().r(key, this.bT));
});
$p.c0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().r(key, this.bR) ? this.cA : ($m_sr_BoxesRunTime$().r(key, this.bS) ? this.cB : ($m_sr_BoxesRunTime$().r(key, this.bT) ? this.cC : default$1.N())));
});
$p.l = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.ec = (function(key, value) {
  return ($m_sr_BoxesRunTime$().r(key, this.bR) ? new $c_sci_Map$Map3(this.bR, value, this.bS, this.cB, this.bT, this.cC) : ($m_sr_BoxesRunTime$().r(key, this.bS) ? new $c_sci_Map$Map3(this.bR, this.cA, this.bS, value, this.bT, this.cC) : ($m_sr_BoxesRunTime$().r(key, this.bT) ? new $c_sci_Map$Map3(this.bR, this.cA, this.bS, this.cB, this.bT, value) : new $c_sci_Map$Map4(this.bR, this.cA, this.bS, this.cB, this.bT, this.cC, key, value))));
});
$p.eF = (function(p) {
  return (((!(!p.d(new $c_T2(this.bR, this.cA)))) && (!(!p.d(new $c_T2(this.bS, this.cB))))) && (!(!p.d(new $c_T2(this.bT, this.cC)))));
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().ce(this.bR, this.cA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.bS, this.cB);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.bT, this.cC);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ds;
  h = $m_s_util_hashing_MurmurHash3$().e(h, a);
  h = $m_s_util_hashing_MurmurHash3$().e(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cO(h, c);
  return $m_s_util_hashing_MurmurHash3$().D(h, 3);
});
$p.dG = (function(key, value) {
  return this.ec(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  bV: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bq = null;
  this.c4 = null;
  this.br = null;
  this.c5 = null;
  this.bs = null;
  this.c6 = null;
  this.bt = null;
  this.c7 = null;
  this.bq = key1;
  this.c4 = value1;
  this.br = key2;
  this.c5 = value2;
  this.bs = key3;
  this.c6 = value3;
  this.bt = key4;
  this.c7 = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aI = (function() {
  return 4;
});
$p.B = (function() {
  return 4;
});
$p.b = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().r(key, this.bq)) {
    return this.c4;
  } else if ($m_sr_BoxesRunTime$().r(key, this.br)) {
    return this.c5;
  } else if ($m_sr_BoxesRunTime$().r(key, this.bs)) {
    return this.c6;
  } else if ($m_sr_BoxesRunTime$().r(key, this.bt)) {
    return this.c7;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ba = (function(key) {
  return ((($m_sr_BoxesRunTime$().r(key, this.bq) || $m_sr_BoxesRunTime$().r(key, this.br)) || $m_sr_BoxesRunTime$().r(key, this.bs)) || $m_sr_BoxesRunTime$().r(key, this.bt));
});
$p.c0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().r(key, this.bq) ? this.c4 : ($m_sr_BoxesRunTime$().r(key, this.br) ? this.c5 : ($m_sr_BoxesRunTime$().r(key, this.bs) ? this.c6 : ($m_sr_BoxesRunTime$().r(key, this.bt) ? this.c7 : default$1.N()))));
});
$p.l = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.ec = (function(key, value) {
  return ($m_sr_BoxesRunTime$().r(key, this.bq) ? new $c_sci_Map$Map4(this.bq, value, this.br, this.c5, this.bs, this.c6, this.bt, this.c7) : ($m_sr_BoxesRunTime$().r(key, this.br) ? new $c_sci_Map$Map4(this.bq, this.c4, this.br, value, this.bs, this.c6, this.bt, this.c7) : ($m_sr_BoxesRunTime$().r(key, this.bs) ? new $c_sci_Map$Map4(this.bq, this.c4, this.br, this.c5, this.bs, value, this.bt, this.c7) : ($m_sr_BoxesRunTime$().r(key, this.bt) ? new $c_sci_Map$Map4(this.bq, this.c4, this.br, this.c5, this.bs, this.c6, this.bt, value) : $m_sci_HashMap$().hU.eQ(this.bq, this.c4).eQ(this.br, this.c5).eQ(this.bs, this.c6).eQ(this.bt, this.c7).eQ(key, value)))));
});
$p.eF = (function(p) {
  return ((((!(!p.d(new $c_T2(this.bq, this.c4)))) && (!(!p.d(new $c_T2(this.br, this.c5))))) && (!(!p.d(new $c_T2(this.bs, this.c6))))) && (!(!p.d(new $c_T2(this.bt, this.c7)))));
});
$p.oU = (function(builder) {
  return builder.e3(this.bq, this.c4).e3(this.br, this.c5).e3(this.bs, this.c6).e3(this.bt, this.c7);
});
$p.v = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().ce(this.bq, this.c4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.br, this.c5);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.bs, this.c6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ce(this.bt, this.c7);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ds;
  h = $m_s_util_hashing_MurmurHash3$().e(h, a);
  h = $m_s_util_hashing_MurmurHash3$().e(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cO(h, c);
  return $m_s_util_hashing_MurmurHash3$().D(h, 4);
});
$p.dG = (function(key, value) {
  return this.ec(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  bW: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fA)));
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
$p.b5 = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.hV)) {
    if ($thiz.gk) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.gk = true;
    try {
      var res = $thiz.hW.N();
    } finally {
      $thiz.gk = false;
    }
    $thiz.bQ = true;
    $thiz.hW = null;
    $thiz.hX = res;
    $thiz.hV = true;
  }
  return $thiz.hX;
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.s = (("" + b.s) + start);
  if ((!$thiz.bQ)) {
    b.s = (b.s + "<not computed>");
  } else if ((!$thiz.b())) {
    var obj = $thiz.F().t();
    b.s = (("" + b.s) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.F().aV();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bQ) || (elem.F() !== elem$2.F())))) {
      elem = elem$2;
      if ((elem$2.bQ && (!elem$2.b()))) {
        elem$2 = elem$2.F().aV();
        while ((((elem !== elem$2) && (elem$2.bQ && (!elem$2.b()))) && (elem.F() !== elem$2.F()))) {
          b.s = (("" + b.s) + sep);
          var obj$1 = elem.F().t();
          b.s = (("" + b.s) + obj$1);
          elem = elem.F().aV();
          elem$2 = elem$2.F().aV();
          if ((elem$2.bQ && (!elem$2.b()))) {
            elem$2 = elem$2.F().aV();
          }
        }
      }
    }
    if ((!(elem$2.bQ && (!elem$2.b())))) {
      while ((elem !== elem$2)) {
        b.s = (("" + b.s) + sep);
        var obj$2 = elem.F().t();
        b.s = (("" + b.s) + obj$2);
        elem = elem.F().aV();
      }
      if ((!elem.bQ)) {
        b.s = (("" + b.s) + sep);
        b.s = (b.s + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.F() === b$1.F())))) {
          runner = runner.F().aV();
          elem$2 = elem$2.F().aV();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.F() === b$2.F())) && (k > 0))) {
        b.s = (("" + b.s) + sep);
        var obj$3 = elem.F().t();
        b.s = (("" + b.s) + obj$3);
        elem = elem.F().aV();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.F() === b$3.F())))) {
          b.s = (("" + b.s) + sep);
          var obj$4 = elem.F().t();
          b.s = (("" + b.s) + obj$4);
          elem = elem.F().aV();
        } else {
          break;
        }
      }
      b.s = (("" + b.s) + sep);
      b.s = (b.s + "<cycle>");
    }
  }
  b.s = (("" + b.s) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.hX = null;
  this.hW = null;
  this.bQ = false;
  this.gk = false;
  this.hV = false;
  this.hW = lazyState;
  this.bQ = false;
  this.gk = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bl = (function() {
  return "LinearSeq";
});
$p.u = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bb = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.iP = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.x = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eM = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.F = (function() {
  return ((!this.hV) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.hX);
});
$p.b = (function() {
  return (this.F() === $m_sci_LazyList$State$Empty$());
});
$p.B = (function() {
  return ((this.bQ && (this.F() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.t = (function() {
  return this.F().t();
});
$p.nb = (function() {
  var these = this;
  var those = this;
  if ((!these.b())) {
    these = these.F().aV();
  }
  while ((those !== these)) {
    if (these.b()) {
      return this;
    }
    these = these.F().aV();
    if (these.b()) {
      return this;
    }
    these = these.F().aV();
    if ((these === those)) {
      return this;
    }
    those = those.F().aV();
  }
  return this;
});
$p.l = (function() {
  return ((this.bQ && (this.F() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().J : new $c_sci_LazyList$LazyIterator(this));
});
$p.co = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.b())) {
      f.d(_$this.F().t());
      _$this = _$this.F().aV();
      continue;
    }
    break;
  }
});
$p.bY = (function() {
  return "LazyList";
});
$p.pj = (function(n) {
  return ((n <= 0) ? this : ((this.bQ && (this.F() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().hY : $m_sci_LazyList$().qH(this, n)));
});
$p.dt = (function(sb, start, sep, end) {
  this.nb();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aS, start, sep, end);
  return sb;
});
$p.z = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").s;
});
$p.d = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cb = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.n1 = (function(n) {
  return this.pj(n);
});
$p.n = (function() {
  return this.F().aV();
});
$p.bL = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  bR: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ar: 1,
  aK: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gi)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.gr = null;
  this.gr = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cm = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gy = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eM = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.gx = (function() {
  return $m_sci_IndexedSeqDefaults$().lX;
});
$p.l = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.v = (function() {
  return $m_s_util_hashing_MurmurHash3$().nL(this);
});
$p.z = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.b = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bI = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.fJ = (function() {
  return $m_sjsr_WrappedVarArgs$().b0();
});
$p.co = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.bJ = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.dt = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eO = (function() {
  return $m_sci_Nil$().eL(this);
});
$p.dB = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.u = (function() {
  return (this.gr.length | 0);
});
$p.x = (function(idx) {
  return this.gr[idx];
});
$p.bY = (function() {
  return "WrappedVarArgs";
});
$p.fC = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().iE(coll);
});
$p.cb = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.d = (function(v1) {
  return this.x((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  ch: 1,
  y: 1,
  v: 1,
  t: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  w: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bg = null;
  this.bg = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.nr = (function() {
  return $m_sci_HashMap$();
});
$p.B = (function() {
  return this.bg.aK;
});
$p.aI = (function() {
  return this.bg.aK;
});
$p.b = (function() {
  return (this.bg.aK === 0);
});
$p.l = (function() {
  return (this.b() ? $m_sc_Iterator$().J : new $c_sci_MapKeyValueTupleIterator(this.bg));
});
$p.ba = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Q(key);
  var keyHash = $m_sc_Hashing$().ca(keyUnimprovedHash);
  return this.bg.is(key, keyUnimprovedHash, keyHash, 0);
});
$p.d = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().Q(key);
  var keyHash = $m_sc_Hashing$().ca(keyUnimprovedHash);
  return this.bg.ik(key, keyUnimprovedHash, keyHash, 0);
});
$p.c0 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().Q(key);
  var keyHash = $m_sc_Hashing$().ca(keyUnimprovedHash);
  return this.bg.iG(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.eQ = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().Q(key);
  var newRootNode = this.bg.nT(key, value, keyUnimprovedHash, $m_sc_Hashing$().ca(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bg) ? this : new $c_sci_HashMap(newRootNode));
});
$p.e5 = (function(f) {
  this.bg.e5(f);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bg;
      var x$2 = that.bg;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.v = (function() {
  if (this.b()) {
    return $m_s_util_hashing_MurmurHash3$().id;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bg);
    return $m_s_util_hashing_MurmurHash3$().j6(hashIterator, $m_s_util_hashing_MurmurHash3$().ds);
  }
});
$p.bY = (function() {
  return "HashMap";
});
$p.dG = (function(key, value) {
  return this.eQ(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  bQ: 1,
  ai: 1,
  ae: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a5: 1,
  ag: 1,
  j: 1,
  e: 1,
  af: 1,
  d: 1,
  a6: 1,
  t: 1,
  aj: 1,
  g5: 1,
  fo: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g6)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gg)));
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
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.aQ.a.length) | 0));
  var x1 = $thiz.aQ.a[idx];
  if ((x1 === null)) {
    $thiz.aQ.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.cI <= hash))) {
      if (((n.cI === hash) && $m_sr_BoxesRunTime$().r(elem, n.eB))) {
        return false;
      }
      prev = n;
      n = n.aR;
    }
    if ((prev === null)) {
      $thiz.aQ.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.aR = new $c_scm_HashSet$Node(elem, hash, prev.aR);
    }
  }
  $thiz.dn = ((1 + $thiz.dn) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aQ.a.length;
  $thiz.ia = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dn === 0)) {
    $thiz.aQ = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aQ = $m_ju_Arrays$().Y($thiz.aQ, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aQ.a[i];
        if ((old !== null)) {
          preLow.aR = null;
          preHigh.aR = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aR;
            if (((n.cI & oldlen) === 0)) {
              lastLow.aR = n;
              lastLow = n;
            } else {
              lastHigh.aR = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.aR = null;
          if ((old !== preLow.aR)) {
            $thiz.aQ.a[i] = preLow.aR;
          }
          if ((preHigh.aR !== null)) {
            $thiz.aQ.a[((i + oldlen) | 0)] = preHigh.aR;
            lastHigh.aR = null;
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
  return $doubleToInt((size * $thiz.i9));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.i9 = loadFactor;
  $thiz.aQ = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.ia = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aQ.a.length);
  $thiz.dn = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.i9 = 0.0;
  this.aQ = null;
  this.ia = 0;
  this.dn = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aI = (function() {
  return this.dn;
});
$p.gL = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.ba = (function(elem) {
  var hash = this.gL($m_sr_Statics$().Q(elem));
  var x1 = this.aQ.a[(hash & (((-1) + this.aQ.a.length) | 0))];
  return (((x1 === null) ? null : x1.pr(elem, hash)) !== null);
});
$p.b1 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.i9)));
  if ((target > this.aQ.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.gw = (function(elem) {
  if ((((1 + this.dn) | 0) >= this.ia)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aQ.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.gL($m_sr_Statics$().Q(elem)));
});
$p.my = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.gL((h$2$2 | 0)));
    }));
    xs.r8.rh(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.q()) {
      var next = iter.h();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eB, next.cI);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pk();
    while (iter$2.q()) {
      var next$2 = iter$2.h();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.np(), next$2.nl());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.l = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bL = (function() {
  return $m_scm_HashSet$();
});
$p.B = (function() {
  return this.dn;
});
$p.b = (function() {
  return (this.dn === 0);
});
$p.bY = (function() {
  return "HashSet";
});
$p.v = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.q()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().j6(hashIterator, $m_s_util_hashing_MurmurHash3$().ms);
});
$p.aZ = (function(elem) {
  this.gw(elem);
  return this;
});
$p.aY = (function(elems) {
  return this.my(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  c9: 1,
  gj: 1,
  eW: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aN: 1,
  fm: 1,
  e: 1,
  d: 1,
  gH: 1,
  I: 1,
  gI: 1,
  G: 1,
  A: 1,
  M: 1,
  H: 1,
  F: 1,
  av: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fL)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gD)));
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
$p.fD = (function(coll) {
  return $m_sci_ArraySeq$().iB(coll, this.a7());
});
$p.fJ = (function() {
  return $m_sci_ArraySeq$().gH(this.a7());
});
$p.cm = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gy = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eM = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
$p.dB = (function() {
  return $m_sci_ArraySeq$().hS;
});
$p.bY = (function() {
  return "ArraySeq";
});
$p.bJ = (function(xs, start, len) {
  var srcLen = this.u();
  var destLen = $m_jl_reflect_Array$().bZ(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fz(this.ct(), 0, xs, start, copied);
  }
  return copied;
});
$p.gx = (function() {
  return 2147483647;
});
$p.fC = (function(coll) {
  return $m_sci_ArraySeq$().iB(coll, this.a7());
});
$p.bL = (function() {
  return $m_sci_ArraySeq$().hS;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.f = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.f = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cm = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gy = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eM = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
$p.dB = (function() {
  return $m_sci_Vector$();
});
$p.u = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.j : this.f.a.length);
});
$p.l = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().m5 : new $c_sci_NewVectorIterator(this, this.u(), this.cv()));
});
$p.bY = (function() {
  return "Vector";
});
$p.bJ = (function(xs, start, len) {
  return this.l().bJ(xs, start, len);
});
$p.gx = (function() {
  return $m_sci_Vector$().m4;
});
$p.aC = (function(index) {
  return $m_scg_CommonErrors$().fG(index, (((-1) + this.u()) | 0));
});
$p.co = (function(f) {
  var c = this.cv();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.iz((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.cu(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bL = (function() {
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
$p.cm = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.bb = (function(len) {
  var x = this.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.u();
});
$p.dB = (function() {
  return $m_scm_ArraySeq$().i8;
});
$p.nj = (function(coll) {
  var evidence$1 = this.a7();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aH();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.B();
  var it = coll.l();
  while (it.q()) {
    var elem = it.h();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.V.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.iQ(elemRuntimeClass.V.r().w(jsElems));
});
$p.fJ = (function() {
  return $m_scm_ArraySeq$().gH(this.a7());
});
$p.bY = (function() {
  return "ArraySeq";
});
$p.bJ = (function(xs, start, len) {
  var srcLen = this.u();
  var destLen = $m_jl_reflect_Array$().bZ(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fz(this.bX(), 0, xs, start, copied);
  }
  return copied;
});
$p.p = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bZ(this.bX()) !== $m_jl_reflect_Array$().bZ(other.bX()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.fC = (function(coll) {
  return this.nj(coll);
});
$p.fD = (function(coll) {
  return this.nj(coll);
});
$p.bL = (function() {
  return $m_scm_ArraySeq$().i8;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.cW = null;
  this.cW = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.u = (function() {
  return this.cW.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mR(this.cW, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().n9(this.cW, that.cW) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.cW);
});
$p.fv = (function(i) {
  return this.cW.a[i];
});
$p.d = (function(v1) {
  return this.fv((v1 | 0));
});
$p.x = (function(i) {
  return this.fv(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.ct = (function() {
  return this.cW;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  bD: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.cX = null;
  this.cX = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.u = (function() {
  return this.cX.a.length;
});
$p.fn = (function(i) {
  return this.cX.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mJ(this.cX, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().n3(this.cX, that.cX) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.cX);
});
$p.d = (function(v1) {
  return this.fn((v1 | 0));
});
$p.x = (function(i) {
  return this.fn(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.ct = (function() {
  return this.cX;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  bE: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cy = null;
  this.cy = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.u = (function() {
  return this.cy.a.length;
});
$p.fo = (function(i) {
  return this.cy.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mK(this.cy, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().n4(this.cy, that.cy) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cy);
});
$p.dt = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cy).dt(sb, start, sep, end);
});
$p.d = (function(v1) {
  return $bC(this.fo((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.fo(i));
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.ct = (function() {
  return this.cy;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  bF: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.cY = null;
  this.cY = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.u = (function() {
  return this.cY.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mL(this.cY, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().n5(this.cY, that.cY) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.cY);
});
$p.fq = (function(i) {
  return this.cY.a[i];
});
$p.d = (function(v1) {
  return this.fq((v1 | 0));
});
$p.x = (function(i) {
  return this.fq(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.ct = (function() {
  return this.cY;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  bG: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.cZ = null;
  this.cZ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.u = (function() {
  return this.cZ.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mM(this.cZ, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().n6(this.cZ, that.cZ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.cZ);
});
$p.fr = (function(i) {
  return this.cZ.a[i];
});
$p.d = (function(v1) {
  return this.fr((v1 | 0));
});
$p.x = (function(i) {
  return this.fr(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.ct = (function() {
  return this.cZ;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  bH: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.d0 = null;
  this.d0 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.u = (function() {
  return this.d0.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mN(this.d0, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().iw(this.d0, that.d0) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.d0);
});
$p.fs = (function(i) {
  return this.d0.a[i];
});
$p.d = (function(v1) {
  return this.fs((v1 | 0));
});
$p.x = (function(i) {
  return this.fs(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.ct = (function() {
  return this.d0;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  bI: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.d1 = null;
  this.d1 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.u = (function() {
  return this.d1.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mO(this.d1, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().n7(this.d1, that.d1) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.d1);
});
$p.ft = (function(i) {
  return this.d1.a[i];
});
$p.d = (function(v1) {
  return this.ft((v1 | 0));
});
$p.x = (function(i) {
  return this.ft(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.ct = (function() {
  return this.d1;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  bJ: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cf = null;
  this.cf = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.a7 = (function() {
  return $m_s_reflect_ClassTag$().mF($objectGetClass(this.cf).V.Q());
});
$p.u = (function() {
  return this.cf.a.length;
});
$p.x = (function(i) {
  return this.cf.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mI(this.cf, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().na(this.cf, that.cf) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cf);
});
$p.d = (function(v1) {
  return this.x((v1 | 0));
});
$p.ct = (function() {
  return this.cf;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  bK: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.d2 = null;
  this.d2 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.u = (function() {
  return this.d2.a.length;
});
$p.fp = (function(i) {
  return this.d2.a[i];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mP(this.d2, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().n8(this.d2, that.d2) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.d2);
});
$p.d = (function(v1) {
  return this.fp((v1 | 0));
});
$p.x = (function(i) {
  return this.fp(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.ct = (function() {
  return this.d2;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  bL: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.dT = null;
  this.dT = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.u = (function() {
  return this.dT.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mQ(this.dT, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.dT.a.length === that.dT.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.dT);
});
$p.fu = (function(i) {
});
$p.d = (function(v1) {
  this.fu((v1 | 0));
});
$p.x = (function(i) {
  this.fu(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.ct = (function() {
  return this.dT;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  bM: 1,
  W: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  a0: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.b() ? 0 : 1);
    } else if (xs.b()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.n();
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
      var aEmpty = a.b();
      var bEmpty = b.b();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().r(a.t(), b.t()))) {
        var temp$a = a.n();
        var temp$b = b.n();
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
$p.cm = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.l = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.bl = (function() {
  return "LinearSeq";
});
$p.iP = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.x = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eM = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dB = (function() {
  return $m_sci_List$();
});
$p.mt = (function(prefix) {
  if (this.b()) {
    return prefix;
  } else if (prefix.b()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.t(), this);
    var curr = result;
    var that = prefix.n();
    while ((!that.b())) {
      var temp = new $c_sci_$colon$colon(that.t(), this);
      curr.S = temp;
      curr = temp;
      that = that.n();
    }
    return result;
  }
});
$p.b = (function() {
  return (this === $m_sci_Nil$());
});
$p.eL = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.mt(prefix);
  }
  if ((prefix.B() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.b()) {
      return prefix.eO();
    }
  }
  var iter = prefix.l();
  if (iter.q()) {
    var result = new $c_sci_$colon$colon(iter.h(), this);
    var curr = result;
    while (iter.q()) {
      var temp = new $c_sci_$colon$colon(iter.h(), this);
      curr.S = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.mD = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.mt(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.q4 = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.d(this.t()), $m_sci_Nil$());
    var t = h;
    var rest = this.n();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.d(rest.t()), $m_sci_Nil$());
      t.S = nx;
      t = nx;
      rest = rest.n();
    }
    return h;
  }
});
$p.oZ = (function(pf) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var rest = this;
    var h = null;
    var x = null;
    while ((h === null)) {
      x = pf.bI(rest.t(), $m_sci_List$().fc);
      if ((x !== $m_sci_List$().fc)) {
        h = new $c_sci_$colon$colon(x, $m_sci_Nil$());
      }
      rest = rest.n();
      if ((rest === $m_sci_Nil$())) {
        return ((h === null) ? $m_sci_Nil$() : h);
      }
    }
    var t = h;
    while ((rest !== $m_sci_Nil$())) {
      x = pf.bI(rest.t(), $m_sci_List$().fc);
      if ((x !== $m_sci_List$().fc)) {
        var nx = new $c_sci_$colon$colon(x, $m_sci_Nil$());
        t.S = nx;
        t = nx;
      }
      rest = rest.n();
    }
    return h;
  }
});
$p.co = (function(f) {
  var these = this;
  while ((!these.b())) {
    f.d(these.t());
    these = these.n();
  }
});
$p.u = (function() {
  var these = this;
  var len = 0;
  while ((!these.b())) {
    len = ((1 + len) | 0);
    these = these.n();
  }
  return len;
});
$p.bb = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.ba = (function(elem) {
  var these = this;
  while ((!these.b())) {
    if ($m_sr_BoxesRunTime$().r(these.t(), elem)) {
      return true;
    }
    these = these.n();
  }
  return false;
});
$p.pq = (function(p) {
  var these = this;
  while ((!these.b())) {
    if ((!(!p.d(these.t())))) {
      return new $c_s_Some(these.t());
    }
    these = these.n();
  }
  return $m_s_None$();
});
$p.bY = (function() {
  return "List";
});
$p.eO = (function() {
  return this;
});
$p.p = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.d = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cb = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.n1 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.bL = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.f = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.df = null;
  this.df = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.u = (function() {
  return this.df.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mR(this.df, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().n9(this.df, that.df) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.df);
});
$p.fv = (function(index) {
  return this.df.a[index];
});
$p.d = (function(v1) {
  return this.fv((v1 | 0));
});
$p.x = (function(i) {
  return this.fv(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.bX = (function() {
  return this.df;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  bZ: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.dg = null;
  this.dg = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.u = (function() {
  return this.dg.a.length;
});
$p.fn = (function(index) {
  return this.dg.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mJ(this.dg, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().n3(this.dg, that.dg) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dg);
});
$p.d = (function(v1) {
  return this.fn((v1 | 0));
});
$p.x = (function(i) {
  return this.fn(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.bX = (function() {
  return this.dg;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  c0: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bH = null;
  this.bH = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.u = (function() {
  return this.bH.a.length;
});
$p.fo = (function(index) {
  return this.bH.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mK(this.bH, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().n4(this.bH, that.bH) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.bH);
});
$p.dt = (function(sb, start, sep, end) {
  var jsb = sb.aS;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var len = this.bH.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.mB(this.bH);
    } else {
      jsb.u();
      var c = this.bH.a[0];
      var str = ("" + $cToS(c));
      jsb.s = (jsb.s + str);
      var i = 1;
      while ((i < len)) {
        jsb.s = (("" + jsb.s) + sep);
        var c$1 = this.bH.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.s = (jsb.s + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return sb;
});
$p.d = (function(v1) {
  return $bC(this.fo((v1 | 0)));
});
$p.x = (function(i) {
  return $bC(this.fo(i));
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.bX = (function() {
  return this.bH;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  c1: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.dh = null;
  this.dh = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.u = (function() {
  return this.dh.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mL(this.dh, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().n5(this.dh, that.dh) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dh);
});
$p.fq = (function(index) {
  return this.dh.a[index];
});
$p.d = (function(v1) {
  return this.fq((v1 | 0));
});
$p.x = (function(i) {
  return this.fq(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.bX = (function() {
  return this.dh;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  c2: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.di = null;
  this.di = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.u = (function() {
  return this.di.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mM(this.di, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().n6(this.di, that.di) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.di);
});
$p.fr = (function(index) {
  return this.di.a[index];
});
$p.d = (function(v1) {
  return this.fr((v1 | 0));
});
$p.x = (function(i) {
  return this.fr(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.bX = (function() {
  return this.di;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  c3: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.dj = null;
  this.dj = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.u = (function() {
  return this.dj.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mN(this.dj, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().iw(this.dj, that.dj) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dj);
});
$p.fs = (function(index) {
  return this.dj.a[index];
});
$p.d = (function(v1) {
  return this.fs((v1 | 0));
});
$p.x = (function(i) {
  return this.fs(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.bX = (function() {
  return this.dj;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  c4: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.dk = null;
  this.dk = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.u = (function() {
  return this.dk.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mO(this.dk, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().n7(this.dk, that.dk) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dk);
});
$p.ft = (function(index) {
  return this.dk.a[index];
});
$p.d = (function(v1) {
  return this.ft((v1 | 0));
});
$p.x = (function(i) {
  return this.ft(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.bX = (function() {
  return this.dk;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  c5: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.cG = null;
  this.cG = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.a7 = (function() {
  return $m_s_reflect_ClassTag$().mF($objectGetClass(this.cG).V.Q());
});
$p.u = (function() {
  return this.cG.a.length;
});
$p.x = (function(index) {
  return this.cG.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mI(this.cG, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().na(this.cG, that.cG) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cG);
});
$p.d = (function(v1) {
  return this.x((v1 | 0));
});
$p.bX = (function() {
  return this.cG;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  c6: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dl = null;
  this.dl = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.u = (function() {
  return this.dl.a.length;
});
$p.fp = (function(index) {
  return this.dl.a[index];
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mP(this.dl, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().n8(this.dl, that.dl) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dl);
});
$p.d = (function(v1) {
  return this.fp((v1 | 0));
});
$p.x = (function(i) {
  return this.fp(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.bX = (function() {
  return this.dl;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  c7: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.dZ = null;
  this.dZ = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.u = (function() {
  return this.dZ.a.length;
});
$p.v = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mQ(this.dZ, this$1.ai);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.dZ.a.length === that.dZ.a.length) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.l = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.dZ);
});
$p.fu = (function(index) {
});
$p.d = (function(v1) {
  this.fu((v1 | 0));
});
$p.x = (function(i) {
  this.fu(i);
});
$p.a7 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.bX = (function() {
  return this.dZ;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  c8: 1,
  X: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gt)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.i = suffix1;
  $thiz.j = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.f = null;
  this.i = null;
  this.j = 0;
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
  this.f = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.f.a.length))) {
    var a1 = this.f;
    var a1c = a1.g();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.f.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eE(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().bj;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cv = (function() {
  return 1;
});
$p.cu = (function(idx) {
  return this.f;
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  g9: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.hP = null;
  this.S = null;
  this.hP = head;
  this.S = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.t = (function() {
  return this.hP;
});
$p.be = (function() {
  return "::";
});
$p.bc = (function() {
  return 2;
});
$p.bd = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.hP;
      break;
    }
    case 1: {
      return this.S;
      break;
    }
    default: {
      return $m_sr_Statics$().e7(x$1);
    }
  }
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.n = (function() {
  return this.S;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  fu: 1,
  aQ: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ar: 1,
  aK: 1,
  aP: 1,
  bC: 1,
  s: 1,
  k: 1,
  z: 1,
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
$p.iL = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.qU = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.B = (function() {
  return 0;
});
$p.l = (function() {
  return $m_sc_Iterator$().J;
});
$p.be = (function() {
  return "Nil";
});
$p.bc = (function() {
  return 0;
});
$p.bd = (function(x$1) {
  return $m_sr_Statics$().e7(x$1);
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.n = (function() {
  this.qU();
});
$p.t = (function() {
  this.iL();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  fZ: 1,
  aQ: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ar: 1,
  aK: 1,
  aP: 1,
  bC: 1,
  s: 1,
  k: 1,
  z: 1,
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
  this.f = null;
  this.i = null;
  this.j = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().i3, $m_sci_VectorStatics$().i3, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.mE = (function(index) {
  throw this.aC(index);
});
$p.dF = (function(index, elem) {
  throw this.aC(index);
});
$p.du = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cv = (function() {
  return 0;
});
$p.cu = (function(idx) {
  return null;
});
$p.p = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aC = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.d = (function(v1) {
  this.mE((v1 | 0));
});
$p.x = (function(i) {
  this.mE(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  g8: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
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
  this.f = null;
  this.i = null;
  this.j = 0;
  this.bG = 0;
  this.bi = null;
  this.bG = len1;
  this.bi = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bG) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bi.a.length) ? this.bi.a[i2].a[i1] : this.i.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.bG)) {
      var io = ((index - this.bG) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bi.a.length)) {
        var a2 = this.bi;
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.f, this.bG, a2c, this.i, this.j);
      } else {
        var a1$1 = this.i;
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.f, this.bG, this.bi, a1c$1, this.j);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.g();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bG, this.bi, this.i, this.j);
    }
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.i.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eE(this.i, elem);
    var x$2 = ((1 + this.j) | 0);
    return new $c_sci_Vector2(this.f, this.bG, this.bi, x$1, x$2);
  } else if ((this.bi.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().E(this.bi, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.j) | 0);
    return new $c_sci_Vector2(this.f, this.bG, x$6, a, x$8);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bG;
    var $x_3 = this.bi;
    var $x_2 = this.bG;
    var $x_1 = $m_sci_VectorStatics$().cj;
    var x = this.i;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.j) | 0));
  }
});
$p.cv = (function() {
  return 3;
});
$p.cu = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bi;
      break;
    }
    case 2: {
      return this.i;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bG) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bi.a.length) ? this.bi.a[i2].a[i1] : this.i.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  ga: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.j = 0;
  this.b7 = 0;
  this.bv = null;
  this.b8 = 0;
  this.aW = null;
  this.aX = null;
  this.b7 = len1;
  this.bv = prefix2;
  this.b8 = len12;
  this.aW = data3;
  this.aX = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.b8) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aW.a.length) ? this.aW.a[i3].a[i2].a[i1] : ((i2 < this.aX.a.length) ? this.aX.a[i2].a[i1] : this.i.a[i1]));
    } else if ((index >= this.b7)) {
      var io$2 = ((index - this.b7) | 0);
      return this.bv.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.b8)) {
      var io = ((index - this.b8) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aW.a.length)) {
        var a3 = this.aW;
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, a3c, this.aX, this.i, this.j);
      } else if ((i2 < this.aX.a.length)) {
        var a2$1 = this.aX;
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, this.aW, a2c$1, this.i, this.j);
      } else {
        var a1$2 = this.i;
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, this.aW, this.aX, a1c$2, this.j);
      }
    } else if ((index >= this.b7)) {
      var io$2 = ((index - this.b7) | 0);
      var a2$2 = this.bv;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.g();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.g();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.b7, a2c$2, this.b8, this.aW, this.aX, this.i, this.j);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.g();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.b7, this.bv, this.b8, this.aW, this.aX, this.i, this.j);
    }
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.i.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eE(this.i, elem);
    var x$2 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, this.aW, this.aX, x$1, x$2);
  } else if ((this.aX.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().E(this.aX, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, this.aW, x$9, a, x$11);
  } else if ((this.aW.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().E(this.aW, $m_sci_VectorStatics$().E(this.aX, this.i));
    var x$18 = $m_sci_VectorStatics$().bj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.f, this.b7, this.bv, this.b8, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.b7;
    var $x_6 = this.bv;
    var $x_5 = this.b8;
    var $x_4 = this.aW;
    var $x_3 = this.b8;
    var $x_2 = $m_sci_VectorStatics$().ez;
    var x = $m_sci_VectorStatics$().E(this.aX, this.i);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.j) | 0));
  }
});
$p.cv = (function() {
  return 5;
});
$p.cu = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bv;
      break;
    }
    case 2: {
      return this.aW;
      break;
    }
    case 3: {
      return this.aX;
      break;
    }
    case 4: {
      return this.i;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.b8) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aW.a.length) ? this.aW.a[i3].a[i2].a[i1] : ((i2 < this.aX.a.length) ? this.aX.a[i2].a[i1] : this.i.a[i1]));
    } else if ((index >= this.b7)) {
      var io$2 = ((index - this.b7) | 0);
      return this.bv.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gb: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.j = 0;
  this.aN = 0;
  this.b3 = null;
  this.aO = 0;
  this.b4 = null;
  this.aP = 0;
  this.ay = null;
  this.aA = null;
  this.az = null;
  this.aN = len1;
  this.b3 = prefix2;
  this.aO = len12;
  this.b4 = prefix3;
  this.aP = len123;
  this.ay = data4;
  this.aA = suffix3;
  this.az = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aP) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ay.a.length) ? this.ay.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.i.a[i1])));
    } else if ((index >= this.aO)) {
      var io$2 = ((index - this.aO) | 0);
      return this.b4.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aN)) {
      var io$3 = ((index - this.aN) | 0);
      return this.b3.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.aP)) {
      var io = ((index - this.aP) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ay.a.length)) {
        var a4 = this.ay;
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, a4c, this.aA, this.az, this.i, this.j);
      } else if ((i3 < this.aA.a.length)) {
        var a3$1 = this.aA;
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, a3c$1, this.az, this.i, this.j);
      } else if ((i2 < this.az.a.length)) {
        var a2$2 = this.az;
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, this.aA, a2c$2, this.i, this.j);
      } else {
        var a1$3 = this.i;
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, this.aA, this.az, a1c$3, this.j);
      }
    } else if ((index >= this.aO)) {
      var io$2 = ((index - this.aO) | 0);
      var a3$2 = this.b4;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.g();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.g();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.g();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, a3c$2, this.aP, this.ay, this.aA, this.az, this.i, this.j);
    } else if ((index >= this.aN)) {
      var io$3 = ((index - this.aN) | 0);
      var a2$4 = this.b3;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.aN, a2c$4, this.aO, this.b4, this.aP, this.ay, this.aA, this.az, this.i, this.j);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.g();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, this.aA, this.az, this.i, this.j);
    }
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.i.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eE(this.i, elem);
    var x$2 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, this.aA, this.az, x$1, x$2);
  } else if ((this.az.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().E(this.az, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, this.aA, x$12, a, x$14);
  } else if ((this.aA.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().E(this.aA, $m_sci_VectorStatics$().E(this.az, this.i));
    var x$24 = $m_sci_VectorStatics$().bj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, this.ay, x$23, x$24, a$1, x$26);
  } else if ((this.ay.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().E(this.ay, $m_sci_VectorStatics$().E(this.aA, $m_sci_VectorStatics$().E(this.az, this.i)));
    var x$35 = $m_sci_VectorStatics$().cj;
    var x$36 = $m_sci_VectorStatics$().bj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.f, this.aN, this.b3, this.aO, this.b4, this.aP, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.aN;
    var $x_9 = this.b3;
    var $x_8 = this.aO;
    var $x_7 = this.b4;
    var $x_6 = this.aP;
    var $x_5 = this.ay;
    var $x_4 = this.aP;
    var $x_3 = $m_sci_VectorStatics$().i4;
    var x = $m_sci_VectorStatics$().E(this.aA, $m_sci_VectorStatics$().E(this.az, this.i));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cj;
    var $x_1 = $m_sci_VectorStatics$().bj;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.j) | 0));
  }
});
$p.cv = (function() {
  return 7;
});
$p.cu = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b3;
      break;
    }
    case 2: {
      return this.b4;
      break;
    }
    case 3: {
      return this.ay;
      break;
    }
    case 4: {
      return this.aA;
      break;
    }
    case 5: {
      return this.az;
      break;
    }
    case 6: {
      return this.i;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aP) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ay.a.length) ? this.ay.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.i.a[i1])));
    } else if ((index >= this.aO)) {
      var io$2 = ((index - this.aO) | 0);
      return this.b4.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aN)) {
      var io$3 = ((index - this.aN) | 0);
      return this.b3.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gc: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.j = 0;
  this.ao = 0;
  this.aD = null;
  this.ap = 0;
  this.aE = null;
  this.aq = 0;
  this.aF = null;
  this.ar = 0;
  this.aa = null;
  this.ad = null;
  this.ac = null;
  this.ab = null;
  this.ao = len1;
  this.aD = prefix2;
  this.ap = len12;
  this.aE = prefix3;
  this.aq = len123;
  this.aF = prefix4;
  this.ar = len1234;
  this.aa = data5;
  this.ad = suffix4;
  this.ac = suffix3;
  this.ab = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.ar) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aa.a.length) ? this.aa.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ad.a.length) ? this.ad.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ac.a.length) ? this.ac.a[i3].a[i2].a[i1] : ((i2 < this.ab.a.length) ? this.ab.a[i2].a[i1] : this.i.a[i1]))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.ar)) {
      var io = ((index - this.ar) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.aa.a.length)) {
        var a5 = this.aa;
        var a5c = a5.g();
        var a4 = a5c.a[i5];
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, a5c, this.ad, this.ac, this.ab, this.i, this.j);
      } else if ((i4 < this.ad.a.length)) {
        var a4$1 = this.ad;
        var a4c$1 = a4$1.g();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, a4c$1, this.ac, this.ab, this.i, this.j);
      } else if ((i3 < this.ac.a.length)) {
        var a3$2 = this.ac;
        var a3c$2 = a3$2.g();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, a3c$2, this.ab, this.i, this.j);
      } else if ((i2 < this.ab.a.length)) {
        var a2$3 = this.ab;
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, a2c$3, this.i, this.j);
      } else {
        var a1$4 = this.i;
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, this.ab, a1c$4, this.j);
      }
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      var a4$2 = this.aF;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.g();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.g();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, a4c$2, this.ar, this.aa, this.ad, this.ac, this.ab, this.i, this.j);
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      var a3$4 = this.aE;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.g();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.g();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.g();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, a3c$4, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, this.ab, this.i, this.j);
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      var a2$6 = this.aD;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.f, this.ao, a2c$6, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, this.ab, this.i, this.j);
    } else {
      var a1$8 = this.f;
      var a1c$8 = a1$8.g();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, this.ab, this.i, this.j);
    }
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.i.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eE(this.i, elem);
    var x$2 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, this.ab, x$1, x$2);
  } else if ((this.ab.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().E(this.ab, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, this.ac, x$15, a, x$17);
  } else if ((this.ac.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().E(this.ac, $m_sci_VectorStatics$().E(this.ab, this.i));
    var x$30 = $m_sci_VectorStatics$().bj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, this.ad, x$29, x$30, a$1, x$32);
  } else if ((this.ad.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, $m_sci_VectorStatics$().E(this.ab, this.i)));
    var x$44 = $m_sci_VectorStatics$().cj;
    var x$45 = $m_sci_VectorStatics$().bj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, this.aa, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.aa.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().E(this.aa, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, $m_sci_VectorStatics$().E(this.ab, this.i))));
    var x$58 = $m_sci_VectorStatics$().ez;
    var x$59 = $m_sci_VectorStatics$().cj;
    var x$60 = $m_sci_VectorStatics$().bj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.f, this.ao, this.aD, this.ap, this.aE, this.aq, this.aF, this.ar, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.f;
    var $x_13 = this.ao;
    var $x_12 = this.aD;
    var $x_11 = this.ap;
    var $x_10 = this.aE;
    var $x_9 = this.aq;
    var $x_8 = this.aF;
    var $x_7 = this.ar;
    var $x_6 = this.aa;
    var $x_5 = this.ar;
    var $x_4 = $m_sci_VectorStatics$().m6;
    var x = $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, $m_sci_VectorStatics$().E(this.ab, this.i)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().ez;
    var $x_2 = $m_sci_VectorStatics$().cj;
    var $x_1 = $m_sci_VectorStatics$().bj;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.j) | 0));
  }
});
$p.cv = (function() {
  return 9;
});
$p.cu = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.aD;
      break;
    }
    case 2: {
      return this.aE;
      break;
    }
    case 3: {
      return this.aF;
      break;
    }
    case 4: {
      return this.aa;
      break;
    }
    case 5: {
      return this.ad;
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
      return this.i;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.ar) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aa.a.length) ? this.aa.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ad.a.length) ? this.ad.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ac.a.length) ? this.ac.a[i3].a[i2].a[i1] : ((i2 < this.ab.a.length) ? this.ab.a[i2].a[i1] : this.i.a[i1]))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gd: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.j = 0;
  this.ae = 0;
  this.as = null;
  this.af = 0;
  this.at = null;
  this.ag = 0;
  this.au = null;
  this.ah = 0;
  this.av = null;
  this.al = 0;
  this.a1 = null;
  this.a5 = null;
  this.a4 = null;
  this.a3 = null;
  this.a2 = null;
  this.ae = len1;
  this.as = prefix2;
  this.af = len12;
  this.at = prefix3;
  this.ag = len123;
  this.au = prefix4;
  this.ah = len1234;
  this.av = prefix5;
  this.al = len12345;
  this.a1 = data6;
  this.a5 = suffix5;
  this.a4 = suffix4;
  this.a3 = suffix3;
  this.a2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.x = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.al) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a1.a.length) ? this.a1.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a5.a.length) ? this.a5.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a4.a.length) ? this.a4.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a3.a.length) ? this.a3.a[i3].a[i2].a[i1] : ((i2 < this.a2.a.length) ? this.a2.a[i2].a[i1] : this.i.a[i1])))));
    } else if ((index >= this.ah)) {
      var io$2 = ((index - this.ah) | 0);
      return this.av.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ag)) {
      var io$3 = ((index - this.ag) | 0);
      return this.au.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.af)) {
      var io$4 = ((index - this.af) | 0);
      return this.at.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ae)) {
      var io$5 = ((index - this.ae) | 0);
      return this.as.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.al)) {
      var io = ((index - this.al) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a1.a.length)) {
        var a6 = this.a1;
        var a6c = a6.g();
        var a5 = a6c.a[i6];
        var a5c = a5.g();
        var a4 = a5c.a[i5];
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, a6c, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
      } else if ((i5 < this.a5.a.length)) {
        var a5$1 = this.a5;
        var a5c$1 = a5$1.g();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.g();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, a5c$1, this.a4, this.a3, this.a2, this.i, this.j);
      } else if ((i4 < this.a4.a.length)) {
        var a4$2 = this.a4;
        var a4c$2 = a4$2.g();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.g();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, a4c$2, this.a3, this.a2, this.i, this.j);
      } else if ((i3 < this.a3.a.length)) {
        var a3$3 = this.a3;
        var a3c$3 = a3$3.g();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, a3c$3, this.a2, this.i, this.j);
      } else if ((i2 < this.a2.a.length)) {
        var a2$4 = this.a2;
        var a2c$4 = a2$4.g();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, a2c$4, this.i, this.j);
      } else {
        var a1$5 = this.i;
        var a1c$5 = a1$5.g();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, a1c$5, this.j);
      }
    } else if ((index >= this.ah)) {
      var io$2 = ((index - this.ah) | 0);
      var a5$2 = this.av;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.g();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.g();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.g();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.g();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.g();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, a5c$2, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
    } else if ((index >= this.ag)) {
      var io$3 = ((index - this.ag) | 0);
      var a4$4 = this.au;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.g();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.g();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, a4c$4, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
    } else if ((index >= this.af)) {
      var io$4 = ((index - this.af) | 0);
      var a3$6 = this.at;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.g();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.g();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.g();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, a3c$6, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
    } else if ((index >= this.ae)) {
      var io$5 = ((index - this.ae) | 0);
      var a2$8 = this.as;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.g();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.g();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.f, this.ae, a2c$8, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.g();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, this.i, this.j);
    }
  } else {
    throw this.aC(index);
  }
});
$p.du = (function(elem) {
  if ((this.i.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eE(this.i, elem);
    var x$2 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, this.a2, x$1, x$2);
  } else if ((this.a2.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().E(this.a2, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, this.a3, x$18, a, x$20);
  } else if ((this.a3.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, this.i));
    var x$36 = $m_sci_VectorStatics$().bj;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, this.a4, x$35, x$36, a$1, x$38);
  } else if ((this.a4.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().E(this.a4, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, this.i)));
    var x$53 = $m_sci_VectorStatics$().cj;
    var x$54 = $m_sci_VectorStatics$().bj;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, this.a5, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.a5.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().E(this.a5, $m_sci_VectorStatics$().E(this.a4, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, this.i))));
    var x$70 = $m_sci_VectorStatics$().ez;
    var x$71 = $m_sci_VectorStatics$().cj;
    var x$72 = $m_sci_VectorStatics$().bj;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, this.a1, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a1.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a5, $m_sci_VectorStatics$().E(this.a4, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, this.i)))));
    var x$87 = $m_sci_VectorStatics$().i4;
    var x$88 = $m_sci_VectorStatics$().ez;
    var x$89 = $m_sci_VectorStatics$().cj;
    var x$90 = $m_sci_VectorStatics$().bj;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.f, this.ae, this.as, this.af, this.at, this.ag, this.au, this.ah, this.av, this.al, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cv = (function() {
  return 11;
});
$p.cu = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.as;
      break;
    }
    case 2: {
      return this.at;
      break;
    }
    case 3: {
      return this.au;
      break;
    }
    case 4: {
      return this.av;
      break;
    }
    case 5: {
      return this.a1;
      break;
    }
    case 6: {
      return this.a5;
      break;
    }
    case 7: {
      return this.a4;
      break;
    }
    case 8: {
      return this.a3;
      break;
    }
    case 9: {
      return this.a2;
      break;
    }
    case 10: {
      return this.i;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.al) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a1.a.length) ? this.a1.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a5.a.length) ? this.a5.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a4.a.length) ? this.a4.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a3.a.length) ? this.a3.a[i3].a[i2].a[i1] : ((i2 < this.a2.a.length) ? this.a2.a[i2].a[i1] : this.i.a[i1])))));
    } else if ((index >= this.ah)) {
      var io$2 = ((index - this.ah) | 0);
      return this.av.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ag)) {
      var io$3 = ((index - this.ag) | 0);
      return this.au.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.af)) {
      var io$4 = ((index - this.af) | 0);
      return this.at.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ae)) {
      var io$5 = ((index - this.ae) | 0);
      return this.as.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  ge: 1,
  ab: 1,
  ac: 1,
  a7: 1,
  x: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  p: 1,
  q: 1,
  B: 1,
  z: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aS = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aS = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bl = (function() {
  return "IndexedSeq";
});
$p.l = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bb = (function(len) {
  var x = this.aS.u();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b1 = (function(size) {
});
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.u = (function() {
  return this.aS.u();
});
$p.B = (function() {
  return this.aS.u();
});
$p.ow = (function(x) {
  var this$1 = this.aS;
  var str = ("" + $cToS(x));
  this$1.s = (this$1.s + str);
  return this;
});
$p.z = (function() {
  return this.aS.s;
});
$p.mC = (function(xs) {
  if (false) {
    var this$3 = this.aS;
    var str = xs.r9;
    this$3.s = (("" + this$3.s) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aS.mB(xs.bH);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aS;
    var s = xs.aS;
    this$4.s = (("" + this$4.s) + s);
  } else {
    var ks = xs.B();
    if ((ks !== 0)) {
      var b = this.aS;
      if ((ks > 0)) {
        b.u();
      }
      var it = xs.l();
      while (it.q()) {
        var c = $uC(it.h());
        var str$1 = ("" + $cToS(c));
        b.s = (b.s + str$1);
      }
    }
  }
  return this;
});
$p.b = (function() {
  return (this.aS.u() === 0);
});
$p.bL = (function() {
  return $m_scm_IndexedSeq$();
});
$p.b5 = (function() {
  return this.aS.s;
});
$p.aZ = (function(elem) {
  return this.ow($uC(elem));
});
$p.fC = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).mC(coll);
});
$p.fD = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).mC(coll);
});
$p.d = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aS.mS(i));
});
$p.x = (function(i) {
  return $bC(this.aS.mS(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cc: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  a8: 1,
  M: 1,
  H: 1,
  F: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  aF: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gC)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().gM($thiz);
  $thiz.bU = buf.bU;
  $thiz.cJ = buf.cJ;
  $thiz.gm = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.gn = ((1 + $thiz.gn) | 0);
  if ($thiz.gm) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.gn = 0;
  this.bU = null;
  this.cJ = null;
  this.gm = false;
  this.bV = 0;
  this.gn = 0;
  this.bU = $m_sci_Nil$();
  this.cJ = null;
  this.gm = false;
  this.bV = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.b1 = (function(size) {
});
$p.cm = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.l = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.bU.l(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.gn)));
});
$p.dB = (function() {
  return $m_scm_ListBuffer$();
});
$p.x = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.bU, i);
});
$p.u = (function() {
  return this.bV;
});
$p.B = (function() {
  return this.bV;
});
$p.b = (function() {
  return (this.bV === 0);
});
$p.eO = (function() {
  this.gm = (!this.b());
  return this.bU;
});
$p.oE = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.bV === 0)) {
    this.bU = last1;
  } else {
    this.cJ.S = last1;
  }
  this.cJ = last1;
  this.bV = ((1 + this.bV) | 0);
  return this;
});
$p.gM = (function(xs) {
  var it = xs.l();
  if (it.q()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
    this.bU = last0;
    while (it.q()) {
      var last1 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
      last0.S = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.bV = len;
    this.cJ = last0;
  }
  return this;
});
$p.ou = (function(xs) {
  var it = xs.l();
  if (it.q()) {
    var fresh = new $c_scm_ListBuffer().gM(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.bV === 0)) {
      this.bU = fresh.bU;
    } else {
      this.cJ.S = fresh.bU;
    }
    this.cJ = fresh.cJ;
    this.bV = ((this.bV + fresh.bV) | 0);
  }
  return this;
});
$p.bl = (function() {
  return "ListBuffer";
});
$p.aY = (function(elems) {
  return this.ou(elems);
});
$p.aZ = (function(elem) {
  return this.oE(elem);
});
$p.b5 = (function() {
  return this.eO();
});
$p.d = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.bU, i);
});
$p.bL = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cb: 1,
  aS: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  aT: 1,
  H: 1,
  F: 1,
  av: 1,
  s: 1,
  k: 1,
  a8: 1,
  M: 1,
  V: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.de = 0;
  $thiz.dd = initialElements;
  $thiz.aw = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.de = 0;
  this.dd = null;
  this.aw = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cm = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.l = (function() {
  return this.r6().l();
});
$p.bb = (function(len) {
  var x = this.aw;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.B = (function() {
  return this.aw;
});
$p.iv = (function(n) {
  this.dd = $m_scm_ArrayBuffer$().nK(this.dd, this.aw, n);
});
$p.b1 = (function(size) {
  if (((size > this.aw) && (size >= 1))) {
    this.iv(size);
  }
});
$p.x = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().fG(n, (((-1) + this.aw) | 0));
  }
  if ((hi > this.aw)) {
    throw $m_scg_CommonErrors$().fG((((-1) + hi) | 0), (((-1) + this.aw) | 0));
  }
  return this.dd.a[n];
});
$p.r4 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().fG(index, (((-1) + this.aw) | 0));
  }
  if ((hi > this.aw)) {
    throw $m_scg_CommonErrors$().fG((((-1) + hi) | 0), (((-1) + this.aw) | 0));
  }
  this.de = ((1 + this.de) | 0);
  this.dd.a[index] = elem;
});
$p.u = (function() {
  return this.aw;
});
$p.r6 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.de)));
});
$p.dB = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.oB = (function(elem) {
  this.de = ((1 + this.de) | 0);
  var newSize = ((1 + this.aw) | 0);
  this.iv(newSize);
  this.aw = newSize;
  this.r4((((-1) + this.aw) | 0), elem);
  return this;
});
$p.mx = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aw;
    if ((elemsLength > 0)) {
      this.de = ((1 + this.de) | 0);
      this.iv(((this.aw + elemsLength) | 0));
      $m_s_Array$().fz(elems.dd, 0, this.dd, this.aw, elemsLength);
      this.aw = ((this.aw + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bl = (function() {
  return "ArrayBuffer";
});
$p.bJ = (function(xs, start, len) {
  var srcLen = this.aw;
  var destLen = $m_jl_reflect_Array$().bZ(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fz(this.dd, 0, xs, start, copied);
  }
  return copied;
});
$p.aY = (function(elems) {
  return this.mx(elems);
});
$p.aZ = (function(elem) {
  return this.oB(elem);
});
$p.bL = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.d = (function(v1) {
  return this.x((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  bY: 1,
  aS: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  aT: 1,
  H: 1,
  F: 1,
  av: 1,
  ca: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  s: 1,
  k: 1,
  V: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dr = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dr = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b1 = (function(size) {
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.l = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bb = (function(len) {
  var x = (this.dr.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cm = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dB = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.x = (function(index) {
  return this.dr[index];
});
$p.u = (function() {
  return (this.dr.length | 0);
});
$p.B = (function() {
  return (this.dr.length | 0);
});
$p.bY = (function() {
  return "WrappedArray";
});
$p.b5 = (function() {
  return this;
});
$p.aZ = (function(elem) {
  this.dr.push(elem);
  return this;
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  return this.dr[index];
});
$p.bL = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  ht: 1,
  aS: 1,
  L: 1,
  n: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  l: 1,
  d: 1,
  N: 1,
  I: 1,
  O: 1,
  G: 1,
  A: 1,
  aT: 1,
  H: 1,
  F: 1,
  av: 1,
  s: 1,
  k: 1,
  R: 1,
  p: 1,
  q: 1,
  S: 1,
  ca: 1,
  M: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
$s_Lfirst_Main__main__AT__V(new ($d_T.r().C)([]));
