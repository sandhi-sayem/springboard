import SpaceTravelApi from "../services/SpaceTravelApi";

export const spacecraftsLoader = async () => {
    const res = await SpaceTravelApi.getSpacecrafts();

    return res.data;
}

export const planetsLoader = async () => {
    const res = await SpaceTravelApi.getPlanets();

    return res;
}

export const spacraftInfoLoader = async (id) => {
    const res = await SpaceTravelApi.getSpacecraftById(id);

    return res;
}


// const Planets = () => {
//     const displayPlanets = async () => {
//         const planets = await space.getPlanets();
//         return planets;
//     };
//     displayPlanets().then((planets) => console.log(planets));
//     return <div>Planets</div>;
// };