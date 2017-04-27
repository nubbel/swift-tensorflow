// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/tools/tfprof/tfprof_log.proto

#ifndef PROTOBUF_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto__INCLUDED
#define PROTOBUF_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto__INCLUDED

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
namespace tfprof {
class OpLog;
class OpLogDefaultTypeInternal;
extern OpLogDefaultTypeInternal _OpLog_default_instance_;
class OpLogEntry;
class OpLogEntryDefaultTypeInternal;
extern OpLogEntryDefaultTypeInternal _OpLogEntry_default_instance_;
}  // namespace tfprof
}  // namespace tensorflow

namespace tensorflow {
namespace tfprof {

namespace protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto

// ===================================================================

class OpLogEntry : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfprof.OpLogEntry) */ {
 public:
  OpLogEntry();
  virtual ~OpLogEntry();

  OpLogEntry(const OpLogEntry& from);

  inline OpLogEntry& operator=(const OpLogEntry& from) {
    CopyFrom(from);
    return *this;
  }

  inline const ::google::protobuf::UnknownFieldSet& unknown_fields() const {
    return _internal_metadata_.unknown_fields();
  }

  inline ::google::protobuf::UnknownFieldSet* mutable_unknown_fields() {
    return _internal_metadata_.mutable_unknown_fields();
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const OpLogEntry& default_instance();

  static inline const OpLogEntry* internal_default_instance() {
    return reinterpret_cast<const OpLogEntry*>(
               &_OpLogEntry_default_instance_);
  }

  void Swap(OpLogEntry* other);

  // implements Message ----------------------------------------------

  inline OpLogEntry* New() const PROTOBUF_FINAL { return New(NULL); }

  OpLogEntry* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const OpLogEntry& from);
  void MergeFrom(const OpLogEntry& from);
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
  void InternalSwap(OpLogEntry* other);
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

  // repeated string types = 3;
  int types_size() const;
  void clear_types();
  static const int kTypesFieldNumber = 3;
  const ::std::string& types(int index) const;
  ::std::string* mutable_types(int index);
  void set_types(int index, const ::std::string& value);
  void set_types(int index, const char* value);
  void set_types(int index, const char* value, size_t size);
  ::std::string* add_types();
  void add_types(const ::std::string& value);
  void add_types(const char* value);
  void add_types(const char* value, size_t size);
  const ::google::protobuf::RepeatedPtrField< ::std::string>& types() const;
  ::google::protobuf::RepeatedPtrField< ::std::string>* mutable_types();

  // optional string name = 1;
  bool has_name() const;
  void clear_name();
  static const int kNameFieldNumber = 1;
  const ::std::string& name() const;
  void set_name(const ::std::string& value);
  #if LANG_CXX11
  void set_name(::std::string&& value);
  #endif
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  ::std::string* mutable_name();
  ::std::string* release_name();
  void set_allocated_name(::std::string* name);

  // optional int64 float_ops = 2;
  bool has_float_ops() const;
  void clear_float_ops();
  static const int kFloatOpsFieldNumber = 2;
  ::google::protobuf::int64 float_ops() const;
  void set_float_ops(::google::protobuf::int64 value);

  // @@protoc_insertion_point(class_scope:tensorflow.tfprof.OpLogEntry)
 private:
  void set_has_name();
  void clear_has_name();
  void set_has_float_ops();
  void clear_has_float_ops();

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::HasBits<1> _has_bits_;
  mutable int _cached_size_;
  ::google::protobuf::RepeatedPtrField< ::std::string> types_;
  ::google::protobuf::internal::ArenaStringPtr name_;
  ::google::protobuf::int64 float_ops_;
  friend struct  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class OpLog : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfprof.OpLog) */ {
 public:
  OpLog();
  virtual ~OpLog();

  OpLog(const OpLog& from);

  inline OpLog& operator=(const OpLog& from) {
    CopyFrom(from);
    return *this;
  }

  inline const ::google::protobuf::UnknownFieldSet& unknown_fields() const {
    return _internal_metadata_.unknown_fields();
  }

  inline ::google::protobuf::UnknownFieldSet* mutable_unknown_fields() {
    return _internal_metadata_.mutable_unknown_fields();
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const OpLog& default_instance();

  static inline const OpLog* internal_default_instance() {
    return reinterpret_cast<const OpLog*>(
               &_OpLog_default_instance_);
  }

  void Swap(OpLog* other);

  // implements Message ----------------------------------------------

  inline OpLog* New() const PROTOBUF_FINAL { return New(NULL); }

  OpLog* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const OpLog& from);
  void MergeFrom(const OpLog& from);
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
  void InternalSwap(OpLog* other);
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

  // repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
  int log_entries_size() const;
  void clear_log_entries();
  static const int kLogEntriesFieldNumber = 1;
  const ::tensorflow::tfprof::OpLogEntry& log_entries(int index) const;
  ::tensorflow::tfprof::OpLogEntry* mutable_log_entries(int index);
  ::tensorflow::tfprof::OpLogEntry* add_log_entries();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >*
      mutable_log_entries();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >&
      log_entries() const;

  // @@protoc_insertion_point(class_scope:tensorflow.tfprof.OpLog)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::HasBits<1> _has_bits_;
  mutable int _cached_size_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry > log_entries_;
  friend struct  protobuf_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// OpLogEntry

// optional string name = 1;
inline bool OpLogEntry::has_name() const {
  return (_has_bits_[0] & 0x00000001u) != 0;
}
inline void OpLogEntry::set_has_name() {
  _has_bits_[0] |= 0x00000001u;
}
inline void OpLogEntry::clear_has_name() {
  _has_bits_[0] &= ~0x00000001u;
}
inline void OpLogEntry::clear_name() {
  name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  clear_has_name();
}
inline const ::std::string& OpLogEntry::name() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.name)
  return name_.GetNoArena();
}
inline void OpLogEntry::set_name(const ::std::string& value) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.name)
}
#if LANG_CXX11
inline void OpLogEntry::set_name(::std::string&& value) {
  set_has_name();
  name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:tensorflow.tfprof.OpLogEntry.name)
}
#endif
inline void OpLogEntry::set_name(const char* value) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:tensorflow.tfprof.OpLogEntry.name)
}
inline void OpLogEntry::set_name(const char* value, size_t size) {
  set_has_name();
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfprof.OpLogEntry.name)
}
inline ::std::string* OpLogEntry::mutable_name() {
  set_has_name();
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLogEntry.name)
  return name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* OpLogEntry::release_name() {
  // @@protoc_insertion_point(field_release:tensorflow.tfprof.OpLogEntry.name)
  clear_has_name();
  return name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void OpLogEntry::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    set_has_name();
  } else {
    clear_has_name();
  }
  name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name);
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfprof.OpLogEntry.name)
}

// optional int64 float_ops = 2;
inline bool OpLogEntry::has_float_ops() const {
  return (_has_bits_[0] & 0x00000002u) != 0;
}
inline void OpLogEntry::set_has_float_ops() {
  _has_bits_[0] |= 0x00000002u;
}
inline void OpLogEntry::clear_has_float_ops() {
  _has_bits_[0] &= ~0x00000002u;
}
inline void OpLogEntry::clear_float_ops() {
  float_ops_ = GOOGLE_LONGLONG(0);
  clear_has_float_ops();
}
inline ::google::protobuf::int64 OpLogEntry::float_ops() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.float_ops)
  return float_ops_;
}
inline void OpLogEntry::set_float_ops(::google::protobuf::int64 value) {
  set_has_float_ops();
  float_ops_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.float_ops)
}

// repeated string types = 3;
inline int OpLogEntry::types_size() const {
  return types_.size();
}
inline void OpLogEntry::clear_types() {
  types_.Clear();
}
inline const ::std::string& OpLogEntry::types(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLogEntry.types)
  return types_.Get(index);
}
inline ::std::string* OpLogEntry::mutable_types(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLogEntry.types)
  return types_.Mutable(index);
}
inline void OpLogEntry::set_types(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:tensorflow.tfprof.OpLogEntry.types)
  types_.Mutable(index)->assign(value);
}
inline void OpLogEntry::set_types(int index, const char* value) {
  types_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:tensorflow.tfprof.OpLogEntry.types)
}
inline void OpLogEntry::set_types(int index, const char* value, size_t size) {
  types_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfprof.OpLogEntry.types)
}
inline ::std::string* OpLogEntry::add_types() {
  // @@protoc_insertion_point(field_add_mutable:tensorflow.tfprof.OpLogEntry.types)
  return types_.Add();
}
inline void OpLogEntry::add_types(const ::std::string& value) {
  types_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:tensorflow.tfprof.OpLogEntry.types)
}
inline void OpLogEntry::add_types(const char* value) {
  types_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:tensorflow.tfprof.OpLogEntry.types)
}
inline void OpLogEntry::add_types(const char* value, size_t size) {
  types_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:tensorflow.tfprof.OpLogEntry.types)
}
inline const ::google::protobuf::RepeatedPtrField< ::std::string>&
OpLogEntry::types() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfprof.OpLogEntry.types)
  return types_;
}
inline ::google::protobuf::RepeatedPtrField< ::std::string>*
OpLogEntry::mutable_types() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfprof.OpLogEntry.types)
  return &types_;
}

// -------------------------------------------------------------------

// OpLog

// repeated .tensorflow.tfprof.OpLogEntry log_entries = 1;
inline int OpLog::log_entries_size() const {
  return log_entries_.size();
}
inline void OpLog::clear_log_entries() {
  log_entries_.Clear();
}
inline const ::tensorflow::tfprof::OpLogEntry& OpLog::log_entries(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Get(index);
}
inline ::tensorflow::tfprof::OpLogEntry* OpLog::mutable_log_entries(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Mutable(index);
}
inline ::tensorflow::tfprof::OpLogEntry* OpLog::add_log_entries() {
  // @@protoc_insertion_point(field_add:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >*
OpLog::mutable_log_entries() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfprof.OpLog.log_entries)
  return &log_entries_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfprof::OpLogEntry >&
OpLog::log_entries() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfprof.OpLog.log_entries)
  return log_entries_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace tfprof
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_2ftools_2ftfprof_2ftfprof_5flog_2eproto__INCLUDED