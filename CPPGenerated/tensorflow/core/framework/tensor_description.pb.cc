// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/framework/tensor_description.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow/core/framework/tensor_description.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace tensorflow {
class TensorDescriptionDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<TensorDescription> {
} _TensorDescription_default_instance_;

namespace protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(TensorDescription, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(TensorDescription, dtype_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(TensorDescription, shape_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(TensorDescription, allocation_description_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(TensorDescription)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_TensorDescription_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow/core/framework/tensor_description.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 1);
}

}  // namespace

void TableStruct::Shutdown() {
  _TensorDescription_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ftypes_2eproto::InitDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ftensor_5fshape_2eproto::InitDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fallocation_5fdescription_2eproto::InitDefaults();
  _TensorDescription_default_instance_.DefaultConstruct();
  _TensorDescription_default_instance_.get_mutable()->shape_ = const_cast< ::tensorflow::TensorShapeProto*>(
      ::tensorflow::TensorShapeProto::internal_default_instance());
  _TensorDescription_default_instance_.get_mutable()->allocation_description_ = const_cast< ::tensorflow::AllocationDescription*>(
      ::tensorflow::AllocationDescription::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n2tensorflow/core/framework/tensor_descr"
      "iption.proto\022\ntensorflow\032%tensorflow/cor"
      "e/framework/types.proto\032,tensorflow/core"
      "/framework/tensor_shape.proto\0326tensorflo"
      "w/core/framework/allocation_description."
      "proto\"\250\001\n\021TensorDescription\022#\n\005dtype\030\001 \001"
      "(\0162\024.tensorflow.DataType\022+\n\005shape\030\002 \001(\0132"
      "\034.tensorflow.TensorShapeProto\022A\n\026allocat"
      "ion_description\030\004 \001(\0132!.tensorflow.Alloc"
      "ationDescriptionB8\n\030org.tensorflow.frame"
      "workB\027TensorDescriptionProtosP\001\370\001\001b\006prot"
      "o3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 442);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow/core/framework/tensor_description.proto", &protobuf_RegisterTypes);
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ftypes_2eproto::AddDescriptors();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ftensor_5fshape_2eproto::AddDescriptors();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fallocation_5fdescription_2eproto::AddDescriptors();
  ::google::protobuf::internal::OnShutdown(&TableStruct::Shutdown);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;

}  // namespace protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto


// ===================================================================

void TensorDescription::_slow_mutable_shape() {
  shape_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::TensorShapeProto >(
      GetArenaNoVirtual());
}
::tensorflow::TensorShapeProto* TensorDescription::_slow_release_shape() {
  if (shape_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::TensorShapeProto* temp = new ::tensorflow::TensorShapeProto(*shape_);
    shape_ = NULL;
    return temp;
  }
}
::tensorflow::TensorShapeProto* TensorDescription::unsafe_arena_release_shape() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.TensorDescription.shape)
  
  ::tensorflow::TensorShapeProto* temp = shape_;
  shape_ = NULL;
  return temp;
}
void TensorDescription::_slow_set_allocated_shape(
    ::google::protobuf::Arena* message_arena, ::tensorflow::TensorShapeProto** shape) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*shape) == NULL) {
      message_arena->Own(*shape);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*shape)) {
      ::tensorflow::TensorShapeProto* new_shape = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::TensorShapeProto >(
            message_arena);
      new_shape->CopyFrom(**shape);
      *shape = new_shape;
    }
}
void TensorDescription::unsafe_arena_set_allocated_shape(
    ::tensorflow::TensorShapeProto* shape) {
  if (GetArenaNoVirtual() == NULL) {
    delete shape_;
  }
  shape_ = shape;
  if (shape) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.TensorDescription.shape)
}
void TensorDescription::_slow_mutable_allocation_description() {
  allocation_description_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::AllocationDescription >(
      GetArenaNoVirtual());
}
::tensorflow::AllocationDescription* TensorDescription::_slow_release_allocation_description() {
  if (allocation_description_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::AllocationDescription* temp = new ::tensorflow::AllocationDescription(*allocation_description_);
    allocation_description_ = NULL;
    return temp;
  }
}
::tensorflow::AllocationDescription* TensorDescription::unsafe_arena_release_allocation_description() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.TensorDescription.allocation_description)
  
  ::tensorflow::AllocationDescription* temp = allocation_description_;
  allocation_description_ = NULL;
  return temp;
}
void TensorDescription::_slow_set_allocated_allocation_description(
    ::google::protobuf::Arena* message_arena, ::tensorflow::AllocationDescription** allocation_description) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*allocation_description) == NULL) {
      message_arena->Own(*allocation_description);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*allocation_description)) {
      ::tensorflow::AllocationDescription* new_allocation_description = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::AllocationDescription >(
            message_arena);
      new_allocation_description->CopyFrom(**allocation_description);
      *allocation_description = new_allocation_description;
    }
}
void TensorDescription::unsafe_arena_set_allocated_allocation_description(
    ::tensorflow::AllocationDescription* allocation_description) {
  if (GetArenaNoVirtual() == NULL) {
    delete allocation_description_;
  }
  allocation_description_ = allocation_description;
  if (allocation_description) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.TensorDescription.allocation_description)
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int TensorDescription::kDtypeFieldNumber;
const int TensorDescription::kShapeFieldNumber;
const int TensorDescription::kAllocationDescriptionFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

TensorDescription::TensorDescription()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.TensorDescription)
}
TensorDescription::TensorDescription(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.TensorDescription)
}
TensorDescription::TensorDescription(const TensorDescription& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_shape()) {
    shape_ = new ::tensorflow::TensorShapeProto(*from.shape_);
  } else {
    shape_ = NULL;
  }
  if (from.has_allocation_description()) {
    allocation_description_ = new ::tensorflow::AllocationDescription(*from.allocation_description_);
  } else {
    allocation_description_ = NULL;
  }
  dtype_ = from.dtype_;
  // @@protoc_insertion_point(copy_constructor:tensorflow.TensorDescription)
}

void TensorDescription::SharedCtor() {
  ::memset(&shape_, 0, reinterpret_cast<char*>(&dtype_) -
    reinterpret_cast<char*>(&shape_) + sizeof(dtype_));
  _cached_size_ = 0;
}

TensorDescription::~TensorDescription() {
  // @@protoc_insertion_point(destructor:tensorflow.TensorDescription)
  SharedDtor();
}

void TensorDescription::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  if (this != internal_default_instance()) {
    delete shape_;
  }
  if (this != internal_default_instance()) {
    delete allocation_description_;
  }
}

void TensorDescription::ArenaDtor(void* object) {
  TensorDescription* _this = reinterpret_cast< TensorDescription* >(object);
  (void)_this;
}
void TensorDescription::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void TensorDescription::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* TensorDescription::descriptor() {
  protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::file_level_metadata[0].descriptor;
}

const TensorDescription& TensorDescription::default_instance() {
  protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::InitDefaults();
  return *internal_default_instance();
}

TensorDescription* TensorDescription::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<TensorDescription>(arena);
}

void TensorDescription::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.TensorDescription)
  if (GetArenaNoVirtual() == NULL && shape_ != NULL) {
    delete shape_;
  }
  shape_ = NULL;
  if (GetArenaNoVirtual() == NULL && allocation_description_ != NULL) {
    delete allocation_description_;
  }
  allocation_description_ = NULL;
  dtype_ = 0;
}

bool TensorDescription::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.TensorDescription)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .tensorflow.DataType dtype = 1;
      case 1: {
        if (tag == 8u) {
          int value;
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   int, ::google::protobuf::internal::WireFormatLite::TYPE_ENUM>(
                 input, &value)));
          set_dtype(static_cast< ::tensorflow::DataType >(value));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .tensorflow.TensorShapeProto shape = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_shape()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .tensorflow.AllocationDescription allocation_description = 4;
      case 4: {
        if (tag == 34u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_allocation_description()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:tensorflow.TensorDescription)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.TensorDescription)
  return false;
#undef DO_
}

void TensorDescription::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.TensorDescription)
  // .tensorflow.DataType dtype = 1;
  if (this->dtype() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteEnum(
      1, this->dtype(), output);
  }

  // .tensorflow.TensorShapeProto shape = 2;
  if (this->has_shape()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, *this->shape_, output);
  }

  // .tensorflow.AllocationDescription allocation_description = 4;
  if (this->has_allocation_description()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      4, *this->allocation_description_, output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.TensorDescription)
}

::google::protobuf::uint8* TensorDescription::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.TensorDescription)
  // .tensorflow.DataType dtype = 1;
  if (this->dtype() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteEnumToArray(
      1, this->dtype(), target);
  }

  // .tensorflow.TensorShapeProto shape = 2;
  if (this->has_shape()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        2, *this->shape_, false, target);
  }

  // .tensorflow.AllocationDescription allocation_description = 4;
  if (this->has_allocation_description()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        4, *this->allocation_description_, false, target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.TensorDescription)
  return target;
}

size_t TensorDescription::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.TensorDescription)
  size_t total_size = 0;

  // .tensorflow.TensorShapeProto shape = 2;
  if (this->has_shape()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->shape_);
  }

  // .tensorflow.AllocationDescription allocation_description = 4;
  if (this->has_allocation_description()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->allocation_description_);
  }

  // .tensorflow.DataType dtype = 1;
  if (this->dtype() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::EnumSize(this->dtype());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void TensorDescription::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.TensorDescription)
  GOOGLE_DCHECK_NE(&from, this);
  const TensorDescription* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const TensorDescription>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.TensorDescription)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.TensorDescription)
    MergeFrom(*source);
  }
}

void TensorDescription::MergeFrom(const TensorDescription& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.TensorDescription)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_shape()) {
    mutable_shape()->::tensorflow::TensorShapeProto::MergeFrom(from.shape());
  }
  if (from.has_allocation_description()) {
    mutable_allocation_description()->::tensorflow::AllocationDescription::MergeFrom(from.allocation_description());
  }
  if (from.dtype() != 0) {
    set_dtype(from.dtype());
  }
}

void TensorDescription::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.TensorDescription)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void TensorDescription::CopyFrom(const TensorDescription& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.TensorDescription)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool TensorDescription::IsInitialized() const {
  return true;
}

void TensorDescription::Swap(TensorDescription* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    TensorDescription* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void TensorDescription::UnsafeArenaSwap(TensorDescription* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void TensorDescription::InternalSwap(TensorDescription* other) {
  std::swap(shape_, other->shape_);
  std::swap(allocation_description_, other->allocation_description_);
  std::swap(dtype_, other->dtype_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata TensorDescription::GetMetadata() const {
  protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcore_2fframework_2ftensor_5fdescription_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// TensorDescription

// .tensorflow.DataType dtype = 1;
void TensorDescription::clear_dtype() {
  dtype_ = 0;
}
::tensorflow::DataType TensorDescription::dtype() const {
  // @@protoc_insertion_point(field_get:tensorflow.TensorDescription.dtype)
  return static_cast< ::tensorflow::DataType >(dtype_);
}
void TensorDescription::set_dtype(::tensorflow::DataType value) {
  
  dtype_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.TensorDescription.dtype)
}

// .tensorflow.TensorShapeProto shape = 2;
bool TensorDescription::has_shape() const {
  return this != internal_default_instance() && shape_ != NULL;
}
void TensorDescription::clear_shape() {
  if (GetArenaNoVirtual() == NULL && shape_ != NULL) delete shape_;
  shape_ = NULL;
}
const ::tensorflow::TensorShapeProto& TensorDescription::shape() const {
  // @@protoc_insertion_point(field_get:tensorflow.TensorDescription.shape)
  return shape_ != NULL ? *shape_
                         : *::tensorflow::TensorShapeProto::internal_default_instance();
}
::tensorflow::TensorShapeProto* TensorDescription::mutable_shape() {
  
  if (shape_ == NULL) {
    _slow_mutable_shape();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.TensorDescription.shape)
  return shape_;
}
::tensorflow::TensorShapeProto* TensorDescription::release_shape() {
  // @@protoc_insertion_point(field_release:tensorflow.TensorDescription.shape)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_shape();
  } else {
    ::tensorflow::TensorShapeProto* temp = shape_;
    shape_ = NULL;
    return temp;
  }
}
 void TensorDescription::set_allocated_shape(::tensorflow::TensorShapeProto* shape) {
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
  // @@protoc_insertion_point(field_set_allocated:tensorflow.TensorDescription.shape)
}

// .tensorflow.AllocationDescription allocation_description = 4;
bool TensorDescription::has_allocation_description() const {
  return this != internal_default_instance() && allocation_description_ != NULL;
}
void TensorDescription::clear_allocation_description() {
  if (GetArenaNoVirtual() == NULL && allocation_description_ != NULL) delete allocation_description_;
  allocation_description_ = NULL;
}
const ::tensorflow::AllocationDescription& TensorDescription::allocation_description() const {
  // @@protoc_insertion_point(field_get:tensorflow.TensorDescription.allocation_description)
  return allocation_description_ != NULL ? *allocation_description_
                         : *::tensorflow::AllocationDescription::internal_default_instance();
}
::tensorflow::AllocationDescription* TensorDescription::mutable_allocation_description() {
  
  if (allocation_description_ == NULL) {
    _slow_mutable_allocation_description();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.TensorDescription.allocation_description)
  return allocation_description_;
}
::tensorflow::AllocationDescription* TensorDescription::release_allocation_description() {
  // @@protoc_insertion_point(field_release:tensorflow.TensorDescription.allocation_description)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_allocation_description();
  } else {
    ::tensorflow::AllocationDescription* temp = allocation_description_;
    allocation_description_ = NULL;
    return temp;
  }
}
 void TensorDescription::set_allocated_allocation_description(::tensorflow::AllocationDescription* allocation_description) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete allocation_description_;
  }
  if (allocation_description != NULL) {
    _slow_set_allocated_allocation_description(message_arena, &allocation_description);
  }
  allocation_description_ = allocation_description;
  if (allocation_description) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.TensorDescription.allocation_description)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
