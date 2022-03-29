// Imports //
import React from 'react';
import '../sass/components/_card.scss';

// Variables & Functions //

function Card() {
    const [state, setState] = React.useState({
        pseudo: "",
        email: "",
        age: "",
        taille: "",
        poids: "",
        objectif: "",
        intolerance: []
    });

    const handleChange = evt => {
        let value = evt.target.value
        // evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        console.log("On utilise la fonction HandleChange");
        console.log("pour : "+ evt.target.name);
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleChangeForIntolerance = evt => {
        let value = evt.target.value
        console.log("On utilise la fonction handleChangeForIntolerance");
        console.log("pour : "+evt.target.name);
        setState({
            ...state,
            intolerance: [...state.intolerance, value]
        });
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        //alert(`Bonjour ${state.pseudo}`)
        console.log("Formulaire validé!")
        console.log("pseudo : "+state.pseudo)
        console.log("email : "+state.email)
        console.log("age : "+state.age)
        console.log("taille : "+state.taille+" Cm")
        console.log("poids : "+state.poids+" Kg")
        console.log("objectif : "+state.objectif)
        console.dir(state)
        console.log("intolerances : "+state.intolerance)
    };


    return(
        <form onSubmit={handleSubmit}>
        <div className="card">
            {/* Avatar, pseudo et email */}
            <div className="card_top">
                <div>
                    <div>
                        <label for="file">
                            <input type="file" name="file" id="file" accept="images/*" className="avatar-input"/>
                            <figure className="avatar-circle">
                                <figcaption className="for_hover_avatar">
                                </figcaption>
                            </figure>
                        </label>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="name">
                            <input type="text" id="name" name="pseudo" value={state.pseudo} className="input_text" onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label for="mail">
                            <input type="email" id="mail" name="email" value={state.email} className="input_text" onChange={handleChange}/>
                        </label>
                    </div>
                </div>
            </div>
            {/* Age, taille, poids, objectifs et intolérances alimentaires */}
            <div className="card_middle">
                <div className="datas_num">
                    <div>
                        <label for="age" className="label_num">Age</label>
                        <input type="text" id="age" name="age" value={state.age} className="input_num" onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="taille" className="label_num">Taille</label>
                        <input type="text" id="taille" name="taille" value={state.taille} className="input_num" onChange={handleChange}/>
                        <span for="taille"> cm</span>
                    </div>
                    <div>
                    <label for="poids" className="label_num">Poids</label>
                        <input type="text" id="poids" name="poids" value={state.poids} className="input_num" onChange={handleChange}/>
                        <span for="poids"> kg</span>
                    </div>
                </div>
                <div className="datas_others">
                    <div className="objectifs">
                        <legend>Quel est votre objectif ?</legend>
                        <div className="div_obj">
                            <div className="div_obj_50">
                                <div>
                                    <input type="radio" id="prendre_poids" name="objectif" value={"prendre_poids"} onChange={handleChange}/>
                                    <label for="prendre_poids">Prendre du poids</label>
                                </div>
                                <div>
                                    <input type="radio" id="perdre_poids" name="objectif" value={"perdre_poids"} onChange={handleChange}/>
                                    <label for="perdre_poids">Perdre du poids</label>
                                </div>
                            </div>
                            <div className="div_obj_50">
                                <div>
                                    <input type="radio" id="reequilibre" name="objectif" value={"reequilibre"} onChange={handleChange}/>
                                    <label for="reequilibre">Réequilibre mon alimentation</label>
                                </div>
                                <div>
                                    <input type="radio" id="adapter" name="objectif" value={"adapter"} onChange={handleChange}/>
                                    <label for="adapter">Adapter mon alimentation à une pathologie</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intolerances">
                        <legend>Intolérance(s) ?</legend>
                        <div className="list_intolerance">
                            <input type="checkbox" id="gluten" name="intolerance" value="gluten" onChange={handleChangeForIntolerance}></input>
                            <label for="gluten">Gluten</label>
                            <input type="checkbox" id="lactose" name="intolerance" value="lactose" onChange={handleChangeForIntolerance}></input>
                            <label for="lactose">Lactose</label>
                            <input type="checkbox" id="tyramine" name="intolerance" value="tyramine" onChange={handleChangeForIntolerance}></input>
                            <label for="tyramine">Tyramine</label>
                            <input type="checkbox" id="histamine" name="intolerance" value="histamine" onChange={handleChangeForIntolerance}></input>
                            <label for="histamine">Histamine</label>
                            <input type="checkbox" id="glutamate" name="intolerance" value="glutamate" onChange={handleChangeForIntolerance}></input>
                            <label for="glutamate">Glutamate</label>
                        </div>
                    </div>
                    <div className="autres_intolerances">
                        <label for="intolerance">Autre intolérance/allergie :</label>
                        <input type="text" id="autre" name="intolerance" onChange={handleChangeForIntolerance} placeholder="Intolérance/allergie"/>
                    </div>
                </div>
            </div>
            {/* Bouton pour valider le formulaire */}
            <div className="card_bottom">
                <input type="submit" value="Valider" className="button_form"></input>
            </div>
        </div>
        </form>
    );
}

export default Card;