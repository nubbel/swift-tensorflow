#  🚀 swift-tensorflow    


 [Tensorflow](https://www.tensorflow.org) data structures generated from [protobuf definitions](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/framework)  
 using [swift-protobuf](https://github.com/apple/swift-protobuf) &     using [swift-grpc-protobuf](https://github.com/grpc/grpc-swift)   


[RUNME.sh](RUNME.sh)  will  download latest tensorflow proto files / swift grpc and build protobuf files en masse. 



Requires Docker


```
# pull and start the prebuilt container, forward port 9000
docker run -it -p 9000:9000 tgowda/inception_serving_tika

# Inside the container, start tensorflow service
root@8311ea4e8074:/# /serving/server.sh

```
If you want to use a different port

May modify the `/serving/server.sh`, which has
`/serving/bazel-bin/tensorflow_serving/example/inception_inference --port=9000 /serving/inception-export/  &> /serving/inception_log &`




```swift

   
        
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
        
        

```





