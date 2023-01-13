import React from "react";

// import InfoDresseur from "../../components/InfoDresseur/InfoDresseur";
// import Resources from "../../components/Resources/Resources";
// import InfoPokemon from "../../components/InfoPokemon/InfoPokemon"
// import Action from "../../components/Action/Action";
// import Rewards from "../../components/Rewards/Rewards";
import CleanSearch from "../../components/CleanSearch/CleanSearch";

import BgForest from "../../assets/Bg_forest.jpg";

/* Récupérer les données de mon fichier json */
import dataPokemon from "../../DataPokemon.json";

import {
  BgPokedex,
  PokedexContainer,
  HeaderPokedexContainer,
  TitlePokedex,
  FakeBodyPokedexContainer,
  BodyPokedexContainer,
  Region,
  TitleRegion,
  Card,
  SpritePokemon,
} from "./Pokedex.styled";

const Pokedex = () => {
  return (
    <>
      <BgPokedex src={BgForest} alt="" />

      <PokedexContainer>
        <HeaderPokedexContainer>
          <TitlePokedex>
            <h2> Pokédex </h2>
            <p> Attrapés : 12 </p>
          </TitlePokedex>
          <CleanSearch />
        </HeaderPokedexContainer>

        <BodyPokedexContainer>
          <FakeBodyPokedexContainer>
            <Region>
              <TitleRegion> Kanto </TitleRegion>
              {/* Si pokemon capturé alors retiré le cadre */}
              <Card> 001 </Card>
              <Card to={`/Pokemon/${dataPokemon[1].id}`}>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>

              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
            </Region>

            <Region>
              <TitleRegion> Johto </TitleRegion>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>

              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
            </Region>

            <Region>
              <TitleRegion> Hoenn </TitleRegion>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>

              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
              <Card> 001 </Card>
              <Card>
                002
                <SpritePokemon src={dataPokemon[1].cover} alt="" />
              </Card>
            </Region>
          </FakeBodyPokedexContainer>
        </BodyPokedexContainer>
      </PokedexContainer>
    </>
  );
};

export default Pokedex;

// <>
//     <BgPokedex src={BgPrairie} alt=""/>

//     <Gallery>
//         {dataPokemon.map((data) => {
//             return (
//                 <LinkPokemon to={`/Pokemon/${data.id}`}>
//                     <SpritePokeball src={Pokeball} alt=""/>
//                     <SpritePokemon src={data.cover} alt="" />
//                 </LinkPokemon>

//             );
//         })}
//     </Gallery>

// </>
