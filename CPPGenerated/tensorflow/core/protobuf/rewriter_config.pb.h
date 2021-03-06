// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/protobuf/rewriter_config.proto

#ifndef PROTOBUF_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto__INCLUDED
#define PROTOBUF_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto__INCLUDED

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
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
namespace tensorflow {
class AutoParallelOptions;
class AutoParallelOptionsDefaultTypeInternal;
extern AutoParallelOptionsDefaultTypeInternal _AutoParallelOptions_default_instance_;
class RewriterConfig;
class RewriterConfigDefaultTypeInternal;
extern RewriterConfigDefaultTypeInternal _RewriterConfig_default_instance_;
}  // namespace tensorflow

namespace tensorflow {

namespace protobuf_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto

enum RewriterConfig_MemOptType {
  RewriterConfig_MemOptType_NO_MEM_OPT = 0,
  RewriterConfig_MemOptType_MANUAL = 1,
  RewriterConfig_MemOptType_RewriterConfig_MemOptType_INT_MIN_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32min,
  RewriterConfig_MemOptType_RewriterConfig_MemOptType_INT_MAX_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32max
};
bool RewriterConfig_MemOptType_IsValid(int value);
const RewriterConfig_MemOptType RewriterConfig_MemOptType_MemOptType_MIN = RewriterConfig_MemOptType_NO_MEM_OPT;
const RewriterConfig_MemOptType RewriterConfig_MemOptType_MemOptType_MAX = RewriterConfig_MemOptType_MANUAL;
const int RewriterConfig_MemOptType_MemOptType_ARRAYSIZE = RewriterConfig_MemOptType_MemOptType_MAX + 1;

const ::google::protobuf::EnumDescriptor* RewriterConfig_MemOptType_descriptor();
inline const ::std::string& RewriterConfig_MemOptType_Name(RewriterConfig_MemOptType value) {
  return ::google::protobuf::internal::NameOfEnum(
    RewriterConfig_MemOptType_descriptor(), value);
}
inline bool RewriterConfig_MemOptType_Parse(
    const ::std::string& name, RewriterConfig_MemOptType* value) {
  return ::google::protobuf::internal::ParseNamedEnum<RewriterConfig_MemOptType>(
    RewriterConfig_MemOptType_descriptor(), name, value);
}
// ===================================================================

class AutoParallelOptions : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.AutoParallelOptions) */ {
 public:
  AutoParallelOptions();
  virtual ~AutoParallelOptions();

  AutoParallelOptions(const AutoParallelOptions& from);

  inline AutoParallelOptions& operator=(const AutoParallelOptions& from) {
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
  static const AutoParallelOptions& default_instance();

  static inline const AutoParallelOptions* internal_default_instance() {
    return reinterpret_cast<const AutoParallelOptions*>(
               &_AutoParallelOptions_default_instance_);
  }

  void UnsafeArenaSwap(AutoParallelOptions* other);
  void Swap(AutoParallelOptions* other);

  // implements Message ----------------------------------------------

  inline AutoParallelOptions* New() const PROTOBUF_FINAL { return New(NULL); }

  AutoParallelOptions* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const AutoParallelOptions& from);
  void MergeFrom(const AutoParallelOptions& from);
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
  void InternalSwap(AutoParallelOptions* other);
  protected:
  explicit AutoParallelOptions(::google::protobuf::Arena* arena);
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

  // bool enable = 1;
  void clear_enable();
  static const int kEnableFieldNumber = 1;
  bool enable() const;
  void set_enable(bool value);

  // int32 num_replicas = 2;
  void clear_num_replicas();
  static const int kNumReplicasFieldNumber = 2;
  ::google::protobuf::int32 num_replicas() const;
  void set_num_replicas(::google::protobuf::int32 value);

  // @@protoc_insertion_point(class_scope:tensorflow.AutoParallelOptions)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  bool enable_;
  ::google::protobuf::int32 num_replicas_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class RewriterConfig : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:tensorflow.RewriterConfig) */ {
 public:
  RewriterConfig();
  virtual ~RewriterConfig();

  RewriterConfig(const RewriterConfig& from);

  inline RewriterConfig& operator=(const RewriterConfig& from) {
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
  static const RewriterConfig& default_instance();

  static inline const RewriterConfig* internal_default_instance() {
    return reinterpret_cast<const RewriterConfig*>(
               &_RewriterConfig_default_instance_);
  }

  void UnsafeArenaSwap(RewriterConfig* other);
  void Swap(RewriterConfig* other);

  // implements Message ----------------------------------------------

  inline RewriterConfig* New() const PROTOBUF_FINAL { return New(NULL); }

  RewriterConfig* New(::google::protobuf::Arena* arena) const PROTOBUF_FINAL;
  void CopyFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void MergeFrom(const ::google::protobuf::Message& from) PROTOBUF_FINAL;
  void CopyFrom(const RewriterConfig& from);
  void MergeFrom(const RewriterConfig& from);
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
  void InternalSwap(RewriterConfig* other);
  protected:
  explicit RewriterConfig(::google::protobuf::Arena* arena);
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

  typedef RewriterConfig_MemOptType MemOptType;
  static const MemOptType NO_MEM_OPT =
    RewriterConfig_MemOptType_NO_MEM_OPT;
  static const MemOptType MANUAL =
    RewriterConfig_MemOptType_MANUAL;
  static inline bool MemOptType_IsValid(int value) {
    return RewriterConfig_MemOptType_IsValid(value);
  }
  static const MemOptType MemOptType_MIN =
    RewriterConfig_MemOptType_MemOptType_MIN;
  static const MemOptType MemOptType_MAX =
    RewriterConfig_MemOptType_MemOptType_MAX;
  static const int MemOptType_ARRAYSIZE =
    RewriterConfig_MemOptType_MemOptType_ARRAYSIZE;
  static inline const ::google::protobuf::EnumDescriptor*
  MemOptType_descriptor() {
    return RewriterConfig_MemOptType_descriptor();
  }
  static inline const ::std::string& MemOptType_Name(MemOptType value) {
    return RewriterConfig_MemOptType_Name(value);
  }
  static inline bool MemOptType_Parse(const ::std::string& name,
      MemOptType* value) {
    return RewriterConfig_MemOptType_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  // repeated string optimizers = 100;
  int optimizers_size() const;
  void clear_optimizers();
  static const int kOptimizersFieldNumber = 100;
  const ::std::string& optimizers(int index) const;
  ::std::string* mutable_optimizers(int index);
  void set_optimizers(int index, const ::std::string& value);
  void set_optimizers(int index, const char* value);
  void set_optimizers(int index, const char* value, size_t size);
  ::std::string* add_optimizers();
  void add_optimizers(const ::std::string& value);
  void add_optimizers(const char* value);
  void add_optimizers(const char* value, size_t size);
  const ::google::protobuf::RepeatedPtrField< ::std::string>& optimizers() const;
  ::google::protobuf::RepeatedPtrField< ::std::string>* mutable_optimizers();

  // .tensorflow.AutoParallelOptions auto_parallel = 5;
  bool has_auto_parallel() const;
  void clear_auto_parallel();
  static const int kAutoParallelFieldNumber = 5;
  private:
  void _slow_mutable_auto_parallel();
  void _slow_set_allocated_auto_parallel(
      ::google::protobuf::Arena* message_arena, ::tensorflow::AutoParallelOptions** auto_parallel);
  ::tensorflow::AutoParallelOptions* _slow_release_auto_parallel();
  public:
  const ::tensorflow::AutoParallelOptions& auto_parallel() const;
  ::tensorflow::AutoParallelOptions* mutable_auto_parallel();
  ::tensorflow::AutoParallelOptions* release_auto_parallel();
  void set_allocated_auto_parallel(::tensorflow::AutoParallelOptions* auto_parallel);
  ::tensorflow::AutoParallelOptions* unsafe_arena_release_auto_parallel();
  void unsafe_arena_set_allocated_auto_parallel(
      ::tensorflow::AutoParallelOptions* auto_parallel);

  // bool optimize_tensor_layout = 1;
  void clear_optimize_tensor_layout();
  static const int kOptimizeTensorLayoutFieldNumber = 1;
  bool optimize_tensor_layout() const;
  void set_optimize_tensor_layout(bool value);

  // bool disable_model_pruning = 2;
  void clear_disable_model_pruning();
  static const int kDisableModelPruningFieldNumber = 2;
  bool disable_model_pruning() const;
  void set_disable_model_pruning(bool value);

  // bool constant_folding = 3;
  void clear_constant_folding();
  static const int kConstantFoldingFieldNumber = 3;
  bool constant_folding() const;
  void set_constant_folding(bool value);

  // .tensorflow.RewriterConfig.MemOptType memory_optimization = 4;
  void clear_memory_optimization();
  static const int kMemoryOptimizationFieldNumber = 4;
  ::tensorflow::RewriterConfig_MemOptType memory_optimization() const;
  void set_memory_optimization(::tensorflow::RewriterConfig_MemOptType value);

  // @@protoc_insertion_point(class_scope:tensorflow.RewriterConfig)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  friend class ::google::protobuf::Arena;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::google::protobuf::RepeatedPtrField< ::std::string> optimizers_;
  ::tensorflow::AutoParallelOptions* auto_parallel_;
  bool optimize_tensor_layout_;
  bool disable_model_pruning_;
  bool constant_folding_;
  int memory_optimization_;
  mutable int _cached_size_;
  friend struct  protobuf_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// AutoParallelOptions

// bool enable = 1;
inline void AutoParallelOptions::clear_enable() {
  enable_ = false;
}
inline bool AutoParallelOptions::enable() const {
  // @@protoc_insertion_point(field_get:tensorflow.AutoParallelOptions.enable)
  return enable_;
}
inline void AutoParallelOptions::set_enable(bool value) {
  
  enable_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.AutoParallelOptions.enable)
}

// int32 num_replicas = 2;
inline void AutoParallelOptions::clear_num_replicas() {
  num_replicas_ = 0;
}
inline ::google::protobuf::int32 AutoParallelOptions::num_replicas() const {
  // @@protoc_insertion_point(field_get:tensorflow.AutoParallelOptions.num_replicas)
  return num_replicas_;
}
inline void AutoParallelOptions::set_num_replicas(::google::protobuf::int32 value) {
  
  num_replicas_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.AutoParallelOptions.num_replicas)
}

// -------------------------------------------------------------------

// RewriterConfig

// bool optimize_tensor_layout = 1;
inline void RewriterConfig::clear_optimize_tensor_layout() {
  optimize_tensor_layout_ = false;
}
inline bool RewriterConfig::optimize_tensor_layout() const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.optimize_tensor_layout)
  return optimize_tensor_layout_;
}
inline void RewriterConfig::set_optimize_tensor_layout(bool value) {
  
  optimize_tensor_layout_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.RewriterConfig.optimize_tensor_layout)
}

// bool disable_model_pruning = 2;
inline void RewriterConfig::clear_disable_model_pruning() {
  disable_model_pruning_ = false;
}
inline bool RewriterConfig::disable_model_pruning() const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.disable_model_pruning)
  return disable_model_pruning_;
}
inline void RewriterConfig::set_disable_model_pruning(bool value) {
  
  disable_model_pruning_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.RewriterConfig.disable_model_pruning)
}

// bool constant_folding = 3;
inline void RewriterConfig::clear_constant_folding() {
  constant_folding_ = false;
}
inline bool RewriterConfig::constant_folding() const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.constant_folding)
  return constant_folding_;
}
inline void RewriterConfig::set_constant_folding(bool value) {
  
  constant_folding_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.RewriterConfig.constant_folding)
}

// .tensorflow.RewriterConfig.MemOptType memory_optimization = 4;
inline void RewriterConfig::clear_memory_optimization() {
  memory_optimization_ = 0;
}
inline ::tensorflow::RewriterConfig_MemOptType RewriterConfig::memory_optimization() const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.memory_optimization)
  return static_cast< ::tensorflow::RewriterConfig_MemOptType >(memory_optimization_);
}
inline void RewriterConfig::set_memory_optimization(::tensorflow::RewriterConfig_MemOptType value) {
  
  memory_optimization_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.RewriterConfig.memory_optimization)
}

// .tensorflow.AutoParallelOptions auto_parallel = 5;
inline bool RewriterConfig::has_auto_parallel() const {
  return this != internal_default_instance() && auto_parallel_ != NULL;
}
inline void RewriterConfig::clear_auto_parallel() {
  if (GetArenaNoVirtual() == NULL && auto_parallel_ != NULL) delete auto_parallel_;
  auto_parallel_ = NULL;
}
inline const ::tensorflow::AutoParallelOptions& RewriterConfig::auto_parallel() const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.auto_parallel)
  return auto_parallel_ != NULL ? *auto_parallel_
                         : *::tensorflow::AutoParallelOptions::internal_default_instance();
}
inline ::tensorflow::AutoParallelOptions* RewriterConfig::mutable_auto_parallel() {
  
  if (auto_parallel_ == NULL) {
    _slow_mutable_auto_parallel();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.RewriterConfig.auto_parallel)
  return auto_parallel_;
}
inline ::tensorflow::AutoParallelOptions* RewriterConfig::release_auto_parallel() {
  // @@protoc_insertion_point(field_release:tensorflow.RewriterConfig.auto_parallel)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_auto_parallel();
  } else {
    ::tensorflow::AutoParallelOptions* temp = auto_parallel_;
    auto_parallel_ = NULL;
    return temp;
  }
}
inline  void RewriterConfig::set_allocated_auto_parallel(::tensorflow::AutoParallelOptions* auto_parallel) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete auto_parallel_;
  }
  if (auto_parallel != NULL) {
    _slow_set_allocated_auto_parallel(message_arena, &auto_parallel);
  }
  auto_parallel_ = auto_parallel;
  if (auto_parallel) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.RewriterConfig.auto_parallel)
}

// repeated string optimizers = 100;
inline int RewriterConfig::optimizers_size() const {
  return optimizers_.size();
}
inline void RewriterConfig::clear_optimizers() {
  optimizers_.Clear();
}
inline const ::std::string& RewriterConfig::optimizers(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.RewriterConfig.optimizers)
  return optimizers_.Get(index);
}
inline ::std::string* RewriterConfig::mutable_optimizers(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.RewriterConfig.optimizers)
  return optimizers_.Mutable(index);
}
inline void RewriterConfig::set_optimizers(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:tensorflow.RewriterConfig.optimizers)
  optimizers_.Mutable(index)->assign(value);
}
inline void RewriterConfig::set_optimizers(int index, const char* value) {
  optimizers_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:tensorflow.RewriterConfig.optimizers)
}
inline void RewriterConfig::set_optimizers(int index, const char* value, size_t size) {
  optimizers_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:tensorflow.RewriterConfig.optimizers)
}
inline ::std::string* RewriterConfig::add_optimizers() {
  // @@protoc_insertion_point(field_add_mutable:tensorflow.RewriterConfig.optimizers)
  return optimizers_.Add();
}
inline void RewriterConfig::add_optimizers(const ::std::string& value) {
  optimizers_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:tensorflow.RewriterConfig.optimizers)
}
inline void RewriterConfig::add_optimizers(const char* value) {
  optimizers_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:tensorflow.RewriterConfig.optimizers)
}
inline void RewriterConfig::add_optimizers(const char* value, size_t size) {
  optimizers_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:tensorflow.RewriterConfig.optimizers)
}
inline const ::google::protobuf::RepeatedPtrField< ::std::string>&
RewriterConfig::optimizers() const {
  // @@protoc_insertion_point(field_list:tensorflow.RewriterConfig.optimizers)
  return optimizers_;
}
inline ::google::protobuf::RepeatedPtrField< ::std::string>*
RewriterConfig::mutable_optimizers() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.RewriterConfig.optimizers)
  return &optimizers_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)


}  // namespace tensorflow

#ifndef SWIG
namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::tensorflow::RewriterConfig_MemOptType> : ::google::protobuf::internal::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::tensorflow::RewriterConfig_MemOptType>() {
  return ::tensorflow::RewriterConfig_MemOptType_descriptor();
}

}  // namespace protobuf
}  // namespace google
#endif  // SWIG

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_tensorflow_2fcore_2fprotobuf_2frewriter_5fconfig_2eproto__INCLUDED
