import React from "react";
import API from "../API";
import "./CausewayCam.css";

class CausewayCam extends React.Component {
    constructor () {
        super();
        this.fetchLatestImage=this.fetchLatestImage.bind(this);
        this.filterImages=this.filterImages.bind(this);

        //Set State in Class
        this.state={
            // trafficImages: [],
            cameraNo: "2702",
            retImage: "",
            timeStamp: "",
        }
    }

    componentDidMount() {
        this.fetchLatestImage();
        console.log("First Mount");
    }

    async fetchLatestImage() {
        const response = await API.get();
        console.log ("Checking API data: ", response);

        let trafficImages = [];
        if (response.status === 200) {
            trafficImages = response.data;
        }
        // console.log("Response Data:", trafficImages);

        const returnResults = trafficImages.items[0].cameras;
        for (const x in returnResults) {
            if (returnResults[x].camera_id === this.state.cameraNo) {
                // console.log(returnResults[x].image);

                let localTime = new Date(returnResults[x].timestamp).toTimeString();

                this.setState({
                    retImage: returnResults[x].image,
                    timeStamp: localTime,
                });
                console.log("Current Image: ", this.state.retImage);
            }
        }
        
        //Set State to update images
        this.setState( {
            ...this.state,
            // trafficImages,
        })
    }

    filterImages(e){
        e.preventDefault();
        const change = e.target.value;
        console.log(change);

        this.setState({
            ...this.state,
            cameraNo: change,
        })

        this.fetchLatestImage();
    }


    render() {

        //Deconstructing
        // const { trafficImages } = this.state;
        console.log("In Render", this.state.retImage, this.state.timeStamp);

        return (
            <div className="container">
                <h1>CausewayCam</h1>
                <div>
                    <form>
                        <select onChange={this.filterImages}>
                            <option value="2702">Woodlands Checkpoint</option>
                            <option value="2701">Causeway Camera</option>
                            <option value="2704">BKE Toward Checkpoint</option>
                        </select>
                    </form>
                </div>
                <hr/>
                <div>
                <div className="timestamp">Time taken: {this.state.timeStamp}</div>
                <img src={this.state.retImage} alt="" height="540" width = "960"/>
                </div>
            </div>
        );
    }
}

export default CausewayCam;