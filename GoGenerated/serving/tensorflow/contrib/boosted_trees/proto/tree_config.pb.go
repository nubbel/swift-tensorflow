// Code generated by protoc-gen-go.
// source: serving/tensorflow/contrib/boosted_trees/proto/tree_config.proto
// DO NOT EDIT!

/*
Package tensorflow_boosted_trees_trees is a generated protocol buffer package.

It is generated from these files:
	serving/tensorflow/contrib/boosted_trees/proto/tree_config.proto

It has these top-level messages:
	TreeNode
	TreeNodeMetadata
	Leaf
	Vector
	SparseVector
	DenseFloatBinarySplit
	SparseFloatBinarySplitDefaultLeft
	SparseFloatBinarySplitDefaultRight
	CategoricalIdBinarySplit
	CategoricalIdSetMembershipBinarySplit
	DecisionTreeConfig
	DecisionTreeMetadata
	GrowingMetadata
	DecisionTreeEnsembleConfig
*/
package tensorflow_boosted_trees_trees

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// TreeNode describes a node in a tree.
type TreeNode struct {
	// Types that are valid to be assigned to Node:
	//	*TreeNode_Leaf
	//	*TreeNode_DenseFloatBinarySplit
	//	*TreeNode_SparseFloatBinarySplitDefaultLeft
	//	*TreeNode_SparseFloatBinarySplitDefaultRight
	//	*TreeNode_CategoricalIdBinarySplit
	//	*TreeNode_CategoricalIdSetMembershipBinarySplit
	Node         isTreeNode_Node   `protobuf_oneof:"node"`
	NodeMetadata *TreeNodeMetadata `protobuf:"bytes,777,opt,name=node_metadata,json=nodeMetadata" json:"node_metadata,omitempty"`
}

func (m *TreeNode) Reset()                    { *m = TreeNode{} }
func (m *TreeNode) String() string            { return proto.CompactTextString(m) }
func (*TreeNode) ProtoMessage()               {}
func (*TreeNode) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type isTreeNode_Node interface {
	isTreeNode_Node()
}

type TreeNode_Leaf struct {
	Leaf *Leaf `protobuf:"bytes,1,opt,name=leaf,oneof"`
}
type TreeNode_DenseFloatBinarySplit struct {
	DenseFloatBinarySplit *DenseFloatBinarySplit `protobuf:"bytes,2,opt,name=dense_float_binary_split,json=denseFloatBinarySplit,oneof"`
}
type TreeNode_SparseFloatBinarySplitDefaultLeft struct {
	SparseFloatBinarySplitDefaultLeft *SparseFloatBinarySplitDefaultLeft `protobuf:"bytes,3,opt,name=sparse_float_binary_split_default_left,json=sparseFloatBinarySplitDefaultLeft,oneof"`
}
type TreeNode_SparseFloatBinarySplitDefaultRight struct {
	SparseFloatBinarySplitDefaultRight *SparseFloatBinarySplitDefaultRight `protobuf:"bytes,4,opt,name=sparse_float_binary_split_default_right,json=sparseFloatBinarySplitDefaultRight,oneof"`
}
type TreeNode_CategoricalIdBinarySplit struct {
	CategoricalIdBinarySplit *CategoricalIdBinarySplit `protobuf:"bytes,5,opt,name=categorical_id_binary_split,json=categoricalIdBinarySplit,oneof"`
}
type TreeNode_CategoricalIdSetMembershipBinarySplit struct {
	CategoricalIdSetMembershipBinarySplit *CategoricalIdSetMembershipBinarySplit `protobuf:"bytes,6,opt,name=categorical_id_set_membership_binary_split,json=categoricalIdSetMembershipBinarySplit,oneof"`
}

func (*TreeNode_Leaf) isTreeNode_Node()                                  {}
func (*TreeNode_DenseFloatBinarySplit) isTreeNode_Node()                 {}
func (*TreeNode_SparseFloatBinarySplitDefaultLeft) isTreeNode_Node()     {}
func (*TreeNode_SparseFloatBinarySplitDefaultRight) isTreeNode_Node()    {}
func (*TreeNode_CategoricalIdBinarySplit) isTreeNode_Node()              {}
func (*TreeNode_CategoricalIdSetMembershipBinarySplit) isTreeNode_Node() {}

func (m *TreeNode) GetNode() isTreeNode_Node {
	if m != nil {
		return m.Node
	}
	return nil
}

func (m *TreeNode) GetLeaf() *Leaf {
	if x, ok := m.GetNode().(*TreeNode_Leaf); ok {
		return x.Leaf
	}
	return nil
}

func (m *TreeNode) GetDenseFloatBinarySplit() *DenseFloatBinarySplit {
	if x, ok := m.GetNode().(*TreeNode_DenseFloatBinarySplit); ok {
		return x.DenseFloatBinarySplit
	}
	return nil
}

func (m *TreeNode) GetSparseFloatBinarySplitDefaultLeft() *SparseFloatBinarySplitDefaultLeft {
	if x, ok := m.GetNode().(*TreeNode_SparseFloatBinarySplitDefaultLeft); ok {
		return x.SparseFloatBinarySplitDefaultLeft
	}
	return nil
}

func (m *TreeNode) GetSparseFloatBinarySplitDefaultRight() *SparseFloatBinarySplitDefaultRight {
	if x, ok := m.GetNode().(*TreeNode_SparseFloatBinarySplitDefaultRight); ok {
		return x.SparseFloatBinarySplitDefaultRight
	}
	return nil
}

func (m *TreeNode) GetCategoricalIdBinarySplit() *CategoricalIdBinarySplit {
	if x, ok := m.GetNode().(*TreeNode_CategoricalIdBinarySplit); ok {
		return x.CategoricalIdBinarySplit
	}
	return nil
}

func (m *TreeNode) GetCategoricalIdSetMembershipBinarySplit() *CategoricalIdSetMembershipBinarySplit {
	if x, ok := m.GetNode().(*TreeNode_CategoricalIdSetMembershipBinarySplit); ok {
		return x.CategoricalIdSetMembershipBinarySplit
	}
	return nil
}

func (m *TreeNode) GetNodeMetadata() *TreeNodeMetadata {
	if m != nil {
		return m.NodeMetadata
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*TreeNode) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _TreeNode_OneofMarshaler, _TreeNode_OneofUnmarshaler, _TreeNode_OneofSizer, []interface{}{
		(*TreeNode_Leaf)(nil),
		(*TreeNode_DenseFloatBinarySplit)(nil),
		(*TreeNode_SparseFloatBinarySplitDefaultLeft)(nil),
		(*TreeNode_SparseFloatBinarySplitDefaultRight)(nil),
		(*TreeNode_CategoricalIdBinarySplit)(nil),
		(*TreeNode_CategoricalIdSetMembershipBinarySplit)(nil),
	}
}

func _TreeNode_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*TreeNode)
	// node
	switch x := m.Node.(type) {
	case *TreeNode_Leaf:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Leaf); err != nil {
			return err
		}
	case *TreeNode_DenseFloatBinarySplit:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.DenseFloatBinarySplit); err != nil {
			return err
		}
	case *TreeNode_SparseFloatBinarySplitDefaultLeft:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.SparseFloatBinarySplitDefaultLeft); err != nil {
			return err
		}
	case *TreeNode_SparseFloatBinarySplitDefaultRight:
		b.EncodeVarint(4<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.SparseFloatBinarySplitDefaultRight); err != nil {
			return err
		}
	case *TreeNode_CategoricalIdBinarySplit:
		b.EncodeVarint(5<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.CategoricalIdBinarySplit); err != nil {
			return err
		}
	case *TreeNode_CategoricalIdSetMembershipBinarySplit:
		b.EncodeVarint(6<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.CategoricalIdSetMembershipBinarySplit); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("TreeNode.Node has unexpected type %T", x)
	}
	return nil
}

func _TreeNode_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*TreeNode)
	switch tag {
	case 1: // node.leaf
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(Leaf)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_Leaf{msg}
		return true, err
	case 2: // node.dense_float_binary_split
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(DenseFloatBinarySplit)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_DenseFloatBinarySplit{msg}
		return true, err
	case 3: // node.sparse_float_binary_split_default_left
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(SparseFloatBinarySplitDefaultLeft)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_SparseFloatBinarySplitDefaultLeft{msg}
		return true, err
	case 4: // node.sparse_float_binary_split_default_right
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(SparseFloatBinarySplitDefaultRight)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_SparseFloatBinarySplitDefaultRight{msg}
		return true, err
	case 5: // node.categorical_id_binary_split
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(CategoricalIdBinarySplit)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_CategoricalIdBinarySplit{msg}
		return true, err
	case 6: // node.categorical_id_set_membership_binary_split
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(CategoricalIdSetMembershipBinarySplit)
		err := b.DecodeMessage(msg)
		m.Node = &TreeNode_CategoricalIdSetMembershipBinarySplit{msg}
		return true, err
	default:
		return false, nil
	}
}

func _TreeNode_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*TreeNode)
	// node
	switch x := m.Node.(type) {
	case *TreeNode_Leaf:
		s := proto.Size(x.Leaf)
		n += proto.SizeVarint(1<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *TreeNode_DenseFloatBinarySplit:
		s := proto.Size(x.DenseFloatBinarySplit)
		n += proto.SizeVarint(2<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *TreeNode_SparseFloatBinarySplitDefaultLeft:
		s := proto.Size(x.SparseFloatBinarySplitDefaultLeft)
		n += proto.SizeVarint(3<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *TreeNode_SparseFloatBinarySplitDefaultRight:
		s := proto.Size(x.SparseFloatBinarySplitDefaultRight)
		n += proto.SizeVarint(4<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *TreeNode_CategoricalIdBinarySplit:
		s := proto.Size(x.CategoricalIdBinarySplit)
		n += proto.SizeVarint(5<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *TreeNode_CategoricalIdSetMembershipBinarySplit:
		s := proto.Size(x.CategoricalIdSetMembershipBinarySplit)
		n += proto.SizeVarint(6<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// TreeNodeMetadata encodes metadata associated with each node in a tree.
type TreeNodeMetadata struct {
	// The gain associated with this node.
	Gain float32 `protobuf:"fixed32,1,opt,name=gain" json:"gain,omitempty"`
	// The original leaf node before this node was split.
	OriginalLeaf *Leaf `protobuf:"bytes,2,opt,name=original_leaf,json=originalLeaf" json:"original_leaf,omitempty"`
}

func (m *TreeNodeMetadata) Reset()                    { *m = TreeNodeMetadata{} }
func (m *TreeNodeMetadata) String() string            { return proto.CompactTextString(m) }
func (*TreeNodeMetadata) ProtoMessage()               {}
func (*TreeNodeMetadata) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *TreeNodeMetadata) GetGain() float32 {
	if m != nil {
		return m.Gain
	}
	return 0
}

func (m *TreeNodeMetadata) GetOriginalLeaf() *Leaf {
	if m != nil {
		return m.OriginalLeaf
	}
	return nil
}

// Leaves can either hold dense or sparse information.
type Leaf struct {
	// Types that are valid to be assigned to Leaf:
	//	*Leaf_Vector
	//	*Leaf_SparseVector
	Leaf isLeaf_Leaf `protobuf_oneof:"leaf"`
}

func (m *Leaf) Reset()                    { *m = Leaf{} }
func (m *Leaf) String() string            { return proto.CompactTextString(m) }
func (*Leaf) ProtoMessage()               {}
func (*Leaf) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

type isLeaf_Leaf interface {
	isLeaf_Leaf()
}

type Leaf_Vector struct {
	Vector *Vector `protobuf:"bytes,1,opt,name=vector,oneof"`
}
type Leaf_SparseVector struct {
	SparseVector *SparseVector `protobuf:"bytes,2,opt,name=sparse_vector,json=sparseVector,oneof"`
}

func (*Leaf_Vector) isLeaf_Leaf()       {}
func (*Leaf_SparseVector) isLeaf_Leaf() {}

func (m *Leaf) GetLeaf() isLeaf_Leaf {
	if m != nil {
		return m.Leaf
	}
	return nil
}

func (m *Leaf) GetVector() *Vector {
	if x, ok := m.GetLeaf().(*Leaf_Vector); ok {
		return x.Vector
	}
	return nil
}

func (m *Leaf) GetSparseVector() *SparseVector {
	if x, ok := m.GetLeaf().(*Leaf_SparseVector); ok {
		return x.SparseVector
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*Leaf) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _Leaf_OneofMarshaler, _Leaf_OneofUnmarshaler, _Leaf_OneofSizer, []interface{}{
		(*Leaf_Vector)(nil),
		(*Leaf_SparseVector)(nil),
	}
}

func _Leaf_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*Leaf)
	// leaf
	switch x := m.Leaf.(type) {
	case *Leaf_Vector:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Vector); err != nil {
			return err
		}
	case *Leaf_SparseVector:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.SparseVector); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("Leaf.Leaf has unexpected type %T", x)
	}
	return nil
}

func _Leaf_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*Leaf)
	switch tag {
	case 1: // leaf.vector
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(Vector)
		err := b.DecodeMessage(msg)
		m.Leaf = &Leaf_Vector{msg}
		return true, err
	case 2: // leaf.sparse_vector
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(SparseVector)
		err := b.DecodeMessage(msg)
		m.Leaf = &Leaf_SparseVector{msg}
		return true, err
	default:
		return false, nil
	}
}

func _Leaf_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*Leaf)
	// leaf
	switch x := m.Leaf.(type) {
	case *Leaf_Vector:
		s := proto.Size(x.Vector)
		n += proto.SizeVarint(1<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case *Leaf_SparseVector:
		s := proto.Size(x.SparseVector)
		n += proto.SizeVarint(2<<3 | proto.WireBytes)
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type Vector struct {
	Value []float32 `protobuf:"fixed32,1,rep,packed,name=value" json:"value,omitempty"`
}

func (m *Vector) Reset()                    { *m = Vector{} }
func (m *Vector) String() string            { return proto.CompactTextString(m) }
func (*Vector) ProtoMessage()               {}
func (*Vector) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *Vector) GetValue() []float32 {
	if m != nil {
		return m.Value
	}
	return nil
}

type SparseVector struct {
	Index []int32   `protobuf:"varint,1,rep,packed,name=index" json:"index,omitempty"`
	Value []float32 `protobuf:"fixed32,2,rep,packed,name=value" json:"value,omitempty"`
}

func (m *SparseVector) Reset()                    { *m = SparseVector{} }
func (m *SparseVector) String() string            { return proto.CompactTextString(m) }
func (*SparseVector) ProtoMessage()               {}
func (*SparseVector) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *SparseVector) GetIndex() []int32 {
	if m != nil {
		return m.Index
	}
	return nil
}

func (m *SparseVector) GetValue() []float32 {
	if m != nil {
		return m.Value
	}
	return nil
}

// Split rule for dense float features.
type DenseFloatBinarySplit struct {
	// Float feature column and split threshold describing
	// the rule feature <= threshold.
	FeatureColumn int32   `protobuf:"varint,1,opt,name=feature_column,json=featureColumn" json:"feature_column,omitempty"`
	Threshold     float32 `protobuf:"fixed32,2,opt,name=threshold" json:"threshold,omitempty"`
	// Node children indexing into a contiguous
	// vector of nodes starting from the root.
	LeftId  int32 `protobuf:"varint,3,opt,name=left_id,json=leftId" json:"left_id,omitempty"`
	RightId int32 `protobuf:"varint,4,opt,name=right_id,json=rightId" json:"right_id,omitempty"`
}

func (m *DenseFloatBinarySplit) Reset()                    { *m = DenseFloatBinarySplit{} }
func (m *DenseFloatBinarySplit) String() string            { return proto.CompactTextString(m) }
func (*DenseFloatBinarySplit) ProtoMessage()               {}
func (*DenseFloatBinarySplit) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5} }

func (m *DenseFloatBinarySplit) GetFeatureColumn() int32 {
	if m != nil {
		return m.FeatureColumn
	}
	return 0
}

func (m *DenseFloatBinarySplit) GetThreshold() float32 {
	if m != nil {
		return m.Threshold
	}
	return 0
}

func (m *DenseFloatBinarySplit) GetLeftId() int32 {
	if m != nil {
		return m.LeftId
	}
	return 0
}

func (m *DenseFloatBinarySplit) GetRightId() int32 {
	if m != nil {
		return m.RightId
	}
	return 0
}

// Split rule for sparse float features defaulting left for missing features.
type SparseFloatBinarySplitDefaultLeft struct {
	Split *DenseFloatBinarySplit `protobuf:"bytes,1,opt,name=split" json:"split,omitempty"`
}

func (m *SparseFloatBinarySplitDefaultLeft) Reset()         { *m = SparseFloatBinarySplitDefaultLeft{} }
func (m *SparseFloatBinarySplitDefaultLeft) String() string { return proto.CompactTextString(m) }
func (*SparseFloatBinarySplitDefaultLeft) ProtoMessage()    {}
func (*SparseFloatBinarySplitDefaultLeft) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{6}
}

func (m *SparseFloatBinarySplitDefaultLeft) GetSplit() *DenseFloatBinarySplit {
	if m != nil {
		return m.Split
	}
	return nil
}

// Split rule for sparse float features defaulting right for missing features.
type SparseFloatBinarySplitDefaultRight struct {
	Split *DenseFloatBinarySplit `protobuf:"bytes,1,opt,name=split" json:"split,omitempty"`
}

func (m *SparseFloatBinarySplitDefaultRight) Reset()         { *m = SparseFloatBinarySplitDefaultRight{} }
func (m *SparseFloatBinarySplitDefaultRight) String() string { return proto.CompactTextString(m) }
func (*SparseFloatBinarySplitDefaultRight) ProtoMessage()    {}
func (*SparseFloatBinarySplitDefaultRight) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{7}
}

func (m *SparseFloatBinarySplitDefaultRight) GetSplit() *DenseFloatBinarySplit {
	if m != nil {
		return m.Split
	}
	return nil
}

// Split rule for categorical features with a single feature Id.
type CategoricalIdBinarySplit struct {
	// Categorical feature column and Id describing
	// the rule feature == Id.
	FeatureColumn int32 `protobuf:"varint,1,opt,name=feature_column,json=featureColumn" json:"feature_column,omitempty"`
	FeatureId     int64 `protobuf:"varint,2,opt,name=feature_id,json=featureId" json:"feature_id,omitempty"`
	// Node children indexing into a contiguous
	// vector of nodes starting from the root.
	LeftId  int32 `protobuf:"varint,3,opt,name=left_id,json=leftId" json:"left_id,omitempty"`
	RightId int32 `protobuf:"varint,4,opt,name=right_id,json=rightId" json:"right_id,omitempty"`
}

func (m *CategoricalIdBinarySplit) Reset()                    { *m = CategoricalIdBinarySplit{} }
func (m *CategoricalIdBinarySplit) String() string            { return proto.CompactTextString(m) }
func (*CategoricalIdBinarySplit) ProtoMessage()               {}
func (*CategoricalIdBinarySplit) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{8} }

func (m *CategoricalIdBinarySplit) GetFeatureColumn() int32 {
	if m != nil {
		return m.FeatureColumn
	}
	return 0
}

func (m *CategoricalIdBinarySplit) GetFeatureId() int64 {
	if m != nil {
		return m.FeatureId
	}
	return 0
}

func (m *CategoricalIdBinarySplit) GetLeftId() int32 {
	if m != nil {
		return m.LeftId
	}
	return 0
}

func (m *CategoricalIdBinarySplit) GetRightId() int32 {
	if m != nil {
		return m.RightId
	}
	return 0
}

// Split rule for categorical features with a set of feature Ids.
type CategoricalIdSetMembershipBinarySplit struct {
	// Categorical feature column and Id describing
	// the rule feature ∈ feature_ids.
	FeatureColumn int32 `protobuf:"varint,1,opt,name=feature_column,json=featureColumn" json:"feature_column,omitempty"`
	// Sorted list of Ids in the set.
	FeatureIds []int64 `protobuf:"varint,2,rep,packed,name=feature_ids,json=featureIds" json:"feature_ids,omitempty"`
	// Node children indexing into a contiguous
	// vector of nodes starting from the root.
	LeftId  int32 `protobuf:"varint,3,opt,name=left_id,json=leftId" json:"left_id,omitempty"`
	RightId int32 `protobuf:"varint,4,opt,name=right_id,json=rightId" json:"right_id,omitempty"`
}

func (m *CategoricalIdSetMembershipBinarySplit) Reset()         { *m = CategoricalIdSetMembershipBinarySplit{} }
func (m *CategoricalIdSetMembershipBinarySplit) String() string { return proto.CompactTextString(m) }
func (*CategoricalIdSetMembershipBinarySplit) ProtoMessage()    {}
func (*CategoricalIdSetMembershipBinarySplit) Descriptor() ([]byte, []int) {
	return fileDescriptor0, []int{9}
}

func (m *CategoricalIdSetMembershipBinarySplit) GetFeatureColumn() int32 {
	if m != nil {
		return m.FeatureColumn
	}
	return 0
}

func (m *CategoricalIdSetMembershipBinarySplit) GetFeatureIds() []int64 {
	if m != nil {
		return m.FeatureIds
	}
	return nil
}

func (m *CategoricalIdSetMembershipBinarySplit) GetLeftId() int32 {
	if m != nil {
		return m.LeftId
	}
	return 0
}

func (m *CategoricalIdSetMembershipBinarySplit) GetRightId() int32 {
	if m != nil {
		return m.RightId
	}
	return 0
}

// DecisionTreeConfig describes a list of connected nodes.
// Node 0 must be the root and can carry any payload including a leaf
// in the case of representing the bias.
// Note that each node id is implicitly its index in the list of nodes.
type DecisionTreeConfig struct {
	Nodes []*TreeNode `protobuf:"bytes,1,rep,name=nodes" json:"nodes,omitempty"`
}

func (m *DecisionTreeConfig) Reset()                    { *m = DecisionTreeConfig{} }
func (m *DecisionTreeConfig) String() string            { return proto.CompactTextString(m) }
func (*DecisionTreeConfig) ProtoMessage()               {}
func (*DecisionTreeConfig) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{10} }

func (m *DecisionTreeConfig) GetNodes() []*TreeNode {
	if m != nil {
		return m.Nodes
	}
	return nil
}

type DecisionTreeMetadata struct {
	// How many times tree weight was updated (due to reweighting of the final
	// ensemble, dropout, shrinkage etc).
	NumTreeWeightUpdates int32 `protobuf:"varint,1,opt,name=num_tree_weight_updates,json=numTreeWeightUpdates" json:"num_tree_weight_updates,omitempty"`
	// Number of layers grown for this tree.
	NumLayersGrown int32 `protobuf:"varint,2,opt,name=num_layers_grown,json=numLayersGrown" json:"num_layers_grown,omitempty"`
	// Whether the tree is finalized in that no more layers can be grown.
	IsFinalized bool `protobuf:"varint,3,opt,name=is_finalized,json=isFinalized" json:"is_finalized,omitempty"`
}

func (m *DecisionTreeMetadata) Reset()                    { *m = DecisionTreeMetadata{} }
func (m *DecisionTreeMetadata) String() string            { return proto.CompactTextString(m) }
func (*DecisionTreeMetadata) ProtoMessage()               {}
func (*DecisionTreeMetadata) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{11} }

func (m *DecisionTreeMetadata) GetNumTreeWeightUpdates() int32 {
	if m != nil {
		return m.NumTreeWeightUpdates
	}
	return 0
}

func (m *DecisionTreeMetadata) GetNumLayersGrown() int32 {
	if m != nil {
		return m.NumLayersGrown
	}
	return 0
}

func (m *DecisionTreeMetadata) GetIsFinalized() bool {
	if m != nil {
		return m.IsFinalized
	}
	return false
}

type GrowingMetadata struct {
	// Number of trees that we have attempted to build. After pruning, these
	// trees might have been removed.
	NumTreesAttempted int64 `protobuf:"varint,1,opt,name=num_trees_attempted,json=numTreesAttempted" json:"num_trees_attempted,omitempty"`
	// Number of layers that we have attempted to build. After pruning, these
	// layers might have been removed.
	NumLayersAttempted int64 `protobuf:"varint,2,opt,name=num_layers_attempted,json=numLayersAttempted" json:"num_layers_attempted,omitempty"`
}

func (m *GrowingMetadata) Reset()                    { *m = GrowingMetadata{} }
func (m *GrowingMetadata) String() string            { return proto.CompactTextString(m) }
func (*GrowingMetadata) ProtoMessage()               {}
func (*GrowingMetadata) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{12} }

func (m *GrowingMetadata) GetNumTreesAttempted() int64 {
	if m != nil {
		return m.NumTreesAttempted
	}
	return 0
}

func (m *GrowingMetadata) GetNumLayersAttempted() int64 {
	if m != nil {
		return m.NumLayersAttempted
	}
	return 0
}

// DecisionTreeEnsembleConfig describes an ensemble of decision trees.
type DecisionTreeEnsembleConfig struct {
	Trees        []*DecisionTreeConfig   `protobuf:"bytes,1,rep,name=trees" json:"trees,omitempty"`
	TreeWeights  []float32               `protobuf:"fixed32,2,rep,packed,name=tree_weights,json=treeWeights" json:"tree_weights,omitempty"`
	TreeMetadata []*DecisionTreeMetadata `protobuf:"bytes,3,rep,name=tree_metadata,json=treeMetadata" json:"tree_metadata,omitempty"`
	// Metadata that is used during the training.
	GrowingMetadata *GrowingMetadata `protobuf:"bytes,4,opt,name=growing_metadata,json=growingMetadata" json:"growing_metadata,omitempty"`
}

func (m *DecisionTreeEnsembleConfig) Reset()                    { *m = DecisionTreeEnsembleConfig{} }
func (m *DecisionTreeEnsembleConfig) String() string            { return proto.CompactTextString(m) }
func (*DecisionTreeEnsembleConfig) ProtoMessage()               {}
func (*DecisionTreeEnsembleConfig) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{13} }

func (m *DecisionTreeEnsembleConfig) GetTrees() []*DecisionTreeConfig {
	if m != nil {
		return m.Trees
	}
	return nil
}

func (m *DecisionTreeEnsembleConfig) GetTreeWeights() []float32 {
	if m != nil {
		return m.TreeWeights
	}
	return nil
}

func (m *DecisionTreeEnsembleConfig) GetTreeMetadata() []*DecisionTreeMetadata {
	if m != nil {
		return m.TreeMetadata
	}
	return nil
}

func (m *DecisionTreeEnsembleConfig) GetGrowingMetadata() *GrowingMetadata {
	if m != nil {
		return m.GrowingMetadata
	}
	return nil
}

func init() {
	proto.RegisterType((*TreeNode)(nil), "tensorflow.boosted_trees.trees.TreeNode")
	proto.RegisterType((*TreeNodeMetadata)(nil), "tensorflow.boosted_trees.trees.TreeNodeMetadata")
	proto.RegisterType((*Leaf)(nil), "tensorflow.boosted_trees.trees.Leaf")
	proto.RegisterType((*Vector)(nil), "tensorflow.boosted_trees.trees.Vector")
	proto.RegisterType((*SparseVector)(nil), "tensorflow.boosted_trees.trees.SparseVector")
	proto.RegisterType((*DenseFloatBinarySplit)(nil), "tensorflow.boosted_trees.trees.DenseFloatBinarySplit")
	proto.RegisterType((*SparseFloatBinarySplitDefaultLeft)(nil), "tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultLeft")
	proto.RegisterType((*SparseFloatBinarySplitDefaultRight)(nil), "tensorflow.boosted_trees.trees.SparseFloatBinarySplitDefaultRight")
	proto.RegisterType((*CategoricalIdBinarySplit)(nil), "tensorflow.boosted_trees.trees.CategoricalIdBinarySplit")
	proto.RegisterType((*CategoricalIdSetMembershipBinarySplit)(nil), "tensorflow.boosted_trees.trees.CategoricalIdSetMembershipBinarySplit")
	proto.RegisterType((*DecisionTreeConfig)(nil), "tensorflow.boosted_trees.trees.DecisionTreeConfig")
	proto.RegisterType((*DecisionTreeMetadata)(nil), "tensorflow.boosted_trees.trees.DecisionTreeMetadata")
	proto.RegisterType((*GrowingMetadata)(nil), "tensorflow.boosted_trees.trees.GrowingMetadata")
	proto.RegisterType((*DecisionTreeEnsembleConfig)(nil), "tensorflow.boosted_trees.trees.DecisionTreeEnsembleConfig")
}

func init() {
	proto.RegisterFile("serving/tensorflow/contrib/boosted_trees/proto/tree_config.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 917 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x56, 0xcf, 0x8f, 0xdb, 0x44,
	0x14, 0x5e, 0x27, 0x71, 0xba, 0x7d, 0x49, 0xda, 0x65, 0xd8, 0xaa, 0xe6, 0x57, 0xe9, 0x5a, 0x6c,
	0x59, 0x21, 0x94, 0x54, 0x0b, 0x95, 0x50, 0x0f, 0xa8, 0xdd, 0xdd, 0x96, 0x44, 0x6c, 0x39, 0xcc,
	0x96, 0x22, 0xb8, 0x58, 0x93, 0x78, 0xec, 0x1d, 0xc9, 0x1e, 0xa7, 0x9e, 0xc9, 0x2e, 0xcb, 0x7f,
	0xc0, 0x8d, 0x03, 0x42, 0x82, 0x23, 0x88, 0xff, 0x83, 0x7f, 0x88, 0x3b, 0x47, 0x34, 0x6f, 0x1c,
	0xc7, 0x89, 0xb6, 0x38, 0x6d, 0xb9, 0x44, 0x9e, 0x37, 0xef, 0xfb, 0xde, 0x97, 0x37, 0xf3, 0x3e,
	0x1b, 0x1e, 0x28, 0x9e, 0x9f, 0x09, 0x19, 0x0f, 0x34, 0x97, 0x2a, 0xcb, 0xa3, 0x24, 0x3b, 0x1f,
	0x4c, 0x32, 0xa9, 0x73, 0x31, 0x1e, 0x8c, 0xb3, 0x4c, 0x69, 0x1e, 0x06, 0x3a, 0xe7, 0x5c, 0x0d,
	0xa6, 0x79, 0xa6, 0xb3, 0x81, 0x79, 0x0e, 0x26, 0x99, 0x8c, 0x44, 0xdc, 0xc7, 0x08, 0xb9, 0xb5,
	0x40, 0xf6, 0x97, 0x10, 0x7d, 0xfc, 0xf5, 0xff, 0x6e, 0xc3, 0xe6, 0xd3, 0x9c, 0xf3, 0xaf, 0xb2,
	0x90, 0x93, 0xfb, 0xd0, 0x4a, 0x38, 0x8b, 0x3c, 0xe7, 0xb6, 0xb3, 0xd7, 0xd9, 0xff, 0xa0, 0xff,
	0xdf, 0xd8, 0xfe, 0x31, 0x67, 0xd1, 0x70, 0x83, 0x22, 0x86, 0x4c, 0xc1, 0x0b, 0xb9, 0x54, 0x3c,
	0x88, 0x92, 0x8c, 0xe9, 0x60, 0x2c, 0x24, 0xcb, 0x2f, 0x02, 0x35, 0x4d, 0x84, 0xf6, 0x1a, 0xc8,
	0x77, 0xaf, 0x8e, 0xef, 0xc8, 0xe0, 0x1f, 0x1b, 0xf8, 0x01, 0xa2, 0x4f, 0x0c, 0x78, 0xb8, 0x41,
	0x6f, 0x84, 0x97, 0x6d, 0x90, 0x5f, 0x1c, 0xb8, 0xa3, 0xa6, 0x2c, 0xbf, 0xb4, 0x66, 0x10, 0xf2,
	0x88, 0xcd, 0x12, 0x1d, 0x24, 0x3c, 0xd2, 0x5e, 0x13, 0x05, 0x3c, 0xac, 0x13, 0x70, 0x82, 0x6c,
	0xab, 0x85, 0x8e, 0x2c, 0xd3, 0x31, 0x8f, 0x8c, 0x98, 0x1d, 0x55, 0x97, 0x44, 0x7e, 0x75, 0xe0,
	0xc3, 0x7a, 0x61, 0xb9, 0x88, 0x4f, 0xb5, 0xd7, 0x42, 0x65, 0x07, 0xaf, 0xa5, 0x8c, 0x1a, 0xa6,
	0xe1, 0x06, 0xf5, 0x55, 0x6d, 0x16, 0xb9, 0x80, 0x77, 0x26, 0x4c, 0xf3, 0x38, 0xcb, 0xc5, 0x84,
	0x25, 0x81, 0x08, 0x97, 0x4f, 0xca, 0x45, 0x39, 0x9f, 0xd5, 0xc9, 0x39, 0x5c, 0x50, 0x8c, 0xc2,
	0xe5, 0xc3, 0xf2, 0x26, 0x2f, 0xd8, 0x23, 0xbf, 0x3b, 0xf0, 0xd1, 0x4a, 0x6d, 0xc5, 0x75, 0x90,
	0xf2, 0x74, 0xcc, 0x73, 0x75, 0x2a, 0xa6, 0xcb, 0x52, 0xda, 0x28, 0xe5, 0xd1, 0x4b, 0x49, 0x39,
	0xe1, 0xfa, 0x49, 0x49, 0xb7, 0xac, 0x6b, 0x77, 0xb2, 0x4e, 0x22, 0x79, 0x06, 0x3d, 0x99, 0x85,
	0x3c, 0x48, 0xb9, 0x66, 0x21, 0xd3, 0xcc, 0xfb, 0xd1, 0xea, 0xb8, 0x5b, 0xa7, 0x63, 0x3e, 0x44,
	0x4f, 0x0a, 0x20, 0xed, 0xca, 0xca, 0xea, 0xa0, 0x0d, 0x2d, 0xb3, 0xf6, 0x9f, 0xc3, 0xd6, 0x6a,
	0x26, 0x21, 0xd0, 0x8a, 0x99, 0x90, 0x38, 0x76, 0x0d, 0x8a, 0xcf, 0x64, 0x04, 0xbd, 0x2c, 0x17,
	0xb1, 0x90, 0x2c, 0x09, 0x70, 0x26, 0x1b, 0xeb, 0xcf, 0x24, 0xed, 0xce, 0xa1, 0x66, 0xe5, 0xff,
	0xe9, 0x40, 0xcb, 0x3c, 0x90, 0x07, 0xd0, 0x3e, 0xe3, 0x13, 0x9d, 0xe5, 0xc5, 0x80, 0xdf, 0xa9,
	0x23, 0x7b, 0x86, 0xd9, 0xc3, 0x0d, 0x5a, 0xe0, 0xc8, 0x09, 0xf4, 0x8a, 0x8b, 0x5d, 0x10, 0x59,
	0x55, 0x1f, 0xaf, 0x77, 0x7d, 0x4b, 0xba, 0xae, 0xaa, 0xac, 0x4d, 0x6b, 0xcc, 0x3f, 0xf4, 0x6f,
	0x41, 0xdb, 0x46, 0xc8, 0x36, 0xb8, 0x67, 0x2c, 0x99, 0x71, 0xcf, 0xb9, 0xdd, 0xdc, 0x6b, 0x50,
	0xbb, 0xf0, 0xef, 0x43, 0xb7, 0xca, 0x63, 0xb2, 0x84, 0x0c, 0xf9, 0xf7, 0x98, 0xe5, 0x52, 0xbb,
	0x58, 0x60, 0x1b, 0x55, 0xec, 0x4f, 0x0e, 0xdc, 0xb8, 0xd4, 0x5e, 0xc8, 0x2e, 0x5c, 0x8b, 0x38,
	0xd3, 0xb3, 0xdc, 0x18, 0x67, 0x32, 0x4b, 0xed, 0x31, 0xb8, 0xb4, 0x57, 0x44, 0x0f, 0x31, 0x48,
	0xde, 0x85, 0xab, 0xfa, 0x34, 0xe7, 0xea, 0x34, 0x4b, 0x42, 0xfc, 0xd7, 0x0d, 0xba, 0x08, 0x90,
	0x9b, 0x70, 0xc5, 0xf8, 0x4c, 0x20, 0x42, 0xb4, 0x1a, 0x97, 0xb6, 0xcd, 0x72, 0x14, 0x92, 0xb7,
	0x60, 0x13, 0xe7, 0xdc, 0xec, 0xb4, 0x70, 0xe7, 0x0a, 0xae, 0x47, 0xa1, 0x3f, 0x85, 0x9d, 0x5a,
	0xbf, 0x21, 0x5f, 0x82, 0x6b, 0xa7, 0xc1, 0x79, 0x0d, 0x0b, 0xa5, 0x96, 0xc3, 0x7f, 0x0e, 0x7e,
	0xbd, 0x8f, 0xfc, 0xbf, 0x25, 0x7f, 0x76, 0xc0, 0x7b, 0x91, 0x59, 0xac, 0xdb, 0xfa, 0xf7, 0x00,
	0xe6, 0x69, 0xc2, 0xf6, 0xbe, 0x49, 0xaf, 0x16, 0x91, 0xd1, 0xab, 0xf5, 0xfe, 0x0f, 0x07, 0x76,
	0xd7, 0x32, 0x8e, 0x75, 0x35, 0xbe, 0x0f, 0x9d, 0x85, 0x46, 0x85, 0x77, 0xaf, 0x49, 0xa1, 0x14,
	0xa9, 0x5e, 0x49, 0xe5, 0x53, 0x20, 0x47, 0x7c, 0x22, 0x94, 0xc8, 0xa4, 0xf1, 0x8c, 0x43, 0x7c,
	0xaf, 0x93, 0xcf, 0xc1, 0x35, 0x4e, 0xa2, 0xf0, 0xda, 0x77, 0xf6, 0xf7, 0xd6, 0x35, 0x26, 0x6a,
	0x61, 0xfe, 0x6f, 0x0e, 0x6c, 0x57, 0x69, 0x4b, 0x1b, 0xba, 0x07, 0x37, 0xe5, 0x2c, 0x45, 0x6c,
	0x70, 0xce, 0x51, 0xd3, 0x6c, 0x1a, 0x32, 0x8d, 0xa5, 0x8c, 0xb0, 0x6d, 0x39, 0x4b, 0x0d, 0xe2,
	0x1b, 0xdc, 0xfc, 0xda, 0xee, 0x91, 0x3d, 0xd8, 0x32, 0xb0, 0x84, 0x5d, 0xf0, 0x5c, 0x05, 0x71,
	0x9e, 0x9d, 0x4b, 0x3c, 0x24, 0x97, 0x5e, 0x93, 0xb3, 0xf4, 0x18, 0xc3, 0x5f, 0x98, 0x28, 0xd9,
	0x81, 0xae, 0x50, 0x41, 0x64, 0x8c, 0x49, 0xfc, 0xc0, 0x6d, 0x23, 0x36, 0x69, 0x47, 0xa8, 0xc7,
	0xf3, 0x90, 0xaf, 0xe0, 0xba, 0xc9, 0x15, 0x32, 0x2e, 0x65, 0xf5, 0xe1, 0xcd, 0xb9, 0x2c, 0x15,
	0x30, 0xad, 0x79, 0x3a, 0xd5, 0x3c, 0x44, 0x49, 0x4d, 0xfa, 0x46, 0x21, 0x49, 0x3d, 0x9c, 0x6f,
	0x90, 0xbb, 0xb0, 0x5d, 0xd1, 0xb3, 0x00, 0xd8, 0x8b, 0x43, 0x4a, 0x4d, 0x25, 0xc2, 0xff, 0xab,
	0x01, 0x6f, 0x57, 0x3b, 0xf2, 0x48, 0x2a, 0x9e, 0x8e, 0x93, 0x79, 0xc3, 0x87, 0xe0, 0x62, 0xf1,
	0xa2, 0xe1, 0xfb, 0xf5, 0x03, 0xb1, 0x7a, 0x66, 0xd4, 0x12, 0x98, 0x06, 0x54, 0xba, 0xab, 0x0a,
	0x8b, 0xea, 0xe8, 0xb2, 0xa7, 0x8a, 0x7c, 0x0b, 0x3d, 0x4c, 0x29, 0xdf, 0x3f, 0x4d, 0x2c, 0xfa,
	0xe9, 0xcb, 0x14, 0x5d, 0xbc, 0x82, 0x74, 0xf5, 0x7c, 0xbf, 0x83, 0xad, 0xd8, 0xf6, 0x76, 0xc1,
	0x6e, 0x3f, 0x3f, 0x06, 0x75, 0xec, 0x2b, 0x67, 0x42, 0xaf, 0xc7, 0xcb, 0x81, 0x83, 0xe6, 0x3f,
	0x8e, 0x33, 0x6e, 0xe3, 0x27, 0xe7, 0x27, 0xff, 0x06, 0x00, 0x00, 0xff, 0xff, 0xe1, 0x14, 0x31,
	0x34, 0xb6, 0x0a, 0x00, 0x00,
}
