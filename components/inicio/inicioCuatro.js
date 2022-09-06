import React, {Component} from 'react';
export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        }
    }


    componentDidMount() {


        let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 40.7575285, lng: -73.9884469 }
        });

        let service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: 'Clínica+de+Fisioterapia+Up+Therapy+Mx'
        }, function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(place.reviews);
                // Intended behavior is to set this.setState({places.place.reviews})
            }
        })
    }
    render() {
        const { places } = this.state;
        return (
            <div>
                <p>
                    {
                        places.map((place) => {
                            return <p key={place.author_name}>{place.author_name}{place.rating}{place.text}</p>
                        })
                    }
                </p>
            </div>
        )
    }
}