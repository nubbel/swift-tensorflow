// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/compiler/aot/tfcompile.proto

#ifndef PROTOBUF_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto__INCLUDED
#define PROTOBUF_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto__INCLUDED

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
#include "tensorflow/core/framework/tensor_shape.pb.h"
// @@protoc_insertion_point(includes)
namespace tensorflow {
class TensorShapeProto;
class TensorShapeProtoDefaultTypeInternal;
extern TensorShapeProtoDefaultTypeInternal _TensorShapeProto_default_instance_;
class TensorShapeProto_Dim;
class TensorShapeProto_DimDefaultTypeInternal;
extern TensorShapeProto_DimDefaultTypeInternal _TensorShapeProto_Dim_default_instance_;
namespace tfcompile {
class Config;
class ConfigDefaultTypeInternal;
extern ConfigDefaultTypeInternal _Config_default_instance_;
class Feed;
class FeedDefaultTypeInternal;
extern FeedDefaultTypeInternal _Feed_default_instance_;
class Fetch;
class FetchDefaultTypeInternal;
extern FetchDefaultTypeInternal _Fetch_default_instance_;
class TensorId;
class TensorIdDefaultTypeInternal;
extern TensorIdDefaultTypeInternal _TensorId_default_instance_;
}  // namespace tfcompile
}  // namespace tensorflow

namespace tensorflow {
namespace tfcompile {

namespace protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto

// ===================================================================

class TensorId : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfcompile.TensorId) */ {
 public:
  TensorId();
  virtual ~TensorId();

  TensorId(const TensorId& from);

  inline TensorId& operator=(const TensorId& from) {
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
  static const TensorId& default_instance();

  static inline const TensorId* internal_default_instance() {
    return reinterpret_cast<const TensorId*>(
               &_TensorId_default_instance_);
  }

  void UnsafeArenaSwap(TensorId* other);
  void Swap(TensorId* other);

  // implements Message ----------------------------------------------

  inline TensorId* New() const PROTOBUF_FINAL { return New(NULL); }

  TensorId* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const TensorId& from);
  void MergeFrom(const TensorId& from);
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
  void InternalSwap(TensorId* other);
  protected:
  explicit TensorId(::google::protobuf::Arena* arena);
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

  // string node_name = 1;
  void clear_node_name();
  static const int kNodeNameFieldNumber = 1;
  const ::std::string& node_name() const;
  void set_node_name(const ::std::string& value);
  void set_node_name(const char* value);
  void set_node_name(const char* value, size_t size);
  ::std::string* mutable_node_name();
  ::std::string* release_node_name();
  void set_allocated_node_name(::std::string* node_name);
  ::std::string* unsafe_arena_release_node_name();
  void unsafe_arena_set_allocated_node_name(
      ::std::string* node_name);

  // int64 output_index = 2;
  void clear_output_index();
  static const int kOutputIndexFieldNumber = 2;
  ::google::protobuf::int64 output_index() const;
  void set_output_index(::google::protobuf::int64 value);

  // @@protoc_insertion_point(class_scope:tensorflow.tfcompile.TensorId)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::internal::ArenaStringPtr node_name_;
  ::google::protobuf::int64 output_index_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Feed : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfcompile.Feed) */ {
 public:
  Feed();
  virtual ~Feed();

  Feed(const Feed& from);

  inline Feed& operator=(const Feed& from) {
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
  static const Feed& default_instance();

  static inline const Feed* internal_default_instance() {
    return reinterpret_cast<const Feed*>(
               &_Feed_default_instance_);
  }

  void UnsafeArenaSwap(Feed* other);
  void Swap(Feed* other);

  // implements Message ----------------------------------------------

  inline Feed* New() const PROTOBUF_FINAL { return New(NULL); }

  Feed* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Feed& from);
  void MergeFrom(const Feed& from);
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
  void InternalSwap(Feed* other);
  protected:
  explicit Feed(::google::protobuf::Arena* arena);
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

  // string name = 3;
  void clear_name();
  static const int kNameFieldNumber = 3;
  const ::std::string& name() const;
  void set_name(const ::std::string& value);
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  ::std::string* mutable_name();
  ::std::string* release_name();
  void set_allocated_name(::std::string* name);
  ::std::string* unsafe_arena_release_name();
  void unsafe_arena_set_allocated_name(
      ::std::string* name);

  // .tensorflow.tfcompile.TensorId id = 1;
  bool has_id() const;
  void clear_id();
  static const int kIdFieldNumber = 1;
  private:
  void _slow_mutable_id();
  void _slow_set_allocated_id(
      ::google::protobuf::Arena* message_arena, ::tensorflow::tfcompile::TensorId** id);
  ::tensorflow::tfcompile::TensorId* _slow_release_id();
  public:
  const ::tensorflow::tfcompile::TensorId& id() const;
  ::tensorflow::tfcompile::TensorId* mutable_id();
  ::tensorflow::tfcompile::TensorId* release_id();
  void set_allocated_id(::tensorflow::tfcompile::TensorId* id);
  ::tensorflow::tfcompile::TensorId* unsafe_arena_release_id();
  void unsafe_arena_set_allocated_id(
      ::tensorflow::tfcompile::TensorId* id);

  // .tensorflow.TensorShapeProto shape = 2;
  bool has_shape() const;
  void clear_shape();
  static const int kShapeFieldNumber = 2;
  private:
  void _slow_mutable_shape();
  void _slow_set_allocated_shape(
      ::google::protobuf::Arena* message_arena, ::tensorflow::TensorShapeProto** shape);
  ::tensorflow::TensorShapeProto* _slow_release_shape();
  public:
  const ::tensorflow::TensorShapeProto& shape() const;
  ::tensorflow::TensorShapeProto* mutable_shape();
  ::tensorflow::TensorShapeProto* release_shape();
  void set_allocated_shape(::tensorflow::TensorShapeProto* shape);
  ::tensorflow::TensorShapeProto* unsafe_arena_release_shape();
  void unsafe_arena_set_allocated_shape(
      ::tensorflow::TensorShapeProto* shape);

  // @@protoc_insertion_point(class_scope:tensorflow.tfcompile.Feed)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::internal::ArenaStringPtr name_;
  ::tensorflow::tfcompile::TensorId* id_;
  ::tensorflow::TensorShapeProto* shape_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Fetch : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfcompile.Fetch) */ {
 public:
  Fetch();
  virtual ~Fetch();

  Fetch(const Fetch& from);

  inline Fetch& operator=(const Fetch& from) {
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
  static const Fetch& default_instance();

  static inline const Fetch* internal_default_instance() {
    return reinterpret_cast<const Fetch*>(
               &_Fetch_default_instance_);
  }

  void UnsafeArenaSwap(Fetch* other);
  void Swap(Fetch* other);

  // implements Message ----------------------------------------------

  inline Fetch* New() const PROTOBUF_FINAL { return New(NULL); }

  Fetch* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Fetch& from);
  void MergeFrom(const Fetch& from);
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
  void InternalSwap(Fetch* other);
  protected:
  explicit Fetch(::google::protobuf::Arena* arena);
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

  // string name = 2;
  void clear_name();
  static const int kNameFieldNumber = 2;
  const ::std::string& name() const;
  void set_name(const ::std::string& value);
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  ::std::string* mutable_name();
  ::std::string* release_name();
  void set_allocated_name(::std::string* name);
  ::std::string* unsafe_arena_release_name();
  void unsafe_arena_set_allocated_name(
      ::std::string* name);

  // .tensorflow.tfcompile.TensorId id = 1;
  bool has_id() const;
  void clear_id();
  static const int kIdFieldNumber = 1;
  private:
  void _slow_mutable_id();
  void _slow_set_allocated_id(
      ::google::protobuf::Arena* message_arena, ::tensorflow::tfcompile::TensorId** id);
  ::tensorflow::tfcompile::TensorId* _slow_release_id();
  public:
  const ::tensorflow::tfcompile::TensorId& id() const;
  ::tensorflow::tfcompile::TensorId* mutable_id();
  ::tensorflow::tfcompile::TensorId* release_id();
  void set_allocated_id(::tensorflow::tfcompile::TensorId* id);
  ::tensorflow::tfcompile::TensorId* unsafe_arena_release_id();
  void unsafe_arena_set_allocated_id(
      ::tensorflow::tfcompile::TensorId* id);

  // @@protoc_insertion_point(class_scope:tensorflow.tfcompile.Fetch)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::internal::ArenaStringPtr name_;
  ::tensorflow::tfcompile::TensorId* id_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Config : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.tfcompile.Config) */ {
 public:
  Config();
  virtual ~Config();

  Config(const Config& from);

  inline Config& operator=(const Config& from) {
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
  static const Config& default_instance();

  static inline const Config* internal_default_instance() {
    return reinterpret_cast<const Config*>(
               &_Config_default_instance_);
  }

  void UnsafeArenaSwap(Config* other);
  void Swap(Config* other);

  // implements Message ----------------------------------------------

  inline Config* New() const PROTOBUF_FINAL { return New(NULL); }

  Config* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const Config& from);
  void MergeFrom(const Config& from);
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
  void InternalSwap(Config* other);
  protected:
  explicit Config(::google::protobuf::Arena* arena);
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

  // repeated .tensorflow.tfcompile.Feed feed = 1;
  int feed_size() const;
  void clear_feed();
  static const int kFeedFieldNumber = 1;
  const ::tensorflow::tfcompile::Feed& feed(int index) const;
  ::tensorflow::tfcompile::Feed* mutable_feed(int index);
  ::tensorflow::tfcompile::Feed* add_feed();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Feed >*
      mutable_feed();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Feed >&
      feed() const;

  // repeated .tensorflow.tfcompile.Fetch fetch = 2;
  int fetch_size() const;
  void clear_fetch();
  static const int kFetchFieldNumber = 2;
  const ::tensorflow::tfcompile::Fetch& fetch(int index) const;
  ::tensorflow::tfcompile::Fetch* mutable_fetch(int index);
  ::tensorflow::tfcompile::Fetch* add_fetch();
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Fetch >*
      mutable_fetch();
  const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Fetch >&
      fetch() const;

  // @@protoc_insertion_point(class_scope:tensorflow.tfcompile.Config)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Feed > feed_;
  ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Fetch > fetch_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// TensorId

// string node_name = 1;
inline void TensorId::clear_node_name() {
  node_name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& TensorId::node_name() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.TensorId.node_name)
  return node_name_.Get();
}
inline void TensorId::set_node_name(const ::std::string& value) {
  
  node_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.tfcompile.TensorId.node_name)
}
inline void TensorId::set_node_name(const char* value) {
  
  node_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.tfcompile.TensorId.node_name)
}
inline void TensorId::set_node_name(const char* value,
    size_t size) {
  
  node_name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfcompile.TensorId.node_name)
}
inline ::std::string* TensorId::mutable_node_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.TensorId.node_name)
  return node_name_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* TensorId::release_node_name() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.TensorId.node_name)
  
  return node_name_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* TensorId::unsafe_arena_release_node_name() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.tfcompile.TensorId.node_name)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return node_name_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void TensorId::set_allocated_node_name(::std::string* node_name) {
  if (node_name != NULL) {
    
  } else {
    
  }
  node_name_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), node_name,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.TensorId.node_name)
}
inline void TensorId::unsafe_arena_set_allocated_node_name(
    ::std::string* node_name) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (node_name != NULL) {
    
  } else {
    
  }
  node_name_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      node_name, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.tfcompile.TensorId.node_name)
}

// int64 output_index = 2;
inline void TensorId::clear_output_index() {
  output_index_ = GOOGLE_LONGLONG(0);
}
inline ::google::protobuf::int64 TensorId::output_index() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.TensorId.output_index)
  return output_index_;
}
inline void TensorId::set_output_index(::google::protobuf::int64 value) {
  
  output_index_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.tfcompile.TensorId.output_index)
}

// -------------------------------------------------------------------

// Feed

// .tensorflow.tfcompile.TensorId id = 1;
inline bool Feed::has_id() const {
  return this != internal_default_instance() && id_ != NULL;
}
inline void Feed::clear_id() {
  if (GetArenaNoVirtual() == NULL && id_ != NULL) delete id_;
  id_ = NULL;
}
inline const ::tensorflow::tfcompile::TensorId& Feed::id() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Feed.id)
  return id_ != NULL ? *id_
                         : *::tensorflow::tfcompile::TensorId::internal_default_instance();
}
inline ::tensorflow::tfcompile::TensorId* Feed::mutable_id() {
  
  if (id_ == NULL) {
    _slow_mutable_id();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Feed.id)
  return id_;
}
inline ::tensorflow::tfcompile::TensorId* Feed::release_id() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.Feed.id)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_id();
  } else {
    ::tensorflow::tfcompile::TensorId* temp = id_;
    id_ = NULL;
    return temp;
  }
}
inline  void Feed::set_allocated_id(::tensorflow::tfcompile::TensorId* id) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete id_;
  }
  if (id != NULL) {
    _slow_set_allocated_id(message_arena, &id);
  }
  id_ = id;
  if (id) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.Feed.id)
}

// .tensorflow.TensorShapeProto shape = 2;
inline bool Feed::has_shape() const {
  return this != internal_default_instance() && shape_ != NULL;
}
inline void Feed::clear_shape() {
  if (GetArenaNoVirtual() == NULL && shape_ != NULL) delete shape_;
  shape_ = NULL;
}
inline const ::tensorflow::TensorShapeProto& Feed::shape() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Feed.shape)
  return shape_ != NULL ? *shape_
                         : *::tensorflow::TensorShapeProto::internal_default_instance();
}
inline ::tensorflow::TensorShapeProto* Feed::mutable_shape() {
  
  if (shape_ == NULL) {
    _slow_mutable_shape();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Feed.shape)
  return shape_;
}
inline ::tensorflow::TensorShapeProto* Feed::release_shape() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.Feed.shape)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_shape();
  } else {
    ::tensorflow::TensorShapeProto* temp = shape_;
    shape_ = NULL;
    return temp;
  }
}
inline  void Feed::set_allocated_shape(::tensorflow::TensorShapeProto* shape) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete shape_;
  }
  if (shape != NULL) {
    _slow_set_allocated_shape(message_arena, &shape);
  }
  shape_ = shape;
  if (shape) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.Feed.shape)
}

// string name = 3;
inline void Feed::clear_name() {
  name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& Feed::name() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Feed.name)
  return name_.Get();
}
inline void Feed::set_name(const ::std::string& value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.tfcompile.Feed.name)
}
inline void Feed::set_name(const char* value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.tfcompile.Feed.name)
}
inline void Feed::set_name(const char* value,
    size_t size) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfcompile.Feed.name)
}
inline ::std::string* Feed::mutable_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Feed.name)
  return name_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Feed::release_name() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.Feed.name)
  
  return name_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Feed::unsafe_arena_release_name() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.tfcompile.Feed.name)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return name_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void Feed::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    
  } else {
    
  }
  name_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.Feed.name)
}
inline void Feed::unsafe_arena_set_allocated_name(
    ::std::string* name) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (name != NULL) {
    
  } else {
    
  }
  name_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      name, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.tfcompile.Feed.name)
}

// -------------------------------------------------------------------

// Fetch

// .tensorflow.tfcompile.TensorId id = 1;
inline bool Fetch::has_id() const {
  return this != internal_default_instance() && id_ != NULL;
}
inline void Fetch::clear_id() {
  if (GetArenaNoVirtual() == NULL && id_ != NULL) delete id_;
  id_ = NULL;
}
inline const ::tensorflow::tfcompile::TensorId& Fetch::id() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Fetch.id)
  return id_ != NULL ? *id_
                         : *::tensorflow::tfcompile::TensorId::internal_default_instance();
}
inline ::tensorflow::tfcompile::TensorId* Fetch::mutable_id() {
  
  if (id_ == NULL) {
    _slow_mutable_id();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Fetch.id)
  return id_;
}
inline ::tensorflow::tfcompile::TensorId* Fetch::release_id() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.Fetch.id)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_id();
  } else {
    ::tensorflow::tfcompile::TensorId* temp = id_;
    id_ = NULL;
    return temp;
  }
}
inline  void Fetch::set_allocated_id(::tensorflow::tfcompile::TensorId* id) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete id_;
  }
  if (id != NULL) {
    _slow_set_allocated_id(message_arena, &id);
  }
  id_ = id;
  if (id) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.Fetch.id)
}

// string name = 2;
inline void Fetch::clear_name() {
  name_.ClearToEmpty(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const ::std::string& Fetch::name() const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Fetch.name)
  return name_.Get();
}
inline void Fetch::set_name(const ::std::string& value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set:tensorflow.tfcompile.Fetch.name)
}
inline void Fetch::set_name(const char* value) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:tensorflow.tfcompile.Fetch.name)
}
inline void Fetch::set_name(const char* value,
    size_t size) {
  
  name_.Set(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:tensorflow.tfcompile.Fetch.name)
}
inline ::std::string* Fetch::mutable_name() {
  
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Fetch.name)
  return name_.Mutable(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Fetch::release_name() {
  // @@protoc_insertion_point(field_release:tensorflow.tfcompile.Fetch.name)
  
  return name_.Release(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline ::std::string* Fetch::unsafe_arena_release_name() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.tfcompile.Fetch.name)
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  
  return name_.UnsafeArenaRelease(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void Fetch::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    
  } else {
    
  }
  name_.SetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:tensorflow.tfcompile.Fetch.name)
}
inline void Fetch::unsafe_arena_set_allocated_name(
    ::std::string* name) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != NULL);
  if (name != NULL) {
    
  } else {
    
  }
  name_.UnsafeArenaSetAllocated(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      name, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.tfcompile.Fetch.name)
}

// -------------------------------------------------------------------

// Config

// repeated .tensorflow.tfcompile.Feed feed = 1;
inline int Config::feed_size() const {
  return feed_.size();
}
inline void Config::clear_feed() {
  feed_.Clear();
}
inline const ::tensorflow::tfcompile::Feed& Config::feed(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Config.feed)
  return feed_.Get(index);
}
inline ::tensorflow::tfcompile::Feed* Config::mutable_feed(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Config.feed)
  return feed_.Mutable(index);
}
inline ::tensorflow::tfcompile::Feed* Config::add_feed() {
  // @@protoc_insertion_point(field_add:tensorflow.tfcompile.Config.feed)
  return feed_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Feed >*
Config::mutable_feed() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfcompile.Config.feed)
  return &feed_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Feed >&
Config::feed() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfcompile.Config.feed)
  return feed_;
}

// repeated .tensorflow.tfcompile.Fetch fetch = 2;
inline int Config::fetch_size() const {
  return fetch_.size();
}
inline void Config::clear_fetch() {
  fetch_.Clear();
}
inline const ::tensorflow::tfcompile::Fetch& Config::fetch(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.tfcompile.Config.fetch)
  return fetch_.Get(index);
}
inline ::tensorflow::tfcompile::Fetch* Config::mutable_fetch(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.tfcompile.Config.fetch)
  return fetch_.Mutable(index);
}
inline ::tensorflow::tfcompile::Fetch* Config::add_fetch() {
  // @@protoc_insertion_point(field_add:tensorflow.tfcompile.Config.fetch)
  return fetch_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Fetch >*
Config::mutable_fetch() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.tfcompile.Config.fetch)
  return &fetch_;
}
inline const ::google::protobuf::RepeatedPtrField< ::tensorflow::tfcompile::Fetch >&
Config::fetch() const {
  // @@protoc_insertion_point(field_list:tensorflow.tfcompile.Config.fetch)
  return fetch_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace tfcompile
}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_2fcompiler_2faot_2ftfcompile_2eproto__INCLUDED
