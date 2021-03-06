// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/servables/tensorflow/saved_model_bundle_source_adapter.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto__INCLUDED

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
class SavedModelBundleSourceAdapterConfig;
class SavedModelBundleSourceAdapterConfigDefaultTypeInternal;
extern SavedModelBundleSourceAdapterConfigDefaultTypeInternal _SavedModelBundleSourceAdapterConfig_default_instance_;
class SessionBundleConfig;
class SessionBundleConfigDefaultTypeInternal;
extern SessionBundleConfigDefaultTypeInternal _SessionBundleConfig_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto

// ===================================================================

class SavedModelBundleSourceAdapterConfig : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.SavedModelBundleSourceAdapterConfig) */ {
 public:
  SavedModelBundleSourceAdapterConfig();
  virtual ~SavedModelBundleSourceAdapterConfig();

  SavedModelBundleSourceAdapterConfig(const SavedModelBundleSourceAdapterConfig& from);

  inline SavedModelBundleSourceAdapterConfig& operator=(const SavedModelBundleSourceAdapterConfig& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const SavedModelBundleSourceAdapterConfig& default_instance();

  static inline const SavedModelBundleSourceAdapterConfig* internal_default_instance() {
    return reinterpret_cast<const SavedModelBundleSourceAdapterConfig*>(
               &_SavedModelBundleSourceAdapterConfig_default_instance_);
  }

  void Swap(SavedModelBundleSourceAdapterConfig* other);

  // implements Message ----------------------------------------------

  inline SavedModelBundleSourceAdapterConfig* New() const PROTOBUF_FINAL { return New(NULL); }

  SavedModelBundleSourceAdapterConfig* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const SavedModelBundleSourceAdapterConfig& from);
  void MergeFrom(const SavedModelBundleSourceAdapterConfig& from);
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
  void InternalSwap(SavedModelBundleSourceAdapterConfig* other);
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

  // .tensorflow.serving.SessionBundleConfig legacy_config = 1000;
  bool has_legacy_config() const;
  void clear_legacy_config();
  static const int kLegacyConfigFieldNumber = 1000;
  const ::tensorflow::serving::SessionBundleConfig& legacy_config() const;
  ::tensorflow::serving::SessionBundleConfig* mutable_legacy_config();
  ::tensorflow::serving::SessionBundleConfig* release_legacy_config();
  void set_allocated_legacy_config(::tensorflow::serving::SessionBundleConfig* legacy_config);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.SavedModelBundleSourceAdapterConfig)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::tensorflow::serving::SessionBundleConfig* legacy_config_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// SavedModelBundleSourceAdapterConfig

// .tensorflow.serving.SessionBundleConfig legacy_config = 1000;
inline bool SavedModelBundleSourceAdapterConfig::has_legacy_config() const {
  return this != internal_default_instance() && legacy_config_ != NULL;
}
inline void SavedModelBundleSourceAdapterConfig::clear_legacy_config() {
  if (GetArenaNoVirtual() == NULL && legacy_config_ != NULL) delete legacy_config_;
  legacy_config_ = NULL;
}
inline const ::tensorflow::serving::SessionBundleConfig& SavedModelBundleSourceAdapterConfig::legacy_config() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.SavedModelBundleSourceAdapterConfig.legacy_config)
  return legacy_config_ != NULL ? *legacy_config_
                         : *::tensorflow::serving::SessionBundleConfig::internal_default_instance();
}
inline ::tensorflow::serving::SessionBundleConfig* SavedModelBundleSourceAdapterConfig::mutable_legacy_config() {
  
  if (legacy_config_ == NULL) {
    legacy_config_ = new ::tensorflow::serving::SessionBundleConfig;
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.SavedModelBundleSourceAdapterConfig.legacy_config)
  return legacy_config_;
}
inline ::tensorflow::serving::SessionBundleConfig* SavedModelBundleSourceAdapterConfig::release_legacy_config() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.SavedModelBundleSourceAdapterConfig.legacy_config)
  
  ::tensorflow::serving::SessionBundleConfig* temp = legacy_config_;
  legacy_config_ = NULL;
  return temp;
}
inline void SavedModelBundleSourceAdapterConfig::set_allocated_legacy_config(::tensorflow::serving::SessionBundleConfig* legacy_config) {
  delete legacy_config_;
  legacy_config_ = legacy_config;
  if (legacy_config) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.SavedModelBundleSourceAdapterConfig.legacy_config)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fservables_2ftensorflow_2fsaved_5fmodel_5fbundle_5fsource_5fadapter_2eproto__INCLUDED
