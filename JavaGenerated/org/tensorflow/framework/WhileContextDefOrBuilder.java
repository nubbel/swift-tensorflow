// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/protobuf/control_flow.proto

package org.tensorflow.framework;

public interface WhileContextDefOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.WhileContextDef)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Name of the context.
   * </pre>
   *
   * <code>string context_name = 1;</code>
   */
  java.lang.String getContextName();
  /**
   * <pre>
   * Name of the context.
   * </pre>
   *
   * <code>string context_name = 1;</code>
   */
  com.google.protobuf.ByteString
      getContextNameBytes();

  /**
   * <pre>
   * The number of iterations allowed to run in parallel.
   * </pre>
   *
   * <code>int32 parallel_iterations = 2;</code>
   */
  int getParallelIterations();

  /**
   * <pre>
   * Whether backprop is enabled for this while loop.
   * </pre>
   *
   * <code>bool back_prop = 3;</code>
   */
  boolean getBackProp();

  /**
   * <pre>
   * Whether GPU-CPU memory swap is enabled for this loop.
   * </pre>
   *
   * <code>bool swap_memory = 4;</code>
   */
  boolean getSwapMemory();

  /**
   * <pre>
   * Name of the pivot tensor.
   * </pre>
   *
   * <code>string pivot_name = 5;</code>
   */
  java.lang.String getPivotName();
  /**
   * <pre>
   * Name of the pivot tensor.
   * </pre>
   *
   * <code>string pivot_name = 5;</code>
   */
  com.google.protobuf.ByteString
      getPivotNameBytes();

  /**
   * <pre>
   * Name of the pivot_for_pred tensor.
   * </pre>
   *
   * <code>string pivot_for_pred_name = 6;</code>
   */
  java.lang.String getPivotForPredName();
  /**
   * <pre>
   * Name of the pivot_for_pred tensor.
   * </pre>
   *
   * <code>string pivot_for_pred_name = 6;</code>
   */
  com.google.protobuf.ByteString
      getPivotForPredNameBytes();

  /**
   * <pre>
   * Name of the pivot_for_body tensor.
   * </pre>
   *
   * <code>string pivot_for_body_name = 7;</code>
   */
  java.lang.String getPivotForBodyName();
  /**
   * <pre>
   * Name of the pivot_for_body tensor.
   * </pre>
   *
   * <code>string pivot_for_body_name = 7;</code>
   */
  com.google.protobuf.ByteString
      getPivotForBodyNameBytes();

  /**
   * <pre>
   * List of names for exit tensors.
   * </pre>
   *
   * <code>repeated string loop_exit_names = 8;</code>
   */
  java.util.List<java.lang.String>
      getLoopExitNamesList();
  /**
   * <pre>
   * List of names for exit tensors.
   * </pre>
   *
   * <code>repeated string loop_exit_names = 8;</code>
   */
  int getLoopExitNamesCount();
  /**
   * <pre>
   * List of names for exit tensors.
   * </pre>
   *
   * <code>repeated string loop_exit_names = 8;</code>
   */
  java.lang.String getLoopExitNames(int index);
  /**
   * <pre>
   * List of names for exit tensors.
   * </pre>
   *
   * <code>repeated string loop_exit_names = 8;</code>
   */
  com.google.protobuf.ByteString
      getLoopExitNamesBytes(int index);

  /**
   * <pre>
   * Values and external values in control flow context.
   * </pre>
   *
   * <code>.tensorflow.ValuesDef values_def = 9;</code>
   */
  boolean hasValuesDef();
  /**
   * <pre>
   * Values and external values in control flow context.
   * </pre>
   *
   * <code>.tensorflow.ValuesDef values_def = 9;</code>
   */
  org.tensorflow.framework.ValuesDef getValuesDef();
  /**
   * <pre>
   * Values and external values in control flow context.
   * </pre>
   *
   * <code>.tensorflow.ValuesDef values_def = 9;</code>
   */
  org.tensorflow.framework.ValuesDefOrBuilder getValuesDefOrBuilder();
}
