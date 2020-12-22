
const imgClass1 = new ImgClass("showProtoImg","imgData1")
.setUp("imgDataList1","imgMenu1")
.addImg("protoImg.PNG")
.submitImg("actualImg")
.addSubContext("actualImg")

const ideaClass = new IdeaClass("createIdea","ideaData","idea");
ideaClass
.setUp("ideaId","ideaSearchClassName")
.submitIdea()
.addSubContext()
.showIdea()
.addIdea("techStuff")


