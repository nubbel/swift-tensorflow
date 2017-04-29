/*
 *
 * Copyright 2016, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
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
