// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/apis/predict.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fapis_2fpredict_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fapis_2fpredict_2eproto__INCLUDED

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
#include "tensorflow/core/framework/tensor.pb.h"
#include "tensorflow_serving/apis/model.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
class TensorProto;
class TensorProtoDefaultTypeInternal;
extern TensorProtoDefaultTypeInternal _TensorProto_default_instance_;
namespace serving {
class ModelSpec;
class ModelSpecDefaultTypeInternal;
extern ModelSpecDefaultTypeInternal _ModelSpec_default_instance_;
class PredictRequest;
class PredictRequestDefaultTypeInternal;
extern PredictRequestDefaultTypeInternal _PredictRequest_default_instance_;
class PredictResponse;
class PredictResponseDefaultTypeInternal;
extern PredictResponseDefaultTypeInternal _PredictResponse_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fapis_2fpredict_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fapis_2fpredict_2eproto

// ===================================================================


// -------------------------------------------------------------------

class PredictRequest : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.PredictRequest) */ {
 public:
  PredictRequest();
  virtual ~PredictRequest();

  PredictRequest(const PredictRequest& from);

  inline PredictRequest& operator=(const PredictRequest& from) {
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
  static const PredictRequest& default_instance();

  static inline const PredictRequest* internal_default_instance() {
    return reinterpret_cast<const PredictRequest*>(
               &_PredictRequest_default_instance_);
  }

  void UnsafeArenaSwap(PredictRequest* other);
  void Swap(PredictRequest* other);

  // implements Message ----------------------------------------------

  inline PredictRequest* New() const PROTOBUF_FINAL { return New(NULL); }

  PredictRequest* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const PredictRequest& from);
  void MergeFrom(const PredictRequest& from);
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
  void InternalSwap(PredictRequest* other);
  protected:
  explicit PredictRequest(::google::protobuf::Arena* arena);
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

  // map<string, .tensorflow.TensorProto> inputs = 2;
  int inputs_size() const;
  void clear_inputs();
  static const int kInputsFieldNumber = 2;
  const ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >&
      inputs() const;
  ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >*
      mutable_inputs();

  // repeated string output_filter = 3;
  int output_filter_size() const;
  void clear_output_filter();
  static const int kOutputFilterFieldNumber = 3;
  const ::std::string& output_filter(int index) const;
  ::std::string* mutable_output_filter(int index);
  void set_output_filter(int index, const ::std::string& value);
  void set_output_filter(int index, const char* value);
  void set_output_filter(int index, const char* value, size_t size);
  ::std::string* add_output_filter();
  void add_output_filter(const ::std::string& value);
  void add_output_filter(const char* value);
  void add_output_filter(const char* value, size_t size);
  const ::google::protobuf::RepeatedPtrField< ::std::string>& output_filter() const;
  ::google::protobuf::RepeatedPtrField< ::std::string>* mutable_output_filter();

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

  // @@protoc_insertion_point(class_scope:tensorflow.serving.PredictRequest)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  typedef ::google::protobuf::internal::MapEntryLite<
      ::std::string, ::tensorflow::TensorProto,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 >
      PredictRequest_InputsEntry;
  ::google::protobuf::internal::MapField<
      ::std::string, ::tensorflow::TensorProto,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 > inputs_;
  ::google::protobuf::RepeatedPtrField< ::std::string> output_filter_;
  ::tensorflow::serving::ModelSpec* model_spec_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fpredict_2eproto::TableStruct;
};
// -------------------------------------------------------------------


// -------------------------------------------------------------------

class PredictResponse : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.PredictResponse) */ {
 public:
  PredictResponse();
  virtual ~PredictResponse();

  PredictResponse(const PredictResponse& from);

  inline PredictResponse& operator=(const PredictResponse& from) {
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
  static const PredictResponse& default_instance();

  static inline const PredictResponse* internal_default_instance() {
    return reinterpret_cast<const PredictResponse*>(
               &_PredictResponse_default_instance_);
  }

  void UnsafeArenaSwap(PredictResponse* other);
  void Swap(PredictResponse* other);

  // implements Message ----------------------------------------------

  inline PredictResponse* New() const PROTOBUF_FINAL { return New(NULL); }

  PredictResponse* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const PredictResponse& from);
  void MergeFrom(const PredictResponse& from);
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
  void InternalSwap(PredictResponse* other);
  protected:
  explicit PredictResponse(::google::protobuf::Arena* arena);
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

  // map<string, .tensorflow.TensorProto> outputs = 1;
  int outputs_size() const;
  void clear_outputs();
  static const int kOutputsFieldNumber = 1;
  const ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >&
      outputs() const;
  ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >*
      mutable_outputs();

  // @@protoc_insertion_point(class_scope:tensorflow.serving.PredictResponse)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  typedef ::google::protobuf::internal::MapEntryLite<
      ::std::string, ::tensorflow::TensorProto,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 >
      PredictResponse_OutputsEntry;
  ::google::protobuf::internal::MapField<
      ::std::string, ::tensorflow::TensorProto,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_MESSAGE,
      0 > outputs_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fpredict_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// PredictRequest

// .tensorflow.serving.ModelSpec model_spec = 1;
inline bool PredictRequest::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
inline void PredictRequest::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
inline const ::tensorflow::serving::ModelSpec& PredictRequest::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.PredictRequest.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
inline ::tensorflow::serving::ModelSpec* PredictRequest::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.PredictRequest.model_spec)
  return model_spec_;
}
inline ::tensorflow::serving::ModelSpec* PredictRequest::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.PredictRequest.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
inline  void PredictRequest::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
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
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.PredictRequest.model_spec)
}

// map<string, .tensorflow.TensorProto> inputs = 2;
inline int PredictRequest::inputs_size() const {
  return inputs_.size();
}
inline void PredictRequest::clear_inputs() {
  inputs_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >&
PredictRequest::inputs() const {
  // @@protoc_insertion_point(field_map:tensorflow.serving.PredictRequest.inputs)
  return inputs_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >*
PredictRequest::mutable_inputs() {
  // @@protoc_insertion_point(field_mutable_map:tensorflow.serving.PredictRequest.inputs)
  return inputs_.MutableMap();
}

// repeated string output_filter = 3;
inline int PredictRequest::output_filter_size() const {
  return output_filter_.size();
}
inline void PredictRequest::clear_output_filter() {
  output_filter_.Clear();
}
inline const ::std::string& PredictRequest::output_filter(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.PredictRequest.output_filter)
  return output_filter_.Get(index);
}
inline ::std::string* PredictRequest::mutable_output_filter(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.PredictRequest.output_filter)
  return output_filter_.Mutable(index);
}
inline void PredictRequest::set_output_filter(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:tensorflow.serving.PredictRequest.output_filter)
  output_filter_.Mutable(index)->assign(value);
}
inline void PredictRequest::set_output_filter(int index, const char* value) {
  output_filter_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.PredictRequest.output_filter)
}
inline void PredictRequest::set_output_filter(int index, const char* value, size_t size) {
  output_filter_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.PredictRequest.output_filter)
}
inline ::std::string* PredictRequest::add_output_filter() {
  // @@protoc_insertion_point(field_add_mutable:tensorflow.serving.PredictRequest.output_filter)
  return output_filter_.Add();
}
inline void PredictRequest::add_output_filter(const ::std::string& value) {
  output_filter_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:tensorflow.serving.PredictRequest.output_filter)
}
inline void PredictRequest::add_output_filter(const char* value) {
  output_filter_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:tensorflow.serving.PredictRequest.output_filter)
}
inline void PredictRequest::add_output_filter(const char* value, size_t size) {
  output_filter_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:tensorflow.serving.PredictRequest.output_filter)
}
inline const ::google::protobuf::RepeatedPtrField< ::std::string>&
PredictRequest::output_filter() const {
  // @@protoc_insertion_point(field_list:tensorflow.serving.PredictRequest.output_filter)
  return output_filter_;
}
inline ::google::protobuf::RepeatedPtrField< ::std::string>*
PredictRequest::mutable_output_filter() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.serving.PredictRequest.output_filter)
  return &output_filter_;
}

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// PredictResponse

// map<string, .tensorflow.TensorProto> outputs = 1;
inline int PredictResponse::outputs_size() const {
  return outputs_.size();
}
inline void PredictResponse::clear_outputs() {
  outputs_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >&
PredictResponse::outputs() const {
  // @@protoc_insertion_point(field_map:tensorflow.serving.PredictResponse.outputs)
  return outputs_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::tensorflow::TensorProto >*
PredictResponse::mutable_outputs() {
  // @@protoc_insertion_point(field_mutable_map:tensorflow.serving.PredictResponse.outputs)
  return outputs_.MutableMap();
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace serving
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_5fserving_2fapis_2fpredict_2eproto__INCLUDED