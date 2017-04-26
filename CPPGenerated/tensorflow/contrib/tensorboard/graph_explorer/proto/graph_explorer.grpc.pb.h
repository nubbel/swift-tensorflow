// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: tensorflow/contrib/tensorboard/graph_explorer/proto/graph_explorer.proto
// Original file comments:
// Copyright 2015 The TensorFlow Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// =============================================================================
//
// GraphExplorer is a tool that supports interactive, hierarchical visualization
// of graphs. GraphExplorer renders graphs generated by TensorFlow represented
// as GraphDef messages defined in tensorflow/core/framework/graph.proto. The
// GraphDef proto does not allow for explicitly specifying visual attributes of
// the graph such as color, line thickness, fonts, etc. This file introduces a
// new proto for representing graphs and specifying visual attributes of graphs.
//
// The structure of the Graph proto is given by the EBNF grammar below. Consult
// the message definitions below for details.
//
//  graph ::= node* edge* node_attribute* metanode_attribute* edge_attribute*
//            graph_attribute*
//  node  ::= node_id node_attribute* metanode_attribute* node_data*
//  edge  ::= source_id target_id edge_attribute* edge_data*
//
// A graph consists of a list of nodes and a list of edges and attributes for
// nodes, edges and the graph. Attributes have a name and a value and are
// represented as key-value pairs, with {"color", "blue"} being an example.
// Attributes have a scope, where the broadest scope is the graph and the
// narrowest is a node that has no internal structure.
#ifndef GRPC_tensorflow_2fcontrib_2ftensorboard_2fgraph_5fexplorer_2fproto_2fgraph_5fexplorer_2eproto__INCLUDED
#define GRPC_tensorflow_2fcontrib_2ftensorboard_2fgraph_5fexplorer_2fproto_2fgraph_5fexplorer_2eproto__INCLUDED

#include "tensorflow/contrib/tensorboard/graph_explorer/proto/graph_explorer.pb.h"

#include <grpc++/impl/codegen/async_stream.h>
#include <grpc++/impl/codegen/async_unary_call.h>
#include <grpc++/impl/codegen/method_handler_impl.h>
#include <grpc++/impl/codegen/proto_utils.h>
#include <grpc++/impl/codegen/rpc_method.h>
#include <grpc++/impl/codegen/service_type.h>
#include <grpc++/impl/codegen/status.h>
#include <grpc++/impl/codegen/stub_options.h>
#include <grpc++/impl/codegen/sync_stream.h>

namespace grpc {
class CompletionQueue;
class Channel;
class RpcService;
class ServerCompletionQueue;
class ServerContext;
}  // namespace grpc

namespace graph_explorer {

}  // namespace graph_explorer


#endif  // GRPC_tensorflow_2fcontrib_2ftensorboard_2fgraph_5fexplorer_2fproto_2fgraph_5fexplorer_2eproto__INCLUDED
