
import Cocoa

@NSApplicationMain


class AppDelegate: NSObject, NSApplicationDelegate {

  @IBOutlet weak var window: NSWindow!

  var echoProvider : Echo_EchoProvider!
  var insecureServer: Echo_EchoServer!
  var secureServer: Echo_EchoServer!

    var workerService: Tensorflow_Grpc_WorkerServiceService!
    var inceptionService:Tensorflow_Serving_InceptionServiceService!
    
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
        
        
        var inceptionRequest = Tensorflow_Serving_InceptionRequest()
        if let imagePath = Bundle.main.pathForImageResource("chicken.jpg"){
            let url = URL.init(fileURLWithPath: imagePath)
            if let data  = try? Data.init(contentsOf: url){
                inceptionRequest.jpegEncoded = data
            }
        }else{
            print("FAILED to load image!")
            return;
        }
        
     
        inceptionService =  Tensorflow_Serving_InceptionServiceService(address: "0.0.0.0:9000")
       
        let _ = try? inceptionService.classify(inceptionRequest, completion: { (response, result) in

           print(response?.scores)
           print("🐣",response?.classes )
        })
    }
    
}
    
    
