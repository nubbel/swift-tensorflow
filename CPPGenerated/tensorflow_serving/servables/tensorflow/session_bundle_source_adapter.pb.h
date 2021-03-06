// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/servables/tensorflow/session_bundle_source_adapter.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto__INCLUDED

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
#include "tensorflow_serving/servables/tensorflow/session_bundle_config.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
namespace serving {
class BatchingParameters;
class BatchingParametersDefaultTypeInternal;
extern BatchingParametersDefaultTypeInternal _BatchingParameters_default_instance_;
class SessionBundleConfig;
class SessionBundleConfigDefaultTypeInternal;
extern SessionBundleConfigDefaultTypeInternal _SessionBundleConfig_default_instance_;
class SessionBundleSourceAdapterConfig;
class SessionBundleSourceAdapterConfigDefaultTypeInternal;
extern SessionBundleSourceAdapterConfigDefaultTypeInternal _SessionBundleSourceAdapterConfig_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto

// ===================================================================

class SessionBundleSourceAdapterConfig : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.SessionBundleSourceAdapterConfig) */ {
 public:
  SessionBundleSourceAdapterConfig();
  virtual ~SessionBundleSourceAdapterConfig();

  SessionBundleSourceAdapterConfig(const SessionBundleSourceAdapterConfig& from);

  inline SessionBundleSourceAdapterConfig& operator=(const SessionBundleSourceAdapterConfig& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const SessionBundleSourceAdapterConfig& default_instance();

  static inline const SessionBundleSourceAdapterConfig* internal_default_instance() {
    return reinterpret_cast<const SessionBundleSourceAdapterConfig*>(
               &_SessionBundleSourceAdapterConfig_default_instance_);
  }

  void Swap(SessionBundleSourceAdapterConfig* other);

  // implements Message ----------------------------------------------

  inline SessionBundleSourceAdapterConfig* New() const PROTOBUF_FINAL { return New(NULL); }

  SessionBundleSourceAdapterConfig* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const SessionBundleSourceAdapterConfig& from);
  void MergeFrom(const SessionBundleSourceAdapterConfig& from);
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
  void InternalSwap(SessionBundleSourceAdapterConfig* other);
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

  // .tensorflow.serving.SessionBundleConfig config = 1;
  bool has_config() const;
  void clear_config();
  static const int kConfigFieldNumber = 1;
  const ::tensorflow::serving::SessionBundleConfig& config() const;
  ::tensorflow::serving::SessionBundleConfig* mutable_config();
  ::tensorflow::serving::SessionBundleConfig* release_config();
  void set_allocated_config(::tensorflow::serving::SessionBundleConfig* config);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.SessionBundleSourceAdapterConfig)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::tensorflow::serving::SessionBundleConfig* config_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// SessionBundleSourceAdapterConfig

// .tensorflow.serving.SessionBundleConfig config = 1;
inline bool SessionBundleSourceAdapterConfig::has_config() const {
  return this != internal_default_instance() && config_ != NULL;
}
inline void SessionBundleSourceAdapterConfig::clear_config() {
  if (GetArenaNoVirtual() == NULL && config_ != NULL) delete config_;
  config_ = NULL;
}
inline const ::tensorflow::serving::SessionBundleConfig& SessionBundleSourceAdapterConfig::config() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.SessionBundleSourceAdapterConfig.config)
  return config_ != NULL ? *config_
                         : *::tensorflow::serving::SessionBundleConfig::internal_default_instance();
}
inline ::tensorflow::serving::SessionBundleConfig* SessionBundleSourceAdapterConfig::mutable_config() {
  
  if (config_ == NULL) {
    config_ = new ::tensorflow::serving::SessionBundleConfig;
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.SessionBundleSourceAdapterConfig.config)
  return config_;
}
inline ::tensorflow::serving::SessionBundleConfig* SessionBundleSourceAdapterConfig::release_config() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.SessionBundleSourceAdapterConfig.config)
  
  ::tensorflow::serving::SessionBundleConfig* temp = config_;
  config_ = NULL;
  return temp;
}
inline void SessionBundleSourceAdapterConfig::set_allocated_config(::tensorflow::serving::SessionBundleConfig* config) {
  delete config_;
  config_ = config;
  if (config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.SessionBundleSourceAdapterConfig.config)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsession_5fbundle_5fsource_5fadapter_2eproto__INCLUDED
