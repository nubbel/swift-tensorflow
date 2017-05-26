# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: tensorflow_serving/apis/prediction_service.proto for package 'tensorflow.serving'

require 'grpc'
require 'tensorflow_serving/apis/prediction_service_pb'

module Tensorflow
  module Serving
    module PredictionService
      # open source marker; do not remove
      # PredictionService provides access to machine-learned models loaded by
      # model_servers.
      class Service

        include GRPC::GenericService

        self.marshal_class_method = :encode
        self.unmarshal_class_method = :decode
        self.service_name = 'tensorflow.serving.PredictionService'

        # Classify.
        rpc :Classify, ClassificationRequest, ClassificationResponse
        # Regress.
        rpc :Regress, RegressionRequest, RegressionResponse
        # Predict -- provides access to loaded TensorFlow model.
        rpc :Predict, PredictRequest, PredictResponse
        # MultiInference API for multi-headed models.
        rpc :MultiInference, MultiInferenceRequest, MultiInferenceResponse
        # GetModelMetadata - provides access to metadata for loaded models.
        rpc :GetModelMetadata, GetModelMetadataRequest, GetModelMetadataResponse
      end

      Stub = Service.rpc_stub_class
    end
  end
end