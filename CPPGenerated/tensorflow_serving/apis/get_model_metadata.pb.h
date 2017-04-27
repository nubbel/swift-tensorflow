// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/apis/get_model_metadata.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto__INCLUDED

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
#include <google/protobuf/map.h>
#include <google/protobuf/map_field_inl.h>
#include <google/protobuf/unknown_field_set.h>
#include <google/protobuf/any.pb.h>
#include "tensorflow/core/protobuf/meta_graph.pb.h"
#include "tensorflow_serving/apis/model.pb.h"
// @@protoc_insertion_point(includes)
namespace google {
namespace protobuf {
class Any;
class AnyDefaultTypeInternal;
extern AnyDefaultTypeInternal _Any_default_instance_;
}  // namespace protobuf
}  // namespace google
namespace tensorflow {
class AssetFileDef;
class AssetFileDefDefaultTypeInternal;
extern AssetFileDefDefaultTypeInternal _AssetFileDef_default_instance_;
class CollectionDef;
class CollectionDefDefaultTypeInternal;
extern CollectionDefDefaultTypeInternal _CollectionDef_default_instance_;
class CollectionDef_AnyList;
class CollectionDef_AnyListDefaultTypeInternal;
extern CollectionDef_AnyListDefaultTypeInternal _CollectionDef_AnyList_default_instance_;
class CollectionDef_BytesList;
class CollectionDef_BytesListDefaultTypeInternal;
extern CollectionDef_BytesListDefaultTypeInternal _CollectionDef_BytesList_default_instance_;
class CollectionDef_FloatList;
class CollectionDef_FloatListDefaultTypeInternal;
extern CollectionDef_FloatListDefaultTypeInternal _CollectionDef_FloatList_default_instance_;
class CollectionDef_Int64List;
class CollectionDef_Int64ListDefaultTypeInternal;
extern CollectionDef_Int64ListDefaultTypeInternal _CollectionDef_Int64List_default_instance_;
class CollectionDef_NodeList;
class CollectionDef_NodeListDefaultTypeInternal;
extern CollectionDef_NodeListDefaultTypeInternal _CollectionDef_NodeList_default_instance_;
class MetaGraphDef;
class MetaGraphDefDefaultTypeInternal;
extern MetaGraphDefDefaultTypeInternal _MetaGraphDef_default_instance_;
class MetaGraphDef_MetaInfoDef;
class MetaGraphDef_MetaInfoDefDefaultTypeInternal;
extern MetaGraphDef_MetaInfoDefDefaultTypeInternal _MetaGraphDef_MetaInfoDef_default_instance_;
class SignatureDef;
class SignatureDefDefaultTypeInternal;
extern SignatureDefDefaultTypeInternal _SignatureDef_default_instance_;
class TensorInfo;
class TensorInfoDefaultTypeInternal;
extern TensorInfoDefaultTypeInternal _TensorInfo_default_instance_;
namespace serving {
class GetModelMetadataRequest;
class GetModelMetadataRequestDefaultTypeInternal;
extern GetModelMetadataRequestDefaultTypeInternal _GetModelMetadataRequest_default_instance_;
class GetModelMetadataResponse;
class GetModelMetadataResponseDefaultTypeInternal;
extern GetModelMetadataResponseDefaultTypeInternal _GetModelMetadataResponse_default_instance_;
class ModelSpec;
class ModelSpecDefaultTypeInternal;
extern ModelSpecDefaultTypeInternal _ModelSpec_default_instance_;
class SignatureDefMap;
class SignatureDefMapDefaultTypeInternal;
extern SignatureDefMapDefaultTypeInternal _SignatureDefMap_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto

// ===================================================================


// -------------------------------------------------------------------

class SignatureDefMap : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.SignatureDefMap) */ {
 public:
  SignatureDefMap();
  virtual ~SignatureDefMap();

  SignatureDefMap(const SignatureDefMap& from);

  inline SignatureDefMap& operator=(const SignatureDefMap& from) {
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
  static const SignatureDefMap& default_instance();

  static inline const SignatureDefMap* internal_default_instance() {
    return reinterpret_cast<const SignatureDefMap*>(
               &_SignatureDefMap_default_instance_);
  }

  void UnsafeArenaSwap(SignatureDefMap* other);
  void Swap(SignatureDefMap* other);

  // implements Message ----------------------------------------------

  inline SignatureDefMap* New() const PROTOBUF_FINAL { return New(NULL); }

  SignatureDefMap* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const SignatureDefMap& from);
  void MergeFrom(const SignatureDefMap& from);
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
  void InternalSwap(SignatureDefMap* other);
  protected:
  explicit SignatureDefMap(::google::protobuf::Arena* arena);
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

  // map<string, .tensorflow.SignatureDef> signature_def = 1;
  int signature_def_size() const;
  void clear_signature_def();
  static const int kSignatureDefFieldNumber = 1;
  const ::google::protobuf::Map< ::std::string, ::tensorflow::SignatureDef >&
      signature_def() const;
  ::google::protobuf::Map< ::std::string, ::tensorflow::SignatureDef >*
      mutable_signature_def();

  // @@protoc_insertion_point(class_scope:tensorflow.serving.SignatureDefMap)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  typedef ::google::protobuf::internal::MapEntryLite<
      ::std::string, ::tensorflow::SignatureDef,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 >
      SignatureDefMap_SignatureDefEntry;
  ::google::protobuf::internal::MapField<
      ::std::string, ::tensorflow::SignatureDef,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 > signature_def_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class GetModelMetadataRequest : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.GetModelMetadataRequest) */ {
 public:
  GetModelMetadataRequest();
  virtual ~GetModelMetadataRequest();

  GetModelMetadataRequest(const GetModelMetadataRequest& from);

  inline GetModelMetadataRequest& operator=(const GetModelMetadataRequest& from) {
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
  static const GetModelMetadataRequest& default_instance();

  static inline const GetModelMetadataRequest* internal_default_instance() {
    return reinterpret_cast<const GetModelMetadataRequest*>(
               &_GetModelMetadataRequest_default_instance_);
  }

  void UnsafeArenaSwap(GetModelMetadataRequest* other);
  void Swap(GetModelMetadataRequest* other);

  // implements Message ----------------------------------------------

  inline GetModelMetadataRequest* New() const PROTOBUF_FINAL { return New(NULL); }

  GetModelMetadataRequest* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const GetModelMetadataRequest& from);
  void MergeFrom(const GetModelMetadataRequest& from);
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
  void InternalSwap(GetModelMetadataRequest* other);
  protected:
  explicit GetModelMetadataRequest(::google::protobuf::Arena* arena);
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

  // repeated string metadata_field = 2;
  int metadata_field_size() const;
  void clear_metadata_field();
  static const int kMetadataFieldFieldNumber = 2;
  const ::std::string& metadata_field(int index) const;
  ::std::string* mutable_metadata_field(int index);
  void set_metadata_field(int index, const ::std::string& value);
  void set_metadata_field(int index, const char* value);
  void set_metadata_field(int index, const char* value, size_t size);
  ::std::string* add_metadata_field();
  void add_metadata_field(const ::std::string& value);
  void add_metadata_field(const char* value);
  void add_metadata_field(const char* value, size_t size);
  const ::google::protobuf::RepeatedPtrField< ::std::string>& metadata_field() const;
  ::google::protobuf::RepeatedPtrField< ::std::string>* mutable_metadata_field();

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

  // @@protoc_insertion_point(class_scope:tensorflow.serving.GetModelMetadataRequest)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::RepeatedPtrField< ::std::string> metadata_field_;
  ::tensorflow::serving::ModelSpec* model_spec_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto::TableStruct;
};
// -------------------------------------------------------------------


// -------------------------------------------------------------------

class GetModelMetadataResponse : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.GetModelMetadataResponse) */ {
 public:
  GetModelMetadataResponse();
  virtual ~GetModelMetadataResponse();

  GetModelMetadataResponse(const GetModelMetadataResponse& from);

  inline GetModelMetadataResponse& operator=(const GetModelMetadataResponse& from) {
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
  static const GetModelMetadataResponse& default_instance();

  static inline const GetModelMetadataResponse* internal_default_instance() {
    return reinterpret_cast<const GetModelMetadataResponse*>(
               &_GetModelMetadataResponse_default_instance_);
  }

  void UnsafeArenaSwap(GetModelMetadataResponse* other);
  void Swap(GetModelMetadataResponse* other);

  // implements Message ----------------------------------------------

  inline GetModelMetadataResponse* New() const PROTOBUF_FINAL { return New(NULL); }

  GetModelMetadataResponse* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const GetModelMetadataResponse& from);
  void MergeFrom(const GetModelMetadataResponse& from);
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
  void InternalSwap(GetModelMetadataResponse* other);
  protected:
  explicit GetModelMetadataResponse(::google::protobuf::Arena* arena);
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

  // map<string, .google.protobuf.Any> metadata = 2;
  int metadata_size() const;
  void clear_metadata();
  static const int kMetadataFieldNumber = 2;
  const ::google::protobuf::Map< ::std::string, ::google::protobuf::Any >&
      metadata() const;
  ::google::protobuf::Map< ::std::string, ::google::protobuf::Any >*
      mutable_metadata();

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

  // @@protoc_insertion_point(class_scope:tensorflow.serving.GetModelMetadataResponse)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  typedef ::google::protobuf::internal::MapEntryLite<
      ::std::string, ::google::protobuf::Any,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 >
      GetModelMetadataResponse_MetadataEntry;
  ::google::protobuf::internal::MapField<
      ::std::string, ::google::protobuf::Any,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 > metadata_;
  ::tensorflow::serving::ModelSpec* model_spec_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// SignatureDefMap

// map<string, .tensorflow.SignatureDef> signature_def = 1;
inline int SignatureDefMap::signature_def_size() const {
  return signature_def_.size();
}
inline void SignatureDefMap::clear_signature_def() {
  signature_def_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::tensorflow::SignatureDef >&
SignatureDefMap::signature_def() const {
  // @@protoc_insertion_point(field_map:tensorflow.serving.SignatureDefMap.signature_def)
  return signature_def_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::tensorflow::SignatureDef >*
SignatureDefMap::mutable_signature_def() {
  // @@protoc_insertion_point(field_mutable_map:tensorflow.serving.SignatureDefMap.signature_def)
  return signature_def_.MutableMap();
}

// -------------------------------------------------------------------

// GetModelMetadataRequest

// .tensorflow.serving.ModelSpec model_spec = 1;
inline bool GetModelMetadataRequest::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
inline void GetModelMetadataRequest::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
inline const ::tensorflow::serving::ModelSpec& GetModelMetadataRequest::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.GetModelMetadataRequest.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
inline ::tensorflow::serving::ModelSpec* GetModelMetadataRequest::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.GetModelMetadataRequest.model_spec)
  return model_spec_;
}
inline ::tensorflow::serving::ModelSpec* GetModelMetadataRequest::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.GetModelMetadataRequest.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
inline  void GetModelMetadataRequest::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
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
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.GetModelMetadataRequest.model_spec)
}

// repeated string metadata_field = 2;
inline int GetModelMetadataRequest::metadata_field_size() const {
  return metadata_field_.size();
}
inline void GetModelMetadataRequest::clear_metadata_field() {
  metadata_field_.Clear();
}
inline const ::std::string& GetModelMetadataRequest::metadata_field(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  return metadata_field_.Get(index);
}
inline ::std::string* GetModelMetadataRequest::mutable_metadata_field(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  return metadata_field_.Mutable(index);
}
inline void GetModelMetadataRequest::set_metadata_field(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  metadata_field_.Mutable(index)->assign(value);
}
inline void GetModelMetadataRequest::set_metadata_field(int index, const char* value) {
  metadata_field_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.GetModelMetadataRequest.metadata_field)
}
inline void GetModelMetadataRequest::set_metadata_field(int index, const char* value, size_t size) {
  metadata_field_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.GetModelMetadataRequest.metadata_field)
}
inline ::std::string* GetModelMetadataRequest::add_metadata_field() {
  // @@protoc_insertion_point(field_add_mutable:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  return metadata_field_.Add();
}
inline void GetModelMetadataRequest::add_metadata_field(const ::std::string& value) {
  metadata_field_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:tensorflow.serving.GetModelMetadataRequest.metadata_field)
}
inline void GetModelMetadataRequest::add_metadata_field(const char* value) {
  metadata_field_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:tensorflow.serving.GetModelMetadataRequest.metadata_field)
}
inline void GetModelMetadataRequest::add_metadata_field(const char* value, size_t size) {
  metadata_field_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:tensorflow.serving.GetModelMetadataRequest.metadata_field)
}
inline const ::google::protobuf::RepeatedPtrField< ::std::string>&
GetModelMetadataRequest::metadata_field() const {
  // @@protoc_insertion_point(field_list:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  return metadata_field_;
}
inline ::google::protobuf::RepeatedPtrField< ::std::string>*
GetModelMetadataRequest::mutable_metadata_field() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.serving.GetModelMetadataRequest.metadata_field)
  return &metadata_field_;
}

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// GetModelMetadataResponse

// .tensorflow.serving.ModelSpec model_spec = 1;
inline bool GetModelMetadataResponse::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
inline void GetModelMetadataResponse::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
inline const ::tensorflow::serving::ModelSpec& GetModelMetadataResponse::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.GetModelMetadataResponse.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
inline ::tensorflow::serving::ModelSpec* GetModelMetadataResponse::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.GetModelMetadataResponse.model_spec)
  return model_spec_;
}
inline ::tensorflow::serving::ModelSpec* GetModelMetadataResponse::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.GetModelMetadataResponse.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
inline  void GetModelMetadataResponse::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
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
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.GetModelMetadataResponse.model_spec)
}

// map<string, .google.protobuf.Any> metadata = 2;
inline int GetModelMetadataResponse::metadata_size() const {
  return metadata_.size();
}
inline void GetModelMetadataResponse::clear_metadata() {
  metadata_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::google::protobuf::Any >&
GetModelMetadataResponse::metadata() const {
  // @@protoc_insertion_point(field_map:tensorflow.serving.GetModelMetadataResponse.metadata)
  return metadata_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::google::protobuf::Any >*
GetModelMetadataResponse::mutable_metadata() {
  // @@protoc_insertion_point(field_mutable_map:tensorflow.serving.GetModelMetadataResponse.metadata)
  return metadata_.MutableMap();
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fapis_2fget_5fmodel_5fmetadata_2eproto__INCLUDED