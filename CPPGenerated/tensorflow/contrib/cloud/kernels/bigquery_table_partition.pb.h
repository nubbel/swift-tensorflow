// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/contrib/cloud/kernels/bigquery_table_partition.proto

#ifndef PROTOBUF_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto__INCLUDED
#define PROTOBUF_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3002000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3002000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
namespace tensorflow {
class BigQueryTablePartition;
class BigQueryTablePartitionDefaultTypeInternal;
extern BigQueryTablePartitionDefaultTypeInternal _BigQueryTablePartition_default_instance_;
}  // namespace tensorflow

namespace tensorflow {

namespace protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto

// ===================================================================

class BigQueryTablePartition : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.BigQueryTablePartition) */ {
 public:
  BigQueryTablePartition();
  virtual ~BigQueryTablePartition();

  BigQueryTablePartition(const BigQueryTablePartition& from);

  inline BigQueryTablePartition& operator=(const BigQueryTablePartition& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const BigQueryTablePartition& default_instance();

  static inline const BigQueryTablePartition* internal_default_instance() {
    return reinterpret_cast<const BigQueryTablePartition*>(
               &_BigQueryTablePartition_default_instance_);
  }

  void Swap(BigQueryTablePartition* other);

  // implements Message ----------------------------------------------

  inline BigQueryTablePartition* New() const PROTOBUF_FINAL { return New(NULL); }

  BigQueryTablePartition* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const BigQueryTablePartition& from);
  void MergeFrom(const BigQueryTablePartition& from);
  void Clear() PROTOBUF_FINAL;
  bool IsInitialized() const PROTOBUF_FINAL;

  size_t ByteSizeLong() const PROTOBUF_FINAL;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) PROTOBUF_FINAL;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const PROTOBUF_FINAL;
  ::google::protobuf::uint8* SerializeWithCachedSizesToArray(::google::protobuf::uint8* output)
      const PROTOBUF_FINAL {
    return InternalSerializeWithCachedSizesToArray(
        ::google::protobuf::io::CodedOutputStream::IsDefaultSerializationDeterministic(), output);
  }
  int GetCachedSize() const PROTOBUF_FINAL { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const PROTOBUF_FINAL;
  void InternalSwap(BigQueryTablePartition* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // int64 start_index = 1;
  void clear_start_index();
  static const int kStartIndexFieldNumber = 1;
  ::google::protobuf::int64 start_index() const;
  void set_start_index(::google::protobuf::int64 value);

  // int64 end_index = 2;
  void clear_end_index();
  static const int kEndIndexFieldNumber = 2;
  ::google::protobuf::int64 end_index() const;
  void set_end_index(::google::protobuf::int64 value);

  // @@protoc_insertion_point(class_scope:tensorflow.BigQueryTablePartition)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::int64 start_index_;
  ::google::protobuf::int64 end_index_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// BigQueryTablePartition

// int64 start_index = 1;
inline void BigQueryTablePartition::clear_start_index() {
  start_index_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 BigQueryTablePartition::start_index() const {
  // @@protoc_insertion_point(field_get:tensorflow.BigQueryTablePartition.start_index)
  return start_index_;
}
inline void BigQueryTablePartition::set_start_index(::google::protobuf::int64 value) {
  
  start_index_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.BigQueryTablePartition.start_index)
}

// int64 end_index = 2;
inline void BigQueryTablePartition::clear_end_index() {
  end_index_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 BigQueryTablePartition::end_index() const {
  // @@protoc_insertion_point(field_get:tensorflow.BigQueryTablePartition.end_index)
  return end_index_;
}
inline void BigQueryTablePartition::set_end_index(::google::protobuf::int64 value) {
  
  end_index_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.BigQueryTablePartition.end_index)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_2fcontrib_2fcloud_2fkernels_2fbigquery_5ftable_5fpartition_2eproto__INCLUDED
