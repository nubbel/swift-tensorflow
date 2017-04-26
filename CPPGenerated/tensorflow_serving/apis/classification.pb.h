// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow_serving/apis/classification.proto

#ifndef PROTOBUF_tensorflow_5fserving_2fapis_2fclassification_2eproto__INCLUDED
#define PROTOBUF_tensorflow_5fserving_2fapis_2fclassification_2eproto__INCLUDED

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
#include "tensorflow_serving/apis/input.pb.h"
#include "tensorflow_serving/apis/model.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
namespace serving {
class Class;
class ClassDefaultTypeInternal;
extern ClassDefaultTypeInternal _Class_default_instance_;
class ClassificationRequest;
class ClassificationRequestDefaultTypeInternal;
extern ClassificationRequestDefaultTypeInternal _ClassificationRequest_default_instance_;
class ClassificationResponse;
class ClassificationResponseDefaultTypeInternal;
extern ClassificationResponseDefaultTypeInternal _ClassificationResponse_default_instance_;
class ClassificationResult;
class ClassificationResultDefaultTypeInternal;
extern ClassificationResultDefaultTypeInternal _ClassificationResult_default_instance_;
class Classifications;
class ClassificationsDefaultTypeInternal;
extern ClassificationsDefaultTypeInternal _Classifications_default_instance_;
class ExampleList;
class ExampleListDefaultTypeInternal;
extern ExampleListDefaultTypeInternal _ExampleList_default_instance_;
class ExampleListWithContext;
class ExampleListWithContextDefaultTypeInternal;
extern ExampleListWithContextDefaultTypeInternal _ExampleListWithContext_default_instance_;
class Input;
class InputDefaultTypeInternal;
extern InputDefaultTypeInternal _Input_default_instance_;
class ModelSpec;
class ModelSpecDefaultTypeInternal;
extern ModelSpecDefaultTypeInternal _ModelSpec_default_instance_;
}  // namespace serving
}  // namespace tensorflow

namespace tensorflow {
namespace serving {

namespace protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto

// ===================================================================

class Class : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.Class) */ {
 public:
  Class();
  virtual ~Class();

  Class(const Class& from);

  inline Class& operator=(const Class& from) {
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
  static const Class& default_instance();

  static inline const Class* internal_default_instance() {
    return reinterpret_cast<const Class*>(
               &_Class_default_instance_);
  }

  void UnsafeArenaSwap(Class* other);
  void Swap(Class* other);

  // implements Message ----------------------------------------------

  inline Class* New() const PROTOBUF_FINAL { return New(NULL); }

  Class* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Class& from);
  void MergeFrom(const Class& from);
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
  void InternalSwap(Class* other);
  protected:
  explicit Class(::google::protobuf::Arena* arena);
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

  // string label = 1;
  void clear_label();
  static const int kLabelFieldNumber = 1;
  const ::std::string& label() const;
  void set_label(const ::std::string& value);
  void set_label(const char* value);
  void set_label(const char* value, size_t size);
  ::std::string* mutable_label();
  ::std::string* release_label();
  void set_allocated_label(::std::string* label);
  ::std::string* unsafe_arena_release_label();
  void unsafe_arena_set_allocated_label(
      ::std::string* label);

  // float score = 2;
  void clear_score();
  static const int kScoreFieldNumber = 2;
  float score() const;
  void set_score(float value);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.Class)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::internal::ArenaStringPtr label_;
  float score_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Classifications : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.Classifications) */ {
 public:
  Classifications();
  virtual ~Classifications();

  Classifications(const Classifications& from);

  inline Classifications& operator=(const Classifications& from) {
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
  static const Classifications& default_instance();

  static inline const Classifications* internal_default_instance() {
    return reinterpret_cast<const Classifications*>(
               &_Classifications_default_instance_);
  }

  void UnsafeArenaSwap(Classifications* other);
  void Swap(Classifications* other);

  // implements Message ----------------------------------------------

  inline Classifications* New() const PROTOBUF_FINAL { return New(NULL); }

  Classifications* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Classifications& from);
  void MergeFrom(const Classifications& from);
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
  void InternalSwap(Classifications* other);
  protected:
  explicit Classifications(::google::protobuf::Arena* arena);
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

  // repeated .tensorflow.serving.Class classes = 1;
  int classes_size() const;
  void clear_classes();
  static const int kClassesFieldNumber = 1;
  const ::tensorflow::serving::Class& classes(int index) const;
  ::tensorflow::serving::Class* mutable_classes(int index);
  ::tensorflow::serving::Class* add_classes();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Class >*
      mutable_classes();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Class >&
      classes() const;

  // @@protoc_insertion_point(class_scope:tensorflow.serving.Classifications)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Class > classes_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class ClassificationResult : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.ClassificationResult) */ {
 public:
  ClassificationResult();
  virtual ~ClassificationResult();

  ClassificationResult(const ClassificationResult& from);

  inline ClassificationResult& operator=(const ClassificationResult& from) {
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
  static const ClassificationResult& default_instance();

  static inline const ClassificationResult* internal_default_instance() {
    return reinterpret_cast<const ClassificationResult*>(
               &_ClassificationResult_default_instance_);
  }

  void UnsafeArenaSwap(ClassificationResult* other);
  void Swap(ClassificationResult* other);

  // implements Message ----------------------------------------------

  inline ClassificationResult* New() const PROTOBUF_FINAL { return New(NULL); }

  ClassificationResult* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const ClassificationResult& from);
  void MergeFrom(const ClassificationResult& from);
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
  void InternalSwap(ClassificationResult* other);
  protected:
  explicit ClassificationResult(::google::protobuf::Arena* arena);
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

  // repeated .tensorflow.serving.Classifications classifications = 1;
  int classifications_size() const;
  void clear_classifications();
  static const int kClassificationsFieldNumber = 1;
  const ::tensorflow::serving::Classifications& classifications(int index) const;
  ::tensorflow::serving::Classifications* mutable_classifications(int index);
  ::tensorflow::serving::Classifications* add_classifications();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Classifications >*
      mutable_classifications();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Classifications >&
      classifications() const;

  // @@protoc_insertion_point(class_scope:tensorflow.serving.ClassificationResult)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Classifications > classifications_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class ClassificationRequest : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.ClassificationRequest) */ {
 public:
  ClassificationRequest();
  virtual ~ClassificationRequest();

  ClassificationRequest(const ClassificationRequest& from);

  inline ClassificationRequest& operator=(const ClassificationRequest& from) {
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
  static const ClassificationRequest& default_instance();

  static inline const ClassificationRequest* internal_default_instance() {
    return reinterpret_cast<const ClassificationRequest*>(
               &_ClassificationRequest_default_instance_);
  }

  void UnsafeArenaSwap(ClassificationRequest* other);
  void Swap(ClassificationRequest* other);

  // implements Message ----------------------------------------------

  inline ClassificationRequest* New() const PROTOBUF_FINAL { return New(NULL); }

  ClassificationRequest* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const ClassificationRequest& from);
  void MergeFrom(const ClassificationRequest& from);
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
  void InternalSwap(ClassificationRequest* other);
  protected:
  explicit ClassificationRequest(::google::protobuf::Arena* arena);
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

  // .tensorflow.serving.Input input = 2;
  bool has_input() const;
  void clear_input();
  static const int kInputFieldNumber = 2;
  private:
  void _slow_mutable_input();
  void _slow_set_allocated_input(
      ::google::protobuf::Arena* message_arena, ::tensorflow::serving::Input** input);
  ::tensorflow::serving::Input* _slow_release_input();
  public:
  const ::tensorflow::serving::Input& input() const;
  ::tensorflow::serving::Input* mutable_input();
  ::tensorflow::serving::Input* release_input();
  void set_allocated_input(::tensorflow::serving::Input* input);
  ::tensorflow::serving::Input* unsafe_arena_release_input();
  void unsafe_arena_set_allocated_input(
      ::tensorflow::serving::Input* input);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.ClassificationRequest)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::tensorflow::serving::ModelSpec* model_spec_;
  ::tensorflow::serving::Input* input_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class ClassificationResponse : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.serving.ClassificationResponse) */ {
 public:
  ClassificationResponse();
  virtual ~ClassificationResponse();

  ClassificationResponse(const ClassificationResponse& from);

  inline ClassificationResponse& operator=(const ClassificationResponse& from) {
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
  static const ClassificationResponse& default_instance();

  static inline const ClassificationResponse* internal_default_instance() {
    return reinterpret_cast<const ClassificationResponse*>(
               &_ClassificationResponse_default_instance_);
  }

  void UnsafeArenaSwap(ClassificationResponse* other);
  void Swap(ClassificationResponse* other);

  // implements Message ----------------------------------------------

  inline ClassificationResponse* New() const PROTOBUF_FINAL { return New(NULL); }

  ClassificationResponse* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const ClassificationResponse& from);
  void MergeFrom(const ClassificationResponse& from);
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
  void InternalSwap(ClassificationResponse* other);
  protected:
  explicit ClassificationResponse(::google::protobuf::Arena* arena);
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

  // .tensorflow.serving.ClassificationResult result = 1;
  bool has_result() const;
  void clear_result();
  static const int kResultFieldNumber = 1;
  private:
  void _slow_mutable_result();
  void _slow_set_allocated_result(
      ::google::protobuf::Arena* message_arena, ::tensorflow::serving::ClassificationResult** result);
  ::tensorflow::serving::ClassificationResult* _slow_release_result();
  public:
  const ::tensorflow::serving::ClassificationResult& result() const;
  ::tensorflow::serving::ClassificationResult* mutable_result();
  ::tensorflow::serving::ClassificationResult* release_result();
  void set_allocated_result(::tensorflow::serving::ClassificationResult* result);
  ::tensorflow::serving::ClassificationResult* unsafe_arena_release_result();
  void unsafe_arena_set_allocated_result(
      ::tensorflow::serving::ClassificationResult* result);

  // @@protoc_insertion_point(class_scope:tensorflow.serving.ClassificationResponse)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::tensorflow::serving::ClassificationResult* result_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_5fserving_2fapis_2fclassification_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// Class

// string label = 1;
inline void Class::clear_label() {
  label_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& Class::label() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.Class.label)
  return label_.Get();
}
inline void Class::set_label(const ::std::string& value) {
  
  label_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.serving.Class.label)
}
inline void Class::set_label(const char* value) {
  
  label_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.serving.Class.label)
}
inline void Class::set_label(const char* value,
    size_t size) {
  
  label_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.serving.Class.label)
}
inline ::std::string* Class::mutable_label() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.Class.label)
  return label_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Class::release_label() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.Class.label)
  
  return label_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Class::unsafe_arena_release_label() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.serving.Class.label)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return label_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void Class::set_allocated_label(::std::string* label) {
  if (label != NULL) {
    
  } else {
    
  }
  label_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), label,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.Class.label)
}
inline void Class::unsafe_arena_set_allocated_label(
    ::std::string* label) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (label != NULL) {
    
  } else {
    
  }
  label_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      label, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.serving.Class.label)
}

// float score = 2;
inline void Class::clear_score() {
  score_ = 0;
}
inline float Class::score() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.Class.score)
  return score_;
}
inline void Class::set_score(float value) {
  
  score_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.serving.Class.score)
}

// -------------------------------------------------------------------

// Classifications

// repeated .tensorflow.serving.Class classes = 1;
inline int Classifications::classes_size() const {
  return classes_.size();
}
inline void Classifications::clear_classes() {
  classes_.Clear();
}
inline const ::tensorflow::serving::Class& Classifications::classes(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.Classifications.classes)
  return classes_.Get(index);
}
inline ::tensorflow::serving::Class* Classifications::mutable_classes(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.Classifications.classes)
  return classes_.Mutable(index);
}
inline ::tensorflow::serving::Class* Classifications::add_classes() {
  // @@protoc_insertion_point(field_add:tensorflow.serving.Classifications.classes)
  return classes_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Class >*
Classifications::mutable_classes() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.serving.Classifications.classes)
  return &classes_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Class >&
Classifications::classes() const {
  // @@protoc_insertion_point(field_list:tensorflow.serving.Classifications.classes)
  return classes_;
}

// -------------------------------------------------------------------

// ClassificationResult

// repeated .tensorflow.serving.Classifications classifications = 1;
inline int ClassificationResult::classifications_size() const {
  return classifications_.size();
}
inline void ClassificationResult::clear_classifications() {
  classifications_.Clear();
}
inline const ::tensorflow::serving::Classifications& ClassificationResult::classifications(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ClassificationResult.classifications)
  return classifications_.Get(index);
}
inline ::tensorflow::serving::Classifications* ClassificationResult::mutable_classifications(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ClassificationResult.classifications)
  return classifications_.Mutable(index);
}
inline ::tensorflow::serving::Classifications* ClassificationResult::add_classifications() {
  // @@protoc_insertion_point(field_add:tensorflow.serving.ClassificationResult.classifications)
  return classifications_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Classifications >*
ClassificationResult::mutable_classifications() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.serving.ClassificationResult.classifications)
  return &classifications_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::serving::Classifications >&
ClassificationResult::classifications() const {
  // @@protoc_insertion_point(field_list:tensorflow.serving.ClassificationResult.classifications)
  return classifications_;
}

// -------------------------------------------------------------------

// ClassificationRequest

// .tensorflow.serving.ModelSpec model_spec = 1;
inline bool ClassificationRequest::has_model_spec() const {
  return this != internal_default_instance() && model_spec_ != NULL;
}
inline void ClassificationRequest::clear_model_spec() {
  if (GetArenaNoVirtual() == NULL && model_spec_ != NULL) delete model_spec_;
  model_spec_ = NULL;
}
inline const ::tensorflow::serving::ModelSpec& ClassificationRequest::model_spec() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ClassificationRequest.model_spec)
  return model_spec_ != NULL ? *model_spec_
                         : *::tensorflow::serving::ModelSpec::internal_default_instance();
}
inline ::tensorflow::serving::ModelSpec* ClassificationRequest::mutable_model_spec() {
  
  if (model_spec_ == NULL) {
    _slow_mutable_model_spec();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ClassificationRequest.model_spec)
  return model_spec_;
}
inline ::tensorflow::serving::ModelSpec* ClassificationRequest::release_model_spec() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ClassificationRequest.model_spec)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_model_spec();
  } else {
    ::tensorflow::serving::ModelSpec* temp = model_spec_;
    model_spec_ = NULL;
    return temp;
  }
}
inline  void ClassificationRequest::set_allocated_model_spec(::tensorflow::serving::ModelSpec* model_spec) {
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
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ClassificationRequest.model_spec)
}

// .tensorflow.serving.Input input = 2;
inline bool ClassificationRequest::has_input() const {
  return this != internal_default_instance() && input_ != NULL;
}
inline void ClassificationRequest::clear_input() {
  if (GetArenaNoVirtual() == NULL && input_ != NULL) delete input_;
  input_ = NULL;
}
inline const ::tensorflow::serving::Input& ClassificationRequest::input() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ClassificationRequest.input)
  return input_ != NULL ? *input_
                         : *::tensorflow::serving::Input::internal_default_instance();
}
inline ::tensorflow::serving::Input* ClassificationRequest::mutable_input() {
  
  if (input_ == NULL) {
    _slow_mutable_input();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ClassificationRequest.input)
  return input_;
}
inline ::tensorflow::serving::Input* ClassificationRequest::release_input() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ClassificationRequest.input)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_input();
  } else {
    ::tensorflow::serving::Input* temp = input_;
    input_ = NULL;
    return temp;
  }
}
inline  void ClassificationRequest::set_allocated_input(::tensorflow::serving::Input* input) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete input_;
  }
  if (input != NULL) {
    _slow_set_allocated_input(message_arena, &input);
  }
  input_ = input;
  if (input) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ClassificationRequest.input)
}

// -------------------------------------------------------------------

// ClassificationResponse

// .tensorflow.serving.ClassificationResult result = 1;
inline bool ClassificationResponse::has_result() const {
  return this != internal_default_instance() && result_ != NULL;
}
inline void ClassificationResponse::clear_result() {
  if (GetArenaNoVirtual() == NULL && result_ != NULL) delete result_;
  result_ = NULL;
}
inline const ::tensorflow::serving::ClassificationResult& ClassificationResponse::result() const {
  // @@protoc_insertion_point(field_get:tensorflow.serving.ClassificationResponse.result)
  return result_ != NULL ? *result_
                         : *::tensorflow::serving::ClassificationResult::internal_default_instance();
}
inline ::tensorflow::serving::ClassificationResult* ClassificationResponse::mutable_result() {
  
  if (result_ == NULL) {
    _slow_mutable_result();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.serving.ClassificationResponse.result)
  return result_;
}
inline ::tensorflow::serving::ClassificationResult* ClassificationResponse::release_result() {
  // @@protoc_insertion_point(field_release:tensorflow.serving.ClassificationResponse.result)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_result();
  } else {
    ::tensorflow::serving::ClassificationResult* temp = result_;
    result_ = NULL;
    return temp;
  }
}
inline  void ClassificationResponse::set_allocated_result(::tensorflow::serving::ClassificationResult* result) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete result_;
  }
  if (result != NULL) {
    _slow_set_allocated_result(message_arena, &result);
  }
  result_ = result;
  if (result) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.serving.ClassificationResponse.result)
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

#endif  // PROTOBUF_tensorflow_5fserving_2fapis_2fclassification_2eproto__INCLUDED
