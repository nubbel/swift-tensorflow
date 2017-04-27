// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/core/logging.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fcore_2flogging_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fcore_2flogging_2eproto__INCLUDED

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
#include "tensorflow_serving/apis/model.pb.h"
#include "tensorflow_serving/config/logging_config.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
namespace serving {
class LogMetadata;
class LogMetadataDefaultTypeInternal;
extern LogMetadataDefaultTypeInternal _LogMetadata_default_instance_;
class LoggingConfig;
class LoggingConfigDefaultTypeInternal;
extern LoggingConfigDefaultTypeInternal _LoggingConfig_default_instance_;
class ModelSpec;
class ModelSpecDefaultTypeInternal;
extern ModelSpecDefaultTypeInternal _ModelSpec_default_instance_;
class SamplingConfig;
class SamplingConfigDefaultTypeInternal;
extern SamplingConfigDefaultTypeInternal _SamplingConfig_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto

// ===================================================================

class LogMetadata : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.LogMetadata) */ {
 public:
  LogMetadata();
  virtual ~LogMetadata();

  LogMetadata(const LogMetadata& from);

  inline LogMetadata& operator=(const LogMetadata& from) {
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
  static const LogMetadata& default_instance();

  static inline const LogMetadata* internal_default_instance() {
    return reinterpret_cast<const LogMetadata*>(
               &_LogMetadata_default_instance_);
  }

  void UnsafeArenaSwap(LogMetadata* other);
  void Swap(LogMetadata* other);

  // implements Message ----------------------------------------------

  inline LogMetadata* New() const PROTOBUF_FINAL { return New(NULL); }

  LogMetadata* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const LogMetadata& from);
  void MergeFrom(const LogMetadata& from);
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
  void InternalSwap(LogMetadata* other);
  protected:
  explicit LogMetadata(::google::protobuf::Arena* arena);
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

  // .tensorflow.serving.ModelSpec model_spec = 1;
  bool has_model_spec() const;
  void clear_model_spec();
  static const int kModelSpecFieldNumber = 1;
  private:
  void _slow_mutable_model_spec();
  void _slow_set_allocated_model_spec(
      ::google::protobuf::Arena* message_arena, ::tensorflow::serving::ModelSpec** model_spec);
  ::tensorflow::serving::ModelSpec* _slow_release_model_spec();
  public:
  const ::tensorflow::serving::ModelSpec& model_spec() const;
  ::tensorflow::serving::ModelSpec* mutable_model_spec();
  ::tensorflow::serving::ModelSpec* release_model_spec();
  void set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec);
  ::tensorflow::serving::ModelSpec* unsafe_arena_release_model_spec();
  void unsafe_arena_set_allocated_model_spec(
      ::tensorflow::serving::ModelSpec* model_spec);

  // .tensorflow.serving.SamplingConfig sampling_config = 2;
  bool has_sampling_config() const;
  void clear_sampling_config();
  static const int kSamplingConfigFieldNumber = 2;
  private:
  void _slow_mutable_sampling_config();
  void _slow_set_allocated_sampling_config(
      ::google::protobuf::Arena* message_arena, ::tensorflow::serving::SamplingConfig** sampling_config);
  ::tensorflow::serving::SamplingConfig* _slow_release_sampling_config();
  public:
  const ::tensorflow::serving::SamplingConfig& sampling_config() const;
  ::tensorflow::serving::SamplingConfig* mutable_sampling_config();
  ::tensorflow::serving::SamplingConfig* release_sampling_config();
  void set_allocated_sampling_config(::tensorflow::serving::SamplingConfig* sampling_config);
  ::tensorflow::serving::SamplingConfig* unsafe_arena_release_sampling_config();
  void unsafe_arena_set_allocated_sampling_config(
      ::tensorflow::serving::SamplingConfig* sampling_config);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.LogMetadata)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::tensorflow::serving::ModelSpec* model_spec_;
  ::tensorflow::serving::SamplingConfig* sampling_config_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fcore_2flogging_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// LogMetadata

// .tensorflow.serving.ModelSpec model_spec = 1;
inline bool LogMetadata::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
inline void LogMetadata::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
inline const ::tensorflow::serving::ModelSpec& LogMetadata::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogMetadata.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
inline ::tensorflow::serving::ModelSpec* LogMetadata::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogMetadata.model_spec)
  return model_spec_;
}
inline ::tensorflow::serving::ModelSpec* LogMetadata::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogMetadata.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
inline  void LogMetadata::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete model_spec_;
  }
  if (model_spec != NULL) {
    _slow_set_allocated_model_spec(message_arena, &model_spec);
  }
  model_spec_ = model_spec;
  if (model_spec) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogMetadata.model_spec)
}

// .tensorflow.serving.SamplingConfig sampling_config = 2;
inline bool LogMetadata::has_sampling_config() const {
  return this != internal_default_instance() && sampling_config_ != NULL;
}
inline void LogMetadata::clear_sampling_config() {
  if (GetArenaNoVirtual() == NULL && sampling_config_ != NULL) delete sampling_config_;
  sampling_config_ = NULL;
}
inline const ::tensorflow::serving::SamplingConfig& LogMetadata::sampling_config() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.LogMetadata.sampling_config)
  return sampling_config_ != NULL ? *sampling_config_
                         : *::tensorflow::serving::SamplingConfig::internal_default_instance();
}
inline ::tensorflow::serving::SamplingConfig* LogMetadata::mutable_sampling_config() {
  
  if (sampling_config_ == NULL) {
    _slow_mutable_sampling_config();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.LogMetadata.sampling_config)
  return sampling_config_;
}
inline ::tensorflow::serving::SamplingConfig* LogMetadata::release_sampling_config() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.LogMetadata.sampling_config)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_sampling_config();
  } else {
    ::tensorflow::serving::SamplingConfig* temp = sampling_config_;
    sampling_config_ = NULL;
    return temp;
  }
}
inline  void LogMetadata::set_allocated_sampling_config(::tensorflow::serving::SamplingConfig* sampling_config) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete sampling_config_;
  }
  if (sampling_config != NULL) {
    _slow_set_allocated_sampling_config(message_arena, &sampling_config);
  }
  sampling_config_ = sampling_config;
  if (sampling_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.LogMetadata.sampling_config)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fcore_2flogging_2eproto__INCLUDED