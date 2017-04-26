// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/framework/graph.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "tensorflow/core/framework/graph.pb.h"

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
class GraphDefDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<GraphDef> {
} _GraphDef_default_instance_;

namespace protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[1];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(GraphDef, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(GraphDef, node_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(GraphDef, versions_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(GraphDef, version_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(GraphDef, library_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(GraphDef)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_GraphDef_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "tensorflow/core/framework/graph.proto", schemas, file_default_instances, TableStruct::offsets, factory,
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
  _GraphDef_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fnode_5fdef_2eproto::InitDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ffunction_2eproto::InitDefaults();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fversions_2eproto::InitDefaults();
  _GraphDef_default_instance_.DefaultConstruct();
  _GraphDef_default_instance_.get_mutable()->versions_ = const_cast< ::tensorflow::VersionDef*>(
      ::tensorflow::VersionDef::internal_default_instance());
  _GraphDef_default_instance_.get_mutable()->library_ = const_cast< ::tensorflow::FunctionDefLibrary*>(
      ::tensorflow::FunctionDefLibrary::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n%tensorflow/core/framework/graph.proto\022"
      "\ntensorflow\032(tensorflow/core/framework/n"
      "ode_def.proto\032(tensorflow/core/framework"
      "/function.proto\032(tensorflow/core/framewo"
      "rk/versions.proto\"\235\001\n\010GraphDef\022!\n\004node\030\001"
      " \003(\0132\023.tensorflow.NodeDef\022(\n\010versions\030\004 "
      "\001(\0132\026.tensorflow.VersionDef\022\023\n\007version\030\003"
      " \001(\005B\002\030\001\022/\n\007library\030\002 \001(\0132\036.tensorflow.F"
      "unctionDefLibraryB,\n\030org.tensorflow.fram"
      "eworkB\013GraphProtosP\001\370\001\001b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 391);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "tensorflow/core/framework/graph.proto", &protobuf_RegisterTypes);
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fnode_5fdef_2eproto::AddDescriptors();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2ffunction_2eproto::AddDescriptors();
  ::tensorflow::protobuf_tensorflow_2fcore_2fframework_2fversions_2eproto::AddDescriptors();
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

}  // namespace protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto


// ===================================================================

void GraphDef::_slow_mutable_versions() {
  versions_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::VersionDef >(
      GetArenaNoVirtual());
}
::tensorflow::VersionDef* GraphDef::_slow_release_versions() {
  if (versions_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::VersionDef* temp = new ::tensorflow::VersionDef(*versions_);
    versions_ = NULL;
    return temp;
  }
}
::tensorflow::VersionDef* GraphDef::unsafe_arena_release_versions() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.GraphDef.versions)
  
  ::tensorflow::VersionDef* temp = versions_;
  versions_ = NULL;
  return temp;
}
void GraphDef::_slow_set_allocated_versions(
    ::google::protobuf::Arena* message_arena, ::tensorflow::VersionDef** versions) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*versions) == NULL) {
      message_arena->Own(*versions);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*versions)) {
      ::tensorflow::VersionDef* new_versions = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::VersionDef >(
            message_arena);
      new_versions->CopyFrom(**versions);
      *versions = new_versions;
    }
}
void GraphDef::unsafe_arena_set_allocated_versions(
    ::tensorflow::VersionDef* versions) {
  if (GetArenaNoVirtual() == NULL) {
    delete versions_;
  }
  versions_ = versions;
  if (versions) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.GraphDef.versions)
}
void GraphDef::_slow_mutable_library() {
  library_ = ::google::protobuf::Arena::CreateMessage< ::tensorflow::FunctionDefLibrary >(
      GetArenaNoVirtual());
}
::tensorflow::FunctionDefLibrary* GraphDef::_slow_release_library() {
  if (library_ == NULL) {
    return NULL;
  } else {
    ::tensorflow::FunctionDefLibrary* temp = new ::tensorflow::FunctionDefLibrary(*library_);
    library_ = NULL;
    return temp;
  }
}
::tensorflow::FunctionDefLibrary* GraphDef::unsafe_arena_release_library() {
  // @@protoc_insertion_point(field_unsafe_arena_release:tensorflow.GraphDef.library)
  
  ::tensorflow::FunctionDefLibrary* temp = library_;
  library_ = NULL;
  return temp;
}
void GraphDef::_slow_set_allocated_library(
    ::google::protobuf::Arena* message_arena, ::tensorflow::FunctionDefLibrary** library) {
    if (message_arena != NULL && 
        ::google::protobuf::Arena::GetArena(*library) == NULL) {
      message_arena->Own(*library);
    } else if (message_arena !=
               ::google::protobuf::Arena::GetArena(*library)) {
      ::tensorflow::FunctionDefLibrary* new_library = 
            ::google::protobuf::Arena::CreateMessage< ::tensorflow::FunctionDefLibrary >(
            message_arena);
      new_library->CopyFrom(**library);
      *library = new_library;
    }
}
void GraphDef::unsafe_arena_set_allocated_library(
    ::tensorflow::FunctionDefLibrary* library) {
  if (GetArenaNoVirtual() == NULL) {
    delete library_;
  }
  library_ = library;
  if (library) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:tensorflow.GraphDef.library)
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int GraphDef::kNodeFieldNumber;
const int GraphDef::kVersionsFieldNumber;
const int GraphDef::kVersionFieldNumber;
const int GraphDef::kLibraryFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

GraphDef::GraphDef()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:tensorflow.GraphDef)
}
GraphDef::GraphDef(::google::protobuf::Arena* arena)
  : ::google::protobuf::Message(),
  _internal_metadata_(arena),
  node_(arena) {
#ifdef GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::InitDefaults();
#endif  // GOOGLE_PROTOBUF_NO_STATIC_INITIALIZER
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:tensorflow.GraphDef)
}
GraphDef::GraphDef(const GraphDef& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      node_(from.node_),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_versions()) {
    versions_ = new ::tensorflow::VersionDef(*from.versions_);
  } else {
    versions_ = NULL;
  }
  if (from.has_library()) {
    library_ = new ::tensorflow::FunctionDefLibrary(*from.library_);
  } else {
    library_ = NULL;
  }
  version_ = from.version_;
  // @@protoc_insertion_point(copy_constructor:tensorflow.GraphDef)
}

void GraphDef::SharedCtor() {
  ::memset(&versions_, 0, reinterpret_cast<char*>(&version_) -
    reinterpret_cast<char*>(&versions_) + sizeof(version_));
  _cached_size_ = 0;
}

GraphDef::~GraphDef() {
  // @@protoc_insertion_point(destructor:tensorflow.GraphDef)
  SharedDtor();
}

void GraphDef::SharedDtor() {
  ::google::protobuf::Arena* arena = GetArenaNoVirtual();
  if (arena != NULL) {
    return;
  }

  if (this != internal_default_instance()) {
    delete versions_;
  }
  if (this != internal_default_instance()) {
    delete library_;
  }
}

void GraphDef::ArenaDtor(void* object) {
  GraphDef* _this = reinterpret_cast< GraphDef* >(object);
  (void)_this;
}
void GraphDef::RegisterArenaDtor(::google::protobuf::Arena* arena) {
}
void GraphDef::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* GraphDef::descriptor() {
  protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::file_level_metadata[0].descriptor;
}

const GraphDef& GraphDef::default_instance() {
  protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::InitDefaults();
  return *internal_default_instance();
}

GraphDef* GraphDef::New(::google::protobuf::Arena* arena) const {
  return ::google::protobuf::Arena::CreateMessage<GraphDef>(arena);
}

void GraphDef::Clear() {
// @@protoc_insertion_point(message_clear_start:tensorflow.GraphDef)
  node_.Clear();
  if (GetArenaNoVirtual() == NULL && versions_ != NULL) {
    delete versions_;
  }
  versions_ = NULL;
  if (GetArenaNoVirtual() == NULL && library_ != NULL) {
    delete library_;
  }
  library_ = NULL;
  version_ = 0;
}

bool GraphDef::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:tensorflow.GraphDef)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // repeated .tensorflow.NodeDef node = 1;
      case 1: {
        if (tag == 10u) {
          DO_(input->IncrementRecursionDepth());
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtualNoRecursionDepth(
                input, add_node()));
        } else {
          goto handle_unusual;
        }
        input->UnsafeDecrementRecursionDepth();
        break;
      }

      // .tensorflow.FunctionDefLibrary library = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_library()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // int32 version = 3 [deprecated = true];
      case 3: {
        if (tag == 24u) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int32, ::google::protobuf::internal::WireFormatLite::TYPE_INT32>(
                 input, &version_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .tensorflow.VersionDef versions = 4;
      case 4: {
        if (tag == 34u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_versions()));
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
  // @@protoc_insertion_point(parse_success:tensorflow.GraphDef)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:tensorflow.GraphDef)
  return false;
#undef DO_
}

void GraphDef::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:tensorflow.GraphDef)
  // repeated .tensorflow.NodeDef node = 1;
  for (unsigned int i = 0, n = this->node_size(); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, this->node(i), output);
  }

  // .tensorflow.FunctionDefLibrary library = 2;
  if (this->has_library()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, *this->library_, output);
  }

  // int32 version = 3 [deprecated = true];
  if (this->version() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt32(3, this->version(), output);
  }

  // .tensorflow.VersionDef versions = 4;
  if (this->has_versions()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      4, *this->versions_, output);
  }

  // @@protoc_insertion_point(serialize_end:tensorflow.GraphDef)
}

::google::protobuf::uint8* GraphDef::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:tensorflow.GraphDef)
  // repeated .tensorflow.NodeDef node = 1;
  for (unsigned int i = 0, n = this->node_size(); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, this->node(i), false, target);
  }

  // .tensorflow.FunctionDefLibrary library = 2;
  if (this->has_library()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        2, *this->library_, false, target);
  }

  // int32 version = 3 [deprecated = true];
  if (this->version() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt32ToArray(3, this->version(), target);
  }

  // .tensorflow.VersionDef versions = 4;
  if (this->has_versions()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        4, *this->versions_, false, target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:tensorflow.GraphDef)
  return target;
}

size_t GraphDef::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:tensorflow.GraphDef)
  size_t total_size = 0;

  // repeated .tensorflow.NodeDef node = 1;
  {
    unsigned int count = this->node_size();
    total_size += 1UL * count;
    for (unsigned int i = 0; i < count; i++) {
      total_size +=
        ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
          this->node(i));
    }
  }

  // .tensorflow.VersionDef versions = 4;
  if (this->has_versions()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->versions_);
  }

  // .tensorflow.FunctionDefLibrary library = 2;
  if (this->has_library()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->library_);
  }

  // int32 version = 3 [deprecated = true];
  if (this->version() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int32Size(
        this->version());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void GraphDef::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:tensorflow.GraphDef)
  GOOGLE_DCHECK_NE(&from, this);
  const GraphDef* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const GraphDef>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:tensorflow.GraphDef)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:tensorflow.GraphDef)
    MergeFrom(*source);
  }
}

void GraphDef::MergeFrom(const GraphDef& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:tensorflow.GraphDef)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  node_.MergeFrom(from.node_);
  if (from.has_versions()) {
    mutable_versions()->::tensorflow::VersionDef::MergeFrom(from.versions());
  }
  if (from.has_library()) {
    mutable_library()->::tensorflow::FunctionDefLibrary::MergeFrom(from.library());
  }
  if (from.version() != 0) {
    set_version(from.version());
  }
}

void GraphDef::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:tensorflow.GraphDef)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void GraphDef::CopyFrom(const GraphDef& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:tensorflow.GraphDef)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool GraphDef::IsInitialized() const {
  return true;
}

void GraphDef::Swap(GraphDef* other) {
  if (other == this) return;
  if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
    InternalSwap(other);
  } else {
    GraphDef* temp = New(GetArenaNoVirtual());
    temp->MergeFrom(*other);
    other->CopyFrom(*this);
    InternalSwap(temp);
    if (GetArenaNoVirtual() == NULL) {
      delete temp;
    }
  }
}
void GraphDef::UnsafeArenaSwap(GraphDef* other) {
  if (other == this) return;
  GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
  InternalSwap(other);
}
void GraphDef::InternalSwap(GraphDef* other) {
  node_.UnsafeArenaSwap(&other->node_);
  std::swap(versions_, other->versions_);
  std::swap(library_, other->library_);
  std::swap(version_, other->version_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata GraphDef::GetMetadata() const {
  protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_tensorflow_2fcore_2fframework_2fgraph_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// GraphDef

// repeated .tensorflow.NodeDef node = 1;
int GraphDef::node_size() const {
  return node_.size();
}
void GraphDef::clear_node() {
  node_.Clear();
}
const ::tensorflow::NodeDef& GraphDef::node(int index) const {
  // @@protoc_insertion_point(field_get:tensorflow.GraphDef.node)
  return node_.Get(index);
}
::tensorflow::NodeDef* GraphDef::mutable_node(int index) {
  // @@protoc_insertion_point(field_mutable:tensorflow.GraphDef.node)
  return node_.Mutable(index);
}
::tensorflow::NodeDef* GraphDef::add_node() {
  // @@protoc_insertion_point(field_add:tensorflow.GraphDef.node)
  return node_.Add();
}
::google::protobuf::RepeatedPtrField< ::tensorflow::NodeDef >*
GraphDef::mutable_node() {
  // @@protoc_insertion_point(field_mutable_list:tensorflow.GraphDef.node)
  return &node_;
}
const ::google::protobuf::RepeatedPtrField< ::tensorflow::NodeDef >&
GraphDef::node() const {
  // @@protoc_insertion_point(field_list:tensorflow.GraphDef.node)
  return node_;
}

// .tensorflow.VersionDef versions = 4;
bool GraphDef::has_versions() const {
  return this != internal_default_instance() && versions_ != NULL;
}
void GraphDef::clear_versions() {
  if (GetArenaNoVirtual() == NULL && versions_ != NULL) delete versions_;
  versions_ = NULL;
}
const ::tensorflow::VersionDef& GraphDef::versions() const {
  // @@protoc_insertion_point(field_get:tensorflow.GraphDef.versions)
  return versions_ != NULL ? *versions_
                         : *::tensorflow::VersionDef::internal_default_instance();
}
::tensorflow::VersionDef* GraphDef::mutable_versions() {
  
  if (versions_ == NULL) {
    _slow_mutable_versions();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.GraphDef.versions)
  return versions_;
}
::tensorflow::VersionDef* GraphDef::release_versions() {
  // @@protoc_insertion_point(field_release:tensorflow.GraphDef.versions)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_versions();
  } else {
    ::tensorflow::VersionDef* temp = versions_;
    versions_ = NULL;
    return temp;
  }
}
 void GraphDef::set_allocated_versions(::tensorflow::VersionDef* versions) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete versions_;
  }
  if (versions != NULL) {
    _slow_set_allocated_versions(message_arena, &versions);
  }
  versions_ = versions;
  if (versions) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.GraphDef.versions)
}

// int32 version = 3 [deprecated = true];
void GraphDef::clear_version() {
  version_ = 0;
}
::google::protobuf::int32 GraphDef::version() const {
  // @@protoc_insertion_point(field_get:tensorflow.GraphDef.version)
  return version_;
}
void GraphDef::set_version(::google::protobuf::int32 value) {
  
  version_ = value;
  // @@protoc_insertion_point(field_set:tensorflow.GraphDef.version)
}

// .tensorflow.FunctionDefLibrary library = 2;
bool GraphDef::has_library() const {
  return this != internal_default_instance() && library_ != NULL;
}
void GraphDef::clear_library() {
  if (GetArenaNoVirtual() == NULL && library_ != NULL) delete library_;
  library_ = NULL;
}
const ::tensorflow::FunctionDefLibrary& GraphDef::library() const {
  // @@protoc_insertion_point(field_get:tensorflow.GraphDef.library)
  return library_ != NULL ? *library_
                         : *::tensorflow::FunctionDefLibrary::internal_default_instance();
}
::tensorflow::FunctionDefLibrary* GraphDef::mutable_library() {
  
  if (library_ == NULL) {
    _slow_mutable_library();
  }
  // @@protoc_insertion_point(field_mutable:tensorflow.GraphDef.library)
  return library_;
}
::tensorflow::FunctionDefLibrary* GraphDef::release_library() {
  // @@protoc_insertion_point(field_release:tensorflow.GraphDef.library)
  
  if (GetArenaNoVirtual() != NULL) {
    return _slow_release_library();
  } else {
    ::tensorflow::FunctionDefLibrary* temp = library_;
    library_ = NULL;
    return temp;
  }
}
 void GraphDef::set_allocated_library(::tensorflow::FunctionDefLibrary* library) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete library_;
  }
  if (library != NULL) {
    _slow_set_allocated_library(message_arena, &library);
  }
  library_ = library;
  if (library) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:tensorflow.GraphDef.library)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace tensorflow

// @@protoc_insertion_point(global_scope)
