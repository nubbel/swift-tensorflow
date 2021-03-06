# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tensorflow_serving/servables/tensorflow/session_bundle_config.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from tensorflow.core.protobuf import config_pb2 as tensorflow_dot_core_dot_protobuf_dot_config__pb2
from tensorflow.core.protobuf import named_tensor_pb2 as tensorflow_dot_core_dot_protobuf_dot_named__tensor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='tensorflow_serving/servables/tensorflow/session_bundle_config.proto',
  package='tensorflow.serving',
  syntax='proto3',
  serialized_pb=_b('\nCtensorflow_serving/servables/tensorflow/session_bundle_config.proto\x12\x12tensorflow.serving\x1a\x1egoogle/protobuf/wrappers.proto\x1a%tensorflow/core/protobuf/config.proto\x1a+tensorflow/core/protobuf/named_tensor.proto\"\xb4\x02\n\x13SessionBundleConfig\x12\x16\n\x0esession_target\x18\x01 \x01(\t\x12/\n\x0esession_config\x18\x02 \x01(\x0b\x32\x17.tensorflow.ConfigProto\x12\x43\n\x13\x62\x61tching_parameters\x18\x03 \x01(\x0b\x32&.tensorflow.serving.BatchingParameters\x12\x46\n!session_run_load_threadpool_index\x18\x04 \x01(\x0b\x32\x1b.google.protobuf.Int32Value\x12G\n experimental_fixed_input_tensors\x18\x8a\x06 \x03(\x0b\x32\x1c.tensorflow.NamedTensorProto\"\xcc\x02\n\x12\x42\x61tchingParameters\x12\x33\n\x0emax_batch_size\x18\x01 \x01(\x0b\x32\x1b.google.protobuf.Int64Value\x12\x39\n\x14\x62\x61tch_timeout_micros\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.Int64Value\x12\x39\n\x14max_enqueued_batches\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.Int64Value\x12\x36\n\x11num_batch_threads\x18\x04 \x01(\x0b\x32\x1b.google.protobuf.Int64Value\x12\x36\n\x10thread_pool_name\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x1b\n\x13\x61llowed_batch_sizes\x18\x06 \x03(\x03\x62\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,tensorflow_dot_core_dot_protobuf_dot_config__pb2.DESCRIPTOR,tensorflow_dot_core_dot_protobuf_dot_named__tensor__pb2.DESCRIPTOR,])
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_SESSIONBUNDLECONFIG = _descriptor.Descriptor(
  name='SessionBundleConfig',
  full_name='tensorflow.serving.SessionBundleConfig',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='session_target', full_name='tensorflow.serving.SessionBundleConfig.session_target', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='session_config', full_name='tensorflow.serving.SessionBundleConfig.session_config', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='batching_parameters', full_name='tensorflow.serving.SessionBundleConfig.batching_parameters', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='session_run_load_threadpool_index', full_name='tensorflow.serving.SessionBundleConfig.session_run_load_threadpool_index', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='experimental_fixed_input_tensors', full_name='tensorflow.serving.SessionBundleConfig.experimental_fixed_input_tensors', index=4,
      number=778, type=11, cpp_type=10, label=3,
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
  serialized_start=208,
  serialized_end=516,
)


_BATCHINGPARAMETERS = _descriptor.Descriptor(
  name='BatchingParameters',
  full_name='tensorflow.serving.BatchingParameters',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='max_batch_size', full_name='tensorflow.serving.BatchingParameters.max_batch_size', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='batch_timeout_micros', full_name='tensorflow.serving.BatchingParameters.batch_timeout_micros', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='max_enqueued_batches', full_name='tensorflow.serving.BatchingParameters.max_enqueued_batches', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='num_batch_threads', full_name='tensorflow.serving.BatchingParameters.num_batch_threads', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='thread_pool_name', full_name='tensorflow.serving.BatchingParameters.thread_pool_name', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='allowed_batch_sizes', full_name='tensorflow.serving.BatchingParameters.allowed_batch_sizes', index=5,
      number=6, type=3, cpp_type=2, label=3,
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
  serialized_start=519,
  serialized_end=851,
)

_SESSIONBUNDLECONFIG.fields_by_name['session_config'].message_type = tensorflow_dot_core_dot_protobuf_dot_config__pb2._CONFIGPROTO
_SESSIONBUNDLECONFIG.fields_by_name['batching_parameters'].message_type = _BATCHINGPARAMETERS
_SESSIONBUNDLECONFIG.fields_by_name['session_run_load_threadpool_index'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT32VALUE
_SESSIONBUNDLECONFIG.fields_by_name['experimental_fixed_input_tensors'].message_type = tensorflow_dot_core_dot_protobuf_dot_named__tensor__pb2._NAMEDTENSORPROTO
_BATCHINGPARAMETERS.fields_by_name['max_batch_size'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT64VALUE
_BATCHINGPARAMETERS.fields_by_name['batch_timeout_micros'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT64VALUE
_BATCHINGPARAMETERS.fields_by_name['max_enqueued_batches'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT64VALUE
_BATCHINGPARAMETERS.fields_by_name['num_batch_threads'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT64VALUE
_BATCHINGPARAMETERS.fields_by_name['thread_pool_name'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
DESCRIPTOR.message_types_by_name['SessionBundleConfig'] = _SESSIONBUNDLECONFIG
DESCRIPTOR.message_types_by_name['BatchingParameters'] = _BATCHINGPARAMETERS

SessionBundleConfig = _reflection.GeneratedProtocolMessageType('SessionBundleConfig', (_message.Message,), dict(
  DESCRIPTOR = _SESSIONBUNDLECONFIG,
  __module__ = 'tensorflow_serving.servables.tensorflow.session_bundle_config_pb2'
  # @@protoc_insertion_point(class_scope:tensorflow.serving.SessionBundleConfig)
  ))
_sym_db.RegisterMessage(SessionBundleConfig)

BatchingParameters = _reflection.GeneratedProtocolMessageType('BatchingParameters', (_message.Message,), dict(
  DESCRIPTOR = _BATCHINGPARAMETERS,
  __module__ = 'tensorflow_serving.servables.tensorflow.session_bundle_config_pb2'
  # @@protoc_insertion_point(class_scope:tensorflow.serving.BatchingParameters)
  ))
_sym_db.RegisterMessage(BatchingParameters)


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
