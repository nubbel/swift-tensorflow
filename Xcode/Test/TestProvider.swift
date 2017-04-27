
import Foundation
class TestWorkerProvider:Tensorflow_Grpc_WorkerServiceProvider{
    
    func getstatus(request : Tensorflow_GetStatusRequest, session : Tensorflow_Grpc_WorkerServiceGetStatusSession) throws -> Tensorflow_GetStatusResponse{
        print("getstatus")
        let response = Tensorflow_GetStatusResponse()
        return response
    }
    func createworkersession(request : Tensorflow_CreateWorkerSessionRequest, session : Tensorflow_Grpc_WorkerServiceCreateWorkerSessionSession) throws -> Tensorflow_CreateWorkerSessionResponse{
        print("createworkersession")
        let response = Tensorflow_CreateWorkerSessionResponse()
        return response
    }
    func registergraph(request : Tensorflow_RegisterGraphRequest, session : Tensorflow_Grpc_WorkerServiceRegisterGraphSession) throws -> Tensorflow_RegisterGraphResponse{
        print("registergraph")
        let response = Tensorflow_RegisterGraphResponse()
        return response
    }
    func deregistergraph(request : Tensorflow_DeregisterGraphRequest, session : Tensorflow_Grpc_WorkerServiceDeregisterGraphSession) throws -> Tensorflow_DeregisterGraphResponse{
        print("deregistergraph")
        let response = Tensorflow_DeregisterGraphResponse()
        return response
    }
    func rungraph(request : Tensorflow_RunGraphRequest, session : Tensorflow_Grpc_WorkerServiceRunGraphSession) throws -> Tensorflow_RunGraphResponse{
        print("rungraph")
        let response = Tensorflow_RunGraphResponse()
        return response
    }
    func cleanupgraph(request : Tensorflow_CleanupGraphRequest, session : Tensorflow_Grpc_WorkerServiceCleanupGraphSession) throws -> Tensorflow_CleanupGraphResponse{
        
        print("cleanupgraph")
        let response = Tensorflow_CleanupGraphResponse()
        return response
    }
    func cleanupall(request : Tensorflow_CleanupAllRequest, session : Tensorflow_Grpc_WorkerServiceCleanupAllSession) throws -> Tensorflow_CleanupAllResponse{
        print("cleanupall")
        let response = Tensorflow_CleanupAllResponse()
        return response
    }
    func recvtensor(request : Tensorflow_RecvTensorRequest, session : Tensorflow_Grpc_WorkerServiceRecvTensorSession) throws -> Tensorflow_RecvTensorResponse{
        print("recvtensor")
        let response = Tensorflow_RecvTensorResponse()
        return response
    }
    func logging(request : Tensorflow_LoggingRequest, session : Tensorflow_Grpc_WorkerServiceLoggingSession) throws -> Tensorflow_LoggingResponse{
        print("logging")
        let response = Tensorflow_LoggingResponse()
        return response
    }
    func tracing(request : Tensorflow_TracingRequest, session : Tensorflow_Grpc_WorkerServiceTracingSession) throws -> Tensorflow_TracingResponse{
        print("tracing")
        let response = Tensorflow_TracingResponse()
        return response
    }
    
}

class TestPredictionProvider:Tensorflow_Serving_PredictionServiceProvider{
    func classify(request : Tensorflow_Serving_ClassificationRequest, session : Tensorflow_Serving_PredictionServiceClassifySession) throws -> Tensorflow_Serving_ClassificationResponse{
        print("classify")
        let response = Tensorflow_Serving_ClassificationResponse()
        return response
    }
    func regress(request : Tensorflow_Serving_RegressionRequest, session : Tensorflow_Serving_PredictionServiceRegressSession) throws -> Tensorflow_Serving_RegressionResponse{
        print("regress")
        let response = Tensorflow_Serving_RegressionResponse()
        return response
    }
    func predict(request : Tensorflow_Serving_PredictRequest, session : Tensorflow_Serving_PredictionServicePredictSession) throws -> Tensorflow_Serving_PredictResponse{
        print("predict")
        let response = Tensorflow_Serving_PredictResponse()
        return response
    }
    func multiinference(request : Tensorflow_Serving_MultiInferenceRequest, session : Tensorflow_Serving_PredictionServiceMultiInferenceSession) throws -> Tensorflow_Serving_MultiInferenceResponse{
        print("multiinference")
        let response = Tensorflow_Serving_MultiInferenceResponse()
        return response
    }
    func getmodelmetadata(request : Tensorflow_Serving_GetModelMetadataRequest, session : Tensorflow_Serving_PredictionServiceGetModelMetadataSession) throws -> Tensorflow_Serving_GetModelMetadataResponse{
        print("getmodelmetadata")
        let response = Tensorflow_Serving_GetModelMetadataResponse()
        return response
    }
}

class TestEventListenerProvider:Tensorflow_EventListenerProvider{
    func sendevents(session : Tensorflow_EventListenerSendEventsSession) throws{
        print("sendevents")
    }
}
