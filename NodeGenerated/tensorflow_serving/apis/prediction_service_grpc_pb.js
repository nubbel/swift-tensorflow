// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tensorflow_serving_apis_classification_pb = require('../../tensorflow_serving/apis/classification_pb.js');
var tensorflow_serving_apis_get_model_metadata_pb = require('../../tensorflow_serving/apis/get_model_metadata_pb.js');
var tensorflow_serving_apis_inference_pb = require('../../tensorflow_serving/apis/inference_pb.js');
var tensorflow_serving_apis_predict_pb = require('../../tensorflow_serving/apis/predict_pb.js');
var tensorflow_serving_apis_regression_pb = require('../../tensorflow_serving/apis/regression_pb.js');

function serialize_tensorflow_serving_ClassificationRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_classification_pb.ClassificationRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.ClassificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_ClassificationRequest(buffer_arg) {
  return tensorflow_serving_apis_classification_pb.ClassificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_ClassificationResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_classification_pb.ClassificationResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.ClassificationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_ClassificationResponse(buffer_arg) {
  return tensorflow_serving_apis_classification_pb.ClassificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_GetModelMetadataRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.GetModelMetadataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_GetModelMetadataRequest(buffer_arg) {
  return tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_GetModelMetadataResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.GetModelMetadataResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_GetModelMetadataResponse(buffer_arg) {
  return tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_MultiInferenceRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_inference_pb.MultiInferenceRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.MultiInferenceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_MultiInferenceRequest(buffer_arg) {
  return tensorflow_serving_apis_inference_pb.MultiInferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_MultiInferenceResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_inference_pb.MultiInferenceResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.MultiInferenceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_MultiInferenceResponse(buffer_arg) {
  return tensorflow_serving_apis_inference_pb.MultiInferenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_PredictRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_predict_pb.PredictRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.PredictRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_PredictRequest(buffer_arg) {
  return tensorflow_serving_apis_predict_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_PredictResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_predict_pb.PredictResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.PredictResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_PredictResponse(buffer_arg) {
  return tensorflow_serving_apis_predict_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_RegressionRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_regression_pb.RegressionRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.RegressionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_RegressionRequest(buffer_arg) {
  return tensorflow_serving_apis_regression_pb.RegressionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_RegressionResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_regression_pb.RegressionResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.RegressionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_RegressionResponse(buffer_arg) {
  return tensorflow_serving_apis_regression_pb.RegressionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// open source marker; do not remove
// PredictionService provides access to machine-learned models loaded by
// model_servers.
var PredictionServiceService = exports.PredictionServiceService = {
  // Classify.
  classify: {
    path: '/tensorflow.serving.PredictionService/Classify',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_classification_pb.ClassificationRequest,
    responseType: tensorflow_serving_apis_classification_pb.ClassificationResponse,
    requestSerialize: serialize_tensorflow_serving_ClassificationRequest,
    requestDeserialize: deserialize_tensorflow_serving_ClassificationRequest,
    responseSerialize: serialize_tensorflow_serving_ClassificationResponse,
    responseDeserialize: deserialize_tensorflow_serving_ClassificationResponse,
  },
  // Regress.
  regress: {
    path: '/tensorflow.serving.PredictionService/Regress',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_regression_pb.RegressionRequest,
    responseType: tensorflow_serving_apis_regression_pb.RegressionResponse,
    requestSerialize: serialize_tensorflow_serving_RegressionRequest,
    requestDeserialize: deserialize_tensorflow_serving_RegressionRequest,
    responseSerialize: serialize_tensorflow_serving_RegressionResponse,
    responseDeserialize: deserialize_tensorflow_serving_RegressionResponse,
  },
  // Predict -- provides access to loaded TensorFlow model.
  predict: {
    path: '/tensorflow.serving.PredictionService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_predict_pb.PredictRequest,
    responseType: tensorflow_serving_apis_predict_pb.PredictResponse,
    requestSerialize: serialize_tensorflow_serving_PredictRequest,
    requestDeserialize: deserialize_tensorflow_serving_PredictRequest,
    responseSerialize: serialize_tensorflow_serving_PredictResponse,
    responseDeserialize: deserialize_tensorflow_serving_PredictResponse,
  },
  // MultiInference API for multi-headed models.
  multiInference: {
    path: '/tensorflow.serving.PredictionService/MultiInference',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_inference_pb.MultiInferenceRequest,
    responseType: tensorflow_serving_apis_inference_pb.MultiInferenceResponse,
    requestSerialize: serialize_tensorflow_serving_MultiInferenceRequest,
    requestDeserialize: deserialize_tensorflow_serving_MultiInferenceRequest,
    responseSerialize: serialize_tensorflow_serving_MultiInferenceResponse,
    responseDeserialize: deserialize_tensorflow_serving_MultiInferenceResponse,
  },
  // GetModelMetadata - provides access to metadata for loaded models.
  getModelMetadata: {
    path: '/tensorflow.serving.PredictionService/GetModelMetadata',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataRequest,
    responseType: tensorflow_serving_apis_get_model_metadata_pb.GetModelMetadataResponse,
    requestSerialize: serialize_tensorflow_serving_GetModelMetadataRequest,
    requestDeserialize: deserialize_tensorflow_serving_GetModelMetadataRequest,
    responseSerialize: serialize_tensorflow_serving_GetModelMetadataResponse,
    responseDeserialize: deserialize_tensorflow_serving_GetModelMetadataResponse,
  },
};

exports.PredictionServiceClient = grpc.makeGenericClientConstructor(PredictionServiceService);
