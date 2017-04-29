
import Cocoa

@NSApplicationMain


class AppDelegate: NSObject, NSApplicationDelegate {

  @IBOutlet weak var window: NSWindow!

  var echoProvider : Echo_EchoProvider!
  var insecureServer: Echo_EchoServer!
  var secureServer: Echo_EchoServer!

    var workerService: Tensorflow_Grpc_WorkerServiceService!
    
  func applicationDidFinishLaunching(_ aNotification: Notification) {

    
    
    // instantiate our custom-written application handler
    echoProvider = EchoProvider()

    // create and start a server for handling insecure requests
    insecureServer = Echo_EchoServer(address:"localhost:8081",
                                     provider:echoProvider)
    insecureServer.start()

    // create and start a server for handling secure requests
    let certificateURL = Bundle.main.url(forResource: "ssl", withExtension: "crt")!
    let keyURL = Bundle.main.url(forResource: "ssl", withExtension: "key")!
    secureServer = Echo_EchoServer(address:"localhost:8443",
                                   certificateURL:certificateURL,
                                   keyURL:keyURL,
                                   provider:echoProvider)
    secureServer.start()
    
    testTensorflow()
  
  }
    
    func testTensorflow(){
        /* 
         
         
         
         Requires Docker
         
         # pull and start the prebuilt container, forward port 9000
         docker run -it -p 9000:9000 tgowda/inception_serving_tika
         
         # Inside the container, start tensorflow service
         root@8311ea4e8074:/# /serving/server.sh

         
         
         */
        
        
   
        workerService = Tensorflow_Grpc_WorkerServiceService(address: "0.0.0.0:9000")
        let request = Tensorflow_GetStatusRequest()
        let status = try? workerService.getstatus(request) { (response, result) in
            print(request)
            print(result)
            
        }
        print("status:",status)
        
        /*
         
         status: Optional(Tensorflow.Tensorflow_Grpc_WorkerServiceGetStatusCall)
         Tensorflow.Tensorflow_GetStatusRequest:
         
         status 12: 
         

         
         
         
        var predictionServer : Tensorflow_Serving_PredictionServiceServer!
        var eventServer: Tensorflow_EventListenerServer!
        var workerServer: Tensorflow_Grpc_WorkerServiceServer!
        
        let testProvider = TestPredictionProvider()
        let testEventListenerProvider =  TestEventListenerProvider()
        let testWorkerProvider = TestWorkerProvider()
        predictionServer = Tensorflow_Serving_PredictionServiceServer(address: "localhost:9000", provider:testProvider)
        eventServer = Tensorflow_EventListenerServer(address: "localhost:9000", provider: testEventListenerProvider)
        workerServer = Tensorflow_Grpc_WorkerServiceServer(address: "localhost:9000", provider: testWorkerProvider)
        
        workerServer.start()
        predictionServer.start()
        eventServer.start()
        
        // TODO -
        
        ///  wire up the example grpc template
        //  /swift-tensorflow/serving/tensorflow/core/example/example.proto
        // anything that is a subclass of SwiftProtobuf.Message can be passed to servers
        
        */
        

    }
}
