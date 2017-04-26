// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/contrib/cloud/kernels/bigquery_table_partition.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow/contrib/cloud/kernels/bigquery_table_partition.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace tensorflow {
class BigQueryTablePartitionDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<BigQueryTablePartition> {
} _BigQueryTablePartition_default_instance_;

namespace protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(BigQueryTablePartition, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(BigQueryTablePartition, start_index_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(BigQueryTablePartition, end_index_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(BigQueryTablePartition)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_BigQueryTablePartition_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow/contrib/cloud/kernels/bigquery_table_partition.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 1);
}

}  // namespace

void TableStruct::Shutdown() {
  _BigQueryTablePartition_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  _BigQueryTablePartition_default_instance_.DefaultConstruct();
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n\?tensorflow/contrib/cloud/kernels/bigqu"
      "ery_table_partition.proto\022\ntensorflow\"@\n"
      "\026BigQueryTablePartition\022\023\n\013start_index\030\001"
      " \001(\003\022\021\n\tend_index\030\002 \001(\003b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 151);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow/contrib/cloud/kernels/bigquery_table_partition.proto", &protobuf_RegisterTypes);
  ::google::protobuf::internal::OnShutdown(&TableStruct::Shutdown);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;

}  // namespace protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int BigQueryTablePartition::kStartIndexFieldNumber;
const int BigQueryTablePartition::kEndIndexFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

BigQueryTablePartition::BigQueryTablePartition()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.BigQueryTablePartition)
}
BigQueryTablePartition::BigQueryTablePartition(const BigQueryTablePartition& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::memcpy(&start_index_, &from.start_index_,
    reinterpret_cast<char*>(&end_index_) -
    reinterpret_cast<char*>(&start_index_) + sizeof(end_index_));
  // @@protoc_insertion_point(copy_constructor:tensorflow.BigQueryTablePartition)
}

void BigQueryTablePartition::SharedCtor() {
  ::memset(&start_index_, 0, reinterpret_cast<char*>(&end_index_) -
    reinterpret_cast<char*>(&start_index_) + sizeof(end_index_));
  _cached_size_ = 0;
}

BigQueryTablePartition::~BigQueryTablePartition() {
  // @@protoc_insertion_point(destructor:tensorflow.BigQueryTablePartition)
  SharedDtor();
}

void BigQueryTablePartition::SharedDtor() {
}

void BigQueryTablePartition::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* BigQueryTablePartition::descriptor() {
  protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::file_level_metadata[0].descriptor;
}

const BigQueryTablePartition& BigQueryTablePartition::default_instance() {
  protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::InitDefaults();
  return *internal_default_instance();
}

BigQueryTablePartition* BigQueryTablePartition::New(::google::protobuf::Arena* arena) const {
  BigQueryTablePartition* n = new BigQueryTablePartition;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void BigQueryTablePartition::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.BigQueryTablePartition)
  ::memset(&start_index_, 0, reinterpret_cast<char*>(&end_index_) -
    reinterpret_cast<char*>(&start_index_) + sizeof(end_index_));
}

bool BigQueryTablePartition::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.BigQueryTablePartition)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // int64 start_index = 1;
      case 1: {
        if (tag == 8u) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int64, ::google::protobuf::internal::WireFormatLite::TYPE_INT64>(
                 input, &start_index_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // int64 end_index = 2;
      case 2: {
        if (tag == 16u) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int64, ::google::protobuf::internal::WireFormatLite::TYPE_INT64>(
                 input, &end_index_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:tensorflow.BigQueryTablePartition)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.BigQueryTablePartition)
  return false;
#undef DO_
}

void BigQueryTablePartition::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.BigQueryTablePartition)
  // int64 start_index = 1;
  if (this->start_index() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt64(1, this->start_index(), output);
  }

  // int64 end_index = 2;
  if (this->end_index() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt64(2, this->end_index(), output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.BigQueryTablePartition)
}

::google::protobuf::uint8* BigQueryTablePartition::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.BigQueryTablePartition)
  // int64 start_index = 1;
  if (this->start_index() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt64ToArray(1, this->start_index(), target);
  }

  // int64 end_index = 2;
  if (this->end_index() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt64ToArray(2, this->end_index(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.BigQueryTablePartition)
  return target;
}

size_t BigQueryTablePartition::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.BigQueryTablePartition)
  size_t total_size = 0;

  // int64 start_index = 1;
  if (this->start_index() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int64Size(
        this->start_index());
  }

  // int64 end_index = 2;
  if (this->end_index() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int64Size(
        this->end_index());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void BigQueryTablePartition::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.BigQueryTablePartition)
  GOOGLE_DCHECK_NE(&from, this);
  const BigQueryTablePartition* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const BigQueryTablePartition>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.BigQueryTablePartition)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.BigQueryTablePartition)
    MergeFrom(*source);
  }
}

void BigQueryTablePartition::MergeFrom(const BigQueryTablePartition& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.BigQueryTablePartition)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.start_index() != 0) {
    set_start_index(from.start_index());
  }
  if (from.end_index() != 0) {
    set_end_index(from.end_index());
  }
}

void BigQueryTablePartition::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.BigQueryTablePartition)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void BigQueryTablePartition::CopyFrom(const BigQueryTablePartition& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.BigQueryTablePartition)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool BigQueryTablePartition::IsInitialized() const {
  return true;
}

void BigQueryTablePartition::Swap(BigQueryTablePartition* other) {
  if (other == this) return;
  InternalSwap(other);
}
void BigQueryTablePartition::InternalSwap(BigQueryTablePartition* other) {
  std::swap(start_index_, other->start_index_);
  std::swap(end_index_, other->end_index_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata BigQueryTablePartition::GetMetadata() const {
  protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// BigQueryTablePartition

// int64 start_index = 1;
void BigQueryTablePartition::clear_start_index() {
  start_index_ = GOOGLE_LONGLONG(0);
}
::google::protobuf::int64 BigQueryTablePartition::start_index() const {
  // @@protoc_insertion_point(field_get:tensorflow.BigQueryTablePartition.start_index)
  return start_index_;
}
void BigQueryTablePartition::set_start_index(::google::protobuf::int64 value) {
  
  start_index_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.BigQueryTablePartition.start_index)
}

// int64 end_index = 2;
void BigQueryTablePartition::clear_end_index() {
  end_index_ = GOOGLE_LONGLONG(0);
}
::google::protobuf::int64 BigQueryTablePartition::end_index() const {
  // @@protoc_insertion_point(field_get:tensorflow.BigQueryTablePartition.end_index)
  return end_index_;
}
void BigQueryTablePartition::set_end_index(::google::protobuf::int64 value) {
  
  end_index_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.BigQueryTablePartition.end_index)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
