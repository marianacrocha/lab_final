import React from "react";


class App_ipma extends React.Component {
    state = {
        loading: true,
        cidades: null,
    }

    lista = []

    async componentDidMount() {
        const url = "https://api.ipma.pt/open-data/distrits-islands"
        const response = await fetch(url);
        const cidades = await response.json();

        this.lista = cidades.data.map((item)=><div>idDistrito: {item.idDistrito}, local: {item.local}</div>)

    }

    render() {

        if (!this.state.loading) {
        return  (
            <div>
                Loading...
            </div>
        );} else {

            return (
                <div>
                    {this.lista}
                </div>
            )
        }
}
}

export default App_ipma;