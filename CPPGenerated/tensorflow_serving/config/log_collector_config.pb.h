// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/config/log_collector_config.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto__INCLUDED

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
namespace serving {
class LogCollectorConfig;
class LogCollectorConfigDefaultTypeInternal;
extern LogCollectorConfigDefaultTypeInternal _LogCollectorConfig_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto

// ===================================================================

class LogCollectorConfig : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.LogCollectorConfig) */ {
 public:
  LogCollectorConfig();
  virtual ~LogCollectorConfig();

  LogCollectorConfig(const LogCollectorConfig& from);

  inline LogCollectorConfig& operator=(const LogCollectorConfig& from) {
    CopyFrom(from);
    return *this;
  }

  inline ::google::protobuf::Arena* GetArena() const PROTOBUF_FINAL {
    return GetArenaNoVirtual();
  }
  inline void* GetMaybeArenaPointer() const PROTOBUF_FINAL {
    return MaybeArenaPtr();
  }
  static const ::google::protobuf::Descriptor* descriptor();
  static const LogCollectorConfig& default_instance();

  static inline const LogCollectorConfig* internal_default_instance() {
    return reinterpret_cast<const LogCollectorConfig*>(
               &_LogCollectorConfig_default_instance_);
  }

  void UnsafeArenaSwap(LogCollectorConfig* other);
  void Swap(LogCollectorConfig* other);

  // implements Message ----------------------------------------------

  inline LogCollectorConfig* New() const PROTOBUF_FINAL { return New(NULL); }

  LogCollectorConfig* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const LogCollectorConfig& from);
  void MergeFrom(const LogCollectorConfig& from);
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
  void InternalSwap(LogCollectorConfig* other);
  protected:
  explicit LogCollectorConfig(::google::protobuf::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::google::protobuf::Arena* arena);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return _internal_metadata_.arena();
  }
  inline void* MaybeArenaPtr() const {
    return _internal_metadata_.raw_arena_ptr();
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const PROTOBUF_FINAL;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // string type = 1;
  void clear_type();
  static const int kTypeFieldNumber = 1;
  const ::std::string& type() const;
  void set_type(const ::std::string& value);
  void set_type(const char* value);
  void set_type(const char* value, size_t size);
  ::std::string* mutable_type();
  ::std::string* release_type();
  void set_allocated_type(::std::string* type);
  ::std::string* unsafe_arena_release_type();
  void unsafe_arena_set_allocated_type(
      ::std::string* type);

  // string filename_prefix = 2;
  void clear_filename_prefix();
  static const int kFilenamePrefixFieldNumber = 2;
  const ::std::string& filename_prefix() const;
  void set_filename_prefix(const ::std::string& value);
  void set_filename_prefix(const char* value);
  void set_filename_prefix(const char* value, size_t size);
  ::std::string* mutable_filename_prefix();
  ::std::string* release_filename_prefix();
  void set_allocated_filename_prefix(::std::string* filename_prefix);
  ::std::string* unsafe_arena_release_filename_prefix();
  void unsafe_arena_set_allocated_filename_prefix(
      ::std::string* filename_prefix);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.LogCollectorConfig)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::internal::ArenaStringPtr type_;
  ::google::protobuf::internal::ArenaStringPtr filename_prefix_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// LogCollectorConfig

// string type = 1;
inline void LogCollectorConfig::clear_type() {
  type_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& LogCollectorConfig::type() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogCollectorConfig.type)
  return type_.Get();
}
inline void LogCollectorConfig::set_type(const ::std::string& value) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.LogCollectorConfig.type)
}
inline void LogCollectorConfig::set_type(const char* value) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.LogCollectorConfig.type)
}
inline void LogCollectorConfig::set_type(const char* value,
    size_t size) {
  
  type_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.LogCollectorConfig.type)
}
inline ::std::string* LogCollectorConfig::mutable_type() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogCollectorConfig.type)
  return type_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* LogCollectorConfig::release_type() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogCollectorConfig.type)
  
  return type_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* LogCollectorConfig::unsafe_arena_release_type() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogCollectorConfig.type)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return type_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void LogCollectorConfig::set_allocated_type(::std::string* type) {
  if (type != NULL) {
    
  } else {
    
  }
  type_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), type,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogCollectorConfig.type)
}
inline void LogCollectorConfig::unsafe_arena_set_allocated_type(
    ::std::string* type) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (type != NULL) {
    
  } else {
    
  }
  type_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      type, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogCollectorConfig.type)
}

// string filename_prefix = 2;
inline void LogCollectorConfig::clear_filename_prefix() {
  filename_prefix_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& LogCollectorConfig::filename_prefix() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogCollectorConfig.filename_prefix)
  return filename_prefix_.Get();
}
inline void LogCollectorConfig::set_filename_prefix(const ::std::string& value) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
inline void LogCollectorConfig::set_filename_prefix(const char* value) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
inline void LogCollectorConfig::set_filename_prefix(const char* value,
    size_t size) {
  
  filename_prefix_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
inline ::std::string* LogCollectorConfig::mutable_filename_prefix() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogCollectorConfig.filename_prefix)
  return filename_prefix_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* LogCollectorConfig::release_filename_prefix() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogCollectorConfig.filename_prefix)
  
  return filename_prefix_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* LogCollectorConfig::unsafe_arena_release_filename_prefix() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.LogCollectorConfig.filename_prefix)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return filename_prefix_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void LogCollectorConfig::set_allocated_filename_prefix(::std::string* filename_prefix) {
  if (filename_prefix != NULL) {
    
  } else {
    
  }
  filename_prefix_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), filename_prefix,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogCollectorConfig.filename_prefix)
}
inline void LogCollectorConfig::unsafe_arena_set_allocated_filename_prefix(
    ::std::string* filename_prefix) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (filename_prefix != NULL) {
    
  } else {
    
  }
  filename_prefix_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      filename_prefix, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.LogCollectorConfig.filename_prefix)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fconfig_2flog_5fcollector_5fconfig_2eproto__INCLUDED