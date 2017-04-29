# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow/contrib/training/python/training/hparam.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='tensorflow/contrib/training/python/training/hparam.proto',
  package='tensorflow',
  syntax='proto3',
  serialized_pb=_b('\n8tensorflow/contrib/training/python/training/hparam.proto\x12\ntensorflow\"\xd6\x04\n\tHParamDef\x12\x31\n\x06hparam\x18\x01 \x03(\x0b\x32!.tensorflow.HParamDef.HparamEntry\x1a\x1a\n\tBytesList\x12\r\n\x05value\x18\x01 \x03(\x0c\x1a\x1e\n\tFloatList\x12\x11\n\x05value\x18\x01 \x03(\x02\x42\x02\x10\x01\x1a\x1e\n\tInt64List\x12\x11\n\x05value\x18\x01 \x03(\x03\x42\x02\x10\x01\x1a\x1d\n\x08\x42oolList\x12\x11\n\x05value\x18\x01 \x03(\x08\x42\x02\x10\x01\x1a\xc9\x02\n\nHParamType\x12\x15\n\x0bint64_value\x18\x01 \x01(\x03H\x00\x12\x15\n\x0b\x66loat_value\x18\x02 \x01(\x02H\x00\x12\x15\n\x0b\x62ytes_value\x18\x03 \x01(\x0cH\x00\x12\x14\n\nbool_value\x18\x07 \x01(\x08H\x00\x12\x35\n\nint64_list\x18\x04 \x01(\x0b\x32\x1f.tensorflow.HParamDef.Int64ListH\x00\x12\x35\n\nfloat_list\x18\x05 \x01(\x0b\x32\x1f.tensorflow.HParamDef.FloatListH\x00\x12\x35\n\nbytes_list\x18\x06 \x01(\x0b\x32\x1f.tensorflow.HParamDef.BytesListH\x00\x12\x33\n\tbool_list\x18\x08 \x01(\x0b\x32\x1e.tensorflow.HParamDef.BoolListH\x00\x42\x06\n\x04kind\x1aO\n\x0bHparamEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12/\n\x05value\x18\x02 \x01(\x0b\x32 .tensorflow.HParamDef.HParamType:\x02\x38\x01\x42\x03\xf8\x01\x01\x62\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_HPARAMDEF_BYTESLIST = _descriptor.Descriptor(
  name='BytesList',
  full_name='tensorflow.HParamDef.BytesList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tensorflow.HParamDef.BytesList.value', index=0,
      number=1, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=137,
  serialized_end=163,
)

_HPARAMDEF_FLOATLIST = _descriptor.Descriptor(
  name='FloatList',
  full_name='tensorflow.HParamDef.FloatList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tensorflow.HParamDef.FloatList.value', index=0,
      number=1, type=2, cpp_type=6, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=_descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=165,
  serialized_end=195,
)

_HPARAMDEF_INT64LIST = _descriptor.Descriptor(
  name='Int64List',
  full_name='tensorflow.HParamDef.Int64List',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tensorflow.HParamDef.Int64List.value', index=0,
      number=1, type=3, cpp_type=2, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=_descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=197,
  serialized_end=227,
)

_HPARAMDEF_BOOLLIST = _descriptor.Descriptor(
  name='BoolList',
  full_name='tensorflow.HParamDef.BoolList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='tensorflow.HParamDef.BoolList.value', index=0,
      number=1, type=8, cpp_type=7, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=_descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=229,
  serialized_end=258,
)

_HPARAMDEF_HPARAMTYPE = _descriptor.Descriptor(
  name='HParamType',
  full_name='tensorflow.HParamDef.HParamType',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='int64_value', full_name='tensorflow.HParamDef.HParamType.int64_value', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='float_value', full_name='tensorflow.HParamDef.HParamType.float_value', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='bytes_value', full_name='tensorflow.HParamDef.HParamType.bytes_value', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='bool_value', full_name='tensorflow.HParamDef.HParamType.bool_value', index=3,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='int64_list', full_name='tensorflow.HParamDef.HParamType.int64_list', index=4,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='float_list', full_name='tensorflow.HParamDef.HParamType.float_list', index=5,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='bytes_list', full_name='tensorflow.HParamDef.HParamType.bytes_list', index=6,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='bool_list', full_name='tensorflow.HParamDef.HParamType.bool_list', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='kind', full_name='tensorflow.HParamDef.HParamType.kind',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=261,
  serialized_end=590,
)

_HPARAMDEF_HPARAMENTRY = _descriptor.Descriptor(
  name='HparamEntry',
  full_name='tensorflow.HParamDef.HparamEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='tensorflow.HParamDef.HparamEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='tensorflow.HParamDef.HparamEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=592,
  serialized_end=671,
)

_HPARAMDEF = _descriptor.Descriptor(
  name='HParamDef',
  full_name='tensorflow.HParamDef',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='hparam', full_name='tensorflow.HParamDef.hparam', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_HPARAMDEF_BYTESLIST, _HPARAMDEF_FLOATLIST, _HPARAMDEF_INT64LIST, _HPARAMDEF_BOOLLIST, _HPARAMDEF_HPARAMTYPE, _HPARAMDEF_HPARAMENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=73,
  serialized_end=671,
)

_HPARAMDEF_BYTESLIST.containing_type = _HPARAMDEF
_HPARAMDEF_FLOATLIST.containing_type = _HPARAMDEF
_HPARAMDEF_INT64LIST.containing_type = _HPARAMDEF
_HPARAMDEF_BOOLLIST.containing_type = _HPARAMDEF
_HPARAMDEF_HPARAMTYPE.fields_by_name['int64_list'].message_type = _HPARAMDEF_INT64LIST
_HPARAMDEF_HPARAMTYPE.fields_by_name['float_list'].message_type = _HPARAMDEF_FLOATLIST
_HPARAMDEF_HPARAMTYPE.fields_by_name['bytes_list'].message_type = _HPARAMDEF_BYTESLIST
_HPARAMDEF_HPARAMTYPE.fields_by_name['bool_list'].message_type = _HPARAMDEF_BOOLLIST
_HPARAMDEF_HPARAMTYPE.containing_type = _HPARAMDEF
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['int64_value'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['int64_value'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['float_value'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['float_value'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['bytes_value'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['bytes_value'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['bool_value'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['bool_value'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['int64_list'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['int64_list'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['float_list'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['float_list'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['bytes_list'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['bytes_list'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind'].fields.append(
  _HPARAMDEF_HPARAMTYPE.fields_by_name['bool_list'])
_HPARAMDEF_HPARAMTYPE.fields_by_name['bool_list'].containing_oneof = _HPARAMDEF_HPARAMTYPE.oneofs_by_name['kind']
_HPARAMDEF_HPARAMENTRY.fields_by_name['value'].message_type = _HPARAMDEF_HPARAMTYPE
_HPARAMDEF_HPARAMENTRY.containing_type = _HPARAMDEF
_HPARAMDEF.fields_by_name['hparam'].message_type = _HPARAMDEF_HPARAMENTRY
DESCRIPTOR.message_types_by_name['HParamDef'] = _HPARAMDEF

HParamDef = _reflection.GeneratedProtocolMessageType('HParamDef', (_message.Message,), dict(

  BytesList = _reflection.GeneratedProtocolMessageType('BytesList', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_BYTESLIST,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.BytesList)
    ))
  ,

  FloatList = _reflection.GeneratedProtocolMessageType('FloatList', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_FLOATLIST,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.FloatList)
    ))
  ,

  Int64List = _reflection.GeneratedProtocolMessageType('Int64List', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_INT64LIST,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.Int64List)
    ))
  ,

  BoolList = _reflection.GeneratedProtocolMessageType('BoolList', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_BOOLLIST,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.BoolList)
    ))
  ,

  HParamType = _reflection.GeneratedProtocolMessageType('HParamType', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_HPARAMTYPE,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.HParamType)
    ))
  ,

  HparamEntry = _reflection.GeneratedProtocolMessageType('HparamEntry', (_message.Message,), dict(
    DESCRIPTOR = _HPARAMDEF_HPARAMENTRY,
    __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
    # @@protoc_insertion_point(class_scope:tensorflow.HParamDef.HparamEntry)
    ))
  ,
  DESCRIPTOR = _HPARAMDEF,
  __module__ = 'tensorflow.contrib.training.python.training.hparam_pb2'
  # @@protoc_insertion_point(class_scope:tensorflow.HParamDef)
  ))
_sym_db.RegisterMessage(HParamDef)
_sym_db.RegisterMessage(HParamDef.BytesList)
_sym_db.RegisterMessage(HParamDef.FloatList)
_sym_db.RegisterMessage(HParamDef.Int64List)
_sym_db.RegisterMessage(HParamDef.BoolList)
_sym_db.RegisterMessage(HParamDef.HParamType)
_sym_db.RegisterMessage(HParamDef.HparamEntry)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\370\001\001'))
_HPARAMDEF_FLOATLIST.fields_by_name['value'].has_options = True
_HPARAMDEF_FLOATLIST.fields_by_name['value']._options = _descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))
_HPARAMDEF_INT64LIST.fields_by_name['value'].has_options = True
_HPARAMDEF_INT64LIST.fields_by_name['value']._options = _descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))
_HPARAMDEF_BOOLLIST.fields_by_name['value'].has_options = True
_HPARAMDEF_BOOLLIST.fields_by_name['value']._options = _descriptor._ParseOptions(descriptor_pb2.FieldOptions(), _b('\020\001'))
_HPARAMDEF_HPARAMENTRY.has_options = True
_HPARAMDEF_HPARAMENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
try:
  # THESE ELEMENTS WILL BE DEPRECATED.
  # Please use the generated *_pb2_grpc.py files instead.
  import grpc
  from grpc.framework.common import cardinality
  from grpc.framework.interfaces.face import utilities as face_utilities
  from grpc.beta import implementations as beta_implementations
  from grpc.beta import interfaces as beta_interfaces
except ImportError:
  pass
# @@protoc_insertion_point(module_scope)
