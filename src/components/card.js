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

    const [error, setError] = React.useState({});

    const handleChange = evt => {
        let value = evt.target.value
        // evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        console.log("On utilise la fonction HandleChange");
        console.log("pour : "+ evt.target.name);
        setState({
            ...state,
            [evt.target.name]: value
        });
        // GESTION DES ERREURS A LA SAISIE
        console.log(evt.target.value.length)
        // Si CHAMPS VIDE
        if (evt.target.value.length <= 0 ){
            console.log("ON AJOUTE UNE ERREUR")
            setError({
                ...error,
                [evt.target.name] : true
            })
        } else if (evt.target.name === "email" && !(evt.target.value.includes('@'))){
            console.log("ON AJOUTE UNE ERREUR")
            setError({
                ...error,
                [evt.target.name] : true
            })
        } else if ((evt.target.name === "age" || evt.target.name === "taille" || evt.target.name === "poids") && isNaN(evt.target.value)){
            console.log("ON AJOUTE UNE ERREUR")
            setError({
                ...error,
                [evt.target.name] : true
            })
        } else {
            setError({
                ...error,
                [evt.target.name] : false
            })
        };
        
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
        console.log("intolerances : "+state.intolerance)
        console.dir(state)
        console.log("Les erreurs : ")
        // if (state.pseudo.length <=0 ) { 
        //     console.log(state.pseudo.length)
        //     console.log("erreur pseudo")
        //     setError({
        //         ...error, 
        //         pseudo : true
        //     })
        // }
        // if (state.pseudo.length <=0 ) { 
        //     console.log(state.age.length)
        //     console.log("erreur age")
        //     setError({
        //         ...error,
        //         age : true,
        //     })
        // }
        console.dir(error)
    };

    return(
        <form onSubmit={handleSubmit}>
        <div className="card">
            {/* Avatar, pseudo et email */}
            <div className="card_top">
                <div className="avatar_frame">
                    <label for="file">
                        <input type="file" name="file" id="file" accept="images/*" className="avatar-input"/>
                        <figure className="avatar-circle">
                            <figcaption className="for_hover_avatar">
                            </figcaption>
                        </figure>
                    </label>
                </div>
                <div className="identity_frame">
                    <div className="input_text_frame">
                        <label for="name">
                            <input type="text" id="name" name="pseudo" placeholder="Pseudo" value={state.pseudo} className={error.pseudo ? "input_text shadow_red" : "input_text"} onChange={handleChange}/>
                        </label>
                        <small className="input_text_error">{error.pseudo ? "Merci de renseigner un Pseudo valide" : null}</small>
                    </div>
                    <div className="input_text_frame">
                        <label for="mail">
                            <input type="email" id="mail" name="email" placeholder="Email" value={state.email} className={error.email ? "input_text shadow_red" : "input_text"} onChange={handleChange}/>
                        </label>
                        <small className="input_text_error">{error.email ? "Merci de renseigner un Email valide" : null}</small>
                    </div>
                </div>
            </div>
            {/* Age, taille, poids, objectifs et intolérances alimentaires */}
            <div className="card_middle">
                <div className="datas_num">
                    <div className='input_num_frame'>
                        <label for="age" className="label_num">Age</label>
                        <input type="text" id="age" name="age" value={state.age} className={error.age ? "input_num shadow_red" : "input_num"} onChange={handleChange}/>
                        <span for="age" className="unity"> Ans</span>
                        <br/><small className="input_num_error">{error.age ? "Merci de renseigner un age valide" : null}</small>
                    </div>
                    <div className='input_num_frame'>
                        <label for="taille" className="label_num">Taille</label>
                        <input type="text" id="taille" name="taille" value={state.taille} className={error.taille ? "input_num shadow_red" : "input_num"} onChange={handleChange}/>
                        <span for="taille" className="unity"> Cm</span>
                        <br/><small className="input_num_error">{error.taille ? "Merci de renseigner une taille valide" : null}</small>
                    </div>
                    <div className='input_num_frame'>
                    <label for="poids" className="label_num">Poids</label>
                        <input type="text" id="poids" name="poids" value={state.poids} className={error.poids ? "input_num shadow_red" : "input_num"} onChange={handleChange}/>
                        <span for="poids" className="unity"> Kg</span>
                        <br/><small className="input_num_error">{error.poids ? "Merci de renseigner un poids valide" : null}</small>
                    </div>
                </div>
                <div className="datas_others">
                    <div className="objectifs">
                        <legend>Quel est votre objectif ?</legend>
                        <div className="div_obj">
                            <div className="div_obj_50">
                                <div className="check_group">
                                    <input type="radio" id="prendre_poids" name="objectif" value={"prendre_poids"} onChange={handleChange} className="radio_margin"/>
                                    <label for="prendre_poids">Prendre du poids</label>
                                </div>
                                <div className="check_group">
                                    <input type="radio" id="perdre_poids" name="objectif" value={"perdre_poids"} onChange={handleChange} className="radio_margin"/>
                                    <label for="perdre_poids">Perdre du poids</label>
                                </div>
                            </div>
                            <div className="div_obj_50">
                                <div className="check_group">
                                    <input type="radio" id="reequilibre" name="objectif" value={"reequilibre"} onChange={handleChange} className="radio_margin"/>
                                    <label for="reequilibre">Réequilibre mon alimentation</label>
                                </div>
                                <div className="check_group">
                                    <input type="radio" id="adapter" name="objectif" value={"adapter"} onChange={handleChange} className="radio_margin"/>
                                    <label for="adapter">Adapter mon alimentation à une pathologie</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intolerances">
                        <div className="first_intolerances">
                            <legend>Intolérance(s) ?</legend>
                            <div className="list_intolerance">
                                <div className="check_group">
                                <input type="checkbox" id="gluten" name="intolerance" value="gluten" onChange={handleChangeForIntolerance} className="radio_margin"></input>
                                <label for="gluten">Gluten</label>
                                </div>
                                <div className="check_group">
                                <input type="checkbox" id="lactose" name="intolerance" value="lactose" onChange={handleChangeForIntolerance} className="radio_margin"></input>
                                <label for="lactose">Lactose</label>
                                </div>
                                <div className="check_group">
                                <input type="checkbox" id="tyramine" name="intolerance" value="tyramine" onChange={handleChangeForIntolerance} className="radio_margin"></input>
                                <label for="tyramine">Tyramine</label>
                                </div>
                                <div className="check_group">
                                <input type="checkbox" id="histamine" name="intolerance" value="histamine" onChange={handleChangeForIntolerance} className="radio_margin"></input>
                                <label for="histamine">Histamine</label>
                                </div>
                                <div className="check_group">
                                <input type="checkbox" id="glutamate" name="intolerance" value="glutamate" onChange={handleChangeForIntolerance} className="radio_margin"></input>
                                <label for="glutamate">Glutamate</label>
                                </div>
                            </div>
                        </div>
                        <div className="autres_intolerances">
                            <label for="intolerance">Autre intolérance/allergie :</label>
                            <input type="text" id="autre" name="intolerance" onChange={handleChangeForIntolerance} className="input_text" placeholder="Intolérance/allergie"/>
                        </div>
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